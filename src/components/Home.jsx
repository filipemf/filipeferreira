import React, {useEffect} from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import Typed from 'typed.js';
const Home = () => {

  useEffect(()=>{
    new Typed('.auto-type',{
      strings: ['estudante', 'programador', 'quase engenheiro!'],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,

    })


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
            
        
            {/* <div className='wrapper flex-row-reverse contents' id='homeWrapper'>
              <ul className='dynamic-txts'>
                <li><span>programador</span></li>
                <li><span>quase</span></li>
                <li><span>engenheiro!</span></li>
              </ul>
            </div> */}

            <p className='text-[#8892b0] py-4 max-w-[700px]'>
            Formado em informática e atualmente cursando ensino superior em Engenharia da Computação, mas sempre em busca de mais aprendizado. Atualmente trabalhando como Estagiário em Desenvolvimento na Deutsche Telekom. Trabalho em projetos individuais com as mais incríveis tecnologias!
            Meus pontos fortes incluem Redes, JavaScript, Python, C#, Node.js e SQL (com alguns trabalhos em No-SQL também).
            </p>
            <div>
              <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 bg-pink-600'>
              <Link to='about' smooth={true} duration={500}>
                  Conhecer mais
                  <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3 ' />
                  </span>
               </Link>  
              </button>
            </div>

          </div>



          <div className='containerPhoto'>
            <img className='image h-[500px]' src='../assets/foto3png.png' alt="HTML icon" />
          </div>

          {/* <div className='photoContainer right-0 top-0'>
            <img className='myPhoto h-[500px]' src={FOTO} alt="HTML icon" />
          </div> */}

          
        </div>
      </div>
    </div>
  );
};

export default Home;
