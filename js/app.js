var txtInput = document.querySelector("#txtinput");
var outputDiv = document.querySelector("#output");
var btnTranslate = document.querySelector("#btn-translate");
var serverURL="https://api.funtranslations.com/translate/wheel-of-time-old-tongue.json";
function getTranslationURL(input){
    return serverURL +"?" + "text=" + input
}


function clickHandler(){
    var inputTxt = txtInput.value;
    fetch(getTranslationURL(inputTxt))
    .then(response => response.json())
    .then(json => {
        var translatedTxt = json.contents.translated;
        outputDiv.innerText = translatedTxt;

    })

    
};
btnTranslate.addEventListener("click" , clickHandler)