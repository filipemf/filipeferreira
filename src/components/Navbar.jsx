import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

import {FaFlagUsa} from "react-icons/fa";
import {GiBrazilFlag} from "react-icons/gi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  // transparent #00000000
  return (
    <div id='navbarDefault' className='fixed w-[-webkit-fill-available] h-[80px] flex justify-between items-center px-4 bg-[#17171c] text-gray-300 ml-3 mr-3 mt-2 z-50'>
      <div className='textWrapper'>
        <p className='navbarTitle w-[200px] font-bold'>FILIPE FERREIRA</p>
        {/* <img src={Logo} alt='Logo Image' style={{ width: '200px' }} /> */}
      </div>

      {/* menu */}
      <ul className='hidden md:flex font-bold'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            Sobre mim
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contato
          </Link>
        </li>
      </ul>


      <ul className='hidden md:flex font-bold'>
        <li>
            <GiBrazilFlag className='ml-[10px]' size={25}/> pt-BR
        </li>
        <li className='mt-[5px]'>
            <FaFlagUsa size={20}/> en
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-[1000]'>
        {!nav ? <FaBars values={{color: '#fff'}} /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#22232a] flex flex-col justify-center items-center font-bold z-[999]'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            Sobre mim
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Portfolio
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contato
          </Link>
        </li>

          <div className='inline-flex'>
            <button className='m-[30px] pr-[30px]'>
                <GiBrazilFlag className='ml-[10px]' size={25}/> pt-BR
            </button>
            <button className='mt-[5px] pr-[30px]'>
              
                <FaFlagUsa size={20}/> en
            </button>
        </div>
      </ul>

      
      

      {/* Social icons */}
      {/* <div className='hidden lg:flex fixed flex-col top-[35%] left-0'> */}
      <div className={
          !nav
            ? 'hidden'
            : 'hidden fixed flex-col top-[35%] left-0'}
            >
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
