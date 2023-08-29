
const body = document.querySelector('body');


// круг в первой секции
let xmod = 240;
let ymod = 300;

let xdefState = 32;
let ydefState = 16;
let carouselMod = 27;


function handleTabletChange(e) {
  let windowWidth = window.innerWidth;
  if(windowWidth >= 1200){
    defState = 32;
    ydefState = 16;
  }else  if(windowWidth < 1200){
    xdefState = 24;
    ydefState = 20;
  }
  if(windowWidth >= 576){
    carouselMod = 27
  } else {
    carouselMod = 37
  }


}

window.addEventListener('mousemove',handleTabletChange)


window.onload = function () {   
    var circle = document.querySelector('.circle');
    var background = document.querySelector('.header_poster');

    background.addEventListener("mousemove", function (event) {
        let xCor = event.pageX - xmod;
        let yCor = event.pageY - ymod;
        circle.style.transform = "translate(" + xCor + "px, " + yCor + "px)";
    


    })
    background.addEventListener('mouseout', function(i){
        circle.style.transform = `translate(${xdefState}vw,${ydefState}vh)`;
    })
};
// carousel

var karusel = document.querySelector('.news_section')
var current = 0

function left(){
    if(current < carouselMod-1){    
        current+=carouselMod 
        karusel.style.transform = "translateX("+`${current}vw`+')'
    }
}
function right(){
    if(current>-carouselMod ){
        current-= carouselMod 
        karusel.style.transform = "translateX("+`${current}vw`+')'
    }
}

// режим

var container = document.querySelector('.container');
var white = document.querySelectorAll('.w')
var p_poster =  document.querySelectorAll('.p_poster')
var h2 = document.querySelectorAll('h2')
var karbtn = document.querySelectorAll('.karbtn')
var bright = document.querySelectorAll('.b')
var switchh = document.querySelector('.switcher')

var isNight = 0;
function mode(){
    
    if(isNight == 0){    
        container.className = 'container black';
        isNight =1;
        switchh.style.background = 'white'
        switchh.style.color = '#111111'
        switchh.value = 'light'

        white.forEach(function(i){
            i.style.color ='#d0d0d0';
        });
       
        h2.forEach(function(i){
            i.style.color ='#292929';
        });
        karbtn.forEach(function(i){
            i.style.backgroundColor ='#111111';
        });
        bright.forEach(function(i){
            i.style.filter ='brightness(75%)';
        });




    }else if(isNight == 1){
        container.className = 'container';
        isNight =0;
        switchh.style.background = '#111111'
        switchh.style.color = 'white'
        switchh.value = 'dark'

        white.forEach(function(i){
            i.style.color ='black';
        })
        h2.forEach(function(i){
            i.style.color ='#F7F7F7';
        });
        karbtn.forEach(function(i){
            i.style.backgroundColor ='white';
        });
        bright.forEach(function(i){
            i.style.filter ='brightness(100%)';
        });

    }
}

// адаптивные переменные
