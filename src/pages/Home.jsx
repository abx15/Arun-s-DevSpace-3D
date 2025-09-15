import React, { useState, useEffect, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'

import Island from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import Homeinfo from '../components/Homeinfo'

const Home = () => {
  const [isRotating, setIsRotating] = useState(false)
  const [currentStage, setCurrentStage] = useState(1)
  const [islandSettings, setIslandSettings] = useState({
    scale: [1, 1, 1],
    position: [0, -6.5, -43],
    rotation: [0.1, 4.7, 0],
  })
  const [planeSettings, setPlaneSettings] = useState({
    scale: [3, 3, 3],
    position: [0, -4, -4],
  })

  // Adjust objects based on screen size
  const updateSettings = () => {
    if (window.innerWidth < 768) {
      setIslandSettings({
        scale: [0.9, 0.9, 0.9],
        position: [0, -6.5, -43],
        rotation: [0.1, 4.7, 0],
      })
      setPlaneSettings({
        scale: [1.5, 1.5, 1.5],
        position: [0, -1.5, 0],
      })
    } else {
      setIslandSettings({
        scale: [1, 1, 1],
        position: [0, -6.5, -43],
        rotation: [0.1, 4.7, 0],
      })
      setPlaneSettings({
        scale: [3, 3, 3],
        position: [0, -4, -4],
      })
    }
  }

  // Handle resize
  useEffect(() => {
    updateSettings()
    window.addEventListener('resize', updateSettings)
    return () => window.removeEventListener('resize', updateSettings)
  }, [])

  return (
    <section className="w-full h-screen relative">
      {/* Info Overlay */}
      {currentStage && (
        <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
          <Homeinfo currentStage={currentStage} />
        </div>
      )}

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          {/* Lights */}
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight />
          <spotLight />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

          {/* Models */}
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            position={islandSettings.position}
            scale={islandSettings.scale}
            rotation={islandSettings.rotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            scale={planeSettings.scale}
            position={planeSettings.position}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home
