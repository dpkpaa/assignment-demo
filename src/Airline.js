import React from "react";

const Airline = ({ data }) => {
  return (
    <div className="app__airline">
      <img src={data.logo} alt={data.name} width={100} />
      <div>
        <h3>{data.name}</h3>
        <dl>
          <dt>
            <b>Country:</b> {data.country}
          </dt>
          <dt>
            <b>Slogan:</b> {data.slogan}
          </dt>
          <dt>
            <b>Head Quaters : </b> {data.head_quaters}
          </dt>
          <dt>
            <b>Website : </b> <a href={data.website}>{data.website}</a>
          </dt>
          <dt>
            <b>Established : </b> {data.established}
          </dt>
        </dl>
      </div>
    </div>
  );
};

export default Airline;
