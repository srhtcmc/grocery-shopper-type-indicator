export const PERSONALITY_IDS = [
  'optimizer',
  'stockpiler',
  'over-optimistic',
  'impulse',
  'brand-loyalist',
  'ethical-curator',
  'ninja',
  'delegate',
  'chaos',
] as const;

export type PersonalityId = (typeof PERSONALITY_IDS)[number];

export type WeightVector = Partial<Record<PersonalityId, number>>;

export type ScoreVector = Record<PersonalityId, number>;

export interface QuestionOption {
  id: string;
  text: string;
  weights: WeightVector;
}

export interface Question {
  id: number;
  text: string;
  options: QuestionOption[];
}

export interface PersonalityType {
  id: PersonalityId;
  name: string;
  motto: string;
  description: string;
  traits: string[];
  strengths: string[];
  color: string;
  emoji: string;
  hidden?: boolean;
}

export interface UserResponse {
  questionId: number;
  optionId: string;
}

export interface PersonalityResult {
  type: PersonalityType;
  scores: ScoreVector;
}
