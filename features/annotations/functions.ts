const add = (a: number, b: number) => {
  return a + b;
};

// always better to use type annotiations on return
const subtract = (a: number, b: number): number => {
  return a - b;
};

// same with annon functions
function divide(a: number, b: number): number {
  return a / b;
}

const muplitply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

// destructuring example
const weather = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(date);
  console.log(weather);
};
weather(todaysWeather);
