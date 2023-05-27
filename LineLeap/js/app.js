class Processo {
    constructor(id, tempoExecucao) {
        this.id = id;
        this.tempoExecucao = tempoExecucao;
    }
}

class Fila {
    constructor() {
        this.processos = [];
        this.processosFinalizados = [];
    }

    adicionarProcesso(processo) {
        this.processos.push(processo);
    }

    executarProcessos() {
        for (let i = 0; i < this.processos.length; i++) {
            const processo = this.processos[i];
            this.executarProcesso(processo);
        }
    }

    executarProcesso(processo) {
        const consoleElement = document.getElementById('console');
        const elementoProcesso = document.createElement('div');
        elementoProcesso.classList.add('processo');
        elementoProcesso.textContent = `P${processo.id}`;

        consoleElement.appendChild(elementoProcesso);

        setTimeout(() => {
            consoleElement.removeChild(elementoProcesso);
            this.processosFinalizados.push(processo);
            this.exibirProcessosFinalizados();
        }, processo.tempoExecucao * 1000);
    }

    exibirProcessosFinalizados() {
        const processoFinalizadoElement = document.getElementById('processo-finalizado');
        processoFinalizadoElement.innerHTML = '';

        for (let i = 0; i < this.processosFinalizados.length; i++) {
            const processo = this.processosFinalizados[i];
            const processoFinalizadoDiv = document.createElement('div');
            processoFinalizadoDiv.classList.add('processo-finalizado');
            processoFinalizadoDiv.textContent = `Processo ${processo.id} Finalizado`;
            processoFinalizadoElement.appendChild(processoFinalizadoDiv);
        }
    }
}

function adicionarProcessos() {
    const fila = new Fila();
    fila.adicionarProcesso(new Processo(1, 3));
    fila.adicionarProcesso(new Processo(2, 4));
    fila.adicionarProcesso(new Processo(3, 2));
    fila.adicionarProcesso(new Processo(4, 5));

    return fila;
}

document.getElementById('bloco2-button-azul').addEventListener('click', function() {
    const fila = adicionarProcessos();
    fila.executarProcessos();
});