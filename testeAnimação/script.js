document.getElementById("startButton").addEventListener("click", startExecution);

function startExecution() {
  var processes = [
    { name: "Processo 1", color: "red" },
    { name: "Processo 2", color: "blue" },
    { name: "Processo 3", color: "green" },
    { name: "Processo 4", color: "yellow" },
    { name: "Processo 5", color: "purple" }
  ];

  // Função para simular a execução de um processo
  function executeProcess(process) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(process);
      }, 1000);
    });
  }

  // Função para executar os processos em ordem da fila
  async function executeProcesses() {
    for (var i = 0; i < processes.length; i++) {
      var process = processes[i];
      await executeProcess(process);
      displayExecutionResult(process);
    }
  }

  // Função para exibir o resultado da execução de um processo
  function displayExecutionResult(result) {
    var square = document.createElement("div");
    square.className = "processSquare";
    square.style.backgroundColor = result.color;
    document.getElementById("processesContainer").appendChild(square);
  }

  executeProcesses();
}
