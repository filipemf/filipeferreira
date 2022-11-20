import React, {useEffect, useRef, Suspense, useState} from 'react';

import { HiCode,HiArrowNarrowDown,HiDatabase,HiCloud} from "react-icons/hi";

import { Link } from 'react-scroll';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";


import $ from 'jquery'

const Spline = React.lazy(() => import('@splinetool/react-spline'));



const Work = () => {
  const [scrollEnabled, setScrollEnabled] = useState(true);

  const myRefFE = useRef();
  const myRefBE = useRef();
  const myRefDB = useRef();
  

  function toggleSkillsFE(){
    let skillsContent = document.getElementsByClassName('skills__content fe')
    let itemClass = myRefFE

    console.log(itemClass.current.parentElement.className)
    
    if(itemClass.current.parentElement.className === 'skills__content fe skills__close'){
      console.log('abrir')
      itemClass.current.parentElement.className = 'skills__content fe skills__open'
    }
    else{
      for(let i=0;i<skillsContent.length; i++){
        skillsContent[i].className = 'skills__content fe skills__close'
      }
    }
  }

  
  function toggleSkillsBE(){
    let skillsContent = document.getElementsByClassName('skills__content be')
    let itemClass = myRefBE

    console.log(itemClass.current.parentElement.className)
    
    if(itemClass.current.parentElement.className === 'skills__content be skills__close'){
      console.log('abrir')
      itemClass.current.parentElement.className = 'skills__content be skills__open'
    }
    else{
      for(let i=0;i<skillsContent.length; i++){
        skillsContent[i].className = 'skills__content be skills__close'
      }
    }
  }
  
   
  function toggleSkillsDB(){
    let skillsContent = document.getElementsByClassName('skills__content db')
    let itemClass = myRefDB

    console.log(itemClass.current.parentElement.className)
    
    if(itemClass.current.parentElement.className === 'skills__content db skills__close'){
      console.log('abrir')
      itemClass.current.parentElement.className = 'skills__content db skills__open'
    }
    else{
      for(let i=0;i<skillsContent.length; i++){
        skillsContent[i].className = 'skills__content db skills__close'
      }
    }
  }

  function prevent(e){
    console.log(e)
    if (e.cancelable) {
      console.log('vai vai')
      e.preventDefault();
   }
  }

  useEffect(()=>{
    $("#spline").bind("wheel mousewheel", function(e) {
      console.log('vai vai')
      e.preventDefault()
    });
  })
    
  
  return (
    <div name='work' id='about' className='w-full h-[100vh] bg-[#2d2f39] text-gray-300 pb-[30px]'>

      <div className='' style={{textAlign: 'center'}}>
        <h1 className='timelineTitle font-bold text-5xl mb-[30px]'>Portfolio</h1>
      
      
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

            <h3 className='mb-50px'>DTGBS - Contratos</h3>

            <div className='splineContainer'>
              <Suspense fallback={<div>Loading...</div>}>
                <Spline id='spline' scene={require('./scene (3).splinecode')}/>
              </Suspense>
            </div>

            <p className='mt-[30px]'>Programa criado com o objetivo de automatizar a criação de documentos.</p>

            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 bg-pink-600'>
                <a href='https://github.com/filipemf/DTGBS-Contratos' className='averageLink flex justify-between items-center w-full text-gray-300'>
                    Acessar
                </a>  
                </button>
            </div>


          </div>


        </SwiperSlide>
        <SwiperSlide>Logo...</SwiperSlide>
        <SwiperSlide>Logo...</SwiperSlide>

      </Swiper>


        

      </div>
    </div>
  )
};

export default Work;
