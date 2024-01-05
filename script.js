

function moveStarterElements(){
  // ACCESS THE ELEMENTS
  const headerElement = document.querySelector('.header')
  const startButtonElement = document.querySelector(".startButton");

  const currencyInputContainer = document.querySelector(".currencyInputContainer");
  const optionsBarElement = document.querySelector(".options-bar");
  const inputElement = document.querySelector(".userInput")
  const outputElement = document.querySelector(".output")
  
  // PERFORM THE ANIMATION OF MOVING OFF SCREEN
  headerElement.classList.add('move-left')
  startButtonElement.classList.add('move-right')
  startButtonElement.classList.add('hidden');

  // MAKE OUR NEW INPUTS VISIBLE
  currencyInputContainer.classList.remove("hidden");
  optionsBarElement.classList.remove("hidden");

  const optionElements = optionsBarElement.querySelectorAll(".option");
  optionElements.forEach((option)=>{
    option.classList.remove("hidden");
  }) 

  // ANIMATE THE INPUT ELEMENTS INTO VIEW
  inputElement.classList.add("move-input-down");
  outputElement.classList.add("move-output-up");

  // ANIMATE THE OPTION ELEMENTS INTO VIEW
  optionElements.forEach((option) =>{
    option.classList.add("move-option-right")
  })
}

// HANDLE THE CURRENCY OPTION CLICKS
function handleOptionClick(currency){
  // ACCESS ALL THE OPTION ELEMENTS
  const firstOption = document.querySelector(".option:nth-child(1)");
  const secondOption = document.querySelector(".option:nth-child(2)");
  const thirdOption = document.querySelector(".option:nth-child(3)");

  // REMOVE ANY PREVIOUS STYLING FOR THE SELECTED BUTTON
  firstOption.classList.remove("selectedOption");
  secondOption.classList.remove("selectedOption");
  thirdOption.classList.remove("selectedOption");
  
  // FIND WHICH BUTTON WAS CLICKED
  if (currency==='op1'){
    firstOption.classList.add('selectedOption')
  } else if (currency==='op2'){
    secondOption.classList.add("selectedOption");
  } else if (currency==='op3'){
    thirdOption.classList.add("selectedOption");
  }
}