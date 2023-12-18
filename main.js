let array = [];

function addNumber() {
    let szam = document.getElementById("szam").value;
    array.push(szam);
}

function minNumber() {
    let min = array[0];
    array.forEach(szam => {
        if (szam < min) {
            min = szam;
        }
    });
    document.getElementById("minkiiras").innerText = min;
}

function maxNumber() {
    let max = array[0];
    array.forEach(szam => {
        if (szam > min) {
            min = szam;
        }
    });
    document.getElementById("maxkiiras").innerText = max;
}

document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("gomb").addEventListener("click", ()=>{
        console.log("teszt");
        addNumber();
    });
    document.getElementById("minimum").addEventListener("click", ()=>{
        console.log("teszt2");
        minNumber();
    });
    document.getElementById("maximum").addEventListener("click", ()=>{
        console.log("teszt");
        maxNumber();
    });
});