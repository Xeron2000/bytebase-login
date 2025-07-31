import React from 'react';
import { Github } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Github className="h-8 w-8" />
      <span className="text-2xl font-semibold text-gray-800">Bytebase</span>
    </div>
  );
};

export default Logo;