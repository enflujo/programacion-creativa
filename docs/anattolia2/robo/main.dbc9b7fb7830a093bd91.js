!function(){"use strict";const t=document.getElementById("lienzo"),i=t.getContext("2d"),h=[];let e=0,s=0,o=0,l=a(0,255);function n(){i.fillStyle="hsla(211, 0%, 40%, 0.1)",i.fillRect(0,0,t.width,t.height);for(let t=0;t<h.length;t++)h[t].move();requestAnimationFrame(n)}function a(t,i){return t=Math.ceil(t),i=Math.floor(i),Math.floor(Math.random()*(i-t+1))+t}t.onmousemove=t=>{e=t.clientX,s=t.clientY},t.onmousedown=()=>{l=a(0,365);for(let t=0;t<=30;t++)h.push(new r(e,s,200,l))};class r{constructor(t,i,h,e){this.moveX=a(-5,5),this.moveY=a(-5,5),this.x=t,this.y=i,this.width=a(5,25),this.h=e+a(0,100),this.s=a(18,100),this.b=a(34,85),this.alpha=h}move(){var t,h,e;this.x=this.x+this.moveX,this.moveY=this.moveY+.1,this.y=this.y+this.moveY,i.fillStyle=`hsla(${this.h},${this.s}%,${this.b}%,${this.alpha})`,t=this.x,h=this.y,e=this.width,i.beginPath(),i.arc(t,h,e,0,2*Math.PI),i.fill()}}!function(){t.width=window.innerWidth,t.height=window.innerHeight,i.fillStyle="hsla(211, 0%, 40%, 0.7)",i.fillRect(0,0,t.width,t.height),o=40;for(let i=0;i<o;i++)h.push(new r(t.width/2,t.height/2,200,l));n()}()}();