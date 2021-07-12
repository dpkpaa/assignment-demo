import React from "react";
import Passenger from "./Passenger";

const Passengers = ({ data }) => {
  return (
    <div className="app__passengers">
      <h1 className="heading">List Of Passengers</h1>

      {data.map((item) => (
        <Passenger key={data._id} data={item} />
      ))}
    </div>
  );
};

export default Passengers;
