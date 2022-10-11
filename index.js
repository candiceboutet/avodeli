const nbr = 2;
let pst = 0;
const container = document.getElementById("container");
const left = document.getElementById("left");
const right = document.getElementById("right");

let position = 0;
const testimContainer = document.getElementById("testim-container");
const testim1 = document.getElementById("testim-1");
const testim2 = document.getElementById("testim-2");
const testim3 = document.getElementById("testim-3");
const dot1 = document.getElementById("dot-1");
const dot2 = document.getElementById("dot-2");
const dot3 = document.getElementById("dot-3");

document.body.onload = function() {
    container.style.width = (100*nbr)+"vw";

    for(i=1; i<=nbr;i++){
        div = document.createElement("div");
        div.className = "photo";
        div.style.backgroundImage = "url('../images/im" + i + ".jpg')";
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
            showHide();} else {

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

