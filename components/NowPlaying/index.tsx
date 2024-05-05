import React from "react";
import MusicBars from "@components/MusicBars";
import { SiSpotify } from "react-icons/si";
import { getNowPlaying } from "@utils/spotify";

const NowPlaying = async () => {
  const currentTrack = await getNowPlaying();
  const { songUrl, artist, title, isPlaying } = currentTrack;

  if (!isPlaying) {
    return (
      <div
        className="flex justify-between items-center mobile:justify-start gap-6 "
        id="not-playing"
      >
        <SiSpotify className="w-6 h-6 mobile:w-5 mobile:h-5 fill-white" />
        <p className="text-lg text-center text-dark-primary">
          Not listening
        </p>
      </div>
    );
  }

  return (
    <div
      className="flex justify-between items-center min-w-[200px] max-w-full w-full"
      id="playing"
    >
      <div className="flex flex-col text-base mobile:ml-0 w-full justify-center items-start desktop:max-w-[200px]">
        <a
          className="text-lg text-left text-dark-primary line-clamp-1 hover:underline"
          href={songUrl}
        >
          {title}
        </a>
        <p className="mt-1 text-sm text-left text-dark-secondary line-clamp-1 ">
          {artist}
        </p>
      </div>

      <MusicBars />
    </div>
  );
};

export const revalidate = 60000;

export default NowPlaying;
