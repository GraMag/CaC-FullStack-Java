function multiply(num){
    document.write(`<br><b>La tabla del ${num}</b><br>`);
    for(i = 1; i < 10; i++){
        document.write(i + " x " + num + ": " + i*num + "<br>") ;
    }
}

for (let i = 11; i >= 9; i--) {
    multiply(i);
}