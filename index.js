let colorArray = ['red','green'];
let randomColor = colorArray[Math.floor(Math.random()*2)];
let box = document.getElementsByClassName('box');
let introScreen = document.querySelector('.intro');
let content = document.querySelector('.content');
let getColor = [];                                 
// let cards = [...box];
// console.log(cards)



// start the game
function startGame () {
    let playBtn = document.querySelector('.intro button');
    playBtn.addEventListener('click', () => {
        introScreen.classList.add('fadeOut');
        content.classList.add('fadeIn');


    qstGenerator();
    colorGenerator()
    hideColors();
    })
}
startGame();



// question generator  called in startGame()
let question = document.getElementById('question');
function qstGenerator () {
    question.innerHTML = `Guess the color: &nbsp; ${randomColor}`;
    question.style.color = `${randomColor}`;
}



// Box color generator called in startGame()
function colorGenerator() {
    for (let i=0; i<box.length; i++) {
        box[i].style.background = colorArray[Math.floor(Math.random()*2)];
        getColor.push(box[i].style.background)                    //pushing color into array getColor

        console.log(getColor)

    } 

}
  

// hiding boxes called in startGame()
function hideColors() {
    setTimeout(() => {
        for (let i=0; i<box.length; i++) {
            box[i].style.background = 'black';
        }
        
    }, 2000

    )
}


//selection of boxes
function selectionBoxes() {
    for (let i=0; i<box.length; i++) {
        box[i].addEventListener('click',colorFade);
        
    }

    function colorFade(e) {
        e.target.style.opacity = '0';
        console.log(e.target)
    }
}
selectionBoxes()


// restart the game
function restart() {
    let restartBtn = document.querySelector('.restartButton');
    restartBtn.addEventListener('click', () => {
        qstGenerator();
        colorGenerator();
        hideColors();
    })
}
restart();

//quite the game
function quit() {
    let quitBtn = document.querySelector('.quitButton');

    quitBtn.addEventListener('click', () => {
        introScreen.classList.remove('fadeOut');
        content.classList.remove('fadeIn');
    })
}
quit();





// let str = ['green','red','red'];
// let target = 'red'; 
// let position = 0;
// let result;
// let increment = 0;


// while (increment<str.length) {

//   let foundPosition = str.indexOf(target, position);

//   if (foundPosition != -1) {
//       result= 'correct';
//       console.log(increment)

//     }else {
//       result='wrong';
//       console.log('wronnnnnnnng' + increment)
//      console.log(result)
//      break;
//     }
  
//   increment++;

//   position = foundPosition + 1; 
// }
// console.log(result)