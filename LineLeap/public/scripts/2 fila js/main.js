import {
  RoundRobin
} from "./RoundRobin.js";
import {
  FIFO
} from "./fifo.js";

////duas RR
document.getElementById("btn-round-robin").addEventListener("click", async () => {

  document.getElementById("btn-fifo").disabled = true;
  document.getElementById("btn-fifo-rr").disabled = true;
  document.getElementById("btn-round-robin").disabled = true;

  const tabelaProcessosElement = document.getElementById("tabela-processos");
  const tbody = tabelaProcessosElement.querySelector("tbody");
  tbody.innerHTML = ""; // Remove todo o conteúdo da tabela

  const roundRobin1 = new RoundRobin(2);

  roundRobin1.adicionarProcesso(1, 10, "processo-1", 1);
  roundRobin1.adicionarProcesso(2, 4, 'processo-2', 2);
  roundRobin1.adicionarProcesso(3, 6, 'processo-3', 3);
  roundRobin1.adicionarProcesso(4, 5, 'processo-4', 4);
  roundRobin1.adicionarProcesso(5, 8, 'processo-5', 5);

  const roundRobin2 = new RoundRobin(2);
  roundRobin2.adicionarProcesso(6, 10, 'processo-6', 1);
  roundRobin2.adicionarProcesso(7, 4, 'processo-7',2);
  roundRobin2.adicionarProcesso(8, 6, 'processo-8', 3);
  roundRobin2.adicionarProcesso(9, 5, 'processo-9', 4);
  roundRobin2.adicionarProcesso(10, 9, 'processo-10', 5);

  const processosElement1 = document.getElementById("processos");
  const processosFinalizadosElement1 = document.getElementById("processos-finalizados");
  const processosElement2 = document.getElementById("processos");
  const  processosFinalizadosElement2 = document.getElementById("processos-finalizados");

  processosElement1.innerHTML = "";
  processosFinalizadosElement1.innerHTML = "";
  processosElement2.innerHTML = "";
  processosFinalizadosElement2.innerHTML = "";

 
  await roundRobin1.executarRoundRobin();
  await roundRobin2.executarRoundRobin();

  document.getElementById("btn-fifo").disabled = false;
  document.getElementById("btn-fifo-rr").disabled = false;
  document.getElementById("btn-round-robin").disabled = false;

});

// 2 FIFO
document.getElementById("btn-fifo").addEventListener("click", async () => {
  document.getElementById("btn-fifo").disabled = true;
  document.getElementById("btn-fifo-rr").disabled = true;
  document.getElementById("btn-round-robin").disabled = true;
  document.getElementById("btn-1fifo-2rr").disabled = true;
  document.getElementById("btn-2fifo-1rr").disabled = true;

  const tabelaProcessosElement = document.getElementById("tabela-processos");
  const tbody = tabelaProcessosElement.querySelector("tbody");
  tbody.innerHTML = ""; // Remove todo o conteúdo da tabela

  const fifo = new FIFO();
  fifo.adicionarProcesso(1, 10, "processo-1", 1);
  fifo.adicionarProcesso(2, 4, "processo-2", 2);
  fifo.adicionarProcesso(3, 6, "processo-3", 3);
  fifo.adicionarProcesso(4, 5, 'processo-4', 4);
  fifo.adicionarProcesso(5, 10, 'processo-5', 5);
  fifo.adicionarProcesso(6, 8, 'processo-6', 1);
  fifo.adicionarProcesso(7, 4, 'processo-7', 2);
  fifo.adicionarProcesso(8, 6, 'processo-8', 3);
  fifo.adicionarProcesso(9, 5, 'processo-9', 4);
  fifo.adicionarProcesso(10, 10, 'processo-10', 5);

  const processosElement3 = document.getElementById("processos");
  const processosFinalizadosElement3 = document.getElementById("processos-finalizados");

  processosElement3.innerHTML = "";
  processosFinalizadosElement3.innerHTML = "";

  await fifo.executar();

  document.getElementById("btn-fifo").disabled = false;
  document.getElementById("btn-fifo-rr").disabled = false;
  document.getElementById("btn-round-robin").disabled = false;
  document.getElementById("btn-1fifo-2rr").disabled = false;
  document.getElementById("btn-2fifo-1rr").disabled = false;
});

///1 RR E OUTRA FIFO 
document.getElementById("btn-fifo-rr").addEventListener("click", async () => {
  document.getElementById("btn-fifo").disabled = true;
  document.getElementById("btn-fifo-rr").disabled = true;
  document.getElementById("btn-round-robin").disabled = true;
  document.getElementById("btn-1fifo-2rr").disabled = true;
  document.getElementById("btn-2fifo-1rr").disabled = true;

  const tabelaProcessosElement = document.getElementById("tabela-processos");
  const tbody = tabelaProcessosElement.querySelector("tbody");
  tbody.innerHTML = ""; // Remove todo o conteúdo da tabela

  const roundRobin1 = new RoundRobin(2);

  roundRobin1.adicionarProcesso(1, 10, "processo-1", 1);
  roundRobin1.adicionarProcesso(2, 4, 'processo-2', 2);
  roundRobin1.adicionarProcesso(3, 6, 'processo-3', 3);
  roundRobin1.adicionarProcesso(4, 5, 'processo-4', 4);
  roundRobin1.adicionarProcesso(5, 10, 'processo-5', 5);

  const fifo = new FIFO();
  fifo.adicionarProcesso(6, 7, "processo-6", 1);
  fifo.adicionarProcesso(7, 4, "processo-7", 2);
  fifo.adicionarProcesso(8, 6, "processo-8", 3);
  fifo.adicionarProcesso(9, 5, 'processo-9', 4);
  fifo.adicionarProcesso(10, 9, 'processo-10', 5);

  const processosElement3 = document.getElementById("processos");
  const processosFinalizadosElement3 = document.getElementById("processos-finalizados");

  processosElement3.innerHTML = "";
  processosFinalizadosElement3.innerHTML = "";
  
  await roundRobin1.executarRoundRobin();
  await fifo.executar();

  document.getElementById("btn-fifo").disabled = false;
  document.getElementById("btn-fifo-rr").disabled = false;
  document.getElementById("btn-round-robin").disabled = false;
  document.getElementById("btn-1fifo-2rr").disabled = false;
  document.getElementById("btn-2fifo-1rr").disabled = false;
});

//2 fifo e 1 rr
document.getElementById("btn-2fifo-1rr").addEventListener("click", async () => {

  document.getElementById("btn-fifo").disabled = true;
  document.getElementById("btn-fifo-rr").disabled = true;
  document.getElementById("btn-round-robin").disabled = true;
  document.getElementById("btn-1fifo-2rr").disabled = true;
  document.getElementById("btn-2fifo-1rr").disabled = true;

  const tabelaProcessosElement = document.getElementById("tabela-processos");
  const tbody = tabelaProcessosElement.querySelector("tbody");
  tbody.innerHTML = ""; // Remove todo o conteúdo da tabela

  const fifo1 = new FIFO();
  fifo1.adicionarProcesso(1, 10, "processo-1", 1);
  fifo1.adicionarProcesso(2, 4, "processo-2", 2);
  fifo1.adicionarProcesso(3, 6, "processo-3", 3);
  fifo1.adicionarProcesso(4, 5, 'processo-4', 4);
  fifo1.adicionarProcesso(5, 10, 'processo-5', 5);

  const fifo2 = new FIFO();
  fifo2.adicionarProcesso(6, 7, "processo-6", 1);
  fifo2.adicionarProcesso(7, 4, "processo-7", 2);
  fifo2.adicionarProcesso(8, 6, "processo-8", 3);
  fifo2.adicionarProcesso(9, 5, 'processo-9', 4);
  fifo2.adicionarProcesso(10, 9, 'processo-10', 5);
  

  const roundRobin1 = new RoundRobin(2);
  roundRobin1.adicionarProcesso(11, 10, 'processo-11', 1);
  roundRobin1.adicionarProcesso(12, 4, 'processo-12',2);
  roundRobin1.adicionarProcesso(13, 6, 'processo-13', 3);
  roundRobin1.adicionarProcesso(14, 5, 'processo-14', 4);
  roundRobin1.adicionarProcesso(15, 9, 'processo-15', 5);


  const processosElement1 = document.getElementById("processos");
  const processosFinalizadosElement1 = document.getElementById("processos-finalizados");

  processosElement1.innerHTML = "";
  processosFinalizadosElement1.innerHTML = "";


  await fifo1.executar();
  await fifo2.executar();
  await roundRobin1.executarRoundRobin();

  document.getElementById("btn-fifo").disabled = false;
  document.getElementById("btn-fifo-rr").disabled = false;
  document.getElementById("btn-round-robin").disabled = false;
  document.getElementById("btn-1fifo-2rr").disabled = false;
  document.getElementById("btn-2fifo-1rr").disabled = false;

});

///1 fifo e 2 rr

document.getElementById("btn-1fifo-2rr").addEventListener("click", async () => {

  document.getElementById("btn-fifo").disabled = true;
  document.getElementById("btn-fifo-rr").disabled = true;
  document.getElementById("btn-round-robin").disabled = true;
  document.getElementById("btn-1fifo-2rr").disabled = true;
  document.getElementById("btn-2fifo-1rr").disabled = true;

  const tabelaProcessosElement = document.getElementById("tabela-processos");
  const tbody = tabelaProcessosElement.querySelector("tbody");
  tbody.innerHTML = ""; // Remove todo o conteúdo da tabela

  const roundRobin1 = new RoundRobin(2);

  roundRobin1.adicionarProcesso(1, 10, "processo-1", 1);
  roundRobin1.adicionarProcesso(2, 4, 'processo-2', 2);
  roundRobin1.adicionarProcesso(3, 6, 'processo-3', 3);
  roundRobin1.adicionarProcesso(4, 5, 'processo-4', 4);
  roundRobin1.adicionarProcesso(5, 8, 'processo-5', 5);

  const roundRobin2 = new RoundRobin(2);
  roundRobin2.adicionarProcesso(6, 10, 'processo-6', 1);
  roundRobin2.adicionarProcesso(7, 4, 'processo-7',2);
  roundRobin2.adicionarProcesso(8, 6, 'processo-8', 3);
  roundRobin2.adicionarProcesso(9, 5, 'processo-9', 4);
  roundRobin2.adicionarProcesso(10, 9, 'processo-10', 5);

  const fifo = new FIFO();
  fifo.adicionarProcesso(11, 7, "processo-11", 1);
  fifo.adicionarProcesso(12, 4, "processo-12", 2);
  fifo.adicionarProcesso(13, 6, "processo-13", 3);
  fifo.adicionarProcesso(14, 5, 'processo-14', 4);
  fifo.adicionarProcesso(15, 9, 'processo-15', 5);

  const processosElement1 = document.getElementById("processos");
  const processosFinalizadosElement1 = document.getElementById("processos-finalizados");
  const processosElement2 = document.getElementById("processos");
  const  processosFinalizadosElement2 = document.getElementById("processos-finalizados");
  const processosElement3 = document.getElementById("processos");
  const  processosFinalizadosElement3 = document.getElementById("processos-finalizados");

  processosElement1.innerHTML = "";
  processosFinalizadosElement1.innerHTML = "";
  processosElement2.innerHTML = "";
  processosFinalizadosElement2.innerHTML = "";
  processosElement3.innerHTML = "";
  processosFinalizadosElement3.innerHTML = "";

  
  await roundRobin1.executarRoundRobin();
  await roundRobin2.executarRoundRobin();
  await fifo.executar();

  document.getElementById("btn-fifo").disabled = false;
  document.getElementById("btn-fifo-rr").disabled = false;
  document.getElementById("btn-round-robin").disabled = false;
  document.getElementById("btn-1fifo-2rr").disabled = false;
  document.getElementById("btn-2fifo-1rr").disabled = false;

});