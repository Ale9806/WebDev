
function Dice(){
    var Images       = document.querySelectorAll("img");           // Query all elements that have an image
    var limit        =Images.length -1;                            // Get length
    var numbers      = []                                          // Empty Array
    var winner       = "Player 2 Wins"                             // Create string for winner
    for (i=0; i <= limit;i++){
        var [ImageSource,number]  = ImageSourceGeneartor();        // Retrive a a random number and make it a  name
        var imageDom     = Images[i];                              // Get element in DOM
        numbers.push(number)                                       // Append to number array
        imageDom.setAttribute("src",ImageSource);                  // SET PROPERTY

    }  
    if (numbers[0] >numbers[1] ){
        var winner  = "Player 1 Wins"    
    }
    h1 = document.querySelector("h1")
    h1.innerHTML =  winner;
 
}

function ImageSourceGeneartor(){
    var randomNumber = Math.floor(Math.random()*6) +1;
    var ImageSource  = "images/dice" + randomNumber + ".png";
    return [ImageSource,randomNumber ]

}
