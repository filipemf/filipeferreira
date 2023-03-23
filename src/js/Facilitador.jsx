/*
  Auto-generated by Spline
*/

import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'

export default function Facilitador({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/sSiJqAAFx7QBdjIm/scene.splinecode')
  return (
    <>
      <color attach="background" args={['#747682']} />
      <group {...props} dispose={null}>
        <mesh
          name="criar-documento"
          geometry={nodes['criar-documento'].geometry}
          material={materials['criar-documento Material']}
          castShadow
          receiveShadow
          position={[-62.99, 42.94, 90.99]}
          rotation={[-0.23, -0.17, 0.01]}
          scale={[0.82, 0.85, 0.62]}
        >
          <mesh
            name="Rectangle"
            geometry={nodes.Rectangle.geometry}
            material={materials['Rectangle Material']}
            castShadow
            receiveShadow
            position={[-118.77, 152.19, 55.2]}
            rotation={[-0.07, -0.01, 0]}
            scale={[1.23, 1.18, 1.61]}
          />
        </mesh>
        <OrthographicCamera zoom={0.43} name="1" makeDefault={true} far={100000} near={-100000} position={[0, 0, 1000]} />
        <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
      </group>
    </>
  )
}

