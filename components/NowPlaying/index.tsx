import React from "react";
import MusicBars from "@components/MusicBars";
import { SiSpotify } from "react-icons/si";
import { getNowPlaying } from "@utils/spotify";

const CurrentTrack = (props: any) => {
  const { songUrl, artist, title, isPlaying } = props;
  return (
    <div
      className={
        isPlaying
          ? "w-full flex justify-start items-center"
          : "w-full flex justify-center items-center"
      }
    >
      <div className="flex flex-col text-base mobile:ml-0">
        {isPlaying ? (
          <>
            <a
              className="text-lg text-left text-light-primary line-clamp-1 dark:text-dark-primary hover:underline"
              href={songUrl}
            >
              {title}
            </a>
            <p className="mt-1 text-sm text-left text-light-secondary line-clamp-1 dark:text-dark-secondary">
              {artist}
            </p>
          </>
        ) : (
          <p className="ml-4 text-xl">Not listening</p>
        )}
      </div>
    </div>
  );
};

const NowPlaying = async () => {
  const currentTrack = await getNowPlaying();

  return (
    <div
      className={
        currentTrack?.isPlaying
          ? "flex justify-between items-center min-w-[200px] max-w-full w-full"
          : "flex justify-center items-center w-full"
      }
    >
      {!currentTrack?.isPlaying && (
        <SiSpotify className="w-9 h-9 mobile:w-7 mobile:h-7" />
      )}
      <div className="flex rounded-lg w-full justify-between mobile:m-0">
        <CurrentTrack {...currentTrack} />
        {currentTrack?.isPlaying && <MusicBars />}
      </div>
    </div>
  );
};

export default NowPlaying;
