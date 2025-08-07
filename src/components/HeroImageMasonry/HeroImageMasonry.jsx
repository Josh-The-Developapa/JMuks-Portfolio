import React from 'react';
import sample1 from '../../assets/pic-1.jpeg';
import sample2 from '../../assets/pic-2.jpeg';
import sample3 from '../../assets/pic-3.jpeg';
import sample4 from '../../assets/pic-4.jpeg';
import sample5 from '../../assets/pic-5.jpeg';
import sample6 from '../../assets/pic-6.jpeg';

const masonryConfig = {
  leftColumn: [
    { image: sample1, height: 'h-80 md:h-96', alt: 'VoteAble Pic' },
    { image: sample2, height: 'h-48 md:h-60', alt: 'VoteAble Pic' },
    { image: sample3, height: 'h-64 md:h-80', alt: 'VoteAble Pic' },
    { image: sample4, height: 'h-56 md:h-64', alt: 'VoteAble Pic' },
    { image: sample5, height: 'h-64 md:h-80', alt: 'Grad Pic' },
    { image: sample6, height: 'h-80 md:h-96', alt: 'Grad Pic' },
  ],
  rightColumn: [
    { image: sample6, height: 'h-80 md:h-96', alt: 'Grad Pic' },
    { image: sample5, height: 'h-64 md:h-80', alt: 'Grad Pic' },
    { image: sample4, height: 'h-56 md:h-64', alt: 'VoteAble Pic' },
    { image: sample3, height: 'h-64 md:h-80', alt: 'VoteAble Pic' },
    { image: sample2, height: 'h-48 md:h-60', alt: 'VoteAble Pic' },
    { image: sample1, height: 'h-80 md:h-96', alt: 'VoteAble Pic' },
  ],
};

// Mobile carousel images - simplified for mobile
const mobileImages = [
  { image: sample1, alt: 'VoteAble Pic' },
  { image: sample2, alt: 'VoteAble Pic' },
  { image: sample3, alt: 'VoteAble Pic' },
  { image: sample4, alt: 'VoteAble Pic' },
  { image: sample5, alt: 'Grad Pic' },
  { image: sample6, alt: 'Grad Pic' },
];

const HeroImageMasonry = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Desktop/Tablet Masonry Layout (hidden on mobile) */}
      <div className="hidden md:block absolute inset-0">
        {/* Left Column */}
        <div className="absolute left-0 w-1/2 h-full overflow-hidden">
          <div className="flex flex-col gap-3 lg:gap-4 animate-scroll-up">
            {/* Triple the content for seamless looping */}
            {[
              ...masonryConfig.leftColumn,
              ...masonryConfig.leftColumn,
              ...masonryConfig.leftColumn,
            ].map((item, idx) => (
              <div
                key={`left-${idx}`}
                className={`flex-shrink-0 overflow-hidden rounded-lg shadow-lg transition-transform duration-500 hover:shadow-xl ${item.height}`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="absolute right-0 w-1/2 h-full overflow-hidden">
          <div className="flex flex-col gap-3 lg:gap-4 animate-scroll-down pl-3 lg:pl-4">
            {/* Triple the content for seamless looping */}
            {[
              ...masonryConfig.rightColumn,
              ...masonryConfig.rightColumn,
              ...masonryConfig.rightColumn,
            ].map((item, idx) => (
              <div
                key={`right-${idx}`}
                className={`flex-shrink-0 overflow-hidden rounded-lg shadow-lg transition-transform duration-500 hover:shadow-xl ${item.height}`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Layout - Horizontal Scroll */}
      {/* Mobile Layout - Horizontal Scroll */}
      <div className="md:hidden absolute inset-0 overflow-hidden">
        <div className="w-max h-full flex items-center px-4 pt-[100px] animate-mobile-scroll">
          {[...Array(3)].flatMap(() =>
            mobileImages.map((item, idx) => (
              <div
                key={`mobile-${idx}-${Math.random()}`}
                className="flex-shrink-0 overflow-hidden rounded-lg shadow-lg mx-2"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-[auto] h-80 object-cover"
                />
              </div>
            ))
          )}
        </div>
      </div>

      {/* Gradient Overlays for seamless edges */}
      <div className="absolute top-0 left-0 right-0 h-16 md:h-20 bg-gradient-to-b from-gray-50 to-transparent pointer-events-none z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-20 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none z-10"></div>

      {/* Side gradients for mobile horizontal scroll */}

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes scroll-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-33.33%);
          }
        }

        @keyframes scroll-down {
          0% {
            transform: translateY(-33.33%);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes mobile-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-66.66%);
          }
        }

        .animate-scroll-up {
          animation: scroll-up 35s linear infinite;
        }

        .animate-scroll-down {
          animation: scroll-down 35s linear infinite;
        }

        .animate-mobile-scroll {
          animation: mobile-scroll 50s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroImageMasonry;
