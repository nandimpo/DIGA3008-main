import { Link } from 'react-router-dom';
import '../../styles/Writing.css';
import PortfolioFooterNav from '../../components/PortfolioFooterNav';

export default function RockCreativeAgency() {
  return (
    <>
      <main className="notebook-sheet">
        <div className="notebook-content">
          <Link className="project-detail-back" to="/portfolio/design">← Back to Design</Link>

          <p className="project-detail-eyebrow">Design</p>
          <h1 className="project-detail-title">Rock Creative Agency</h1>
          <p className="project-detail-summary">
            A branding and PR agency website designed for a service-based business, built to feel as solid
            as the work it sells.
          </p>

          <img className="project-detail-hero" src="/Images/Portfolio/Rock Creative Agency/1.png" alt="Rock Creative Agency website design" />

          <div className="project-detail-body">
            <div className="project-detail-story">
              <h2>Long story short</h2>
              <p>
                The project focuses on creating a modern digital presence for a creative agency, showcasing
                branding, marketing, and public relations services. The goal was a site that reads as
                confident and established from the first scroll, bold typography, considered motion, and no
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

          <div className="project-detail-gallery">
            <figure className="project-detail-frame">
              <img src="/Images/Portfolio/Rock Creative Agency/2.png" alt="Rock Creative Agency Who We Are section" />
              <figcaption>Who We Are: Bold, Creative, Caring</figcaption>
            </figure>
            <figure className="project-detail-frame">
              <img src="/Images/Portfolio/Rock Creative Agency/5.png" alt="Rock Creative Agency Our Work section" />
              <figcaption>Our Work: client roster</figcaption>
            </figure>
            <figure className="project-detail-frame">
              <img src="/Images/Portfolio/Rock Creative Agency/9.png" alt="Rock Creative Agency work grid" />
              <figcaption>Work grid: Braam, Metro FM, Loeries, Cannes</figcaption>
            </figure>
            <figure className="project-detail-frame">
              <img src="/Images/Portfolio/Rock Creative Agency/6.png" alt="Rock Creative Agency additional screen" />
            </figure>
            <figure className="project-detail-frame">
              <img src="/Images/Portfolio/Rock Creative Agency/11.png" alt="Rock Creative Agency additional screen" />
            </figure>
            <figure className="project-detail-frame">
              <img src="/Images/Portfolio/Rock Creative Agency/15.png" alt="Rock Creative Agency additional screen" />
            </figure>
          </div>

          <div className="project-detail-process">
            <h2 className="project-detail-process-heading">From My Design Journal</h2>
            <p className="project-detail-process-note">
              Before the bold typography and confident scroll, there was a design document, user research,
              a typeface system, and an annotated wireframe mapping every GSAP interaction.
            </p>
            <div className="process-scroll">
              <figure className="process-page">
                <img src="/Images/DesignProcess/Assignment 1 - Design Document/1.png" alt="Rock Creative Agency design document cover" />
                <figcaption>Design document cover</figcaption>
              </figure>
              <figure className="process-page">
                <img src="/Images/DesignProcess/Assignment 1 - Design Document/5.png" alt="Rock Creative Agency user research persona" />
                <figcaption>User research: meet Zama</figcaption>
              </figure>
              <figure className="process-page">
                <img src="/Images/DesignProcess/Wireframes - Rock creative agency/Screenshot 2026-08-24 004406.png" alt="Rock Creative Agency annotated homepage wireframe" />
                <figcaption>Annotated homepage wireframe: GSAP interaction notes</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </main>

      <PortfolioFooterNav />
    </>
  );
}
