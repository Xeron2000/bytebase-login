import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className="flex items-center ">
      <Image
        src="https://raw.githubusercontent.com/Xeron2000/bytebase-login/c5ec1ed3adc79bdd4e53171d1059cb0bfcac9ec1/public/images/logo-full-B93Z8uvR.svg"
        alt="Bytebase Logo"
        width={40}
        height={40}
        className="h-45 w-45"
      />
    </div>
  );
};

export default Logo;