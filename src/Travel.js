import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
  <div>
    <img src={photo} alt={country} height="400" width="750"/>
    <div>
      <div>{destination}, {country}</div>
      <div>Distance: {distance}</div>
    </div>
  </div>
);

export default Travel;
