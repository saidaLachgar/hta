import { GoalGroup } from ".";

export interface Goal {
    id?: number;
    name?: string;
    targetYears?: number[];
    targetAchievement?: number;
    goalGroup?: GoalGroup;
  }