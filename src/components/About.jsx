import React, { useEffect} from 'react';

import {fireConfetti} from '../js/confetti'

import $ from 'jquery'

import i18next from 'i18next';

const About = () => {


  useEffect(()=>{
     
  $(".step").click( function() {
    $(this).addClass("active").prevAll().addClass("active");
    $(this).nextAll().removeClass("active");
    });
    
    $(".step01").click( function() {
      $("#line-progress").css("width", "15%");
      $(".discovery").addClass("active").siblings().removeClass("active");
    });
    
    $(".step02").click( function() {
      $("#line-progress").css("width", "35%");
      $(".strategy").addClass("active").siblings().removeClass("active");
    });
    
    $(".step03").click( function() {
      $("#line-progress").css("width", "55%");
      $(".creative").addClass("active").siblings().removeClass("active");
    });
    
    $(".step04").click( function() {
      fireConfetti()
      $("#line-progress").css("width", "100%");
      $(".production").addClass("active").siblings().removeClass("active");
    });
    
    // $(".step05").click( function() {
    //   $("#line-progress").css("width", "100%");
    //   $(".analysis").addClass("active").siblings().removeClass("active");
    // });
  
   
  }, [])

  
  return (
    <div name='about' id='about' className='w-full h-[auto] bg-[#2d2e39] text-gray-300 pb-[30px]'>
      <div className='flex flex-col justify-center items-center w-full '>
        <div className='text-center'>


        <h1 className='timelineTitle font-bold text-5xl mt-[50px] mb-[30px]'>{i18next.t("about.title")}</h1>

        <div className="process-wrapper">
          <div id="progress-bar-container">
            <ul>
              <li className="step step01 active"><div className="step-inner" id='etec'>2017-2020</div></li>
              <li className="step step02"><div className="step-inner">2021-2025</div></li>
              <li className="step step03"><div className="step-inner">2021-2022</div></li>
              <li className="step step04"><div className="step-inner">2022-{i18next.t("about.today")}</div></li>
              {/* <li className="step step05"><div className="step-inner">OUR LOCATIONS</div></li> */}
            </ul>
            
            <div id="line">
              <div id="line-progress"></div>
            </div>
          </div>

          <div id="progress-content-section">
            <div className="section-content discovery active">
            <h2>{i18next.t("about.etec.title")}</h2>

            <p id='timelineP'>{i18next.t("about.etec.text")}</p>
            <ul className='timelineUL'>
              <li><span className='text-[#000]'>◉</span> {i18next.t("about.etec.list.list1")}</li>
              <li><span className='text-[#000]'>◉</span> {i18next.t("about.etec.list.list2")}</li>
              <li><span className='text-[#000]'>◉</span> {i18next.t("about.etec.list.list3")}</li>
              <li><span className='text-[#000]'>◉</span> {i18next.t("about.etec.list.list4")}</li>
            </ul>

            <img src="../assets/etecCompressed.png" className='w-[700px]' alt='teste'/>
            </div>
            
            <div className="section-content strategy">
              <h2>{i18next.t("about.college.title")}</h2>
              
              <p id='timelineP'>{i18next.t("about.college.text")}</p>

              <div className='flex justify-center items-center'>
                <img src="../assets/saojudas.png" className='w-[700px]' alt='teste'/>
              </div>
              
              
            </div>
            
            <div className="section-content creative">
              <div className='imgsContainer inline-flex mb-[10px]'>
                <img className='tsystemsLogo w-[170px] h-[50px]' src="../assets/tsystems.png" alt='T-Systems'/>

                <div className='mercedesLogo'>
                  <img id='mercedesFoto' className='ml-[70px] h-[70px]' src="../assets/mercedes-logo.png" alt='Mercedes-Benz'/>
                </div>
              </div>

              <p id='timelineP'>{i18next.t("about.firstJob.text")}</p>
              <ul className='timelineUL'>
                <li><span className='text-[#000]'>◉</span> {i18next.t("about.firstJob.list.list1")}</li>
                <li><span className='text-[#000]'>◉</span> {i18next.t("about.firstJob.list.list2")}</li>
                <li><span className='text-[#000]'>◉</span> {i18next.t("about.firstJob.list.list3")}</li>
              </ul>
            </div>
            
            <div className="section-content production">
              <div className='inline-flex'>
                <img src="../assets/deutsche-telekom.png" className='deutscheLogo w-[200px]' alt='teste'/>
                <span className='text-[#e20074] font-bold ml-[10px] mt-[10px]'>Deutsche Telekom</span>
              </div>
            
              
              <p id='timelineP'>{i18next.t("about.actualJob.text")}</p>
              <ul className='timelineUL'>
                <li><span className='text-[#000]'>◉</span> {i18next.t("about.actualJob.list.list1")}</li>
                <li><span className='text-[#000]'>◉</span> {i18next.t("about.actualJob.list.list2")}</li>
                <li><span className='text-[#000]'>◉</span> {i18next.t("about.actualJob.list.list3")}</li>
              </ul>
            </div>
          </div>
        </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
