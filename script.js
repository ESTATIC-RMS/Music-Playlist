'use strict';

let loader=document.querySelector('.preloader');

window.addEventListener('load', () => {
    loader.style.display="none";
})

    let rapButton = document.querySelector('#rap-link');
    let slowButton = document.querySelector('#slow-link');
    let reverbButton = document.querySelector('#reverb-link');
        rapButton.addEventListener('click', (e) => {
            window.scrollTo({top: 0, behavior: 'smooth'});
        });
        slowButton.addEventListener('click', (e) => {
            window.scrollTo({top: 461.3333435058594, behavior: 'smooth'});
        });
        reverbButton.addEventListener('click', (e) => {
            window.scrollTo({top: 924.6666870117188, behavior: 'smooth'});

        });   
        
        
        let rapScroll=0;
        let slowScroll=0;
        let reverbScroll=0;
        function scrollMusic(category,key){
            if(category=='rap'){
                if(key=='left-click'){
                    rapScroll-=606;
                    document.querySelector('.rap-songs').scrollTo({left: rapScroll, behavior:'smooth'});
                }
                else if(key=='right-click'){
                    rapScroll+=606;
                    document.querySelector('.rap-songs').scrollTo({left: rapScroll, behavior:'smooth'});
                }
            }
            else if(category=='slow'){
                if(key=='left-click'){
                    slowScroll-=606;
                    document.querySelector('.slow-songs').scrollTo({left: slowScroll, behavior:'smooth'});
                }
                else if(key=='right-click'){
                    slowScroll+=606;
                    document.querySelector('.slow-songs').scrollTo({left: slowScroll, behavior:'smooth'});
                }
            }
            else if(category=='reverb'){
                if(key=='left-click'){
                    reverbScroll-=606;
                    document.querySelector('.reverb-songs').scrollTo({left: reverbScroll, behavior:'smooth'});
                }
                else if(key=='right-click'){
                    reverbScroll+=606;
                    document.querySelector('.reverb-songs').scrollTo({left: reverbScroll, behavior:'smooth'});
                }
            }
        }




