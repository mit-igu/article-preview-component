const buttons = document.querySelectorAll(".shareButton");
const shareBox = document.querySelector(".share");

for(i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", showHide);
}

window.addEventListener('resize', shareChange);

function shareChange(){
    if(window.innerWidth < 800){
        shareBox.style.opacity = "1";
        shareBox.style.top = "100%";
    }else{
        shareBox.style.opacity = "0";
        shareBox.style.top = "-90%";
    }
}



function showHide(){
    let position = window.getComputedStyle(shareBox);
    let top = position.getPropertyValue("top");
    let opacity = position.getPropertyValue("opacity");
    let j = 0;
    
    if(window.matchMedia('(min-width: 800px)').matches == false){
        if(top == "0px"){
            var itv = setInterval(zto, 1);
        } else{
            var itv = setInterval(otz, 1);
        }
    }else{
        if(opacity == 1){
            var itv = setInterval(fadeOut, 40);
        }else{
            var itv = setInterval(fadeIn, 40);
        }
    }

    function fadeOut(){
        if(opacity == 0){
            j=0;
            clearInterval(itv);
        }else{
            j++;
            shareBox.style.opacity = 1 - j/10;
            opacity = shareBox.style.opacity;
            console.log(opacity)
        }
    }

    function fadeIn(){
        if(opacity == 1){
            j=0;
            clearInterval(itv);
        }else{
            j++;
            shareBox.style.opacity = j/10;
            opacity = shareBox.style.opacity;
            console.log(opacity);
        }
    }
    
    function zto(){
        if(top == "100%"){
            j = 0;
            clearInterval(itv)
        }else{
            j += 2;
            shareBox.style.top = j + "%";
            top = shareBox.style.top;
            console.log(top);
        }
    }

    function otz(){
        if(top == "0%"){
            j = 0;
            clearInterval(itv);
        }else{
            j += 2;
            shareBox.style.top = (100-j) + "%";
            top = shareBox.style.top;
            console.log(top);
        }
    }
}
