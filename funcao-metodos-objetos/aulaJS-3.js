// aula3

let hotel = new Object();

// Propriedades
hotel.name = 'Center';
hotel.rooms = 28;
hotel.booked = 25;

// Método
hotel.checkAvailibility = function () {
  return this.rooms - this.booked;
}

let hotelName = document.querySelector('.hotelName');
hotelName.textContent = hotel.name;

let hotelRooms = document.querySelector('.num');
console.log(hotelRooms);
hotelRooms.textContent = hotel.checkAvailibility();

