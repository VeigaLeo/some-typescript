class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("honk");
  }
}

const vehicle = new Vehicle("orange");

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  public drive(): void {
    console.log("drive");
  }
}

const cars = new Car(4, "red");

cars.drive();
