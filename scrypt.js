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

//role: comparer  les deux choix et annoncer le vainqueur 
//parametre: les deux choix
//return: le vainqueur

function comparer(utilisateur, ordinateur){
    //si utilisateur a fait pierre et que ordinateur a fait papier alors ordinateur gagne
    if(utilisateur=="pierre" && ordinateur=="papier"){
        alert("Vous avez perdu !")
    }
        //sinon si utilisateur a fait pierre et ordinateur à fait ciseaux alors utilisateur gagne
    else if(utilisateur=="pierre" && ordinateur=="ciseaux"){
        alert(`Vous avez gagné !`)
    }

     //sinon si utilisateur a fait papier et que ordinateur a fait pierre alors utilisateur gagne
    else if(utilisateur=="papier" && ordinateur=="pierre"){
        alert(`Vous avez perdu !`)
    }

     //sinon si utilisateur a fait papier et que ordinateur a fait ciseaux alors ordinateur gagne 
    else if(utilisateur=="papier" && ordinateur=="ciseaux"){
        alert(`Vous avez gagné !`)
    }

     //sinon si utilisateur a fait ciseaux et que ordinateur a fait pierre alors ordinateur gagne
    else if(utilisateur=="ciseaux" && ordinateur=="pierre"){
        alert(`Vous avez perdu !`)
    }

     // sinon si utilisateur a fait ciseaux et que ordinateur a fait papier alors utilisateur gagne 
    else if(utilisateur=="ciseaux" && ordinateur=="papier"){
        alert(`Vous avez gagné !`)
    }

     //sinon match nul
    else{
        alert(`Match nul !`)
    }
    
}

//scenario

