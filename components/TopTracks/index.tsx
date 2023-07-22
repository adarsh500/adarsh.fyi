import React from "react";
import { Track } from "../../types/shared";

interface TrackItem {
  track: Track;
}

const TrackItem = ({ track }: TrackItem) => {
  return (
    <div>
      <a className="flex flex-col hover:underline" href={track.songUrl}>
        {track.title}
      </a>
      <hr></hr>
    </div>
  );
};

const TopTracks = async () => {
  const res = await fetch("api/getTopTracks");
  const data = await res.json();

  return (
    <div className="flex flex-col justify-center items-center">
      <h2>Adarsh's Top Tracks</h2>
      <div>
        {data?.tracks?.map((track: any, id: number) => (
          <TrackItem track={track} key={id} />
        ))}
      </div>
    </div>
  );
};

export default TopTracks;
