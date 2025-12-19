import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingMeshProps {
  geometry: JSX.Element;
  position: [number, number, number];
  color: string;
  rotationSpeed?: [number, number, number]; // x, y, z
  floatSpeed?: number;
  floatIntensity?: number;
  rotationIntensity?: number;
  opacity?: number;
}

const FloatingMesh = ({
  geometry,
  position,
  color,
  rotationSpeed = [0.001, 0.002, 0],
  floatSpeed = 2,
  floatIntensity = 2,
  rotationIntensity = 0.5,
  opacity = 0.35,
}: FloatingMeshProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed[0];
      meshRef.current.rotation.y += rotationSpeed[1];
      meshRef.current.rotation.z += rotationSpeed[2];
    }
  });

  return (
    <Float
      speed={floatSpeed}
      rotationIntensity={rotationIntensity}
      floatIntensity={floatIntensity}
    >
      <mesh ref={meshRef} position={position}>
        {geometry}
        <meshStandardMaterial
          color={color}
          transparent
          opacity={opacity}
          wireframe
          emissive={color}
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
};

export default FloatingMesh;
