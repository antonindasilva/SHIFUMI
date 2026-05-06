//Créer un jeu shifumi en interraction avec l'ordinateur




//Demander à l'utilisateur de choisir entre "pierre","papier" et "ciseaux"

//role: demander à l'utilisateur de choisir entre "pierre","papier","ciseau"
//parametre:
//return: Choix de l'utilisateur

function choixUtilisateur(){
    let choix = prompt("Pierre, papier, ciseaux ?");
    return choix;
}



//demander à l'ordi de choisir entre 0 et 2

//role: demander à l'ordi de choisir entre "pierre","papier","ciseau"
//parametre: les 3 choix
//return: choix de l'ordi 



function choixOrdi(){
    let choix2 = Math.floor(Math.random()*3)
    return choix2
}


//convertir le choix ordi

//role: convertir le nombre choisis par l'ordi en pierre, papier ou ciseaux
//parametre: le choix de l'ordi
//return: convertion si c'est pierre, papier ou ciseaux

let choixFinal = choixOrdi()

function convertionChoixOrdi(choix){

    //Si choix de l'ordi est 0 ça fait pierre
    if(choix === 0){
        return "Pierre"
    }
    //sinon si il choisi 1 ça fait papier
    else if(choix === 1){
        return "Papier"
    }
    //sinon il fait ciseaux
    else{
        return "Ciseaux"
    }
}



//Comparer les deux choix pour voir qui gagne la manche 

//role: comparer les deux choix
//parametre: les deux choix
//return: le vainqueur


