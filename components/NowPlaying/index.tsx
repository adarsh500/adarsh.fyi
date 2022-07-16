import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import MusicBars from '../MusicBars';
import styles from './NowPlaying.module.scss';

const CurrentTrack = ({ props }: any) => {
  console.log('props', props);
  const { albumImageUrl, songUrl, artist, title } = props;
  console.log(albumImageUrl);

  return (
    <div className={styles.currentTrack}>
      <Image src={albumImageUrl} height={64} width={64}></Image>
      <div className={styles.trackInfo}>
        <a className={styles.trackTitle} href={songUrl}>
          {title}
        </a>
        <p className={styles.trackArtist}>{artist}</p>
      </div>
    </div>
  );
};

const index = () => {
  const [currentTrack, setCurrentTrack] = useState({});

  const fetchNowPlaying = async () => {
    const track = await fetch('api/getNowPlaying');
    const data = await track.json();
    setCurrentTrack(data);
  };

  useEffect(() => {
    fetchNowPlaying();
  }, []);

  if (!currentTrack?.isPlaying) {
    return;
  }
  console.log('current', currentTrack);
  return (
    <div className={styles.nowPlaying}>
      <Image src="/../public/spotify.png" height={36} width={36} />
      <h3 className={styles.title}>Listening to</h3>
      <div className={`${styles.track} ${styles.slideRight}`}>
        <MusicBars />
        <CurrentTrack props={currentTrack} />
      </div>
    </div>
  );
};

export default index;
