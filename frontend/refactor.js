#!/usr/bin/env node

/**
 * Script tự động refactor cấu trúc project
 * Chạy: node refactor.js
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const SRC_DIR = path.join(__dirname, 'src')

// Files/thư mục cần xóa (trùng lặp hoặc rỗng)
const FILES_TO_DELETE = [
  'src/App.jsx',
  'src/main.jsx',
  'src/router',
  'src/store',
  'src/components',
  'src/hooks',
  'src/utils',
  'src/ui',
]

// Thư mục cần tạo
const DIRS_TO_CREATE = [
  'src/assets/images',
  'src/assets/fonts',
  'src/styles',
  'src/app/store/slices',
]

console.log('🚀 Bắt đầu refactor project...\n')

// 1. Xóa files trùng lặp
console.log('📁 Xóa files trùng lặp...')
FILES_TO_DELETE.forEach(item => {
  const fullPath = path.join(__dirname, item)
  if (fs.existsSync(fullPath)) {
    try {
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {
        fs.rmSync(fullPath, { recursive: true, force: true })
        console.log(`  ✓ Đã xóa thư mục: ${item}`)
      } else {
        fs.unlinkSync(fullPath)
        console.log(`  ✓ Đã xóa file: ${item}`)
      }
    } catch (error) {
      console.log(`  ✗ Lỗi khi xóa ${item}:`, error.message)
    }
  }
})

// 2. Tạo thư mục mới
console.log('\n📁 Tạo thư mục mới...')
DIRS_TO_CREATE.forEach(dir => {
  const fullPath = path.join(__dirname, dir)
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true })
    console.log(`  ✓ Đã tạo: ${dir}`)
  }
})

// 3. Di chuyển Redux slices
console.log('\n🔄 Di chuyển Redux slices...')
const slicesDir = path.join(__dirname, 'src/app/store/slices')
const authSlicePath = path.join(__dirname, 'src/app/store/authSlice.js')
if (fs.existsSync(authSlicePath)) {
  const newPath = path.join(slicesDir, 'authSlice.js')
  if (!fs.existsSync(newPath)) {
    fs.copyFileSync(authSlicePath, newPath)
    fs.unlinkSync(authSlicePath)
    console.log('  ✓ Đã di chuyển authSlice.js vào slices/')
  }
}

// 4. Tạo file index cho slices
const slicesIndexPath = path.join(slicesDir, 'index.js')
if (!fs.existsSync(slicesIndexPath)) {
  const content = `// Redux Slices
export { default as authSlice } from './authSlice'
`
  fs.writeFileSync(slicesIndexPath, content)
  console.log('  ✓ Đã tạo slices/index.js')
}

// 5. Cập nhật store/index.js
console.log('\n📝 Cập nhật store/index.js...')
const storeIndexPath = path.join(__dirname, 'src/app/store/index.js')
if (fs.existsSync(storeIndexPath)) {
  let content = fs.readFileSync(storeIndexPath, 'utf8')
  // Thay đổi import từ './authSlice' thành './slices/authSlice'
  content = content.replace(/from ['"]\.\/authSlice['"]/g, "from './slices/authSlice'")
  content = content.replace(/from ['"]\.\/slices\/authSlice['"]/g, "from './slices/authSlice'")
  fs.writeFileSync(storeIndexPath, content)
  console.log('  ✓ Đã cập nhật imports trong store/index.js')
}

console.log('\n✅ Refactor hoàn tất!')
console.log('\n📋 Các bước tiếp theo:')
console.log('  1. Kiểm tra và cập nhật imports trong các files')
console.log('  2. Tổ chức lại features với cấu trúc đầy đủ')
console.log('  3. Chạy: npm run build để kiểm tra lỗi')

