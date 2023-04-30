import Image from "next/image";
import React, { useEffect, useState } from "react";
import MusicBars from "@components/MusicBars";
import styles from "./NowPlaying.module.scss";
import { SiSpotify } from "react-icons/si";

interface NotPlaying {
  isPlaying?: false;
}

interface Playing {
  albumImageUrl: string;
  artist: string;
  title: string;
  songUrl: string;
  album: string;
  isPlaying: true;
}

const CurrentTrack = (props: any) => {
  const { songUrl, artist, title, isPlaying, albumImageUrl } = props;
  return (
    <div className={isPlaying ? styles.currentTrack : styles.paused}>
      <div className={styles.trackInfo}>
        {isPlaying ? (
          <>
            <a className={styles.trackTitle} href={songUrl}>
              {title}
            </a>
            <p className={styles.trackArtist}>{artist}</p>
          </>
        ) : (
          <p className={styles.notListening}>Not listening</p>
        )}
      </div>
    </div>
  );
};

const NowPlaying = () => {
  const [currentTrack, setCurrentTrack] = useState<NotPlaying | Playing>({});

  const fetchNowPlaying = async () => {
    const track = await fetch("api/getNowPlaying");
    const data = await track.json();
    setCurrentTrack(data);
  };

  useEffect(() => {
    fetchNowPlaying();
  }, []);

  return (
    <div
      className={
        currentTrack?.isPlaying ? styles.nowPlaying : styles.notPlaying
      }
    >
      {!currentTrack?.isPlaying && <SiSpotify className={styles.icon} />}
      <div className={styles.track}>
        <CurrentTrack {...currentTrack} />
        {currentTrack?.isPlaying && <MusicBars />}
      </div>
    </div>
  );
};

export default NowPlaying;
