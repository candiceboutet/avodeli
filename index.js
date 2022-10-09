document.body.onload = function() {
    nbr = 2;
    pst = 0;
    container = document.getElementById("container");
    left = document.getElementById("left");
    right = document.getElementById("right");

    container.style.width = (100*nbr)+"vw";

    for(i=1; i<=nbr;i++){
        div = document.createElement("div");
        div.className = "photo";
        div.style.backgroundImage = "url('../images/im" + i + ".jpg')";
        container.appendChild(div);
    }

    showHide();
}
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