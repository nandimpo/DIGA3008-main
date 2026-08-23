import { Link } from 'react-router-dom';
import '../../styles/Writing.css';
import PortfolioFooterNav from '../../components/PortfolioFooterNav';

export default function RockCreativeAgency() {
  return (
    <>
      <main className="project-row-section">
        <div className="notebook-sheet">
          <Link className="project-detail-back" to="/portfolio/design">← Back to Design</Link>

          <p className="project-detail-eyebrow">Design</p>
          <h1 className="project-detail-title">Rock Creative Agency</h1>
          <p className="project-detail-summary">
            A branding and PR agency website designed for a service-based business, built to feel as solid
            as the work it sells.
          </p>

          <img className="project-detail-hero" src="/Images/Portfolio/Rock Creative Agency.png" alt="Rock Creative Agency website design" />

          <div className="project-detail-body">
            <div className="project-detail-story">
              <h2>Long story short</h2>
              <p>
                The project focuses on creating a modern digital presence for a creative agency, showcasing
                branding, marketing, and public relations services. The goal was a site that reads as
                confident and established from the first scroll — bold typography, considered motion, and no
                unnecessary decoration standing between the visitor and the work.
              </p>
            </div>
            <div className="project-detail-aside">
              <div className="project-detail-aside-group">
                <h3>Services</h3>
                <div className="project-detail-tags">
                  <span className="project-detail-tag">Branding</span>
                  <span className="project-detail-tag">Website Design</span>
                </div>
              </div>
            </div>
          </div>

          <a className="btn project-detail-visit" href="https://nandimpo.github.io/Rock-Creative-Agency/" target="_blank" rel="noopener noreferrer">Visit Website</a>

          <p className="project-detail-note">
            More process shots coming soon — early moodboards, wireframes, or before/after comparisons would
            make a great addition here.
          </p>
        </div>
      </main>

      <PortfolioFooterNav />
    </>
  );
}
