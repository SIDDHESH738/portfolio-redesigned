"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Box } from "@react-three/drei"
import type * as THREE from "three"

export default function HeroScene() {
  const groupRef = useRef<THREE.Group>(null)
  const boxRefs = useRef<THREE.Mesh[]>([])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }

    boxRefs.current.forEach((box, i) => {
      if (box) {
        box.rotation.x = state.clock.elapsedTime * (0.5 + i * 0.1)
        box.rotation.y = state.clock.elapsedTime * (0.3 + i * 0.05)
        box.position.y = Math.sin(state.clock.elapsedTime + i) * 0.5
      }
    })
  })

  return (
    <group ref={groupRef}>
      {/* Floating geometric shapes */}
      {Array.from({ length: 5 }).map((_, i) => (
        <Box
          key={i}
          ref={(el) => el && (boxRefs.current[i] = el)}
          args={[0.5, 0.5, 0.5]}
          position={[(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 5, (Math.random() - 0.5) * 5]}
        >
          <meshStandardMaterial
            color={i % 2 === 0 ? "#f97316" : "#3b82f6"}
            emissive={i % 2 === 0 ? "#f97316" : "#3b82f6"}
            emissiveIntensity={0.2}
            transparent
            opacity={0.8}
          />
        </Box>
      ))}

      {/* Ambient lighting */}
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#f97316" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
    </group>
  )
}
