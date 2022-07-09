import React, { useEffect, useState } from 'react';
import styles from './TopTracks.module.scss';

const TopTracks = () => {
  const [tracks, setTracks] = useState([]);

  const fetchTopTracks = async () => {
    const res = await fetch('api/getTopTracks');
    const data = await res.json();
    setTracks(data);
  };

  useEffect(() => {
    fetchTopTracks();
  }, []);

  return (
    <div className={styles.topTracksWrapper}>
      <h2>Adarsh's Top Tracks</h2>
      <div></div>
    </div>
  );
};

export default TopTracks;
