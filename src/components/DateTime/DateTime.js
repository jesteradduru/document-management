import React from "react";
import Clock from "react-live-clock";

const DateTime = () => {
  return (
    <div
      className="d-flex flex-column text-right font-weight-bolder pb-4"
      style={{ fontSize: "1.4em" }}
    >
      <Clock format={"MM/DD/YYYY"} ticking={true} timezone={"Asia/Manila"} />
      <Clock format={"hh:mm:ss"} ticking={true} timezone={"Asia/Manila"} />
    </div>
  );
};

export default DateTime;
