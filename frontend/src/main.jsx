import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import './index.css';
import router from './router';
import store from './store';

// Đảm bảo CSS Tailwind được áp dụng ngay cả khi build chậm
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="antialiased text-gray-900 bg-gray-50/50 min-h-screen">
        <RouterProvider router={router} />
        <Toaster 
          position="top-right"
          containerClassName="mt-16"
          toastOptions={{
            duration: 3000,
            style: {
              borderRadius: '16px',
              background: '#fff',
              color: '#1e293b',
              fontSize: '14px',
              padding: '16px 20px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
              border: '1px solid #e5e7eb',
              fontWeight: '600',
            },
            success: {
              iconTheme: {
                primary: '#10b981',
                secondary: '#fff',
              },
              style: {
                background: '#f0fdf4',
                color: '#065f46',
                borderColor: '#86efac',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
              style: {
                background: '#fef2f2',
                color: '#991b1b',
                borderColor: '#fca5a5',
              },
            },
          }} 
        />
      </div>
    </Provider>
  </React.StrictMode>
);
