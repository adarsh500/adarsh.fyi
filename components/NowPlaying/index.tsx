import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import MusicBars from '@components/MusicBars';
import styles from './NowPlaying.module.scss';

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

const CurrentTrack = ({ props }: any) => {
  const { albumImageUrl, songUrl, artist, title } = props;

  return (
    <div className={styles.currentTrack}>
      <Image src={albumImageUrl} height={44} width={44}></Image>
      <div className={styles.trackInfo}>
        <a className={styles.trackTitle} href={songUrl}>
          {title}
        </a>
        <p className={styles.trackArtist}>{artist}</p>
      </div>
    </div>
  );
};

const NowPlaying = () => {
  const [expanded, setExpanded] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<NotPlaying | Playing>({});

  const fetchNowPlaying = async () => {
    const track = await fetch('api/getNowPlaying');
    const data = await track.json();
    setCurrentTrack(data);
  };

  useEffect(() => {
    fetchNowPlaying();
  }, [expanded]);

  return (
    <div className={styles.nowPlaying}>
      {/* <Image
        src="/../public/spotify.png"
        height={44}
        width={44}
        onClick={() => setExpanded(!expanded)}
      /> */}
      {expanded ? (
        currentTrack.isPlaying ? (
          <div className={styles.track}>
            <CurrentTrack props={currentTrack} />
            <MusicBars />
          </div>
        ) : (
          <p className={styles.paused}>Not listening</p>
        )
      ) : null}
    </div>
  );
};

export default NowPlaying;
