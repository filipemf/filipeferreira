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
      $("#line-progress").css("width", "3%");
      $(".discovery").addClass("active").siblings().removeClass("active");
    });
    
    $(".step02").click( function() {
      $("#line-progress").css("width", "25%");
      $(".strategy").addClass("active").siblings().removeClass("active");
    });
    
    $(".step03").click( function() {
      $("#line-progress").css("width", "50%");
      $(".creative").addClass("active").siblings().removeClass("active");
    });
    
    $(".step04").click( function() {
      fireConfetti()
      $("#line-progress").css("width", "75%");
      $(".production").addClass("active").siblings().removeClass("active");
    });
    
    // $(".step05").click( function() {
    //   $("#line-progress").css("width", "100%");
    //   $(".analysis").addClass("active").siblings().removeClass("active");
    // });
  
   
  }, [])

  
  return (
    <div name='about' id='about' className='w-full h-[100vh] bg-[#2d2f39] text-gray-300 pb-[30px]'>
      <div className='flex flex-col justify-center items-center w-full '>
        <div className='' style={{textAlign: 'center'}}>


        <h1 className='timelineTitle font-bold text-5xl mt-[50px] mb-[30px]'>{i18next.t("about.title")}</h1>

        <div class="process-wrapper">
          <div id="progress-bar-container">
            <ul>
              <li class="step step01 active"><div class="step-inner" id='etec'>2017-2020</div></li>
              <li class="step step02"><div class="step-inner" style={{bottom: '-10px !important'}}>2021-2025</div></li>
              <li class="step step03"><div class="step-inner">2021-2022</div></li>
              <li class="step step04"><div class="step-inner">2022-{i18next.t("about.today")}</div></li>
              {/* <li class="step step05"><div class="step-inner">OUR LOCATIONS</div></li> */}
            </ul>
            
            <div id="line">
              <div id="line-progress"></div>
            </div>
          </div>

          <div id="progress-content-section">
            <div class="section-content discovery active">
            <h2 style={{color: 'rgba(19, 226, 166, 1);', fontWeight: 'bolder;', fontSize: '2rem;', marginTop: '50px;'}}>{i18next.t("about.etec.title")}</h2>

            <p id='timelineP' style={{fontSize: '.85rem;', fontWeight: '400;', marginLeft: '30px;', marginRight: '30px;', marginTop: '20px;', marginBottom: '10px;'}}>{i18next.t("about.etec.text")}</p>
            <ul className='timelineUL' style={{fontSize: '.85rem;', fontWeight: '400;', marginBottom: '50px;'}}>
              <li><span className='text-[#000]'>◉</span> {i18next.t("about.etec.list.list1")}</li>
              <li><span className='text-[#000]'>◉</span> {i18next.t("about.etec.list.list2")}</li>
              <li><span className='text-[#000]'>◉</span> {i18next.t("about.etec.list.list3")}</li>
              <li><span className='text-[#000]'>◉</span> {i18next.t("about.etec.list.list4")}</li>
            </ul>
            </div>
            
            <div class="section-content strategy">
              <h2 style={{color: 'rgba(19, 226, 166, 1);', fontWeight: 'bolder;', fontSize: '2rem;', marginTop: '50px;'}}>{i18next.t("about.college.title")}</h2>
              
              <p id='timelineP' style={{fontSize: '.85rem;', fontWeight: '400;', marginLeft: '30px;', marginRight: '30px;', marginTop: '20px;'}}>{i18next.t("about.college.text")}</p>
              
            </div>
            
            <div class="section-content creative">
              <div style={{display: '-webkit-inline-box;', marginTop: '50px;'}} className='imgsContainer inline-flex'>
                <img className='tsystemsLogo w-[300px] h-[auto]' style={{width: '200px;', marginTop: '40px'}} src="../assets/tsystems.png" alt='T-Systems'/>

                <div className='mercedesLogo' style={{marginBottom: '20px;'}}>
                  <img id='mercedesFoto' className='w-[180px] ml-[60px]' style={{width: '200px;'}} src="../assets/mercedes-logo.png" alt='Mercedes-Benz'/>
                  {/* <span className='text-gray-600 font-normal ml-[30px]' style={{marginLeft: '10px;', fontSize: '21px;', fontWeight: '400;', color: '#7f8588 !important'}}>Mercedes-Benz</span> */}
                </div>
              </div>

              <p id='timelineP' style={{fontSize: '.85rem;', fontWeight: '400;', marginLeft: '30px;', marginRight: '30px;', marginTop: '20px;', marginBottom: '10px;'}}>{i18next.t("about.firstJob.text")}</p>
              <ul className='timelineUL' style={{fontSize: '.85rem;', fontWeight: '400;', marginBottom: '50px;'}}>
                <li><span className='text-[#000]'>◉</span> {i18next.t("about.firstJob.list.list1")}</li>
                <li><span className='text-[#000]'>◉</span> {i18next.t("about.firstJob.list.list2")}</li>
                <li><span className='text-[#000]'>◉</span> {i18next.t("about.firstJob.list.list3")}</li>
              </ul>
            </div>
            
            <div class="section-content production">
              <div style={{display: '-webkit-inline-box;', marginTop: '50px;'}} className='inline-flex'>
                <img src="../assets/deutsche-telekom.png" className='deutscheLogo w-[200px]' style={{width: '200px;', marginLeft: '25px'}} alt='teste'/>
                <span className='text-[#e20074] font-bold ml-[10px] mt-[10px]' style={{marginLeft: '10px;', fontSize: '21px;', fontWeight: '400;', color: '#e20074 !important'}}>Deutsche Telekom</span>
              </div>
            
              
              <p id='timelineP' style={{fontSize: '.85rem;', fontWeight: '400;', marginLeft: '30px;', marginRight: '30px;', marginTop: '20px;', marginBottom: '10px;'}}>{i18next.t("about.actualJob.text")}</p>
              <ul className='timelineUL' style={{fontSize: '.85rem;', fontWeight: '400;', marginBottom: '50px;'}}>
                <li><span className='text-[#000]'>◉</span> {i18next.t("about.actualJob.list.list1")}</li>
                <li><span className='text-[#000]'>◉</span> {i18next.t("about.actualJob.list.list2")}</li>
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
