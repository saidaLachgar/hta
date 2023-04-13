import { Goal } from ".";

export interface Objective {
  id?: number;
  goal?: Goal;
  date?: string;
  count?: number;
}
export const MISSION_ACTIONS = [
  {
    group: "Organes de coupures",
    values: [
      {
        id: 1,
        label: "Installation des DRR",
      },
      {
        id: 2,
        label: "Installation des IATCT",
      },
      {
        id: 3,
        label: "Transfere OCR",
      },
      {
        id: 4,
        label: "Insertion des IACM",
      },
      {
        id: 5,
        label: "Entretien des   IACM ",
      },
    ],
  },
  {
    group: "Poste MT/BT sur poteau",
    values: [
      {
        id: 28,
        label: "Augmentations de puissance des postes H61",
      },
      {
        id: 29,
        label: "Rotation des transfo pour postes H61",
      },
      {
        id: 30,
        label: "Contrôle de charge des postes H61",
      },
      {
        id: 31,
        label: "Remplacement des transformateurs avariés",
      },
      {
        id: 32,
        label: "Remplacement des DHP",
      },
      {
        id: 33,
        label: "Injection des postes H61",
      },
    ],
  },
  {
    group: "Reception et MST",
    values: [
      {
        id: 21,
        label: "Réception des nouveaux branchements ",
      },
      {
        id: 22,
        label: "Réception ou contre réception des villages PERG",
      },
      {
        id: 23,
        label: "Mise en service des postes ONED",
      },
      {
        id: 24,
        label: "Mise en service des postes clients",
      },
      {
        id: 25,
        label: "Mise en service des aménagements en Km",
      },
      {
        id: 26,
        label: "Renforcement des lignes à faible section en Km",
      },
      {
        id: 27,
        label: "Création des boucles En Km",
      },
    ],
  },
  {
    group: "Lignes HTA",
    values: [
      {
        id: 6,
        label: "Vérification et mesure des terres des masses et parafoudre",
      },
      {
        id: 7,
        label: "Mise à jour des réglages des DDA ",
      },
      {
        id: 8,
        label: "Entretien  des postes MT/BT H61",
      },
      {
        id: 9,
        label: "Réparation du câble ",
      },
      {
        id: 10,
        label: "Elagage des arbres au voisinages des lignes MT",
      },
      {
        id: 11,
        label: "Dressage des brettelles",
      },
      {
        id: 12,
        label: "Dépose corps étrangers",
      },
      {
        id: 13,
        label: "Renforcement des bretelles à faible section et connexions",
      },
      {
        id: 14,
        label: "Remplacement des supports dégraderé ou endommagés",
      },
      {
        id: 15,
        label: "Pose des isolateurs en composite",
      },
      {
        id: 16,
        label: "Remplacement blocs par manchons 400",
      },
      {
        id: 17,
        label: "Pose des Contre poids et de renvoi",
      },
      {
        id: 18,
        label: "Installation de Jeux de parafoudre",
      },
      {
        id: 19,
        label: "Contrôle de charge des postes H61",
      },
      {
        id: 20,
        label: "Amélioration des terres ",
      },
    ],
  },
];
