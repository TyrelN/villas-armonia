/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizeCss: true,
        optimizePackageImports: ['@radix-ui/react-icons'],
      },
      compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
      },
    images: {
        domains: ['your-supabase-project.supabase.co'],
        formats: ['image/webp', 'image/avif'],
      },
    async headers() {
        return [
          // CORS headers for API routes
          {
            source: '/api/:path*',
            headers: [
              {
                key: 'Access-Control-Allow-Origin',
                value: process.env.ALLOWED_ORIGIN || 'https://yourdomain.com',
              },
              {
                key: 'Access-Control-Allow-Methods',
                value: 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
              },
              {
                key: 'Access-Control-Allow-Headers',
                value: 'Content-Type, Authorization, X-Requested-With',
              },
              {
                key: 'Access-Control-Max-Age',
                value: '86400',
              },
            ],
          },
          // Security headers for all routes
          {
            source: '/(.*)',
            headers: [
              {
                key: 'X-Frame-Options',
                value: 'DENY',
              },
              {
                key: 'X-Content-Type-Options',
                value: 'nosniff',
              },
              {
                key: 'Referrer-Policy',
                value: 'origin-when-cross-origin',
              },
              {
                key: 'Content-Security-Policy',
                value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;",
              },
            ],
          },
        ];
      },
};

export default nextConfig;
