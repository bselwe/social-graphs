import React from "react";
import { SentimentArtist, TopConnectedArtist } from "../../interfaces/artists";
import { Genre } from "../../interfaces/genres";
import Link from "../Link";
import styles from "./topConnected.styles.module.css";
import { genreColor } from "../../data/genres";
import { getArtistById } from "../../data/artists";

interface TopConnectedProps {
  readonly forSentimentArtists?: boolean;
  readonly artists: (TopConnectedArtist | SentimentArtist)[];
  readonly artistsConnections?: {
    [artistId: string]: { id: string; name: string; genre: Genre }[];
  };
  readonly maxArtistsConnections?: number;
}

const TopConnected: React.FC<TopConnectedProps> = ({
  forSentimentArtists,
  artists,
  artistsConnections,
  maxArtistsConnections = maxArtistsConnectionsToShow,
}) => {
  return (
    <div className={styles.topConnectedArtists}>
      {artists.map((artist) => {
        const connections = artistsConnections?.[artist.id];

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

            {forSentimentArtists && (
              <p>
                <b>Happiness rating</b>
                <br />
                {(artist as SentimentArtist).happiness_rating}
              </p>
            )}

            <p>
              <b>Genres</b>
              <br />
              {getArtistById(artist.id).genres.join(", ")}
            </p>

            {connections && (
              <>
                <b>Connected with ({connections.length})</b>
                <br />
                {connections.slice(0, maxArtistsConnections).map((artist) => (
                  <Link
                    key={artist.name}
                    url={`https://open.spotify.com/artist/${artist.id}`}
                    color={genreColor[artist.genre]}
                  >
                    {`${artist.name};`}&nbsp;
                  </Link>
                ))}
                {connections.length - maxArtistsConnections > 0 && (
                  <span>{`and ${
                    connections.length - maxArtistsConnections
                  } more`}</span>
                )}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export const maxArtistsConnectionsToShow = 20;

export default TopConnected;
