import React from 'react';
import { data } from "../data/data.js";


const Work = () => {

    // projects file
    const project = data;
    //setProject(data);
  
  return (
    <div name='work' id='about' className='w-full h-[auto] bg-[#2d2f39] text-gray-300 pb-[30px]'>
    <div className='flex flex-col justify-center items-center w-full '>
      <div className='' style={{textAlign: 'center'}}>
        <h1 className='timelineTitle font-bold text-5xl mt-[50px] mb-[30px]'>Portfolio</h1>
      </div>
    </div>
    </div>
  )
};

export default Work;
