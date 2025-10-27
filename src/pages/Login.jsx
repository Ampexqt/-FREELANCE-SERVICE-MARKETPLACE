import React from 'react'

export function Login() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-[#1A1A2E] mb-8">Welcome Back</h1>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-[#2C3E50] mb-2">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A1A2E] focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#2C3E50] mb-2">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A1A2E] focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-[#1A1A2E] to-[#0F3460] text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}