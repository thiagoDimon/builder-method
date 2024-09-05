import DiretorSanduiche from "./DiretorSanduiche";
import BuilderXisSalada from "./BuilderXisSalada";
import BuilderXisEgg from "./BuilderXisEgg";

let builderXisEgg = new BuilderXisEgg();
let builderXisSalada = new BuilderXisSalada();

console.log("=== Xis Salada Completo ===");
const diretorSanduiche = new DiretorSanduiche(builderXisSalada);
diretorSanduiche.criarXis();
const xisSalada = builderXisSalada.getGeradorSanduiche();
console.log(xisSalada.toString());

console.log("=== Xis Salada Sem Salada ===");
builderXisSalada = new BuilderXisSalada();
diretorSanduiche.setBuilder(builderXisSalada);
diretorSanduiche.criarXisSemSalada();
const xisSaladaSemSalada = builderXisSalada.getGeradorSanduiche();
console.log(xisSaladaSemSalada.toString());

console.log("=== Xis Egg Completo ===");
diretorSanduiche.setBuilder(builderXisEgg);
diretorSanduiche.criarXis();
const xisEgg = builderXisEgg.getGeradorSanduiche();
console.log(xisEgg.toString());

console.log("=== Xis Egg Sem Condimentos ===");
builderXisEgg = new BuilderXisEgg();
diretorSanduiche.setBuilder(builderXisEgg);
diretorSanduiche.criarXisSemCondimentos();
const xisEggSemCondimentos = builderXisEgg.getGeradorSanduiche();
console.log(xisEggSemCondimentos.toString());
