import React, { useMemo, useState } from "react";
import styles from "./styles.module.css";
import { Artist } from "../../interfaces/artists";
import { getArtistsWithSentiment, SelectedGenre } from "../../data/Sentiment";
import Link from "../Link";
import popSentiment from "./pop_frequency.svg";
import rapSentiment from "./rap_frequency.svg";
import TopConnected from "../ArtistsByGenres/TopConnected";
import {
  happiestPopArtists,
  happiestRapArtists,
} from "../../data/Sentiment/happiest";
import {
  saddestPopArtists,
  saddestRapArtists,
} from "../../data/Sentiment/sadest";

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

  const happiestArtists =
    selectedGenre === SelectedGenre.Pop
      ? happiestPopArtists
      : happiestRapArtists;

  const saddestArtists =
    selectedGenre === SelectedGenre.Pop ? saddestPopArtists : saddestRapArtists;

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
      <section>
        <p>
          As noticed above, the word clouds for Pop and Rap genres have a very
          different vibe. The sentiment analysis of the most frequent words from
          the word clouds was performed in order to have a quantifiable value
          that reflects the happiness of each of the two genres. As expected,
          the Pop genre has a higher happiness rating compared to the Rap genre.
        </p>
      </section>

      <p>Happiness Rating:</p>

      <section className={styles.happinessRating}>
        <div className={styles.pop}>Pop: 6.16</div>
        <div className={styles.rap}>Rap: 3.91</div>
      </section>

      <section>
        <p>
          To further analyze the general trends of the genres, the average
          happiness rating is computed based on the lyrics of the top songs of
          all artists.
        </p>
      </section>

      <img
        src={popSentiment}
        width={800}
        style={{ marginTop: 24 }}
        alt={"degree distribution (log log)"}
      />

      <img
        src={rapSentiment}
        width={800}
        style={{ marginTop: 24 }}
        alt={"degree distribution (log log)"}
      />

      <div className={styles.space} />
      <section>
        <p>
          The first thing to point out is that both genres are in a quite short
          interval 5.12, 5.90 on the happiness scale. This is because all words
          in songs count towards the happiness average which means that neutral
          words are likely the most common. Very happy or sad words are less
          common and have less weight in the happiness average.
        </p>
      </section>

      <p>Top Artists</p>

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

      <div className={styles.space} />

      <h3>
        5 happiest artists in{" "}
        {selectedGenre === SelectedGenre.Pop ? "Pop" : "Rap"}
      </h3>

      <TopConnected forSentimentArtists artists={happiestArtists} />

      <div className={styles.space} />

      <h3>
        5 saddest artists in{" "}
        {selectedGenre === SelectedGenre.Pop ? "Pop" : "Rap"}
      </h3>

      <TopConnected forSentimentArtists artists={saddestArtists} />

      <div className={styles.space} />

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
