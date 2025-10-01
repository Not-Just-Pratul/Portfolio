import { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Float } from '@react-three/drei';

const TorusShape = ({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse, viewport } = useThree();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Mouse-following effect
      const targetX = (mouse.x * viewport.width) / 8;
      const targetY = (mouse.y * viewport.height) / 8;
      
      meshRef.current.position.x = THREE.MathUtils.lerp(
        meshRef.current.position.x,
        position[0] + targetX * 0.3,
        0.05
      );
      
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        position[1] + targetY * 0.3,
        0.05
      );

      // Smooth rotation
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.003;
      
      // Scale on hover
      const targetScale = hovered ? scale * 1.2 : scale;
      meshRef.current.scale.setScalar(
        THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.1)
      );
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={1}>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <torusGeometry args={[2, 0.6, 32, 100]} />
        <meshStandardMaterial
          color="hsl(var(--muted-foreground))"
          roughness={0.2}
          metalness={0.7}
          transparent
          opacity={0.5}
        />
      </mesh>
    </Float>
  );
};

const IcosahedronShape = ({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse, viewport } = useThree();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      const targetX = (mouse.x * viewport.width) / 6;
      const targetY = (mouse.y * viewport.height) / 6;
      
      meshRef.current.position.x = THREE.MathUtils.lerp(
        meshRef.current.position.x,
        position[0] - targetX * 0.4,
        0.04
      );
      
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        position[1] - targetY * 0.4,
        0.04
      );

      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.002;
      meshRef.current.rotation.z += 0.001;
      
      const targetScale = hovered ? scale * 1.15 : scale;
      meshRef.current.scale.setScalar(
        THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.1)
      );
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={1.5}>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <icosahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial
          color="hsl(var(--secondary))"
          roughness={0.15}
          metalness={0.8}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
};

const BoxShape = ({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse, viewport } = useThree();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      const targetX = (mouse.x * viewport.width) / 10;
      const targetY = (mouse.y * viewport.height) / 10;
      
      meshRef.current.position.x = THREE.MathUtils.lerp(
        meshRef.current.position.x,
        position[0] + targetX * 0.2,
        0.06
      );
      
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        position[1] + targetY * 0.2,
        0.06
      );

      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.002;
      
      const targetScale = hovered ? scale * 1.1 : scale;
      meshRef.current.scale.setScalar(
        THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.1)
      );
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={2}>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial
          color="hsl(var(--accent))"
          roughness={0.1}
          metalness={0.6}
          transparent
          opacity={0.4}
        />
      </mesh>
    </Float>
  );
};

const InteractiveShapes = () => {
  return (
    <>
      {/* Warm sophisticated lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 8, 5]} intensity={1} color="hsl(var(--accent))" />
      <directionalLight position={[-10, 5, -5]} intensity={0.8} color="hsl(var(--secondary))" />
      <directionalLight position={[0, -10, 0]} intensity={0.5} color="hsl(var(--muted-foreground))" />
      <pointLight position={[0, 0, 8]} intensity={0.7} color="hsl(var(--muted-foreground))" />

      {/* Interactive 3D shapes - Spread out for full-screen effect */}
      <TorusShape position={[0, 0, -2]} scale={1.2} />
      <IcosahedronShape position={[-8, 4, -6]} scale={0.8} />
      <BoxShape position={[8, -4, -7]} scale={0.9} />
      
      <TorusShape position={[6, 5, -9]} scale={0.7} />
      <IcosahedronShape position={[-6, -5, -8]} scale={1} />
      <BoxShape position={[-9, 2, -10]} scale={0.6} />

      <IcosahedronShape position={[9, 1, -11]} scale={0.5} />
      <BoxShape position={[0, -6, -10]} scale={0.8} />
      <TorusShape position={[-3, 6, -12]} scale={0.6} />

      <IcosahedronShape position={[10, -6, -10]} scale={0.7} />
      <BoxShape position={[-10, 0, -9]} scale={1} />
    </>
  );
};

export default InteractiveShapes;
