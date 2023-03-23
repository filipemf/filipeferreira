import i18next from 'i18next';
import { Suspense } from 'react'
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

import {AiFillGithub} from 'react-icons/ai'
import { AwesomeButton } from "react-awesome-button";

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'


import DTGBS from '../js/DTGBS'
import Ravit from '../js/Ravit';
import Facilitador from '../js/Facilitador';


const Work = () => {

  return (
    <div name='work' id='about' className='w-auto h-[auto] bg-[#2d2f39] text-gray-300 pb-[30px]'>

      <div className='' style={{textAlign: 'center'}}>

        <div className='inline-block mt-[40px]'>
          <h1 className='timelineTitle font-bold text-5xl mb-[20px]'>Portfolio</h1>
        </div>


          <div className='swiperContainer'>
            <Swiper

              cssMode={true}
              navigation={true}
              keyboard={true}
              loop={true}

              effect={"cube"}
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
              <SwiperSlide>

                <h3 className='portfolioTitles mb-50px'>{i18next.t("portfolio.firstWork.title")}</h3>

                <p className='mt-[30px] p-[20px]'>{i18next.t("portfolio.firstWork.about")}</p>

                <div style={{marginBottom: '15px'}}>
                  <a href="https://github.com/filipemf/DTGBS-Contratos" target="_blank" rel="noreferrer">
                    <AwesomeButton size='large' style={{'height':'70px'}} type="primary" after={<AiFillGithub className='ml-[10px]' size={30}/>}>{i18next.t("portfolio.button")}</AwesomeButton>
                  </a>
                </div>
                  
                <div className='canvasContainer'>
                  <Suspense fallback={<div>Loading...</div>}>
                    <Canvas shadows flat linear >
                      <DTGBS />
                      <OrbitControls />
                    </Canvas>
                  </Suspense>
                </div>

              </SwiperSlide>



              {/* RAVIT */}
              <SwiperSlide>

                <h3 className='portfolioTitles mb-50px'>{i18next.t("portfolio.secondWork.title")}</h3>

                <p className='mt-[30px] p-[20px]'>{i18next.t("portfolio.secondWork.about")}</p>

                <div style={{marginBottom: '15px'}}>
                  <a href='https://github.com/filipemf/Ravit' target="_blank" rel="noreferrer">
                    <AwesomeButton size='large' style={{'height':'70px'}}  type="primary" after={<AiFillGithub className='ml-[10px]' size={30}/>}>{i18next.t("portfolio.button")}</AwesomeButton>
                  </a>
                </div>
                  
                <div className='canvasContainer'>
                  <Suspense fallback={null}>
                    <Canvas shadows flat linear >
                      <Ravit />
                      <OrbitControls />
                    </Canvas>
                  </Suspense>
                </div>

              </SwiperSlide>




              {/* FACILITADOR */}
              <SwiperSlide>

                <h3 className='portfolioTitles mb-50px'>{i18next.t("portfolio.thirdWork.title")}</h3>

                <p className='mt-[30px] p-[20px]'>{i18next.t("portfolio.thirdWork.about")}</p>

                <div style={{marginBottom: '15px'}}>
                  <a href='https://github.com/filipemf/electron-facilitador' target="_blank" rel="noreferrer">
                    <AwesomeButton size='large' style={{'height':'70px'}}  type="primary" after={<AiFillGithub className='ml-[10px]' size={30}/>}>{i18next.t("portfolio.button")}</AwesomeButton>
                  </a>
                </div>
                  
                <div className='canvasContainer'>
                  <Suspense fallback={null}>
                    <Canvas shadows flat linear >
                      <Facilitador />
                      <OrbitControls />
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
