import fs from 'fs'
import { fileURLToPath } from 'url'
import { exec } from 'child_process'
import { resolve, dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

export const componentsPath = resolve(__dirname, '../packages/core/components')
export const pkgPath = resolve(__dirname, '../packages/core')

const stayFile = ['package.json', 'README.md']

export function run(command, path) {
  return new Promise((resolve, reject) => {
    const childProcess = exec(`${path} ${command}`)

    childProcess.on('close', resolve)
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
