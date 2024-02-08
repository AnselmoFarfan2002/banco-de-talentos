import Feedback from "./Feedback";
import Skill from "./Skill";

export default interface Talent {
  photo?: string;
  name?: string;
  role?: string;
  rating?: number;
  city?: string;
  country?: string;
  salaryMin?: number;
  salaryMax?: number;
  selected?: boolean;
}

export interface TalentFull extends Talent {
  techSkills: Array<Skill>;
  softSkills: Array<string>;
  feedbacks: Array<Feedback>;
}