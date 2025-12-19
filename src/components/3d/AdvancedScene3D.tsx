import { Canvas } from '@react-three/fiber';
import { Suspense, ReactNode } from 'react';
import InteractiveMesh from './InteractiveShapes';

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
}

const AdvancedScene3D = ({
  children,
  opacity = 0.5,
  className,
  decorative = true,
  ariaLabel,
}: AdvancedScene3DProps) => {
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
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}

        /* Performance optimizations */
        dpr={[1, 2]}
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
