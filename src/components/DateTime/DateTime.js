import React from "react";
import Clock from "react-live-clock";
import { useLocation } from "react-router-dom";

const DateTime = () => {
  let location = useLocation();
  const currentLocation = () => {
    switch (location.pathname.split("/")[1]) {
      case "incoming":
        return <h1>Incoming</h1>;
      case "onprocess":
        return <h1>On Process</h1>;
      case "outgoing":
        return <h1>Outgoing</h1>;
      case "compose":
        return <h1>Compose</h1>;
      case "compositions":
        return <h1>Compositions</h1>;
      default:
        return <h1></h1>;
    }
  };
  return (
    <div className="d-flex justify-content-between align-items-center px-5 mb-4 bg-dark py-3 text-light">
      <di>{currentLocation()}</di>
      <div
        className="d-flex flex-column justify-content-between text-right font-weight-bolder text-danger"
        style={{ fontSize: "1.4em" }}
      >
        <Clock format={"MM/DD/YYYY"} ticking={true} timezone={"Asia/Manila"} />
        <Clock format={"hh:mm:ss"} ticking={true} timezone={"Asia/Manila"} />
      </div>
    </div>
  );
};

export default DateTime;
