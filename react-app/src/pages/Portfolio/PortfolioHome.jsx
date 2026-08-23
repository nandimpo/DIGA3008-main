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
              I am Nandi Mpofu and I am from Johannesburg. I am an animator, designer, and writer. I am currently proficient in English and French writing. The software I'm most comfortable with includes Unity, Blender, and the Photoshop suite. I'm particularly interested in design—specifically editorial design and production design.  
            </p>
          </div>

          <section className="skills-section">
            <h2>My skills</h2>
            
            <div className="skills-container">
              <div className="skills-column">
                <h3>Skills</h3>
                <ul className="skills-list">
                  <li><i className="fa-brands fa-adobe" aria-hidden="true"></i> Adobe Creative Cloud</li>
                  <li><i className="fa-brands fa-microsoft" aria-hidden="true"></i> Microsoft Office</li>
                  <li><i className="fa-solid fa-cube" aria-hidden="true"></i> Unity</li>
                  <li><i className="fa-solid fa-palette" aria-hidden="true"></i> Canva</li>
                  <li><i className="fa-solid fa-cubes" aria-hidden="true"></i> Blender</li>
                  <li><i className="fa-solid fa-code" aria-hidden="true"></i> Coding (C# / CSS / HTML / JavaScript)</li>
                </ul>
              </div>

              <div className="skills-column">
                <h3>Languages</h3>
                <ul className="skills-list">
                  <li><i className="fa-solid fa-language" aria-hidden="true"></i> English</li>
                  <li><i className="fa-solid fa-language" aria-hidden="true"></i> French</li>
                  <li><i className="fa-solid fa-language" aria-hidden="true"></i> IsiZulu</li>
                </ul>
              </div>
            </div>

            <div className="portfolio-buttons">
              <Link to="/portfolio/animation" className="portfolio-link">Animation</Link>
              <Link to="/portfolio/design" className="portfolio-link">Design</Link>
              <Link to="/portfolio/essays" className="portfolio-link">Previous Work</Link>
            </div>
          </section>
        </div>
    </>
  );
}
