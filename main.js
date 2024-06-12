const title = document.querySelector("#title");
title.addEventListener("click", () => {
  window.location.reload();
})

const sketchbook = document.getElementById("sketchbook-container");
const sketchbookLength = 600;

const dimensionInput = document.getElementById("dimension-input");
const dimensionValue = document.getElementById("dimension-value");

let gridDimension = 16;

function addRows() {
  for (let i = 0; i < gridDimension; i++) {
    const row = document.createElement("div");
    row.classList.add("grid-row");
    sketchbook.appendChild(row);
  }
}

function addBlocks() {
  const rows = document.querySelectorAll(".grid-row");
  for (let i = 0; i < rows.length; i++) {
    for (let i = 0; i < gridDimension; i++) {
      const block = document.createElement("div");
      block.classList.add("grid-block");
      rows[i].appendChild(block);
    }
  }
  
}

function draw() {
  const blocks = document.querySelectorAll(".grid-block");
  blocks.forEach(block => block.addEventListener("mouseover", function(e) {
    e.target.style.backgroundColor = "black";

    if (userRGB) {
      toggleUserRGB();
      e.target.style.backgroundColor = userRGB;
    } else if (random) {
      let color = getColor();
      e.target.style.backgroundColor = color;
    } else if (eraser) {
      e.target.style.backgroundColor = "white";
    } else if (black) {
      e.target.style.backgroundColor = "black";
    } 



  }))
}

// Clear Grid Container//
function clearGrid() {
  while (sketchbook.firstChild) {
    sketchbook.removeChild(sketchbook.lastChild);
  }
}

// Create Default Grid //
createGrid();
 
// Create User Grid //
function createGrid() {
  clearGrid();
  gridDimension = dimensionInput.value;
  dimensionValue.textContent = `${dimensionInput.value}x${dimensionInput.value}`
  addRows();
  addBlocks();
  draw();
}
dimensionInput.addEventListener("input", createGrid);

// Generate random color // 
function getColor() {
  let symbols = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color = color + symbols[Math.floor(Math.random() * 16)];
  }
  return color;
}

// random color handler//
let random = false;

function toggleRandom() {
  random = true; 
  black = false;
  eraser = false;
  userRGB = '';
}

const randomButton = document.getElementById("random-button");
randomButton.addEventListener("click", toggleRandom);

// Black color handler//
let black = true;

function toggleBlack() {
  black = true;
  random = false;
  eraser = false;
  userRGB = '';
}

const blackButton = document.getElementById("black-button");
blackButton.addEventListener("click", toggleBlack);

// Eraser handler// 
let eraser = false;

function toggleEraser() {
  eraser = true;
  random = false;
  black = false;
  userRGB = '';
}

const eraserButton = document.getElementById("eraser-button");
eraserButton.addEventListener("click", toggleEraser);

// Clear button //
const clearButton = document.getElementById("clear-button");

function clearSketchbook() {
  const blocks = document.querySelectorAll(".grid-block");
  blocks.forEach(block => block.style.setProperty("background-color", "white"));

  toggleBlack();
}

clearButton.addEventListener("click", clearSketchbook);

// rgb selector //
let userRGB;

function selectRGB() {
  let red = document.getElementById("red").value;
  let green = document.getElementById("green").value;
  let blue = document.getElementById("blue").value;

  userRGB = `rgb(${red},${green},${blue})`;

  document.documentElement.style.setProperty("--preview", userRGB);
}

document.getElementById("red").addEventListener("input", selectRGB);
document.getElementById("green").addEventListener("input", selectRGB);
document.getElementById("blue").addEventListener("input", selectRGB);

// rgb handler //
function toggleUserRGB() {
  black = false;
  random = false;
  eraser = false;
}

// rgb preview block - click to set color //
let rgbPreview = document.getElementById("color-preview");
function setRGB() {
  userRGB = document.documentElement.style.getPropertyValue("--preview");
  toggleUserRGB();
}

rgbPreview.addEventListener("click", setRGB);