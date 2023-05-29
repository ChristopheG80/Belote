
// Les noms des joueurs
let choixName = document.getElementById('choixName');
let afficheName = document.getElementById('afficheNom');
let afficheScore = document.getElementById('afficheScore');
let afficheTableau = document.getElementById('afficheTableau');

let myName = document.getElementById('myName');
let partnerName = document.getElementById('partnerName');
let onMyrightName = document.getElementById('onMyrightName');
let onMyleftName = document.getElementById('onMyleftName');

// Choix de l'atout
let pixAtoutTrefle = document.getElementById('pixAtoutTrefle');
let pixAtoutPique = document.getElementById('pixAtoutPique');
let pixAtoutCoeur = document.getElementById('pixAtoutCoeur');
let pixAtoutCarreau = document.getElementById('pixAtoutCarreau');
// let pixAtoutSansAtout = document.getElementById('pixAtoutSansAtout');
// let pixAtoutToutAtout = document.getElementById('pixAtoutToutAtout');

// Preneur
let moiPreneur = document.getElementById('moiPreneur');
let partPreneur = document.getElementById('partPreneur');
let gauchePreneur = document.getElementById('gauchePreneur');
let droitePreneur = document.getElementById('droitePreneur');
var choixPreneur;

//Score
let scoreBarre = document.getElementById('barAttaque');
let scoreNous = document.getElementById('nousCompte');
let scoreEux = document.getElementById('euxCompte');

var NosScore = new Array([20][3]);
var SkoreNous = 0;
var SkoreEuux = 0;
var tour = 0;

let endScoretotalEux = document.getElementById('endScoretotalEux');
let endScoretotalNous = document.getElementById('endScoretotalNous');

const ScoreMax = 162;
const ScoreMax2 = 182;
const ScoreCapot = 252;
var scoreMaxCurr;
var scoreHalf;
var scoreLitige = 0;
var partie = 1000;

let part500 = document.getElementById('part500');
let part800 = document.getElementById('part800');
let part1000 = document.getElementById('part1000');
let part1500 = document.getElementById('part1500');

// Déclaration pour le capot
let capotNousName = document.getElementById('capotNousName');
let capotEuxName = document.getElementById('capotEuxName');
let cancelCapot = document.getElementById('cancelCapotName');


// Gestion du bouton total final
let scoreManche = document.getElementById('scoreValidation');
let scoreAvant = document.getElementById('scoreAnnulation');
let scoreMancheNous = document.getElementById('endScoretotalNous');
let scoreMancheEux = document.getElementById('endScoretotalEux');

let AfficheTableauMyName = document.getElementById('AfficheTableauMyName');
let AfficheTableauOnMyLeft = document.getElementById('AfficheTableauOnMyLeft');
let AfficheTableauPartner = document.getElementById('AfficheTableauPartner');
let AfficheTableauOnMyRight = document.getElementById('AfficheTableauOnMyRight');







part500.addEventListener("click", function (event) {
   event.preventDefault();
   partNum.value = 500;
   partie = 500;
   console.log(partie);
});
part800.addEventListener("click", function (event) {
   event.preventDefault();
   partNum.value = 800;
   partie = 800;
   console.log(partie);
});
part1000.addEventListener("click", function (event) {
   event.preventDefault();
   partNum.value = 1000;
   partie = 1000;
   console.log(partie);
});
part1500.addEventListener("click", function (event) {
   event.preventDefault();
   partNum.value = 1500;
   partie = 1500;
   console.log(partie);

});



scoreManche.addEventListener("click", function (event) {
   event.preventDefault();
   // console.log(scoreLitige);
   // console.log(choixPreneur);
   scoreHalf = ScoreMax / 2;
   if (belote) {
      scoreMaxCurr = ScoreMax;
      if (beloteNous || beloteEux) {
         scoreMaxCurr = ScoreMax2;
      }
      scoreHalf = scoreMaxCurr / 2;
   }
   if (choixPreneur == 1 || choixPreneur == 2) {

      if (scoreBarre.value > scoreHalf) {
         console.log('P1 ou P2 et scoreBarre.value > scoreHalf');
         console.log(scoreLitige);
         scoreMancheNous.value = Number(scoreBarre.value);
         scoreMancheEux.value = scoreMaxCurr - Number(scoreBarre.value);
         AjoutScore_Tableau(Number(scoreBarre.value), scoreMaxCurr - Number(scoreBarre.value));

      }
      else if (scoreBarre.value < scoreHalf) {
         console.log('P1 ou P2 et scoreBarre.value < scoreHalf');
         console.log(scoreLitige);
         scoreMancheNous.value = 0;
         scoreMancheEux.value = Number(scoreMaxCurr) - Number(scoreBarre.value);
         AjoutScore_Tableau(0, scoreMaxCurr - Number(scoreBarre.value));

      }
      else {
         console.log(scoreBarre.value);
         scoreMancheNous.value = 0;
         scoreMancheEux.value = scoreHalf;
         scoreLitige = scoreLitige + scoreHalf;
         scoreLitige = 0;
      }
   }
   else {
      if (scoreBarre.value < scoreHalf) {
         console.log('P3 ou P4 et scoreBarre.value < scoreHalf');
         scoreMancheNous.value = Number(scoreBarre.value);
         scoreMancheEux.value = Number(scoreMaxCurr) - Number(scoreBarre.value);
         AjoutScore_Tableau(Number(scoreBarre.value), Number(scoreMaxCurr) - Number(scoreBarre.value));
      }
      else if (scoreBarre.value > scoreHalf) {
         console.log('P3 ou P4 et scoreBarre.value > scoreHalf');
         scoreMancheNous.value = ScoreMax;
         scoreMancheEux.value = 0;
         AjoutScore_Tableau(ScoreMax, 0);
      }
      else {
         scoreMancheNous.value = scoreHalf;
         scoreMancheEux.value = 0;
         scoreLitige = scoreLitige + scoreHalf;
         scoreLitige = 0;
      }
   }
   // Traitement pour le capot
   if (capotNous) {
      scoreMancheNous.value = ScoreCapot + scoreLitige + Number(beloteNous ? 20 : 0);
      scoreMancheEux.value = Number(beloteEux ? 20 : 0);
      RetraitScore_Tableau();
      AjoutScore_Tableau(ScoreCapot + scoreLitige + Number(beloteNous ? 20 : 0), 0);
   }
   if (capotEux) {
      scoreMancheNous.value = Number(beloteNous ? 20 : 0);
      scoreMancheEux.value = ScoreCapot + scoreLitige + Number(beloteEux ? 20 : 0);
      RetraitScore_Tableau();
      AjoutScore_Tableau(Number(beloteNous ? 20 : 0), ScoreCapot + scoreLitige + Number(beloteEux ? 20 : 0));
   }
   // Traitement pour le litige
   if (scoreLitige > 0) {
      if (choixPreneur == 1 || choixPreneur == 2) {
         scoreMancheNous.value = scoreMancheNous.value + scoreLitige + Number(beloteNous ? 20 : 0);
         AjoutScore_Tableau(scoreMancheNous.value + scoreLitige + Number(beloteNous ? 20 : 0));
      }
      else {
         AjoutScore_Tableau(0, scoreMancheEux.value + scoreLitige + Number(beloteEux ? 20 : 0));
      }
   }
   afficheTableau.hidden = false;
   Affiche_TableauScore(tour);
});


// Gestion des noms

// gestion belote
var belote = false;
var beloteEux;
var beloteNous;
let nousBelote = document.getElementById('nousBelote');
let euxBelote = document.getElementById('euxBelote');
let cancelBelote = document.getElementById('cancelBelote');

nousBelote.addEventListener("click", function (event) {
   event.preventDefault();
   belote = true;
   beloteNous = true;
   beloteEux = false;
   scoreBarre.max = ScoreMax2;
   scoreMancheNous.value = Number(scoreBarre.value) + 20;
   scoreBarre.value += 20;
   scoreMancheEux.value = scoreMaxCurr - Number(scoreBarre.value);
   nousBelote.className = "btn btn-warning text-success rounded w-100";
   euxBelote.className = "btn btn-secondary w-100";
   cancelBelote.className = "text-success bg-warning rounded";
});

euxBelote.addEventListener("click", function (event) {
   event.preventDefault();
   belote = true;
   beloteEux = true;
   beloteNous = false;

   scoreBarre.max = ScoreMax2;
   scoreMancheNous.value = Number(scoreBarre.value);
   scoreBarre.value -= 20;
   scoreMancheEux.value = scoreMaxCurr - Number(scoreBarre.value) + 1000;

   nousBelote.className = "btn btn-secondary w-100";
   euxBelote.className = "btn btn-warning text-success rounded w-100";
   cancelBelote.className = "text-success bg-warning rounded";
});

cancelBelote.addEventListener("click", function (event) {
   event.preventDefault();
   if (beloteEux) {
      scoreBarre.max = ScoreMax;
      scoreBarre.value += 20;

   }
   belote = false;
   beloteEux = false;
   beloteNous = false;
   nousBelote.className = "btn btn-secondary w-100";
   euxBelote.className = "btn btn-secondary w-100";
   cancelBelote.className = "";
});
// class="text-success bg-warning rounded"


// gestion capot
var capot = false;
var capotNous;
var capotEux;

capotNousName.addEventListener("click", function (event) {
   event.preventDefault();
   capot = true;
   capotEux = false;
   capotNous = true;
   capotNousName.className = "w-100 bg-warning rounded";
   capotEuxName.className = "w-100 rounded";
   cancelCapot.className = "w-100 bg-warning rounded";
});

capotEuxName.addEventListener("click", function (event) {
   event.preventDefault();
   capot = true;
   capotEux = true;
   capotNous = false;
   capotNousName.className = "w-100 rounded";
   capotEuxName.className = "w-100 bg-warning rounded";
   cancelCapot.className = "w-100 bg-warning rounded";
});

cancelCapot.addEventListener("click", function (event) {
   event.preventDefault();
   capot = false;
   capotEux = false;
   capotNous = false;
   capotNousName.className = "btn btn-secondary w-100";
   capotEuxName.className = "btn btn-secondary w-100";
   cancelCapot.className = "";
});


// Gestion de la barre de score
scoreBarre.addEventListener("change", function (event) {
   event.preventDefault();
   if (belote) {
      scoreMaxCurr = ScoreMax2;
   } else {
      scoreMaxCurr = ScoreMax;
   }
   scoreBarre.max = scoreMaxCurr;
   scoreNous.value = scoreBarre.value;
   scoreEux.value = scoreMaxCurr - scoreBarre.value;
});

scoreNous.addEventListener("click", function (event) {
   event.preventDefault();
   if (belote) {
      scoreMaxCurr = ScoreMax2;
   } else {
      scoreMaxCurr = ScoreMax;
   }

   if (beloteNous) {
      scoreBarre.max = scoreMaxCurr;
      scoreNous.value = Number(scoreNous.value) + 20;
      scoreBarre.value = scoreNous.value;
      scoreEux.value = scoreMaxCurr - scoreBarre.value;
   }
   if (beloteEux) {
      scoreBarre.max = scoreMaxCurr;
      scoreBarre.value = scoreNous.value;
      scoreEux.value = scoreMaxCurr - scoreBarre.value;
   }
});

scoreEux.addEventListener("click", function (event) {
   event.preventDefault();
   if (belote) {
      scoreMaxCurr = ScoreMax2;
   } else {
      scoreMaxCurr = ScoreMax;
   }
   scoreBarre.max = scoreMaxCurr;
   scoreBarre.value = scoreNous.value;
   scoreEux.value = scoreMaxCurr - scoreBarre.value;
});

choixName.addEventListener("click", function (event) {
   event.preventDefault();

   moiPreneur.value = myName.value;
   partPreneur.value = partnerName.value;
   gauchePreneur.value = onMyleftName.value;
   droitePreneur.value = onMyrightName.value;

   AfficheTableauMyName.innerText = myName.value;
   AfficheTableauOnMyLeft.innerText = onMyleftName.value;
   AfficheTableauPartner.innerText = partnerName.value;
   AfficheTableauOnMyRight.innerText = onMyrightName.value;

   capotNousName.value = myName.value + " " + partnerName.value;
   capotEuxName.value = onMyleftName.value + " " + onMyrightName.value;

   nousBelote.value = myName.value + " " + partnerName.value;
   euxBelote.value = onMyleftName.value + " " + onMyrightName.value;

   afficheName.hidden = true;
   afficheScore.hidden = false;

});


// Affichage du bg en vert pour la sélection de l'atout
pixAtoutCarreau.addEventListener("click", function (event) {
   event.preventDefault();
   modifClass(1);
});

pixAtoutCoeur.addEventListener("click", function (event) {
   event.preventDefault();
   modifClass(2);
});

pixAtoutPique.addEventListener("click", function (event) {
   event.preventDefault();
   modifClass(3);
});

pixAtoutTrefle.addEventListener("click", function (event) {
   event.preventDefault();
   modifClass(4);
});

// pixAtoutSansAtout.addEventListener("click", function (event) {
//    event.preventDefault();
//    modifClass(5);
// });

// pixAtoutToutAtout.addEventListener("click", function (event) {
//    event.preventDefault();
//    modifClass(6);
// });

moiPreneur.addEventListener("click", function (event) {
   event.preventDefault();
   modifPreneur(1);
});

partPreneur.addEventListener("click", function (event) {
   event.preventDefault();
   modifPreneur(2);
});

gauchePreneur.addEventListener("click", function (event) {
   event.preventDefault();
   modifPreneur(3);
});

droitePreneur.addEventListener("click", function (event) {
   event.preventDefault();
   modifPreneur(4);
});


function modifPreneur(zzz) {
   moiPreneur.className = "btn btn-warning w-100";
   partPreneur.className = "btn btn-warning w-100";
   gauchePreneur.className = "btn btn-warning w-100";
   droitePreneur.className = "btn btn-warning w-100";
   switch (zzz) {
      case 1:
         moiPreneur.className = "btn btn-success w-100";
         break;
      case 2:
         partPreneur.className = "btn btn-success w-100";
         break;
      case 3:
         gauchePreneur.className = "btn btn-success w-100";
         break;
      case 4:
         droitePreneur.className = "btn btn-success w-100";
         break;
   }
   choixPreneur = zzz;
}



function modifClass(zzz) {
   pixAtoutCarreau.className = "mx-3 rounded";
   pixAtoutCoeur.className = "mx-3 rounded";
   pixAtoutPique.className = "mx-3 rounded";
   pixAtoutTrefle.className = "mx-3 rounded";
   // pixAtoutSansAtout.className = "mx-3 rounded";
   // pixAtoutToutAtout.className = "mx-3 rounded";
   switch (zzz) {
      case 1:
         pixAtoutCarreau.className = "mx-3 rounded bg-success";
         break;
      case 2:
         pixAtoutCoeur.className = "mx-3 rounded bg-success";
         break;
      case 3:
         pixAtoutPique.className = "mx-3 rounded bg-success";
         break;
      case 4:
         pixAtoutTrefle.className = "mx-3 rounded bg-success";
         break;
      // case 5:
      //    pixAtoutSansAtout.className = "mx-3 rounded bg-success";
      //    break;
      // case 6:
      //    pixAtoutToutAtout.className = "mx-3 rounded bg-success";
      //    break;
   }
}


// AjoutScore_Tableau(10, 20, 1);
// AjoutScore_Tableau(30, 40, 2);
// AjoutScore_Tableau(50, 60, 3);
// AjoutScore_Tableau(70, 80, 4);
// AjoutScore_Tableau(90, 1000000000, 5);


// NosScore.push([10000, 20]);
// NosScore.push([10, 20]);
// NosScore.push([10, 20]);
// NosScore.push([10, 20]);
//NosScore.push([1000, 20]);



Affiche_TableauScore(tour);

function AjoutScore_Tableau(Nous, Eux) {
   NosScore.push([Nous, Eux]);
   tour++;
}
scoreAvant.addEventListener("click", function (event) {
   event.preventDefault();
   RetraitScore_Tableau();
});

function RetraitScore_Tableau() {
   NosScore.pop();
   tour--;
   Affiche_TableauScore(tour)
}

function Affiche_TableauScore(tour) {
   if (tour > 0) {
      SkoreNous = 0;
      SkoreEuux = 0;
      document.querySelector('#tableauDesScoresNous').innerHTML = ``;
      document.querySelector('#tableauDesScoresTour').innerHTML = ``;
      document.querySelector('#tableauDesScoresEux').innerHTML = ``;
      for ($i = tour; $i > 0; $i--) {
         console.log(NosScore[$i][0], $i, NosScore[$i][1]);
         SkoreNous += Number(NosScore[$i][0]);
         SkoreEuux += Number(NosScore[$i][1]);
         pourNous = NosScore[$i][0] > NosScore[$i][1] ? true : false;
         pourNousTotal = SkoreNous > SkoreEuux ? true : false;
         console.log(pourNous);
         console.log(pourNousTotal);
         //if (pourNous) { document.querySelector('#tableauDesScoresNous').classList = "text-center bg-warning"; }
         document.querySelector('#tableauDesScoresNous').innerHTML += `
         <div>
           `+ Number(NosScore[$i][0]) + `
           </div>
           `;

         document.querySelector('#tableauDesScoresTour').innerHTML += `
         <div>
         `+ $i + `
           </div>
           `;
         //if (!pourNous) { document.querySelector('#tableauDesScoresEux').classList = "text-center bg-warning"; }
         document.querySelector('#tableauDesScoresEux').innerHTML += `
           <div>
           `+ Number(NosScore[$i][1]) + `
             </div>
             `;

      }

      SkoreControl(SkoreNous, SkoreEuux);
      document.querySelector('#AfficheScoreNous').innerHTML = SkoreNous;
      document.querySelector('#AfficheScoreEux').innerHTML = SkoreEuux;
      console.log(SkoreNous, SkoreEuux);
   } else {
      document.querySelector('#tableauDesScoresNous').innerHTML = ``;
      document.querySelector('#tableauDesScoresTour').innerHTML = ``;
      document.querySelector('#tableauDesScoresEux').innerHTML = ``;
      document.querySelector('#AfficheScoreNous').innerHTML = 0;
      document.querySelector('#AfficheScoreEux').innerHTML = 0;
   }

}

function SkoreControl(aaa, zzz) {
   console.log(partie);
   if ((aaa > partie) && (zzz < partie)) {
      console.log('Nous vainqueur');
   }
   if ((aaa < partie) && (zzz > partie)) {
      console.log('Eux vainqueur');
   }
   if ((aaa > partie) && (zzz > partie)) {
      if (aaa > zzz) {
         console.log('Nous vainqueur');
      } else {
         console.log('Eux vainqueur');
      }
   }
}
