import fs from 'fs'
import { run, pkgPath } from './rebuild-dist.js'

function insertESStyle(path) {
  // 读取构建输出文件内容
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      console.error('Failed to read build file:', err)
      return
    }

    const updatedData = `import "./index.css";\n${data}`

    // 将更新后的内容写回文件
    fs.writeFile(path, updatedData, 'utf-8', writeErr => {
      if (writeErr) {
        console.error('Failed to write build file:', writeErr)
        return
      }

      console.log('Build file updated successfully!')
    })
  })
}

await run('pnpm -w build', pkgPath)

insertESStyle(`${pkgPath}/es/index.mjs`)
