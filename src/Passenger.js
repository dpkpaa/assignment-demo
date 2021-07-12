import React from "react";
import Airline from "./Airline";

const Passenger = ({ data }) => {
  return (
    <div className="app__passenger">
      <h2>{data.name}</h2>

      <Airline data={data.airline} />
    </div>
  );
};

export default Passenger;
