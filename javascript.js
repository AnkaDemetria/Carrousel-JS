document.body.onload=function(){
    nbr=5;
    p=0;
    container=document.getElementById("container");
    g=document.getElementById("g");
    d=document.getElementById("d");
    container.style.width=(800*nbr)+"px";
    for(i=1; i<=nbr; i++){
        div=document.createElement("div");
        div.className="photo";
        div.style.backgroundImage="url('images/im"+i+".jpg')";
        container.appendChild(div);
    }
    afficherMasquer();
}

g.onclick=function(){
    // CODE DE DEPART DU TUTO MAIS AMELIORATION POUR QUE LE CARROUSEL REVIENNE AU DEBUT QUAND IL A FINIT LES 5 IMAGES
    // if(p>-nbr+1)
    // container.style.transform="translate("+p*800+"px)";
    // container.style.transition="all 0.5s ease";
    // afficherMasquer();

    if(p==-nbr+1) {
        p=0;
    } else{
        p--;
    }

    container.style.transform="translate("+p*800+"px)";
    container.style.transition="all 0.5s ease";
}

d.onclick=function(){
    // if(p<0)
    // container.style.transform="translate("+p*800+"px)";
    // container.style.transition="all 0.5s ease";
    // afficherMasquer();

    if(p==0) {
        p=-nbr+1;
    } else{
        p++;
    }

    container.style.transform="translate("+p*800+"px)";
    container.style.transition="all 0.5s ease";
}

// POUR AFFICHER ET MASQUER LE BOUTON CHEVRON MAIS ON N4EN A PLUS BESOIN APRES LA FONCTION IF ELSE POUR FAIRE RETOURNER LE CARROUSEL AU DEBUT
// function afficherMasquer(){
//     if(p==-nbr+1)
//         g.style.visibility="hidden";
//     else
//         g.style.visibility="visible";
//     if(p==0)
//         d.style.visibility="hidden";
//     else
//         d.style.visibility="visible";
// }