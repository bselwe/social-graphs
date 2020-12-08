import React from "react";
import { Artist, TopConnectedArtist } from "../../interfaces/artists";
import { Genre } from "../../interfaces/genres";
import Link from "../Link";
import styles from "./topConnected.styles.module.css";
import dataArtists from "../../data/ArtistsByGenres/artists.json";
import { genreColor } from "../../data/genres";

interface TopConnectedProps {
  readonly artists: TopConnectedArtist[];
  readonly artistsConnections: {
    [artistId: string]: { id: string; name: string; genre: Genre }[];
  };
}

const TopConnected: React.FC<TopConnectedProps> = ({
  artists,
  artistsConnections,
}) => {
  return (
    <div className={styles.topConnectedArtists}>
      {artists.map((artist) => {
        const connections = artistsConnections[artist.id];

        return (
          <div
            key={`topConnected-${artist.id}`}
            className={styles.topConnectedArtist}
          >
            <Link
              url={`https://open.spotify.com/artist/${artist.id}`}
              color={"inherit"}
            >
              <img src={artist.image} alt={artist.name} />
              <div>{artist.name}</div>
            </Link>
            <p>
              <b>Genres</b>:<br />
              {(dataArtists[
                artist.id as keyof typeof dataArtists
              ] as Artist).genres.join(", ")}
            </p>
            <b>Connected with ({connections.length})</b>:<br />
            {connections.slice(0, maxArtistsConnectionsToShow).map((artist) => (
              <Link
                key={artist.name}
                url={`https://open.spotify.com/artist/${artist.id}`}
                color={genreColor[artist.genre]}
              >
                {`${artist.name};`}&nbsp;
              </Link>
            ))}
            {connections.length - maxArtistsConnectionsToShow > 0 && (
              <span>{`and ${
                connections.length - maxArtistsConnectionsToShow
              } more`}</span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export const maxArtistsConnectionsToShow = 20;

export default TopConnected;
