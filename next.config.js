/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for better hosting compatibility
  output: 'export',
  
  // Disable image optimization during export
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig; 