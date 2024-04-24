import { useGLTF } from '@react-three/drei'
import {useRef} from 'react'
import {useFrame} from '@react-three/fiber'

import skyScene from '../assets/3d/sky.glb'

const Sky = ( {isRotating}) => {
    const sky = useGLTF(skyScene);
    const skyRef = useRef();

    const { scene, nodes, materials, error } = useGLTF(skyScene);

    if (error) {
        console.error("Failed to load GLTF:", error);
        return <div>Error loading model.</div>;
      }
      
      console.log("Scene:", scene);
      console.log("Nodes:", nodes);
      console.log("Materials:", materials);

    useFrame( (_, delta) => {
        if(isRotating) {
            skyRef.current.rotation.y += 0.25 * delta 
        }
    })
    return (
        <mesh 
            ref={skyRef} 
            material-transparent={true} 
            material-opacity={0.5}
            // scale={[-5, -5, -5]}
        >
            <primitive object={sky.scene} />
        </mesh>
    )
}

export default Sky