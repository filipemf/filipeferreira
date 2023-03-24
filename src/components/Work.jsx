import i18next from 'i18next';
import { Suspense, useState,  useRef, useEffect } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import 'react-awesome-button/dist/styles.css';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cube";

// import required modules
import {Pagination, Navigation} from "swiper";
import SwiperCore from 'swiper/core';

import {AiFillGithub} from 'react-icons/ai'
import { AwesomeButton } from "react-awesome-button";

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'


import DTGBS from '../js/DTGBS'
import Ravit from '../js/Ravit';
import Facilitador from '../js/Facilitador';


function SpinningDTGBS() {
  const mesh = useRef()

  useFrame(() => {
    mesh.current.rotation.y += 0.01
    mesh.current.position.y += 0.01
    mesh.current.position.x += 0.05
  })

  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <DTGBS />
    </mesh>
  )
}

function CameraController() {
  const controlsRef = useRef();

  useFrame((state) => {
    controlsRef.current.target.y += 0.01;
    controlsRef.current.update();
  });

  return <OrbitControls ref={controlsRef} />;
}

const Work = () => {
  const [bgColor, setBgColor] = useState('#2d2f39');

  SwiperCore.use([Pagination, Navigation]);

  const handleSlideChange = (swiper) => {
    const activeSlide = swiper.slides[swiper.activeIndex]; // get the active slide

    if (activeSlide.classList.contains('dtgbs')) { // check if the active slide has the class 'dtgbs'
      setBgColor('#ff2474'); // set background color to gray if the active slide has the class 'dtgbs'
      console.log('dtgbs')
    } 
    else if (activeSlide.classList.contains('ravit')) {
      setBgColor('#3094d4');
      console.log('ravit')
    }
    else{
      setBgColor('#482c84');
      console.log('facilitador')
    }

    
  };



  return (
    <div name='work' id='about' className='w-auto h-[auto] text-gray-300 pb-[30px]' style={{backgroundColor:bgColor}}>

      <div className='' style={{textAlign: 'center'}}>

        <div className='inline-block mt-[40px]'>
          <h1 className='timelineTitle font-bold text-5xl mb-[20px] text-[#fff]'>Portfolio</h1>
        </div>


          <div className='swiperContainer'>
            <Swiper

              cssMode={true}
              navigation={true}
              keyboard={true}
              loop={true}

              // onSlideChange={(swiper) => handleSlideChange(swiper)} // call handleSlideChange function on slide change

              grabCursor={true}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              pagination={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"

            >

              {/* DTGBS */}
              <SwiperSlide className='dtgbs'>
                <h3 className='portfolioTitles mb-50px text-[#fff]'>{i18next.t("portfolio.firstWork.title")}</h3>

                <p className='mt-[30px] p-[20px] text-[#fff]'>{i18next.t("portfolio.firstWork.about")}</p>

                <div style={{marginBottom: '15px'}}>
                  <a href="https://github.com/filipemf/DTGBS-Contratos" target="_blank" rel="noreferrer">
                    <AwesomeButton size='large' style={{'height':'70px'}} type="primary" after={<AiFillGithub className='ml-[10px]' size={30}/>}>{i18next.t("portfolio.button")}</AwesomeButton>
                  </a>
                </div>
                  
                <div className='canvasContainer'>
                  <Suspense fallback={<div>Loading...</div>}>
                    <Canvas shadows flat linear>
                      <DTGBS/>
                      <OrbitControls  autoRotate
                        enablePan={true}
                        enableDamping
                        dampingFactor={0.1}
                        rotateSpeed={0.5}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}/>

                    {/* <CameraController /> */}
                    </Canvas>
                  </Suspense>
                </div>
              </SwiperSlide>



              {/* RAVIT */}
              <SwiperSlide className='ravit'>
                <h3 className='portfolioTitles mb-50px text-[#fff]'>{i18next.t("portfolio.secondWork.title")}</h3>

                <p className='mt-[30px] p-[20px] text-[#fff]'>{i18next.t("portfolio.secondWork.about")}</p>

                <div style={{marginBottom: '15px'}}>
                  <a href='https://github.com/filipemf/Ravit' target="_blank" rel="noreferrer">
                    <AwesomeButton size='large' style={{'height':'70px'}}  type="primary" after={<AiFillGithub className='ml-[10px]' size={30}/>}>{i18next.t("portfolio.button")}</AwesomeButton>
                  </a>
                </div>
                  
                <div className='canvasContainer'>
                  <Suspense fallback={<div>Loading...</div>}>
                    <Canvas shadows flat linear >
                      <Ravit />
                      <OrbitControls  autoRotate
                        enablePan={true}
                        enableDamping
                        dampingFactor={0.1}
                        rotateSpeed={0.5}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}/>
                    </Canvas>
                  </Suspense>
                </div>
              </SwiperSlide>
              



              {/* FACILITADOR */}
              <SwiperSlide className='facilitador'>
                <h3 className='portfolioTitles mb-50px text-[#fff]'>{i18next.t("portfolio.thirdWork.title")}</h3>

                <p className='mt-[30px] p-[20px] text-[#fff]'>{i18next.t("portfolio.thirdWork.about")}</p>

                <div style={{marginBottom: '15px'}}>
                  <a href='https://github.com/filipemf/electron-facilitador' target="_blank" rel="noreferrer">
                    <AwesomeButton size='large' style={{'height':'70px'}}  type="primary" after={<AiFillGithub className='ml-[10px]' size={30}/>}>{i18next.t("portfolio.button")}</AwesomeButton>
                  </a>
                </div>
                  
                <div className='canvasContainer'>
                  <Suspense fallback={<div>Loading...</div>}>
                    <Canvas shadows flat linear >
                      <Facilitador />
                      <OrbitControls  
                        autoRotate
                        enablePan={true}
                        enableDamping
                        dampingFactor={0.1}
                        rotateSpeed={0.5}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}/>
                    </Canvas>
                  </Suspense>
                </div>
              </SwiperSlide>

            </Swiper>

          </div>
          
      </div>
    </div>
  )

  
};

export default Work;
