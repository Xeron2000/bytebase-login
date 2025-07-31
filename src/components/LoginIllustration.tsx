import React from 'react';
import Image from 'next/image';

const LoginIllustration = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Image
        src="/images/signin-DHfUrNZ8.webp"
        alt="Login Illustration"
        width={500}
        height={500}
        priority
      />
    </div>
  );
};

export default LoginIllustration;