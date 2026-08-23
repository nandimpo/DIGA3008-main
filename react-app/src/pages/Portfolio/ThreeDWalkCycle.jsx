import { Link } from 'react-router-dom';
import '../../styles/Writing.css';
import PortfolioFooterNav from '../../components/PortfolioFooterNav';

export default function ThreeDWalkCycle() {
  return (
    <>
      <main className="project-row-section">
        <div className="notebook-sheet">
          <Link className="project-detail-back" to="/portfolio/animation">← Back to Animations</Link>

          <p className="project-detail-eyebrow">Animation</p>
          <h1 className="project-detail-title">3D Walk Cycle</h1>
          <p className="project-detail-summary">
            A character walk cycle built to explore the core principles of animation — timing, exaggeration,
            and anticipation — through a single repeating motion.
          </p>

          <img className="project-detail-hero" src="/Images/Portfolio/Walk cycle.gif" alt="Character walk cycle animation" />

          <div className="project-detail-body">
            <div className="project-detail-story">
              <h2>Long story short</h2>
              <p>
                This walk cycle was built as a focused study rather than a narrative piece — the goal was to
                get the fundamentals right. Every pose was pushed slightly further than natural movement would
                allow, using exaggeration to keep the motion readable and anticipation to give each step
                weight before it lands.
              </p>
            </div>
            <div className="project-detail-aside">
              <div className="project-detail-aside-group">
                <h3>Focus</h3>
                <div className="project-detail-tags">
                  <span className="project-detail-tag">Timing</span>
                  <span className="project-detail-tag">Exaggeration</span>
                  <span className="project-detail-tag">Anticipation</span>
                </div>
              </div>
            </div>
          </div>

          <p className="project-detail-note">
            More process shots coming soon — pose breakdowns, timing charts, or reference footage would make
            a great addition here.
          </p>
        </div>
      </main>

      <PortfolioFooterNav />
    </>
  );
}
