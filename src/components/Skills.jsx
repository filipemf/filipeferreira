import React, {useRef, useEffect} from 'react';

import $ from 'jquery'
import '../js/jquery.svg3dtagcloud'


import 'bootstrap/dist/css/bootstrap.min.css';

import { HiCode,HiArrowNarrowDown,HiDatabase,HiCloud, HiTerminal} from "react-icons/hi";
import { MdLanguage} from "react-icons/md";

import {FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNode, FaCloud, FaGithub, FaGitlab, FaAws, FaAngular,  FaFlagUsa, FaPython} from "react-icons/fa";
import {SiMongodb, SiFirebase, SiMysql, SiCisco, SiCsharp, SiTypescript, SiDotnet} from "react-icons/si";
import {GiBrazilFlag, GiSpain} from "react-icons/gi";



const scrollTo = (ref) => {
  // console.log(ref)
  ref.current.scrollIntoView()
}

const Skills = () => {
    const entries2 = [ 
   
      { image: '../assets/html.png', width: '50', height: '50', target: '_top', tooltip: 'HTML'},
      { image: '../assets/css.png', width: '50', height: '50', target: '_top', tooltip: 'CSS3' },
      { image: '../assets/javascript.png', width: '50', height: '50', target: '_top', tooltip: 'JavaScript' },
      { image: '../assets/react.png', width: '50', height: '50', target: '_top', tooltip: 'ReactJS' },
      { image: '../assets/react-native.png', width: '70', height: '70', target: '_top', tooltip: 'React Native' },
      { image: '../assets/node.png', width: '50', height: '50', target: '_top', tooltip: 'Node' },
      { image: '../assets/firebase.png', width: '50', height: '50', target: '_top', tooltip: 'Firebase' },
      { image: '../assets/github.png', width: '50', height: '50', target: '_top', tooltip: 'Github' },
      { image: '../assets/mongo.png', width: '50', height: '50', target: '_top', tooltip: 'MongoDB' },
      { image: '../assets/mysql.png', width: '100', height: '100', target: '_top', tooltip: 'MySQL' },
      { image: '../assets/cisco.png', width: '70', height: '70', target: '_top', tooltip: 'Cisco' },
      { image: '../assets/csharp.png', width: '70', height: '70', target: '_top', tooltip: 'C#' },
      { image: '../assets/aspnet.png', width: '70', height: '70', target: '_top', tooltip: 'ASP.NET' },
      { image: '../assets/gitlab.png', width: '70', height: '70', target: '_top', tooltip: 'GitLab' },
      { image: '../assets/aws.png', width: '70', height: '70', target: '_top', tooltip: 'AWS' },
      { image: '../assets/angular.png', width: '70', height: '70', target: '_top', tooltip: 'Angular' },
      { image: '../assets/typescript.png', width: '70', height: '70', target: '_top', tooltip: 'TypeScript' },
      { image: '../assets/usflag.png', width: '50', height: '50', target: '_top', tooltip: 'Ingles' },
      { image: '../assets/brflag.png', width: '50', height: '50', target: '_top', tooltip: 'Portugues' },
      { image: '../assets/spainflag.png', width: '50', height: '50', target: '_top', tooltip: 'Espanhol' },
  
    ];

    const svgEl = useRef()

    const myRef = useRef(null)

    function openCloud(className = 'nada', entries = entries2, ref = undefined){
      $('#tagcloud').empty()



      let skillsContent = document.getElementsByClassName('skills__content')


      let arraySkills = Array.from(skillsContent);


      arraySkills.forEach(e =>{
        // console.log(e.className)

        if(e.className.includes(className)){
          // console.log('opa')
          try{
              e.classList.replace('skills__close', 'skills__open')
          }
          catch(e){
              alert('nao deu')
          }
          
        }
        else{
          e.classList.replace('skills__open', 'skills__close')
        }
        
      })

      if(ref!==undefined) scrollTo(ref)

      const settings = {
      entries: entries,
      width: 400,
      height: 400,
      radius: '65%',
      radiusMin: 75,
      bgDraw: true,
      bgColor: '#22232A',
      opacityOver: 1.00,
      opacityOut: 0.05,
      opacitySpeed: 6,
      fov: 800,
      speed: 0.5,
      fontFamily: 'Oswald, Arial, sans-serif',
      fontSize: '15',
      fontColor: '#fff',
      fontWeight: 'normal',//bold
      fontStyle: 'normal',//italic 
      fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
      fontToUpperCase: true,
      tooltipFontFamily: 'Oswald, Arial, sans-serif',
      tooltipFontSize: '11',
      tooltipFontColor: '#fff',
      tooltipFontWeight: 'normal',//bold
      tooltipFontStyle: 'normal',//italic 
      tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
      tooltipFontToUpperCase: false,
      tooltipTextAnchor: 'left',
      tooltipDiffX: 0,
      tooltipDiffY: 10,
      animatingSpeed: 0.01,
      animatingRadiusLimit: 1.3
      }

      const $svgEl = $(svgEl.current)
      $svgEl.svg3DTagCloud(settings)

      
    }
    

    useEffect(() => {
      openCloud()
    }, [])


    
  const myRefFE = useRef();
  const myRefBE = useRef();
  const myRefDB = useRef();
  const myRefOS = useRef();

  
  

  function toggleSkillsFE(){
    

    let skillsContent = document.getElementsByClassName('skills__content fe')
    // console.log(document.getElementsByClassName('skills__content'))
    let itemClass = myRefFE

    // console.log(itemClass.current.parentElement.className)
    
    if(itemClass.current.parentElement.className === 'skills__content fe skills__close'){
      // console.log('abrir')
      itemClass.current.parentElement.className = 'skills__content fe skills__open'

      $('#tagcloud').prependTo($('.skills__content.fe.skills__open  div.skills__list.grid'))

    }
    else{
      for(let i=0;i<skillsContent.length; i++){
        skillsContent[i].className = 'skills__content fe skills__close'
      }


    }

    let ent = [
      { image: '../assets/html.png', width: '50', height: '50', target: '_top', tooltip: 'HTML'},
      { image: '../assets/css.png', width: '50', height: '50', target: '_top', tooltip: 'CSS3' },
      { image: '../assets/javascript.png', width: '50', height: '50', target: '_top', tooltip: 'JavaScript' },
      { image: '../assets/react.png', width: '50', height: '50', target: '_top', tooltip: 'ReactJS' },
      { image: '../assets/angular.png', width: '70', height: '70', target: '_top', tooltip: 'Angular' },
      { image: '../assets/typescript.png', width: '70', height: '70', target: '_top', tooltip: 'TypeScript' },
    ]
    openCloud(itemClass.current.parentElement.className, ent, itemClass)

    

  }

  
  function toggleSkillsBE(){
    let skillsContent = document.getElementsByClassName('skills__content be')
    let itemClass = myRefBE

    // console.log(itemClass.current.parentElement.className)
    
    if(itemClass.current.parentElement.className === 'skills__content be skills__close'){
      // console.log('abrir')
      itemClass.current.parentElement.className = 'skills__content be skills__open'

      $('#tagcloud').prependTo($('.skills__content.be.skills__open  div.skills__list.grid'))
    }
    else{
      for(let i=0;i<skillsContent.length; i++){
        skillsContent[i].className = 'skills__content be skills__close'
      }
    }


    let ent = [
      { image: '../assets/react-native.png', width: '70', height: '70', target: '_top', tooltip: 'React Native' },
      { image: '../assets/aspnet.png', width: '70', height: '70', target: '_top', tooltip: 'ASP.NET' },
      { image: '../assets/node.png', width: '50', height: '50', target: '_top', tooltip: 'Node' },
      { image: '../assets/csharp.png', width: '70', height: '70', target: '_top', tooltip: 'C#' },
      { image: '../assets/python.png', width: '70', height: '70', target: '_top', tooltip: 'Python' },
    ]
    openCloud(itemClass.current.parentElement.className, ent, itemClass)

    
  }
  
   
  function toggleSkillsDB(){
    let skillsContent = document.getElementsByClassName('skills__content db')
    let itemClass = myRefDB

    // console.log(itemClass.current.parentElement.className)
    
    if(itemClass.current.parentElement.className === 'skills__content db skills__close'){
      // console.log('abrir')
      itemClass.current.parentElement.className = 'skills__content db skills__open'

      $('#tagcloud').prependTo($('.skills__content.db.skills__open  div.skills__list.grid'))
    }
    else{
      for(let i=0;i<skillsContent.length; i++){
        skillsContent[i].className = 'skills__content db skills__close'
      }
    }

    let ent = [
      { image: '../assets/firebase.png', width: '50', height: '50', target: '_top', tooltip: 'Firebase' },
      { image: '../assets/github.png', width: '50', height: '50', target: '_top', tooltip: 'Github' },
      { image: '../assets/mongo.png', width: '50', height: '50', target: '_top', tooltip: 'MongoDB' },
      { image: '../assets/mysql.png', width: '100', height: '100', target: '_top', tooltip: 'MySQL' },
      { image: '../assets/cisco.png', width: '70', height: '70', target: '_top', tooltip: 'Cisco' },
      { image: '../assets/gitlab.png', width: '70', height: '70', target: '_top', tooltip: 'GitLab' },
      { image: '../assets/aws.png', width: '70', height: '70', target: '_top', tooltip: 'AWS' },
    ]
    openCloud(itemClass.current.parentElement.className, ent, itemClass)

  }

    
   
  function toggleSkillsOS(){
    let skillsContent = document.getElementsByClassName('skills__content os')
    let itemClass = myRefOS

    // console.log(itemClass.current.parentElement.className)
    
    if(itemClass.current.parentElement.className === 'skills__content os skills__close'){
      // console.log('abrir')
      itemClass.current.parentElement.className = 'skills__content os skills__open'

      $('#tagcloud').prependTo($('.skills__content.os.skills__open  div.skills__list.grid'))
    }
    else{
      for(let i=0;i<skillsContent.length; i++){
        skillsContent[i].className = 'skills__content os skills__close'
      }
    }
    

    let ent = [
      { image: '../assets/usflag.png', width: '50', height: '50', target: '_top', tooltip: 'Ingles' },
      { image: '../assets/brflag.png', width: '50', height: '50', target: '_top', tooltip: 'Portugues' },
      { image: '../assets/spainflag.png', width: '50', height: '50', target: '_top', tooltip: 'Espanhol' },
    ]
    openCloud(itemClass.current.parentElement.className, ent, itemClass)
  }
    

  return (
    <div name='skills' className='w-full h-[auto] pb-[30px] bg-[#22232A] text-gray-300 text-center items-center justify-center'>
      <div className='flex flex-col justify-center items-center w-full text-center'>
        <h1 className='timelineTitle font-bold text-5xl mt-[50px] mb-[30px]'>Minhas habilidades</h1>


                
        <div className='skills__container' style={{width: '100%'}}>
          <div className='skills__subcontainer gap-[50px] inline-block'>
            
            {/* FRONTEND SKILLS */}
            <div className='skills__content fe skills__close'>
              
              <div className="skills__header" onClick={toggleSkillsFE} ref={myRefFE}>
                <HiCode size={30} className='skills__icon'/>

                <div>
                  <h2 className='skills__titles'>Frontend</h2>
                </div>

                <HiArrowNarrowDown size={18}/>

              </div>

              <div className="skills__list grid">

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className='skills__name'>HTML <FaHtml5 size={20}/> </h3>
                    <span className='skills__number'>100%</span>
                  </div>

                  <div className='skills__bar'>
                    <span className="skills__percentage skills__100"></span>
                  </div>
                </div>


                                
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className='skills__name'>JavaScript <FaJsSquare size={20}/> </h3>
                    <span className='skills__number'>100%</span>
                  </div>

                  <div className='skills__bar'>
                    <span className="skills__percentage skills__100"></span>
                  </div>
                </div>


                                
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className='skills__name'>CSS <FaCss3Alt size={20}/> </h3>
                    <span className='skills__number'>85%</span>
                  </div>

                  <div className='skills__bar'>
                    <span className="skills__percentage skills__85"></span>
                  </div>
                  
                </div>

                
                                
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className='skills__name'>React <FaReact size={20}/> </h3>
                    <span className='skills__number'>90%</span>
                  </div>

                  <div className='skills__bar'>
                    <span className="skills__percentage skills__90"></span>
                  </div>
                  
                </div>


                
                                
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className='skills__name'>Angular <FaAngular size={20}/> </h3>
                    <span className='skills__number'>60%</span>
                  </div>

                  <div className='skills__bar'>
                    <span className="skills__percentage skills__60"></span>
                  </div>
                  
                </div>


                
                                
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className='skills__name'>Typescript <SiTypescript size={20}/> </h3>
                    <span className='skills__number'>65%</span>
                  </div>

                  <div className='skills__bar'>
                    <span className="skills__percentage skills__65"></span>
                  </div>
                  
                </div>


              </div>
            </div>
            {/* FRONTEND SKILLS */}
                        


            {/* BACKEND SKILLS */}
            <div className='skills__content be skills__close'>
              <div className="skills__header"  onClick={toggleSkillsBE} ref={myRefBE}>
                <HiTerminal size={30} className='skills__icon'/>

                <div>
                  <h2 className='skills__titles'>Backend</h2>
                </div>

                <HiArrowNarrowDown size={18}/>

              </div>

              <div className="skills__list grid">

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className='skills__name'>NodeJS <FaNode size={20}/> </h3>
                    <span className='skills__number'>90%</span>
                  </div>

                  <div className='skills__bar'>
                    <span className="skills__percentage skills__90"></span>
                  </div>
                </div>


                                
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className='skills__name'>C# <SiCsharp size={20}/> </h3>
                    <span className='skills__number'>70%</span>
                  </div>

                  <div className='skills__bar'>
                    <span className="skills__percentage skills__70"></span>
                  </div>
                </div>


                                
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className='skills__name'>Python <FaPython size={20}/> </h3>
                    <span className='skills__number'>80%</span>
                  </div>

                  <div className='skills__bar'>
                    <span className="skills__percentage skills__80"></span>
                  </div>
                </div>

                                
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className='skills__name'>ASP.NET <SiDotnet size={20}/> </h3>
                    <span className='skills__number'>60%</span>
                  </div>

                  <div className='skills__bar'>
                    <span className="skills__percentage skills__60"></span>
                  </div>
                </div>

                                
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className='skills__name'>React Native <FaReact size={20}/> </h3>
                    <span className='skills__number'>85%</span>
                  </div>

                  <div className='skills__bar'>
                    <span className="skills__percentage skills__85"></span>
                  </div>
                </div>


              </div>

            </div>
            {/* BACKEND SKILLS */}

                        

            {/* OTHER SKILLS */}
            <div className='skills__content os skills__close'>
              <div className="skills__header"  onClick={toggleSkillsOS} ref={myRefOS}>
                <MdLanguage size={30} className='skills__icon'/>

                <div>
                  <h2 className='skills__titles'>Linguagens</h2>
                </div>

                <HiArrowNarrowDown size={18}/>

              </div>

              <div className="skills__list grid">

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className='skills__name'>Inglês <FaFlagUsa size={20}/> </h3>
                    <span className='skills__number'>Fluente</span>
                  </div>

                  <div className='skills__bar'>
                    <span className="skills__percentage skills__100"></span>
                  </div>
                </div>


                                
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className='skills__name'>Portugues <GiBrazilFlag size={20}/> </h3>
                    <span className='skills__number'>Nativo</span>
                  </div>

                  <div className='skills__bar'>
                    <span className="skills__percentage skills__100"></span>
                  </div>
                </div>


                                
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className='skills__name'>Espanhol <GiSpain size={20}/> </h3>
                    <span className='skills__number'>Intermediário</span>
                  </div>

                  <div className='skills__bar'>
                    <span className="skills__percentage skills__50"></span>
                  </div>
                </div>


              </div>

            </div>
            {/* OTHER SKILLS */}


            

            {/* DATABASE SKILLS */}
            <div className='skills__content db skills__close'>
              <div className="skills__header"  onClick={toggleSkillsDB} ref={myRefDB}>
                <HiCloud size={30} className='skills__icon'/>

                <div>
                  <h2 className='skills__titles'>DB e outras Tecnologias</h2>
                </div>

                <HiArrowNarrowDown size={18}/>

              </div>

              <div className="skills__list grid">

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className='skills__name'>Firebase <SiFirebase size={20}/> </h3>
                    <span className='skills__number'>65%</span>
                  </div>

                  <div className='skills__bar'>
                    <span className="skills__percentage skills__65"></span>
                  </div>
                </div>


                                
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className='skills__name'>Github <FaGithub size={20}/> </h3>
                    <span className='skills__number'>90%</span>
                  </div>

                  <div className='skills__bar'>
                    <span className="skills__percentage skills__90"></span>
                  </div>
                </div>


                                
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className='skills__name'>MongoDB <SiMongodb size={20}/> </h3>
                    <span className='skills__number'>70%</span>
                  </div>

                  <div className='skills__bar'>
                    <span className="skills__percentage skills__70"></span>
                  </div>
                </div>

                
                                
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className='skills__name'>MySQL <SiMysql size={20}/></h3>
                    <span className='skills__number'>65%</span>
                  </div>

                  <div className='skills__bar'>
                    <span className="skills__percentage skills__65"></span>
                  </div>
                </div>

                
                                
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className='skills__name'>Networks <SiCisco size={20}/></h3>
                    <span className='skills__number'>65%</span>
                  </div>

                  <div className='skills__bar'>
                    <span className="skills__percentage skills__65"></span>
                  </div>
                </div>

                
                                
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className='skills__name'>Gitlab <FaGitlab size={20}/></h3>
                    <span className='skills__number'>70%</span>
                  </div>

                  <div className='skills__bar'>
                    <span className="skills__percentage skills__70"></span>
                  </div>
                </div>

                
                                
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className='skills__name'>AWS <FaAws size={20}/></h3>
                    <span className='skills__number'>60%</span>
                  </div>

                  <div className='skills__bar'>
                    <span className="skills__percentage skills__60"></span>
                  </div>
                </div>


              </div>

            </div>
            {/* DATABASE SKILLS */}

            
            <div id="tagcloud" ref={svgEl} className=''></div>
          </div>

          
        </div>


        


        <h2 className='timelineTitle font-bold text-5xl mt-[50px] mb-[30px]'>Certificações</h2>
        
        <div className='inline-flex gap-[100px]'>

          <div>
            <h3 className='timelineTitle font-bold text-3xl mt-[50px] mb-[30px]'>Network</h3>
            <div className='inline-flex gap-[20px]'> 
              <div>
                <a className='averageLink block'
                  href='https://www.credly.com/badges/702c0876-bfb2-43dc-856b-264e6a0cb735?source=linked_in_profile'
                  >
                  <img src='../assets/certifications/ccna.png' alt='CCNA 1' className='w-[200px]'/>
                  <span className='text-[#d1dbdc]'>CCNA 1</span>
                </a>
              </div>

              <div>
                <a className='averageLink block'
                    href='https://www.credly.com/badges/7ac2956d-9369-4e9a-921c-6700a4dabd5e?source=linked_in_profile'
                    >
                  <img src='../assets/certifications/cyberops.png' alt='Cyber Ops Associate' className='w-[200px]'/>
                  <span className='text-[#d1dbdc]'>Cyber Ops Associate</span>
                </a>
              </div>
              
            </div>
          </div>
          

          <div>
            <h3 className='timelineTitle font-bold text-3xl mt-[50px] mb-[30px]'>AWS</h3>
            <div className='inline-flex gap-[20px]'> 
            <div>
              <a className='averageLink block'
                    href='https://www.credly.com/badges/9896c202-6322-46c1-a5a5-fa4ec5b353a3/public_url'
                    >
                <img src='../assets/certifications/cloud-foundations.png' alt='Cloud Foundations' className='w-[200px]'/>
                <span className='text-[#d1dbdc]'>Cloud Foundations</span>
              </a>
            </div>
            
          </div>
          </div>


          
          
        </div>

      </div>
      
    </div>
  );
};

export default Skills;