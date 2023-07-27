import fs from 'fs'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'
import gulp from 'gulp'
import autoPrefixer from 'gulp-autoprefixer'
import { spawn } from 'child_process'
import { resolve, dirname } from 'path'

const sass = gulpSass(dartSass)

const __filename = new URL(import.meta.url).pathname
const __dirname = dirname(__filename)

export const componentsPath = resolve(__dirname, '../packages/core/components')
export const pkgPath = resolve(__dirname, '../packages/core')

const stayFile = ['package.json', 'README.md']

export function run(command, path) {
  const [cmd, ...args] = command.split(' ')
  return new Promise((resolve, reject) => {
    const app = spawn(cmd, args, {
      cwd: path,
      stdio: 'inherit',
      shell: true //mac不需要开启，windows下git base需要开启支持
    })
    //执行完毕关闭并resolve
    app.on('close', resolve)
  })
}

export const delPath = async path => {
  let files = []

  if (fs.existsSync(path)) {
    files = fs.readdirSync(path)

    for (const file of files) {
      let curPath = resolve(path, file)

      if (fs.statSync(curPath).isDirectory()) {
        // recurse
        await delPath(curPath)
      } else {
        // delete file
        if (!stayFile.includes(file)) {
          fs.unlinkSync(curPath)
        }
      }
    }
  } else return
  if (path !== `${pkgPath}/es` || path !== `${pkgPath}/lib`) fs.rmdirSync(path)
}

async function buildStyle() {
  return gulp
    .src(`${pkgPath}/components/**/style/**.scss`)
    .pipe(sass())
    .pipe(autoPrefixer())
    .pipe(gulp.dest(`${pkgPath}/es/components`))
    .pipe(gulp.dest(`${pkgPath}/lib/components`))
}

async function buildComponents() {
  await run(`pnpm -w build`, pkgPath)
  await buildStyle()
}

export default gulp.series(
  async () => delPath(`${pkgPath}/es`),
  async () => delPath(`${pkgPath}/lib`),
  async () => buildComponents()
)
