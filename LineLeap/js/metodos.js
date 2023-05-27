class Processo {
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
  
  function estruturaFifo(fila) {
    while (!fila.isEmpty()) {
      const processo = fila.getNextProcesso();
      console.log("processo: " + processo.id)
      fila.removeProcesso(processo);
  
      // Espera por 2 segundos
      sleep(2000);
    }
  }
  function estruturaRoundRobin(fila) {
    // Definição do quantum de tempo
    const quantum = 2;
  
    // Execução dos processos na fila
    let time = 0;
    while (!fila.isEmpty()) {
      const processoAtual = fila.getNextProcesso();
      console.log(
        "Executando:" +
          processoAtual.id +
          " no tempo:" +
          time +
          " Tempo restante:" +
          processoAtual.getTempoRestante()
      );
  
      // Tempo do processo maior que o quantum
      if (processoAtual.getTempoRestante() > quantum ) {
        time += quantum;
        processoAtual.setTempoRestante(processoAtual.getTempoRestante() - quantum);
        fila.addProcesso(processoAtual);
      } else {
        time += processoAtual.getTempoRestante();
        
        console.log(
          "\n" +
            processoAtual.id +
            " terminado no tempo:" +
            time +
            " Tempo restante:" +
            processoAtual.getTempoRestante() +
            "\n" );
      } fila.removeProcesso(processoAtual);

    }
  
      // Espera por 1 segundo
      sleep(1000);
    }
  
    // outras funções relevantes
  
  
  
  // Função para esperar uma quantidade de milissegundos
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  class Fila {
    constructor() {
      this.fila = new Array(10);
      this.size = 0;
      this.head = 0;
      this.tail = 0;
    }
  
    // adiciona um processo na fila
    addProcesso(p) {
      if (this.size === this.fila.length) {
        throw new Error("Fila cheia");
      }
      this.fila[this.tail] = p;
      this.tail = (this.tail + 1) % this.fila.length;
      this.size++;
    }
  
    // remove o próximo processo da fila
    removeProcesso(p) {
        let index = -1;
        for (let i = 0; i < this.size; i++) {
          const j = (this.head + i) % this.fila.length;
          if (this.fila[j] === p) {
            index = j;
            break;
          }
        }
        if (index === -1) {
          return false;
        }
        for (let i = index; i < this.size - 1; i++) {
          this.fila[i] = this.fila[i + 1];
        }
        this.fila[this.head + this.size - 1] = null;
        this.tail = (this.tail - 1 + this.fila.length) % this.fila.length;
        this.size--;
        return true;
      }
      
  
    // verifica se a fila está vazia
    isEmpty() {
      return this.size === 0;
    }
  
    // retorna o próximo processo a ser executado
    getNextProcesso() {
      if (this.size === 0) {
        return null;
      }
      return this.fila[this.head];
    }
  }
  

  class Escalonador {
    constructor() {
      this.filaFifo = new Fila();
      this.filaRR = new Fila();
    }
  
    // adiciona um processo na fila Fifo
    addProcessoFifo(p) {
      this.filaFifo.addProcesso(p);
    }
  
    // adiciona um processo na fila RR
    addProcessoRR(p) {
      this.filaRR.addProcesso(p);
    }
  }
  module.exports = {
    Processo: Processo,
    Fila: Fila,
    estruturaFifo: estruturaFifo,
    estruturaRoundRobin: estruturaRoundRobin,
  };
  