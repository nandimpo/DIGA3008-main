import { Link } from 'react-router-dom';
import '../../styles/Writing.css';
import PortfolioFooterNav from '../../components/PortfolioFooterNav';

export default function AbsaNextGen() {
  return (
    <>
      <main className="project-row-section">
        <div className="notebook-sheet">
          <Link className="project-detail-back" to="/portfolio/design">← Back to Design</Link>

          <p className="project-detail-eyebrow">Design</p>
          <h1 className="project-detail-title">ABSA NextGen Wealth Studio</h1>
          <p className="project-detail-summary">
            A modern wealth management experience designed for the next generation of investors.
          </p>

          <img className="project-detail-hero" src="/Images/Portfolio/ABSA-NextGen.png" alt="ABSA NextGen Wealth Studio interface design" />

          <div className="project-detail-body">
            <div className="project-detail-story">
              <h2>Long story short</h2>
              <p>
                This project explores a sleek, user-centred interface for ABSA's NextGen Wealth Studio. The
                design focuses on intuitive navigation, modern aesthetics, and making financial planning more
                engaging for younger users — reframing wealth management as something people could actually
                want to open.
              </p>
            </div>
            <div className="project-detail-aside">
              <div className="project-detail-aside-group">
                <h3>Services</h3>
                <div className="project-detail-tags">
                  <span className="project-detail-tag">UX/UI</span>
                  <span className="project-detail-tag">Interaction Design</span>
                </div>
              </div>
            </div>
          </div>

          <a className="btn project-detail-visit" href="https://nandimpo.github.io/Assignment-2/" target="_blank" rel="noopener noreferrer">Visit Website</a>

          <p className="project-detail-note">
            More process shots coming soon — user flow diagrams, wireframes, or earlier concept screens would
            make a great addition here.
          </p>
        </div>
      </main>

      <PortfolioFooterNav />
    </>
  );
}
