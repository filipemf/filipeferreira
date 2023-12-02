"use strict";(self.webpackChunkfilipeferreira=self.webpackChunkfilipeferreira||[]).push([[889],{5889:function(t,e,s){s.r(e),s.d(e,{default:function(){return d}});var n=s(9439),i=s(8825),r=s(2791),o=s(5667);function a(){return a=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t},a.apply(this,arguments)}var u={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}},c=new(function(){function t(){}var e=t.prototype;return e.load=function(t,e,s){if(t.el="string"==typeof s?document.querySelector(s):s,t.options=a({},u,e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map((function(t){return t.trim()})),t.stringsElement="string"==typeof t.options.stringsElement?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var n=Array.prototype.slice.apply(t.stringsElement.children),i=n.length;if(i)for(var r=0;r<i;r+=1)t.strings.push(n[r].innerHTML.trim())}for(var o in t.strPos=0,t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.sequence=[],t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.strings)t.sequence[o]=o;t.currentElContent=this.getCurrentElContent(t),t.autoInsertCss=t.options.autoInsertCss,this.appendAnimationCss(t)},e.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent},e.appendAnimationCss=function(t){var e="data-typed-js-css";if(t.autoInsertCss&&(t.showCursor||t.fadeOut)&&!document.querySelector("["+e+"]")){var s=document.createElement("style");s.type="text/css",s.setAttribute(e,!0);var n="";t.showCursor&&(n+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),t.fadeOut&&(n+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==s.length&&(s.innerHTML=n,document.body.appendChild(s))}},t}()),l=new(function(){function t(){}var e=t.prototype;return e.typeHtmlChars=function(t,e,s){if("html"!==s.contentType)return e;var n=t.substr(e).charAt(0);if("<"===n||"&"===n){var i;for(i="<"===n?">":";";t.substr(e+1).charAt(0)!==i&&!(1+ ++e>t.length););e++}return e},e.backSpaceHtmlChars=function(t,e,s){if("html"!==s.contentType)return e;var n=t.substr(e).charAt(0);if(">"===n||";"===n){var i;for(i=">"===n?"<":"&";t.substr(e-1).charAt(0)!==i&&!(--e<0););e--}return e},t}()),h=function(){function t(t,e){c.load(this,e,t),this.begin()}var e=t.prototype;return e.toggle=function(){this.pause.status?this.start():this.stop()},e.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},e.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},e.destroy=function(){this.reset(!1),this.options.onDestroy(this)},e.reset=function(t){void 0===t&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},e.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout((function(){t.currentElContent&&0!==t.currentElContent.length?t.backspace(t.currentElContent,t.currentElContent.length):t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)}),this.startDelay)},e.typewrite=function(t,e){var s=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var n=this.humanizer(this.typeSpeed),i=1;!0!==this.pause.status?this.timeout=setTimeout((function(){e=l.typeHtmlChars(t,e,s);var n=0,r=t.substr(e);if("^"===r.charAt(0)&&/^\^\d+/.test(r)){var o=1;o+=(r=/\d+/.exec(r)[0]).length,n=parseInt(r),s.temporaryPause=!0,s.options.onTypingPaused(s.arrayPos,s),t=t.substring(0,e)+t.substring(e+o),s.toggleBlinking(!0)}if("`"===r.charAt(0)){for(;"`"!==t.substr(e+i).charAt(0)&&(i++,!(e+i>t.length)););var a=t.substring(0,e),u=t.substring(a.length+1,e+i),c=t.substring(e+i+1);t=a+u+c,i--}s.timeout=setTimeout((function(){s.toggleBlinking(!1),e>=t.length?s.doneTyping(t,e):s.keepTyping(t,e,i),s.temporaryPause&&(s.temporaryPause=!1,s.options.onTypingResumed(s.arrayPos,s))}),n)}),n):this.setPauseStatus(t,e,!0)},e.keepTyping=function(t,e,s){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var n=t.substr(0,e+=s);this.replaceText(n),this.typewrite(t,e)},e.doneTyping=function(t,e){var s=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout((function(){s.backspace(t,e)}),this.backDelay))},e.backspace=function(t,e){var s=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var n=this.humanizer(this.backSpeed);this.timeout=setTimeout((function(){e=l.backSpaceHtmlChars(t,e,s);var n=t.substr(0,e);if(s.replaceText(n),s.smartBackspace){var i=s.strings[s.arrayPos+1];s.stopNum=i&&n===i.substr(0,e)?e:0}e>s.stopNum?(e--,s.backspace(t,e)):e<=s.stopNum&&(s.arrayPos++,s.arrayPos===s.strings.length?(s.arrayPos=0,s.options.onLastStringBackspaced(),s.shuffleStringsIfNeeded(),s.begin()):s.typewrite(s.strings[s.sequence[s.arrayPos]],e))}),n)}else this.setPauseStatus(t,e,!1)},e.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},e.setPauseStatus=function(t,e,s){this.pause.typewrite=s,this.pause.curString=t,this.pause.curStrPos=e},e.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},e.humanizer=function(t){return Math.round(Math.random()*t/2)+t},e.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort((function(){return Math.random()-.5})))},e.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout((function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)}),this.fadeOutDelay)},e.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t},e.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",(function(e){t.stop()})),this.el.addEventListener("blur",(function(e){t.el.value&&0!==t.el.value.length||t.start()})))},e.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},t}(),p=s(8820),f=s(184),d=function(){var t=(0,r.useState)(i.ZP.t("home.button")),e=(0,n.Z)(t,2),s=e[0];e[1];return(0,r.useEffect)((function(){new h(".auto-type",{strings:[i.ZP.t("home.titles.title1"),i.ZP.t("home.titles.title2"),i.ZP.t("home.titles.title3")],typeSpeed:60,backSpeed:90,loop:!0});var t=document.querySelector(".btn"),e=window.getComputedStyle(t,"::before");t.style.setProperty("content","new content"),console.log(e.getPropertyValue("content"))}),[]),(0,f.jsx)("div",{name:"home",id:"home",className:"w-full h-screen bg-[#22232a]",children:(0,f.jsx)("div",{className:" mx-auto px-8 flex flex-col justify-center h-full",children:(0,f.jsxs)("div",{className:"homeContainer flex mt-[100px] justify-center",children:[(0,f.jsxs)("div",{className:"homeText width-[695px]",children:[(0,f.jsx)("h1",{className:"text-4xl sm:text-5xl font-bold text-[#fff]",children:"Filipe Ferreira"}),(0,f.jsx)("div",{className:"inline-flex",children:(0,f.jsx)("h2",{className:"auto-type"})}),(0,f.jsxs)("div",{className:"",children:[(0,f.jsx)("div",{className:"contactDiv",children:(0,f.jsx)("a",{className:"averageLink flex justify-between items-center w-full text-gray-300",href:"https://github.com/filipemf",target:"_blank",rel:"noreferrer",children:(0,f.jsx)(p.RrF,{size:30})})}),(0,f.jsx)("div",{className:"contactDiv",children:(0,f.jsx)("a",{className:"averageLink flex justify-between items-center w-full text-gray-300",href:"https://www.linkedin.com/in/filipemarquesf/",target:"_blank",rel:"noreferrer",children:(0,f.jsx)(p._iD,{size:30})})}),(0,f.jsx)("div",{className:"contactDiv",children:(0,f.jsx)("a",{className:"averageLink flex justify-between items-center w-full text-gray-300",href:"//api.whatsapp.com/send?phone=5511967174160",target:"_blank",rel:"noreferrer",children:(0,f.jsx)(p.thF,{size:30})})})]}),(0,f.jsx)("p",{className:"text-[#8892b0] py-4 max-w-[700px] text-justify",children:i.ZP.t("home.about")}),(0,f.jsx)("div",{children:(0,f.jsx)(o.rU,{className:"btn",id:"btn",to:"about",smooth:!0,duration:500,style:{"--content":'"'.concat(s,'"')}})})]}),(0,f.jsx)("div",{className:"containerPhoto",children:(0,f.jsx)("img",{className:"image h-[500px]",src:"../assets/foto-nova-2.png",alt:"HTML icon"})})]})})})}}}]);
//# sourceMappingURL=889.205df7fc.chunk.js.map