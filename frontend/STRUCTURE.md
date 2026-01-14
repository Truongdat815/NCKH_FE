# Cấu Trúc Dự Án AgriSmart

## 📁 Cấu trúc thư mục

```
frontend/src/
├── app/                          # App-level configuration
│   ├── main.jsx                 # Entry point
│   ├── App.jsx                  # Root component
│   ├── router/                  # Routing configuration
│   │   └── index.jsx
│   └── store/                   # Redux store
│       ├── index.js
│       └── slices/              # Redux slices
│           ├── authSlice.js
│           └── index.js
│
├── shared/                       # Shared code across features
│   ├── components/              # Shared components
│   │   ├── common/             # Common UI components
│   │   │   ├── Badge.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   └── ...
│   │   ├── layout/             # Layout components
│   │   │   ├── Navbar.jsx
│   │   │   ├── AdminNavbar.jsx
│   │   │   └── EnterpriseNavbar.jsx
│   │   └── ui/                 # UI components
│   │       └── EpidemicMap.jsx
│   ├── hooks/                   # Shared hooks
│   │   ├── useToast.js
│   │   ├── useI18n.js
│   │   ├── useSEO.js
│   │   └── useAnalytics.js
│   ├── services/               # API services
│   │   ├── api.js              # Axios instance
│   │   ├── authService.js
│   │   ├── productService.js
│   │   └── userService.js
│   ├── utils/                  # Utility functions
│   │   ├── i18n.js
│   │   ├── seo.js
│   │   └── realtime.js
│   ├── types/                  # Type definitions
│   │   └── index.js
│   └── constants/              # Constants
│       └── index.js
│
├── features/                    # Feature-based modules
│   ├── auth/                   # Authentication feature
│   │   ├── components/        # Auth-specific components
│   │   ├── pages/              # LoginPage, RegisterPage
│   │   ├── hooks/              # useAuth, etc.
│   │   ├── services/           # authService
│   │   ├── types/              # Auth types
│   │   └── utils/              # Auth utils
│   │
│   ├── marketplace/            # Marketplace feature
│   │   ├── components/         # ProductCard, CartItem, etc.
│   │   ├── pages/              # MarketplacePage, ProductDetailPage
│   │   ├── hooks/              # useCart, useProducts
│   │   ├── services/           # productService, orderService
│   │   ├── types/              # Product, Order types
│   │   └── utils/              # formatPrice, filterProducts
│   │
│   ├── dashboard/             # Dashboard feature
│   │   ├── admin/             # Admin dashboard
│   │   │   ├── components/
│   │   │   ├── pages/         # AdminDashboard, UsersManagement
│   │   │   ├── hooks/
│   │   │   └── services/
│   │   ├── enterprise/        # Enterprise dashboard
│   │   ├── farmer/            # Farmer dashboard
│   │   ├── engineer/          # Engineer dashboard
│   │   └── consumer/         # Consumer dashboard
│   │
│   ├── ai-service/            # AI Service feature
│   │   ├── components/
│   │   ├── pages/             # AIAnalysisPage, AIChatPage
│   │   ├── hooks/
│   │   ├── services/
│   │   └── utils/             # knowledgeBase.js
│   │
│   └── [other-features]/      # Tất cả đều theo cấu trúc này
│
├── assets/                     # Global assets
│   ├── images/
│   └── fonts/
│
└── styles/                     # Global styles
    └── index.css
```

## 📋 Quy tắc Import

### Import từ shared:
```javascript
import Badge from '@/shared/components/common/Badge'
import { useToast } from '@/shared/hooks/useToast'
import { ROUTES } from '@/shared/constants'
import api from '@/shared/services/api'
```

### Import từ features:
```javascript
// Trong cùng feature
import { useCart } from '../hooks/useCart'
import { formatPrice } from '../utils'
import productService from '../services/productService'

// Từ feature khác
import { useAuth } from '@/features/auth/hooks/useAuth'
```

### Import từ app:
```javascript
import store from '@/app/store'
import router from '@/app/router'
```

## 🎯 Cấu trúc Feature chuẩn

Mỗi feature phải có cấu trúc đầy đủ:

```
feature-name/
├── components/      # Feature-specific components
├── pages/          # Pages (routes)
├── hooks/          # Feature-specific hooks
├── services/        # Feature-specific API calls
├── types/          # Feature-specific types
└── utils/          # Feature-specific utilities
```

## ✅ Đã hoàn thành

- ✅ Xóa files trùng lặp
- ✅ Tổ chức Redux store vào slices/
- ✅ Tạo assets/ và styles/ folders
- ✅ Tạo cấu trúc đầy đủ cho features
- ✅ Tạo types, utils, services, hooks cho marketplace và auth

## 📝 Ghi chú

- Tất cả imports sử dụng path alias `@/` thay vì relative paths
- Code splitting được áp dụng cho tất cả routes
- Mỗi feature độc lập và có thể tái sử dụng

