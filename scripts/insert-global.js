import { pkgPath } from './rebuild-dist.js'
import { copyFile } from 'fs'
import { resolve } from 'path'

// 源文件路径
const sourcePath = resolve(pkgPath, '.', 'global.d.ts')
// 目标文件路径
const targetPath = resolve(pkgPath, 'es', 'global.d.ts')

// 复制文件
export function copyGlobal() {
  copyFile(sourcePath, targetPath, err => {
    if (err) {
      console.error('Failed to copy global.d.ts:', err)
    } else {
      console.log('global.d.ts has been copied successfully.')
    }
  })
}
