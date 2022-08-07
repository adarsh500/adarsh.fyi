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
      <Image src={albumImageUrl} height={58} width={58}></Image>
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

  console.log('current', currentTrack);
  return (
    <div className={styles.nowPlaying}>
      <Image src="/../public/spotify.png" height={38} width={38} />
      {currentTrack.isPlaying ? (
        <div className={styles.track}>
          <CurrentTrack props={currentTrack} />
          <MusicBars />
        </div>
      ) : (
        <p className={styles.notListening}>Not Listening</p>
      )}
    </div>
  );
};

export default index;
