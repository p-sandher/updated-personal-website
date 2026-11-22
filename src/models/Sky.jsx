import PropTypes from 'prop-types';
import { useGLTF } from '@react-three/drei'
import {useRef} from 'react'
import {useFrame} from '@react-three/fiber'

import skyScene from '../assets/3d/sky.glb'

const Sky = ( {isRotating}) => {
    const sky = useGLTF(skyScene);
    const skyRef = useRef();

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

Sky.propTypes = {
  isRotating: PropTypes.bool.isRequired,
};

export default Sky