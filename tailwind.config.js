/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './public/index.html',
    ],
    theme: {
        extend: {
            // If you want custom transforms like scale/rotate/translate variants
            // This line is technically not needed unless you're adding new transform variants
            transform: ['hover', 'focus'],
        },
    },
    plugins: [
        // Add support for transform-style: preserve-3d
        function ({ addUtilities }) {
            addUtilities({
                '.transform-style-preserve-3d': {
                    transformStyle: 'preserve-3d',
                },
                '.perspective-800': {
                    perspective: '800px',
                },
                '.backface-hidden': {
                    backfaceVisibility: 'hidden',
                },
            });
        },
    ],
};
