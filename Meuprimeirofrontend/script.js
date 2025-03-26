function adicionarTarefa() {
    let inputTarefa = document.getElementById("novaTarefa");
    let novaTarefa = inputTarefa.value.trim();
    
    if (novaTarefa === "") return;

    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []; 
    tarefas.push(novaTarefa);

    localStorage.setItem("tarefas", JSON.stringify(tarefas));

    inputTarefa.value = ""; 

    listarTarefas();
}

function listarTarefas() {
    let listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.innerHTML = "";

    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

    for (let i = 0; i < tarefas.length; i++) {
        let tarefa = tarefas[i];
        let listItem = document.createElement("li");
        listItem.innerHTML = tarefa + " ";
        listItem.appendChild(criarBotaoRemover(i));
        listaTarefas.appendChild(listItem);
    }
}

function removerTarefa(indice) {
    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    if (indice < 0 || indice >= tarefas.length) return; // Corrigido "length"

    tarefas.splice(indice, 1);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));

    listarTarefas();
}

function criarBotaoRemover(indice) {
    let botao = document.createElement("button");
    botao.textContent = "Remover";
    botao.addEventListener("click", () => removerTarefa(indice));
    return botao;
}

document.addEventListener("DOMContentLoaded", listarTarefas);
