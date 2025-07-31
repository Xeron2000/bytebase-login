import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className="flex items-center ">
      <Image
        src="/images/logo-full-B93Z8uvR.svg"
        alt="Bytebase Logo"
        width={40}
        height={40}
        className="h-45 w-45"
      />
    </div>
  );
};

export default Logo;