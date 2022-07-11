import React, { useEffect, useState } from 'react';
import MusicBars from '../MusicBars';
import styles from './NowPlaying.module.scss';

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
      <p className={styles.title}>Currently vibing to  -&#32;</p>
      <div className={styles.track}>
        <MusicBars />
        <a href={currentTrack.songUrl}>{currentTrack.title}</a>
      </div>
    </div>
  );
};

export default index;
