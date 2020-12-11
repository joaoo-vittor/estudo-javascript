// aula 5

// Fetch API (GET)

// fetch('./pagina1.html')
//   .then(response => {
//     if (response.status !== 200) {
//       throw new Error('ERRO 404');
//     }
//     return response.text();
//   })
//   .then(html => {
//     console.log(html);
//   })
//   .catch(error => {
//     console.error(error);
//   })


document.addEventListener('click', event => {
  const element = event.target;
  const tag = element.tagName.toLowerCase();

  if (tag === 'a') {
    event.preventDefault();
    carregaPagina(element);
  }

});


async function carregaPagina(element) {
  try {
    const href = element.getAttribute('href');
    const response = await fetch(href);

    if(response.status !== 200) {
      throw new Error('ERRO 404');
    }

    const html = await response.text();
    carregaResultado(html)
  } catch (error) {
    console.error(error);
  }


  // fetch(href)
  //   .then(response => {
  //     if(response.status !== 200) {
  //       throw new Error('ERRO 404');
  //     }
  //     return response.text();
  //   })
  //   .then(html => {
  //     carregaResultado(html);
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   })
}


function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}

