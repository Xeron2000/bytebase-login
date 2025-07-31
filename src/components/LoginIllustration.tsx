import React from 'react';
import Image from 'next/image';

const LoginIllustration = () => {
  return (
    <div className="w-full h-full relative">
      <Image
        src="https://raw.githubusercontent.com/Xeron2000/bytebase-login/refs/heads/main/public/images/signin-DHfUrNZ8.jpg"
        alt="Login Illustration"
        fill
        priority
        className="object-cover"
      />
    </div>
  );
};

export default LoginIllustration;