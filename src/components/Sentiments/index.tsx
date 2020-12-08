import React, { useMemo, useState } from "react";
import styles from "./styles.module.css";

import dataArtists from "../../data/artists.json"
import sentimentsPop from "../../data/Sentiment/all_artists_sentiment_pop.json"
import sentimentsRap from "../../data/Sentiment/all_artists_sentiment_rap.json"
import { Artist } from "../../interfaces/artists";
import { getArtistById } from "../../data/artists";

const allArtists = Object.values(dataArtists);
const allPop = Object.values(sentimentsPop);
const allRap = Object.values(sentimentsRap);

const Sentiments: React.FC = () => {
  const [text, setText] = useState<string>();
  const [selectedArtist, setSelectedArtist] = useState<Artist>();

  const filteredArtists = useMemo(() => {
    if (text) {
      return allPop;
      // return allArtists.filter(artist => artist.name.toLowerCase().includes(text.toLowerCase()));
    } else {
      return allPop;
    }
  }, [text]);

  return (
    <div className={styles.container}>
      <div className={styles.artists}>
        <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder={"Search for an artist..."} />

        <ul>
          {filteredArtists }
          {/* {filteredArtists.map((id: string, happiness: number) => {             
            return <li onClick={() => setSelectedArtist(getArtistById(id))}>{getArtistById(id).name}</li>
          })} */}
        </ul>
      </div>

      <div className={styles.selectedArtist}>
        {selectedArtist ? <>
          <b>Selected artist</b> 
          <p>{selectedArtist.name}</p>
        </> : <p>Please select an artist on the left</p>}
      </div>
    </div>
  );
};

export default Sentiments;
