import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState} from "react";
import Navbar from "./navbar";
import FooterSection from "./footer";
import { useSelector, useDispatch } from "react-redux";
import { getWatchlist, deleteWatchlist } from "../redux/watchlist/action";
import transparentgif from "../asset/transparentgif.gif";

export default function WatchList() {
  const dispatch = useDispatch();
  const { listLoading, watchlist } = useSelector((state) => state.watchlist);
  const { loggedin } = useSelector((state) => state.userDetails);
  const [buyError, setBuyError] = useState(false);
  useEffect(() => {
    const userprofile = JSON.parse(localStorage.getItem("user"));
    if (userprofile) {
      dispatch(getWatchlist(userprofile.token));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleWatchListdelete = (id) => {
    const userprofile = JSON.parse(localStorage.getItem("user"));
    if (userprofile) {
      const token = userprofile.token;
      const user_id = userprofile.userId;

      dispatch(deleteWatchlist(token, id, user_id));
    } else {
      console.log("error");
    }
  };

  const handleBuy = () => {
    setBuyError(true);
    setTimeout(function () {
      setBuyError(false);
    }, 4000);
  };

  return (
    <>
      <Navbar />
      {loggedin ? (
        <div className="flex justify-center">
          <p
            className={`fixed top-[90px] bg-[#0D1B2A] py-2 px-3 right-[40px] transition ease-in-out delay-150 z-[5] text-red-500 ${
              !buyError ? "hidden right-[-100px]" : ""
            }`}
          >
            {" "}
            payment feature not yet integrated
          </p>
          <div className="flex w-[90%] mt-[40px] gap-5 flex-col">
            <h2 className="text-xl mb-6">WatchList</h2>
            {watchlist.length ? (
              watchlist?.map(({ buy_price, movie_name, image_url, id }) => (
                <div key={uuidv4()} className="flex w-full gap-7">
                  <div className="w-[40%] lg:w-[20%] md:w-[30%]">
                    <img
                      src={image_url}
                      alt="gallery"
                      className="w-full lg:h-[auto] md:h-[auto]"
                    />
                  </div>
                  <div className="flex lg:w-[80%] md:w-[60%] w-[50%] flex-col gap-2 place-self-end">
                    <div className="flex gap-1 items-center">
                      <h3 className="text-lg">name:</h3>
                      <p className="text-base crop-text">{movie_name}</p>
                    </div>
                    <div className="flex gap-1 items-center">
                      <p className="text-lg">price:</p>
                      <span className="text-base">&pound;{buy_price}</span>
                    </div>
                    <div key={10}>
                      <div className="flex gap-2">
                        <button
                          onClick={handleBuy}
                          className="bg-[#e4d804] h-[#40px] border-3 border-[#0D1B2A] text-[#0D1B2A] px-4 py-1 rounded-md text-base"
                        >
                          Buy
                        </button>
                        <button
                          onClick={() => handleWatchListdelete(id)}
                          className="bg-[#0D1B2A] relative h-[#40px] border-3 border-[#e4d804] text-[#e4d804] px-4 py-1 rounded-md text-base"
                        >
                          Remove
                          <img
                            src={transparentgif}
                            className={`w-[30px] absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] h-[auto] ${
                              listLoading ? "" : "hidden"
                            }`}
                            alt="loading"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>you have no movies in your watchlist</p>
            )}

            <div className="flex flex-col order-style my-10 cart-border">
              <div className="mb-2 text-base">
                <span className="cart-order-title">Tax: </span>
                <span className="cart-order-value">
                  &pound;{watchlist.length * 4}
                </span>
              </div>
              <div className="mb-2 text-base">
                <span className="cart-order-title">Qty: </span>
                <span className="cart-order-value">{watchlist.length}</span>
              </div>
              <div className="mb-2 text-base">
                <span className="cart-order-title">Total including tax: </span>
                <span className="cart-order-value">
                  &pound;
                  {watchlist?.reduce((accumulator, item) => {
                    return accumulator + item.buy_price;
                  }, 0) +
                    watchlist.length * 4}
                </span>
              </div>
              <button
                onClick={handleBuy}
                className="bg-[#e4d804] w-[120px] h-[#40px] border-3 border-[#0D1B2A] text-[#0D1B2A] px-4 py-1 rounded-md text-base"
              >
                buy all
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-xl py-[200px]">
          log in to view watchlist
        </p>
      )}

      <hr className="border-1 border-[#0D1B2A] mt-10" />
      <FooterSection />
    </>
  );
}
