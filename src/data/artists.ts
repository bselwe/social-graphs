import { Artist } from "../interfaces/artists";
import dataArtists from "./artists.json";

export function getArtistById(id: string) {
  return dataArtists[id as keyof typeof dataArtists] as Artist;
}
