// Le but est de trier un tableau nous-même (il faut mettre les éléments du plus petit au plus grand). Pour cela, on va procéder en plusieurs étapes :

// Étape 1 : écrire une fonction qui reçoit un tableau et un numéro de case (i). Son but est d'échanger les valeurs des cases i et i+1 si celles-ci ne sont pas dans le bon ordre.

/*
let fixtab = [9,5,2,5,0,10,10,7,5,10,1,3,8,7,2,7,5,1,9,4,5,9,1,10,10, 4,4,10,3,4,8]
console.log("tableau fix désordonné", fixtab);
*/

//-----------------------------------------------------------------

/*
function tri(tab) {
    let newtab=[]
//    newtab.length=tab.length;
    for (let i=0; i<=tab.length; i++) {
    if (tab[i]>=tab[i+1]) {
        newtab.push(tab[i+1]);
        newtab.push(tab[i]);
    } else {
        newtab.push(tab[i]);
        newtab.push(tab[i+1]);     
    }
    }
    return newtab;
}
//console.log("tableau trié ordre croissant", tri(fixtab));
*/

//-----------------------------------------------------------

/*
function trieuse(tab, i) {
    let save=tab[i+1];
if (tab[i]>=tab[i+1]) {
    tab[i+1]=tab[i];
    tab[i]=save;
    } 
return tab;
}
*/

//console.log("tableau trié ordre croissant", trieuse(fixtab,0));

// Étape 2 : écrire une fonction qui reçoit un tableau et qui applique l'étape 1 sur toutes les cases successives (cases 0/1, cases 1/2, cases 2/3, ..., cases avant-dernière/dernière).

/*
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
*/

// Étape 3 : écrire une fonction qui reçoit un tableau et qui le trie en appelant la fonction 2 autant de fois qu'il y a d'éléments dans le tableau.
/*
function mégatrieusator(tab) {
    for (let i=0; i<tab.length-1; i++) {
        trieusator(tab);
    }
    return tab;
}
console.log("tableau trié ordre croissant", mégatrieusator(fixtab,0));
*/

// Note : on peut visualiser cet algorithme sur cette image <https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/211162/a9b17b54-b6dd-1602-be04-6fc125676b7a.gif>.

/*
    let newtab = []
function trieuse (tab) {
    let newtab = []
    
    for (let i=tab.length; i>=0; i--) {
//        let s1;
//        let s2;
        if (tab[i]<=tab[i-1]) {
        tab[i]=newtab[i-1];
        tab[i-1]=newtab[i];
        tab.pop();
        } 
        tab[i]=newtab[i];
        tab[i-1]=newtab[i-1];
        tab.pop();
    }
    return newtab;
}
console.log(newtab);
console.log(trieuse(fixtab))
*/
/*
function extertri(tab,i, count) {
    
    //let count=tab.length;

    if (tab[i]>=tab[count-1]) {
        let save=tab[count-1];
        tab[count-1]=tab[i];
        tab[i]=save;
    }
    return tab;
}

function intertri(tab,i,count) {
 
    if (Math.round(tab[count/2])>=Math.round(tab[count/2+(i+(i+1))])) {
        let save=Math.round(tab[count/2+1]);
        Math.round(tab[count/2+1])=Math.round(tab[count/2]);
        Math.round(tab[count/2+1])=save;
        }
    count=count-1;
    return tab;
}

function vortextri(tab) {
    for (let i=0;i<tab.length;i++) {
    extertri(tab,i,count);
    intertri(tab,i, count);
    return tab;
    }
}

console.log("tableau trié en étau", vortextri(fixtab,0,0));
*/