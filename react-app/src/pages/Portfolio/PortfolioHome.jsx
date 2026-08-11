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
            <h1 id="mainTitle">My Portfolio</h1>
            <p id="subTitle">Animation | Writing | Design | Essays</p>
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
                  <li>Adobe Creative Cloud</li>
                  <li>Microsoft Office</li>
                  <li>Unity</li>
                  <li>Canva</li>
                  <li>Blender</li>
                  <li>Coding (C# / CSS / HTML / JavaScript)</li>
                </ul>
              </div>
              
              <div className="skills-column">
                <h3>Languages</h3>
                <ul className="skills-list">
                  <li>English</li>
                  <li>French</li>
                  <li>IsiZulu</li>
                </ul>
              </div>
            </div>

            <div className="portfolio-buttons">
              <Link to="/portfolio/animation" className="portfolio-link">Animation</Link>
              <Link to="/portfolio/writing" className="portfolio-link">Writing</Link>
              <Link to="/portfolio/design" className="portfolio-link">Design</Link>
              <Link to="/portfolio/essays" className="portfolio-link">Previous Work</Link>
            </div>
          </section>
        </div>
    </>
  );
}
