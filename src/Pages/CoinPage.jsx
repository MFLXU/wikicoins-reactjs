import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import DOMPurify from "dompurify";

const CoinPage = (props) => {
  const params = useParams();

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;
  const [coin, setCoin] = useState({});
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoin(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <section className="mt-24 px-4 md:px-0">
      <div className="container">
        <div className="grid grid-cols-1 gap-4">
          {/* TITLE */}
          <div className="p-4 w-fit">
            <h1 className=" text-5xl md:text-7xl font-bold text-center link-primary">
              {coin.name}
            </h1>
          </div>
          {/* INFO CARD */}
          <div className="card bg-base-200 p-4">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-4">
                <span className="btn-primary w-fit py-2 px-4 uppercase font-bold rounded-sm">
                  Rank # {coin.market_cap_rank}
                </span>
                <div className="flex items-center gap-4 text-xl">
                  {coin.image ? <img src={coin.image.small} alt="" /> : null}
                  <p>{coin.name}</p>
                  {coin.symbol ? <p>{coin.symbol.toUpperCase()}/USD</p> : null}
                </div>
              </div>
              <div className="text-6xl font-bold justify-center items-center flex">
                {coin.market_data?.current_price ? (
                  <h1>
                    ${coin.market_data.current_price.usd.toLocaleString()}
                  </h1>
                ) : null}
              </div>
            </div>
          </div>
          {/* PRICE CHANGE */}
          <div className="card bg-base-200 p-4">
            <p className="text-xl mb-4 font-bold">Price Change Percentage</p>
            <div className="grid grid-cols-2 md:grid-cols-6 text-center rounded-sm overflow-hidden ">
              <p className="font-bold bg-primary text-white py-2">1h</p>
              <p className="font-bold bg-primary text-white py-2">24h</p>
              <p className="font-bold bg-primary text-white py-2">7d</p>
              <p className="font-bold bg-primary text-white py-2">14d</p>
              <p className="font-bold bg-primary text-white py-2">30d</p>
              <p className="font-bold bg-primary text-white py-2">1yr</p>
              {coin.market_data?.price_change_percentage_1h_in_currency ? (
                <p className="py-2 bg-base-100">
                  {coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
                    1
                  )}
                  %
                </p>
              ) : null}
              {coin.market_data?.price_change_percentage_24h_in_currency ? (
                <p className="py-2 bg-base-100">
                  {coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                    1
                  )}
                  %
                </p>
              ) : null}
              {coin.market_data?.price_change_percentage_24h_in_currency ? (
                <p className="py-2 bg-base-100">
                  {coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
                    1
                  )}
                  %
                </p>
              ) : null}
              {coin.market_data?.price_change_percentage_24h_in_currency ? (
                <p className="py-2 bg-base-100">
                  {coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(
                    1
                  )}
                  %
                </p>
              ) : null}
              {coin.market_data?.price_change_percentage_24h_in_currency ? (
                <p className="py-2 bg-base-100">
                  {coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(
                    1
                  )}
                  %
                </p>
              ) : null}
              {coin.market_data?.price_change_percentage_24h_in_currency ? (
                <p className="py-2 bg-base-100">
                  {coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(
                    1
                  )}
                  %
                </p>
              ) : null}
            </div>
          </div>
          {/* More Infos */}
          <div className="card bg-base-200 p-4">
            <div className="grid md:grid-cols-2 md:gap-8">
              <div className=" grid grid">
                <div className="flex justify-between items-center py-2">
                  <h4 className="font-bold">24 Hour Low</h4>
                  {coin.market_data?.low_24h ? (
                    <p className="bg-primary py-2 px-4 rounded-sm text-white">
                      ${coin.market_data.low_24h.usd.toLocaleString()}
                    </p>
                  ) : null}
                </div>
                <div className="flex justify-between items-center py-2">
                  <h4 className="font-bold">24 Hour High</h4>
                  {coin.market_data?.high_24h ? (
                    <p className="bg-primary py-2 px-4 rounded-sm text-white">
                      ${coin.market_data.high_24h.usd.toLocaleString()}
                    </p>
                  ) : null}{" "}
                </div>
              </div>
              <div className="grid ">
                <div className="flex justify-between items-center py-2">
                  <h4 className="font-bold">Market Cap</h4>
                  {coin.market_data?.market_cap ? (
                    <p className="bg-primary py-2 px-4 rounded-sm text-white">
                      ${coin.market_data.market_cap.usd.toLocaleString()}
                    </p>
                  ) : null}
                </div>
                <div className="flex justify-between items-center py-2">
                  <h4 className="font-bold">Circulating Supply</h4>
                  {coin.market_data ? (
                    <p className="bg-primary py-2 px-4 rounded-sm text-white">
                      {coin.market_data.circulating_supply}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          {/* About Section */}
          <div className="card bg-base-200 p-4">
            <div className="about">
              <h3 className="text-xl font-bold mb-4">About</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    coin.description ? coin.description.en : ""
                  ),
                }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoinPage;
