import { useState, useEffect } from "react";
import type { Question } from "../data/questions";
import OptionButton from "./OptionButton";

interface QuestionCardProps {
  question: Question;
  selectedAnswer?: string;
  onSelect: (label: string) => void;
  direction: "forward" | "backward";
}

export default function QuestionCard({
  question,
  selectedAnswer,
  onSelect,
  direction,
}: QuestionCardProps) {
  const [animating, setAnimating] = useState(false);

  // 题目切换动画
  useEffect(() => {
    setAnimating(true);
    const timer = setTimeout(() => setAnimating(false), 400);
    return () => clearTimeout(timer);
  }, [question.id]);

  const animClass = animating
    ? direction === "forward"
      ? "card-enter-forward"
      : "card-enter-backward"
    : "";

  return (
    <div className={`question-card ${animClass}`}>
      <p className="question-text">{question.text}</p>
      <div className="options-list">
        {question.options.map((option) => (
          <OptionButton
            key={option.label}
            label={option.label}
            text={option.text}
            selected={selectedAnswer === option.label}
            onClick={() => onSelect(option.label)}
          />
        ))}
      </div>
    </div>
  );
}
