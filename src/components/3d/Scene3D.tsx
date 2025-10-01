import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import FloatingShapes from './FloatingShapes';

const Scene3D = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <FloatingShapes />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;