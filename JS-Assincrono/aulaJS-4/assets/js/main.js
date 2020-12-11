// aula 4

// XMLHttpRequest (GET) + Promises


const request = obj => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {
      if(xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  });

  // Metodo com callback
  // const xhr = new XMLHttpRequest();
  // xhr.open(obj.method, obj.url, true);
  // xhr.send();
  // xhr.addEventListener('load', () => {
  //   if(xhr.status >= 200 && xhr.status < 300) {
  //     obj.success(xhr.responseText);
  //   } else {
  //     obj.error(xhr.statusText);
  //   }
  // });

};


document.addEventListener('click', event => {
  const element = event.target;
  const tag = element.tagName.toLowerCase();

  if (tag === 'a') {
    event.preventDefault();
    carregaPagina(element);
  }

});


// function carregaPagina(element) {
async function carregaPagina(element) {
  const href = element.getAttribute('href');
  // metodo com callback
  // const objConfig = {
  //   method: 'GET',
  //   url: href,
  //   success(response) {
  //     carregaResultado(response);
  //   },
  //   error(error) {
  //     console.log(error);
  //   }
  // };

  const objConfig = {
    method: 'GET',
    url: href
  };

  // Com Promise
  // request(objConfig)
  //   .then(response => {
  //     carregaResultado(response);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   })

  try {
    const response = await request(objConfig);
    carregaResultado(response);
  } catch (error) {
    console.log(error);
  }

}


function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}

