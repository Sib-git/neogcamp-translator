//alert("Hello! I'm alert");
//input
// var username = prompt("Give me username")

//processing
// var welcomeMessage= "this Script works! " + username;

//output

// alert(welcomeMessage); 

var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var outputDiv= document.querySelector("#output");


function clickHandler(){
    
        
outputDiv.innerText="asdfgfdsawerfg "+ textInput.value;
        
};

btnTranslate.addEventListener("click", clickHandler)
