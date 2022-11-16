import React, {useRef, useEffect} from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

import $ from 'jquery'
import '../js/jquery.svg3dtagcloud'

const Skills = () => {
    const entries = [ 
   
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
    
    ];
    const settings = {        
    entries: entries,
    width: 800,
    height: 800,
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

    const svgEl = useRef()

    useEffect(() => {
        const $svgEl = $(svgEl.current)
        $svgEl.svg3DTagCloud(settings)
    }, [])

  return (
    <div name='skills' className='w-full h-screen bg-[#22232A] text-gray-300 text-center items-center justify-center'>
      <div className='flex flex-col justify-center items-center w-full text-center'>
        <h1 className='timelineTitle font-bold text-5xl mt-[50px] mb-[30px]'>Minhas habilidades</h1>
        <div id="tagcloud" ref={svgEl} className=''></div>
      </div>
      
    </div>
  );
};

export default Skills;