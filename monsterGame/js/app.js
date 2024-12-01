import Personnage from  "./Personnage.js";





let perso = new Personnage("Nawack","Plante");
let a = new Personnage("Rubis","Feu");


//perso.typeEau();
//perso.recevoirDegats();

let b = document.getElementById("body");
let moi = document.getElementById("perso");

let adv = document.getElementById("adversaire");
let attaqueMoi = document.getElementById("attaqueMoi");
let attaqueAdv = document.getElementById("attaqueAdv");
let infosMoi = document.getElementById("infosMoi");
let infosAdv = document.getElementById("infosAdv");
//b.style.backgroundColor="grey";

let p = document.createElement('p');
moi.innerHTML = perso.pseudo;
adv.innerHTML = a.pseudo;
moi.style.borderColor=perso.color;
adv.style.borderColor=a.color;
moi.style.backgroundColor=perso.color;
adv.style.backgroundColor=a.color;

//b.prepend(p);
for(let i=0; i<perso.attaques.length; i++){
    //b.append(document.createTextNode(perso.attaques[i]));
    attaqueMoi.innerHTML += `<li><a href="#">${perso.attaques[i]}</a></li>`;

}
infosMoi.innerHTML += `PV restant(s) : ${perso.pv}`;


for(let j=0; j<a.attaques.length; j++){
    //b.append(document.createTextNode(perso.attaques[i]));
    attaqueAdv.innerHTML += `<li><a href="#">${a.attaques[j]}</a></li>`;

}
infosAdv.innerHTML += `PV restant(s) : ${a.pv}`;


let  ctx = document.getElementById("monCanevas").getContext("2d");
let  img = new Image();
let  ctxd = document.getElementById("monautreCanevas").getContext("2d");
let  imgd = new Image();

img.addEventListener("load", () => {
  ctx.drawImage(img, 0, 0);
});

img.src = perso.image;



imgd.addEventListener("load", () => {
  ctxd.drawImage(imgd, 0, 0);
});

imgd.src = a.image;