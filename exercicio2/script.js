let idade = Number(prompt("Quantos anos você tem?"))
let terminouOEnsinoMedio = confirm("Você concluiu o ensino médio?")
let isCursandoOutraFaculdade = confirm("NÃO está cursando alguma faculdade?")

//Maior de idade?
if(idade >= 18){
    console.log("A pessoa é maior de idade.")
}else{
	console.log("A pessoa é menor de idade.")
}
//Concluiu o ensino médio?
if(terminouOEnsinoMedio){
    console.log("Concluiu o ensino médio.")
}else{
    console.log("Não concluiu o ensino médio.")
}
//Faz faculdade?
if(isCursandoOutraFaculdade){
    console.log("Não está cursando uma faculdade.")
}else{
    console.log("Está cursando outra faculdade")
}
