import { useCallback, useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import HomeInfo from '../components/HomeInfo'

import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';
import Forest  from '../models/Forest';


const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [isIslandReady, setIsIslandReady] = useState(false);
  const handleIslandReady = useCallback(() => setIsIslandReady(true), []);

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
    <section className='w-full h-screen relative bg-gradient-to-b from-sky-200 via-sky-100 to-slate-100' aria-busy={!isIslandReady}>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo  currentStage={currentStage} />}
      </div>

      {isIslandReady && (
        <div className='pointer-events-none absolute bottom-8 left-1/2 z-20 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 rounded-2xl border border-white/25 bg-slate-900/80 px-5 py-4 text-white shadow-lg backdrop-blur-md'>
          <div className='hidden items-center justify-center gap-4 sm:flex'>
            <div className='flex shrink-0 gap-2'>
              <kbd aria-label='Left arrow key' className='arrow-key-intro inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/70 bg-white/95 font-sans text-2xl font-semibold text-slate-900 shadow-md'>
                ←
              </kbd>
              <kbd aria-label='Right arrow key' className='arrow-key-intro arrow-key-intro-delay inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/70 bg-white/95 font-sans text-2xl font-semibold text-slate-900 shadow-md'>
                →
              </kbd>
            </div>
            <div>
              <p className='font-semibold'>Use your keyboard to explore</p>
              <p className='mt-1 text-sm text-white/80'>Press ← or →, or drag the island.</p>
            </div>
          </div>
          <div className='text-center sm:hidden'>
            <p className='font-semibold'>Swipe to explore the island</p>
            <p className='mt-1 text-sm text-white/80'>Drag left or right to discover each section.</p>
          </div>
        </div>
      )}

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        dpr={[1, 1.5]}
        camera={{ near: 0.1, far: 1000 }}
      >
        <directionalLight position={[1, 1, 1]} intensity={2}/>
        <ambientLight intensity={0.5} />
        <hemisphereLight skyColour="#b1e1ff" groundColor="#000000" intensity={1}/>

        <Suspense fallback={null}>
          <Bird />
        </Suspense>
        <Suspense fallback={null}>
          <Sky isRotating={isRotating} />
        </Suspense>

        <Suspense fallback={null}>
          <Forest
            position={islandPosition}
            scale= {islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            onReady={handleIslandReady}
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

      </Canvas>
      
    </section>
  )
}

export default Home
