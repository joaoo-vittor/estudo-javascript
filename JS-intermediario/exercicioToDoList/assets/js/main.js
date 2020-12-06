(function () {
  
  const inputTarefa = document.querySelector('.novaTarefa');
  const btnAddTarefa = document.querySelector('.btn-AddTarefa');
  const tarefas = document.querySelector('.tarefas');

  function criaLi() {
    const li = document.createElement('li');
    return li;
  }

  function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
  }

  function criaBotaoApagar(li) {
    li.innerHTML += ' ';
    
    const botaoApagar = document.createElement('button');

    botaoApagar.innerText = 'Apagar';

    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar Essa Tarefa!');

    li.appendChild(botaoApagar);

  }

  inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
      if (!inputTarefa.value) {
        return;
      }
      criaTarefa(inputTarefa.value);
    }
  });

  function criaTarefa(textoInput) {
    const li = criaLi();

    li.innerText = textoInput;

    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
  }
  
  btnAddTarefa.addEventListener('click', function (e) {
    
    if (!inputTarefa.value) {
      return;
    }
    
    criaTarefa(inputTarefa.value);

  });

  document.addEventListener('click', function (e) {
    const element = e.target;

    if (element.classList.contains('apagar')) {
      element.parentElement.remove();
      salvarTarefas();
    }

  })

  function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
      let tarefaTexto = tarefa.innerText;
      tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
      listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);

    localStorage.setItem('tarefas', tarefasJSON);
  }

  function pegarTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaTarefas = JSON.parse(tarefas);

    for (let tarefa of listaTarefas) {
      criaTarefa(tarefa);
    }

  }

  pegarTarefasSalvas();

})();
