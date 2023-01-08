import React from "react";
import banner from "../img/1.png";
import imgRnM from "../img/Rick-and-Morty.png";

const Loading = () => {
  return (
    <main className="loading">
      <img className="bannerLoading" src={banner} alt="" />

      <h1>Loading...</h1>

      <h4>Welcome to</h4>
      <div className="containerimgRick">

      <img className="imgrick" src={imgRnM} alt="" />
      </div>
    </main>
  );
};

export default Loading;
