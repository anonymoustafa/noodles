const car = {
color: 'blue'
}
console.log(car.color) //'yellow'
const anotherCar = car
console.log(anotherCar.color) //'yellow'
anotherCar.color = 'yellow'
console.log(car.color) //'yellow'
