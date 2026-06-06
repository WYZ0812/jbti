import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../data/questions";
import type { Answer } from "../utils/scorer";
import { calculateScores, getResultType } from "../utils/scorer";
import ProgressBar from "../components/ProgressBar";
import QuestionCard from "../components/QuestionCard";

export default function QuizPage() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  const question = questions[currentIndex];
  const currentAnswer = answers.find((a) => a.questionId === question.id);

  const handleSelect = useCallback(
    (label: string) => {
      setAnswers((prev) => {
        const filtered = prev.filter((a) => a.questionId !== question.id);
        return [...filtered, { questionId: question.id, selectedLabel: label }];
      });

      // 选完后自动跳下一题（延迟让用户看到选中效果）
      setTimeout(() => {
        if (currentIndex < questions.length - 1) {
          setDirection("forward");
          setCurrentIndex((i) => i + 1);
        } else {
          // 最后一题选完 → 计算结果并跳转
          const finalAnswers = [
            ...answers.filter((a) => a.questionId !== question.id),
            { questionId: question.id, selectedLabel: label },
          ];
          const scores = calculateScores(questions, finalAnswers);
          const resultType = getResultType(scores);
          navigate("/result", { state: { typeCode: resultType.code, scores } });
        }
      }, 350);
    },
    [answers, currentIndex, navigate, question.id]
  );

  const goPrev = () => {
    if (currentIndex > 0) {
      setDirection("backward");
      setCurrentIndex((i) => i - 1);
    }
  };

  const goNext = () => {
    if (currentIndex < questions.length - 1 && currentAnswer) {
      setDirection("forward");
      setCurrentIndex((i) => i + 1);
    }
  };

  const isLastQuestion = currentIndex === questions.length - 1;

  return (
    <div className="page quiz-page">
      <ProgressBar current={currentIndex + 1} total={questions.length} />

      <QuestionCard
        key={question.id}
        question={question}
        selectedAnswer={currentAnswer?.selectedLabel}
        onSelect={handleSelect}
        direction={direction}
      />

      <div className="quiz-nav">
        <button
          className="nav-btn nav-btn--prev"
          onClick={goPrev}
          disabled={currentIndex === 0}
        >
          ← 上一题
        </button>
        <span className="nav-hint">
          {currentAnswer ? "已选择" : "请选择一个选项"}
        </span>
        <button
          className="nav-btn nav-btn--next"
          onClick={goNext}
          disabled={!currentAnswer || isLastQuestion}
        >
          下一题 →
        </button>
      </div>

      {isLastQuestion && currentAnswer && (
        <p className="quiz-last-hint">最后一个选项了，即将揭晓结果 ✨</p>
      )}
    </div>
  );
}
