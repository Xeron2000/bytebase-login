import React from 'react';

const Logo = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <div className="flex items-center ">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${basePath}/images/logo-full-B93Z8uvR.svg`}
        alt="Bytebase Logo"
        width={40}
        height={40}
        className="h-45 w-45"
      />
    </div>
  );
};

export default Logo;