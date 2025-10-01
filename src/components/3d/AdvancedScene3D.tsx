import { Canvas } from '@react-three/fiber';
import { Suspense, ReactNode } from 'react';
import InteractiveShapes from './InteractiveShapes';

interface AdvancedScene3DProps {
  children?: ReactNode;
  opacity?: number;
  className?: string;
}

const AdvancedScene3D = ({ children, opacity = 0.5, className }: AdvancedScene3DProps) => {
  return (
    <div className={className || "absolute inset-0 -z-10"} style={{ opacity }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          {children || <InteractiveShapes />}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default AdvancedScene3D;
