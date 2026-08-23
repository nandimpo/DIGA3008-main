import { Link } from 'react-router-dom';
import '../../styles/Writing.css';
import useHandwriting from '../../hooks/useHandwriting';
import PortfolioFooterNav from '../../components/PortfolioFooterNav';

export default function Animation() {
  useHandwriting();

  return (
    <>
      <div className="page-heading">
          <h1 id="mainTitle">Animations</h1>
          <p className="page-subtitle">
            Here you can find my animations. Once you are done, feel free to explore the rest of my <strong>portfolio</strong>.
          </p>
        </div>

        <main>
          <section className="project-row-section">
            <div className="project-row-list">
              <Link className="project-row" to="/portfolio/animation/homer-evolution">
                <span className="project-row-body">
                  <span className="project-row-title">Homer Simpson — An Animation Evolution</span>
                  <span className="project-row-hook">Three studies tracing one character from a blinking loop to a full walk cycle to weighted object interaction.</span>
                </span>
                <span className="project-row-arrow" aria-hidden="true">→</span>
              </Link>

              <Link className="project-row" to="/portfolio/animation/3d-walk-cycle">
                <span className="project-row-body">
                  <span className="project-row-title"><span className="glyph-fallback">3</span>D Walk Cycle</span>
                  <span className="project-row-hook">A character walk cycle built around timing, exaggeration, and anticipation.</span>
                </span>
                <span className="project-row-arrow" aria-hidden="true">→</span>
              </Link>

              <Link className="project-row" to="/portfolio/animation/lip-sync">
                <span className="project-row-body">
                  <span className="project-row-title">Lip Sync</span>
                  <span className="project-row-hook">A character performance study focused on timing, staging, and lip sync accuracy.</span>
                </span>
                <span className="project-row-arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </section>
        </main>

      <PortfolioFooterNav />
    </>
  );
}
