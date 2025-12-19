/**
 * SEO and Performance Utilities
 * Provides helper functions for managing meta tags, structured data, and performance monitoring
 */

interface MetaTagProps {
  name?: string;
  property?: string;
  content: string;
  httpEquiv?: string;
}

interface StructuredDataProps {
  '@context': string;
  '@type': string;
  [key: string]: any;
}

/**
 * Set meta tag dynamically
 */
export const setMetaTag = ({
  name,
  property,
  content,
  httpEquiv,
}: MetaTagProps): void => {
  let element = document.querySelector(
    `meta[${name ? 'name' : property ? 'property' : 'http-equiv'}="${
      name || property || httpEquiv
    }"]`
  );

  if (!element) {
    element = document.createElement('meta');
    if (name) element.setAttribute('name', name);
    if (property) element.setAttribute('property', property);
    if (httpEquiv) element.setAttribute('http-equiv', httpEquiv);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
};

/**
 * Set page title and update OG title
 */
export const setPageTitle = (title: string): void => {
  document.title = title;
  setMetaTag({ property: 'og:title', content: title });
  setMetaTag({ name: 'twitter:title', content: title });
};

/**
 * Set page description and update OG description
 */
export const setPageDescription = (description: string): void => {
  setMetaTag({ name: 'description', content: description });
  setMetaTag({ property: 'og:description', content: description });
  setMetaTag({ name: 'twitter:description', content: description });
};

/**
 * Add structured data to page
 */
export const addStructuredData = (data: StructuredDataProps): void => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

/**
 * Performance: Report Web Vitals
 */
export const reportWebVitals = (metric: any): void => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`${metric.name}:`, metric.value);
  }
};

/**
 * Utility: Detect if device is mobile based on viewport
 */
export const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

/**
 * Utility: Detect if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Utility: Get optimal image quality based on device
 */
export const getOptimalImageQuality = (): 'low' | 'medium' | 'high' => {
  if (typeof window === 'undefined') return 'medium';

  const connection = (navigator as any).connection;
  
  if (!connection) {
    return isMobileDevice() ? 'medium' : 'high';
  }

  const effectiveType = connection.effectiveType;
  
  if (effectiveType === '4g') return 'high';
  if (effectiveType === '3g') return 'medium';
  return 'low';
};

/**
 * Utility: Lazy load images with Intersection Observer
 */
export const setupLazyImages = (): void => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach((img) => {
      imageObserver.observe(img);
    });
  }
};

/**
 * Utility: Disable animations on mobile for performance
 */
export const shouldReduceAnimations = (): boolean => {
  return isMobileDevice() || prefersReducedMotion();
};

/**
 * Utility: Get viewport dimensions
 */
export const getViewportDimensions = (): { width: number; height: number } => {
  if (typeof window === 'undefined') {
    return { width: 0, height: 0 };
  }

  return {
    width: window.innerWidth || document.documentElement.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight,
  };
};

/**
 * Utility: Check if device has touch capability
 */
export const hasTouchCapability = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  return (
    ('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) ||
    ((navigator as any).msMaxTouchPoints > 0)
  );
};

/**
 * Performance: Monitor Cumulative Layout Shift
 */
export const monitorCLS = (): void => {
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('CLS entry:', (entry as any).value);
        }
      });
      observer.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      // PerformanceObserver not supported
    }
  }
};

/**
 * Preload critical resources
 */
export const preloadResource = (href: string, as: string): void => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  document.head.appendChild(link);
};

/**
 * Prefetch non-critical resources
 */
export const prefetchResource = (href: string): void => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);
};
