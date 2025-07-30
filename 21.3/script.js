// Criação do array vazio
let listaPessoas = [];

// Função para adicionar pessoa
function adicionarPessoa() {
  let nome = prompt("Digite o nome da pessoa:");
  if (nome) {
    listaPessoas.push(nome);
    atualizarLista();
  }
}

// Função para remover última pessoa
function removerPessoa() {
  if (listaPessoas.length > 0) {
    let removido = listaPessoas.pop();
    alert("Pessoa removida: " + removido);
    atualizarLista();
  } else {
    alert("A lista está vazia.");
  }
}

// Função para atualizar a div com a lista
function atualizarLista() {
  document.getElementById("lista").innerHTML = listaPessoas.join("<br>");
}
