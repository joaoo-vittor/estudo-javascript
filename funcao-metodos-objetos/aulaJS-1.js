// aula1

let msg = 'Sing up to receive .......'

function updateMessage() {
  const el = document.getElementById('message')
  console.log(el)
  el.textContent = msg
}

updateMessage()

function getArea(width, height) {
  return width * height
}

console.log(getArea(5, 8))

function calcArea(width, height) {
  let area = width * height
  return area
}

let one = calcArea(3, 5)
let two = calcArea(8, 5)

console.log(one)
console.log(two)

function getSize(width, height, depth) {
  let area = width * height
  let volume = width * height * depth
  let sizes = [area, volume]
  return sizes
}


let areaOne = getSize(3, 2, 3)[0]
let volumeOne = getSize(3, 2, 3)[1]

console.log('area', areaOne)
console.log('volume', volumeOne)

let iife = (function () {
  let width = 20
  let height = 5
  return width * height
}())


console.log('iife', iife)

