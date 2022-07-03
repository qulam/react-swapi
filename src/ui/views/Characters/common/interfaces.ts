export interface ISingleCharacter {
  birth_year: string;
  created: string
  edited: string
  eye_color: string
  gender: string
  hair_color: string
  height: string
  homeworld: string
  mass: string
  name: string
  skin_color: string
  species: []
  url: string
}

export interface ICharactersResponseDTO {
  count: number;
  results?: ISingleCharacter[],
  next: string;
  previous: string;
}