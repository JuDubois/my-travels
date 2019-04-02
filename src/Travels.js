import React from "react";
import Travel from "./Travel";

const travels = [
  {
    destination: "Hobbiton",
    country: "New Zealand",
    distance: "19 167 km",
    photo: "https://i1.wp.com/have-clothes-will-travel.com/wp-content/uploads/2017/05/IMG_4659.jpg?resize=1020%2C680&ssl=1"
  },
  {
    destination: "Vallée d'Aoste",
    country: "Italie",
    distance: "684 km",
    photo: "https://p8.storage.canalblog.com/88/15/1438199/109578404_o.jpg"
  },
  {
    destination: "Ikea Tinqueux",
    country: "France",
    distance: "6,4 km",
    photo: "https://pokaa.fr/wp-content/uploads/2018/10/ikea.jpg"
  },
  {
    destination: "Delft",
    country: "Pays-Bas",
    distance: "402 km",
    photo: "https://www.planetware.com/photos-large/NL/netherlands-delft-oude-delft.jpg"
  },
  {
    destination: "Queyras",
    country: "France",
    distance: "814 km",
    photo: "http://www.queyras.com/bundles/queyrastourete/images/villages/VIS-30-Bob-Ciron.jpg"
  }
];

const Travels = () => (
  <div>
    {travels.map((travel, index) => (
      <Travel
        key={index}
        {...travel}
      />
    ))}
  </div>
);

export default Travels;
