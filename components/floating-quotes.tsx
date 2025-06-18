"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Text } from "@react-three/drei"
import type * as THREE from "three"

const quotes = ["CODE IS POETRY", "INNOVATION NEVER SLEEPS", "DREAM IN PIXELS"]

export default function FloatingQuotes() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        child.position.y = Math.sin(state.clock.elapsedTime + i * 2) * 2
        child.rotation.y = state.clock.elapsedTime * 0.1
      })
    }
  })

  return (
    <group ref={groupRef}>
      {quotes.map((quote, i) => (
        <Text
          key={i}
          position={[(Math.random() - 0.5) * 15, i * 3 - 3, (Math.random() - 0.5) * 10]}
          fontSize={0.2}
          color="#f97316"
          anchorX="center"
          anchorY="middle"
        >
          {quote}
        </Text>
      ))}
    </group>
  )
}
