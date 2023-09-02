"use client";

import React from "react";
import Grid from "./Grid";
import { SwiperSlide, Swiper } from "swiper/react";
import Image from "next/image";
import "swiper/css";

import mtw2 from "../../public/covers/mtw2-pop.jpeg";
import sirio from "../../public/covers/sirio-lazza.jpeg";
import barbie from "../../public/covers/barbie-world.jpeg";
import ditg from "../../public/covers/ditg-zaq.jpeg";

import { BsPlayFill } from "react-icons/bs";
import { IconContext } from "react-icons";

const discoverItems = [
  {
    albumTitle: "Meet The Woo 2",
    author: "Pop Smoke",
    cover: mtw2,
  },
  {
    albumTitle: "SIRIO",
    author: "Lazza",
    cover: sirio,
  },
  {
    albumTitle: "Barbie World (with Aqua) [From Barbie The World]",
    author: "Nicki Minaj",
    cover: barbie,
  },
  {
    albumTitle: "Dance In In The Game",
    author: "ZAQ",
    cover: ditg,
  },
];

function Discover() {
  return (
    <IconContext.Provider value={{ size: "28" }}>
      <Grid className="mt-5">
        <h1 className="col-span-6 text-white text-3xl font-medium">Discover</h1>
        <div className="col-start-1 col-span-6">
          <Swiper
            className="!overflow-x-visible"
            slidesPerView={1.25}
            grabCursor
            spaceBetween={25}
          >
            {discoverItems.map(({ albumTitle, author, cover }, i) => (
              <SwiperSlide key={albumTitle} className={`max-w-[250px]`}>
                <div className="flex w-full h-[200px] relative">
                  <Image
                    src={cover}
                    width={250}
                    height={200}
                    alt={`${albumTitle} album cover`}
                    className="object-cover rounded-3xl"
                  />
                  <div className="flex flex-row absolute text-white bottom-[10px] left-2 right-2 rounded-2xl p-4 justify-between bg-[#fff]/5 backdrop-blur-[50px]">
                    <div className="flex flex-col">
                      <h5 className="text-base">
                        {albumTitle.substring(0, 18)}
                      </h5>
                      <p className="text-xs opacity-70">{author}</p>
                    </div>
                    <button className="bg-white rounded-full flex justify-center items-center text-primary w-[40px] h-[40px]">
                      <BsPlayFill />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Grid>
    </IconContext.Provider>
  );
}

export default Discover;
