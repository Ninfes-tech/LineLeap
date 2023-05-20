class FilaRep {
  constructor() {
    this.fila = new Array(10);
    this.size = 0;
    this.head = 0;
    this.tail = 0;
  }

  addProcesso(p) {
    if (this.size === this.fila.length) {
      throw new Error("Fila cheia");
    }
    this.fila[this.tail] = p;
    this.tail = (this.tail + 1) % this.fila.length;
    this.size++;
  }

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

  isEmpty() {
    return this.size === 0;
  }

  getNextProcesso() {
    if (this.size === 0) {
      return null;
    }
    return this.fila[this.head];
  }

  estruturaFifo() {
    while (!this.isEmpty()) {
      const processo = this.getNextProcesso();
      console.log("Processo: " + processo.id);
      this.removeProcesso(processo);

      sleep(2000);
    }
  }

  estruturaRoundRobin() {
    const quantum = 2;
    let time = 0;
    while (!this.isEmpty()) {
      const processoAtual = this.getNextProcesso();
      console.log(
        "Executando: " +
          processoAtual.id +
          " no tempo: " +
          time +
          " Tempo restante: " +
          processoAtual.getTempoRestante()
      );

      if (processoAtual.getTempoRestante() > quantum) {
        time += quantum;
        processoAtual.setTempoRestante(processoAtual.getTempoRestante() - quantum);
        this.addProcesso(processoAtual);
      } else {
        time += processoAtual.getTempoRestante();
        console.log(
          processoAtual.id +
            " terminado no tempo: " +
            time +
            " Tempo restante: " +
            processoAtual.getTempoRestante() +
            "\n"
        );
        this.removeProcesso(processoAtual);
      }

      sleep(1000);
    }
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = FilaRep;
