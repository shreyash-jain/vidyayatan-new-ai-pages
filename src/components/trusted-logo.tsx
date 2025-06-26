"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface TrustedLogoProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export const TrustedLogo = ({ 
  src, 
  alt, 
  width = 112, 
  height = 56, 
  className = "h-10 md:h-14 w-auto object-contain" 
}: TrustedLogoProps) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [useNextImage, setUseNextImage] = useState(true);

  // Test if the image is accessible before trying to load it
  useEffect(() => {
    const testImage = new window.Image();
    testImage.onload = () => {
      setIsLoading(false);
    };
    testImage.onerror = () => {
      console.warn(`Image not accessible: ${src}`);
      setImageError(true);
      setIsLoading(false);
    };
    testImage.src = src;
  }, [src]);

  // If image failed to load or Next.js Image has issues, use regular img tag
  if (imageError || !useNextImage) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        onError={(e) => {
          console.error(`Failed to load image: ${src}`);
          // Hide the image if it fails to load
          e.currentTarget.style.display = 'none';
        }}
        style={{ 
          width: 'auto', 
          height: '40px', 
          maxWidth: '112px',
          filter: 'grayscale(30%)',
          display: imageError ? 'none' : 'block'
        }}
      />
    );
  }

  return (
    <div className="relative">
      {isLoading && (
        <div 
          className={`${className} bg-gray-200 animate-pulse rounded`}
          style={{ width: '112px', height: '40px' }}
        />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onError={() => {
          console.error(`Next.js Image failed to load: ${src}, falling back to regular img`);
          setUseNextImage(false);
        }}
        onLoad={() => setIsLoading(false)}
        priority={false}
        loading="lazy"
        unoptimized={true}
      />
    </div>
  );
}; 