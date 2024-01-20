import { getTopTracks } from "@utils/spotify";

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
    <main className="flex justify-start items-start flex-col break-words text-xl text-left mt-32 mb-24 flex-1 text-light-primary dark:text-dark-primary mobile:py-6 mobile:px-4 mobile:mt-12 mobile:mb-20 mobile:text-base">
      <div className="flex justify-center align-top flex-col animate-fadeInUp w-full">
        <p className="text-5xl font-extrabold mobile:text-4xl mobile:font-bold">
          Top Tracks
        </p>
        <div className="my-12 flex justify-start items-center flex-wrap mobile:my-8">
          {tracks?.map((track, index: number) => {
            const artists = track.artists
              .map((artist) => artist.name)
              .join(", ");
            return (
              <a
                href={track.external_urls.spotify}
                className="w-full flex justify-start items-center my-4"
                key={index}
              >
                <img
                  className="w-20 h-20 rounded-lg mr-4 object-cover aspect-square mobile:w-16 mobile:h-16"
                  src={track.album.images[0].url}
                  alt={track.name}
                />
                <div>
                  <p className="text-lg font-medium text-light-primary mb-2 line-clamp-1 mobile:text-base dark:text-dark-primary">
                    {track.name}
                  </p>
                  <p className="text-base text-light-secondary mb-2 line-clamp-1 dark:text-dark-secondary mobile:mb-1 mobile:text-sm">
                    {artists}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </main>
  );
}
