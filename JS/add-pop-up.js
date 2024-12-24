const addTaskButton = document.querySelector(".main__header");
const closeTaskButton = document.querySelectorAll(".submit__header");
const sss = document.querySelectorAll(".mission");

addTaskButton.addEventListener("click", () => {
    sss.classList.add("open");
});

closeTaskButton.addEventListener("click", () => {
    sss.classList.remove("open");
});
