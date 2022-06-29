import React from "react";
import { PageHeader } from "../Components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CoinPage } from "../Pages/index";
import ReactPaginate from "react-paginate";
import axios from "axios";
import Coin from "../Components/Coin";
import coinsImg from "../Images/coins.svg";

const CoinsPage = () => {
  const headtitle = "Coins";
  const desc =
    "Browse 100 top crypto coins in the market right now, you can find the price, volume, market cap, and change percentage in the last 24 hours.";
  // API
  const [coins, setCoins] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // Pagination
  const [pageNumber, setPageNumber] = useState(0);

  const coinsPerPage = 10;
  const pagesVisited = pageNumber * coinsPerPage;
  const displayedCoins = coins
    .slice(pagesVisited, pagesVisited + coinsPerPage)

    .map((coins) => {
      return (
        <Link to={`/coin/${coins.id}`} element={<CoinPage />} key={coins.id}>
          <Coin coins={coins} />
        </Link>
      );
    });

  const pageCount = Math.ceil(coins.length / coinsPerPage);
  // change page fun
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  // Search func

  return (
    <div className="mt-16">
      <PageHeader headtitle={headtitle} desc={desc} img={coinsImg} />
      <div className="container px-2 md:px-0">
        {/* Head Section */}
        <div className="mt-16 -2">
          <div className="grid grid-cols-4 md:grid-cols-7  p-4 md:px-8 card bg-primary text-white">
            <p>#</p>
            <p className="hidden md:block">Symbol</p>
            <p>Coin</p>
            <p>Price</p>
            <p>24h</p>
            <p className="hidden md:block">Volume</p>
            <p className="hidden md:block">Market Cap</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-4">{displayedCoins}</div>
        <div className="mx-auto w-fit mt-16 pagination">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"flex flex-col md:flex-row gap-2 items-center"}
            previousLinkClassName={"bg-base-300 p-2 px-4 rounded-md"}
            nextLinkClassName={"bg-base-300 p-2 px-4 rounded-md"}
            disabledClassName={" bg-base-300 p-2 rounded-md"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </div>
  );
};

export default CoinsPage;
