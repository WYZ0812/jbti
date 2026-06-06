import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="page home-page">
      <div className="home-content">
        <div className="home-brand">
          <h1 className="home-logo">
            <span className="home-logo-j">J</span>BTI
          </h1>
          <p className="home-subtitle">JOKE BIG TRAIT INDICATOR</p>
          <p className="home-slogan">
            玩笑大人格指标
            <span className="home-tm">™</span>
          </p>
        </div>

        <div className="home-description">
          <p className="home-desc-main">
            MBTI 已经过时了，
            <br />
            <strong>JBTI 来了。</strong>
          </p>
          <p className="home-desc-sub">
            31 道荒诞选择题 · 3 分钟解锁你的隐藏人格
            <br />
            仅供娱乐 · 请勿当真 · 当真也行
          </p>
        </div>

        <button
          className="home-cta"
          onClick={() => navigate("/quiz")}
        >
          <span className="home-cta-text">开 始 测 试</span>
          <span className="home-cta-sub">看看你是什么「鬼」</span>
        </button>

        <div className="home-footer">
          <p className="home-disclaimer">
            ⚠️ 本测试纯属娱乐，不具备任何心理学依据
          </p>
          <p className="home-disclaimer">
            创作者不对任何因测试结果引发的自我怀疑负责
          </p>
          <div className="home-stats">
            <span>已累计测试 0 人</span>
            <span className="home-dot">·</span>
            <span>准确率 100%（自称）</span>
          </div>
        </div>
      </div>
    </div>
  );
}
