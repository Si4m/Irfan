"use client"
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, Float } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function AbstractNetwork() {
  const meshRef = useRef<THREE.Group>(null)
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1
      meshRef.current.rotation.z += delta * 0.05
    }
  })

  return (
    <group ref={meshRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh>
          <torusKnotGeometry args={[10, 1.5, 256, 32]} />
          <meshPhongMaterial 
            color="#8ff5ff" 
            emissive="#005359"
            wireframe 
            transparent
            opacity={0.3}
          />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={3}>
        <mesh scale={0.8}>
          <icosahedronGeometry args={[8, 1]} />
          <meshPhongMaterial 
            color="#ff51fa" 
            emissive="#620061"
            wireframe 
            transparent
            opacity={0.15}
          />
        </mesh>
      </Float>
    </group>
  )
}

export function StarsBackground() {
  return (
    <div className="absolute inset-0 z-0" style={{ pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 30], fov: 60 }}>
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
      </Canvas>
    </div>
  )
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 z-0" style={{ pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 30], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#8ff5ff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#ff51fa" />
        <AbstractNetwork />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}
