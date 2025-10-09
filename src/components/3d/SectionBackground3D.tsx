import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Float } from '@react-three/drei';

interface ShapeProps {
  position: [number, number, number];
  color: string;
  type: 'sphere' | 'torus' | 'cone' | 'octahedron';
}

const GeometryShape = ({ position, color, type }: ShapeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.002;
      
      // Gentle wave motion
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
    }
  });

  const getGeometry = () => {
    switch (type) {
      case 'sphere':
        return <sphereGeometry args={[1, 32, 32]} />;
      case 'torus':
        return <torusGeometry args={[1.2, 0.4, 16, 100]} />;
      case 'cone':
        return <coneGeometry args={[1, 2, 32]} />;
      case 'octahedron':
        return <octahedronGeometry args={[1.5, 0]} />;
    }
  };

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        {getGeometry()}
        <meshStandardMaterial
          color={color}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.4}
        />
      </mesh>
    </Float>
  );
};

export const HeroShapes = () => (
  <>
    <ambientLight intensity={0.4} />
    <directionalLight position={[5, 5, 5]} intensity={0.6} color={'hsl(var(--accent))'} />
    <pointLight position={[0, 0, 5]} intensity={0.5} color={'hsl(var(--secondary))'} />
    
    <GeometryShape position={[-3, 2, -5]} color={'hsl(var(--muted-foreground))'} type="torus" />
    <GeometryShape position={[4, -2, -6]} color={'hsl(var(--secondary))'} type="sphere" />
    <GeometryShape position={[0, 3, -7]} color={'hsl(var(--accent))'} type="octahedron" />
  </>
);

export const AboutShapes = () => (
  <>
    <ambientLight intensity={0.4} />
    <directionalLight position={[-5, 5, 5]} intensity={0.6} color={'hsl(var(--secondary))'} />
    <pointLight position={[-5, 0, 3]} intensity={0.5} color={'hsl(var(--muted-foreground))'} />
    
    <GeometryShape position={[3, 1, -5]} color={'hsl(var(--secondary))'} type="cone" />
    <GeometryShape position={[-4, -1, -6]} color={'hsl(var(--accent))'} type="sphere" />
    <GeometryShape position={[0, 2, -7]} color={'hsl(var(--muted-foreground))'} type="torus" />
  </>
);

export const ProjectsShapes = () => (
  <>
    <ambientLight intensity={0.4} />
    <directionalLight position={[5, -5, 5]} intensity={0.6} color={'hsl(var(--accent))'} />
    <pointLight position={[5, 0, 3]} intensity={0.5} color={'hsl(var(--secondary))'} />
    
    <GeometryShape position={[-3, -2, -5]} color={'hsl(var(--accent))'} type="octahedron" />
    <GeometryShape position={[4, 1, -6]} color={'hsl(var(--muted-foreground))'} type="cone" />
    <GeometryShape position={[-1, 3, -7]} color={'hsl(var(--secondary))'} type="torus" />
  </>
);
