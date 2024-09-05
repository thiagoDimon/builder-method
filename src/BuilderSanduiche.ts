import GeradorSanduiche from "./GeradorSanduiche";

export default interface BuilderSanduiche {
  getGeradorSanduiche(): GeradorSanduiche;
  setPao(): void;
  setCarne(): void;
  setSalada(): void;
  setCondimentos(): void;
}
