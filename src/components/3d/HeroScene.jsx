import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

/** Antique gold palette — premium dark theme */
const UI = {
  chrome: '#221a14',
  bar: '#2c221a',
  screen: '#0e0b08',
  accent: '#c9a962',
  accent2: '#a67c52',
  muted: '#524338',
  card: '#1a1410',
  text: '#faf4eb',
}

function BrowserWindow({ mouse }) {
  const group = useRef()

  useFrame(() => {
    if (!group.current) return
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, mouse.current.x * 0.18, 0.05)
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, 0.12 + mouse.current.y * 0.06, 0.05)
  })

  return (
    <group ref={group}>
      <Float speed={1.2} rotationIntensity={0.05} floatIntensity={0.15}>
        <group position={[0, 0, 0]}>
          {/* Browser shell */}
          <RoundedBox args={[3.6, 2.4, 0.12]} radius={0.08} smoothness={4}>
            <meshStandardMaterial color={UI.chrome} metalness={0.4} roughness={0.45} />
          </RoundedBox>

          {/* Title bar */}
          <mesh position={[0, 1.02, 0.07]}>
            <boxGeometry args={[3.4, 0.22, 0.02]} />
            <meshStandardMaterial color={UI.bar} roughness={0.6} />
          </mesh>

          {/* Traffic dots */}
          {[[-1.45, '#ff5f57'], [-1.28, '#febc2e'], [-1.11, '#28c840']].map(([x, color]) => (
            <mesh key={x} position={[x, 1.02, 0.09]}>
              <sphereGeometry args={[0.045, 12, 12]} />
              <meshBasicMaterial color={color} />
            </mesh>
          ))}

          {/* URL bar */}
          <mesh position={[0.15, 1.02, 0.09]}>
            <boxGeometry args={[1.8, 0.1, 0.015]} />
            <meshStandardMaterial color={UI.muted} roughness={0.8} />
          </mesh>

          {/* Screen */}
          <mesh position={[0, -0.08, 0.07]}>
            <boxGeometry args={[3.3, 1.95, 0.015]} />
            <meshStandardMaterial color={UI.screen} roughness={0.9} />
          </mesh>

          {/* —— Portfolio UI mockup on screen —— */}

          {/* Nav bar */}
          <mesh position={[0, 0.72, 0.08]}>
            <boxGeometry args={[3.1, 0.14, 0.005]} />
            <meshStandardMaterial color={UI.card} />
          </mesh>
          <mesh position={[-1.2, 0.72, 0.085]}>
            <boxGeometry args={[0.35, 0.06, 0.005]} />
            <meshBasicMaterial color={UI.accent} />
          </mesh>

          {/* Hero name block */}
          <mesh position={[-0.85, 0.35, 0.085]}>
            <boxGeometry args={[0.9, 0.1, 0.005]} />
            <meshBasicMaterial color={UI.text} />
          </mesh>
          <mesh position={[-0.85, 0.18, 0.085]}>
            <boxGeometry args={[1.1, 0.07, 0.005]} />
            <meshBasicMaterial color={UI.accent} />
          </mesh>
          <mesh position={[-0.85, 0.02, 0.085]}>
            <boxGeometry args={[1.3, 0.05, 0.005]} />
            <meshStandardMaterial color={UI.muted} />
          </mesh>

          {/* CTA buttons */}
          <mesh position={[-1.05, -0.18, 0.085]}>
            <boxGeometry args={[0.45, 0.1, 0.005]} />
            <meshBasicMaterial color={UI.accent} />
          </mesh>
          <mesh position={[-0.45, -0.18, 0.085]}>
            <boxGeometry args={[0.45, 0.1, 0.005]} />
            <meshStandardMaterial color={UI.card} />
          </mesh>

          {/* Project cards row */}
          {[-0.9, 0, 0.9].map((x, i) => (
            <group key={i} position={[x, -0.65, 0.085]}>
              <mesh>
                <boxGeometry args={[0.75, 0.55, 0.005]} />
                <meshStandardMaterial color={UI.card} />
              </mesh>
              <mesh position={[0, 0.12, 0.004]}>
                <boxGeometry args={[0.65, 0.22, 0.005]} />
                <meshStandardMaterial color={[UI.accent, UI.accent2, UI.muted][i]} emissive={[UI.accent, UI.accent2, UI.muted][i]} emissiveIntensity={0.15} />
              </mesh>
            </group>
          ))}
        </group>
      </Float>
    </group>
  )
}

function Scene({ mouse }) {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 6, 5]} intensity={0.85} color="#ffffff" />
      <pointLight position={[-3, 2, 4]} intensity={0.35} color={UI.accent} />
      <BrowserWindow mouse={mouse} />
    </>
  )
}

export default function HeroScene() {
  const mouse = useRef({ x: 0, y: 0 })

  const onPointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouse.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    mouse.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
  }

  return (
    <div className="hero-scene-wrap w-full h-full" onPointerMove={onPointerMove}>
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 38 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Scene mouse={mouse} />
        </Suspense>
      </Canvas>
    </div>
  )
}
