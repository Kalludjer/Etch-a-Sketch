const getNumber = document.querySelector("#getNumber");
const container = document.querySelector(".container");

getNumber.addEventListener("click", () =>{
  container.replaceChildren();
  const newNumber = prompt("Enter an even number, maximum 100");
  if (
    isNaN(newNumber) == false &&
    newNumber <= 100 &&
    newNumber > 0 &&
    newNumber % 2 == 0 
  ){
    createGrids (newNumber);
  }else {
    alert ("Error! You entered an incorrect value.");
  }
});

function createGrids(resolution) {
  for(i = 0; i < resolution; i++){
    const container = document.querySelector(".container");
    const gridVertical = document.createElement("div");
    gridVertical.classList.add("gridVertical");
    container.appendChild(gridVertical);
  }

  const gridVerticalElements = document.querySelectorAll(".gridVertical");

  gridVerticalElements.forEach((gridVerticalContainer) => {
    Array.from({length: resolution}).forEach(() => {
      const gridHorizontal = document.createElement("div");
      gridHorizontal.classList.add("gridHorizontal");
      gridVerticalContainer.appendChild(gridHorizontal);
    })
  })
}

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
  container.replaceChildren();
});

let isDrawing = false;

container.addEventListener("mousedown", handleMouseDown);
container.addEventListener("mousemove", handleMouseMove);
container.addEventListener("mouseup", handleMouseUp);

container.addEventListener("dragstart", (e) => {
  e.preventDefault();
});

container.addEventListener("drop", (e) => {
  e.preventDefault();
});

function handleMouseDown (e) {
  isDrawing = true;
  e.target.style.backgroundColor = "#000";
};

function handleMouseMove (e) {
  if (!isDrawing) return;
  e.target.style.backgroundColor = "#000";

}

function handleMouseUp (e) {
   isDrawing = false;
}