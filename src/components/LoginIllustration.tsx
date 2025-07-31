import React from 'react';
import Image from 'next/image';

const LoginIllustration = () => {
  return (
    <div className="w-full h-full relative">
      <Image
        src="/images/signin-DHfUrNZ8.jpg"
        alt="Login Illustration"
        fill
        priority
        className="object-cover"
      />
    </div>
  );
};

export default LoginIllustration;