const colorArray = ['red','green'];
const question = document.getElementById('question');
const box = document.getElementsByClassName('box');
const modal = document.getElementById("popup1");

let selectedBox= [];
let getColor = [];                                 


// ************* start the game ***********//

function startGame () {
    const introScreen = document.querySelector('.intro');
    const playBtn = document.querySelector('.intro button');
    const content = document.querySelector('.content');


    playBtn.addEventListener('click', () => {
        introScreen.classList.add('fadeOut');
        content.classList.add('fadeIn');

        colorGenerator()
        hideColors();
    })
}
startGame();


// ****** Random color generator ******//

let randomColor = '';
function randClr() {
    randomColor = colorArray[Math.floor(Math.random()*2)]; 
}



// ******* Question generator ********//

function questionGenerator () {
    randClr()
    question.innerHTML = `Guess the color: &nbsp; ${randomColor}`;
    question.style.color = `${randomColor}`;
    
}




// ******** Box color generator *********//

function colorGenerator() {
    for (let i=0; i<box.length; i++) {
        box[i].style.background = colorArray[Math.floor(Math.random()*2)];
        getColor.push(box[i].style.background);            

        // console.log(getColor)
    } 

}
  
// ************* Hiding boxes ***********//

function hideColors() {
    setTimeout(() => {
        for (let i=0; i<box.length; i++) {
            box[i].style.background = 'black';
        }
        questionGenerator();
        
    }, 2000)

    restartQuestion();
}



//******* Question generator for restart button ********//

function restartQuestion () {
    if (question.style.display !== "none") {
        question.style.display = "none";
    
        setTimeout(()=>{
                question.style.display = "block";

        },2000)
    } else {
        question.style.display = "none";
        
        setTimeout(()=>{
        question.style.display = "block";

        },2000)
    }
}



// ******** Selection of boxes ********//

function selectionBoxes() {
    for (let i=0; i<box.length; i++) {
        box[i].addEventListener('click',colorFade); 
    }


    function colorFade(e) {
        e.target.style.visibility = 'hidden';
        // console.log(getColor[parseInt(e.target.dataset.name)])
        selectedBox.push(getColor[parseInt(e.target.dataset.name)]);

        // console.log(selectedBox)
    }

}
selectionBoxes()


// ********* verifying ********* //

let result = '';
function verifyValues() {
    const verifyBtn = document.querySelector('.verifyButton');
    
    // setTimeout(()=> console.log(randomColor),4000)       
    verifyBtn.addEventListener('click',()=>{

        let guess = 0;
        for(let i=0;i<getColor.length;i++){
            if(getColor[i]== randomColor){
            guess++;
            }
        }
        if(guess == selectedBox.length || guess < selectedBox.length) {

            let clr = '';
            if(randomColor === 'red') {
                clr = 'green';
            }else {
                clr = 'red'
            } 


            let compareValue= '';
            for (let i=0; i<selectedBox.length; i++) {
                if (selectedBox[i] === clr) {
                    compareValue = false;
                    break;
                }else {
                    compareValue = true;
                }
            }
            

            if(compareValue){
                result = true;
                congratulations();
            }else {
                console.log('succes shold show')
                result = false;
                congratulations();
            }

        }else{
            alert('Select some more boxes')
        }


        
    })

}
verifyValues();



// ********* Congratulations modal ********//

function congratulations() {
    const msg = document.querySelector('#msg');
    modal.id="show";
 
    if (result){
        msg.innerHTML = 'Congratulations 🎉🎉';
    }else {
        msg.innerHTML = 'Better Luck Next time';

    }

    closeModal();
    playAgain();

}



// ******** Restart the game *********//

function restart() { 
    const restartBtn = document.querySelector('.restartButton');

    restartBtn.addEventListener('click', () => {

        for (let i=0; i<box.length;i++){
            box[i].style.visibility='visible';
        }

        selectedBox  = [];
        getColor=[];
        colorGenerator();
        hideColors();
    })
}
restart();




// ******** quite the game *********//

function quitGame() {
    const quitbtn=document.getElementsByClassName('quitButton');

    quitbtn[0].addEventListener('click', () => {
        window.location.reload();
    })

}
quitGame();




// ********* Close modal *********//

function closeModal(){
    const closeIcon = document.querySelector(".close");

    closeIcon.addEventListener("click", () => {
        window.location.reload();
    });
}



// ********** Play again game ********//

function playAgain(){
    const playAgainButton = document.getElementById('play-again');

    playAgainButton.addEventListener('click',()=> {
        modal.id='';

        for (let i=0; i<box.length;i++){
            box[i].style.visibility='visible';
        }
        selectedBox  = [];
        getColor=[];
        colorGenerator();
        hideColors();
    })
}


