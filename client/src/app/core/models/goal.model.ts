import { GoalGroup } from ".";

export interface Goal {
    id?: number;
    name?: string;
    calc?: string;
    targetYears?: number[];
    target_years?: number[];
    target_achievement?: number[];
    targetAchievement?: number;
    goalGroup?: GoalGroup;
    goal_group?: GoalGroup;
  }