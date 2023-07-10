const gridButton = document.querySelector('.grid-button');
const container = document.querySelector('.container');
const clearButton = document.querySelector('.clear');
let gridSize = 16;
const cubesClass = '.cubes';

function randomColor() {
  colors = ['red', 'green', 'blue', 'yellow', 'magenta', 'cyan', 'purple', 'darkgreen', 'navyblue', 'orange', 'darkorange', 'brown', 'teal', 'pink', 'khaki', 'maroon', 'darkkhaki', 'indigo', 'ivory', 'olive', 'aquamarine', 'beige', 'bisque', 'orangered', 'saddlebrown', 'seagreen', 'chocolate', 'olivedrab', 'lightseagreen', 'tan', 'skyblue', 'cadetblue']

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
clearButton.addEventListener('click', function(){
  const elements = document.querySelectorAll(cubesClass);
for (let i = 0; i < elements.length; i++) {
  elements[i].style.backgroundColor = "white";
}

})