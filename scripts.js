
function choisirmotouphrase() {
      do{
            choix=prompt('vous voulez jouer avec des "mots" ou avec des "phrases" ??');
      }while(choix !=="mots" && choix !== "phrases")
      return choix;
}

function lancerboucledejeu(listeproposition){
      let point=0;
      for(let i=0;i<listeproposition.length;i++){
            let usermot=prompt('taper le mot devant vous ::::   '+listeproposition[i]);
      
            if(usermot===listeproposition[i]){
                  point+=1;
                  console.log('bravo');
            }else{
                  console.log('no trovue');
            }
      }
      return point;
}

function afficherresultat(score,size){
      console.log('vous avez eu la note de '+score+' sur '+size);
}


function lancerlejeu(){
      let choix=choisirmotouphrase();
      let point=0;
      let nbdemotsproposes=0;
      if(choix==="mots"){
            point=lancerboucledejeu(mots);
            nbdemotsproposes=mots.length;
      }else{
            point=lancerboucledejeu(phrases);
            nbdemotsproposes=phrases.length;
      }
      afficherresultat(point,nbdemotsproposes);

}
