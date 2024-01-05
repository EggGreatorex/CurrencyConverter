

function moveStarterElements(){
  // ACCESS THE ELEMENTS
  const headerElement = document.querySelector('.header')
  const startButtonElement = document.querySelector(".startButton");
  
  // PERFORM THE ANIMATION OF MOVING OFF SCREEN
  headerElement.classList.add('move-up')
  startButtonElement.classList.add('move-down')
}