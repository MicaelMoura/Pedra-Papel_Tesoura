var elementosPlayer = document.querySelectorAll('.player-options div img');
var opt = "";
var optInimigo = "";
var vencedor = "";

function resetPlayer(){
    for(var i = 0; i < elementosPlayer.length; i++){
        elementosPlayer[i].style.removeProperty('opacity');
    }
}

function validarVitoria(){
    if(opt == "pedra"){
        if(optInimigo == "opt-0"){
            vencedor = "empate";
        }
        else if(optInimigo == "opt-1"){
            vencedor = "inimigo";
        }
        else {
            vencedor = "player";
        }
    }
    else if(opt == "papel"){
        if(optInimigo == "opt-0"){
            vencedor = "player";
        }
        else if(optInimigo == "opt-1"){
            vencedor = "empate";
        }
        else {
            vencedor = "inimigo";
        }
    }
    else{
        if(optInimigo == "opt-0"){
            vencedor = "inimigo";
        }
        else if(optInimigo == "opt-1"){
            vencedor = "player";
        }
        else {
            vencedor = "empate";
        }
    }

    alert("Vencedor: "+vencedor);
}

function vezOponente(){
    let ran = Math.floor(Math.random()*3);
    optInimigo = 'opt-'+ran;
    let escolhaOp = document.querySelector('img[name='+optInimigo+']');

    for(i = 0; i < 3; i++){
        document.querySelector('img[name=opt-'+i+']').style.opacity = 0.3;
    }
    
    escolhaOp.style.opacity = 1;

    validarVitoria();
}

for(var i = 0; i < elementosPlayer.length; i++){
    elementosPlayer[i].addEventListener('click', (t)=>{
        resetPlayer();
        t.target.style.opacity = 1;
        opt = t.target.getAttribute('opt');

        vezOponente();
    });
}