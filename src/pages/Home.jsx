import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import HomeInfo from '../components/HomeInfo'

import Island from '../models/Island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';
import Forest  from '../models/Forest';


const Home = () => {
  const [isRotating, setIsRotating] = useState(false);

  const [currentStage, setCurrentStage] = useState(1)

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0,-6.5,-43];

    let rotation = [0.1, 0, 0];

    if(window.innerWidth < 768) {
      screenScale = [1, 1, 1];
    } else {
      screenScale = [1.75, 1.75, 1.75];
    }
    return [screenScale, screenPosition, rotation]
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;
    
    if(window.innerWidth < 768) {
      screenScale = [1.25, 1.25, 1.25];
      screenPosition = [0, -1.5, 0]
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4]
    }
    return [screenScale, screenPosition];
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo  currentStage={currentStage} />}
      </div>

      <div className='pointer-events-none absolute bottom-8 left-1/2 z-20 w-[92%] max-w-3xl -translate-x-1/2 rounded-xl border border-white/50 bg-black/55 px-4 py-2 text-center text-base text-white backdrop-blur-md sm:text-[1.05rem]'>
        <p className='whitespace-nowrap'>
          Drag (or{" "}
          <span className='arrow-key-intro mx-1 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/60 bg-white/20 text-2xl font-bold text-white shadow-[0_4px_14px_rgba(0,0,0,0.35)]'>
            ←
          </span>
          <span className='arrow-key-intro arrow-key-intro-delay mx-1 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/60 bg-white/20 text-2xl font-bold text-white shadow-[0_4px_14px_rgba(0,0,0,0.35)]'>
            →
          </span>
          ) to rotate • Explore sections around the island
        </p>
      </div>
      
    
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        dpr={[1, 1.5]}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2}/>
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColour="#b1e1ff" groundColor="#000000" intensity={1}/>
          
          <Suspense fallback={null}>
            <Bird />
          </Suspense>
          <Sky 
            isRotating={isRotating}
          />
 
          <Suspense
            fallback={
              <Island
                position={islandPosition}
                scale={islandScale}
                rotation={islandRotation}
                isRotating={isRotating}
                setIsRotating={setIsRotating}
                setCurrentStage={setCurrentStage}
              />
            }
          >
            <Forest 
              position={islandPosition}
              scale= {islandScale}
              rotation={islandRotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage}
            />
          </Suspense>
          <Suspense fallback={null}>
            <Plane 
              isRotating={isRotating}
              scale={planeScale}
              position={planePosition}
              rotation={[0, 20, 0]}
            />
          </Suspense>

        </Suspense>
      </Canvas>
      
    </section>
  )
}

export default Home
