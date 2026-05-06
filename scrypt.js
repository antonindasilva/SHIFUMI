//Créer un jeu shifumi en interraction avec l'ordinateur




//Demander à l'utilisateur de choisir entre "pierre","papier" et "ciseaux"

//role: demander à l'utilisateur de choisir entre "pierre","papier","ciseau"
//parametre:
//return: Choix de l'utilisateur

function choixUtilisateur(){
    let choixJ = prompt("Pierre, papier, ciseaux ?");
    return choixJ;
}



//demander à l'ordi de choisir entre 0 et 3

//role: demander à l'ordi de choisir entre "pierre","papier","ciseau"
//parametre: 
//return: choix de l'ordi 



function nombreAleatoire(){
    let nombrePioche = Math.floor(Math.random()*3)
    return nombrePioche
}


//convertir le choix ordi

//role: convertir le nombre choisis par l'ordi en pierre, papier ou ciseaux
//parametre: le nombre prioché par l'ordi
//return: convertion si c'est pierre, papier ou ciseaux

let choixFinal = nombreAleatoire()

function convertion(nombrePioche){

    //Si nobrePioche est 0 ça fait pierre
    if(nombrePioche === 0){
        return "pierre"
    }
    //sinon si il pioche 1 ça fait papier
    else if(nombrePioche === 1){
        return "papier"
    }
    //sinon il fait ciseaux
    else{
        return "ciseaux"
    }
}



//Comparer les deux choix pour voir qui gagne la manche 

//role: comparer  les deux choix et annoncer le vainqueur 
//parametre: les deux choix
//return: le vainqueur

function comparer(utilisateur, ordinateur){
    //si utilisateur a fait pierre et que ordinateur a fait papier alors ordinateur gagne
    if(utilisateur=="pierre" && ordinateur=="papier"){
        return("Vous avez perdu !")
    }
        //sinon si utilisateur a fait pierre et ordinateur à fait ciseaux alors utilisateur gagne
    else if(utilisateur=="pierre" && ordinateur=="ciseaux"){
        return(`Vous avez gagné !`)
    }

     //sinon si utilisateur a fait papier et que ordinateur a fait pierre alors utilisateur gagne
    else if(utilisateur=="papier" && ordinateur=="pierre"){
        return(`Vous avez perdu !`)
    }

     //sinon si utilisateur a fait papier et que ordinateur a fait ciseaux alors ordinateur gagne 
    else if(utilisateur=="papier" && ordinateur=="ciseaux"){
        return(`Vous avez gagné !`)
    }

     //sinon si utilisateur a fait ciseaux et que ordinateur a fait pierre alors ordinateur gagne
    else if(utilisateur=="ciseaux" && ordinateur=="pierre"){
        return(`Vous avez perdu !`)
    }

     // sinon si utilisateur a fait ciseaux et que ordinateur a fait papier alors utilisateur gagne 
    else if(utilisateur=="ciseaux" && ordinateur=="papier"){
        return(`Vous avez gagné !`)
    }

     //sinon match nul
    else{
        return(`Match nul !`)
    }
    
}


//Affiche vainqueur
//role: Afficher le resultat
//parametre: le winner
//return: rien elle affiche

function afficheResultat(choixO,choixU,winner){
    alert(`L'ordi à choisis ${choixO} et tu as choisis ${choixU} donc ${winner}`)
}

//scenario

function scenario(){
    let choixU=choixUtilisateur()
    let nbrPioche=nombreAleatoire()
    let choixO=convertion(nbrPioche)
    let winner=comparer(choixO,choixU)
    afficheResultat(choixO,choixU,winner)
}

scenario()




