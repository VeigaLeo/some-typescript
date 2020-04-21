import { User } from "./User";
// import { Company } from "./Company";

const user = new User();
new google.maps.Map(document.getElementById("map"), {
  zoom: 3,
  center: {
    lat: user.location.lat,
    lng: user.location.lng,
  },
});
