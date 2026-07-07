import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, Ring } from '@react-three/drei'

const C = { gold: '#c9a962', bronze: '#a67c52', champagne: '#e8d5b0' }

function Orb() {
  const ref = useRef()
  const ring = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (ref.current) {
      ref.current.rotation.x = t * 0.2
      ref.current.rotation.y = t * 0.25
    }
    if (ring.current) ring.current.rotation.z = t * 0.4
  })

  return (
    <group ref={ref}>
      <Float speed={2.5} floatIntensity={2}>
        <Sphere args={[1.1, 64, 64]}>
          <MeshDistortMaterial color={C.gold} distort={0.45} speed={3} roughness={0.08} metalness={0.92} emissive={C.gold} emissiveIntensity={0.22} />
        </Sphere>
      </Float>
      <group ref={ring}>
        <Ring args={[1.7, 1.73, 64]}>
          <meshBasicMaterial color={C.bronze} transparent opacity={0.42} side={2} />
        </Ring>
      </group>
      <Ring args={[2.2, 2.22, 64]} rotation={[Math.PI / 3, 0.5, 0]}>
        <meshBasicMaterial color={C.champagne} transparent opacity={0.26} side={2} />
      </Ring>
    </group>
  )
}

export default function ContactScene() {
  return (
    <div className="w-full h-[280px] sm:h-[320px]">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[5, 5, 5]} intensity={0.85} color={C.gold} />
          <pointLight position={[-5, -3, -3]} intensity={0.45} color={C.bronze} />
          <Orb />
        </Suspense>
      </Canvas>
    </div>
  )
}
