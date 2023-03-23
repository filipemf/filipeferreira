/*
  Auto-generated by Spline
*/

import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'

export default function Ravit({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/KHEZrR2B0VfEtlbw/scene.splinecode')
  return (
    <>
      <color attach="background" args={['#747682']} />
      <group {...props} dispose={null}>
        <group name="Group" position={[-375.23, -152.57, 31.57]} rotation={[0, -0.49, 0]}>
          <mesh
            name="noticias"
            geometry={nodes.noticias.geometry}
            material={materials['noticias Material']}
            castShadow
            receiveShadow
            position={[163.4, 420.06, -75.66]}
            rotation={[-0.32, 0.57, 0.23]}
            scale={[0.8, 0.84, 0.61]}
          />
          <mesh
            name="metas"
            geometry={nodes.metas.geometry}
            material={materials['metas Material']}
            castShadow
            receiveShadow
            position={[-2.83, -27.32, 172.31]}
            rotation={[-0.1, 0.82, 0.23]}
            scale={[0.8, 0.84, 0.61]}
          />
          <mesh
            name="perfil"
            geometry={nodes.perfil.geometry}
            material={materials['perfil Material']}
            castShadow
            receiveShadow
            position={[685.09, 324.25, -471.07]}
            rotation={[-0.77, 0.94, 0.62]}
            scale={[0.8, 0.84, 0.61]}
          />
          <mesh
            name="feed"
            geometry={nodes.feed.geometry}
            material={materials['feed Material']}
            castShadow
            receiveShadow
            position={[554.82, -85.08, -261.73]}
            rotation={[-Math.PI / 6, 0.7, Math.PI / 6]}
            scale={[0.8, 0.84, 0.61]}
          />
        </group>
        <OrthographicCamera zoom={0.43} name="1" makeDefault={true} far={100000} near={-100000} position={[0, 0, 1000]} />
        <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
      </group>
    </>
  )
}

