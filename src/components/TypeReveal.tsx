import { useEffect, useState } from "react";
import type { PersonalityType } from "../data/types";

interface TypeRevealProps {
  type: PersonalityType;
}

const REVEAL_TEXTS = [
  "计算中……",
  "分析你的灵魂……",
  "翻看你的朋友圈……",
  "调查你的外卖记录……",
  "找到了！",
];

export default function TypeReveal({ type }: TypeRevealProps) {
  const [phase, setPhase] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      idx++;
      if (idx < REVEAL_TEXTS.length) {
        setPhase(idx);
      } else {
        clearInterval(interval);
        setShow(true);
      }
    }, 600);
    return () => clearInterval(interval);
  }, []);

  if (!show) {
    return (
      <div className="type-reveal-loading">
        <div className="reveal-spinner" />
        <p className="reveal-text">{REVEAL_TEXTS[phase]}</p>
      </div>
    );
  }

  return (
    <div className="type-reveal" style={{ background: type.bgGradient }}>
      <div className="type-reveal-content">
        <span className="type-emoji-large">{type.emoji}</span>
        <h2 className="type-code-display">{type.code}</h2>
        <h1 className="type-name-display">{type.name}</h1>
        <p className="type-tagline">"{type.tagline}"</p>
        <div className="type-traits">
          {type.traits.map((trait, i) => (
            <div key={i} className="type-trait-item">
              <span className="trait-bullet">•</span>
              <span>{trait}</span>
            </div>
          ))}
        </div>
        <div className="type-ideal-job">
          <span className="job-label">🎯 适合你的工作：</span>
          <span>{type.idealJob}</span>
        </div>
      </div>
    </div>
  );
}
