/*
Écrire une fonction syracuse qui prend un nombre en entrée, et qui retourne :
- le triple du nombre + 1 si le nombre est impair
- la moitié du nombre sinon
*/

/*
function syracuse (a) {
    if (a%2!=0) {
    a=a*3+1;
    }
        else if (a%2==0) {
            a=a/2;
        }
        return a;
}
*/

/*
Écrire une fonction countdown qui reçoit un nombre positif en entrée, et qui affiche dans la console le compte à rebours jusqu'à 0 en partant de ce nombre.
Par exemple, l'appel à `countdown(3)` devra afficher
3
2
1
0
*/

/*
function countdown(b) {

    for(let i=0; i<=b;) {
            console.log(b);
            b=b-1;    
    }
}
countdown(10);
*/

/*
Écrire une fonction fastCountdown qui reçoit un nombre en entrée et qui affiche un compte à rebours en partant de cette valeur. La valeur sera divisée par 2 à chaque fois, et le compte à rebours s'arrête quand la valeur devient inférieur à 0.1.
Par exemple, l'appel à `fastCountdown(3)` devra afficher
3
1.5
0.75
0.375
0.1875
*/

/*
function fastcountdown(c) {

    for(let i=0.1; c>i;) {
            console.log(c);
            c=c/2;    
    }
}
*/

/*
Écrire une fonction evenNumbers qui reçoit deux nombres en entrées et qui affiche tous les nombres pairs entre ces deux nombres.
Par exemple, l'appel à `evenNumbers(5,14)` devra afficher
6
8
10
12
*/

/*
function gapNumbers(a,b) {
    let gap = Math.abs(a-b);

   while(gap>0) {
            if (gap%2==0) {
            console.log(gap);
            }
            gap=gap-1
    }     
}
*/

function evenNumbers(a,b) {
    if (a>=b) {
        let c = a-b
        for(let i=0; i<b; i++) {
            if (c%2==0) {
                console.log(c);
                }
                c=c-1
        }     
    } else {
        let d = b-a
        for(let i=0; i<a; i++) {
            if (d%2==0) {
                console.log(d);
                }
                d=d-1
        } 
    }   
}

//console.log(evenNumbers(5,14));



/*
Sur la page wikipedia du PGCD (pas besoin de savoir ce que c'est), on peut trouver l'algorithme récursif suivant :
```
fonction euclide(a, b)
    si b = 0 alors retourner a
    sinon retourner euclide(b, a modulo b)
```
Écrire cette fonction.
*/

/*
À la main, calculer `euclide(6,10)`.
*/
