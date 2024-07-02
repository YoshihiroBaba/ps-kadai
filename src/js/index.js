import '../scss/style.scss'
import AOS from 'aos';
import "aos/dist/aos.css";

//ヘッダー
const addBgfixed = document.getElementById('header');

function onScroll(){
const windowWidth = window.innerWidth;
const windowHeight = document.documentElement.scrollTop;

let breakpoint = 768;

if(windowWidth < 768){
    breakpoint = 667;
}

const Body = document.querySelector('body');
const wlogo = document.querySelector('.l-header__logo--bgwhite')
const blogo = document.querySelector('.l-header__logo')
const btxts = document.querySelectorAll('.l-header__navlist p')
const bhrs = document.querySelectorAll('.l-header__navhr')
const bugarLine = document.querySelector('.hamburger__line')


if(windowHeight > breakpoint) {
    addBgfixed.classList.add('--bg-fixed')
    Body.style.marginTop = '80px';
    wlogo.style.display = 'block';
    blogo.style.display = 'none';
    bugarLine.style.backgroundColor = '#182848';
    btxts.forEach( btxt => {
        btxt.style.color = '#182848';
    })
    bhrs.forEach(bhr => {
        bhr.classList.add('--hrSecondary');
    })
}
else{
    bugarLine.style.backgroundColor = '#ffffff';
    addBgfixed.classList.remove('--bg-fixed');
    Body.style.marginTop = '0';
    wlogo.style.display = 'none';
    blogo.style.display = 'block';
    btxts.forEach( btxt => {
        btxt.style.color = '#ffffff';
    })
    bhrs.forEach(bhr => {
        bhr.classList.remove('--hrSecondary');
    })
    }
}

window.addEventListener('scroll', function(){
    let debounceTimer;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(onScroll, 100);
});

const jsHamburger = document.getElementById('js-hamburger');
const body = document.body;
const jsGlobalMenu = document.getElementById('js-global-menu');

jsHamburger.addEventListener('click', function(){
    body
    if (this.getAttribute('aria-expanded') == 'false') {
        this.setAttribute('aria-expanded', true)
        jsGlobalMenu.style.visibility = 'visible'
        jsGlobalMenu.setAttribute('aria-hidden', false)
        document.querySelector('.hamburger').style.position = 'fixed';
    }else{
        this.setAttribute('aria-expanded', false)
        jsGlobalMenu.style.visibility = 'hidden'
        jsGlobalMenu.setAttribute('aria-hidden', 'true')
        document.querySelector('.hamburger').style.position = 'absolute';
    }
});

//ローダー
window.addEventListener('load', function(){
    document.body.style.overflow = 'hidden';
    setTimeout(function(){
        document.querySelector('.loadingWrap').style.opacity = '0';
        setTimeout(function(){
            document.querySelector('.loadingWrap').style.position = 'absolute';
            document.body.style.overflow = 'auto';
            document.querySelector('#contents').style.opacity = '1';
            document.querySelector('#contents').style.visibility = 'visible';
        },1000);
        // AOS.refresh();
    },2000);
});
document.addEventListener("DOMContentLoaded", () => {
    const windowWidth = window.innerWidth;
    const windowHeight = document.documentElement.scrollTop;

    let plusHeight = -700;

    if(windowWidth < 768){
        plusHeight = -500;
    }
    AOS.init({
        duration: 800, // アニメーションの持続時間
        once: true, // アニメーションを一度だけ実行
        offset: plusHeight,
        anchorPlacement: "top-bottom",
      });
    // AOS.refresh();
});
