import { Genre } from "../interfaces/genres";

export const allGenres = [
  Genre.Chillhop,
  Genre.ContemporaryCountry,
  Genre.Broadway,
  Genre.DancePop,
  Genre.AnthemWorship,
  Genre.EmoRap,
  Genre.AlbumRock,
  Genre.Hollywood,
  Genre.BigRoom,
  Genre.AlternativeRB,
];

export const genreColor: { [genre in Genre]: string } = {
  [Genre.Chillhop]: "#fff100",
  [Genre.ContemporaryCountry]: "#ff8c00",
  [Genre.Broadway]: "#e81123",
  [Genre.DancePop]: "#ec008c",
  [Genre.AnthemWorship]: "#68217a",
  [Genre.EmoRap]: "#00188f",
  [Genre.AlbumRock]: "#00bcf2",
  [Genre.Hollywood]: "#00b294",
  [Genre.BigRoom]: "#009e49",
  [Genre.AlternativeRB]: "#bad80a",
};

/**
 * A histogram of genres
 */
export const genreConnections: { [genre in Genre]: number } = {
  [Genre.Chillhop]: 7365,
  [Genre.ContemporaryCountry]: 6642,
  [Genre.Broadway]: 4120,
  [Genre.DancePop]: 2773,
  [Genre.AnthemWorship]: 2508,
  [Genre.EmoRap]: 2396,
  [Genre.AlbumRock]: 1678,
  [Genre.Hollywood]: 1585,
  [Genre.BigRoom]: 1420,
  [Genre.AlternativeRB]: 1322,
};
