var btnTranslate = document.querySelector('#btnTranslate');
var inputArea = document.querySelector('#inputArea');
var outputArea = document.querySelector('#outputArea');

function handleTranslate(){
    var inputText = inputArea.value ;
    handleFetch(inputText);
}
var api="https://api.funtranslations.com/translate/minion.json"
function handleFetch(textInput){
    fetch(api+'?'+'text='+textInput)
        .then(res => res.json())
        .then(json=>{
            var translatedText = json.contents.translated;
            outputArea.innerText = translatedText;
        })
}


btnTranslate.addEventListener('click',handleTranslate);