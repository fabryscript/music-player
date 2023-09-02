import { StaticImageData } from "next/image";

export interface SongInterface {
  songName: string,
  author: string,
  cover: StaticImageData,
  songPath: string
}