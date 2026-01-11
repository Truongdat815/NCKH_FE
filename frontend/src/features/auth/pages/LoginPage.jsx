import React from 'react'
import { Link } from 'react-router-dom'
import { LockClosedIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import PageTransition from '../../../components/common/PageTransition'

const LoginPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-10 bg-white p-12 rounded-[40px] shadow-2xl border border-gray-100">
          <div className="text-center">
            <div className="mx-auto h-16 w-16 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-emerald-200 mb-6">
              <span className="text-3xl">🌾</span>
            </div>
            <h2 className="text-4xl font-[900] text-gray-900 tracking-tighter font-lexend">
              Chào mừng trở lại!
            </h2>
            <p className="mt-3 text-sm text-gray-400 font-bold uppercase tracking-widest">
              Hoặc{' '}
              <Link to="/register" className="text-emerald-600 hover:underline">
                đăng ký tài khoản mới
              </Link>
            </p>
          </div>
          <form className="mt-10 space-y-6" action="#" method="POST">
            <div className="space-y-4">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <EnvelopeIcon className="h-5 w-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
                </div>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-2xl relative block w-full pl-12 px-4 py-4 border border-gray-100 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all sm:text-sm bg-gray-50/50 font-medium"
                  placeholder="Địa chỉ Email"
                />
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <LockClosedIcon className="h-5 w-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-2xl relative block w-full pl-12 px-4 py-4 border border-gray-100 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all sm:text-sm bg-gray-50/50 font-medium"
                  placeholder="Mật khẩu"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded-lg"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm font-bold text-gray-500">
                  Ghi nhớ đăng nhập
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-bold text-emerald-600 hover:underline">
                  Quên mật khẩu?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-black rounded-2xl text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all shadow-xl shadow-emerald-100 uppercase tracking-widest font-lexend"
            >
              Đăng nhập ngay
            </button>
          </form>
        </div>
      </div>
    </PageTransition>
  )
}

export default LoginPage
