import { Link } from 'react-router-dom';
import '../../styles/Writing.css';
import PortfolioFooterNav from '../../components/PortfolioFooterNav';

export default function LipSync() {
  return (
    <>
      <main className="notebook-sheet">
        <div className="notebook-content">
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
                Lip sync is one of the harder animation skills to get feeling natural, the mouth shapes have
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

          <div className="project-detail-process">
            <h2 className="project-detail-process-heading">From My Design Journal</h2>
            <p className="project-detail-process-note">
              The mouth-shape library I studied before animating, matching visemes to sound before worrying
              about performance.
            </p>
            <div className="process-scroll">
              <figure className="process-page">
                <img src="/Images/Portfolio/Animation/lip sync/lips.jpg" alt="Mouth shape reference chart for lip sync" />
                <figcaption>Reference: mouth shape library for lip sync</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </main>

      <PortfolioFooterNav />
    </>
  );
}
