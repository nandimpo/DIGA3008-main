import { Link } from 'react-router-dom';
import '../../styles/Portfolio(home).css';
import useHandwriting from '../../hooks/useHandwriting';
import useMouseGradient from '../../hooks/useMouseGradient';

export default function PortfolioHome() {
  useHandwriting();
  useMouseGradient();

  return (
    <>
      <div className="portfolio-container">
          <div className="portfolio-header">
            <h1 id="mainTitle" className="story-intro-stack story-intro-stack--center" role="text" aria-label="My Portfolio is Me, My Portfolio is Versatile, My Portfolio is Jampacked">
              <span className="story-intro-highlight" aria-hidden="true">My Portfolio</span>
              <span className="story-intro-is" aria-hidden="true">is</span>
              <span className="story-intro-cycle-wrap" aria-hidden="true">
                <span className="story-intro-cycle" style={{ minWidth: '8ch' }}>
                  <span className="cycle-word" style={{ animationDuration: '3.6s', animationDelay: '0s' }}>Me</span>
                  <span className="cycle-word" style={{ animationDuration: '3.6s', animationDelay: '-1.2s' }}>Versatile</span>
                  <span className="cycle-word" style={{ animationDuration: '3.6s', animationDelay: '-2.4s' }}>Jampacked</span>
                </span>
                <span className="story-intro-rule"></span>
              </span>
            </h1>
            <p id="subTitle">Animation | Design | Essays</p>
            <p className="portfolio-intro">
              I am Nandi Mpofu and I am from Johannesburg. I am an animator, designer, and writer. I am currently proficient in English and French writing. The software I'm most comfortable with includes Unity, Blender, and the Photoshop suite. I'm particularly interested in design, specifically editorial design and production design.
            </p>

            <div className="portfolio-buttons">
              <a href="#portfolio-animations" className="portfolio-link">Animation</a>
              <a href="#portfolio-designs" className="portfolio-link">Design</a>
              <a href="#portfolio-previous-work" className="portfolio-link">Previous Work</a>
            </div>
          </div>
        </div>

        <section className="project-row-section" id="portfolio-skills">
          <h2 className="project-row-heading">Skills</h2>
          <div className="skill-grid">
            <span className="skill-tag"><i className="fa-brands fa-adobe" aria-hidden="true"></i> Adobe Creative Cloud</span>
            <span className="skill-tag"><i className="fa-brands fa-microsoft" aria-hidden="true"></i> Microsoft Office</span>
            <span className="skill-tag"><i className="fa-solid fa-cube" aria-hidden="true"></i> Unity</span>
            <span className="skill-tag"><i className="fa-solid fa-palette" aria-hidden="true"></i> Canva</span>
            <span className="skill-tag"><i className="fa-solid fa-cubes" aria-hidden="true"></i> Blender</span>
            <span className="skill-tag"><i className="fa-solid fa-code" aria-hidden="true"></i> Coding (C# / CSS / HTML / JavaScript)</span>
          </div>
        </section>

        <section className="project-row-section" id="portfolio-languages">
          <h2 className="project-row-heading">Languages</h2>
          <div className="skill-grid">
            <span className="skill-tag"><i className="fa-solid fa-language" aria-hidden="true"></i> English</span>
            <span className="skill-tag"><i className="fa-solid fa-language" aria-hidden="true"></i> French</span>
            <span className="skill-tag"><i className="fa-solid fa-language" aria-hidden="true"></i> IsiZulu</span>
          </div>
        </section>

        <section className="project-row-section" id="portfolio-animations">
          <h2 className="project-row-heading">Animations</h2>
          <div className="project-row-list">
            <Link className="project-row" to="/portfolio/animation/homer-evolution">
              <span className="project-row-body">
                <span className="project-row-title">Homer Simpson, An Animation Evolution</span>
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

        <section className="project-row-section" id="portfolio-designs">
          <h2 className="project-row-heading">Designs</h2>
          <div className="project-row-list">
            <Link className="project-row" to="/portfolio/design/absa-nextgen">
              <span className="project-row-body">
                <span className="project-row-title">ABSA NextGen Wealth Studio</span>
                <span className="project-row-hook">A modern wealth management experience designed for the next generation of investors.</span>
              </span>
              <span className="project-row-arrow" aria-hidden="true">→</span>
            </Link>
            <Link className="project-row" to="/portfolio/design/istyla-senkosi">
              <span className="project-row-body">
                <span className="project-row-title">I'Styla Senkosi</span>
                <span className="project-row-hook">An interactive documentary exploring the past, present, and future of township fashion.</span>
              </span>
              <span className="project-row-arrow" aria-hidden="true">→</span>
            </Link>
            <Link className="project-row" to="/portfolio/design/rock-creative-agency">
              <span className="project-row-body">
                <span className="project-row-title">Rock Creative Agency</span>
                <span className="project-row-hook">A branding and PR agency website designed for a service-based business.</span>
              </span>
              <span className="project-row-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section className="project-row-section" id="portfolio-previous-work">
          <h2 className="project-row-heading">Previous Work</h2>
          <div className="project-row-list">
            <Link className="project-row" to="/portfolio/essays">
              <span className="project-row-body">
                <span className="project-row-title">My CV &amp; Experience</span>
                <span className="project-row-hook">Profile, education, and a full employment history.</span>
              </span>
              <span className="project-row-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
    </>
  );
}
