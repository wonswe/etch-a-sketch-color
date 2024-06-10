const title = document.querySelector("#title");

title.addEventListener("click", () => {
  window.location.reload();
})

const sketchbook = document.getElementById('sketchbook-container');
const sketchbookLength = 600;

let gridDimension = 16;

function addRows() {
  for (let i = 0; i < gridDimension; i++) {
    const row = document.createElement('div');
    row.classList.add("grid-row");
    sketchbook.appendChild(row);
  }
}

function addBlocks() {
  const rows = document.querySelectorAll(".grid-row");
  for (let i = 0; i < rows.length; i++) {
    for (let i = 0; i < gridDimension; i++) {
      const block = document.createElement('div');
      block.classList.add("grid-block");
      rows[i].appendChild(block);
    }
  }
  
}

function draw() {
  const blocks = document.querySelectorAll(".grid-block");
  blocks.forEach(block => block.addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = "black";




  }))
}
 
function createGrid() {
  addRows();
  addBlocks();
  draw();
}

createGrid();