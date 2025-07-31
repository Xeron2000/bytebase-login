import React from 'react';
import Image from 'next/image';

const LoginIllustration = () => {
  return (
    <div className="w-full h-full relative">
      <Image
        src="https://p.sda1.dev/26/26ee9fdba87c414f8c017e6dea74395e/signin-DHfUrNZ8.webp"
        alt="Login Illustration"
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
  );
};

export default LoginIllustration;