


var btn = document.getElementById("play");
btn.onclick  = jeu;


function jeu  () {









var compteur1 = 0;
var compteur2 = 0;



  while (compteur1 <3 && compteur2 <3) {
var joueur = prompt('Choissisez vous Pierre , Feuille ou Ciseaux ?')
var ordi = Math.random();
var resultjoueur = ('Votre choix : ');
var resultordi = ('choix de l\'ordinateur : ');


if (ordi < 0.34) {
  ordi = "pierre";
}



else if (ordi <= 0.67) {
  ordi = "feuille";
}


else {
  ordi = "ciseaux";
}

// console.log(resultjoueur + joueur);
//console.log(resultordi + ordi);

 var compare = function (joueur, ordi)
 {

   if  (joueur === ordi)
  {

    return "égalité !";
  }






   else if (joueur === "pierre")
     {
       if (ordi === "ciseaux")
         {
           compteur1++;
           return "pierre gagne"
         }
       else {
         compteur2++;
         return  " feuille gagne "
       }



     }
    else if  (joueur ==="feuille")
    {
      if  (ordi ==="pierre")
        {
          compteur1++;
          return " feuille gagne"
        }
      else
        {
          compteur2++;
          return  " ciseaux gagne"
        }
    }




   else if (joueur ==="ciseaux")
{
  if (ordi ==="pierre")
    {
      compteur2++;
      return "pierre gagne"
    }

else
  {
    compteur1++;
    return  "ciseaux gagne "
  }
}
 }

alert(resultjoueur + joueur);
alert(resultordi + ordi);
alert(compare (joueur , ordi));
console.log(compteur1 , compteur2);

}}
