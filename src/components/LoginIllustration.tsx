import React from 'react';
import Image from 'next/image';

const LoginIllustration = () => {
  return (
    <div className="w-full h-full relative">
      <Image
        src="/images/signin-DHfUrNZ8.webp"
        alt="Login Illustration"
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
  );
};

export default LoginIllustration;