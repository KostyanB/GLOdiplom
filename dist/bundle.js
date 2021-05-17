(()=>{"use strict";const e=function(e){var t=e.duration,r=e.draw,n=e.timing,a=performance.now();requestAnimationFrame((function e(o){var l=(o-a)/t;l>1&&(l=1);var i=n(l);r(i),l<1&&requestAnimationFrame(e)}))},t=function(t){var r=document.querySelector(".open-free"),n=document.querySelector(".open-callback"),a=document.querySelector(".fixed-gift"),o=document.getElementById("free_visit_form"),l=document.getElementById("callback_form"),i=document.querySelectorAll(".form-wrapper"),c=i[2].childNodes[1].childNodes[1],s=i[1].childNodes[1].childNodes[1],u=(document.getElementById("thanks"),.2*document.documentElement.clientHeight),d=function(t,r){var n;t.style.display="block",r.style.transform="translateY(-100%)",n=r,e({duration:300,timing:function(e){return e},draw:function(e){var t=120*e-100;n.getBoundingClientRect().top<u&&(n.style.transform="translateY(".concat(t,"%)"))}})};t&&(d(t,i[3]),setTimeout((function(){return t.style.display="none"}),5e3)),document.addEventListener("click",(function(e){if(e.target===r?(e.preventDefault(),d(o,i[2])):(e.target===c||e.target.closest(".overlay"))&&(o.style.display="none"),e.target===n?d(l,i[1]):(e.target===s||e.target.closest(".overlay"))&&(l.style.display="none"),a){var u=a.childNodes[1],f=i[4].childNodes[1].childNodes[1],m=document.getElementById("gift"),p=document.querySelector(".gift-close");e.target===u?(u.style.display="none",d(m,i[4])):(e.target===f||p||e.target.closest(".overlay"))&&(m.style.display="none")}if(t){var v=t.querySelectorAll(".close-form"),y=document.querySelector(".thanks-close");(e.target===v||y||e.target.closest(".overlay"))&&(t.style.display="none")}}))};function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const n=function(){function e(t){var r=t.wrap,n=t.wrapName,a=t.placeName;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.wrap=document.querySelector(r),this.prevBtn=document.createElement("button"),this.nextBtn=document.createElement("button"),this.wrapName=n,this.placeName=a}var t,n;return t=e,(n=[{key:"setBtn",value:function(){this.prevBtn.className="".concat(this.wrapName,"-arrow prev ").concat(this.placeName,"-prev"),this.nextBtn.className="".concat(this.wrapName,"-arrow next ").concat(this.placeName,"-next"),this.prevBtn.innerHTML='<span><img src="./images/arrow-left.png"></span>',this.nextBtn.innerHTML='<span><img src="./images/arrow-right.png"></span>',this.wrap.append(this.prevBtn),this.wrap.append(this.nextBtn)}},{key:"init",value:function(){this.setBtn()}}])&&r(t.prototype,n),e}();function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const o=function(){function e(t){var r=t.wrap,n=t.wrapName,a=t.slidesName;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.wrap=document.querySelector(r),this.dotsWrap=document.createElement("ul"),this.dotsWrap.className="slider-dots",this.wrap.append(this.dotsWrap),this.wrapName=n,this.slidesName=a}var t,r;return t=e,(r=[{key:"addDot",value:function(){var e=this,t=document.querySelectorAll(this.slidesName),r=document.createElement("li");r.innerHTML="<button></button>",r.className="".concat(this.wrapName,"-dot"),t.forEach((function(t,n){t[n]=r.cloneNode(!0),e.dotsWrap.append(t[n])})),document.querySelectorAll(".".concat(this.wrapName,"-dot"))[0].classList.add("slick-active")}},{key:"init",value:function(){this.addDot()}}])&&a(t.prototype,r),e}();function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,i=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){i=!0,o=e},f:function(){try{l||null==r.return||r.return()}finally{if(i)throw o}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const s=function(e,r,n){var a="Произошла ошибка отправки. Попробуйте еще раз позже",o=document.getElementById("thanks"),l=new FormData(e),i={};l.forEach((function(e,t){i[t]=e}));var c=function(){return n.textContent=""},s=function(e,t){n.style.color=e,n.textContent=t,setTimeout(c,3e3)};(function(e){return s("#19b5fe","Отправка..."),fetch("server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})})(i).then((function(n){if(200!==n.status)throw new Error("Status network not 200");!function(){for(var n=e.children,a=0;a<n.length-1;a++)n[a].removeAttribute("hidden");c(),function(){r.forEach((function(e){e.value="",e.removeAttribute("style")}));var t=e.querySelector('[type="checkbox"]');t&&(t.checked="false")}();var l=e.closest(".popup");e.closest(".popup")&&(l.style.display="none"),t(o)}()})).catch((function(r){!function(r){r&&console.error(r),"banner-form"===e.id?(o.children[1].children[1].children[1].textContent=a,c(),t(o)):s("#fe193f",a)}(r)}))};var u;(function(){var t=document.getElementById("club-selector"),r=document.getElementById("fallout-activator"),n=r.getBoundingClientRect().bottom+15;document.addEventListener("click",(function(e){e.target===r?(t.style.display="block",t.style.transform="translateY(-100%)",a()):e.target!==r&&(t.style.display="none")}));var a=function(){e({duration:500,timing:function(e){return e},draw:function(e){var r=t.getBoundingClientRect().top,a=(n- -100)*e-100;r<n&&(t.style.transform="translateY(".concat(a,"%)"))}})}})(),t(),function(){document.querySelector(".main-slider");var e=document.querySelectorAll(".head-slide-content"),t=0,r=function(){e[t].style.display="none",++t>=e.length&&(t=0),e[t].style.display="flex"};!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1500;setInterval(r,e)}(2e3)}(),function(){for(var e=document.querySelector(".gallery-slider"),t=document.querySelectorAll(".photo-slide"),r=1;r<t.length;r++)t[r].style.display="none";var a;(a=document.createElement("style")).textContent="\n            .gallery-slider {\n                position: relative;\n            }\n            .gallery-slider .slider-arrow {\n                background: transparent;\n                border: none;\n                cursor: default !important;\n            }\n            .gallery-slider .slider-arrow span {\n                cursor: pointer;\n            }\n            ",document.head.appendChild(a),new o({wrap:".gallery-slider",wrapName:"slider",slidesName:".photo-slide"}).init(),new n({wrap:".gallery-slider",wrapName:"slider",placeName:"gallery"}).init();var l,i=document.querySelector(".slider-arrow.prev"),c=document.querySelector(".slider-arrow.next"),s=function(e,t){e[t].style.display="none"},u=function(e,t){e[t].style.display="block"},d=function(e,t,r){e[t].classList.remove(r)},f=function(e,t,r){e[t].classList.add(r)},m=0,p=document.querySelectorAll(".slider-dot"),v=function(){s(t,m),d(p,m,"slick-active"),++m>=t.length&&(m=0),u(t,m),f(p,m,"slick-active")},y=function(){l=setInterval(v,2e3)};y(),e.addEventListener("click",(function(e){s(t,m),d(p,m,"slick-active"),e.target.closest(".gallery-next")?m++:e.target.closest(".gallery-prev")?m--:e.target.closest(".slider-dot")&&p.forEach((function(t,r){t===e.target.parentNode&&(m=r)})),m<0?m=t.length-1:m>=t.length&&(m=0),u(t,m),f(p,m,"slick-active")})),e.addEventListener("mouseover",(function(e){(e.target.parentNode.classList.contains("slider-arrow")||e.target.parentNode.classList.contains("slider-dot"))&&clearInterval(l)})),i.firstChild.addEventListener("mouseleave",(function(e){y()})),c.firstChild.addEventListener("mouseleave",(function(e){y()})),e.addEventListener("mouseout",(function(e){"slider-dot"===e.target.parentNode.className&&y()}))}(),function(){for(var e=document.querySelector(".services-slider"),t=(document.querySelector(".services-wrapper"),document.querySelector(".services-slider").children),r=0;r<t.length;r++)t[r].classList.add("services-slide_content");var a=document.querySelectorAll(".services-slide_content");new n({wrap:".services-wrapper",wrapName:"slider",placeName:"services"}).init();var o,i=document.querySelector(".services-prev"),c=document.querySelector(".services-next");(o=document.createElement("style")).textContent="\n        .services-wrapper .slider-arrow {\n            background: transparent;\n            border: none;\n            cursor: default !important;\n            position: relative;\n            left: 50%;\n        }\n        .services-wrapper .slider-arrow span {\n            cursor: pointer;\n        }\n            ",document.head.appendChild(o);var s,u,d,f,m,p,v=[{breakpoint:1400,slidesToShow:5},{breakpoint:1200,slidesToShow:4},{breakpoint:992,slidesToShow:3},{breakpoint:768,slidesToShow:2},{breakpoint:576,slidesToShow:1}],y=6,h=Math.floor(100/y),g=function(){h=Math.floor(100/y),s=a.length-y,function(){var e=document.createElement("style");e.textContent="\n\n        .services-wrapper {\n            overflow: hidden !important;\n            position: relative;\n\n        }\n        .services-slider {\n            display: flex;\n            will-change: transform !important;\n            transition: transform 0.5s !important;\n\n\n        }\n        .services-slide_content {\n            flex: 0 0 ".concat(h,"%;\n        }\n        "),document.head.appendChild(e)}()};g(),u=y,d=v.map((function(e){return e.breakpoint})),f=Math.max.apply(Math,function(e){if(Array.isArray(e))return l(e)}(p=d)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(p)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}(p)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),(m=function(){var e=document.documentElement.clientWidth;if(e<f)for(var t=0;t<d.length;t++)e<d[t]&&(y=v[t].slidesToShow,g());else y=u,g()})(),window.addEventListener("resize",m);var b=0;i.addEventListener("click",(function(){b>0?(--b,e.style.transform="translateX(-".concat(b*h,"%)")):0===b&&(b=s,e.style.transform="translateX(-".concat(b*h,"%)"))})),c.addEventListener("click",(function(){b<s?(++b,e.style.transform="translateX(-".concat(b*h,"%)")):b===s&&(b=0,e.style.transform="translateX(0%)")}))}(),document.body.addEventListener("input",(function(e){"Общая площадь*"!==e.target.placeholder&&"Количество помещений"!==e.target.placeholder&&"Срок исполнения (в днях)"!==e.target.placeholder||(e.target.value=e.target.value.replace(/[^0-9]/g,"")),"form-name"===e.target.className&&(e.target.value=e.target.value.replace(/[^а-яА-ЯёЁ-\s]/g,"")),"form-phone"===e.target.className&&function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__",n=document.querySelectorAll(e),a=function(e){var t=e.keyCode,n=r,a=n.replace(/\D/g,""),o=this.value.replace(/\D/g,""),l=0,i=n.replace(/[_\d]/g,(function(e){return l<o.length?o.charAt(l++)||a.charAt(l):e}));-1!=(l=i.indexOf("_"))&&(i=i.slice(0,l));var c=n.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(c=new RegExp("^"+c+"$")).test(this.value)||this.value.length<5||t>47&&t<58)&&(this.value=i),"blur"===e.type&&this.value.length<5&&(this.value="")},o=i(n);try{for(o.s();!(t=o.n()).done;){var l=t.value;l.addEventListener("input",a),l.addEventListener("focus",a),l.addEventListener("blur",a)}}catch(e){o.e(e)}finally{o.f()}}(".form-phone"),"form-promo"===e.target.className&&(e.target.value=e.target.value.replace(/[^а-яА-ЯёЁ0-9]/gm,""))})),u={correctName:!0,correctTel:!0},document.body.addEventListener("change",(function(e){var t=function(t){var r=e.target.closest("form");if(r){var n=r.querySelector(".btn");e.target.style.border=t?"2px solid #fe193f":"2px solid #19fe52",Object.values(u).every((function(e){return e}))?n.removeAttribute("disabled"):n.setAttribute("disabled","true")}};if("form-name"===e.target.className){e.target.value=e.target.value.replace(/\s+/g," ");var r=e.target.value.trim().split(" "),n="";r.forEach((function(e){n+="".concat(e.charAt(0).toUpperCase()+e.substring(1)," ")}))," "===n?(e.target.value="",u.correctName=!1,t(!0)):n.length<3?(e.target.value=n,u.correctName=!1,t(!0)):(e.target.value=n,u.correctName=!0,t(!1))}"form-phone"===e.target.className&&(e.target.value=e.target.value.replace(/^\+\d{1}\s/g,"+7 "),e.target.value.replace(/[\s\+\(\)-]*/g,"").length<11?(u.correctTel=!1,t(!0)):(u.correctTel=!0,t(!1))),"form-promo"===e.target.className&&(e.target.value&&!/^тело2021$/gi.test(e.target.value)?e.target.style.border="2px solid #fe193f":e.target.value&&/^тело2021$/gi.test(e.target.value)?e.target.style.border="2px solid #19fe52":e.target.style.border="1px solid #b7b7b7")})),function(){var e=document.createElement("div");e.style.cssText="font-size: 1.2em",document.querySelectorAll('[type="checkbox"]').forEach((function(e){return e.removeAttribute("required")}));var t=document.querySelector(".form-promo");t&&t.removeAttribute("required"),document.body.addEventListener("submit",(function(t){t.preventDefault();var r=t.target;r&&(r.appendChild(e),function(t){var r=t.querySelectorAll("input"),n=function(t){e.style.color="#fe193f",e.textContent=t,setTimeout((function(){return e.textContent=""}),3e3)};if(t.closest("footer")){var a=t.querySelectorAll('[type="radio"]');a[0].checked||a[1].checked?(a[0].checked||a[1].checked)&&s(t,r,e):n("Вы не выбрали клуб")}else{var o=t.querySelector('[type="checkbox"]');o.removeAttribute("required"),o.checked?s(t,r,e):n("Вы не отметили согласие")}}(r))}))}()})();