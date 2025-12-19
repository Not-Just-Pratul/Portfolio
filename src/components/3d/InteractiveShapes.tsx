import { useRef, useState, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

interface InteractiveShapesProps {
  geometry: JSX.Element;
  position: [number, number, number];
  color: string;
  baseScale?: number;
  rotationSpeed?: [number, number, number];
  mouseInfluence?: number; // How much the mesh follows the mouse
  floatProps?: { speed: number; rotationIntensity: number; floatIntensity: number };
}

const InteractiveShapes = ({
  geometry,
  position,
  color,
  baseScale = 1,
  rotationSpeed = [0.002, 0.003, 0.001],
  mouseInfluence = 0.3,
  floatProps = { speed: 1.5, rotationIntensity: 0.2, floatIntensity: 1 },
}: InteractiveShapesProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse, viewport } = useThree();
  const [hovered, setHovered] = useState(false);

  // Performance optimization: Memoize geometry to prevent re-renders
  const memoizedGeometry = useMemo(() => geometry, [geometry]);

  // Mobile responsiveness: Adjust influence and scale for smaller screens
  const isMobile = viewport.width < 768;
  const adjustedMouseInfluence = isMobile ? 0.1 : mouseInfluence;
  const adjustedBaseScale = isMobile ? baseScale * 0.8 : baseScale;

  useFrame(() => {
    if (!meshRef.current) return;

    const [rx, ry, rz] = rotationSpeed;
    meshRef.current.rotation.x += rx;
    meshRef.current.rotation.y += ry;
    meshRef.current.rotation.z += rz;

    const targetX = mouse.x * viewport.width * adjustedMouseInfluence;
    const targetY = mouse.y * viewport.height * adjustedMouseInfluence;

    // Performance: Slightly reduced lerp factor for smoother, less CPU-intensive updates
    meshRef.current.position.x = THREE.MathUtils.lerp(
      meshRef.current.position.x,
      position[0] + targetX,
      0.03
    );
    meshRef.current.position.y = THREE.MathUtils.lerp(
      meshRef.current.position.y,
      position[1] + targetY,
      0.03
    );

    const targetScale = hovered ? adjustedBaseScale * 1.15 : adjustedBaseScale;
    meshRef.current.scale.setScalar(
      THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.08)
    );
  });

  return (
    <Float {...floatProps}>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        aria-label="Interactive 3D shape that responds to mouse movement and hover"
      >
        {memoizedGeometry}
        <meshStandardMaterial
          color={color}
          roughness={0.2}
          metalness={0.7}
          transparent
          opacity={0.5}
        />
      </mesh>
    </Float>
  );
};

export default InteractiveShapes;
