import type { Question, QuestionOption } from "../data/questions";
import type { PersonalityType } from "../data/types";
import { personalityTypes, getTypeByCode } from "../data/types";

export interface Answer {
  questionId: number;
  selectedLabel: string;
}

export interface ScoreMap {
  [typeCode: string]: number;
}

/**
 * 初始化计分表：所有类型从 0 开始
 */
export function createScoreMap(): ScoreMap {
  const map: ScoreMap = {};
  for (const t of personalityTypes) {
    map[t.code] = 0;
  }
  return map;
}

/**
 * 根据答案列表计算最终得分
 */
export function calculateScores(
  questions: Question[],
  answers: Answer[]
): ScoreMap {
  const scores = createScoreMap();

  for (const answer of answers) {
    const question = questions.find((q) => q.id === answer.questionId);
    if (!question) continue;

    const option = question.options.find(
      (o) => o.label === answer.selectedLabel
    );
    if (!option) continue;

    scores[option.typeCode] = (scores[option.typeCode] || 0) + 1;
  }

  return scores;
}

/**
 * 根据得分找到匹配的人格类型（最高分）
 * 平局时随机选择
 */
export function getResultType(scores: ScoreMap): PersonalityType {
  const maxScore = Math.max(...Object.values(scores));
  const candidates = Object.entries(scores)
    .filter(([, score]) => score === maxScore)
    .map(([code]) => code);

  // 平局时随机选择
  const winnerCode = candidates[Math.floor(Math.random() * candidates.length)];
  const type = getTypeByCode(winnerCode);

  if (!type) {
    // fallback：返回第一个类型
    return personalityTypes[0];
  }

  return type;
}

/**
 * 获取某个选项对应的分数标记
 */
export function getOptionTypeCode(option: QuestionOption): PersonalityType["code"] {
  return option.typeCode;
}

/**
 * 获取所有答案对应的类型分布（用于展示）
 */
export function getTypeDistribution(scores: ScoreMap): Array<{
  type: PersonalityType;
  score: number;
  percentage: number;
}> {
  const total = Object.values(scores).reduce((sum, s) => sum + s, 0);
  return personalityTypes
    .map((type) => ({
      type,
      score: scores[type.code] || 0,
      percentage: total > 0 ? Math.round(((scores[type.code] || 0) / total) * 100) : 0,
    }))
    .sort((a, b) => b.score - a.score);
}
