import { Node } from ".";

export interface Poste {
  id?: number;
  designation?: string;
  MLE?: string;
  PKVA?: number;
  puissance?: number;
  nb_clients?: number;
  date_mst?: string;
  node?: Node;
  type?: string;
  marque?: string;
  poste?: string;
  n_serie?: string;
  origine?: string;
}
