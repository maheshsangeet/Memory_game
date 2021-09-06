let colorArray = ['red','green'];
const randomColor =()=> colorArray[Math.floor(Math.random()*2)];  
let box = document.getElementsByClassName('box');
let introScreen = document.querySelector('.intro');
let content = document.querySelector('.content');
let modal = document.getElementById("popup1");
// randomColor()
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


// ************* Question generator ***********//

let question = document.getElementById('question');
function qstGenerator () {

    console.log(question)
    question.innerHTML = `Guess the color: &nbsp; ${randomColor()}`;

    // question.style.color = `${randomColor()}`;

    // question.classList.add('fadeIn');
    // question.classList.add('fadeOut');
    

}




// ************* Box color generator ***********//

function colorGenerator() {
    for (let i=0; i<box.length; i++) {
        box[i].style.background = colorArray[Math.floor(Math.random()*2)];
        getColor.push(box[i].style.background)                    //pushing color into array getColor

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
}


// ************* Selection of boxes ***********//

function selectionBoxes() {
    for (let i=0; i<box.length; i++) {
        box[i].addEventListener('click',colorFade);

        console.log(box[i].innerHTML,getColor[box[i].innerText])
        // if(box[i]==getColor[i]){
        //     console.log(`selected:${box[]}`)
        //     alert('')
        // }
        if(getColor[box[i].innerHTML]==randomColor){
            console.log(`selected:${getColor[box[i]]} and generated:${randomColor}`)
            alert('correct guess')
        }
        
    }

    function colorFade(e) {
        e.target.style.opacity = '0';
        // console.log(e.target.innerHTML) 
        let i=e.target.innerText
        // console.log(parseInt(i),typeof(i))
        console.log(getColor[parseInt(e.target.innerHTML)])
        // if(getColor[parseInt(e.target.innerHTML)]==randomColor){
            // console.log(`selected:${getColor[parseInt(e.target.innerHTML)]} and generated:${randomColor}`)
            // alert('correct guess')
        // }


        let selectedBox = [];
        selectedBox.push(getColor[parseInt(e.target.innerHTML)]);
        console.log(selectedBox)


        // let verify = document.querySelector('.verifyButton');
        // verify.addEventListener('click',too)

        // function too() {
        //     if(selectedBox > 0) {

        //     }
        // }
        

    }
}
selectionBoxes()

// ************* Restart the game ***********//

function restart() { 
    let restartBtn = document.querySelector('.restartButton');
    restartBtn.addEventListener('click', () => {
        colorGenerator();
        // qstGenerator();
        hideColors();
    })
    // window.onload()
}
restart();


// ************* quite the game ***********//

function quitGame() {
let quitbtn=document.getElementsByClassName('quitButton')
    quitbtn[0].addEventListener('click', () => {
        introScreen.classList.remove('fadeOut');
        content.classList.remove('fadeIn');
    })

    // let quitBtn = document.querySelector('.quitButton');     index value is not required
    // let quitBtn = document.querySelectorAll('.quitButton');  index value is required
}
quitGame();



// ************* Congratulations modal ***********//

// function congratulations() {
//     let msg = document.querySelector('.popup h2');

//     modal.classList.add("show");

//     if (){
//         msg.innerHTML = 'Congratulations 🎉🎉';
//     }else {
//         msg.innerHTML = 'Better Luck Next time';

//     }


//     closeModal();
//     playAgain();

// }



// ************* Close modal ***********//

function closeModal(){
    let closeicon = document.querySelector(".close");

    closeicon.addEventListener("click", function(e){
        modal.classList.remove("show");
        introScreen.classList.remove('fadeOut');
        content.classList.remove('fadeIn');

    });
}

// ************* Play again game ***********//

function playAgain(){
    modal.classList.remove("show");
    qstGenerator();
    colorGenerator();
    hideColors();
}

