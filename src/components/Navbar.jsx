import i18next from 'i18next';
import React, { useState } from 'react';
import {FaBars,FaTimes} from 'react-icons/fa';
import { Link } from 'react-scroll';

import {FaFlagUsa} from "react-icons/fa";
import {GiBrazilFlag} from "react-icons/gi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const setLanguageToEN = ()=> {
    localStorage.setItem('lang', 'en')
    window.location.reload()
  }

  const setLanguageToPT = ()=> {
    localStorage.setItem('lang', 'pt')
    window.location.reload()
  }

  return (
    <div id='navbarDefault' className='fixed w-[-webkit-fill-available] h-[80px] flex justify-between items-center px-4 bg-[#17171c] text-gray-300 ml-3 mr-3 mt-2 z-50'>
      <div className='textWrapper'>
        <p className='navbarTitle w-[200px] font-bold'>FILIPE FERREIRA</p>
      </div>

      {/* menu */}
      <ul className='hidden md:flex font-bold'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            {i18next.t("navbar.home")}
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            {i18next.t("navbar.about")}
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            {i18next.t("navbar.skills")}
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
            {i18next.t("navbar.portfolio")}
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            {i18next.t("navbar.contact")}
          </Link>
        </li>
      </ul>

      <div className='hidden md:flex font-bold'>
        <button className='p-[20px]' onClick={setLanguageToPT}>
            <GiBrazilFlag className='ml-[10px]' size={25}/> pt-BR
        </button>
        <button className='mt-[5px] p-[30px]' onClick={setLanguageToEN}>
            <FaFlagUsa size={20}/> en
        </button>
      </div>


      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-[1000]'>
        {!nav ? <FaBars values={{color: '#fff'}} /> : <FaTimes />}
      </div>


      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#22232a] flex flex-col justify-center font-bold z-[999]'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            {i18next.t("navbar.home")}
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            {i18next.t("navbar.about")}
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            {i18next.t("navbar.skills")}
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            {i18next.t("navbar.portfolio")}
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            {i18next.t("navbar.contact")}
          </Link>
        </li>

          <div className='inline-flex self-center'>
            <button className='m-[30px] pr-[30px]' onClick={setLanguageToPT}>
                <GiBrazilFlag className='ml-[10px]' size={25}/> pt-BR
            </button>
            <button className='mt-[5px] pr-[30px]' onClick={setLanguageToEN}>
                <FaFlagUsa size={20}/> en
            </button>
        </div>
      </ul>

    </div>
  );
};

export default Navbar;
