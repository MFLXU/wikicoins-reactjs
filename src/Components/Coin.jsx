import React from "react";

const Coin = (props) => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-7 p-4 md:px-8 card bg-base-200 hover:shadow-xl duration-300 items-center">
      <p>{props.coins.market_cap_rank}</p>
      <p className="font-bold hidden md:block">
        {props.coins.symbol.toUpperCase()}
      </p>
      <div className="w-8">
        <img src={props.coins.image} alt="" />
      </div>
      <p>${props.coins.current_price.toLocaleString()}</p>
      <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
      <p className="hidden md:block">
        ${props.coins.total_volume.toLocaleString()}
      </p>
      <p className="hidden md:block">
        ${props.coins.market_cap.toLocaleString()}
      </p>
    </div>
  );
};

export default Coin;
