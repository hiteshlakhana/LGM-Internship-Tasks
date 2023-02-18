function valueButton(e){
    cform.display.value += e.value;
}

function Delete(){
    cform.display.value = null;
}

function Calculate(){
    cform.display.value = eval(cform.display.value)
}
