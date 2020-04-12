const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// alias - good practice
type Drink = [string, boolean, number];

// tuples (not very useful, but we might use em) representes a specific record inside an application
const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["brown", true, 0];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsePower: 400,
  weight: 3354,
};
