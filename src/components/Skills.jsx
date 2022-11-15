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
import './jquery.svg3dtagcloud'

const Skills = () => {
    const entries = [ 
   
        { image: './img/Basket.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'Lorem ipsum' },
        { image: './img/Briefcase.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'Dolor sit amet' },
        { image: './img/Brush.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'Consetetur sadipscing' },
        { image: './img/Calendar.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'Sed diam' },
        { image: './img/Camera.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'At vero' },
        { image: './img/Cassette.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'Nonumy eirmod' },
        { image: './img/Clock.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'Stet clita' },
        { image: './img/Cloud_Download.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'Justo duo' },
        { image: './img/Cloud_Upload.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'Ut wisi enim' },
        { image: './img/Coffee.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'Minim veniam' },
        { image: './img/Comments.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'Quis nostrud' },
        { image: './img/Credit_Card.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'Exerci tation' },
        { image: './img/Diary.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'Duis autem' },
        { image: './img/Document.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'Vel eum iriure' },
        { image: './img/Envelope.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'Dolor in hendrerit' },
        { image: './img/Eraser.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'In vulputate' },
        { image: './img/File_Browser.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'Velit esse' },
        { image: './img/Games.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'Molestie consequat' },
        { image: './img/Headphones.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'Vel illum' },
        { image: './img/Heart.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'Dolore eu' },
        { image: './img/Home.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'Feugiat nulla' },
        { image: './img/ID.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'Facilisis at vero' },
        { image: './img/iPod.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'Eros et accumsa' },
        { image: './img/Key.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'Et iusto odio' },
        { image: './img/Location.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'Dignissim qui' },
        { image: './img/Location_Map.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'Blandit praesent' },
        { image: './img/Map.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'Nam liber' },
        { image: './img/Megaphone.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'Soluta nobis' },
        { image: './img/Message.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'Magna aliquam' },
        { image: './img/Microphone.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'Duis autem' },
        { image: './img/Mobile.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'Lori novis' },
        { image: './img/Money.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'Meno eqiam' },
        { image: './img/Padlock.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'Meno equox' },
        { image: './img/Pencil.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'Iri orem' },
        { image: './img/Photo.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'Orel pas' },
        { image: './img/Polaroid.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'Psi sit' },
        { image: './img/Printer.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'Amet et quam' },
        { image: './img/Record.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'Molare cons' },
        { image: './img/Save.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'Digi tal' },
        { image: './img/Scissors.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'Felenope liber' },
        { image: './img/Spanner.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'Officia dolor' },
        { image: './img/Toolbox.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'Autem insto' },
        { image: './img/Umbrella.png', width: '50', height: '50', url: 'http://niklasknaack.de/', target: '_top', tooltip: 'Veniam isictus' }
    
    ];
    const settings = {        
    entries: entries,
    width: 480,
    height: 480,
    radius: '65%',
    radiusMin: 75,
    bgDraw: true,
    bgColor: '#111',
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
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div id="tagcloud" ref={svgEl}></div>
    </div>
  );
};

export default Skills;
