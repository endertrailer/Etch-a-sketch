const gridButton = document.querySelector('.grid-button');
const container = document.querySelector('.container');
let gridSize = 16;
const cubesClass = '.cubes';

function randomColor() {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#800080', '#008000', '#000080'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
}

gridButton.addEventListener('click', function() {
  const removeCubes = () => {
    document.querySelectorAll(cubesClass).forEach(element => element.remove());
  };
removeCubes()
  do {
    gridSize = prompt('Enter grid size: ');
  } while (gridSize <= 0 || gridSize > 100|| gridSize == NaN);

  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const cube = document.createElement('div');
      cube.classList.add('cubes');
      cube.style.border = '0.5px solid black';
      container.appendChild(cube);
      cube.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = randomColor();
    })
    }
  }
});


container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

for (let row = 0; row < gridSize; row++) {
  for (let col = 0; col < gridSize; col++) {
    const cube = document.createElement('div');
    cube.classList.add('cubes');
    cube.style.border = '0.5px solid black';
    container.appendChild(cube);
    cube.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = randomColor();
    })
  }
}
