export default class Personnage {
    constructor(p,t) {
      this.pseudo = p;
      this.pv = 10;
      this.degats=1;
      this.type=t;
      this.attaques = new Array();
      this.color=null;
      this.image=null;
      switch(t){
         case 'Feu' :
            this.attaques = ["Giclée de Magma","Soleil","Tisane"];
            this.color = "DarkOrange";
            this.image = "../images/monstre Orange.png";
            break;
         case 'Eau' :
            this.attaques = ["Crachat", "Tsunami", "Baignade"];
            this.color = "SkyBlue";
            this.image = "../images/monstre Bleu.png";

            break;
         case 'Plante' :
            this.attaques = ["Cou d'branche","Tronc","Photosynthese"];
            this.color = "MediumSeaGreen";
            this.image = "../images/monstre Vert.png";

            break;
         default :
            this.attaques = ["Flop"];
            this.color = "Violet";
            this.image = "../images/monstre Rose.png";
      }
    }

     getRandomInt(max) {
      return Math.floor(Math.random(10) * max);
    }
     recevoirDegats(){
        this.pv-=this.getRandomInt(10);
        return this.pv;
     }

     recevoirDegatsCritique(){
      this.pv-=this.getRandomInt(10)+5;
   }

     setTypePlante(){
        this.type ="Plante";
        //this.attaques = ["Cou d'branche","Tronc","Photosynthese"];
     }

     setTypeFeu(){
        this.type ="Feu";
        //this.attaques = ["Giclée de Magma","Soleil","Tisane"];
     }
     
     setTypeEau(){
        this.type ="Eau";
        //this.attaques = ["Crachat", "Tsunami", "Baignade"];
     }


     
}