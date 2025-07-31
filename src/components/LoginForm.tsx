"use client";

import React from 'react';
import { signIn } from "next-auth/react";
import { Input } from './ui/Input';
import { Button } from './ui/Button';
import Logo from './ui/Logo';

const LoginForm = () => {
  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <Logo />
        <p className="text-gray-500 mt-2">Standard</p>
      </div>
      <form>
        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            邮箱 <span className="text-red-500">*</span>
          </label>
          <Input type="email" id="email" placeholder="user@example.com" />
        </div>
        {/* Password Input */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-1">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              密码 <span className="text-red-500">*</span>
            </label>
            <a href="#" className="text-sm text-primary-purple hover:underline">
              忘记密码？
            </a>
          </div>
          <Input type="password" id="password" />
        </div>
        {/* Submit Button */}
        <Button type="submit" className="w-full">
          登录
        </Button>
      </form>
      <div className="my-4 flex items-center">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="flex-shrink mx-4 text-gray-400">Or</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <Button
        variant="outline"
        className="w-full"
        onClick={() => signIn("github")}
      >
        Sign in with GitHub
      </Button>
      <p className="text-center text-sm text-gray-500 mt-6">
        第一次使用 Bytebase？ <a href="#" className="text-primary-purple hover:underline">注册</a>
      </p>
    </div>
  );
};

export default LoginForm;