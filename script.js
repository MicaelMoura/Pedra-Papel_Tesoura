var elementosPlayer = document.querySelectorAll('.player-options div img');
var opt = "";

function resetPlayer(){
    for(var i = 0; i < elementosPlayer.length; i++){
        elementosPlayer[i].style.removeProperty('opacity');
    }
}

function vezOponente(){
    let ran = Math.floor(Math.random()*3);

    let escolhaOp = document.querySelector('img[name=opt-'+ran+']');
    
    escolhaOp.style.opacity = 1;
}

for(var i = 0; i < elementosPlayer.length; i++){
    elementosPlayer[i].addEventListener('click', (t)=>{
        resetPlayer();
        t.target.style.opacity = 1;
        opt = t.target.getAttribute('opt');

        vezOponente();
    });
}