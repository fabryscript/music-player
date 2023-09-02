"use client";

import { useMusic } from "@/stores/useMusic";
import React from "react";
import { IconContext } from "react-icons";
import { BiHomeAlt, BiSearch, BiMusic, BiUser } from "react-icons/bi";
import Image from "next/image";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";

function BottomNav() {
  const {
    currentlyPlaying: { infos, song },
    play,
    pause,
    isPlaying,
  } = useMusic();

  return (
    <div className="fixed flex flex-col justify-center items-center bottom-[20px] left-4 right-4">
      <IconContext.Provider value={{ size: "28" }}>
        <div
          key={infos?.songName}
          className={`${
            song ? "opacity-100" : "opacity-0"
          } grid grid-cols-8 items-center p-2 min-w-[400px] mb-2 rounded-2xl text-white bg-[#fff]/5 backdrop-blur-[50px] transition-opacity duration-500`}
        >
          {infos && (
            <Image
              src={infos.cover}
              alt={`${infos.songName}`}
              width={70}
              height={70}
              className="col-start-1 col-span-2 rounded-xl object-cover"
            />
          )}
          <div className="col-start-3 col-span-5 flex flex-col">
            <h3>{infos?.songName}</h3>
            <small>{infos?.author}</small>
          </div>
          <button
            onClick={() => (isPlaying ? pause() : play())}
            className="col-start-8 bg-white rounded-full flex justify-center items-center text-primary w-[40px] h-[40px]"
          >
            {isPlaying ? <BsPauseFill /> : <BsPlayFill />}
          </button>
        </div>
        <div className="flex flex-row justify-evenly bg-[#fff]/5 backdrop-blur-[50px] min-w-[420px] rounded-xl">
          <button className="w-[70px] h-[70px] flex items-center justify-center text-white">
            <BiHomeAlt />
          </button>
          <button className="w-[70px] h-[70px] flex items-center justify-center text-white">
            <BiSearch />
          </button>
          <button className="w-[70px] h-[70px] flex items-center justify-center text-white">
            <BiMusic />
          </button>
          <button className="w-[70px] h-[70px] flex items-center justify-center text-white">
            <BiUser />
          </button>
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default BottomNav;
