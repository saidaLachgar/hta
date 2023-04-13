import { Commune, Node } from ".";

export interface Poste {
  id?: number;
  designation?: string;
  MLE?: string;
  PKVA?: string;
  nb_clients?: number;
  commune?: Commune;
  date_mst?: string;
  node?: Node;
  type?: string;
  marque?: string;
  poste?: string;
  n_serie?: string;
}
