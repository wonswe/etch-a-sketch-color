const sketchbook = document.getElementById('sketchbook-container');
const sketchbookLength = 600;

let gridDimension = 10;

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

function createGrid() {
  addRows();
  addBlocks();
}

createGrid();