// aula2

// O que é um objeto?

let hotel = {
  // PROPRIEDADES
  name: 'Garden',
  rooms: 100,
  booked: 25,
  gym: true,
  roomtypes: ['twin', 'double', 'suite'],
  // MÉTODOS
  checkAvailability : function() {
    return this.rooms - this.booked;
  }
}


/*
PROPRIEDADES: CHAVE                   VALOR
              name                    string
              rooms                   numero inteiro
              booked                  numero inteiro
              gym                     booleano
              roomTypes               array
MÉTODOS:      checkAvailability       funcao
*/

let hotelName1 = hotel.name;
let roomsFree = hotel.checkAvailability();

console.log(hotelName1);
console.log(roomsFree);

let hotelName2 = hotel['name'];

console.log(hotelName2);


let elName = document.querySelector('.hotelName');
elName.textContent = hotel.name

let elRooms = document.querySelector('.num');
elRooms.textContent = hotel.checkAvailability();

hotel.name = 'Center';

console.log(hotel.name);

