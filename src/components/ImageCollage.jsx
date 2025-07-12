import React from 'react';

const ImageCollage = ({ images }) => {
  return (
    <div className="grid grid-cols-2 grid-rows-3 gap-3 md:gap-4 h-full w-full">
      {/* Top Left (Full width image) */}
      <div className="col-span-2 group relative overflow-hidden rounded-xl">
        <img
          src={images[0]}
          alt="Top Left"
          className="w-full h-40 md:h-48 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          // Improve image quality
          srcSet={`${images[0]}?w=800 800w, ${images[0]}?w=1200 1200w`}
          sizes="(max-width: 768px) 100vw, 800px"
        />
        {/* Overlay to prevent text selection during hover */}
        <div className="absolute inset-0 pointer-events-none" />
      </div>

      {/* Middle Left */}
      <div className="group relative overflow-hidden rounded-xl">
        <img
          src={images[1]}
          alt="Middle Left"
          className="w-full h-40 md:h-48 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          srcSet={`${images[1]}?w=400 400w, ${images[1]}?w=600 600w`}
          sizes="(max-width: 768px) 50vw, 400px"
        />
        <div className="absolute inset-0 pointer-events-none" />
      </div>

      {/* Middle Right (Tall image) */}
      <div className="row-span-2 group relative overflow-hidden rounded-xl">
        <img
          src={images[2]}
          alt="Middle Right"
          className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          srcSet={`${images[2]}?w=400 400w, ${images[2]}?w=800 800w`}
          sizes="(max-width: 768px) 50vw, 400px"
        />
        <div className="absolute inset-0 pointer-events-none" />
      </div>

      {/* Bottom Left */}
      <div className="group relative overflow-hidden rounded-xl">
        <img
          src={images[3]}
          alt="Bottom Left"
          className="w-full h-40 md:h-48 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          srcSet={`${images[3]}?w=400 400w, ${images[3]}?w=600 600w`}
          sizes="(max-width: 768px) 50vw, 400px"
        />
        <div className="absolute inset-0 pointer-events-none" />
      </div>
    </div>
  );
};

export default ImageCollage;