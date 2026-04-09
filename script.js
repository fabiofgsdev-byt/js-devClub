function sorteio(){
    const min = Math.ceil(document.getElementById("min").value);
    const max = Math.floor(document.getElementById("max").value);
    const resultado = Math.floor(Math.random() * (max - min + 1)) + min;

    

     console.log(min, max);
}