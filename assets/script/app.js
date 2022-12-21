
const formEl = document.querySelector(".container__form");
const btnEl = document.querySelector(".form__btn");
const listEl = document.querySelector(".container__list");

const inputnameEl = document.querySelector(".input-food-name");
const inputpriceEl =  document.querySelector(".input-food-price");
const inputimgEl =  document.querySelector(".input-food-img");
const inputcookEl =  document.querySelector(".input-food-cook");
const inputresoranEl =  document.querySelector(".input-restaurant");


formEl.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    const liEl1 = document.createElement("li");
    listEl.appendChild(liEl1);
    const imgEl = document.createElement("img");
    liEl1.appendChild(imgEl);
    imgEl.src = inputimgEl.value;
    
    const listEl1 = document.createElement("ul");
    liEl1.appendChild(listEl1);
    
    const liEl = document.createElement("li");
    listEl1.appendChild(liEl);
    
    const liEl2 = document.createElement("li");
    listEl1.appendChild(liEl2);

    const liEl3 = document.createElement("li");
    listEl1.appendChild(liEl3);

    const liEl4 = document.createElement("li");
    listEl1.appendChild(liEl4);

    liEl.innerHTML = "<b>Taom nomi:</b> " + inputnameEl.value;
    liEl2.innerHTML = "<b>Taom narxi:</b> " + inputpriceEl.value;
    liEl3.innerHTML = "<b>Taom oshpazi:</b> " + inputcookEl.value;
    liEl4.innerHTML =  "<b>Taom restorani:</b> " +  inputresoranEl.value;

    const btnEl2 = document.createElement("button")
    liEl1.appendChild(btnEl2);
    btnEl2.innerHTML=("Back");

    btnEl2.addEventListener("click",(e)=>{
        alert("O'chirishga rozimisiz");
        liEl1.style.display = "none";
    });
    

 })
 