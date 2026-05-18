function lutar(){
const classe = document.getElementById('classe').value;
const arma = document.getElementById ('arma').value.trim();
const log = document.getElementById('log');

if(!arma){
    log.innerHTML= '❌Por favor, selecione uma arma para lutar!';
    return;}

    const dado = Math.floor(Math.ramdom() * 20)+ 1;
    let resultado = `🎲 Dado: ${dado} | <strong>${classe}</strong> com <strong> ${arma}</strong>`;
}
 