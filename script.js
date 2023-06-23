"use strict"
const elForm = document.querySelector("#book-form");
const elBtnGroup = document.querySelector(".btn-group");
const elListGroup = document.querySelector(".list-group");
let elTitle = document.querySelector("#title");
let elType = document.querySelector("#type");

let newArr = [
   { title: "Baxtiyor Oila", type: "Diniy" },
   { title: "O'tgan kunlar", type: "Badiiy"},
   { title: "Rework",        type: "Biznes"},
   { title: "Fizika va Hayot", type: "Ilmiy"},
];


let newListArr = [];
newArr.forEach((item) => {
   newListArr = newArr.map((item)  => {
      return ` <li class="list-group-item">
      ${item.title} <span class="float-end badge bg-success">${item.type}</span>
      </li> `
   });
   elListGroup.innerHTML = newListArr.join("");
});

elForm.addEventListener("submit", (e) => {
   e.preventDefault();

newArr.push({
   title: elTitle.value,
   type: elType.value,
});


newListArr = newArr.map((item) => {
   return ` <li class="list-group-item">
   ${item.title} <span class="float-end badge bg-success">${item.type}</span>
   </li> `
});

elListGroup.innerHTML = newListArr.join("");
(elTitle.value = ""), (elType.value = "");
});

elBtnGroup.addEventListener("click", (e) => {
   let newTypeArr = newArr.filter((item) => {
      return item.type == e.target.textContent;
   });
   if(e.target.textContent == "All") {
      newTypeArr = newArr;
   }
   let newListArrOne = newTypeArr.map((item) => {
      return `<li class="list-group-item">
      ${item.title} <span class="float-end badge bg-success">${item.type}</span>
      </li>`;  
   });
   elListGroup.innerHTML = newListArrOne.join("");
});