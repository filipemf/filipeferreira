import i18next from 'i18next';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

import {AiFillGithub} from 'react-icons/ai'


const Work = () => {
  
  return (
    <div name='work' id='about' className='w-full h-[auto] bg-[#2d2f39] text-gray-300 pb-[30px]'>

      <div className='' style={{textAlign: 'center'}}>

        <div>
          <h1 className='timelineTitle font-bold text-5xl mb-[20px]'>Portfolio</h1>
        </div>

        <p className='mt-[30px]'>{i18next.t("portfolio.title")}</p>
        

      {/* <video autoPlay={true} loop={true} muted={true} playsInline={true}>
        <source src="videoteste.mp4" type="video/mp4" />
      </video> */}
      
        {/* <div className='splineContainer'>
          <Suspense fallback={<div>Loading...</div>}>
            <Spline id='spline' scene={require('./scene (1).splinecode')}/>
          </Suspense>
        </div> */}

        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='bg-[#2d2f39]'>
          <div className='flex flex-col items-center'>

            <h3 className='mb-50px'>{i18next.t("portfolio.firstWork.title")}</h3>

            <div className='splineContainer'>
              
              <video className='contratosVideo' muted={true} loop={'loop'} autoPlay={true}  defaultMuted={true} playsInline={true} onContextMenu={"return false"}  preload="auto" controls={false}>
                <source src='./contratos.mp4' type="video/mp4" />
              </video>
          
              {/* <Suspense fallback={<div>Loading...</div>}>
                <Spline id='spline' scene={require('./scene (3).splinecode')}/>
              </Suspense> */}
            </div>


            <div className='contents'>
                <p className='mt-[30px] p-[20px]'>{i18next.t("portfolio.firstWork.about")}</p>

                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 bg-pink-600'>
                    <a href='https://github.com/filipemf/DTGBS-Contratos' className='averageLink flex justify-between items-center w-full text-gray-300'>
                      {i18next.t("portfolio.button")} <AiFillGithub className='ml-[10px]' size={30}/>
                    </a>  
                    </button>
                </div>
            </div>
            


          </div>


        </SwiperSlide>



        <SwiperSlide className='bg-[#2d2f39]'>
          <div className='flex flex-col items-center'>

            <h3 className='mb-50px'>{i18next.t("portfolio.secondWork.title")}</h3>

            <div className='splineContainer'>
              
              <video className='contratosVideo' muted={true} loop={'loop'} autoPlay={true}  defaultMuted={true} playsInline={true} onContextMenu={"return false"}  preload="auto" controls={false}>
                <source src='./app2.mp4' type="video/mp4" />
              </video>
          
              {/* <Suspense fallback={<div>Loading...</div>}>
                <Spline id='spline' scene={require('./scene (3).splinecode')}/>
              </Suspense> */}
            </div>


            <div className='contents'>
                <p className='mt-[30px] p-[20px]'>{i18next.t("portfolio.secondWork.about")}</p>

                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 bg-pink-600'>
                    <a href='https://github.com/filipemf/Ravit' className='averageLink flex justify-between items-center w-full text-gray-300'>
                      {i18next.t("portfolio.button")} <AiFillGithub className='ml-[10px]' size={30}/>
                    </a>  
                    </button>
                </div>
            </div>
            


          </div>


        </SwiperSlide>


        <SwiperSlide className='bg-[#2d2f39]'>
          <div className='flex flex-col items-center'>

            <h3 className='mb-50px'>{i18next.t("portfolio.thirdWork.title")}</h3>

            <div className='splineContainer'>
              
              <video className='contratosVideo' muted={true} loop={'loop'} autoPlay={true}  defaultMuted={true} playsInline={true} onContextMenu={"return false"}  preload="auto" controls={false}>
                <source src='./facilitador.mp4' type="video/mp4" />
              </video>
          
              {/* <Suspense fallback={<div>Loading...</div>}>
                <Spline id='spline' scene={require('./scene (3).splinecode')}/>
              </Suspense> */}
            </div>


            <div className='contents'>
                <p className='mt-[30px] p-[20px]'>{i18next.t("portfolio.thirdWork.about")}</p>

                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 bg-pink-600'>
                    <a href='https://github.com/filipemf/electron-facilitador' className='averageLink flex justify-between items-center w-full text-gray-300'>
                      {i18next.t("portfolio.button")} <AiFillGithub className='ml-[10px]' size={30}/>
                    </a>  
                    </button>
                </div>
            </div>
            


          </div>


        </SwiperSlide>

      </Swiper>


        

      </div>
    </div>
  )
};

export default Work;
