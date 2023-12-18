let array = [];

function addNumber() {
    let szam = document.getElementById("szam").value;
    array.push(szam);
}

document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("gomb").addEventListener("click", ()=>{
        console.log("teszt");
        addNumber();
    });
    document.getElementById("gomb").addEventListener("click", ()=>{
        console.log("teszt");
        addNumber();
    });
    document.getElementById("gomb").addEventListener("click", ()=>{
        console.log("teszt");
        addNumber();
    });
});