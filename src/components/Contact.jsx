import React, {useRef, useEffect} from 'react'
import {AiFillGithub, AiFillLinkedin, AiFillMail} from 'react-icons/ai'
import emailjs from '@emailjs/browser';

import Swal from 'sweetalert2'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) =>{
    e.preventDefault();

    emailjs.sendForm('service_g749kaq', 'template_2wtd1ue', form.current, 'csBTGeyPlCSQUcwXM')
      .then((result) => {
          console.log(result.text);
          Swal.fire(
            'Contato', 'Contato enviado com sucesso! Entrarei em contato assim que possível. Obrigado!', 'success'
          )
      }, (error) => {
          console.log(error.text);
          Swal.fire(
            'Contato', 'Ops! Algo deu errado! Certifique-se que todas as informações foram digitadas corretamente.',  'error  '
          )
      });
      e.target.reset()



  }

  return (
    <div name='contact' className='w-full h-auto bg-[#22232A] text-gray-300 text-center items-center justify-center'>
      <div className='flex flex-col justify-center items-center w-full '>

      
        <h1 className='timelineTitle font-bold text-5xl mb-[30px] mt-[30px]'>Contato</h1>


        <div style={{display: 'flex;'}}>
          <div>
            <form className='flex flex-col max-w-[600px] w-full text-[#000]' ref={form} onSubmit={sendEmail}>
                <input className='bg-[#d1d4db] p-2' type="text" placeholder='Seu nome' name='from_name' required/>
                <input className='my-4 p-2 bg-[#d1d4db]' type="email" placeholder='Seu email' name='reply_to' required/>
                <textarea className='bg-[#d1d4db] p-2' name="message" rows="10" placeholder='O que deseja escrever?' required></textarea>
                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center bg-pink-600'>Entrar em contato</button>
              </form>
          </div>


          <div className='pb-[50px]'>

            <div className='contactDiv'>
              <a className='averageLink flex justify-between items-center w-full text-gray-300'
                href='https://github.com/filipemf'
                >
                  Github<AiFillGithub size={30}/>
              </a>
            </div>

            <div className='contactDiv'>
              <a className='averageLink flex justify-between items-center w-full text-gray-300'
                href='https://www.linkedin.com/in/filipemarquesf/'
                >
                  Linkedin<AiFillLinkedin size={30}/>
              </a>
            </div>

            <div className='contactDiv'>
              <a className='averageLink flex justify-between items-center w-full text-gray-300'
                href='mailto:filipemarquesf01@gmail.com?Subject=Contato%20Filipe%20Ferreira&Body=Oi%21%20Gostei%20do%20seu%20trabalho%21%20Podemos%20entrar%20em%20contato%3F'
                >
                  Mail<AiFillMail size={30}/>
              </a>
            </div>

          </div>
        </div>
        
        
      </div>
    </div>
  )
}

export default Contact