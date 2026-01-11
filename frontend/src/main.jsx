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
          toastOptions={{
            duration: 4000,
            style: {
              borderRadius: '16px',
              background: '#333',
              color: '#fff',
              fontSize: '14px',
              padding: '12px 24px',
            },
          }} 
        />
      </div>
    </Provider>
  </React.StrictMode>
);
