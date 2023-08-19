import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import FooterSection from "./footer";
import { userprofile } from "../utility";
import { useSelector, useDispatch } from "react-redux";
import { getWatchlist } from "../redux/watchlist/action";

export default function WatchList() {
  const dispatch = useDispatch();
  const { message, error, watchlist } = useSelector((state) => state.watchlist);

  useEffect(() => {
    const userprofile = JSON.parse(localStorage.getItem("user"));
    if (userprofile) {
      dispatch(getWatchlist(userprofile.token));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div className="flex w-[90%] mt-[40px] gap-5 flex-col">
          <h2 className="text-xl mb-6">WatchList</h2>
          { watchlist.map(({ buy_price, movie_name, summary, image_url}) => (
          <div key={uuidv4()} className="flex gap-7">
          <div className="w-[20%]">
            <img
              src={
                image_url
              }
              alt="gallery"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <div className="flex flex-col gap-2 place-self-end">
            <h3 className="text-lg">name:</h3>
            <p className="text-base">{movie_name}</p>
            <p className="text-lg">price:</p>
            <p className="text-base">&pound;{buy_price}</p>
            <div key={10}>
              <div className="flex gap-2">
                <button className="bg-[#e4d804] h-[#40px] border-3 border-[#0D1B2A] text-[#0D1B2A] px-4 py-1 rounded-md text-base">
                  Buy
                </button>
                <button className="bg-[#0D1B2A] h-[#40px] border-3 border-[#e4d804] text-[#e4d804] px-4 py-1 rounded-md text-base">
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
          ))}
          

          <div className="flex flex-col order-style my-10 cart-border">
            <div className="mb-2 text-base">
              <span className="cart-order-title">Tax: </span>
              <span className="cart-order-value">&pound;{watchlist.length * 4}</span>
            </div>
            <div className="mb-2 text-base">
              <span className="cart-order-title">Qty: </span>
              <span className="cart-order-value">{watchlist.length}</span>
            </div>
            <div className="mb-2 text-base">
              <span className="cart-order-title">Total including tax: </span>
              <span className="cart-order-value">&pound;{`20`}</span>
            </div>
            <button className="bg-[#e4d804] w-[120px] h-[#40px] border-3 border-[#0D1B2A] text-[#0D1B2A] px-4 py-1 rounded-md text-base">
              buy all
            </button>
          </div>
        </div>
      </div>
      <hr className="border-1 border-[#0D1B2A] mt-10" />
      <FooterSection />
    </>
  );
}