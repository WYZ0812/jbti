interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="progress-bar-wrapper">
      <div className="progress-info">
        <span className="progress-count">
          {current} / {total}
        </span>
        <span className="progress-percent">{percentage}%</span>
      </div>
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        />
        <div className="progress-emoji" style={{ left: `${percentage}%` }}>
          {percentage < 30 ? "🐢" : percentage < 60 ? "🐇" : percentage < 90 ? "🚀" : "💨"}
        </div>
      </div>
    </div>
  );
}
