import { Goal } from ".";

export interface Objective {
  id?: number;
  goal?: Goal;
  date?: string;
  count?: number;
  plannedCount?: number;
}
