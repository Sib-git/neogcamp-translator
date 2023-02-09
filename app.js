//alert("Hello! I'm alert");
//input
// var username = prompt("Give me username")

//processing
// var welcomeMessage= "this Script works! " + username;

//output

// alert(welcomeMessage); 

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");

    
console.log(txtInput)

function clickHandler(){
    
        console.log("clicked!");
       console.log("input ", txtInput.Value);
        
};

btnTranslate.addEventListener("click", clickHandler())
