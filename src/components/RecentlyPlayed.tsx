"use client";

import React from "react";
import { IconContext } from "react-icons";
import Grid from "./Grid";
import Image from "next/image";
import { Howl } from "howler";

import mtw2 from "../../public/covers/mtw2-pop.jpeg";
import sirio from "../../public/covers/sirio-lazza.jpeg";
import ditg from "../../public/covers/ditg-zaq.jpeg";
import md from "../../public/covers/md.jpg";

import { BsPlayFill } from "react-icons/bs";
import { useMusic } from "@/stores/useMusic";
import { SongInterface } from "@/models";

const recentlyPlayed: SongInterface[] = [
  {
    songName: "Shake The Room (feat. Quavo)",
    author: "Pop Smoke, Quavo",
    cover: mtw2,
    songPath: "songs/str-pop.mp3"
  },
  {
    songName: "Mannequin (feat. Lil Tjay)",
    author: "Pop Smoke, Lil Tjay",
    cover: mtw2,
    songPath: "songs/mnq-pop.mp3"
  },
  {
    songName: "TOPBOY (feat. Noyz Narcos)",
    author: "Lazza, Noyz Narcos",
    cover: sirio,
    songPath: "songs/tpb-lazza.mp3"
  },
  {
    songName: "Dance In The Game",
    author: "ZAQ",
    cover: ditg,
    songPath: "songs/ditg-zaq.mp3"
  },
  {
    songName: "Milano Demons",
    author: "Shiva",
    cover: md,
    songPath: "songs/md-shiva.mp3"
  },
];

function RecentlyPlayed() {
  const { addSong, play, pause } = useMusic()
  return (
    <IconContext.Provider value={{ size: "28" }}>
      <Grid className="mt-5 text-white">
        <h1 className="col-span-6 text-3xl font-medium">Recently played</h1>
        <button onClick={pause}>pause</button>
        <div className="col-span-6 flex flex-col gap-y-5">
          {recentlyPlayed.map(({ author, cover, songName, songPath }) => (
            <div key={songName} className="grid grid-cols-8 items-center">
              <Image
                src={cover}
                alt={`${songName}`}
                width={70}
                height={70}
                className="col-start-1 col-span-2 rounded-xl object-cover"
              />
              <div className="col-start-3 col-span-5 flex flex-col">
                <h3>{songName}</h3>
                <small>{author}</small>
              </div>
              <button onClick={() => {
                addSong(new Howl({ src: songPath }), { author, cover, songName, songPath })
                play()
              }} className="col-start-8 bg-white rounded-full flex justify-center items-center text-primary w-[40px] h-[40px]">
                <BsPlayFill />
              </button>
            </div>
          ))}
        </div>
      </Grid>
    </IconContext.Provider>
  );
}

export default RecentlyPlayed;
