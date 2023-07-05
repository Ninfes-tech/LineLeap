import {
  Fila
} from "./fila.js";

class Processo {
  constructor(tempoDeChegada, tempoExecucao, cor, prioridade) {
    this.tempoDeChegada = tempoDeChegada;
    this.tempoExecucao = tempoExecucao;
    this.cor = cor;
    this.prioridade = prioridade;
  }
}

export class RoundRobin {
  constructor() {
    this.fila = new Fila();
    this.quantum = 2;

  }

  adicionarProcesso(tempoDeChegada, tempoExecucaoMax, cor, prioridade) {
    const tempoExecucao = Math.ceil(Math.random() * tempoExecucaoMax);
    const processo = new Processo(tempoDeChegada, tempoExecucao, prioridade);
    this.fila.add(processo);


    // Atualizar a tabela de processos
    const tabelaProcessosElement = document.getElementById("tabela-processos");
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td class="processo ${cor}"></td>
      <td>${tempoDeChegada}</td>
      <td>${tempoExecucao}</td>
      <td>${prioridade}</td>
    `;
    tabelaProcessosElement.querySelector("tbody").appendChild(tr);

  }

  async executarRoundRobin() {
    const processosElement = document.getElementById("processos");
    const processosFinalizadosElement = document.getElementById("processos-finalizados");

    while (!this.fila.isEmpty()) {
      const processo = this.fila.pop();
      const div = document.createElement("div");
      div.classList.add("processo", `processo-${processo.tempoDeChegada}`);
      processosElement.appendChild(div);

      if (processo.tempoExecucao > this.quantum) {
        processo.tempoExecucao -= this.quantum;
        this.fila.add(processo);
      } else {
        const finalizadoDiv = document.createElement("div");
        finalizadoDiv.classList.add("processo", `processo-${processo.tempoDeChegada}`);
        processosFinalizadosElement.appendChild;
        finalizadoDiv.style.backgroundColor = processo.cor;
        processosFinalizadosElement.appendChild(finalizadoDiv);
      }
      await sleep(1000);
    }
  }
  
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}