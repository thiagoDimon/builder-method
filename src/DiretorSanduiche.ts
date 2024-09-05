import BuilderSanduiche from "./BuilderSanduiche";

export default class DiretorSanduiche {
  private builderSanduiche: BuilderSanduiche;

  constructor(builderSanduiche: BuilderSanduiche) {
    this.builderSanduiche = builderSanduiche;
  }

  setBuilder(builderSanduiche: BuilderSanduiche) {
    this.builderSanduiche = builderSanduiche;
  }

  criarXis(): void {
    this.builderSanduiche.setPao();
    this.builderSanduiche.setCarne();
    this.builderSanduiche.setSalada();
    this.builderSanduiche.setCondimentos();
  }

  criarXisSemSalada(): void {
    this.builderSanduiche.setPao();
    this.builderSanduiche.setCarne();
    this.builderSanduiche.setCondimentos();
  }

  criarXisSemCondimentos(): void {
    this.builderSanduiche.setPao();
    this.builderSanduiche.setCarne();
    this.builderSanduiche.setSalada();
  }
}
