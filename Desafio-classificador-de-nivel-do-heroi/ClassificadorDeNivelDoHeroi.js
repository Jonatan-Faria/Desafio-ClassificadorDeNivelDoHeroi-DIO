NomeHeroi = "Medroso"
let XPHeroi = 7231
let Rank

if(XPHeroi < 1000){
	Rank = "Ferro"
}else if(XPHeroi >= 1001 && XPHeroi <= 2000){
	Rank = "Bronze"
}else if(XPHeroi >= 2001 && XPHeroi <= 5000){
	Rank = "Prata"
}else if(XPHeroi >= 5001 && XPHeroi <= 7000){
	Rank = "Ouro"
}else if(XPHeroi >= 7001 && XPHeroi <= 8000){
	Rank = "Platina"
    }else if(XPHeroi >= 8001 && XPHeroi <= 9000){
	Rank = "Platina"
}else if(XPHeroi >= 8001 && XPHeroi <= 10000){
	Rank = "Ascendente"
}else{
	Rank = "Radiante"
}

console.log("O destemido heroi de nome: " + NomeHeroi + " está no nível " +  Rank + ", buscando desafios cada vez maiores.")