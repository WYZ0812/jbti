import { forwardRef } from "react";
import type { PersonalityType } from "../data/types";

interface ShareCardProps {
  type: PersonalityType;
}

/**
 * 分享卡片组件 — 被 html2canvas 截图用
 * 使用 forwardRef 以便父组件获取 DOM 引用
 */
const ShareCard = forwardRef<HTMLDivElement, ShareCardProps>(
  function ShareCard({ type }, ref) {
    return (
      <div className="share-card" ref={ref} style={{ background: type.bgGradient }}>
        <div className="share-card-header">
          <span className="share-logo">
            <span className="share-logo-j">J</span>BTI
          </span>
          <span className="share-badge">JOKE BIG TRAIT INDICATOR</span>
        </div>

        <div className="share-card-body">
          <span className="share-emoji">{type.emoji}</span>
          <h2 className="share-code">{type.code}</h2>
          <h1 className="share-name">{type.name}</h1>
          <p className="share-tagline">{type.tagline}</p>
        </div>

        <div className="share-card-footer">
          <p className="share-traits">
            {type.traits.slice(0, 3).map((t, i) => (
              <span key={i} className="share-trait-line">
                • {t}
              </span>
            ))}
          </p>
        </div>

        <div className="share-card-bottom">
          <p className="share-cta">扫码测测你是什么人格 →</p>
          <div className="share-qr-placeholder">
            <span>🔍</span>
          </div>
        </div>
      </div>
    );
  }
);

export default ShareCard;
