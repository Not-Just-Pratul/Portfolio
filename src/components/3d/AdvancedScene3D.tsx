import { Canvas } from '@react-three/fiber';
import { Suspense, ReactNode, useMemo } from 'react';
import InteractiveMesh from './InteractiveShapes';
import { isMobileDevice } from '@/lib/seo';

interface AdvancedScene3DProps {
  children?: ReactNode;
  opacity?: number;
  className?: string;

  /**
   * Accessibility:
   * If true, scene is treated as decorative (recommended)
   */
  decorative?: boolean;

  /**
   * Optional accessible label if scene conveys meaning
   */
  ariaLabel?: string;

  /**
   * Performance: Whether to render on mobile
   * @default false (skip on mobile for better performance)
   */
  renderOnMobile?: boolean;
}

const AdvancedScene3D = ({
  children,
  opacity = 0.5,
  className,
  decorative = true,
  ariaLabel,
  renderOnMobile = false,
}: AdvancedScene3DProps) => {
  // Memoized mobile check to prevent unnecessary re-renders
  const isMobile = useMemo(() => isMobileDevice(), []);

  // Skip rendering 3D scenes on mobile for performance
  if (isMobile && !renderOnMobile) {
    return null;
  }

  return (
    <div
      className={className || 'absolute inset-0 -z-10'}
      style={{ opacity }}
      aria-hidden={decorative}
      role={decorative ? 'presentation' : 'img'}
      aria-label={!decorative ? ariaLabel : undefined}
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{
          antialias: true,
          alpha: true,
          // Performance: Optimize for mobile by disabling some features
          powerPreference: 'low-power',
          precision: 'lowp',
        }}
        style={{ background: 'transparent' }}
        /* Performance optimizations */
        dpr={[1, isMobile ? 1 : 2]} // Use lower DPR on mobile
        frameloop="demand"
      >
        <Suspense fallback={null}>
          {children || (
            <InteractiveMesh
              geometry={<boxGeometry args={[1, 1, 1]} />}
              position={[0, 0, 0]}
              color="white"
            />
          )}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default AdvancedScene3D;
