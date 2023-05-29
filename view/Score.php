<?php

?>
<div class="col-12 justify-content-center align-items-center" id="afficheScore" hidden>
   <div class="row">
      <div class="col-4 text-center">
         <p><input type="submit" value="" class="btn btn-warning w-100" id="moiPreneur" name="moiPreneur" /></p>
         <p><input type="submit" value="" class="btn btn-warning w-100" id="partPreneur" name="partPreneur" /></p>
      </div>
      <div class="col-4 text-center">
         <h1>
            <p class="align-middle">Preneur</p>
         </h1>
      </div>
      <div class="col-4 text-center">
         <p><input type="submit" value="" class="btn btn-warning w-100" id="gauchePreneur" name="gauchePreneur" /></p>
         <p><input type="submit" value="" class="btn btn-warning w-100" id="droitePreneur" name="droitePreneur" /></p>
      </div>
      <div class="col-12 text-center my-1">
         <img src="assets/img/Trefle.png" alt="Trèfle" class="mx-3 rounded" id="pixAtoutTrefle">
         <img src="assets/img/Coeur.png" alt="Coeur" class="mx-3 rounded" id="pixAtoutCoeur">
         <img src="assets/img/Pique.png" alt="Pique" class="mx-3 rounded" id="pixAtoutPique">
         <img src="assets/img/Carreau.png" alt="Carreau" class="mx-3 rounded" id="pixAtoutCarreau">
         <!-- <img src="assets/img/ToutAtout.png" alt="ToutAtout" class="mx-3 rounded" id="pixAtoutToutAtout">
         <img src="assets/img/SansAtout.png" alt="SansAtout" class="mx-3 rounded" id="pixAtoutSansAtout"> -->
      </div>
      <div class="col-4 text-center my-1">
         <input type="text" class="text-center w-100" value="100" id="nousCompte" name="nousCompte">
      </div>
      <div class="col-4 text-center">
         <p>
         <h1>Score</h1>
         </p>
         <p><input type="range" id="barAttaque" name="barAttaque" value="100" min="0" max="162" class="w-100" /></p>
      </div>
      <div class="col-4 text-center">
         <input type="text" class="text-center w-100" value="62" id="euxCompte" name="euxCompte">
      </div>





      <div class="col-4 text-center">
         <p><input type="submit" value="" class="btn btn-secondary w-100" id="capotNousName" name="capotNousName" /></p>
      </div>
      <div class="col-4 text-center">
         <h1 id="cancelCapotName">
            Capot
         </h1>
      </div>
      <div class="col-4 text-center">
         <p><input type="submit" value="" class="btn btn-secondary w-100" id="capotEuxName" name="capotEuxName" /></p>
      </div>




      <div class="col-4 text-center">
         <p><input type="submit" value="" class="btn btn-secondary w-100" id="nousBelote" name="nousBelote" /></p>
      </div>
      <div class="col-4 text-center">
         <h1 id="cancelBelote">
            Belote
         </h1>
      </div>
      <div class="col-4 text-center">
         <p><input type="submit" value="" class="btn btn-secondary w-100" id="euxBelote" name="euxBelote" /></p>
      </div>

      <div class="col-4 text-center">
         <p>
            <input type="submit" value="" class="btn btn-secondary numTotal w-100" id="endScoretotalNous" name="endScoretotalNous" />
         </p>
      </div>
      <div class="col-4 text-center">
         <h1>TOTAL</h1>
      </div>
      <div class="col-4 text-center">
         <p><input type="submit" value="" class="btn btn-secondary w-100" id="endScoretotalEux" name="endScoretotalEux" /></p>
      </div>
      <div class="col-12 text-center">
         <p><input type="submit" value="VALIDER" class="btn btn-success w-100" id="scoreValidation" name="scoreValidation" /></p>
      </div>
   </div>
</div>