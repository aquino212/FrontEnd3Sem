let frutasCitricas = ["Laranja", "Limão", "Abacaxi"];


console.log(frutasCitricas[0]);
console.log(frutasCitricas[1]);
console.log(frutasCitricas[2]);
frutasCitricas.shift();

let frutaRemovida = frutasCitricas.shift();
console.log(`Removemos a fruta: ${frutaRemovida}`)
console.log(frutasCitricas);

console.log(frutasCitricas[0]);
console.log(frutasCitricas[1]);
console.log(frutasCitricas[2]);