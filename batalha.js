function lutar(){
const classe = document.getElementById('classe').value;
const arma = document.getElementById ('arma').value.trim();
const log = document.getElementById('log');

if(!arma){
    log.innerHTML= '❌Por favor, selecione uma arma para lutar!';
    return;}

    const dado = Math.floor(Math.ramdom() * 20)+ 1;
    let resultado = `🎲 Dado: ${dado} | <strong>${classe}</strong> com <strong> ${arma}</strong>`;
log.innerHTML = resultado


switch(classe){
    case"guerreiro":
    if(arma.toLowerCase() === "espada" && dado>5){
        resultado += "<span class='sucesso'> SUCESSO: Voce decapitou o monstro com um golpe de espada </span>"
    }else if(dado<15){
        resultado += "<span class= 'sucesso'> VITÓRIA: Na froça bruta, Voce esmagou o seu inimigo </span>"
    }else{
        resultado += "<span classe = 'derrota'> DERROTA:O monstro ceifou sua vida: Voce morreu por hemorragia</span>"}
        break;
        case "mago":
            if(arma.toLowerCase() === "cajado" && dado> 8){
                resultado += "<span class= 'sucesso' SUCESSO: Voce incenerou  o monstro até a morte></span>"
            }else if(dado = 19){
                resultado +="<span class= 'sucesso' VITORIA: Voce acertou um ataque crítico e molestou o monstro></span>"
            }
}

 
}


