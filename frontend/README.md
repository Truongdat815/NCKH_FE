# AgriSmart Frontend

Hệ sinh thái số toàn diện cho nông nghiệp Việt Nam hiện đại.

## 📁 Cấu Trúc Dự Án

Xem chi tiết trong [STRUCTURE.md](./STRUCTURE.md)

### Cấu trúc chính:
- `app/` - App-level configuration (router, store, main entry)
- `shared/` - Shared code across features (components, hooks, services, utils)
- `features/` - Feature-based modules (auth, marketplace, dashboard, etc.)
- `assets/` - Global assets (images, fonts)
- `styles/` - Global styles

## 🚀 Quick Start

### Cài đặt
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Preview Production
```bash
npm run preview
```

## 📋 Quy Tắc Import

### Path Alias
Tất cả imports sử dụng `@/` thay vì relative paths:

```javascript
// ✅ Đúng
import Badge from '@/shared/components/common/Badge'
import { useToast } from '@/shared/hooks/useToast'
import { useCart } from '@/features/marketplace/hooks/useCart'

// ❌ Sai
import Badge from '../../../shared/components/common/Badge'
```

### Import từ shared
```javascript
import Badge from '@/shared/components/common/Badge'
import { useToast } from '@/shared/hooks/useToast'
import { ROUTES } from '@/shared/constants'
import api from '@/shared/services/api'
```

### Import từ features
```javascript
// Trong cùng feature
import { useCart } from '../hooks/useCart'
import { formatPrice } from '../utils'
import productService from '../services/productService'

// Từ feature khác
import { useAuth } from '@/features/auth/hooks/useAuth'
```

## 🎯 Cấu Trúc Feature

Mỗi feature phải có cấu trúc đầy đủ:

```
feature-name/
├── components/      # Feature-specific components
├── pages/          # Pages (routes)
├── hooks/          # Feature-specific hooks
├── services/       # Feature-specific API calls
├── types/          # Feature-specific types
└── utils/          # Feature-specific utilities
```

## 📚 Tài Liệu

- [STRUCTURE.md](./STRUCTURE.md) - Cấu trúc chi tiết
- [REFACTOR_SUMMARY.md](./REFACTOR_SUMMARY.md) - Tóm tắt refactor

## ✅ Đã Hoàn Thành

- ✅ Cấu trúc project chuẩn React/Vite
- ✅ Feature-based organization
- ✅ Path aliases (`@/`)
- ✅ Code splitting & lazy loading
- ✅ Redux store tổ chức trong slices/
- ✅ Shared components, hooks, services
- ✅ Types và constants

## 🔧 Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run preview` - Preview production build
- `npm test` - Run tests
- `node refactor.js` - Refactor script (nếu cần)

## 📝 Ghi Chú

- Không động vào `src-template/` (code mẫu)
- Tất cả code trong `src/` được tổ chức theo cấu trúc chuẩn
- Build output trong `dist/` (tự động tạo)

