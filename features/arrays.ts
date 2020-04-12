const carMakers = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

// Use type annotations when initalizing an empty array
const carsByMake: string[][] = [];

// Help with inteference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);

// Help with 'map' or 'reduce'
carMakers.map((car: string): string => {
  return car;
});

// Flexible type
const importantDates: (Date | string)[] = [new Date()];
importantDates.push("2020-04-12");
