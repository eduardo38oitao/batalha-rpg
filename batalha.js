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
    case"Guerreiro":
    if(arma.toLowerCase() === "Espada" && dado>5){
        resultado += "<span class='sucesso'> SUCESSO: Voce decapitou o monstro com um golpe de espada </span>";
    }else if(dado>=15){
        resultado += "<span class= 'sucesso'> VITÓRIA: Na froça bruta, Voce esmagou o seu inimigo "+arma+" </span>";
    }else{
        resultado += "<span classe = 'derrota'> DERROTA:O monstro ceifou sua vida: Voce morreu por hemorragia</span>";}
        break;
    case "Mago":
            if(arma.toLowerCase() === "Cajado" && dado> 8){
                resultado += "<span class= 'critico' VITORIA: Voce acertou um ataque crítico com o cajado e explodiu o monstro ></span>";
            }else if(dado >=18){
                resultado += "<span class= 'critico' SUCESSO: Voce usou"+arma+"para matar o monstro></span>";
            }else{
                resultado +="<span class 'derrota' DERROTA: Voce demorou demais para usar "+arma+" e morreu></span>"; }
                break;
    case "Arqueiro":
        if(arma.toLowerCase()=== "Arco"&& dado>10){
            resultado +="<span class='sucesso' VITORIA: Voce matou o monstro com com apenas uma flexa ></span>";
        }else if(dado>=17){
            resultado +="<span class='win' VITORIA: Voce matou o monstro humilhantemente com "+arma+"></span>";
        }else{
            resultado +="<span class= 'derrota' DERROTA: O inimigo desviu do seus ataque e o matou></span>"; }
            break;

            default:
            resultado += "Voce ficou paralisado de medo";
        }
        log.innerHTML = resultado;
 
}


