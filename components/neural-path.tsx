"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere, Line } from "@react-three/drei"
import type * as THREE from "three"

export default function NeuralPath() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.1
    }
  })

  const nodes = [
    { position: [-4, 2, 0], color: "#f97316" },
    { position: [0, 3, 0], color: "#3b82f6" },
    { position: [4, 1, 0], color: "#f97316" },
    { position: [2, -2, 0], color: "#3b82f6" },
    { position: [-2, -1, 0], color: "#f97316" },
  ]

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <Sphere key={i} position={node.position} args={[0.2, 16, 16]}>
          <meshStandardMaterial color={node.color} emissive={node.color} emissiveIntensity={0.5} />
        </Sphere>
      ))}

      {/* Neural connections */}
      {nodes.map((node, i) =>
        nodes
          .slice(i + 1)
          .map((nextNode, j) => (
            <Line
              key={`${i}-${j}`}
              points={[node.position, nextNode.position]}
              color="#f97316"
              lineWidth={2}
              transparent
              opacity={0.6}
            />
          )),
      )}
    </group>
  )
}
