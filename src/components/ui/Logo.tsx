import React from 'react';
import { GraduationCap } from 'lucide-react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  showText = true, 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl'
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="relative">
        {/* Background circle with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full opacity-10"></div>
        
        {/* Icon with gradient background */}
        <div className={`relative ${sizeClasses[size]} bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center`}>
          <GraduationCap 
            className={`${size === 'sm' ? 'h-3 w-3' : size === 'md' ? 'h-4 w-4' : 'h-6 w-6'} text-white`} 
          />
        </div>
      </div>
      
      {showText && (
        <span className={`font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent ${textSizeClasses[size]}`}>
          BildungVisa
        </span>
      )}
    </div>
  );
};

export default Logo;