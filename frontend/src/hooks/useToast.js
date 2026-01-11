import { toast } from 'react-hot-toast'

export const useToast = () => {
  const showSuccess = (message) => {
    toast.success(message, {
      duration: 3000,
      position: 'top-right',
      style: {
        background: '#10b981',
        color: '#fff',
        borderRadius: '12px',
        padding: '16px',
        fontSize: '14px',
        fontWeight: 'bold',
      },
      iconTheme: {
        primary: '#fff',
        secondary: '#10b981',
      },
    })
  }

  const showError = (message) => {
    toast.error(message, {
      duration: 4000,
      position: 'top-right',
      style: {
        background: '#ef4444',
        color: '#fff',
        borderRadius: '12px',
        padding: '16px',
        fontSize: '14px',
        fontWeight: 'bold',
      },
    })
  }

  const showInfo = (message) => {
    toast(message, {
      duration: 3000,
      position: 'top-right',
      icon: 'ℹ️',
      style: {
        background: '#3b82f6',
        color: '#fff',
        borderRadius: '12px',
        padding: '16px',
        fontSize: '14px',
        fontWeight: 'bold',
      },
    })
  }

  return { showSuccess, showError, showInfo }
}

