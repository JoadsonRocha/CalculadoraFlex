/**
 * Aula de JavaScript - calculadora de combustível
 * @author - Joadson Rocha
 */

var etanol, gasolina
function calcular() {
    etanol = parseFloat(formtxt.txte.value.replace(",","."))
    gasolina = parseFloat(formtxt.txtg.value.replace(",","."))
    if (etanol < 0.7 * gasolina){
        //Verdadeiro
        document.querySelector('img#status').src="etanol.png"
    } else {
        //Falso
        document.querySelector('img#status').src="gasolina.png"
    }
}
function limpar() {
    document.querySelector('img#status').src="neutro.png"   
}