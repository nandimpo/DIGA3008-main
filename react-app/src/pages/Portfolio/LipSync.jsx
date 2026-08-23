import { Link } from 'react-router-dom';
import '../../styles/Writing.css';
import PortfolioFooterNav from '../../components/PortfolioFooterNav';

export default function LipSync() {
  return (
    <>
      <main className="project-row-section">
        <div className="notebook-sheet">
          <Link className="project-detail-back" to="/portfolio/animation">← Back to Animations</Link>

          <p className="project-detail-eyebrow">Animation</p>
          <h1 className="project-detail-title">Lip Sync</h1>
          <p className="project-detail-summary">
            A character performance study built around matching mouth shapes to dialogue, with an emphasis on
            timing, staging, and accuracy.
          </p>

          <img className="project-detail-hero" src="/Images/Portfolio/Animation of Rain.gif" alt="Lip sync animation" />

          <div className="project-detail-body">
            <div className="project-detail-story">
              <h2>Long story short</h2>
              <p>
                Lip sync is one of the harder animation skills to get feeling natural — the mouth shapes have
                to land on the beat without the performance feeling mechanical. This piece was a chance to
                practice exactly that: staging the character clearly, and syncing mouth shapes tightly to the
                timing of the line.
              </p>
            </div>
            <div className="project-detail-aside">
              <div className="project-detail-aside-group">
                <h3>Focus</h3>
                <div className="project-detail-tags">
                  <span className="project-detail-tag">Timing</span>
                  <span className="project-detail-tag">Staging</span>
                  <span className="project-detail-tag">Lip Sync Accuracy</span>
                </div>
              </div>
            </div>
          </div>

          <p className="project-detail-note">
            More process shots coming soon — the audio reference, mouth-shape breakdowns, or an animatic would
            make a great addition here.
          </p>
        </div>
      </main>

      <PortfolioFooterNav />
    </>
  );
}
