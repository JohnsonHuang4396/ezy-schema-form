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

function run(command, path) {
  //cmd表示命令，args代表参数，如 rm -rf  rm就是命令，-rf就为参数
  const [cmd, ...args] = command.split(' ')
  return new Promise((resolve, reject) => {
    const app = spawn(cmd, args, {
      cwd: path, //执行命令的路径
      stdio: 'inherit', //输出共享给父进程
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

    files.forEach(async file => {
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
    })

    if (path !== `${pkgPath}/dist`) fs.rmdirSync(path)
  }
}

async function buildStyle() {
  return gulp
    .src(`${componentsPath}/**/style/**.scss`)
    .pipe(sass())
    .pipe(autoPrefixer())
    .pipe(gulp.dest(`${pkgPath}/dist/es`))
}

async function buildComponents() {
  run('pnpm -w run build', componentsPath)
}

export default gulp.series(
  async () => delPath(`${pkgPath}/dist`),
  gulp.parallel(
    async () => buildStyle(),
    async () => buildComponents()
  )
)
