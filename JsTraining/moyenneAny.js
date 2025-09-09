

let notes =[Math.round(Math.random()*20),Math.round(Math.random()*20),Math.round(Math.random()*20),Math.round(Math.random()*20),Math.round(Math.random()*20),Math.round(Math.random()*20), Math.round(Math.random()*20), Math.round(Math.random()*20)];

console.log("ensemble des notes élève",notes);

//-----------------------------------------------------


function moystudent(tab) {
    let n=tab[0];
    for (let i=0; i<tab.length-1; i++) {
        n=n+tab[i+1];
        console.log("addition de toutes les notes élève",n)
    }
    
    return n/tab.length;
}
console.log("moyenne de l'élève", moystudent(notes));