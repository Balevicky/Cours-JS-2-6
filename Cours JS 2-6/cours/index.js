//================ SECLECTEURS =======================
//document.querySelector("h4").style.background = "yellow";
//const baliseHTML = document.querySelector("h4");
//console.log(baliseHTML);
//baliseHTML.style.background = "yellow";

//const btn1 = document.querySelector("#btn-1");
//console.log(btn1);
//btn1.style.background = "green";

//const btn2 = document.querySelector("#btn-2");
//btn2.style.background = "purple";
//btn2.style.color = "white";
//================ CLICK EVENT =======================
const questioncontainer = document.querySelector(".click-enent");
// console.log(questioncontainer);

const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");
console.log(response);

questioncontainer.addEventListener("click", () => {
  //   console.log(btn1, btn2);

  //   console.log("click !");
  //   questioncontainer.style.borderRadius = "15px";
  //   questioncontainer.style.background = "red";
  //   questioncontainer.style.border = "3px solid blue";
  //   questioncontainer.classList.add("question-clicked");
  //   questioncontainer.classList.remove("question-clicked");
  //toggle= mettre s'il n'y a pas et enlever s'il y a
  questioncontainer.classList.toggle("question-clicked");
});
//-----------------------------------------------
btn1.addEventListener("click", () => {
  //   response.style.visibility = "visible";
  //   response.style.background = "green";
  // --------- methode with class created in style.css
  response.classList.add("show-response");
  response.style.background = "green";
});
btn2.addEventListener("click", () => {
  //   response.style.visibility = "visible";
  //   response.style.background = "red";
  // --------- methode with class created in style.css
  response.classList.add("show-response");
  response.style.background = "red";
});
//------------------------------------------
