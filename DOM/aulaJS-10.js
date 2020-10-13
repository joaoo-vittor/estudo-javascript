// Aula 10

const firstItem = document.getElementById('one');

// se innerHTML for usado para adicionar conteúdo
// que os usuários vriaram a uma página, eles podem 
// adicionar conteúdo malicioso

let itemContent = firstItem.innerHTML;

firstItem.innerHTML = '<a href="#" target="_blanck">' + itemContent + '</a>'

