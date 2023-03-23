import React, {useRef, useEffect} from 'react'
import i18next from 'i18next';
import {AiFillGithub, AiFillLinkedin, AiFillMail, AiOutlineDownload, AiOutlineSend, AiOutlineWhatsApp,AiOutlineFileText} from 'react-icons/ai'
import emailjs from '@emailjs/browser';

import Swal from 'sweetalert2'

// import '../../src/contact.scss'

import { AwesomeButton, AwesomeButtonProgress } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';

import {fireConfetti} from '../js/confetti'

const Contact = () => {

  

  const form = useRef();

  const sendEmail = (e) =>{
    e.preventDefault();

    emailjs.sendForm('service_g749kaq', 'template_2wtd1ue', form.current, 'csBTGeyPlCSQUcwXM')
      .then((result) => {
          console.log(result.text);

          if(localStorage.getItem('i18nextLng')==='en'){
            Swal.fire(
              'Contact', 'Your message has been sent to me. Thank you!', 'success'
            )
          }
          else{
            Swal.fire(
              'Contato', 'Contato enviado com sucesso! Entrarei em contato assim que possível. Obrigado!', 'success'
            )
            
          }
          fireConfetti()
          
      }, (error) => {
          console.log(error.text);

          if(localStorage.getItem('i18nextLng')==='pt'){
            Swal.fire(
              'Contato', 'Ops! Something has gone wrong. Try again later!', 'success'
            )
          }
          else{
            Swal.fire(
              'Contato', 'Ops! Algo deu errado. Tente novamente mais tarde!', 'success'
            )
          }
      });
      e.target.reset()



  }

  return (
    <div name='contact' className='w-full h-auto bg-[#22232A] text-gray-300 text-center items-center justify-center'>
      <div className='flex flex-col justify-center items-center w-full '>

      
        <h1 className='timelineTitle font-bold text-5xl mb-[30px] mt-[30px]'>{i18next.t("contact.title")}</h1>


        <div>
          <div>
            <form className='flex flex-col max-w-[600px] w-full text-[#000]' ref={form} onSubmit={sendEmail}>
                <input className='bg-[#d1d4db] p-2 m-[15px]' type="text" placeholder={i18next.t("contact.nameInput")} name='from_name' required/>
                <input className='my-4 p-2 bg-[#d1d4db]  m-[15px]' type="email" placeholder={i18next.t("contact.emailInput")} name='reply_to' required/>
                <textarea className='bg-[#d1d4db] p-2  m-[15px]' name="message" rows="10" placeholder={i18next.t("contact.bodyInput")} required></textarea>

                <div>
                    <a href='https://github.com/filipemf/electron-facilitador' target="_blank" rel="noreferrer">
                      <AwesomeButton size='large' style={{'height':'70px', 'margin-top':'20px'}} type="primary" after={<AiOutlineSend className='ml-[10px]' size={30}/>}>{i18next.t("contact.button")}</AwesomeButton>
                    </a>
                  </div>
                {/* <button class="button grey">
                  <div class="icon">
                      <div class="cannon"></div>
                      <div class="confetti">
                          <svg viewBox="0 0 18 16">
                              <polyline points="1 10 4 7 4 5 6 1" />
                              <path d="M4,13 C5.33333333,9 7,7 9,7 C11,7 12.3340042,6 13.0020125,4" />
                              <path d="M6,15 C7.83362334,13.6666667 9.83362334,12.6666667 12,12 C14.1663767,11.3333333 15.8330433,9.66666667 17,7" />
                          </svg>
                          <i></i><i></i><i></i><i></i><i></i><i></i>
                          <div class="emitter"></div>
                      </div>
                  </div>
                  <span>Confirm</span>
                </button> */}
              
              </form>
          </div>


          <div className='pb-[50px] pt-[50px]'>

            <div className='contactDiv'>
              <a href='https://github.com/filipemf' target="_blank" rel="noreferrer">
                <AwesomeButton size='small' style={{'height':'50px', 'width':'50px'}}  type="primary"><AiFillGithub className='ml-[10px]' size={30}/></AwesomeButton>
              </a>
            </div>

            <div className='contactDiv'>
              <a href='https://www.linkedin.com/in/filipemarquesf/' target="_blank" rel="noreferrer">
                <AwesomeButton size='small' style={{'height':'50px', 'width':'50px'}}  type="primary"><AiFillLinkedin className='ml-[10px]' size={30}/></AwesomeButton>
              </a>
            </div>

            <div className='contactDiv'>
              <a href="//api.whatsapp.com/send?phone=5511967174160" target="_blank" rel="noreferrer">
                <AwesomeButton size='small' style={{'height':'50px', 'width':'50px'}} type="primary" ><AiOutlineWhatsApp className='ml-[10px]' size={30}/></AwesomeButton>
              </a>
            </div>

            <div className='contactDiv'>
              <a href='mailto:contact@filipeferreira.me?Subject=Contato%20Filipe%20Ferreira&Body=Oi%21%20Gostei%20do%20seu%20trabalho%21%20Podemos%20entrar%20em%20contato%3F' target="_blank" rel="noreferrer">
                <AwesomeButton size='small' style={{'height':'50px', 'width':'50px'}}  type="primary"><AiFillMail className='ml-[10px]' size={30}/></AwesomeButton>
              </a>
            </div>

            <div className='contactDiv'>
              {/* <a href={"../assets/Filipe Ferreira - Resume.pdf"} download target="_blank" rel="noreferrer">
                <AwesomeButton size='medium' style={{'height':'70px'}}  type="primary">Download {i18next.t("contact.cv")}<AiOutlineDownload className='ml-[10px]' size={30}/></AwesomeButton>
              </a> */}

              <a href={"../assets/Filipe Ferreira - Resume.pdf"} download target="_blank" rel="noreferrer">
                <AwesomeButtonProgress style={{'height':'50px'}} after={<AiOutlineFileText className='ml-[10px]' size={30}/>} type="primary" onPress={async (element, next)=>{
                    // await for something then call
                  next();
                }}>Download {i18next.t("contact.cv")}</AwesomeButtonProgress>
              </a>
            </div>

            

          </div>

          <div>
            <p>Copyright © Filipe Ferreira. All Rights Reserved</p>
          </div>
        </div>
        
        
      </div>
    </div>
  )
}

export default Contact