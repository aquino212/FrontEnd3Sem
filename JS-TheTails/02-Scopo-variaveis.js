let nome = "Ivan";
let sobrenome = "Aquino";
{
    var sobrenome = "Aquino da Silva";
    console.log(`${nome} ${sobrenome}!`);
}

console.log(`${nome} ${sobrenome}!`);

console.log();
console.log();

const nomes = ["Ivan", "Marcos", "Arthur"];
for (var i = 0; i < nomes.length; i++) {
    console.log(`Nomes ${i}: ${nomes[i]}`);
}

console.log(i);