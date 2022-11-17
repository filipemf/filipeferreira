import React, {useEffect, useRef} from 'react';
import { data } from "../data/data.js";

import { HiCode,HiArrowNarrowDown,HiDatabase,HiCloud} from "react-icons/hi";


const Work = () => {

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
    
  
  return (
    <div name='work' id='about' className='w-full h-[100vh] bg-[#2d2f39] text-gray-300 pb-[30px]'>
    <div className='flex flex-col justify-center items-center w-full '>
      <div className='' style={{textAlign: 'center'}}>
        <h1 className='timelineTitle font-bold text-5xl mt-[50px] mb-[30px]'>Portfolio</h1>
      

      </div>
    </div>
    </div>
  )
};

export default Work;
