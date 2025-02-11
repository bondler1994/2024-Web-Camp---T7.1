const switchBarForFocusOption = document.querySelector("nav");
const navButtons = document.querySelectorAll(".nav__button");
const focusNavBar = document.querySelector(".focus");

function test(num, str) {
  navButtons(num).classList.add(str);
}
function switchNavBar(e) {
  if (e.target.innerText === "My Tasks") {
    navButtons[0].classList.add("focus");
    navButtons[1].classList.remove("focus");
    navButtons[2].classList.remove("focus");

    console.log(e.currentTarget);
  }
  if (e.target.innerText === "In Progress") {
    navButtons[0].classList.remove("focus");
    navButtons[1].classList.add("focus");
    navButtons[2].classList.remove("focus");

    console.log(e.currentTarget);
  }
  //nodeName = BUTTON
  if (e.target.innerText === "Completed") {
    navButtons[0].classList.remove("focus");
    navButtons[1].classList.remove("focus");
    navButtons[2].classList.add("focus");
    console.log(e.currentTarget);
  }
}
//
// console.log(switchBarForFocusOption);
//     if (e.target.nodeName === "BUTTON" && e.target.innerText === "My Tasks") {
//         navButtons[2].classList.toggle("focus");
//         navButtons[0].classList.toggle("focus");
//         console.log(e.currentTarget);
//     }

//     if (e.target.nodeName === "BUTTON" && e.target.innerText === "In Progress") {
//         navButtons[0].classList.toggle("focus");
//         navButtons[1].classList.toggle("focus");

//         console.log(e.currentTarget);
//     }
//     //nodeName = BUTTON
//     if (e.target.nodeName === "BUTTON" && e.target.innerText === "Completed") {
//         navButtons[0].classList.toggle("focus");
//         navButtons[2].classList.toggle("focus");
//         console.log(e.currentTarget);
//     }
// }

switchBarForFocusOption.addEventListener("click", switchNavBar);
console.log(switchBarForFocusOption.childNodes[1]);
console.log(switchBarForFocusOption.childNodes[3]);
function testStyle() {
  const switchBarForFocusOption = document.querySelector(".focus");
}

document.addEventListener("click", testStyle);
