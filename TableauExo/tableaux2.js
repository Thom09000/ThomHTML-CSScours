// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.

/* 
let tab = [0,1,1,2,3,5,8,12,21,34,55,89,144,233,377,610]

function lastab () {
    console.log(tab[tab.length-1]);
}

// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.

function returnlast () {
    return tab[tab.length-1];
}
*/

// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.

/*
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
*/

// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.

/*
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
*/

// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.

/*
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
*/

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.

let randtab = [Math.round(Math.random()*10),Math.round(Math.random()*10),Math.round(Math.random()*10),Math.round(Math.random()*10),Math.round(Math.random()*10),Math.round(Math.random()*10),Math.round(Math.random()*10),Math.round(Math.random()*10),Math.round(Math.random()*10),Math.round(Math.random()*10),Math.round(Math.random()*10),Math.round(Math.random()*10),Math.round(Math.random()*10)]

console.log("tableau de valeurs aléatoires",randtab)

/*
function nVar(tab,n) {

    let count = 0
    for (let i=0; i<tab.length; i++) {
       if (tab[i]==n) {
        count+=1
       }
    }
    return count;
}
//console.log(nVar(randtab,2))
*/

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.
 
/*
function nExist (tab,n) {
    let booléen= false;
    function exist (a) {
        if (a>1) {
            a= true;
        } else {
            a= false;
        }
    return a;
    }
    
    for (let i=0; i<tab.length; i++) {
       if (tab[i]==n) {
        booléen=true;
       } else {
        booléen=exist(0);
       }
    }
    return booléen;
}
*/

//console.log(nExist(randtab,2));

//------------------------------------------------

/*
function nExistbool (tab,n) {
    for (let i=0; i<tab.length; i++) {
        if (tab[i]==n) {
        return true;
       } 
    }
    return false;
}
//console.log(nExistbool(randtab,2));
*/

//-----------------------------------------------------

/*
function nExistshort (tab,n) {
    return nVar(tab,n)>0
}
console.log(nExistshort (randtab,5))
*/

// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?

function trieuse(tab, i) {

    if (tab[i]>=tab[i+1]) {
        let save=tab[i+1];
        tab[i+1]=tab[i];
        tab[i]=save;
    } 
    return tab;
}


function trieusator(tab) {
    for (let i=0; i<tab.length-1; i++) {
        trieuse(tab, i);
    }
    return tab;
}

function mégatrieusator(tab) {
    for (let i=0; i<tab.length-1; i++) {
        trieusator(tab);
    }
    return tab;
}
console.log("tableau trié ordre croissant", mégatrieusator(randtab,0));

//--------------------------------


/*
function partri (tab,n) {
    let countdown = tab.length/2;
    let countup = tab.length/2+(i+1((tab.length/2)/2))

    if (n<tab[Math.round(tab.length/2)]) {
        for (let i=0; i<Math.round(countdown); i++) {
            if (tab[i]==n) {
                return true;
            }
            countdown=countdown/2;
        }
    } else {
        for (let i=Math.round(countup); i<=tab.length; i++) {
            if (tab[i]==n) {
                return true;
            }
            countup=countup/2;
            return false;
        } 
    }
}
console.log("chercheur ar partie", partri(randtab,6));
*/
/*
function partri (tab,n) {
    c=0
    let down = c+((tab.length+tab.length/2)*2);
    let up = (length-c)-((tab.length+tab.length/2)*2);
       
    while (tab[down]!=n || tab[up]!=n) {
        down;
        up;
        c=c+1
        return false;
    }
    return true;
}
console.log("chercheur par partie", partri(randtab,0));
*/

function partri2 (tab,n) {
    c = tab.length/2;
    for (let i=0; i<1000; i++) {
console.log(c)
        if (n<tab[Math.round(c)]) {
            c=Math.round(c/2);
        } else if (n>tab[Math.round(c)]) {
            c=Math.round(c+c/2)
        } else if (n==tab[Math.round(c)|| c==0]) {
            return true;
        }
    }
    return false;
}
//console.log("chercheur par partie", partri2(randtab,1));
console.log("chercheur par partie", partri2([0,1,2,3,4,5,6,7,8,9],9));
// Créer un tableau qui contient [1,2,3,...,7777].

// Créer un tableau qui contient [10,20,30,...,77770].

// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].

// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
// console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12])); // doit afficher [1,45,88,54]