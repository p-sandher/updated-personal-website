import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import HomeInfo from '../components/HomeInfo'

import Island  from '../models/Island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';
import Forest  from '../models/Forest';


const Home = () => {
  const [isRotating, setIsRotating] = useState(false);

  const [currentStage, setCurrentStage] = useState(1)

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    // let screenPosition = [0,-6.5,-43];
    let screenPosition = [0,-6.5,-43];

    // let rotation = [0.1, 4.7, 0];
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
  console.log({currentStage});
  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo  currentStage={currentStage} />}
      </div>

      <div>
        {currentStage === 1 && (
        <div className='absolute top-60 left-0 right-0 z-10 flex items-center justify-center'>
          <div class="my-40 flex">
            <div class="relative mx-auto mt-5 animate-[propel_5s_infinite]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="grey" class="h-16 w-16">
                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
              </svg>
            </div>
          </div>
        </div>
         )}
      </div>
      

      {/* <div className='absolute top-60 left-0 right-0 z-10 flex items-center justify-center'>
        <div class="my-40 flex">
          <div class="relative mx-auto mt-5 animate-[propel_5s_infinite]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" class="h-16 w-16">
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
          </div>
        </div>
      </div> */}

      
    
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2}/>
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColour="#b1e1ff" groundColor="#000000" intensity={1}/>
          
          <Bird />
          <Sky 
            isRotating={isRotating}
          />
          {/* <Island 
            position={islandPosition}
            scale= {islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          /> */}
          <Forest 
            position={islandPosition}
            scale= {islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
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