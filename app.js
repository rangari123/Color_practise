// get all the element

// let red = document.getElementById("red");
// let blue = document.getElementById("blue");
// let green = document.getElementById("green");
// let yellow = document.getElementById("yellow");

let box = document.querySelectorAll(".box");
let container = document.querySelector(".container"); // ✅ Select the container
let body = document.body;

// console.log(box);

// looping through every box

box.forEach((e) => {
  e.addEventListener("click", (val) => {
    let currentbox = val.target;
    let nextbox = currentbox.nextElementSibling;
    let prevbox = currentbox.previousElementSibling;

    body.style.backgroundColor = currentbox.id;

    if (nextbox) {
      container.style.backgroundColor = nextbox.id;
    } else if (prevbox) {
      container.style.backgroundColor = prevbox.id; // ✅ Default color if no next element
    } else {
      container.style.backgroundColor = "white";
    }
  });
});
