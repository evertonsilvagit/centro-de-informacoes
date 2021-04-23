
export class EntidadeModel {

  id: number | null;
  descricao: string;
  valor: number;

  constructor(id: number | null, descricao: string, valor: number) {
    this.id = id;
    this.descricao = descricao;
    this.valor = valor;
  }

}
