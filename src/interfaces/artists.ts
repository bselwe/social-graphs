export interface Artist {
  readonly id: string;
  readonly name: string;
  readonly popularity: number;
  readonly followers: { total: number };
  readonly genres: string[];
}

export interface TopConnectedArtist {
  readonly id: string;
  readonly name: string;
  readonly image: string;
  readonly connections: number;
}
