import React from 'react';
import { storeConfig } from '../config/store';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-11 w-auto" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-10 h-10 flex-shrink-0 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-zinc-950 font-black shadow-lg shadow-yellow-500/20 rounded-xl p-1.5 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <path d="M30 20 C20 30 20 50 35 60 L75 100 L95 80 L55 40 C60 25 40 10 30 20 Z" fill="none" stroke="currentColor" strokeWidth="6" /><circle cx="80" cy="85" r="4" fill="currentColor" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="font-extrabold text-base sm:text-lg tracking-tight leading-tight">
          {storeConfig.storeNameAr}
        </span>
        <span className="text-[10px] opacity-75 font-medium">
          {storeConfig.companyNameAr}
        </span>
      </div>
    </div>
  );
};
