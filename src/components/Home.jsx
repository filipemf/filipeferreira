import i18next from 'i18next';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-scroll';
import Typed from 'typed.js';
import {AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp} from 'react-icons/ai'

const Home = () => {
  const [content, setContent] = useState(i18next.t("home.button"));

  useEffect(()=>{
    new Typed('.auto-type',{
      strings: [i18next.t("home.titles.title1"), i18next.t("home.titles.title2"), i18next.t("home.titles.title3")],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,

    })


    const elem = document.querySelector(".btn");
    const beforeElem = window.getComputedStyle(elem, "::before");

    // Update the content property of the ::before pseudo-element
    elem.style.setProperty("content", "new content");

    // Log the updated value of the content property
    console.log(beforeElem.getPropertyValue("content"));



  }, [])


  

  return (
    <div name='home' id='home' className='w-full h-screen bg-[#22232a]'>
      {/* Container */}
      <div className=' mx-auto px-8 flex flex-col justify-center h-full'>
        
        <div className='homeContainer flex mt-[100px] justify-center'>
          <div className='homeText width-[695px]'>

            <h1 className='text-4xl sm:text-5xl font-bold text-[#ccd6f6]'>
              Filipe Ferreira
            </h1>
          
          <div className='inline-flex'>
            <h2 className='auto-type'></h2>
          </div>

          <div className=''>

            <div className='contactDiv'>
              <a className='averageLink flex justify-between items-center w-full text-gray-300'
                href='https://github.com/filipemf' target="_blank" rel="noreferrer"
                >
                  <AiFillGithub size={30}/>
              </a>
            </div>

            <div className='contactDiv'>
              <a className='averageLink flex justify-between items-center w-full text-gray-300'
                href='https://www.linkedin.com/in/filipemarquesf/' target="_blank" rel="noreferrer"
                >
                  <AiFillLinkedin size={30}/>
              </a>
            </div>

            <div className='contactDiv'>
              <a className='averageLink flex justify-between items-center w-full text-gray-300'
                href="//api.whatsapp.com/send?phone=5511967174160" target="_blank" rel="noreferrer"
                >
                  <AiOutlineWhatsApp size={30}/>
              </a>
            </div>
          </div>
            

            <p className='text-[#8892b0] py-4 max-w-[700px] text-justify'>
            {i18next.t("home.about")}
            </p>

            <div>


              <Link className='btn' id='btn' to='about' smooth={true} duration={500} style={{ "--content": `"${content}"` }}></Link>

            </div>

          </div>



          <div className='containerPhoto'>
            <img className='image h-[500px]' src='../assets/foto-nova-2.png' alt="HTML icon" />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
