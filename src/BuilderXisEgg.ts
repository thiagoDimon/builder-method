import BuilderSanduiche from "./BuilderSanduiche";
import GeradorSanduiche from "./GeradorSanduiche";

export default class BuilderXisEgg implements BuilderSanduiche {
  private geradorSanduiche: GeradorSanduiche;

  constructor() {
    this.geradorSanduiche = new GeradorSanduiche();
  }

  setPao(): void {
    this.geradorSanduiche.setPao("Hamburguer");
  }

  setCarne(): void {
    this.geradorSanduiche.setCarne("Boi");
  }

  setSalada(): void {
    this.geradorSanduiche.setSalada(["Alface", "Tomate, Repolho"]);
  }

  setCondimentos(): void {
    this.geradorSanduiche.setCondimentos([
      "Maionese",
      "Ketchup",
      "Ovo",
      "Molho de Pimenta",
    ]);
  }

  getGeradorSanduiche(): GeradorSanduiche {
    return this.geradorSanduiche;
  }
}
