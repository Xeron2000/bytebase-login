import React from 'react';

const LoginIllustration = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <div className="w-full h-full relative">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${basePath}/images/signin-DHfUrNZ8.jpg`}
        alt="Login Illustration"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default LoginIllustration;