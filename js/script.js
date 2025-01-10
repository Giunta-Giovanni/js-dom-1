// richiamiamo i dati Html della: lampadina, del pulsante del suo stato

const lampadina = document.getElementById('light') //lampadina
const button = document.getElementById('btn') //pulsante
const statoPulsante = document.getElementById('stato') //stato


console.log(lampadina, button, stato);





button.addEventListener('click', function(){
    
    // salvo la variabile di luce accesa
    const lightOn = button.classList.contains("light-btn-on")

    // se dopo il click la luce è accesa
    if (lightOn) {
        button.classList.add("light-btn-off"); //aggiungo alle classi luce spenta
        button.classList.remove("light-btn-on"); //rimuovo dalle classi luce accesa
        lampadina.src = "./img/white_lamp.png"; //modifico la fonte immagine
        statoPulsante.innerText = "ACCENDI"; //modifico lo stato del pulsante
        
    // se dopo il click la luce è spenta
    }else{
        button.classList.add("light-btn-on") //aggiungo alle classi luce accesa
        button.classList.remove("light-btn-off") //rimuovo dalle classi luce accesa
        lampadina.src = "./img/yellow_lamp.png"; //modifico la fonte immagine
        statoPulsante.innerText = "SPEGNI"; //modifico lo stato del pulsante
    }
})

