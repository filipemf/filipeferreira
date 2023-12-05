import React, {useState, useEffect} from 'react'
import {SlArrowUp} from 'react-icons/sl'

const BackToTop = () => {
    const [backToTopButton, setBackToTopButton] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 100){
                setBackToTopButton(true)
            }
            else{
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
  return (
    <div>
      {backToTopButton && (
        <button className='fixed bottom-[50px] z-[10] right-[50px] h-[50px] w-[50px] bg-[#87121d] border-solid border-2 border-white rounded' onClick={scrollUp} >
            <SlArrowUp className='ml-[12px] text-[#fff]' size={20}/>
        </button>
      )}
    </div>
  )
}

export default BackToTop