import { useState, useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import useSpline from '@splinetool/r3f-spline';
import { OrthographicCamera } from '@react-three/drei';

export default function DTGBS({ ...props }) {
  const isSmallScreen = window.innerWidth < 768;
  const { nodes, materials } = useSpline('https://prod.spline.design/ONQKVYmtdGzyIW-I/scene.splinecode');
  const [rotationSpeed, setRotationSpeed] = useState(0.01); // adjust speed here

  const mesh = useRef()

  useFrame(() => {
    mesh.current.rotation.y += 0.01
    // mesh.current.position.y += 0.05
    // mesh.current.position.x += 0.03
    // const speed = 0.01; // adjust speed here
    // mesh.current.rotation.y += speed * delta;
    // mesh.current.position.y += speed * delta * 1;
    // mesh.current.position.x += speed * delta * 0.1;
  })

  return (
    <>
      <color attach="background" args={['#747682']} />
      <group {...props} dispose={null} ref={mesh}>
        <mesh
          name="criar-documento"
          geometry={nodes['criar-documento'].geometry}
          material={materials['criar-documento Material']}
          castShadow
          receiveShadow
          position={[140.75, 8.78, 79.63]}
          rotation={[-0.58, 0.77, 0.48]}
          scale={[0.8, 0.84, 0.61]}
        >
          <mesh
            name="Rectangle"
            geometry={nodes.Rectangle.geometry}
            material={materials['Rectangle Material']}
            castShadow
            receiveShadow
            position={[-525.15, 122.69, 147.3]}
          />
          <mesh
            name="Rectangle 2"
            geometry={nodes['Rectangle 2'].geometry}
            material={materials['Rectangle 2 Material']}
            castShadow
            receiveShadow
            position={[-525, 5.21, 149.55]}
            rotation={[0, 0, 0]}
            scale={1}
          />
          <mesh
            name="Rectangle 3"
            geometry={nodes['Rectangle 3'].geometry}
            material={materials['Rectangle 3 Material']}
            castShadow
            receiveShadow
            position={[99.5, -168, 70]}
          />
        </mesh>
        <OrthographicCamera
          name="1"
          zoom={isSmallScreen ? 0.35 : 0.6}
          makeDefault={true}
          far={100000}
          near={-100000}
          position={[810.5, 227.87, 545.21]}
          rotation={[-0.41, 0.93, 0.34]}
        />
        <hemisphereLight name="Default Ambient Light" intensity={0.75} />
      </group>
    </>
  );
}
