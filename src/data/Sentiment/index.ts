import { Sentiment } from "../../interfaces/sentiments";
import { getArtistById } from "../artists";
import sentimentsPop from "./all_artists_sentiment_pop.json";
import sentimentsRap from "./all_artists_sentiment_rap.json";

export enum SelectedGenre {
  Pop,
  Rap,
}

export function getArtistsWithSentiment(genre: SelectedGenre) {
  const artists = ((genre === SelectedGenre.Pop
    ? sentimentsPop
    : sentimentsRap) as unknown) as Sentiment[];

  return artists.map(({ artist, happiness_average }) => ({
    ...getArtistById(artist),
    happiness_average,
  }));
}
