import styles from './tracks.module.scss';
import { getTopTracks } from '@utils/spotify';

type Album = {
  url: string;
};

type Tracks = {
  albumImageUrl: string;
  artist: string | string[];
  isPlaying: boolean;
  songUrl: string;
  name: string;
  url: string;
  title: string;
  artists: any[];
  album: {
    images: Album[];
  };
  external_urls: {
    spotify: string;
  };
};

export default async function Tracks() {
  const tracks: Tracks[] = await getTopTracks();

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <p className={styles.title}>Top Tracks</p>
        {tracks.map((track, index: number) => {
          const artists = track.artists.map((artist) => artist.name).join(', ');
          return (
            <a
              href={track.external_urls.spotify}
              className={styles.track}
              key={index}
            >
              <img
                className={styles.trackImg}
                src={track.album.images[0].url}
                alt={track.name}
              />
              <div className={styles.trackInfo}>
                <p className={styles.trackName}>{track.name}</p>
                <p className={styles.trackArtist}>{artists}</p>
              </div>
            </a>
          );
        })}
      </div>
    </main>
  );
}
