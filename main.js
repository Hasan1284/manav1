/*let meyve = ["Elma", "Armut", "Şeftali", "Muz"];
let sebze = ["Patates", "Patlıcan", "Salatalık", "Pırasa"]
let dukkan = meyve.concat(sebze);
*/

let dukkan = [
    {meyve : ["Elma", "Armut", "Şeftali", "Muz"]},
    {sebze : ["Patates", "Patlıcan", "Salatalık", "Pırasa"]},
    
    
];
//burada obje içinde ki 2 array birleştirilip dukkan arrayinin içinde nasıl tek array olarak gösterilebilir.


let btn1 = document.querySelector("#btnEkle");
let alici = document.querySelector("#alici");
let manav = document.querySelector("#manav");

function sırala() {
    return dukkan.sort();
}

const button = document.querySelector('#btnEkle');
button.addEventListener('click', function() {
    veriTopla();
    button.style.visibility = "hidden";
}, false);

function veriTopla() {
    for (let index = 0; index < sırala().length; index++) {
        let div = document.createElement("div");
        let h1 = document.createElement("h1");
        h1.className = "giris"
        h1.innerHTML = sırala()[index];
        div.id = "liste" + index;
        div.className = "manavmenu";
        div.appendChild(h1);
        manav.appendChild(div);
        eklemelik("liste" + index, sırala()[index]);
    }
}

function eklemelik(nedir, divgelen) {
    let aranan = document.querySelector("#" + nedir);
    aranan.addEventListener("click", function() {
        let div = document.createElement("div");
        let h1 = document.createElement("h1");
        h1.className = "sonuc"
        h1.innerHTML = divgelen;
        div.id = "liste" + divgelen;
        div.className = "manavmenu";
        div.appendChild(h1);
        alici.appendChild(div);
        aranan.style.visibility = "hidden"; //aranan.innerHTML = "";
    });
}