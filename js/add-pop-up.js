const addTaskButton = document.querySelector(".main__header");
const closeTaskButton = document.querySelectorAll(".submit__header");
const missions = document.querySelectorAll(".mission");

addTaskButton.addEventListener("click", () => {
    missions.classList.add("open");
    console.log("eeee");
});

closeTaskButton.addEventListener("click", () => {
    missions.classList.remove("open");
});
