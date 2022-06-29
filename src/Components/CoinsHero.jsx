import React from "react";
import btc from "../Images/bitcoin.webp";
import eth from "../Images/ethereum.webp";
import bnb from "../Images/bnb.webp";
import usd from "../Images/usd.webp";
import tether from "../Images/tether.webp";
import xrp from "../Images/xrp.webp";
import solana from "../Images/solana.webp";
import busd from "../Images/busd.webp";
import cardano from "../Images/cardano.webp";
import avax from "../Images/avax.webp";
import f from "../Images/f.webp";
import cro from "../Images/cro.webp";
import doge from "../Images/dogecoin.webp";
import stell from "../Images/stell.webp";
import shiba from "../Images/shiba.webp";
import download from "../Images/download.webp";
import mana from "../Images/mana.webp";
import cake from "../Images/cake.webp";
import sandbox from "../Images/sandbox.webp";
const CoinsHero = () => {
  return (
    <section className="py-16 bg-base-200">
      <div className="container px-4 md:px-0">
        <h2 className="text-center text-5xl font-bold mb-12">
          Everything About The Top 100 Coins
        </h2>
        <div className="grid grid-cols-4 md:grid-cols-10 mx-auto">
          <div className="w-20 p-2 hover:scale-110 duration-300">
            <img src={btc} alt="" />
          </div>
          <div className="w-20 p-2 hover:scale-110 duration-300">
            <img src={eth} alt="" />
          </div>
          <div className="w-20 p-2 hover:scale-110 duration-300">
            <img src={bnb} alt="" />
          </div>
          <div className="w-20 p-2 hover:scale-110 duration-300">
            <img src={usd} alt="" />
          </div>
          <div className="w-20 p-2 hover:scale-110 duration-300">
            <img src={tether} alt="" />
          </div>
          <div className="w-20 p-2 hover:scale-110 duration-300">
            <img src={xrp} alt="" />
          </div>
          <div className="w-20 p-2 hover:scale-110 duration-300">
            <img src={avax} alt="" />
          </div>
          <div className="w-20 p-2 hover:scale-110 duration-300">
            <img src={solana} alt="" />
          </div>
          <div className="w-20 p-2 hover:scale-110 duration-300">
            <img src={busd} alt="" />
          </div>
          <div className="w-20 p-2 hover:scale-110 duration-300">
            <img src={cardano} alt="" />
          </div>
          <div className="w-20 p-2 hover:scale-110 duration-300">
            <img src={download} alt="" />
          </div>
          <div className="w-20 p-2 hover:scale-110 duration-300">
            <img src={avax} alt="" />
          </div>
          <div className="w-20 p-2 hover:scale-110 duration-300">
            <img src={shiba} alt="" />
          </div>
          <div className="w-20 p-2 hover:scale-110 duration-300">
            <img src={doge} alt="" />
          </div>
          <div className="w-20 p-2 hover:scale-110 duration-300">
            <img src={f} alt="" />
          </div>
          <div className="w-20 p-2 hover:scale-110 duration-300">
            <img src={cro} alt="" />
          </div>
          <div className="w-20 p-2 hover:scale-110 duration-300">
            <img src={stell} alt="" />
          </div>
          <div className="w-20 p-2 hover:scale-110 duration-300">
            <img src={sandbox} alt="" />
          </div>
          <div className="w-20 p-2 hover:scale-110 duration-300">
            <img src={cake} alt="" />
          </div>
          <div className="w-20 p-2 hover:scale-110 duration-300">
            <img src={mana} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoinsHero;
