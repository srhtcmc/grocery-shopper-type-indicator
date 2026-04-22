import {
  PERSONALITY_IDS,
  PersonalityId,
  PersonalityResult,
  ScoreVector,
  UserResponse,
} from '../types/personality';
import { questions } from '../data/questions';
import { personalityTypes } from '../data/personalityTypes';

const emptyScores = (): ScoreVector =>
  PERSONALITY_IDS.reduce((acc, id) => {
    acc[id] = 0;
    return acc;
  }, {} as ScoreVector);

export function calculatePersonalityType(responses: UserResponse[]): PersonalityResult {
  const scores = emptyScores();

  for (const response of responses) {
    const question = questions.find((q) => q.id === response.questionId);
    if (!question) continue;
    const option = question.options.find((o) => o.id === response.optionId);
    if (!option) continue;

    for (const [id, weight] of Object.entries(option.weights)) {
      if (typeof weight === 'number') {
        scores[id as PersonalityId] += weight;
      }
    }
  }

  const winnerId = PERSONALITY_IDS.reduce((best, id) =>
    scores[id] > scores[best] ? id : best,
  );

  const type = personalityTypes.find((t) => t.id === winnerId);
  if (!type) {
    throw new Error(`Unknown personality id: ${winnerId}`);
  }

  return { type, scores };
}
