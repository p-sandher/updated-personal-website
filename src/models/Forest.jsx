/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: nimzu (https://sketchfab.com/nimzuk)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/foxs-islands-163b68e09fcc47618450150be7785907
Title: Fox's islands
*/

import { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber'
import { a } from '@react-spring/three'
import islandScene from '../assets/3d/baker_and_the_bridge.glb';

const Forest = ({isRotating, setIsRotating, setCurrentStage, ...props}) => {
    const islandRef = useRef();

    const {gl, viewport } = useThree();

    const { nodes, materials } = useGLTF(islandScene)

    const lastX = useRef(0);
    const rotationSpeed = useRef(0);
    const dampingFactor = 0.95;

    const handlePointerDown = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(true);

        const clientX = event.touches 
            ? event.touches[0].clientX 
            : event.clientX;
        lastX.current = clientX;
    }

    const handlePointerUp = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(false);
    }

    const handlePointerMove = (e) => {
        e.stopPropagation();
        e.preventDefault();

        if(isRotating) {
          const clientX = event.touches 
          ? event.touches[0].clientX 
          : event.clientX;

          const delta = (clientX - lastX.current) / viewport.width;
          
          islandRef.current.rotation.y += delta * 0.01 * Math.PI;
          lastX.current = clientX;
          rotationSpeed.current = delta * 0.01 * Math.PI;
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') {
            if(!isRotating) setIsRotating(true);
            islandRef.current.rotation.y += 0.01 * Math.PI;
        } else if (e.key === 'ArrowRight') {
            if(!isRotating) setIsRotating(true);
            islandRef.current.rotation.y -= 0.01 * Math.PI;
        }
    }

    const handleKeyUp = (e) => {
        if(e.key === 'ArrowLeft' || e.key === 'ArrowRight'){
            setIsRotating(false);
        }
    }

    useFrame(() =>{
        if(!isRotating) {
            rotationSpeed.current *= dampingFactor;
            
            if(Math.abs(rotationSpeed.current) < 0.001) {
                rotationSpeed.current = 0;
            } 
            islandRef.current.rotation.y += rotationSpeed.current;
        } else {
            const rotation = islandRef.current.rotation.y;
            const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
            console.log(normalizedRotation)
            // Set the current stage based on the island's orientation
            // switch (true) {
            //     case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
            //     setCurrentStage(4);
            //     break;
            //     case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
            //     setCurrentStage(3);
            //     break;
            //     case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
            //     setCurrentStage(2);
            //     break;
            //     case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
            //     setCurrentStage(1);
            //     break;
            //     default:
            //     setCurrentStage(null);
            // }

            switch (true) {
                case normalizedRotation >= 5.3 && normalizedRotation <= 5.5:
                setCurrentStage(2);
                break;
                case normalizedRotation >= 0.6 && normalizedRotation <= 0.9:
                setCurrentStage(5);
                break;
                case normalizedRotation >= 2.4 && normalizedRotation <= 2.7:
                setCurrentStage(4);
                break;
                // case normalizedRotation >= 3.1 && normalizedRotation <= 3.3:
                // setCurrentStage(3);
                // break;
                case normalizedRotation >= 3.8 && normalizedRotation <= 4.0:
                setCurrentStage(3);
                break;
                case normalizedRotation >= 6.01 && normalizedRotation <= 6.45:
                setCurrentStage(1);
                break;
                default:
                setCurrentStage(null);
            }
            
        }
        
    })

    useEffect (()  => {
        const canvas = gl.domElement;
        canvas.addEventListener('pointerdown', handlePointerDown);
        canvas.addEventListener('pointerup', handlePointerUp);
        canvas.addEventListener('pointermove', handlePointerMove);
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        return () => {
            canvas.removeEventListener('pointerdown', handlePointerDown);
            canvas.removeEventListener('pointerup', handlePointerUp);
            canvas.removeEventListener('pointermove', handlePointerMove);
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);

        }

    }, [gl, handlePointerDown, handlePointerMove, handlePointerUp])

  return (
    <a.group ref={islandRef}{...props}>
      <group rotation={[Math.PI / 2, 0, -Math.PI]}>
        <group rotation={[-Math.PI, 0, 0]} scale={0.01}>
          <group rotation={[0, 0, -Math.PI / 2]} scale={100}>
            <mesh geometry={nodes.characters_STONE_a_0.geometry} material={materials.STONE_a} />
            <mesh geometry={nodes.characters_STONE_a_0_1.geometry} material={materials.STONE_a} />
          </group>
          <group rotation={[0, 0, -Math.PI / 2]} scale={100}>
            <mesh geometry={nodes.characters007_bush_0.geometry} material={materials.bush} />
            <mesh geometry={nodes.characters007_bush_0_1.geometry} material={materials.bush} />
          </group>
          <mesh
            geometry={nodes.characters001_charcters_0.geometry}
            material={materials.charcters}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.characters002_watermill_0.geometry}
            material={materials.watermill}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.characters003_terrain_left_0.geometry}
            material={materials.terrain_left}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.characters004_house_0.geometry}
            material={materials.house}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.characters005_bridge_0.geometry}
            material={materials.bridge}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.characters006_tree_0.geometry}
            material={materials.tree}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.characters008_water_0.geometry}
            material={materials.water}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.characters009_terrain_right_0.geometry}
            material={materials.terrain_right}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.characters010_wheat_0.geometry}
            material={materials.wheat}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
        </group>
      </group>
    </a.group>
  );
}

export default Forest;