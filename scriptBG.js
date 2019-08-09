// YOU CALL THIS FIRST VARIABLE CSS SO THAT YOU KNOW THAT IS WHERE THE CSS INFORMATION GOES 
// AND THE H3 IS THE SPACE WHERE IT WLL GO INTO

var css= document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient")


// BY CREATING THIS FUNCTION YOU CAN JUST WRITE THIS 
// ONCE FOR BOTH COLORS AND THERE IS NO NEED TO REPEAT YOURSELF

function setGradient(){
    body.style.background = 
    "linear-gradient(to right, "
    +color1.value
    + "," 
    +color2.value
    +")";

    // THIS IS TO ADD THE CSS RGB INFORMATION TO THE PAGE
    css.textContent = body.style.background + ""; 
}
// YOU DON'T NEED TO ADD THE () BECAUSE YOU HAVE MADE A FUNCTION FOR IT AND THERE IS NO NEED TO CALL IT
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
   
                                                   