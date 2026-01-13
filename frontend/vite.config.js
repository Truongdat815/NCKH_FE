import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'redux-vendor': ['@reduxjs/toolkit', 'react-redux'],
          'ui-vendor': ['@headlessui/react', '@heroicons/react'],
          'chart-vendor': ['recharts'],
          'utils-vendor': ['axios', 'dayjs', 'react-hot-toast'],
          // Feature chunks
          'dashboard': [
            './src/features/dashboard/admin/AdminDashboard',
            './src/features/dashboard/enterprise/EnterpriseDashboard',
            './src/features/dashboard/farmer/FarmerDashboard',
            './src/features/dashboard/engineer/EngineerDashboard',
            './src/features/dashboard/consumer/ConsumerDashboard',
          ],
          'marketplace': [
            './src/features/marketplace/pages/MarketplacePage',
            './src/features/marketplace/pages/ProductDetailPage',
            './src/features/marketplace/pages/CartPage',
            './src/features/marketplace/pages/CheckoutPage',
          ],
          'ai-service': [
            './src/features/ai-service/pages/AIChatPage',
            './src/features/ai-service/pages/AIAnalysisPage',
            './src/features/ai-service/utils/knowledgeBase',
          ],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
})

