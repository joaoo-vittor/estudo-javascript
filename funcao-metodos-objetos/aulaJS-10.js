// aula10

let originalNumber = 10.3515489;

let msg = '<h2>original number</h2><p>' + originalNumber + '</p>';
msg += '<h2>3 Decimal places</h2><p>' + originalNumber.toFixed(3) + '</p>';
msg += '<h2>3 Digits</h2><p>' + originalNumber.toPrecision(3) + '</p>';

let el = document.querySelector('.info');
el.innerHTML = msg;

