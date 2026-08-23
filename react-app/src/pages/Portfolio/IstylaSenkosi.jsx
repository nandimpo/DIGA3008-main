import { Link } from 'react-router-dom';
import '../../styles/Writing.css';
import PortfolioFooterNav from '../../components/PortfolioFooterNav';

export default function IstylaSenkosi() {
  return (
    <>
      <main className="notebook-sheet">
        <div className="notebook-content">
          <Link className="project-detail-back" to="/portfolio/design">← Back to Design</Link>

          <p className="project-detail-eyebrow">Design</p>
          <h1 className="project-detail-title">I'Styla Senkosi</h1>
          <p className="project-detail-summary">
            An interactive documentary exploring the past, present, and future of township fashion.
          </p>

          <img className="project-detail-hero" src="/Images/Portfolio/Istyla Senkosi/1.png" alt="I'Styla Senkosi interactive documentary design" />

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

          <div className="project-detail-gallery">
            <figure className="project-detail-frame">
              <img src="/Images/Portfolio/Istyla Senkosi/2.png" alt="I'Styla Senkosi chapters menu" />
              <figcaption>Chapters — Swenka, Pantsula, Skhothane, Reflection</figcaption>
            </figure>
            <figure className="project-detail-frame">
              <img src="/Images/Portfolio/Istyla Senkosi/5.png" alt="I'Styla Senkosi Swenka chapter" />
              <figcaption>Chapter 01 — Swenka</figcaption>
            </figure>
            <figure className="project-detail-frame">
              <img src="/Images/Portfolio/Istyla Senkosi/9.png" alt="I'Styla Senkosi editorial archive" />
              <figcaption>Editorial Archive — visual reference</figcaption>
            </figure>
            <figure className="project-detail-frame">
              <img src="/Images/Portfolio/Istyla Senkosi/12.png" alt="I'Styla Senkosi additional screen" />
            </figure>
            <figure className="project-detail-frame">
              <img src="/Images/Portfolio/Istyla Senkosi/Intro video.gif" alt="I'Styla Senkosi intro interaction" />
              <figcaption>Intro interaction</figcaption>
            </figure>
            <figure className="project-detail-frame">
              <img src="/Images/Portfolio/Istyla Senkosi/Skothane interaction.gif" alt="I'Styla Senkosi Skothane interaction" />
            </figure>
            <figure className="project-detail-frame">
              <img src="/Images/Portfolio/Istyla Senkosi/_Pitch Deck for Istyla Senkosi/1.png" alt="I'Styla Senkosi pitch deck cover" />
              <figcaption>Pitch deck cover — Past, Present and Future of Township Fashion</figcaption>
            </figure>
          </div>

          <div className="project-detail-process">
            <h2 className="project-detail-process-heading">From My Design Journal</h2>
            <p className="project-detail-process-note">
              A page from the visual design document — the mood board and chapter breakdown that shaped
              the documentary's colour, rhythm, and pacing long before it was interactive.
            </p>
            <div className="process-scroll">
              <figure className="process-page">
                <img src="/Images/DesignProcess/_Visual Design Document (VDD)/1.png" alt="I'Styla Senkosi visual design document cover" />
                <figcaption>Visual design document cover</figcaption>
              </figure>
              <figure className="process-page">
                <img src="/Images/DesignProcess/_Visual Design Document (VDD)/6.png" alt="I'Styla Senkosi visual direction mood board" />
                <figcaption>Visual direction — mood board &amp; palette</figcaption>
              </figure>
              <figure className="process-page">
                <img src="/Images/DesignProcess/_Visual Design Document (VDD)/9.png" alt="I'Styla Senkosi chapter breakdown" />
                <figcaption>Chapter breakdown — Pantsula &amp; Skhothane</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </main>

      <PortfolioFooterNav />
    </>
  );
}
