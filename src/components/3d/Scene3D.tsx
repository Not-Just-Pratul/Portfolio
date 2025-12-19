import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import InteractiveShapes from './InteractiveShapes';

const Scene3D = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <InteractiveShapes
            geometry={<boxGeometry args={[1, 1, 1]} />}
            position={[0, 0, 0]}
            color="white"
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;