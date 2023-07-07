const gridButton = document.querySelector('.grid-button');
const container = document.querySelector('.container');

gridButton.addEventListener('click', () => {
  let gridSize = 0;

  const removeCubes = () => {
    const cubes = document.querySelectorAll('.cubes');
    cubes.forEach((element) => {
      element.remove();
    });
  };

  const createGrid = () => {
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const div = document.createElement('div');
        div.classList.add('cubes');
        div.style.border = '0.5px solid black';
        container.appendChild(div);
      }
    }
  };

  while (gridSize > 100 || gridSize <= 0) {
    gridSize = parseInt(prompt('Enter a number between 1 and 100'));
  }

  removeCubes();
  createGrid();
});
