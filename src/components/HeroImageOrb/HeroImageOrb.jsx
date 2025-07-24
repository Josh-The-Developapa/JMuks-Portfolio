import React from 'react';
import sample1 from '../../assets/pic-1.jpeg';
import sample2 from '../../assets/pic-2.jpeg';
import sample3 from '../../assets/pic-3.jpg';
import sample4 from '../../assets/VoteAble.png';
import sample5 from '../../assets/VoteAble.png';
import sample6 from '../../assets/VoteAble.png';

// Define your masonry layout with specific images and heights
const masonryConfig = {
  leftColumn: [
    { image: sample1, height: 'h-64', alt: 'Featured Project 1' }, // tall - good for portrait
    { image: sample2, height: 'h-36', alt: 'Quick Preview 1' }, // short - good for landscape
    { image: sample3, height: 'h-48', alt: 'Development Work 1' }, // medium
    { image: sample4, height: 'h-40', alt: 'VoteAble App' }, // medium-short
    { image: sample5, height: 'h-52', alt: 'Portfolio Piece 1' }, // tall-medium
    { image: sample6, height: 'h-32', alt: 'Code Snippet View' }, // short
    { image: sample1, height: 'h-64', alt: 'Featured Project 2' }, // medium
    { image: sample2, height: 'h-60', alt: 'Main Showcase' }, // extra tall
    { image: sample3, height: 'h-36', alt: 'Quick Preview 2' }, // short
  ],
  rightColumn: [
    { image: sample4, height: 'h-40', alt: 'VoteAble Preview' }, // medium-short
    { image: sample5, height: 'h-64', alt: 'Hero Project' }, // extra tall - great for portraits
    { image: sample6, height: 'h-32', alt: 'Code Preview' }, // short
    { image: sample1, height: 'h-48', alt: 'Development Work 2' }, // medium
    { image: sample2, height: 'h-36', alt: 'Quick Look' }, // short
    { image: sample3, height: 'h-56', alt: 'Featured Work' }, // tall
    { image: sample4, height: 'h-44', alt: 'App Interface' }, // medium
    { image: sample5, height: 'h-40', alt: 'Portfolio Piece 2' }, // medium-short
    { image: sample6, height: 'h-52', alt: 'Showcase Item' }, // tall-medium
  ],
};

const HeroImageMasonry = () => {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl">
      {/* Masonry Grid Container */}
      <div className="absolute inset-0">
        {/* Left Column */}
        <div className="absolute left-0 w-1/2 h-full overflow-hidden">
          <div className="flex flex-col gap-4 animate-scroll-up">
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
                {/* Optional overlay for better text readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="absolute right-0 w-1/2 h-full overflow-hidden">
          <div className="flex flex-col gap-4 animate-scroll-down pl-4">
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
                {/* Optional overlay for better text readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient Overlays for seamless edges */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-50 to-transparent pointer-events-none z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none z-10"></div>

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

        .animate-scroll-up {
          animation: scroll-up 35s linear infinite;
        }

        .animate-scroll-down {
          animation: scroll-down 35s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroImageMasonry;
