import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Icosahedron, Sparkles, OrbitControls } from '@react-three/drei'

function Scene({ mouseRef }) {
  const meshRef = useRef(null)
  const groupRef = useRef(null)

  const prefersReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

  useFrame(() => {
    if (meshRef.current && !prefersReducedMotion) {
      meshRef.current.rotation.x += 0.002
      meshRef.current.rotation.y += 0.003
    }

    if (groupRef.current) {
      groupRef.current.rotation.x += (mouseRef.current.y - groupRef.current.rotation.x) * 0.02
      groupRef.current.rotation.y += (mouseRef.current.x - groupRef.current.rotation.y) * 0.02
    }
  })

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#7C3AED" />
      <pointLight position={[-5, -5, 5]} intensity={0.3} color="#16A34A" />

      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 4]} />
        <meshStandardMaterial
          color="#16A34A"
          metalness={0.3}
          roughness={0.4}
        />
      </mesh>

      <Sparkles count={30} scale={5} size={2.5} speed={0.4} color="#16A34A" />
      <Sparkles count={15} scale={7} size={1.5} speed={0.2} color="#7C3AED" />

      <OrbitControls enableZoom={false} enablePan={false} autoRotate={!prefersReducedMotion} autoRotateSpeed={2} />
    </group>
  )
}

export default function HeroScene() {
  const mouseRef = useRef({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseRef.current.x = ((e.clientX - rect.left) / rect.width  - 0.5) * 1.0
    mouseRef.current.y = ((e.clientY - rect.top)  / rect.height - 0.5) * 1.0
  }

  const handleMouseLeave = () => {
    mouseRef.current.x = 0
    mouseRef.current.y = 0
  }

  return (
    <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in hidden lg:flex"
      style={{ opacity: 0, animationFillMode: 'forwards', animationDelay: '0.2s' }}>
      <div
        className="relative w-full max-w-sm"
        style={{ height: '400px' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
          style={{ width: '100%', height: '100%', borderRadius: '1rem', display: 'block' }}
        >
          <Scene mouseRef={mouseRef} />
        </Canvas>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/15 to-violet/15 blur-2xl scale-105 pointer-events-none" />
        <div className="absolute -bottom-4 -right-4 w-20 h-20 opacity-25 pointer-events-none" aria-hidden="true"
          style={{ backgroundImage: 'radial-gradient(rgba(22,163,74,0.7) 1.5px, transparent 1.5px)', backgroundSize: '8px 8px' }} />
        <div className="absolute -top-4 -left-4 w-16 h-16 opacity-25 pointer-events-none" aria-hidden="true"
          style={{ backgroundImage: 'radial-gradient(rgba(124,58,237,0.7) 1.5px, transparent 1.5px)', backgroundSize: '8px 8px' }} />
      </div>
    </div>
  )
}
