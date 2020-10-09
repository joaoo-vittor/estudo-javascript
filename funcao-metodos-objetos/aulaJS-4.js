// aula4

function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function () {
    return this.rooms - this.booked;
  }
}

// Notação do construtor
let centerHotel = new Hotel('Center', 40, 25);
let gardenHotel = new Hotel('Garden', 120, 77);

let details1 = centerHotel.name + ' rooms: ';
    details1 += centerHotel.checkAvailability();

let elHotel1 = document.querySelector('.hotel1');
elHotel1.textContent = details1;

let details2 = gardenHotel.name + ' rooms: ';
    details2 += gardenHotel.checkAvailability();

let elHotel2 = document.querySelector('.hotel2');
elHotel2.textContent = details2;
