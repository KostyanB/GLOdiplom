(()=>{"use strict";const e=function(e){var t=e.duration,n=e.draw,r=e.timing,o=performance.now();requestAnimationFrame((function e(a){var c=(a-o)/t;c>1&&(c=1);var l=r(c);n(l),c<1&&requestAnimationFrame(e)}))},t=function(t){var n=document.querySelector(".open-free"),r=document.querySelector(".open-callback"),o=document.querySelector(".fixed-gift"),a=document.getElementById("free_visit_form"),c=document.getElementById("callback_form"),l=document.querySelectorAll(".form-wrapper"),i=l[2].childNodes[1].childNodes[1],s=l[1].childNodes[1].childNodes[1],u=function(t,n){var r,o;t.style.display="block",n.style.transform="translateY(-100%)",r=n,o=.2*document.documentElement.clientHeight,e({duration:300,timing:function(e){return e},draw:function(e){var t=120*e-100;r.getBoundingClientRect().top<o&&(r.style.transform="translateY(".concat(t,"%)"))}})};t&&(u(t,l[3]),setTimeout((function(){return t.style.display="none"}),5e3)),document.addEventListener("click",(function(e){if(e.target===n?(e.preventDefault(),u(a,l[2])):(e.target===i||e.target.closest(".overlay"))&&(a.style.display="none"),e.target===r?u(c,l[1]):(e.target===s||e.target.closest(".overlay"))&&(c.style.display="none"),o){var d=o.childNodes[1],m=l[4].childNodes[1].childNodes[1],f=document.getElementById("gift"),p=document.querySelector(".gift-close");e.target===d?(d.style.display="none",u(f,l[4])):(e.target===m||p||e.target.closest(".overlay"))&&(f.style.display="none")}if(t){var v=t.querySelectorAll(".close-form"),y=document.querySelector(".thanks-close");(e.target===v||y||e.target.closest(".overlay"))&&(t.style.display="none")}}))};function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const r=function(){function e(t){var n=t.wrap,r=t.wrapName,o=t.placeName;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.wrap=document.querySelector(n),this.prevBtn=document.createElement("button"),this.nextBtn=document.createElement("button"),this.wrapName=r,this.placeName=o}var t,r;return t=e,(r=[{key:"setBtn",value:function(){this.prevBtn.className="".concat(this.wrapName,"-arrow prev ").concat(this.placeName,"-prev"),this.nextBtn.className="".concat(this.wrapName,"-arrow next ").concat(this.placeName,"-next"),this.prevBtn.innerHTML='<span><img src="./images/arrow-left.png"></span>',this.nextBtn.innerHTML='<span><img src="./images/arrow-right.png"></span>',this.wrap.append(this.prevBtn),this.wrap.append(this.nextBtn)}},{key:"init",value:function(){this.setBtn()}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const a=function(){function e(t){var n=t.wrap,r=t.wrapName,o=t.slidesName;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.wrap=document.querySelector(n),this.dotsWrap=document.createElement("ul"),this.dotsWrap.className="slider-dots",this.wrap.append(this.dotsWrap),this.wrapName=r,this.slidesName=o}var t,n;return t=e,(n=[{key:"addDot",value:function(){var e=this,t=document.querySelectorAll(this.slidesName),n=document.createElement("li");n.className="".concat(this.wrapName,"-dot"),t.forEach((function(t,r){t[r]=n.cloneNode(!0),e.dotsWrap.append(t[r])})),document.querySelectorAll(".".concat(this.wrapName,"-dot"))[0].classList.add("slick-active")}},{key:"init",value:function(){this.addDot()}}])&&o(t.prototype,n),e}();function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,a=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw a}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const s=function(){var e=document.getElementById("card_order");if("calc-card-order"===e.className){var t,n,r=e.querySelector("#price-total"),o=document.querySelector(".form-promo"),a=e.querySelectorAll('[name="club-name"]'),c=e.querySelectorAll('[name="card-type"]'),l={mozaika1:1999,mozaika6:9990,mozaika9:13990,mozaika12:19990,schelkovo1:2999,schelkovo6:14990,schelkovo9:21990,schelkovo12:24990},i=function(e,t){r&&(r.textContent=Math.round(t*e))},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;c.forEach((function(e){e.checked&&(n=e.value)})),a.forEach((function(e){e.checked&&(t=e.value)}));var r="".concat(t).concat(n);i(e,l[r])};s();var u=function(){var e=o.value;e&&/^тело2021$/gi.test(e)?s(.7):s(1)};u(),e.addEventListener("click",(function(e){"card-type"===e.target.name&&e.target.value&&u(),"club-name"===e.target.name&&u()})),o&&o.addEventListener("change",(function(){u()}))}},u=function(e,n,r){var o="Произошла ошибка отправки. Попробуйте еще раз позже",a=document.getElementById("thanks"),c=function(e,t){r.style.color=e,r.textContent=t,setTimeout((function(){r.textContent=""}),3e3)},l=new FormData(e),i={};l.forEach((function(e,t){i[t]=e})),function(e){return c("#19b5fe","Отправка..."),fetch("server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}(i).then((function(o){if(200!==o.status)throw new Error("Status network not 200");!function(){for(var o=e.children,c=0;c<o.length-1;c++)o[c].removeAttribute("hidden");r.textContent="",function(){n.forEach((function(e){"form-name"!==e.className&&"form-phone"!==e.className&&"form-promo"!==e.className||(e.value="",e.removeAttribute("style")),"form-promo"===e.className&&s()}));var t=e.querySelector('[type="checkbox"]');t&&(t.checked="false")}();var l=e.closest(".popup");e.closest(".popup")&&(l.style.display="none"),t(a)}()})).catch((function(n){!function(n){n&&console.error(n),"banner-form"===e.id?(document.getElementById("thanks-text").textContent=o,r.textContent="",t(a)):c("#fe193f",o)}(n)}))};var d,m,f,p,v,y,g,h,b,w;b=document.getElementById("club-selector"),w=document.getElementById("fallout-activator"),document.addEventListener("click",(function(t){var n;t.target===w?(b.style.display="block",b.style.transform="translateY(-100%)",n=w.getBoundingClientRect().bottom+15,e({duration:500,timing:function(e){return e},draw:function(e){var t=b.getBoundingClientRect().top,r=(n- -100)*e-100;t<n&&(b.style.transform="translateY(".concat(r,"%)"))}})):t.target!==w&&(b.style.display="none")})),t(),function(){document.querySelector(".main-slider");var e=document.querySelectorAll(".head-slide-content"),t=0,n=function(){e[t].style.display="none",++t>=e.length&&(t=0),e[t].style.display="flex"};!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1500;setInterval(n,e)}(2e3)}(),function(){for(var e=document.querySelector(".gallery-slider"),t=document.querySelectorAll(".photo-slide"),n=1;n<t.length;n++)t[n].style.display="none";var o;(o=document.getElementById("gallery-style"))||((o=document.createElement("style")).id="gallery-style"),o.textContent="\n            .gallery-slider {\n                position: relative;\n            }\n            .gallery-slider .slider-arrow {\n                background: transparent;\n                border: none;\n                cursor: default !important;\n            }\n            .gallery-slider .slider-arrow span {\n                cursor: pointer;\n            }\n            ",document.head.appendChild(o),new a({wrap:".gallery-slider",wrapName:"slider",slidesName:".photo-slide"}).init(),new r({wrap:".gallery-slider",wrapName:"slider",placeName:"gallery"}).init();var c,l=document.querySelector(".slider-arrow.prev"),i=document.querySelector(".slider-arrow.next"),s=function(e,t){e[t].style.display="none"},u=function(e,t){e[t].style.display="block"},d=function(e,t,n){e[t].classList.remove(n)},m=function(e,t,n){e[t].classList.add(n)},f=0,p=document.querySelectorAll(".slider-dot"),v=function(){s(t,f),d(p,f,"slick-active"),++f>=t.length&&(f=0),u(t,f),m(p,f,"slick-active")},y=function(){c=setInterval(v,2e3)};y(),e.addEventListener("click",(function(e){var n=e.target;s(t,f),d(p,f,"slick-active"),n.closest(".gallery-next")?f++:n.closest(".gallery-prev")?f--:n.matches(".slider-dot")&&p.forEach((function(e,t){e===n&&(f=t)})),f<0?f=t.length-1:f>=t.length&&(f=0),u(t,f),m(p,f,"slick-active")})),e.addEventListener("mouseover",(function(e){(e.target.parentNode.classList.contains("slider-arrow")||e.target.matches(".slider-dot"))&&clearInterval(c)})),e.addEventListener("mouseout",(function(e){e.target.matches(".slider-dot")&&y(),e.target===i.firstChild&&e.relatedTarget===i&&y(),e.target===l.firstChild&&e.relatedTarget===l&&y()}))}(),function(){for(var e=document.querySelector(".services-slider"),t=(document.querySelector(".services-wrapper"),document.querySelector(".services-slider").children),n=0;n<t.length;n++)t[n].classList.add("services-slide_content");var o,a,l=document.querySelectorAll(".services-slide_content"),i=6,s=Math.floor(100/i);(a=document.getElementById("services-style"))||((a=document.createElement("style")).id="services-style"),a.textContent="\n        .services-wrapper {\n            overflow: hidden !important;\n            position: relative;\n            padding-left: 0;\n            padding-right: 0;\n        }\n        .services-slider {\n            will-change: transform !important;\n            transition: transform 0.5s !important;\n            box-sizing: border-box;\n            padding-left: 0;\n            padding-right: 0;\n\n        }\n        .services-slide_content {\n            flex: 0 0 ".concat(s,"%;\n            margin-left: 0 !important;;\n            margin-right: 0 !important;;\n            padding-left: 6px;\n            padding-right: 6px;\n        }\n        .services-wrapper .slider-arrow {\n            border: none;\n            background: transparent;\n            top: 41%\n        }\n        .services-wrapper .slider-arrow.prev {\n            left: 0;\n        }\n        .services-wrapper .slider-arrow.next {\n            right: 0;\n        }\n        "),document.head.appendChild(a),new r({wrap:".services-wrapper",wrapName:"slider",placeName:"services"}).init(),document.querySelector(".services-prev"),document.querySelector(".services-next");var u,d,m,f,p,v=[{breakpoint:1400,slidesToShow:5},{breakpoint:1200,slidesToShow:4},{breakpoint:992,slidesToShow:3},{breakpoint:768,slidesToShow:2},{breakpoint:576,slidesToShow:1}],y=function(){s=100/i,o=l.length-i;var t=e.clientWidth/i;l.forEach((function(e){e.style.flex="0 0 ".concat(s,"%"),e.style.width="".concat(t,"px")})),e.style.transform="translateX(0%)"};y(),u=i,d=v.map((function(e){return e.breakpoint})),m=Math.max.apply(Math,function(e){if(Array.isArray(e))return c(e)}(p=d)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(p)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(p)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),(f=function(){var e=document.documentElement.clientWidth;if(e<m)for(var t=0;t<d.length;t++)e<d[t]&&(i=v[t].slidesToShow,y());else i=u,y()})(),window.addEventListener("resize",f);var g=0;document.addEventListener("click",(function(t){t.target.closest(".services-prev")?g>0?(--g,e.style.transform="translateX(-".concat(g*s,"%)")):0===g&&(g=o,e.style.transform="translateX(-".concat(g*s,"%)")):t.target.closest(".services-next")&&(g<o?(++g,e.style.transform="translateX(-".concat(g*s,"%)")):g===o&&(g=0,e.style.transform="translateX(0%)"))}))}(),document.body.addEventListener("input",(function(e){"Общая площадь*"!==e.target.placeholder&&"Количество помещений"!==e.target.placeholder&&"Срок исполнения (в днях)"!==e.target.placeholder||(e.target.value=e.target.value.replace(/[^0-9]/g,"")),"form-name"===e.target.className&&(e.target.value=e.target.value.replace(/[^а-яА-ЯёЁ-\s]/g,"")),"form-phone"===e.target.className&&function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__",r=document.querySelectorAll(e),o=function(e){var t=e.keyCode,r=n,o=r.replace(/\D/g,""),a=this.value.replace(/\D/g,""),c=0,l=r.replace(/[_\d]/g,(function(e){return c<a.length?a.charAt(c++)||o.charAt(c):e}));-1!=(c=l.indexOf("_"))&&(l=l.slice(0,c));var i=r.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(i=new RegExp("^"+i+"$")).test(this.value)||this.value.length<5||t>47&&t<58)&&(this.value=l),"blur"===e.type&&this.value.length<5&&(this.value="")},a=l(r);try{for(a.s();!(t=a.n()).done;){var c=t.value;c.addEventListener("input",o),c.addEventListener("focus",o),c.addEventListener("blur",o)}}catch(e){a.e(e)}finally{a.f()}}(".form-phone"),"form-promo"===e.target.className&&(e.target.value=e.target.value.replace(/[^а-яА-ЯёЁ0-9]/gm,""))})),h={correctName:!0,correctTel:!0},document.body.addEventListener("change",(function(e){var t=function(t){var n=e.target.closest("form");if(n){var r=n.querySelector(".btn");e.target.style.border=t?"2px solid #fe193f":"2px solid #19fe52",Object.values(h).every((function(e){return e}))?r.removeAttribute("disabled"):r.setAttribute("disabled","true")}};if("form-name"===e.target.className){e.target.value=e.target.value.replace(/\s+/g," ");var n=e.target.value.trim().split(" "),r="",o="";n.forEach((function(e){o+="".concat(e.charAt(0).toUpperCase()+e.substring(1)," "),r=o.trim()}))," "===r?(e.target.value="",h.correctName=!1,t(!0)):r.length<3?(e.target.value=r,h.correctName=!1,t(!0)):(e.target.value=r,h.correctName=!0,t(!1))}"form-phone"===e.target.className&&(e.target.value=e.target.value.replace(/^\+\d{1}\s/g,"+7 "),e.target.value.replace(/[\s\+\(\)-]*/g,"").length<11?(h.correctTel=!1,t(!0)):(h.correctTel=!0,t(!1)))})),function(){var e=document.createElement("div");e.style.cssText="font-size: 1.2em",document.querySelectorAll('[type="checkbox"]').forEach((function(e){return e.removeAttribute("required")}));var t=document.querySelector(".form-promo");t&&t.removeAttribute("required"),document.body.addEventListener("submit",(function(t){t.preventDefault();var n=t.target;n&&(n.appendChild(e),function(t){var n=t.querySelectorAll("input"),r=function(t){e.style.color="#fe193f",e.textContent=t,setTimeout((function(){return e.textContent=""}),3e3)};if(t.closest("footer")){var o=t.querySelectorAll('[type="radio"]');o[0].checked||o[1].checked?(o[0].checked||o[1].checked)&&u(t,n,e):r("Вы не выбрали клуб")}else{var a=t.querySelector('[type="checkbox"]');a.removeAttribute("required"),a.checked?u(t,n,e):r("Вы не отметили согласие")}}(n))}))}(),s(),y=document.querySelector(".top-menu"),g=y.getBoundingClientRect().top,window.addEventListener("scroll",(function(){var e=window.pageYOffset;y.style.position=e>=g?"fixed":"relative"})),p=document.querySelector(".popup-menu"),v=document.getElementById("menu-button"),document.addEventListener("click",(function(t){t.target===v&&(p.style.display="flex",p.style.transform="translateY(-100%)",e({duration:300,timing:function(e){return e},draw:function(e){var t=-100- -100*e;p.getBoundingClientRect().top<0&&(p.style.transform="translateY(".concat(t,"%)"))}})),t.target.closest(".close-menu-btn")&&(p.style.display="none")})),d=document.getElementById("totop").parentNode,m=document.querySelector("section"),f=document.querySelector(".fa-arrow-up"),d.setAttribute("hidden","true"),window.addEventListener("scroll",(function(){m.getBoundingClientRect().bottom<document.querySelector(".top-menu").offsetHeight?(d.removeAttribute("hidden"),document.addEventListener("click",(function(e){e.target===f&&(e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}))}))):d.setAttribute("hidden","true")})),function(){var e=document.querySelector(".popup-menu"),t=document.querySelector(".main-links"),n=function(e,t){var n=document.querySelector(t),r=e.target.href.split("#")[1];r&&n.querySelectorAll('a[href^="#"]').forEach((function(t){var n=t.getAttribute("href").substring(1);r===n&&(e.preventDefault(),function(e){var t=document.querySelector(".top-menu").offsetHeight,n=document.getElementById(e).getBoundingClientRect().top-t;window.scrollBy({top:n,behavior:"smooth"})}(n))}))};document.addEventListener("click",(function(r){if(r.target.closest(".popup-links")&&(e.style.display="none",n(r,".popup-links")),r.target.closest(".main-links")){if(r.target===t||r.target.matches(".scroll"))return;n(r,".main-links")}r.target.closest(".footer-left")&&r.target.matches("a[href]")&&n(r,".footer-left")}))}()})();