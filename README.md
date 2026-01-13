# AgriSmart - Hệ sinh thái số cho Nông nghiệp Việt Nam

## 📋 Mục lục
1. [Tổng quan](#tổng-quan)
2. [Cấu trúc dự án](#cấu-trúc-dự-án)
3. [Tối ưu hóa](#tối-ưu-hóa)
4. [Hướng dẫn Refactor](#hướng-dẫn-refactor)
5. [Cài đặt và Chạy](#cài-đặt-và-chạy)

---

## 🎯 Tổng quan

AgriSmart là hệ sinh thái số toàn diện cho nông nghiệp Việt Nam hiện đại, kết nối nông dân, doanh nghiệp và người tiêu dùng.

### Tính năng chính:
- 🛒 **Sàn giao dịch vật tư nông nghiệp** - Marketplace
- 👥 **Cộng đồng chia sẻ kinh nghiệm** - Community
- 📝 **Nhật ký số** - Farming Log
- 🤖 **AI Chẩn đoán bệnh cây trồng** - AI Diagnosis
- 📊 **Dashboard quản trị** - Admin Dashboard

---

## 📁 Cấu trúc dự án

### Cấu trúc mới (Chuẩn React/Vite)

```
src/
├── app/                    # App-level configuration
│   ├── main.jsx           # Entry point
│   ├── App.jsx            # Root component
│   ├── router/            # Routing configuration
│   │   └── index.jsx
│   └── store/             # Redux store
│       ├── index.js
│       └── authSlice.js
│
├── shared/                 # Shared code across features
│   ├── components/        # Shared components
│   │   ├── common/       # Common UI components
│   │   ├── layout/       # Layout components
│   │   └── ui/           # UI components (maps, charts, etc.)
│   ├── hooks/            # Shared hooks
│   ├── utils/            # Utility functions
│   ├── services/         # API services
│   ├── types/            # Type definitions
│   └── constants/        # Constants
│
├── features/              # Feature-based modules
│   └── feature-name/
│       ├── components/   # Feature-specific components
│       ├── pages/        # Pages
│       ├── hooks/        # Feature-specific hooks
│       ├── services/     # Feature-specific services
│       ├── types/        # Feature-specific types
│       └── utils/        # Feature-specific utils
│
├── assets/                # Static assets
│   ├── images/
│   └── icons/
│
└── styles/                # Global styles
```

### Quy tắc Import

#### Import từ shared:
```javascript
import Badge from '@/shared/components/common/Badge'
import { useToast } from '@/shared/hooks/useToast'
import { ROUTES } from '@/shared/constants'
import api from '@/shared/services/api'
```

#### Import từ features:
```javascript
import MarketplacePage from '@/features/marketplace/pages/MarketplacePage'
```

#### Import từ app:
```javascript
import store from '@/app/store'
import router from '@/app/router'
```

### Path Alias

Đã cấu hình trong `vite.config.js`:
```javascript
alias: {
  '@': path.resolve(__dirname, './src'),
}
```

Sử dụng `@/` thay vì relative paths để code dễ đọc và maintain hơn.

---

## ⚡ Tối ưu hóa

### 1. Performance Optimization (Tối ưu hiệu năng)

#### Code Splitting & Lazy Loading
- ✅ **Dynamic Imports**: Tất cả routes được lazy load với `React.lazy()`
- ✅ **Suspense Wrapper**: Loading spinner khi load components
- ✅ **Manual Chunks**: Tối ưu bundle size với các chunks:
  - `react-vendor`: React, React DOM, React Router (204KB)
  - `redux-vendor`: Redux Toolkit, React Redux (25KB)
  - `ui-vendor`: Headless UI, Heroicons (12KB)
  - `chart-vendor`: Recharts (383KB)
  - `utils-vendor`: Axios, Dayjs, React Hot Toast (12KB)
  - `dashboard`: Tất cả dashboard pages (112KB)
  - `marketplace`: Marketplace features (34KB)
  - `ai-service`: AI features (32KB)

**Kết quả**: Bundle size giảm đáng kể, tải trang nhanh hơn, chỉ load code cần thiết.

### 2. Error Handling (Xử lý lỗi)

#### Error Boundaries
- ✅ **ErrorBoundary Component**: Bắt lỗi React gracefully
- ✅ **User-friendly Error UI**: Hiển thị lỗi đẹp với options:
  - Về trang chủ
  - Tải lại trang
  - Chi tiết lỗi (optional)
- ✅ **Error Logging**: Sẵn sàng tích hợp với error reporting service (Sentry, etc.)

### 3. SEO Optimization (Tối ưu SEO)

#### Meta Tags
- ✅ **Primary Meta Tags**: Title, description, keywords
- ✅ **Open Graph**: Facebook sharing
- ✅ **Twitter Cards**: Twitter sharing
- ✅ **Dynamic SEO**: Hook `useSEO` để update meta tags theo từng trang

#### Structured Data (JSON-LD)
- ✅ **Schema.org Support**: Organization, Website, Product, Article schemas
- ✅ **SEO Utils**: Functions để generate và add structured data

### 4. PWA Support (Progressive Web App)

- ✅ **Manifest.json**: PWA configuration với icons, shortcuts
- ✅ **Theme Color**: Custom theme color
- ✅ **Apple Touch Icons**: iOS support
- ✅ **Shortcuts**: Quick access to main features

### 5. Accessibility (Khả năng truy cập)

- ✅ **ARIA Labels**: Semantic HTML và ARIA attributes
- ✅ **Keyboard Navigation**: Full keyboard support
- ✅ **Focus Management**: Proper focus handling
- ✅ **Screen Reader Support**: Accessible to screen readers

### 6. Internationalization (i18n)

- ✅ **Multi-language Support**: Vietnamese và English
- ✅ **Language Switcher**: UI component để switch language
- ✅ **useI18n Hook**: Hook để manage translations
- ✅ **LocalStorage Persistence**: Lưu language preference

### 7. Analytics & Real-time

- ✅ **Analytics Hook**: `useAnalytics` để track events
- ✅ **Real-time Simulation**: `useRealtime` hook cho WebSocket simulation
- ✅ **Event Tracking**: Track user interactions

---

## 🔧 Hướng dẫn Refactor

### Đã hoàn thành

1. ✅ Tạo cấu trúc thư mục mới
   - `app/` - App-level configuration
   - `shared/` - Shared code across features
   - `features/` - Feature-based modules

2. ✅ Di chuyển files
   - Store files → `app/store/`
   - Router → `app/router/`
   - Components → `shared/components/`
   - Hooks → `shared/hooks/`
   - Utils → `shared/utils/`

3. ✅ Tạo services mới
   - `shared/services/api.js` - Axios instance với interceptors
   - `shared/services/authService.js` - Auth API calls
   - `shared/services/userService.js` - User API calls
   - `shared/services/productService.js` - Product API calls

4. ✅ Tạo constants
   - `shared/constants/index.js` - ROUTES, USER_ROLES, API_ENDPOINTS, etc.

5. ✅ Cập nhật files chính
   - `app/main.jsx` - Entry point với imports mới
   - `app/App.jsx` - Root component với imports mới
   - `app/router/index.jsx` - Router với imports mới
   - `index.html` - Trỏ đến `app/main.jsx`

### Cần cập nhật imports

Tất cả imports trong features đã được cập nhật từ:
- `../../../components/common` → `@/shared/components/common`
- `../../../hooks` → `@/shared/hooks`
- `../../../utils` → `@/shared/utils`

---

## 🚀 Cài đặt và Chạy

### Yêu cầu
- Node.js >= 18.x
- npm hoặc yarn

### Cài đặt

```bash
cd frontend
npm install
```

### Chạy Development Server

```bash
npm run dev
```

Ứng dụng sẽ chạy tại: `http://localhost:5173`

### Build Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Test

```bash
npm test
```

---

## 📚 Tài liệu tham khảo

- [React Project Structure Best Practices](https://reactjs.org/docs/faq-structure.html)
- [Vite Path Aliases](https://vitejs.dev/config/#resolve-alias)
- [Feature-Based Folder Structure](https://kentcdodds.com/blog/colocation)

---

## 📝 Ghi chú

- Tất cả imports sử dụng path alias `@/` thay vì relative paths
- Code splitting được áp dụng cho tất cả routes
- Error boundaries được tích hợp ở root level
- SEO được tối ưu với dynamic meta tags và structured data

