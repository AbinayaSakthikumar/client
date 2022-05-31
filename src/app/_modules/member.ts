import { Photo } from "./photo";

export type Member = Member1[]

export interface Member1 {
  id: number;
  username: string;
  photourl: string;
  age: number;
  knownAs: string;
  created: Date;
  lastActive: Date;
  gender: string;
  introduction: string;
  lookingFor: string;
  interests: string;
  city: string;
  country: string;
  photos: Photo[];
}


