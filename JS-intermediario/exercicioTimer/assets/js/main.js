(function () {
  
  const timer = document.querySelector(".timer");

  let seconds = 0;
  let time;

  function getTimerFromSeconds(seconds=0) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'GMT'
    });
  }

  function startTime() {
    time = setInterval(function () {
      seconds++;
      timer.innerHTML = getTimerFromSeconds(seconds);
    }, 1000);
  }

  document.addEventListener('click', function (e) {
    const element = e.target;

    if (element.classList.contains('bnt-start')) {
      timer.classList.remove('pause');
      clearInterval(time);
      startTime();
    }

    if (element.classList.contains('bnt-pause')) {
      clearInterval(time);
      timer.classList.add('pause');
    }

    if (element.classList.contains('bnt-restart')) {
      clearInterval(time);
      timer.classList.remove('pause');
      timer.innerHTML = '00:00:00';
      seconds = 0;
    }

  });

})();

