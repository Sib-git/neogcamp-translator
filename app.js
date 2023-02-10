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

//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
 var serverURL ="https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
 return serverURL + "?" + "text=" +text
} 

function errorHandler(error){
        consol.log("error occured", error);
        
}
function clickHandler(){
    
        
     //outputDiv.innerText="asdfgfdsawerfg "+ textInput.value;
     var inputText = textInput.value;

     fetch(getTranslationURL(inputText))
     .then(response => response.json())
     .then(json => {
        var translateText = json.contents.translated;
        outputDiv.innerText = translateText;
     })
     .catch(errorHandler)   
};

btnTranslate.addEventListener("click", clickHandler)


