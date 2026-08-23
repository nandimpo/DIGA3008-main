import { Link } from 'react-router-dom';
import '../../styles/Writing.css';
import PortfolioFooterNav from '../../components/PortfolioFooterNav';

export default function IstylaSenkosi() {
  return (
    <>
      <main className="project-row-section">
        <div className="notebook-sheet">
          <Link className="project-detail-back" to="/portfolio/design">← Back to Design</Link>

          <p className="project-detail-eyebrow">Design</p>
          <h1 className="project-detail-title">I'Styla Senkosi</h1>
          <p className="project-detail-summary">
            An interactive documentary exploring the past, present, and future of township fashion.
          </p>

          <img className="project-detail-hero" src="/Images/Portfolio/Istyla Senkosi.png" alt="I'Styla Senkosi interactive documentary design" />

          <div className="project-detail-body">
            <div className="project-detail-story">
              <h2>Long story short</h2>
              <p>
                I'Styla Senkosi is an interactive documentary experience that traces the evolution of
                township fashion in South Africa, blending visuals, sound, and storytelling to celebrate
                style as a form of cultural expression. It's the project where design and narrative overlap
                most directly with each other on this site.
              </p>
            </div>
            <div className="project-detail-aside">
              <div className="project-detail-aside-group">
                <h3>Services</h3>
                <div className="project-detail-tags">
                  <span className="project-detail-tag">Storytelling</span>
                  <span className="project-detail-tag">Interactive Documentary</span>
                </div>
              </div>
            </div>
          </div>

          <a className="btn project-detail-visit" href="https://nandimpo.github.io/istyla-senkosi/" target="_blank" rel="noopener noreferrer">Visit Website</a>

          <p className="project-detail-note">
            More process shots coming soon — research boards, interview stills, or early prototypes would
            make a great addition here.
          </p>
        </div>
      </main>

      <PortfolioFooterNav />
    </>
  );
}
