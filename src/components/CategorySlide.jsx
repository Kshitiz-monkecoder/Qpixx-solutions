import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
import ImageCollage from './ImageCollage';

const categories = [
  {
    title: 'Office',
    description: 'Perfectly designed office spaces to enhance productivity and comfort for your team.',
    images: ['/Office1.jpg', '/Office2.jpg', '/Office3.jpg', '/Office4.jpg'],
    labels: ['Office', 'Hotel', 'Land', 'Retail'],
  },
  {
    title: 'Hostels',
    description: 'Affordable and modern living spaces ideal for students and professionals.',
    images: ['/hostel1.jpg', '/hostel2.jpg', '/hostel3.jpg', '/hostel4.jpg'],
    labels: ['Hostel', 'Dining', 'Library', 'Recreation'],
  },
  {
    title: 'Terrace',
    description: 'Enjoy open-air relaxation with our beautifully designed terrace setups.',
    images: ['/terrace3.jpg', '/terrace1.jpg', '/terrace2.jpg', '/terrace4.jpg'],
    labels: ['Terrace', 'Deck', 'Greenery', 'Patio'],
  },
  {
    title: 'Floor',
    description: 'Efficiently planned floor spaces tailored to your residential needs.',
    images: ['/floor1.jpg', '/floor2.jpg', '/floor3.jpg', '/floor4.jpg'],
    labels: ['Floor', 'Lobby', 'Bedroom', 'Kitchen'],
  },
];

const ScrollCategories = () => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const touchStartX = useRef(0);
  const controls = useAnimation();
  const sectionCount = categories.length;
  const isScrolling = useRef(false);
  const lastScrollTime = useRef(0);
  const scrollTimeout = useRef(null);

  // Debounced scroll handler
  const handleScroll = useCallback(() => {
    const now = Date.now();
    if (now - lastScrollTime.current < 100) return; // Throttle to 100ms
    
    lastScrollTime.current = now;
    
    const containerTop = containerRef.current.offsetTop;
    const scrollY = window.scrollY;
    const sectionHeight = window.innerHeight;
    const scrollOffset = scrollY - containerTop;

    if (scrollY >= containerTop && scrollY < containerTop + sectionHeight * sectionCount) {
      const newIndex = Math.min(
        sectionCount - 1,
        Math.max(0, Math.floor(scrollOffset / sectionHeight))
      );

      if (newIndex !== index && !isScrolling.current) {
        isScrolling.current = true;
        setIndex(newIndex);
        
        // Smooth animation sequence
        controls.start({
          scale: 0.98,
          transition: { duration: 0.1 }
        }).then(() => {
          return controls.start({
            scale: 1,
            transition: { duration: 0.2 }
          });
        }).finally(() => {
          isScrolling.current = false;
        });
      }
    }
  }, [index, controls, sectionCount]);

  useEffect(() => {
    // Use passive scroll for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [handleScroll]);

  // Touch swipe for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const delta = touchStartX.current - endX;
    if (Math.abs(delta) > 50) {
      if (delta > 0 && index < sectionCount - 1) {
        setIndex(index + 1);
        window.scrollTo({
          top: containerRef.current.offsetTop + (index + 1) * window.innerHeight,
          behavior: 'smooth'
        });
      }
      if (delta < 0 && index > 0) {
        setIndex(index - 1);
        window.scrollTo({
          top: containerRef.current.offsetTop + (index - 1) * window.innerHeight,
          behavior: 'smooth'
        });
      }
    }
  };

  // Preload next and previous images
  useEffect(() => {
    const preloadImages = () => {
      const nextIndex = (index + 1) % sectionCount;
      const prevIndex = (index - 1 + sectionCount) % sectionCount;
      
      [nextIndex, prevIndex].forEach(i => {
        categories[i].images.forEach(img => {
          const image = new Image();
          image.src = img;
        });
      });
    };
    
    preloadImages();
  }, [index, sectionCount]);

  const current = categories[index];

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: `${sectionCount * 100}vh` }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <h1 className='text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-bold text-center mx-3 mb-2'>
        Explore our highly rated Categories
      </h1>
      
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center px-4 md:px-16 bg-[#FAFAFA] font-['Urbanist']">
        <motion.div
          animate={controls}
          className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10"
        >
          {/* Left Content */}
          <motion.div
            key={`text-${index}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1D27] mb-4">
              {current.title}
            </h2>
            <p className="text-[#656E73] text-base mb-6 max-w-md mx-auto md:mx-0">
              {current.description}
            </p>
            <button className="border border-[#0B1D27] px-6 py-2 rounded-full text-sm text-[#0B1D27] hover:bg-[#0B1D27] hover:text-white transition">
              Book Free Consultation →
            </button>
          </motion.div>

          {/* Right Image Collage */}
          <motion.div
            key={`image-${index}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full md:w-1/2"
          >
            <ImageCollage
              images={current.images}
              labels={current.labels}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollCategories;