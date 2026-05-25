function lutar() {

    const classe = document.getElementById('classe').value;
    const arma = document.getElementById('arma').value.trim();
    const log = document.getElementById('log');
    
    if (!arma) {
    log.innerHTML = "Você esqueceu de equipar uma arma!";
    return;
    }
    
    
    const dado = Math.floor(Math.random() * 20) + 1;
    let resultado = `🎲 Dado: ${dado} | <strong>${classe}</strong> com <strong>${arma}</strong><br><br>`;
    
    switch (classe) {
    case "Guerreiro":
    if (arma.toLowerCase() === "espada" && dado > 5) {
    resultado += "<span class='sucesso'>SUCESSO: Você decapitou o monstro com um golpe de espada!</span>";
    } else if (dado > 15) {
    resultado += "<span class='sucesso'>VITÓRIA: Na força bruta, você esmagou o inimigo com seu " + arma + "!</span>";
    } else {
    resultado += "<span class='derrota'>DERROTA: O monstro foi mais rápido. Seu " + arma + " não foi rapida o sufiente!</span>";
    }
    break;
    
    case "Mago":
    if (arma.toLowerCase() === "cajado" && dado > 8) {
    resultado += "<span class='critico'>CRÍTICO: Seu cajado brilhou e desintegrou o alvo!</span>";
    }
    else if (dado === 20) {
    resultado += "<span class='critico'>MILAGRE: Você deu uma cajadada física e nocauteou o monstro!</span>";}
    else {
    resultado += "<span class='derrota'>FALHA: Você errou as palavras mágicas e o feitiço explodiu na sua mão!</span>";}
    break;
    
    case "Arqueiro":
    if (arma.toLowerCase() === "arco" && dado > 10) {
    resultado += "<span class='sucesso'>PRECISÃO: Uma flecha certeira no olho do monstro!</span>";
    } 
    else if (dado > 18) {
    resultado += "<span class='sucesso'>SORTE: Você disparou sua " + arma + " e acertou sem nem olhar!</span>";}
    else {
    resultado += "<span class='derrota'>ERROU: O monstro desviou e agora está correndo atrás de você!</span>";}
    break;
    
    default:
    resultado += "Você ficou paralisado de medo.";
}
    
    
    log.innerHTML = resultado;
    }