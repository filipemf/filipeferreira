"use strict";(self.webpackChunkfilipeferreira=self.webpackChunkfilipeferreira||[]).push([[391],{9391:function(t,e,s){s.r(e),s.d(e,{default:function(){return g}});var i,l=s(9439),a=s(2791),n=s(8890),o=s.n(n);window.SVG3DTagCloud=function(t,e){var s={entries:[],width:480,height:480,radius:"70%",radiusMin:75,bgDraw:!0,bgColor:"#000",opacityOver:1,opacityOut:.05,opacitySpeed:6,fov:800,speed:2,fontFamily:"Arial, sans-serif",fontSize:"15",fontColor:"#fff",fontWeight:"normal",fontStyle:"normal",fontStretch:"normal",fontToUpperCase:!1,tooltipFontFamily:"Arial, sans-serif",tooltipFontSize:"15",tooltipFontColor:"#fff",tooltipFontWeight:"normal",tooltipFontStyle:"normal",tooltipFontStretch:"normal",tooltipFontToUpperCase:!1,tooltipTextAnchor:"left",tooltipDiffX:0,tooltipDiffY:10,animatingSpeed:.01,animatingRadiusLimit:1.3};if(void 0!==e)for(var i in e)e.hasOwnProperty(i)&&s.hasOwnProperty(i)&&(s[i]=e[i]);if(!s.entries.length)return!1;var l,a,n,o,r,c,d,h=[],m=!0,_={x:0,y:0},p={x:0,y:0,z:0},g={x:0,y:0},u={sx:0,cx:0,sy:0,cy:0},x=Math.PI/180,f="http://www.w3.org/2000/svg",k=1;function v(){window.cancelAnimFrame(d),window.removeEventListener("resize",F),c&&r.removeChild(c),r&&(t.removeChild(r),r.removeEventListener("mousemove",E))}function N(){(r=document.createElementNS(f,"svg")).addEventListener("mousemove",E),r.setAttribute("style","display: initial !important"),t.appendChild(r),s.bgDraw&&((c=document.createElementNS(f,"rect")).setAttribute("x",0),c.setAttribute("y",0),c.setAttribute("fill",s.bgColor),r.appendChild(c)),function(){for(var t=!1,e=1,i=s.entries.length+1;e<i;e++){var l=Math.acos(2*e/i-1),a=Math.sqrt(i*Math.PI)*l,n=Math.cos(a)*Math.sin(l),o=Math.sin(a)*Math.sin(l),r=Math.cos(l),c=b(e-1,s.entries[e-1],n,o,r);h.push(c),"undefined"!=typeof s.entries[e-1].tooltip&&(t=!0)}t&&y()}(),j(),S(),window.addEventListener("resize",F)}function j(){var e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,i=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,l=e,d=i;s.width.toString().indexOf("%")>0||s.height.toString().indexOf("%")>0?(l=Math.round(t.offsetWidth/100*parseInt(s.width)),d=Math.round(l/100*parseInt(s.height))):(l=parseInt(s.width),d=parseInt(s.height)),e<=l&&(l=e),i<=d&&(d=i),o={x:l/2,y:d/2},g.x=s.speed/o.x,g.y=s.speed/o.y,(n=l>=d?d/100*parseInt(s.radius):l/100*parseInt(s.radius))<1&&(n=1),(a=n/2)<s.radiusMin&&(a=s.radiusMin,n=2*a),r.setAttribute("width","auto"),r.id="cloudSVG",r.setAttribute("height",d),s.bgDraw&&(c.setAttribute("width","auto"),c.setAttribute("height",d)),function(t){for(var e=0,s=h.length;e<s;e++)w(h[e],t)}(a*k)}function w(t,e){var s=t.vectorPosition.x-p.x,i=t.vectorPosition.y-p.y,l=t.vectorPosition.z-p.z,a=Math.sqrt(s*s+i*i+l*l);t.vectorPosition.x/=a,t.vectorPosition.y/=a,t.vectorPosition.z/=a,t.vectorPosition.x*=e,t.vectorPosition.y*=e,t.vectorPosition.z*=e}function b(t,e,i,l,a){var n={};return"undefined"!=typeof e.label?(n.element=document.createElementNS(f,"text"),n.element.setAttribute("x",0),n.element.setAttribute("y",0),n.element.setAttribute("fill",s.fontColor),n.element.setAttribute("font-family",s.fontFamily),n.element.setAttribute("font-size",e.fontSize?e.fontSize:s.fontSize),n.element.setAttribute("font-weight",s.fontWeight),n.element.setAttribute("font-style",s.fontStyle),n.element.setAttribute("font-stretch",s.fontStretch),n.element.setAttribute("text-anchor","middle"),n.element.textContent=s.fontToUpperCase?e.label.toUpperCase():e.label):"undefined"!=typeof e.image&&(n.element=document.createElementNS(f,"image"),n.element.setAttribute("x",0),n.element.setAttribute("y",0),n.element.setAttribute("width",e.width),n.element.setAttribute("height",e.height),n.element.setAttribute("id","image_"+t),n.element.setAttributeNS("http://www.w3.org/1999/xlink","href",e.image),n.diffX=e.width/2,n.diffY=e.height/2),n.link=document.createElementNS(f,"a"),n.link.setAttribute("target",e.target),n.link.addEventListener("mouseover",C,!0),n.link.addEventListener("mouseout",z,!0),n.link.appendChild(n.element),"undefined"!=typeof e.tooltip?(n.tooltip=!0,n.tooltipLabel=s.tooltipFontToUpperCase?e.tooltip.toUpperCase():e.tooltip):n.tooltip=!1,n.index=t,n.mouseOver=!1,n.vectorPosition={x:i,y:l,z:a},n.vector2D={x:0,y:0},r.appendChild(n.link),n}function y(){(l=document.createElementNS(f,"text")).setAttribute("x",0),l.setAttribute("y",0),l.setAttribute("fill",s.tooltipFontColor),l.setAttribute("font-family",s.tooltipFontFamily),l.setAttribute("font-size",s.tooltipFontSize),l.setAttribute("font-weight",s.tooltipFontWeight),l.setAttribute("font-style",s.tooltipFontStyle),l.setAttribute("font-stretch",s.tooltipFontStretch),l.setAttribute("text-anchor",s.tooltipTextAnchor),l.textContent="",r.appendChild(l)}function A(t){for(var e=0,s=h.length;e<s;e++){var i=h[e];if(i.element.getAttribute("x")===t.getAttribute("x")&&i.element.getAttribute("y")===t.getAttribute("y"))return i}}function S(){d=window.requestAnimationFrame(S),function(){var t=g.x*_.x-s.speed,e=s.speed-g.y*_.y,i=t*x,l=e*x;u.sx=Math.sin(i),u.cx=Math.cos(i),u.sy=Math.sin(l),u.cy=Math.cos(l);for(var r=0,c=h.length;r<c;r++){var d=h[r];if(m){var p=d.vectorPosition.x,f=d.vectorPosition.y*u.sy+d.vectorPosition.z*u.cy;d.vectorPosition.x=p*u.cx+f*u.sx,d.vectorPosition.y=d.vectorPosition.y*u.cy+d.vectorPosition.z*-u.sy,d.vectorPosition.z=p*-u.sx+f*u.cx}var v,N=s.fov/(s.fov+d.vectorPosition.z);d.vector2D.x=d.vectorPosition.x*N+o.x,d.vector2D.y=d.vectorPosition.y*N+o.y,d.diffX&&d.diffY&&(d.vector2D.x-=d.diffX,d.vector2D.y-=d.diffY),d.element.setAttribute("x",d.vector2D.x),d.element.setAttribute("y",d.vector2D.y),m?(v=(a-d.vectorPosition.z)/n)<s.opacityOut&&(v=s.opacityOut):(v=parseFloat(d.element.getAttribute("opacity")),d.mouseOver?v+=(s.opacityOver-v)/s.opacitySpeed:v+=(s.opacityOut-v)/s.opacitySpeed),d.element.setAttribute("opacity",v*(1-(k-1)/(s.animatingRadiusLimit-1)))}h=h.sort((function(t,e){return e.vectorPosition.z-t.vectorPosition.z}))}()}function C(t){m=!1;var e=A(t.target);!function(t){for(var e=0,s=h.length;e<s;e++){var i=h[e];i.index===t.index?i.mouseOver=!0:i.mouseOver=!1}}(e),e.tooltip&&function(t){t.tooltip&&(l.setAttribute("x",t.vector2D.x-s.tooltipDiffX),l.setAttribute("y",t.vector2D.y-s.tooltipDiffY),l.textContent=s.tooltipFontToUpperCase?t.tooltipLabel.toUpperCase():t.tooltipLabel,l.setAttribute("opacity",1))}(e)}function z(t){m=!0;var e=A(t.target);e.tooltip&&l.setAttribute("opacity",0)}function E(t){_=function(t,e){var s=t.getBoundingClientRect();return{x:e.clientX-s.left,y:e.clientY-s.top}}(r,t)}function F(t){j()}function T(t){k=Math.min(Math.max(t,1),s.animatingRadiusLimit),j()}window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)},window.cancelAnimFrame=window.requestAnimationFrame?window.cancelAnimationFrame:window.webkitRequestAnimationFrame?window.webkitCancelAnimationFrame:window.mozRequestAnimationFrame?window.mozCancelAnimationFrame:window.clearTimeout;var P=!1,M=!1,D=!1;function L(){(D=k<s.animatingRadiusLimit)?(T(k+s.animatingSpeed),window.requestAnimationFrame(L)):"function"===typeof P&&(P(),P=!1)}function O(){(D=k>1)?(T(k-s.animatingSpeed),window.requestAnimationFrame(O)):"function"===typeof M&&(M(),M=!1)}N(),this.destroy=v,this.animOut=function(t){D||(k=1,P=t,L())},this.animIn=function(t){D||(k=s.animatingRadiusLimit,M=t,O())},this.setEntries=function(t){v(),s.entries=t,N()}},"undefined"!==typeof o()&&((i=o()).fn.svg3DTagCloud=function(t){var e=arguments;return this.each((function(){if(i.data(this,"plugin_SVG3DTagCloud")){var s=i.data(this,"plugin_SVG3DTagCloud");s[t]?s[t].apply(this,Array.prototype.slice.call(e,1)):i.data(this,"plugin_SVG3DTagCloud",new window.SVG3DTagCloud(this,t))}else i.data(this,"plugin_SVG3DTagCloud",new window.SVG3DTagCloud(this,t))}))});var r=s(8825),c=(s(7632),s(8617)),d=s(6856),h=s(6355),m=s(978),_=s(8014),p=s(184),g=function(){var t=[{image:"../assets/html.png",width:"50",height:"50",target:"_top",tooltip:"HTML"},{image:"../assets/css.png",width:"50",height:"50",target:"_top",tooltip:"CSS3"},{image:"../assets/javascript.png",width:"50",height:"50",target:"_top",tooltip:"JavaScript"},{image:"../assets/react.png",width:"50",height:"50",target:"_top",tooltip:"ReactJS"},{image:"../assets/react-native.png",width:"70",height:"70",target:"_top",tooltip:"React Native"},{image:"../assets/node.png",width:"50",height:"50",target:"_top",tooltip:"Node"},{image:"../assets/threejs.png",width:"50",height:"50",target:"_top",tooltip:"Three.js"},{image:"../assets/firebase.png",width:"50",height:"50",target:"_top",tooltip:"Firebase"},{image:"../assets/github.png",width:"50",height:"50",target:"_top",tooltip:"Github"},{image:"../assets/mongo.png",width:"50",height:"50",target:"_top",tooltip:"MongoDB"},{image:"../assets/mysql.png",width:"100",height:"100",target:"_top",tooltip:"MySQL"},{image:"../assets/cisco.png",width:"70",height:"70",target:"_top",tooltip:"Cisco"},{image:"../assets/csharp.png",width:"70",height:"70",target:"_top",tooltip:"C#"},{image:"../assets/java.png",width:"70",height:"70",target:"_top",tooltip:"Java"},{image:"../assets/gitlab.png",width:"70",height:"70",target:"_top",tooltip:"GitLab"},{image:"../assets/aws.png",width:"70",height:"70",target:"_top",tooltip:"AWS"},{image:"../assets/angular.png",width:"70",height:"70",target:"_top",tooltip:"Angular"},{image:"../assets/typescript.png",width:"70",height:"70",target:"_top",tooltip:"TypeScript"},{image:"../assets/usflag.png",width:"50",height:"50",target:"_top",tooltip:"English"},{image:"../assets/brflag.png",width:"50",height:"50",target:"_top",tooltip:"Portuguese"}],e=(0,a.useState)(!1),s=(0,l.Z)(e,2),i=s[0],n=s[1],g=(0,a.useState)(!1),u=(0,l.Z)(g,2),x=u[0],f=u[1],k=(0,a.useState)(!1),v=(0,l.Z)(k,2),N=v[0],j=v[1],w=(0,a.useState)(!1),b=(0,l.Z)(w,2),y=b[0],A=b[1],S=(0,a.useRef)();function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"nada",s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;o()("#tagcloud").empty();var l=document.getElementsByClassName("skills__content");Array.from(l).forEach((function(t){if(t.className.includes(e))try{t.classList.replace("skills__close","skills__open")}catch(t){alert("nao deu")}else t.classList.replace("skills__open","skills__close")})),void 0!==i&&function(t){t.current.scrollIntoView()}(i);var a={entries:s,width:400,height:400,radius:"65%",radiusMin:75,bgDraw:!0,bgColor:"#22232A",opacityOver:1,opacityOut:.05,opacitySpeed:6,fov:800,speed:.5,fontFamily:"Oswald, Arial, sans-serif",fontSize:"15",fontColor:"#fff",fontWeight:"normal",fontStyle:"normal",fontStretch:"normal",fontToUpperCase:!0,tooltipFontFamily:"Oswald, Arial, sans-serif",tooltipFontSize:"11",tooltipFontColor:"#fff",tooltipFontWeight:"normal",tooltipFontStyle:"normal",tooltipFontStretch:"normal",tooltipFontToUpperCase:!1,tooltipTextAnchor:"left",tooltipDiffX:0,tooltipDiffY:10,animatingSpeed:.01,animatingRadiusLimit:1.3};o()(S.current).svg3DTagCloud(a)}(0,a.useEffect)((function(){C()}),[]);var z=(0,a.useRef)(),E=(0,a.useRef)(),F=(0,a.useRef)(),T=(0,a.useRef)();function P(t){"FE"===t?(n(!i),f(!1),j(!1),A(!1)):"BE"===t?(n(!1),f(!x),j(!1),A(!1)):"DB"===t?(n(!1),f(!1),j(!N),A(!1)):"OS"===t&&(n(!1),f(!1),j(!1),A(!y))}return(0,p.jsx)("div",{name:"skills",className:"w-full h-[auto] pb-[30px] bg-[#22232A] text-gray-300 text-center items-center justify-center",children:(0,p.jsxs)("div",{className:"flex flex-col justify-center items-center w-full text-center",children:[(0,p.jsx)("h1",{className:"timelineTitle font-bold text-5xl mt-[50px] mb-[30px]",children:r.ZP.t("skills.title")}),(0,p.jsx)("p",{className:"mb-[15px]",children:r.ZP.t("skills.instructions")}),(0,p.jsx)("div",{className:"skills__container",style:{width:"100%"},children:(0,p.jsxs)("div",{className:"skills__subcontainer gap-[50px] inline-flex",children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("div",{id:"teste2323",className:"test2323",style:{display:"flex",flexDirection:"column"},children:(0,p.jsxs)("div",{className:"skills__content be skills__close",children:[(0,p.jsxs)("div",{className:"skills__header",onClick:function(){P("BE"),function(){var t=document.getElementsByClassName("skills__content be"),e=E;if("skills__content be skills__close"===e.current.parentElement.className)e.current.parentElement.className="skills__content be skills__open",window.matchMedia("(max-width: 767px)").matches?o()("#tagcloud").prependTo(o()(".skills__content.be.skills__open  div.skills__list.grid")):o()("#tagcloud").appendTo(o()(".skills__subcontainer"));else{if("skills__content be skills__open"===e.current.parentElement.className){for(var s=0;s<t.length;s++)t[s].className="skills__content be skills__close";return e.current.parentElement.className="skills__content be skills__close",o()("#tagcloud").appendTo(o()(".skills__subcontainer")),C()}for(var i=0;i<t.length;i++)t[i].className="skills__content be skills__close"}C(e.current.parentElement.className,[{image:"../assets/react-native.png",width:"70",height:"70",target:"_top",tooltip:"React Native"},{image:"../assets/java.png",width:"70",height:"70",target:"_top",tooltip:"Java"},{image:"../assets/spring.png",width:"70",height:"70",target:"_top",tooltip:"Spring"},{image:"../assets/node.png",width:"50",height:"50",target:"_top",tooltip:"Node"},{image:"../assets/csharp.png",width:"70",height:"70",target:"_top",tooltip:"C#"},{image:"../assets/python.png",width:"70",height:"70",target:"_top",tooltip:"Python"}],e)}()},ref:E,children:[(0,p.jsx)(c.Zbf,{size:30,className:"skills__icon"}),(0,p.jsx)("div",{children:(0,p.jsx)("h2",{className:"skills__titles",children:"Backend"})}),x?(0,p.jsx)(c.Ebi,{size:18}):(0,p.jsx)(c.GMx,{size:18})]}),(0,p.jsxs)("div",{className:"skills__list grid",children:[(0,p.jsx)("div",{className:"skills__data",children:(0,p.jsx)("div",{className:"skills__titles",children:(0,p.jsxs)("h3",{className:"skills__name",children:["Java ",(0,p.jsx)(h.zEo,{size:20})," "]})})}),(0,p.jsx)("div",{className:"skills__data",children:(0,p.jsx)("div",{className:"skills__titles",children:(0,p.jsxs)("h3",{className:"skills__name",children:["Spring ",(0,p.jsx)(m.Ciz,{size:20})," "]})})}),(0,p.jsx)("div",{className:"skills__data",children:(0,p.jsx)("div",{className:"skills__titles",children:(0,p.jsxs)("h3",{className:"skills__name",children:["NodeJS ",(0,p.jsx)(h.t0,{size:20})," "]})})}),(0,p.jsx)("div",{className:"skills__data",children:(0,p.jsx)("div",{className:"skills__titles",children:(0,p.jsxs)("h3",{className:"skills__name",children:["C# ",(0,p.jsx)(m.qJU,{size:20})," "]})})}),(0,p.jsx)("div",{className:"skills__data",children:(0,p.jsx)("div",{className:"skills__titles",children:(0,p.jsxs)("h3",{className:"skills__name",children:["Python ",(0,p.jsx)(h.osz,{size:20})," "]})})}),(0,p.jsx)("div",{className:"skills__data",children:(0,p.jsx)("div",{className:"skills__titles",children:(0,p.jsxs)("h3",{className:"skills__name",children:["React Native ",(0,p.jsx)(h.huN,{size:20})," "]})})})]})]})}),(0,p.jsxs)("div",{className:"skills__content fe skills__close",children:[(0,p.jsxs)("div",{className:"skills__header",onClick:function(){P("FE"),function(){var t=document.getElementsByClassName("skills__content fe"),e=z;if("skills__content fe skills__close"===e.current.parentElement.className)e.current.parentElement.className="skills__content fe skills__open",window.matchMedia("(max-width: 767px)").matches?o()("#tagcloud").prependTo(o()(".skills__content.fe.skills__open  div.skills__list.grid")):o()("#tagcloud").appendTo(o()(".skills__subcontainer"));else{if("skills__content fe skills__open"===e.current.parentElement.className){for(var s=0;s<t.length;s++)t[s].className="skills__content fe skills__close";return e.current.parentElement.className="skills__content fe skills__close",o()("#tagcloud").appendTo(o()(".skills__subcontainer")),C()}for(var i=0;i<t.length;i++)t[i].className="skills__content fe skills__close"}C(e.current.parentElement.className,[{image:"../assets/html.png",width:"50",height:"50",target:"_top",tooltip:"HTML"},{image:"../assets/css.png",width:"50",height:"50",target:"_top",tooltip:"CSS3"},{image:"../assets/javascript.png",width:"50",height:"50",target:"_top",tooltip:"JavaScript"},{image:"../assets/react.png",width:"50",height:"50",target:"_top",tooltip:"ReactJS"},{image:"../assets/threejs.png",width:"50",height:"50",target:"_top",tooltip:"Three.js"},{image:"../assets/angular.png",width:"70",height:"70",target:"_top",tooltip:"Angular"},{image:"../assets/typescript.png",width:"70",height:"70",target:"_top",tooltip:"TypeScript"}],e)}()},ref:z,children:[(0,p.jsx)(c.aJo,{size:30,className:"skills__icon"}),(0,p.jsx)("div",{children:(0,p.jsx)("h2",{className:"skills__titles",children:"Frontend"})}),i?(0,p.jsx)(c.Ebi,{size:18}):(0,p.jsx)(c.GMx,{size:18})]}),(0,p.jsxs)("div",{className:"skills__list grid",children:[(0,p.jsx)("div",{className:"skills__data",children:(0,p.jsx)("div",{className:"skills__titles",children:(0,p.jsxs)("h3",{className:"skills__name",children:["HTML ",(0,p.jsx)(h.gtO,{size:20})," "]})})}),(0,p.jsx)("div",{className:"skills__data",children:(0,p.jsx)("div",{className:"skills__titles",children:(0,p.jsxs)("h3",{className:"skills__name",children:["JavaScript ",(0,p.jsx)(h.Oad,{size:20})," "]})})}),(0,p.jsx)("div",{className:"skills__data",children:(0,p.jsx)("div",{className:"skills__titles",children:(0,p.jsxs)("h3",{className:"skills__name",children:["CSS ",(0,p.jsx)(h.r8,{size:20})," "]})})}),(0,p.jsx)("div",{className:"skills__data",children:(0,p.jsx)("div",{className:"skills__titles",children:(0,p.jsxs)("h3",{className:"skills__name",children:["React ",(0,p.jsx)(h.huN,{size:20})," "]})})}),(0,p.jsx)("div",{className:"skills__data",children:(0,p.jsx)("div",{className:"skills__titles",children:(0,p.jsxs)("h3",{className:"skills__name",children:["Three.js ",(0,p.jsx)(m.wVw,{size:20})," "]})})}),(0,p.jsx)("div",{className:"skills__data",children:(0,p.jsx)("div",{className:"skills__titles",children:(0,p.jsxs)("h3",{className:"skills__name",children:["Angular ",(0,p.jsx)(h.aRi,{size:20})," "]})})}),(0,p.jsx)("div",{className:"skills__data",children:(0,p.jsx)("div",{className:"skills__titles",children:(0,p.jsxs)("h3",{className:"skills__name",children:["Typescript ",(0,p.jsx)(m.WZi,{size:20})," "]})})})]})]}),(0,p.jsxs)("div",{className:"skills__content db skills__close",children:[(0,p.jsxs)("div",{className:"skills__header",onClick:function(){P("DB"),function(){var t=document.getElementsByClassName("skills__content db"),e=F;if("skills__content db skills__close"===e.current.parentElement.className)e.current.parentElement.className="skills__content db skills__open",window.matchMedia("(max-width: 767px)").matches?o()("#tagcloud").prependTo(o()(".skills__content.db.skills__open  div.skills__list.grid")):o()("#tagcloud").appendTo(o()(".skills__subcontainer"));else{if("skills__content db skills__open"===e.current.parentElement.className){for(var s=0;s<t.length;s++)t[s].className="skills__content db skills__close";return e.current.parentElement.className="skills__content db skills__close",o()("#tagcloud").appendTo(o()(".skills__subcontainer")),C()}for(var i=0;i<t.length;i++)t[i].className="skills__content db skills__close"}C(e.current.parentElement.className,[{image:"../assets/firebase.png",width:"50",height:"50",target:"_top",tooltip:"Google Cloud"},{image:"../assets/redis.png",width:"50",height:"50",target:"_top",tooltip:"Redis"},{image:"../assets/github.png",width:"50",height:"50",target:"_top",tooltip:"Github"},{image:"../assets/mongo.png",width:"50",height:"50",target:"_top",tooltip:"MongoDB"},{image:"../assets/mysql.png",width:"100",height:"100",target:"_top",tooltip:"MySQL"},{image:"../assets/cisco.png",width:"70",height:"70",target:"_top",tooltip:"Cisco"},{image:"../assets/gitlab.png",width:"70",height:"70",target:"_top",tooltip:"GitLab"},{image:"../assets/aws.png",width:"70",height:"70",target:"_top",tooltip:"AWS"}],e)}()},ref:F,children:[(0,p.jsx)(c.aOQ,{size:30,className:"skills__icon"}),(0,p.jsx)("div",{children:(0,p.jsx)("h2",{className:"skills__titles",children:r.ZP.t("skills.db")})}),N?(0,p.jsx)(c.Ebi,{size:18}):(0,p.jsx)(c.GMx,{size:18})]}),(0,p.jsxs)("div",{className:"skills__list grid",children:[(0,p.jsx)("div",{className:"skills__data",children:(0,p.jsx)("div",{className:"skills__titles",children:(0,p.jsxs)("h3",{className:"skills__name",children:["Google Cloud ",(0,p.jsx)(m.tkX,{size:20})," "]})})}),(0,p.jsx)("div",{className:"skills__data",children:(0,p.jsx)("div",{className:"skills__titles",children:(0,p.jsxs)("h3",{className:"skills__name",children:["Redis ",(0,p.jsx)(m.NPu,{size:20})," "]})})}),(0,p.jsx)("div",{className:"skills__data",children:(0,p.jsx)("div",{className:"skills__titles",children:(0,p.jsxs)("h3",{className:"skills__name",children:["Github ",(0,p.jsx)(h.hJX,{size:20})," "]})})}),(0,p.jsx)("div",{className:"skills__data",children:(0,p.jsx)("div",{className:"skills__titles",children:(0,p.jsxs)("h3",{className:"skills__name",children:["MongoDB ",(0,p.jsx)(m.t$b,{size:20})," "]})})}),(0,p.jsx)("div",{className:"skills__data",children:(0,p.jsx)("div",{className:"skills__titles",children:(0,p.jsxs)("h3",{className:"skills__name",children:["MySQL ",(0,p.jsx)(m.uJt,{size:20})]})})}),(0,p.jsx)("div",{className:"skills__data",children:(0,p.jsx)("div",{className:"skills__titles",children:(0,p.jsxs)("h3",{className:"skills__name",children:["Networks ",(0,p.jsx)(m.qDX,{size:20})]})})}),(0,p.jsx)("div",{className:"skills__data",children:(0,p.jsx)("div",{className:"skills__titles",children:(0,p.jsxs)("h3",{className:"skills__name",children:["Gitlab ",(0,p.jsx)(h.eH5,{size:20})]})})}),(0,p.jsx)("div",{className:"skills__data",children:(0,p.jsx)("div",{className:"skills__titles",children:(0,p.jsxs)("h3",{className:"skills__name",children:["AWS ",(0,p.jsx)(h.UC$,{size:20})]})})})]})]}),(0,p.jsxs)("div",{className:"skills__content os skills__close",children:[(0,p.jsxs)("div",{className:"skills__header",onClick:function(){P("OS"),function(){var t=document.getElementsByClassName("skills__content os"),e=T;if("skills__content os skills__close"===e.current.parentElement.className)e.current.parentElement.className="skills__content os skills__open",window.matchMedia("(max-width: 767px)").matches?o()("#tagcloud").prependTo(o()(".skills__content.os.skills__open  div.skills__list.grid")):o()("#tagcloud").appendTo(o()(".skills__subcontainer"));else{if("skills__content os skills__open"===e.current.parentElement.className){for(var s=0;s<t.length;s++)t[s].className="skills__content os skills__close";return e.current.parentElement.className="skills__content os skills__close",o()("#tagcloud").appendTo(o()(".skills__subcontainer")),C()}for(var i=0;i<t.length;i++)t[i].className="skills__content os skills__close"}C(e.current.parentElement.className,[{image:"../assets/usflag.png",width:"50",height:"50",target:"_top",tooltip:"English"},{image:"../assets/brflag.png",width:"50",height:"50",target:"_top",tooltip:"Portuguese"}],e)}()},ref:T,children:[(0,p.jsx)(d.$lZ,{size:30,className:"skills__icon"}),(0,p.jsx)("div",{children:(0,p.jsx)("h2",{className:"skills__titles",children:r.ZP.t("skills.lng")})}),y?(0,p.jsx)(c.Ebi,{size:18}):(0,p.jsx)(c.GMx,{size:18})]}),(0,p.jsxs)("div",{className:"skills__list grid",children:[(0,p.jsx)("div",{className:"skills__data",children:(0,p.jsx)("div",{className:"skills__titles",children:(0,p.jsxs)("h3",{className:"skills__name",children:[r.ZP.t("skills.en")," ",(0,p.jsx)(h.SYy,{size:20})," "]})})}),(0,p.jsx)("div",{className:"skills__data",children:(0,p.jsx)("div",{className:"skills__titles",children:(0,p.jsxs)("h3",{className:"skills__name",children:[r.ZP.t("skills.pt")," ",(0,p.jsx)(_._gB,{size:20})," "]})})})]})]})]}),(0,p.jsx)("div",{id:"tagcloud",ref:S,className:""})]})}),(0,p.jsx)("h2",{className:"timelineTitle font-bold text-5xl mt-[50px] mb-[30px]",children:r.ZP.t("skills.title2")}),(0,p.jsxs)("div",{className:"inline-flex gap-[20px]",children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("h3",{className:"timelineTitle font-bold text-3xl mt-[50px] mb-[30px]",children:"Network"}),(0,p.jsxs)("div",{className:"inline-flex gap-[20px]",children:[(0,p.jsx)("div",{children:(0,p.jsxs)("a",{className:"averageLink block",href:"https://www.credly.com/badges/702c0876-bfb2-43dc-856b-264e6a0cb735?source=linked_in_profile",children:[(0,p.jsx)("img",{src:"../assets/certifications/ccna.png",alt:"CCNA 1",className:"w-[200px]"}),(0,p.jsx)("span",{className:"text-[#d1dbdc]",children:"CCNA 1"})]})}),(0,p.jsx)("div",{children:(0,p.jsxs)("a",{className:"averageLink block",href:"https://www.credly.com/badges/7ac2956d-9369-4e9a-921c-6700a4dabd5e?source=linked_in_profile",children:[(0,p.jsx)("img",{src:"../assets/certifications/cyberops.png",alt:"Cyber Ops Associate",className:"w-[200px]"}),(0,p.jsx)("span",{className:"text-[#d1dbdc]",children:"Cyber Ops Associate"})]})})]})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("h3",{className:"timelineTitle font-bold text-3xl mt-[50px] mb-[30px]",children:"AWS"}),(0,p.jsx)("div",{className:"inline-flex gap-[20px]",children:(0,p.jsx)("div",{children:(0,p.jsxs)("a",{className:"averageLink block",href:"https://www.credly.com/badges/9896c202-6322-46c1-a5a5-fa4ec5b353a3/public_url",children:[(0,p.jsx)("img",{src:"../assets/certifications/cloud-foundations.png",alt:"Cloud Foundations",className:"w-[200px]"}),(0,p.jsx)("span",{className:"text-[#d1dbdc]",children:"Cloud Foundations"})]})})})]})]})]})})}}}]);
//# sourceMappingURL=391.bc334385.chunk.js.map