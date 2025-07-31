"use client";

import React, { useState } from 'react';
import { Input } from './ui/Input';
import { Button } from './ui/Button';
import Logo from './ui/Logo';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-sm rounded-lg">
      <div className="flex justify-center items-center -mt-20">
        <Logo />
      </div>
      <div className="border-1 border-gray-200 p-6 rounded-lg bg-white -mt-10">
      <div className="mb-6 ">
        <button className="text-sm font-medium text-indigo-500 border-b-2">
          Standard
        </button>
      </div>

      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            邮箱 <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Input type="email" id="email" placeholder="e.g. sam@example.com" className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-purple" />
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between items-baseline mb-1">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              密码 <span className="text-red-500">*</span>
            </label>
            <a href="#" className="text-sm text-gray-500 hover:underline">
              忘记密码?
            </a>
          </div>
          <div className="relative">
            <Input type={showPassword ? "text" : "password"} id="password" className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-purple" />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showPassword ? (
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.478 0-8.268-2.943-9.542-7z" />
                </svg>
              ) : (
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        <Button type="submit" className="w-full bg-[#a6a1f1] text-white font-semibold py-2 px-4 rounded-md transition-colors">
          登录
        </Button>
      </form>

      <div className="flex items-center my-6">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-sm text-gray-500">OR</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <Button
        variant="outline"
        className="w-full"
        onClick={() => {
          const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_API_URL}/api/auth/github/callback&scope=read:user,user:email`;
          window.location.href = githubAuthUrl;
        }}
      >
        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
            clipRule="evenodd"
          />
        </svg>
        Continue with GitHub
      </Button>
      
      <p className="text-center text-sm text-gray-500 mt-6">
        第一次使用 Bytebase?<a href="#" className="text-indigo-500 hover:underline">注册</a>
      </p>
    </div>
    </div>
  );
};

export default LoginForm;
