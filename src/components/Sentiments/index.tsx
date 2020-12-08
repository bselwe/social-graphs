import React, { useMemo, useState } from "react";
import styles from "./styles.module.css";
import { Artist } from "../../interfaces/artists";
import { getArtistsWithSentiment, SelectedGenre } from "../../data/Sentiment";
import Link from "../Link";

const Sentiments: React.FC = () => {
  const [text, setText] = useState<string>();

  const [selectedGenre, setSelectedGenre] = useState<SelectedGenre>(
    SelectedGenre.Pop
  );

  const [selectedArtist, setSelectedArtist] = useState<
    Artist & { happiness_average: number }
  >();

  const allArtists = useMemo(() => getArtistsWithSentiment(selectedGenre), [
    selectedGenre,
  ]);

  const filteredArtists = useMemo(() => {
    if (text) {
      return allArtists.filter((artist) =>
        artist.name.toLowerCase().includes(text.toLowerCase())
      );
    } else {
      return allArtists;
    }
  }, [text, allArtists]);

  return (
    <div className={styles.container}>
      <p>Please select a genre:</p>

      <button
        className={
          selectedGenre === SelectedGenre.Pop
            ? styles.btn_green
            : styles.btn_white
        }
        onClick={() => setSelectedGenre(SelectedGenre.Pop)}
      >
        Pop
      </button>
      <button
        className={
          selectedGenre === SelectedGenre.Rap
            ? styles.btn_green
            : styles.btn_white
        }
        style={{ marginRight: 0 }}
        onClick={() => setSelectedGenre(SelectedGenre.Rap)}
      >
        Rap
      </button>

      <div className={styles.content}>
        <div className={styles.artists}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={"Search for an artist..."}
          />

          <div className={styles.artistsList}>
            <ul>
              {filteredArtists.map((artist) => {
                return (
                  <li
                    key={`sentiments-${artist.id}`}
                    onClick={() => setSelectedArtist(artist)}
                  >
                    {artist.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className={styles.selectedArtist}>
          {selectedArtist ? (
            <>
              <h3>Selected artist</h3>

              <p>
                <b>Name</b>:{" "}
                <Link
                  url={`https://open.spotify.com/artist/${selectedArtist.id}`}
                >
                  {selectedArtist.name}
                </Link>
              </p>
              <p>
                <b>Happiness average</b>: {selectedArtist.happiness_average}
              </p>
              <p>
                <b>Popularity</b>: {selectedArtist.popularity}
              </p>
              <p>
                <b>Followers</b>: {selectedArtist.followers.total}
              </p>
              <p>
                <b>Genres</b>: {selectedArtist.genres.join(", ")}
              </p>
            </>
          ) : (
            <p>Please select an artist on the left</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sentiments;
