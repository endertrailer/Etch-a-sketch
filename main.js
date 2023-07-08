const gridButton = document.querySelector('.grid-button');
const container = document.querySelector('.container');
let gridSize = 16;
const cubesClass = '.cubes';
function randomColor() {
 let colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#800080', '#008000', '#000080']

let random_color = colors[Math.floor(Math.random() * colors.length)];
return random_color;
}

const removeCubes = () => {
  document.querySelectorAll(cubesClass).forEach(element => element.remove());
};

const createGrid = () => {
  container.style.display = 'grid';
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize ** 2; i++) {
    const div = document.createElement('div');
    div.classList.add('cubes');
    div.style.border = '0.5px solid black';

    // Add hover event listener to each newly created cube
    div.addEventListener('mouseenter', () => {
      // Perform hover actions
      div.style.backgroundColor = randomColor();
    });

    container.appendChild(div);
  }
};

const handleClick = () => {
  let newGridSize = parseInt(prompt('Enter a number between 1 and 100'));
  while (isNaN(newGridSize) || newGridSize < 1 || newGridSize > 100) {
    newGridSize = parseInt(prompt('Invalid input. Enter a number between 1 and 100'));
  }

  gridSize = newGridSize;
  removeCubes();
  createGrid();
};

gridButton.addEventListener('click', handleClick);

// Create the initial grid with default size
createGrid();
