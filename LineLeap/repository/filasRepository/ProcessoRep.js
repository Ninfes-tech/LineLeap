class ProcessoRep {
    constructor(id, tempoChegada, tempoExecucao, prioridade) {
      this.id = id;
      this.tempoChegada = tempoChegada;
      this.tempoExecucao = tempoExecucao;
      this.tempoRestante = tempoExecucao;
      this.prioridade = prioridade;
    }
  
    getTempoRestante() {
      return this.tempoRestante;
    }
  
    setTempoRestante(tempoRestante) {
      this.tempoRestante = tempoRestante;
    }
  }

  module.exports = ProcessoRep;