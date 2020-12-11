export class Conta {
    nome: string;
    valorOriginal: number;
    valorCorrigido: number;
    dataVencimento: Date;
    dataPagamento: Date;
    qtdDiasAtraso: number;
    
    constructor(obj: any) {
      this.nome = obj.nome;
      this.valorOriginal = obj.valorOriginal;
      this.valorCorrigido = obj.valorCorrigido;
      this.dataVencimento = obj.dataVencimento;
      this.dataPagamento = obj.dataPagamento;
      this.qtdDiasAtraso = obj.qtdDiasAtraso;
    }
    
    static fromJSONArray(array: Array<Conta>): Conta[] {
      return array.map(obj => new Conta(obj));
    }
  
    static fromJSON(item: Object): Conta {
        return new Conta(item);
    }
  }