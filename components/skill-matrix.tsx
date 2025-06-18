"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Box, Text } from "@react-three/drei"
import type * as THREE from "three"

const skills = [
  { name: "React", level: 0.9, position: [-3, 2, 0] },
  { name: "Three.js", level: 0.8, position: [0, 3, 0] },
  { name: "Node.js", level: 0.85, position: [3, 1, 0] },
  { name: "TypeScript", level: 0.9, position: [2, -1, 0] },
  { name: "WebGL", level: 0.7, position: [-2, -2, 0] },
]

export default function SkillMatrix() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {skills.map((skill, i) => (
        <group key={i} position={skill.position}>
          <Box args={[skill.level * 2, 0.2, 0.2]}>
            <meshStandardMaterial color="#f97316" emissive="#f97316" emissiveIntensity={skill.level * 0.3} />
          </Box>
          <Text position={[0, -0.5, 0]} fontSize={0.2} color="#3b82f6" anchorX="center">
            {skill.name}
          </Text>
        </group>
      ))}
    </group>
  )
}
