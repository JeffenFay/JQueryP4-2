$(function(){
  //variable regex servant à vérifier s'il y a une seule virgule et que des chiffres
  var regex = /^[0-9]+(\.[0-9]+)?$/;
  //permet d'entrer dans la condition de l'évènement "click" associé à l'élément validate
  var validEntry = false;
  //Gestion saisie en sortie de focus avec le regex les erreurs sont traitées en premier, le résultat correcte attendu (booleen) est renvoyé si bon
  $('#noteMath, #notePhyQuant, #noteAstro, #noteNecro, #noteMagie').focusout(function(){
    if(!regex.test(this.value)){
      alert('Erreur de saisie.');
    }else{
      validEntry = true;
    }
  })
  //évènement "click" associé à l'élément "validate" de la page Html permettant de faire la moyenne et d'afficher le résultat attendu selon les règles de saisie
  $('#validate').click(function(){
    //Condition permettant la validation des valeurs entrées dans les champs
    if ($('#noteMath, #notePhyQuant, #noteAstro, #noteNecro, #noteMagie').value=='' || validEntry==false){
      alert('Un des champs est vide.');
    }else{
      //Variable contenant le résultat du calcul de la moyenne (parseint() est utilisé pour obtenir des valeurs numériques exploitables pour le calcul)
      var average = (parseInt($('#noteMath').val())+parseInt($('#notePhyQuant').val())+parseInt($('#noteAstro').val())+parseInt($('#noteNecro').val())+parseInt($('#noteMagie').val()))/5;
      //Conditions remplissant les critères de l'énoncé
      if(average>=0&&average<10){ //moyenne entre O et 9
        alert(average+' C\'est en dessous de la moyenne.');
      } else if(average>=10&&average<13){//moyenne entre 1O et 12
        alert(average+' C\'est moyen.');
      } else if(average>=13&&average<16){//moyenne entre 13 et 15
        alert(average+' C\'est bien.');
      } else if(average>=16&&average<20){//moyenne entre 16 et 19
        alert(average+' C\'est très bien.');
      } else if(average==20){//moyenne maximale de 20
        alert(average+' C\'est excellent.');
      }
    }
  })
})
