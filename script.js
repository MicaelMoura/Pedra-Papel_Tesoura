var elementosPlayer = document.querySelectorAll('.player-options div img');
var opt = "";

function resetPlayer(){
    for(var i = 0; i < elementosPlayer.length; i++){
        elementosPlayer[i].style.removeProperty('opacity');
    }
}

function vezOponente(){
    let ran = Math.floor(Math.random()*3);

    var JogadaOponente = document.querySelectorAll('.enemy-options div');

    
}

for(var i = 0; i < elementosPlayer.length; i++){
    elementosPlayer[i].addEventListener('click', (t)=>{
        resetPlayer();
        t.target.style.opacity = 1;
        opt = t.target.getAttribute('opt');

        vezOponente();
    });
}