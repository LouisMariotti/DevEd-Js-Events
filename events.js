// Something the user does for exemple on click, scroll... can have functionalities and use use js to react to events

const button = document.querySelector("#submit"); // WE SELECT THE SUBMIT BUTTON
const todoList = document.querySelector("#todo-list"); // WE SELECT THE TODO LIST
const todoNr = document.querySelector(".todo-nr"); // WE SELECT THE TODO NR CLASS
const items = todoList.children; // TO UPDATE DIRECTLY OUR STUFF AND LINK THEITEMS AND THE TODO LIST

// ATTACH A EVENT LISTENER

// button.addEventListener("click", function () {
//   // WE CREAT AN EVENT WITH THE BUTTON (ON CLICK)
//   const newItem = document.createElement("li"); // START CREATING A NEW ELEMENT TO ADD ONE LI
//   newItem.classList.add("item"); // THEN WE ADD IT TO THE ITEM CLASS
//   newItem.innerText = `item ${items.length + 1}`; // WE ADD THE TEX WE WANT TO DISPLAY
//   todoList.appendChild(newItem); // WE LINK OUR NEW ITEM TO THE TODO LIST
//   todoNr.innerText = items.length; // WE ADD A NUMBER TO THE H2
// });

const mainTitle = document.querySelector(".main-title");

button.addEventListener("keydown", function (event) {
  console.log(event);
  //   mainTitle.style.color = "red";
  //   mainTitle.style.fontSize = "60px"; // Most of the time css elements are camelcased
  /* rather than doing the above we will most of the time create class
  so we can add css which will be easier and cleaner */
  mainTitle.classList.toggle("spectacular");
});
