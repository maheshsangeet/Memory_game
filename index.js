let colorArray = ['red','green'];
let box = document.getElementsByClassName('box');
let introScreen = document.querySelector('.intro');
let content = document.querySelector('.content');
let modal = document.getElementById("popup1");
let selectedBox= [];
let getColor = [];                                 
// let cards = [...box];
// console.log(cards)



// ************* start the game ***********//

function startGame () {
    let playBtn = document.querySelector('.intro button');

    playBtn.addEventListener('click', () => {
        introScreen.classList.add('fadeOut');
        content.classList.add('fadeIn');

        colorGenerator()
        hideColors();
        
    })
}
startGame();


// ****** Random color generator ******//

function randomColor() {
    return colorArray[Math.floor(Math.random()*2)]; 
}



// ******* Question generator ********//

let question = document.getElementById('question');
function qstGenerator () {
    console.log(question)
    question.innerHTML = `Guess the color: &nbsp; ${randomColor()}`;

    question.style.color = `${randomColor()}`;

    
}



// ******** Box color generator *********//

function colorGenerator() {
    for (let i=0; i<box.length; i++) {
        box[i].style.background = colorArray[Math.floor(Math.random()*2)];
        getColor.push(box[i].style.background)                //pushing color into array getColor

        console.log(getColor)

    } 

}
  
// ************* Hiding boxes ***********//

function hideColors() {
    setTimeout(() => {
        for (let i=0; i<box.length; i++) {
            box[i].style.background = 'black';
           
        }
        qstGenerator();
        
    }, 2000)

    restartQuestion();

}



//******* restart question generator ********//
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
        e.target.style.opacity = '0';
        // console.log(e.target.innerHTML) 
        // let i=e.target.innerHTML;    
        // console.log(parseInt(i),typeof(i))
        console.log(getColor[parseInt(e.target.innerHTML)])
        selectedBox.push(getColor[parseInt(e.target.innerHTML)])
        console.log(selectedBox)

    }

}
selectionBoxes()


// ********* verifying ********* //
let result;
let verifyBtn = document.querySelector('.verifyButton');

function verifyValues() {
    //if we get randomColor() return value as red 
    // let clr = '';
    // if(value == 'red') {
    //     clr = 'green';
    // }else {
    //     clr = 'red'
    // }

    verifyBtn.addEventListener('click',()=>{
        let compareValue = selectedBox.includes(randomColor()); //iuse here clr value and verify
        console.log(randomColor())
        console.log(compareValue)
        if(compareValue){
            result = false;
            congratulations();
        }else {
            result = true;
            congratulations();
        }
    })

}
verifyValues();



// ********* Congratulations modal ********//

function congratulations() {
    let msg = document.querySelector('#msg');
     console.log(modal)
    modal.id="show";

    if (result){
        alert('success')    
        msg.innerHTML = 'Congratulations 🎉🎉';
    }else {
        alert('try next time')
        msg.innerHTML = 'Better Luck Next time';

    }

    closeModal();
    playAgain();

}



// ******** Restart the game *********//

function restart() { 
    let restartBtn = document.querySelector('.restartButton');
    restartBtn.addEventListener('click', () => {
        colorGenerator();
        // qstGenerator();
        hideColors();
    })
}
restart();


// ******** quite the game *********//

function quitGame() {
let quitbtn=document.getElementsByClassName('quitButton')
    quitbtn[0].addEventListener('click', () => {
        introScreen.classList.remove('fadeOut');
        content.classList.remove('fadeIn');
    })

    
}
quitGame();




// ********* Close modal *********//

function closeModal(){
    let closeicon = document.querySelector(".close");
    closeicon.addEventListener("click", function(){
        window.location.reload();
    });
}


// ********** Play again game ********//

function playAgain(){
    let playBtn = document.getElementById('play-again');
    playBtn.addEventListener('click',()=> {
        modal.id='';
        colorGenerator();
        hideColors();
        qstGenerator();
    })
}


