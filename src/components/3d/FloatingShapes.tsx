import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const FloatingBox = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.3}
          wireframe
          emissive={color}
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
};

const FloatingOctahedron = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.z += 0.001;
    }
  });

  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={3}>
      <mesh ref={meshRef} position={position}>
        <octahedronGeometry args={[0.8]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.4}
          wireframe
          emissive={color}
          emissiveIntensity={0.6}
        />
      </mesh>
    </Float>
  );
};

const FloatingTorus = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
      meshRef.current.rotation.x += 0.001;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[0.6, 0.2, 16, 32]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.35}
          wireframe
          emissive={color}
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
};

const FloatingShapes = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#b366ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00d4ff" />
      <pointLight position={[0, 10, -10]} intensity={0.5} color="#00ff88" />

      {/* Holographic Purple shapes */}
      <FloatingBox position={[-3, 2, -5]} color="#b366ff" />
      <FloatingOctahedron position={[4, -2, -8]} color="#b366ff" />
      <FloatingTorus position={[-5, -3, -6]} color="#b366ff" />

      {/* Code Blue shapes */}
      <FloatingBox position={[5, 3, -7]} color="#00d4ff" />
      <FloatingOctahedron position={[-4, 4, -9]} color="#00d4ff" />

      {/* Neon Green shapes */}
      <FloatingTorus position={[3, -4, -5]} color="#00ff88" />
      <FloatingBox position={[-2, -1, -10]} color="#00ff88" />
      <FloatingOctahedron position={[2, 1, -6]} color="#00ff88" />
    </>
  );
};

export default FloatingShapes;