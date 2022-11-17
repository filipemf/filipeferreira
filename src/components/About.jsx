import React, { useEffect, useRef, useState } from 'react';

import {fireConfetti} from '../js/confetti'

import TimelineObserver from 'react-timeline-animation';

import TSYSTEMS from '../assets/tsystems.png'

const Timeline = ({ setObserver, callback }) => {
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");
  const [message4, setMessage4] = useState("");
  const [message5, setMessage5] = useState("");

  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [image5, setImage5] = useState("");

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const timeline4 = useRef(null);
  const timeline5 = useRef(null);

  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);
  const circle4 = useRef(null);
  const circle5 = useRef(null);

  const someCallback = () => {
    setMessage1(`
    <h2 style='color: rgba(19, 226, 166, 1);font-weight: bolder;font-size: 2rem; margin-top: 50px;'>Escola Técnica Estadual de SP</h2>
    <h4 style='color: #fff;font-weight: bolder;'>02/2017 - 12/2020</h4>

    <p id='timelineP' style='font-size: .85rem; font-weight: 400; margin-left: 30px; margin-right: 30px; margin-top: 20px; margin-bottom: 10px;'>Aqui, cursando o ensino médio com o curso de TI, pude vivenciar o ensino médio com uma formação em tecnologia abrangente, com estudos nas áreas de:</p>
    <ul style='font-size: .85rem; font-weight: 400; margin-bottom: 50px;'>
      <li>◉ Desenvolvimento de Sistemas</li>
      <li>◉ Bancos de Dados</li>
      <li>◉ Redes de Computadores</li>
      <li>◉ Sistemas Operacionais</li>
    </ul>
    `);
    callback();

    // <img src={${TSYSTEMS}} alt="HTML icon" />
  };

  const someCallback2 = () => {
    setMessage2(`
    <h2 style='color: rgba(19, 226, 166, 1);font-weight: bolder;font-size: 2rem; margin-top: 50px;'>FACULDADE</h2>
    <div style='display: -webkit-inline-box;'>
      <h4 style='color: #fff;font-weight: bolder;'><h4 style='animation: color-animation 4s linear infinite; --color-1: #DF8453;--color-2: #3D8DAE;--color-3: #E4A9A8; margin-right: 5px;'>PRESENTE </h4> <h4></h4>- 12/2025</h4>
    </div>
    
    <p id='timelineP' style='font-size: .85rem; font-weight: 400; margin-left: 30px; margin-right: 30px; margin-top: 20px;'>Escolhi o curso de <strong>Engenharia da Computação</strong> para estudar por acreditar que seria o curso mais completo para minha formação como profissional.</p>
    <p id='timelineP' style='font-size: .85rem; font-weight: 400; margin-left: 30px; margin-right: 30px; margin-top: 20px; margin-bottom: 50px;'> Aqui posso aprender diversos conceitos relacionados a tanto engenharia como a computação. Estudo na Universidade São Judas Tadeu - SP.</p>
    
    `);
  };

  const someCallback3 = () => {
    setMessage3(`
    <div style='display: -webkit-inline-box; margin-top: 50px;'>
      <img style="width: 180px; height: 40px; margin-top: 20px" src="../assets/tsystems.png"/>

      <div style='margin-bottom: 20px;'>
        <img style="width: 130px; margin-left: 25px" src="../assets/mercedes-logo.png"/>
        <span style='margin-left: 10px;font-size: 21px;font-weight: 400;color: #7f8588;'>Mercedes-Benz</span>
      </div>
      
    </div>
      
    </div>
    <h4 style='color: #fff;font-weight: bolder;'>07/2021 - 04/2022</h4>

    <p id='timelineP' style='font-size: .85rem; font-weight: 400; margin-left: 30px; margin-right: 30px; margin-top: 20px; margin-bottom: 10px;'>Estagiário em Redes na Mercedes-Benz. Por meio da T-Systems do Brasil, consegui meu primeiro estágio! Atuei em:</p>
    <ul style='font-size: .85rem; font-weight: 400; margin-bottom: 50px;'>
      <li>◉ Atualizando documentação como mapeamento e topologia de rede para Mercedes-Benz</li>
      <li>◉ Providenciando configurações e suporte de redes para Mercedes-Benz</li>
      <li>◉ Monitorando redes e configurações relacionadas a redes na Mercedes-Benz</li>
    </ul>
    
    `);

  };

  const someCallback4 = () => {
    setMessage4(`
    <div style='display: inline-flex; margin-top: 50px;'>
      <img className='deutscheLogo' src="../assets/deutsche-telekom.png" style="width: 50px; height: 55px;"/>
      <span style='margin-left: 10px; margin-top: 15px; font-size: 21px; color: #e20074'>Deutsche Telekom</span>
    </div>
    <div style='display: -webkit-inline-box;'>
      <h4 style='color: #fff;font-weight: bolder;'>04/2022 - <h4 style='animation: color-animation 4s linear infinite; --color-1: #DF8453;--color-2: #3D8DAE;--color-3: #E4A9A8; margin-left: 3px;'>PRESENTE </h4></h4>
    </div>
    
    
    <p id='timelineP' style='font-size: .85rem; font-weight: 400; margin-left: 30px; margin-right: 30px; margin-top: 20px; margin-bottom: 10px;'>Estagiário em Desenvolvimento. E finalmente, atualmente estou na Deutsche Telekom Global Bussiness Solutions Brasil, trabalhando com:</p>
    <ul style='font-size: .85rem; font-weight: 400; margin-bottom: 50px;'>
      <li>◉ Desenvolvendo soluções em IOT</li>
      <li>◉ Dando suporte e atuando em sistemas de Asset Tracking</li>
    </ul>
    
    
    `);
    fireConfetti();
  };

  // const someCallback5 = () => {
  //   setMessage5(`<h2 style='color: rgba(19, 226, 166, 1);font-weight: bolder;font-size: 2rem;'>PRESENTE</h2>`);
  //   fireConfetti();
  // };

  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(timeline4.current);

    setObserver(circle1.current, someCallback);
    setObserver(circle2.current, someCallback2);
    setObserver(circle3.current, someCallback3);
    setObserver(circle4.current, someCallback4);
  }, []);

  return (
    <div className="wrapper">


      <div id="timeline1" ref={timeline1} className="timeline" />
      <div className="circleWrapper">
        <div id="circle1" ref={circle1} className="circle">
          1
        </div>
        <div className="message !left-[-1400%] mr-[20px]" dangerouslySetInnerHTML={{__html: message1}}></div>
      </div>


      <div id="timeline2" ref={timeline2} className="timeline" />
      <div className="circleWrapper">
        <div id="circle2" ref={circle2} className="circle">
          2
        </div>
        <div className="message w-[400px]" dangerouslySetInnerHTML={{__html: message2}}></div>
      </div>


      <div id="timeline3" ref={timeline3} className="timeline" />
      <div className="circleWrapper">
        <div id="circle3" ref={circle3} className="circle">
          3
        </div>
        <div className="message !left-[-1400%] mr-[20px]" dangerouslySetInnerHTML={{__html: message3}}></div>
      </div>


      <div id="timeline4" ref={timeline4} className="timeline" />
      <div className="circleWrapper">
        <div id="circle4" ref={circle4} className="circle">
          4
        </div>
        <div className="message w-[400px]" dangerouslySetInnerHTML={{__html: message4}}></div>
      </div>



    </div>
  );
};



const About = () => {
  const [message, setMessage] = useState("");

  const onCallback = () => {
    console.log("awesome");
  };

  
  return (
    <div name='about' id='about' className='w-full h-[auto] bg-[#2d2f39] text-gray-300 pb-[30px]'>
      <div className='flex flex-col justify-center items-center w-full '>
        <div className='' style={{textAlign: 'center'}}>


        <h1 className='timelineTitle font-bold text-5xl mt-[50px] mb-[30px]'>Sobre mim</h1>
        <TimelineObserver
          initialColor="#fff"
          fillColor="rgba(19, 226, 166, 1)"
          handleObserve={(setObserver) => (
            <Timeline
              callback={onCallback}
              className="timeline"
              setObserver={setObserver}
            />
          )}
        />



          {/* <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Sai Kumar, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?</p>  
            </div>
          </div> */}
        </div>
      </div>
      
    </div>
  );
};

export default About;
