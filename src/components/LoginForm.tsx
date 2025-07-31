"use client";

import React from 'react';
import { Input } from './ui/Input';
import { Button } from './ui/Button';
import Logo from './ui/Logo';

const LoginForm = () => {
  return (
    <div className="w-full max-w-sm">
      <div className="text-center mb-10">
        <Logo />
      </div>
      
      <div className="mb-6 border-b border-gray-200">
        <button className="px-4 py-2 text-sm font-medium text-primary-purple border-b-2 border-primary-purple">
          Standard
        </button>
      </div>

      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            邮箱 <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Input type="email" id="email" defaultValue="jim@example.com" className="w-full px-4 py-2 border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-purple" />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-purple-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 7a1 1 0 112 0v6a1 1 0 11-2 0V7zm1-4a1 1 0 011 1v.01a1 1 0 11-2 0V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between items-baseline mb-1">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              密码 <span className="text-red-500">*</span>
            </label>
            <a href="#" className="text-sm text-gray-500 hover:underline">
              忘记密码？
            </a>
          </div>
          <div className="relative">
            <Input type="password" id="password" className="w-full px-4 py-2 border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-purple" />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
              </svg>
            </div>
          </div>
        </div>
        
        <Button type="submit" className="w-full bg-primary-purple hover:bg-deep-purple text-white">
          登录
        </Button>
      </form>
      
      <p className="text-center text-sm text-gray-500 mt-6">
        第一次使用 Bytebase？ <a href="#" className="text-primary-purple hover:underline">注册</a>
      </p>
    </div>
  );
};

export default LoginForm;