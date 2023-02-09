//alert("Hello! I'm alert");
//input
// var username = prompt("Give me username")

//processing
// var welcomeMessage= "this Script works! " + username;

//output

// alert(welcomeMessage); 

var btnTranslate = document.querySelector("#btn-translate");

btnTranslate.addEventListener("click", clickHandler())
    
function clickHandler(){
    return function clickEventHandler(){
        console.log("clicked!");
    }
}
