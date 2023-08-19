import HeroSection from "./hero";
import Navbar from "./navbar";
import FooterSection from "./footer";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "./container";
import MovieSlider from "./movieslider";
import MovieGrid from "./moviegrid";
import { Menu } from "@headlessui/react";
import getTvshows from "../redux/tvShowsOnly/action";
const AllTvshows = () => {
  const { tvshows } = useSelector((state) => state.tvshows);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTvshows());
    // dispatch(getNowPlayingMovies());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterDropDowns = [
    {
      id: "genres",
      filterName: "all genres",
      items: [
        {
          id: "genres",
          name: "all genres",
        },
        {
          id: "action",
          name: "action",
        },
        {
          id: "Romance",
          name: "Romance",
        },
        {
          id: "Thriller",
          name: "Thriller",
        },
      ],
    },
    {
      id: "years",
      filterName: "all years",
      items: [
        {
          id: "years",
          name: "all years",
        },
        {
          id: "1980",
          name: "1980",
        },
        {
          id: "2021",
          name: "2021",
        },
        {
          id: "2022",
          name: "2022",
        },
      ],
    },
  ];

  const buttonFilter = [
    {
      id: "popular",
      name: "popular",
    },
    {
      id: "latest",
      name: "latest",
    },
  ];

  const filterHandler = (allItem, items, filterIndex, index) => {
    allItem = allItem.slice();
    let item = allItem[filterIndex];
    let updateFilter = {
      ...item,
      id: items[index].id,
      filterName: items[index].name,
    };
    allItem[filterIndex] = updateFilter;
    return allItem;
  };

  const [filter, setFilter] = useState(filterDropDowns);
  const [selectedButton, setSelectButton] = useState("popular");

  return (
    <>
      <Navbar />
      <div className="tes">
        <HeroSection backgroundUrl="https://image.tmdb.org/t/p/original/57clBMPX25NNO6nmDw3TV3zQaQE.jpg">
          <Container className="py-[200px]">
            <div className="z-[8] absolute top-0 w-[50%] translate-x-[-50%] left-[50%] bottom-0 pb-[230px] pt-[280px] hero-tv">
              <h1 className="text-[60px] text-center font-bold font-['poppins']">
                TV<span className="text-[#e4d804] ml-2">Shows</span>
              </h1>
              <div className="text-center flex gap-x-3 justify-center text-[22px]">
                <span className="text-[#e4d804]">Popular</span>
                <span>|</span>
                <span>Trending</span>
              </div>
            </div>
          </Container>
        </HeroSection>
        <Container>
          <div className="flex justify-between bg-[#0D1B2A] py-5 px-6 rounded-l-2xl rounded-r-2xl">
            <div className="flex gap-x-5">
              {filter.map(({ id, filterName, items }, filterIndex) => (
                <Menu key={id} as="div" className="flex relative">
                  <Menu.Button>{filterName}</Menu.Button>
                  <Menu.Items className="flex flex-col w-[150px] z-10 absolute top-9">
                    {items.map(({ id, name }, index) => (
                      <Menu.Item key={id}>
                        {({ active }) => (
                          <button
                            className={`${
                              active && "text-[#e4d804]"
                            } text-left`}
                            onClick={() => {
                              setFilter(
                                filterHandler(filter, items, filterIndex, index)
                              );
                            }}
                          >
                            {name}
                          </button>
                        )}
                      </Menu.Item>
                    ))}
                    {/* <Menu.Item disabled>
                <span className="opacity-75">Invite a friend (coming soon!)</span>
              </Menu.Item> */}
                  </Menu.Items>
                </Menu>
              ))}
            </div>
            <div className="flex bg-black px-2 py-2 gap-x-3 rounded-3xl">
              {buttonFilter.map(({ id, name }) => (
                <button
                  key={id}
                  className={`${
                    name === selectedButton
                      ? "text-[#e4d804] bg-[#0D1B2A]"
                      : "text-white"
                  } px-4 py-1 rounded-xl`}
                  onClick={() => setSelectButton(name)}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
          <MovieGrid movies={tvshows} mediaType="tv" getMovies={getTvshows} />
        </Container>
        <div className="flex flex-col">
          <h2 className="text-3xl px-8 mt-10 mb-5">Other movie suggestions</h2>
          <MovieSlider movies={tvshows} mediaType="tv" />
        </div>
      </div>
      <hr className="border-1 border-[#0D1B2A] mt-10" />
      <FooterSection />
    </>
  );
};

export default AllTvshows;
