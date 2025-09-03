// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.

let tab = [0,1,1,2,3,5,8,12,21,34,55,89,144,233,377,610]

function lastab () {
    console.log(tab[tab.length-1]);
}

// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.

function returnlast () {
    return tab[tab.length-1];
}

// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.

function mintab (t) {
    let c = 0

    for(let i=0;i<t.length;i++) {
        if (t[c]-t[c+i]<=0) {
        t[c]=t[c];
            
        } else if (t[c]-t[c+i]>0) {
        t[c]=t[c+i];  
        }
    }
    console.log(t[c])
    return t[c];   
}
console.log(mintab(tab))
console.log(tab);


// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.

function maxtab () {
    let c = 0

    for(let i=0;i<tab.length;i++) {
        if (tab[c]-tab[c+i]>=0) {
        tab[c]=tab[c];
            
        } else if (tab[c]-tab[c+i]<0) {
        tab[c]=tab[c+i];  
        }
    }
    console.log(tab[c])
    return tab[c];  
}

// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.

function secondbestab (t) {
    let c = 0

    for(let i=0;i<=t.length;i++) {
        if (t[c]-t[c+i]>=0) {
        t[c]=t[c];
            
        } else if (t[c]-t[c+i]<0) {
            t[c]=t[c+i]; 

        } else if (t[c]-t[c+i]>=0 && i==t.lenght) {
            t[c]=t[c-1];
            return t[c];
        }
    }
    

}
console.log(tab);
console.log(secondbestab(tab));
console.log(tab);

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.

let randtab = [Math.round(Math.random()*10),Math.round(Math.random()*10),Math.round(Math.random()*10),Math.round(Math.random()*10),Math.round(Math.random()*10),Math.round(Math.random()*10),Math.round(Math.random()*10),Math.round(Math.random()*10),]



// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.

// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?

// Créer un tableau qui contient [1,2,3,...,7777].

// Créer un tableau qui contient [10,20,30,...,77770].

// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].

// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
// console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12])); // doit afficher [1,45,88,54]