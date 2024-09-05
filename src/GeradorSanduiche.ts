export default class GeradorSanduiche {
  protected pao: string = "";
  protected carne: string = "";
  protected salada: string[] = [];
  protected condimentos: string[] = [];

  setPao(pao: string) {
    this.pao = pao;
  }

  getPao(): string {
    return this.pao;
  }

  setCarne(carne: string) {
    this.carne = carne;
  }

  getCarne(): string {
    return this.carne;
  }

  setSalada(salada: string[]) {
    this.salada = salada;
  }

  getSalada(): string[] {
    return this.salada;
  }

  setCondimentos(condimentos: string[]) {
    this.condimentos = condimentos;
  }

  getCondimentos(): string[] {
    return this.condimentos;
  }

  toString(): string {
    return `
    Pão: ${this.pao}
    Carne: ${this.carne}
    Salada: ${this.salada.join(", ")}
    Condimentos: ${this.condimentos.join(", ")}
    `;
  }
}
