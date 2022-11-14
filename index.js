

const nbr = 2;
let pst = 0;
const container = document.getElementById("container");
let position = 0;
const testimContainer = document.getElementById("testim-container");

setTimeout(() => {
   
startBtn.style.left = "40%";  
startBtn.style.opacity= "1";
}, 500);


document.body.onload = function() {
 
    container.style.width = (100*nbr)+"vw";

    for(i=1; i<=nbr;i++){
        div = document.createElement("div");
        div.className = "photo";
        div.style.backgroundImage = "url(../images/im" + i + ".jpg)";
        container.appendChild(div);
    }

    showHide();
}
setInterval(
    function() {
        if (pst>-nbr+1){
            pst--;
            container.style.transform = "translate(" + pst*100 + "vw)";
            container.style.transition = "all 0.5s ease"
            showHide();
        } else {
             (pst<0)
             pst++;
    container.style.transform = "translate(" + pst*100 + "vw)";
    container.style.transition = "all 0.5s ease";
    showHide();}
}, 4000);

right.onclick = function() {
    if (pst>-nbr+1)
        pst--;
        container.style.transform = "translate(" + pst*100 + "vw)";
        container.style.transition = "all 0.5s ease"
        showHide();
}
left.onclick = function() {
    if (pst<0)
    pst++;
    container.style.transform = "translate(" + pst*100 + "vw)";
    container.style.transition = "all 0.5s ease";
    showHide();
}

function showHide() {
    if(pst==-nbr+1)
        right.style.visibility = "hidden";
    else
        right.style.visibility="visible";
    if(pst==0)
        left.style.visibility = "hidden";
    else
        left.style.visibility="visible";
}
// ------------------------- Menu 
services.addEventListener('click' , () => {
    if (bulle.style.opacity  === "1") {
        bulle.style.opacity = "0";
      } else {
        bulle.style.opacity = "1";
      }
    
})
// -------------- Photos
window.addEventListener("scroll", () => {
    let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;

    if (scrollValue > 0.41){
        plant1.style.opacity = 1;
        plant1.style.transform = "none";
        plant2.style.opacity = 1;
        plant2.style.transform = "none";
        plant3.style.opacity = 1;
        plant3.style.transform = "none"; 
    } else if (scrollValue > 0.25) {
       cafPic.style.opacity = 1;
       cafPic.style.transform = "none";
 } });

//  --------------------Draggable Slider
const sliderMenu = {

    sliderContainer : document.getElementById("menu-section"),
    innerSlider : document.querySelector(".wrapper"),
    pressed : false,
    startX : null,
    x : null,
    
    
    init : function() {
    
    sliderMenu.sliderContainer.addEventListener("mousedown", (e) => {
        pressed = true;
        startX = e.offsetX - sliderMenu.innerSlider.offsetLeft;
        sliderMenu.sliderContainer.style.cursor = "grabbing";
        sliderMenu.sliderContainer.addEventListener("mousemove", (e) => {
            if (!pressed) return;
            e.preventDefault();
        
            x = e.offsetX;
        
            sliderMenu.innerSlider.style.left = `${x - startX}px`;
        });
    });
    
    sliderMenu.sliderContainer.addEventListener("mouseenter", () => {
        sliderMenu.sliderContainer.style.cursor = "grab";
    });
    
    sliderMenu.sliderContainer.addEventListener("mouseleave", () => {
        sliderMenu.sliderContainer.style.cursor = "default";
    });
    
    sliderMenu.sliderContainer.addEventListener("mouseup", () => {
        sliderMenu.sliderContainer.style.cursor = "grab";
        pressed = false;
    });
    
    window.addEventListener("mouseup", () => {
        pressed = false;
    });
    }
    }
    
    sliderMenu.init();
// ---------------- Carrousel 2

function slide () {
    testimContainer.style.transform = "translate(" + position*40 + "vw)";
}
function orange1 () {
    dot1.style.backgroundColor= "orange";
    dot2.style.backgroundColor= "gray";  
    dot3.style.backgroundColor= "gray";

    testim1.style.opacity="100%"
    testim2.style.opacity= "0%";
    testim3.style.opacity= "0%";
}
function orange2 () {
    dot1.style.backgroundColor= "gray";
    dot2.style.backgroundColor= "orange";  
    dot3.style.backgroundColor= "gray";

    testim1.style.opacity= "0%";
    testim2.style.opacity="100%"
    testim3.style.opacity= "0%";
}
function orange3 () {
    dot1.style.backgroundColor= "gray";
    dot2.style.backgroundColor= "gray";  
    dot3.style.backgroundColor= "orange";

    testim1.style.opacity= "0%";
    testim2.style.opacity= "0%";
    testim3.style.opacity="100%"
}

setInterval(
function() {
    orange1();
    if (position==0){
        position--;
        slide();
        orange2();
    } else if (position==-1) {
        position--;
         slide();
         orange3();

        } else if (position == -2){
           position++;
            position++;
            slide();
            orange1();
        }
}, 4000);

dot1.onclick = function() {
orange1();
if(position==-1){
        position++;
        slide();
        
} else if (position == -2){
    position++;
    position++;
    slide();
}   }

dot2.onclick = function() {
orange2();
if(position==0)  {

position--;
slide();
} else if (pst==-2){
position++;
slide();
}
}

dot3.onclick = function() {
orange3();
if (position==-1){
position--;
slide();
} else if (position==0){
    position--;
    position--;
    slide();
}
}

