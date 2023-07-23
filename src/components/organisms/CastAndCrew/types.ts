export interface CastMember {
  name: string;
  imageURL?: string;
}
export interface Director {
  name: string;
  responsibility: string;
}

export interface CastAndCrewProps {
  cast: CastMember[];
  director: Director;
}
