import React, {useRef, useEffect} from 'react';

import $ from 'jquery'
import '../js/jquery.svg3dtagcloud'


import SkillsBar from './SkillsBar';

import 'bootstrap/dist/css/bootstrap.min.css';

import { HiCode,HiArrowNarrowDown,HiDatabase,HiCloud, HiTerminal} from "react-icons/hi";
import { MdLanguage} from "react-icons/md";

const Progress = ({step, steps, height}) =>{
  return(
    <div className='bg-[rgba(0,0,0,0.1)] rounded overflow-hidden'>
      <p>{step}/{steps}</p>
      <div className='w-[100vh] rounded bg-[rgba(0,0,0,0.5)] absolute left-0 top-0'>

      </div>
    </div>
    
  )
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
      { image: '../assets/tailwind.png', width: '50', height: '50', target: '_top', tooltip: 'Tailwind' },
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


    function openCloud(className = 'nada', entries = entries2){
      $('#tagcloud').empty()



      let skillsContent = document.getElementsByClassName('skills__content')


      let arraySkills = Array.from(skillsContent);


      arraySkills.forEach(e =>{
        console.log(e.className)

        if(e.className.includes(className)){
          console.log('opa')
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
    console.log(document.getElementsByClassName('skills__content'))
    let itemClass = myRefFE

    console.log(itemClass.current.parentElement.className)
    
    if(itemClass.current.parentElement.className === 'skills__content fe skills__close'){
      console.log('abrir')
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
      { image: '../assets/react-native.png', width: '70', height: '70', target: '_top', tooltip: 'React Native' },
      { image: '../assets/tailwind.png', width: '50', height: '50', target: '_top', tooltip: 'Tailwind' },
      { image: '../assets/aspnet.png', width: '70', height: '70', target: '_top', tooltip: 'ASP.NET' },
      { image: '../assets/angular.png', width: '70', height: '70', target: '_top', tooltip: 'Angular' },
      { image: '../assets/typescript.png', width: '70', height: '70', target: '_top', tooltip: 'TypeScript' },
    ]
    openCloud(itemClass.current.parentElement.className, ent)

  }

  
  function toggleSkillsBE(){
    let skillsContent = document.getElementsByClassName('skills__content be')
    let itemClass = myRefBE

    console.log(itemClass.current.parentElement.className)
    
    if(itemClass.current.parentElement.className === 'skills__content be skills__close'){
      console.log('abrir')
      itemClass.current.parentElement.className = 'skills__content be skills__open'

      $('#tagcloud').prependTo($('.skills__content.be.skills__open  div.skills__list.grid'))
    }
    else{
      for(let i=0;i<skillsContent.length; i++){
        skillsContent[i].className = 'skills__content be skills__close'
      }
    }
    let ent = [
      { image: '../assets/node.png', width: '50', height: '50', target: '_top', tooltip: 'Node' },
      { image: '../assets/csharp.png', width: '70', height: '70', target: '_top', tooltip: 'C#' },
      { image: '../assets/python.png', width: '70', height: '70', target: '_top', tooltip: 'Python' },
    ]
    openCloud(itemClass.current.parentElement.className, ent)
  }
  
   
  function toggleSkillsDB(){
    let skillsContent = document.getElementsByClassName('skills__content db')
    let itemClass = myRefDB

    console.log(itemClass.current.parentElement.className)
    
    if(itemClass.current.parentElement.className === 'skills__content db skills__close'){
      console.log('abrir')
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
    openCloud(itemClass.current.parentElement.className, ent)
  }

    
   
  function toggleSkillsOS(){
    let skillsContent = document.getElementsByClassName('skills__content os')
    let itemClass = myRefOS

    console.log(itemClass.current.parentElement.className)
    
    if(itemClass.current.parentElement.className === 'skills__content os skills__close'){
      console.log('abrir')
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
    openCloud(itemClass.current.parentElement.className, ent)
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
                    <h3 className='skills__name'>HTML</h3>
                    <span className='skills__number'>90%</span>
                  </div>

                  <div className='skills__bar'>
                    <span className="skills__percentage skills__html"></span>
                  </div>
                </div>


                                
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className='skills__name'>JavaScript</h3>
                    <span className='skills__number'>90%</span>
                  </div>

                  <div className='skills__bar'>
                    <span className="skills__percentage skills__js"></span>
                  </div>
                </div>


                                
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className='skills__name'>CSS</h3>
                    <span className='skills__number'>CSS</span>
                  </div>

                  <div className='skills__bar'>
                    <span className="skills__percentage skills__css"></span>
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
                    <h3 className='skills__name'>NodeJS</h3>
                    <span className='skills__number'>90%</span>
                  </div>

                  <div className='skills__bar'>
                    <span className="skills__percentage skills__html"></span>
                  </div>
                </div>


                                
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className='skills__name'>C#</h3>
                    <span className='skills__number'>90%</span>
                  </div>

                  <div className='skills__bar'>
                    <span className="skills__percentage skills__js"></span>
                  </div>
                </div>


                                
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className='skills__name'>CSS</h3>
                    <span className='skills__number'>CSS</span>
                  </div>

                  <div className='skills__bar'>
                    <span className="skills__percentage skills__css"></span>
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
                    <h3 className='skills__name'>Inglês</h3>
                    <span className='skills__number'>Fluente</span>
                  </div>

                  <div className='skills__bar'>
                    <span className="skills__percentage skills__html"></span>
                  </div>
                </div>


                                
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className='skills__name'>Portugues</h3>
                    <span className='skills__number'>Nativo</span>
                  </div>

                  <div className='skills__bar'>
                    <span className="skills__percentage skills__js"></span>
                  </div>
                </div>


                                
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className='skills__name'>Espanhol</h3>
                    <span className='skills__number'>Intermediário</span>
                  </div>

                  <div className='skills__bar'>
                    <span className="skills__percentage skills__css"></span>
                  </div>
                </div>


              </div>

            </div>
            {/* OTHER SKILLS */}
            {/* FRONTEND SKILLS */}


            

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
                    <h3 className='skills__name'>MySQL</h3>
                    <span className='skills__number'>90%</span>
                  </div>

                  <div className='skills__bar'>
                    <span className="skills__percentage skills__html"></span>
                  </div>
                </div>


                                
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className='skills__name'>Firebase</h3>
                    <span className='skills__number'>MongoDB</span>
                  </div>

                  <div className='skills__bar'>
                    <span className="skills__percentage skills__js"></span>
                  </div>
                </div>


                                
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className='skills__name'>Oracle</h3>
                    <span className='skills__number'>CSS</span>
                  </div>

                  <div className='skills__bar'>
                    <span className="skills__percentage skills__css"></span>
                  </div>
                </div>


              </div>

            </div>
            {/* FRONTEND SKILLS */}

            
            <div id="tagcloud" ref={svgEl} className=''></div>
          </div>

          
        </div>


        


        <h2 className='timelineTitle font-bold text-5xl mt-[50px] mb-[30px]'>Certificações</h2>
        
        <div className='inline-flex p-[30px] gap-[100px]'>

          <div>
            <h3 className='timelineTitle font-bold text-3xl mt-[50px] mb-[30px]'>Network</h3>
            <div className='inline-flex gap-[20px]'> 
              <div>
                <img src='../assets/certifications/ccna.png' alt='CCNA 1' className='w-[200px]'/>
                <span>CCNA 1</span>
              </div>

              <div>
                <img src='../assets/certifications/cyberops.png' alt='Cyber Ops Associate' className='w-[200px]'/>
                <span>Cyber Ops Associate</span>
              </div>
              
            </div>
          </div>
          

          <div>
            <h3 className='timelineTitle font-bold text-3xl mt-[50px] mb-[30px]'>AWS</h3>
            <div className='inline-flex gap-[20px]'> 
            <div>
              <img src='../assets/certifications/cloud-foundations.png' alt='Cloud Foundations' className='w-[200px]'/>
              <span>Cloud Foundations</span>
            </div>
            
          </div>
          </div>


          
          
        </div>

      </div>
      
    </div>
  );
};

export default Skills;