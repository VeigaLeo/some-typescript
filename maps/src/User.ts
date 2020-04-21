import faker from "faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "green";

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      //why does this lib return string to lat and lng??
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
    <div>
      <h1>User name: ${this.name}</h1>
    </div>`;
  }
}
