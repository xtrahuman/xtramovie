import HeroSection from "./hero";
import { useState } from 'react';
import { Menu } from "@headlessui/react";
import Container from "./container";
import MovieGrid from "./moviegrid";

const Home = () => {
  const movies = [
    {
      id: 'movie1',
      name: 'star trek',
      image: 'https://image.tmdb.org/t/p/original/xQCMAHeg5M9HpDIqanYbWdr4brB.jpg'

    },
    {
      id: 'movie2',
      name: 'star trek 1',
      image: 'https://image.tmdb.org/t/p/original/xQCMAHeg5M9HpDIqanYbWdr4brB.jpg'

    },
    {
      id: 'movie3',
      name: 'star trek 4',
      image: 'https://image.tmdb.org/t/p/original/p3pHw85UMZPegfMZBA6dZ06yarm.jpg'

    },
    {
      id: 'movie3',
      name: 'star trek 4',
      image: 'https://image.tmdb.org/t/p/original/xQCMAHeg5M9HpDIqanYbWdr4brB.jpg'

    },
    {
      id: 'movie4',
      name: 'star trek 5',
      image: 'https://image.tmdb.org/t/p/original/5W5uaqQ7NZTwoDMKO4AtdcahHex.jpg'

    },
    {
      id: 'movie5',
      name: 'star trek 6',
      image: 'https://image.tmdb.org/t/p/original/xQCMAHeg5M9HpDIqanYbWdr4brB.jpg'

    },
    {
      id: 'movie6',
      name: 'star trek 7',
      image: 'https://image.tmdb.org/t/p/original/xQCMAHeg5M9HpDIqanYbWdr4brB.jpg'

    },
    {
      id: 'movie7',
      name: 'star trek 8',
      image: 'https://image.tmdb.org/t/p/original/xQCMAHeg5M9HpDIqanYbWdr4brB.jpg'

    },
  ]
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
  ]

  const filterHandler = (allItem, items, filterIndex, index) => {
    allItem = allItem.slice()
    let item =allItem[filterIndex]
    let updateFilter = {
      ...item,
      id: items[index].id,
      filterName: items[index].name
    }
    allItem[filterIndex] = updateFilter
    return allItem
  }

  const [filter,setFilter] = useState(filterDropDowns)
  const [selectedButton, setSelectButton] = useState('popular')
  return (
    <div className="">
      <HeroSection backgroundUrl="https://image.tmdb.org/t/p/original/vsjuHP9RQZJgYUvvSlO3mjJpXkq.jpg">
        <Container className="py-[200px]">
          <h1 className="text-[60px] w-[50%] font-bold font-['poppins'] pt-[250px] pb-[230px] z-[8] absolute top-0 bottom-0">
            <span className="text-[#e4d804] text-[32px]">Xtramovie</span> <br />
            Unlimited <span className="text-[#e4d804]">Movie</span>, TVs Shows,
            & More.
          </h1>
        </Container>
      </HeroSection>
      <Container>
        <div className="flex justify-between bg-[#0F3795] py-5 px-6 rounded-l-2xl rounded-r-2xl">
        <div className="flex gap-x-5">
        {filter.map(({ id, filterName, items },filterIndex) => (
          <Menu key={id} as="div" className="flex relative">
            <Menu.Button>{filterName}</Menu.Button>
            <Menu.Items className="flex flex-col w-[150px] z-10 absolute top-9">
              {items.map(({ id, name },index) => (
                <Menu.Item key={id}>
                  {({ active }) => (
                    <button
                      className={`${active && "text-[#e4d804]" } text-left`}
                      onClick={() => {
                        setFilter(filterHandler(filter,items,filterIndex,index))
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
        {buttonFilter.map(({id,name}) => (
          <button key={id} className={`${name === selectedButton ? "text-[#e4d804] bg-[#0F3795]" : "text-white"} px-4 py-1 rounded-xl`} onClick={() => setSelectButton(name)}>{name}</button>
        ))
          
        }
        </div>
        </div>
        <MovieGrid movies={movies}/>
      </Container>
    </div>
  );
};

export default Home;
