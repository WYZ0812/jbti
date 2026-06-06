import { useRef, useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getTypeByCode } from "../data/types";
import type { ScoreMap } from "../utils/scorer";
import { getTypeDistribution } from "../utils/scorer";
import TypeReveal from "../components/TypeReveal";
import ShareCard from "../components/ShareCard";
import {
  generateShareImage,
  downloadImage,
  nativeShare,
  isWechatBrowser,
} from "../utils/share";

export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const shareCardRef = useRef<HTMLDivElement>(null);

  const state = location.state as
    | { typeCode: string; scores: ScoreMap }
    | undefined;

  const resultType = state ? getTypeByCode(state.typeCode) : undefined;
  const distribution = state ? getTypeDistribution(state.scores) : [];

  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showTip, setShowTip] = useState(false);

  const handleSaveImage = useCallback(async () => {
    if (!shareCardRef.current || saving) return;
    setSaving(true);
    const blob = await generateShareImage(shareCardRef.current);
    if (blob) {
      if (isWechatBrowser()) {
        // 微信内提示长按
        setShowTip(true);
      } else {
        downloadImage(blob, `JBTI-${resultType?.code ?? "UNKNOWN"}.png`);
        setSaved(true);
      }
    }
    setSaving(false);
  }, [saving, resultType]);

  const handleShare = useCallback(async () => {
    if (!resultType) return;
    let blob: Blob | null = null;
    if (shareCardRef.current) {
      blob = await generateShareImage(shareCardRef.current);
    }
    const shared = await nativeShare(resultType, blob);
    if (!shared && isWechatBrowser()) {
      setShowTip(true);
    }
  }, [resultType]);

  const handleRetry = () => {
    navigate("/quiz");
  };

  if (!resultType) {
    return (
      <div className="page result-page result-error">
        <p>😵 出了点问题……</p>
        <p>你好像还没有完成测试</p>
        <button className="btn-primary" onClick={handleRetry}>
          去测试 →
        </button>
      </div>
    );
  }

  return (
    <div className="page result-page">
      <TypeReveal type={resultType} />

      {/* 隐藏的分享卡片（供截图） */}
      <div style={{ position: "absolute", left: "-9999px", top: 0 }}>
        <ShareCard ref={shareCardRef} type={resultType} />
      </div>

      {/* 分数分布 */}
      <div className="result-distribution">
        <h3 className="dist-title">📊 你的人格成分分析</h3>
        <div className="dist-bars">
          {distribution.slice(0, 5).map(({ type, score, percentage }) => (
            <div key={type.code} className="dist-bar-row">
              <span className="dist-emoji">{type.emoji}</span>
              <span className="dist-name">
                {type.name}
                {type.code === resultType.code && " 👈"}
              </span>
              <div className="dist-bar-track">
                <div
                  className="dist-bar-fill"
                  style={{
                    width: `${Math.max(percentage, 3)}%`,
                    background: type.color,
                  }}
                />
              </div>
              <span className="dist-pct">{percentage}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* 操作按钮 */}
      <div className="result-actions">
        <button
          className="btn-primary"
          onClick={handleSaveImage}
          disabled={saving}
        >
          {saving ? "⏳ 生成中……" : saved ? "✅ 已保存" : "📸 保存分享卡片"}
        </button>
        <button className="btn-secondary" onClick={handleShare}>
          📤 分享给朋友
        </button>
        <button className="btn-ghost" onClick={handleRetry}>
          🔄 再测一次
        </button>
      </div>

      {showTip && (
        <div className="result-tip-overlay" onClick={() => setShowTip(false)}>
          <div className="result-tip-box">
            <p>💡 微信内请<strong>长按下方图片</strong>保存</p>
            <p>或点击右上角「···」分享给朋友</p>
            <button className="btn-primary" onClick={() => setShowTip(false)}>
              知道了
            </button>
          </div>
        </div>
      )}

      <footer className="result-footer">
        <p>仅供娱乐 · JBTI · 没有科学依据</p>
        <p>别太当真，但也别完全不当回事 🤪</p>
      </footer>
    </div>
  );
}
