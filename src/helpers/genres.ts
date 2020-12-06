export enum Genre {
  Chillhop = "chillhop",
  ContemporaryCountry = "contemporary country",
  Broadway = "broadway",
  DancePop = "dance pop",
  AnthemWorship = "anthem worship",
  EmoRap = "emo rap",
  AlbumRock = "album rock",
  Hollywood = "hollywood",
  BigRoom = "big room",
  AlternativeRB = "alternative r&b",
}

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
