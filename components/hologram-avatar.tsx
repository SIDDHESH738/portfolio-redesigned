"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere, Text } from "@react-three/drei"
import type * as THREE from "three"

export default function HologramAvatar() {
  const groupRef = useRef<THREE.Group>(null)
  const sphereRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }

    if (sphereRef.current) {
      sphereRef.current.material.emissiveIntensity = 0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.2
    }
  })

  return (
    <group ref={groupRef} position={[3, 0, 0]}>
      <Sphere ref={sphereRef} args={[1, 32, 32]}>
        <meshStandardMaterial
          color="#3b82f6"
          emissive="#3b82f6"
          emissiveIntensity={0.3}
          transparent
          opacity={0.7}
          wireframe
        />
      </Sphere>

      <Text position={[0, -2, 0]} fontSize={0.3} color="#3b82f6" anchorX="center" anchorY="middle">
        DIGITAL AVATAR
      </Text>
    </group>
  )
}
