!function(){const e=function(){"use strict";var e;if(window.__ectimmers=window.__ectimmers||{},window.__ectimmers["ecom-wsumsbf55a"]=window.__ectimmers["ecom-wsumsbf55a"]||{},!this.$el)return;let t=document.querySelector('html[dir="rtl"]'),n=this.id,i=this.$el,s=i.querySelector("input[name='speed_animation']"),r=null,o=null,l=null!=(e=this.settings.disable_pause_hover)&&e;s&&(r=parseFloat(s.value),o=Math.round(10/r));let a=!!i.querySelector(".animation-reverse");window.addEventListener("load",function(e,s){const r=i.querySelector(e),c=r.children[0];setTimeout(()=>{if(c.clientWidth<=r.clientWidth){t&&(r.style.flexDirection="row-reverse"),l||(i.addEventListener("mouseover",(function(){c.style.animationPlayState="paused"})),i.addEventListener("mouseout",(function(){c.style.animationPlayState="running"}))),c.classList.add("ecom-flex_full");const e=r.innerHTML;r.insertAdjacentHTML("beforeend",e),o&&o>0?c.style.animation=a?`marqueeReverse ${o}s linear infinite`:`marquee ${o}s linear infinite`:c.classList.add("ecom-anim_marquee")}else if(c.clientWidth>r.clientWidth){t&&(r.style.flexDirection="row-reverse");const e=r.innerHTML;r.insertAdjacentHTML("beforeend",e);let o=a?c.clientWidth:0,u=!0,d=window.__ectimmers["ecom-wsumsbf55a"].xkcvt9929=setInterval((function(){!u||(document.querySelector("."+n)||clearInterval(d),c.style.marginLeft=`-${o}px`,a?(o<0&&(o=c.clientWidth),o-=s):(o>c.clientWidth&&(o=0),o+=s))}),0);l||(i.addEventListener("mouseover",(function(){u=!1})),i.addEventListener("mouseout",(function(){u=!0})))}},200)}(".ecom-marquee",r/2))};document.querySelectorAll(".ecom-wsumsbf55a").forEach((function(t){e.call({$el:t,id:"ecom-wsumsbf55a",settings:{disable_pause_hover:!0},isLive:!0})}))}();