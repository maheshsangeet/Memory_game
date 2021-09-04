let colorArray = ['red','green'];
let randomColor = colorArray[Math.floor(Math.random()*2)];
let box = document.getElementsByClassName('box');
let getColor = [];                                 


// question generator
let question = document.getElementById('question');
function qstGenerator () {
    question.innerHTML = `Guess the color: ${randomColor}`;
}
qstGenerator();



// Box color generator
function colorGenerator() {
    for (let i=0; i<box.length; i++) {
        box[i].style.background = colorArray[Math.floor(Math.random()*2)];
        getColor.push(box[i].style.background)                    //pushing color into array getColor

        console.log(getColor)

    } 
}
colorGenerator()
  

// hiding boxes
function hideColors() {
    setTimeout(() => {
        for (let i=0; i<box.length; i++) {
            box[i].style.background = 'black';
        }
        
    }, 2000

    )
}
hideColors();


//selection of boxes
function selectionBoxes() {
    for (let i=0; i<box.length; i++) {
        box[i].addEventListener('click',colorFade);
        
    }

    function colorFade(e) {
        e.target.style.opacity = '0';
        // alert(e)
        console.log(e.target)

    }
}
selectionBoxes()


//verifying
// function verify() {
//     if () {

//     }
// }





// getColor.push(box[i].style.background)                    //pushing color into array getColor
        // console.log(getColor)




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