import { useEffect } from 'react';

/**
 * Performance optimization component
 * - Lazy loads images below the fold
 * - Preconnects to external resources
 * - Adds resource hints for faster loading
 */
const PerformanceOptimizer = () => {
  useEffect(() => {
    // Add resource hints for better performance
    const preconnectLinks = [
      'https://api.tomtom.com',
      'https://api.mapbox.com',
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    preconnectLinks.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = url;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Lazy load images that are below the fold
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      }, {
        rootMargin: '50px 0px',
        threshold: 0.01
      });

      // Find all images with data-src attribute
      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => imageObserver.observe(img));

      return () => {
        lazyImages.forEach(img => imageObserver.unobserve(img));
      };
    }
  }, []);

  return null;
};

export default PerformanceOptimizer;
