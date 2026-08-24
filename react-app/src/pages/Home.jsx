import { Link } from 'react-router-dom';
import '../styles/Home.css';
import useHandwriting from '../hooks/useHandwriting';
import useChapterNav from '../hooks/useChapterNav';

export default function Home() {
  useHandwriting();
  useChapterNav();

  return (
    <>
      <nav className="chapter-nav" aria-label="Page chapters">
        <a href="#intro" className="chapter-dot active" data-chapter="intro"><span>Intro</span></a>
        <a href="#story" className="chapter-dot" data-chapter="story"><span>Story</span></a>
        <a href="#case-studies" className="chapter-dot" data-chapter="case-studies"><span>Case Studies</span></a>
        <a href="#work" className="chapter-dot" data-chapter="work"><span>Work</span></a>
        <a href="#contact" className="chapter-dot" data-chapter="contact"><span>Contact</span></a>
      </nav>

      <section id="intro" className="story-intro-section">
        <div className="story-intro-corner">
          <span className="story-intro-name">Nandi <em>Mpofu</em></span>
          <span className="story-intro-logo" aria-hidden="true">
            <svg viewBox="0 0 60 60">
              <circle className="logo-ring" cx="30" cy="30" r="26" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 8" strokeLinecap="round" />
              <circle className="logo-core" cx="30" cy="30" r="14" />
              <text x="30" y="35" textAnchor="middle" className="logo-initials">NM</text>
            </svg>
          </span>
        </div>

        <div className="story-intro-content">
          <h1 id="mainTitle" className="story-intro-stack" role="text" aria-label="Storytelling is Fun, Storytelling is Everywhere, Storytelling is Design, Storytelling is Creative, Storytelling is Nandi">
            <span className="story-intro-highlight" aria-hidden="true">Storytelling</span>
            <span className="story-intro-is" aria-hidden="true">is</span>
            <span className="story-intro-cycle-wrap" aria-hidden="true">
              <span className="story-intro-cycle">
                <span className="cycle-word">Fun</span>
                <span className="cycle-word">Everywhere</span>
                <span className="cycle-word">Design</span>
                <span className="cycle-word">Creative</span>
                <span className="cycle-word">Nandi</span>
              </span>
              <span className="story-intro-rule"></span>
            </span>
          </h1>

          <Link className="story-intro-aside" to="/design">
            <svg className="story-intro-aside-arrow" viewBox="0 0 90 60" aria-hidden="true">
              <defs>
                <marker id="arrowhead-aside" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                  <path d="M0,0 L8,4 L0,8 Z" fill="currentColor" />
                </marker>
              </defs>
              <path d="M8,10 C 30,15 50,35 78,50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" markerEnd="url(#arrowhead-aside)" />
            </svg>
            <span>Get a sneak peek into my design journal</span>
          </Link>
        </div>
      </section>

      <section id="story" className="about-section">
        <div className="about-container">
          <div className="about-text">
            <h2>This is<br /><span>My Story</span></h2>
            <p className="story-beat">
              I am a <strong>people to people designer</strong>. A logical creative, I use art, technology &amp; storytelling to try and make the world a better place. I just love to design.
            </p>
            <p className="story-beat">
              I fell in love with design through storytelling, across illustration, animation, and interaction.
            </p>
            <p className="story-beat">
              Working between Johannesburg and online creative spaces, I document stories through visuals, thoughtful interfaces, and words.
              I'm passionate about creating work that values empathy, accessibility, and community.
            </p>
            <p className="story-beat">
              Whether coding interfaces, designing animations, or writing essays, I aim to bridge art and tech with purpose, and I'm increasingly drawn toward <strong>immersive experience design</strong>, building the kind of interactive,
              story-driven work you're scrolling through right now.
            </p>
          </div>
          <div className="about-image">
            <img src="/Images/Miscallanous/About me.gif" alt="These are series of photos that I took for my 'About Me' page" />
          </div>
        </div>
      </section>

      <section id="case-studies" className="case-studies-section">
        <p className="case-studies-label">Case Studies</p>
        <h2 className="case-studies-heading">Stories Behind the Work</h2>

        <div className="case-study-list">
          <Link className="case-study-row" to="/portfolio/design/absa-nextgen">
            <span className="case-study-number">01</span>
            <span className="case-study-body">
              <span className="case-study-title">ABSA NextGen Wealth Studio</span>
              <span className="case-study-hook">Reframing wealth management as something a younger generation could actually want to open, a sleek, guided, human experience.</span>
            </span>
            <span className="case-study-tags">
              <span className="case-study-tag">UX/UI</span>
              <span className="case-study-tag">Interaction Design</span>
            </span>
          </Link>

          <Link className="case-study-row" to="/portfolio/design/istyla-senkosi">
            <span className="case-study-number">02</span>
            <span className="case-study-body">
              <span className="case-study-title">I'Styla Senkosi</span>
              <span className="case-study-hook">An interactive documentary tracing township fashion's past, present &amp; future, where storytelling and interface design meet.</span>
            </span>
            <span className="case-study-tags">
              <span className="case-study-tag">Storytelling</span>
              <span className="case-study-tag">Interactive Documentary</span>
            </span>
          </Link>

          <Link className="case-study-row" to="/portfolio/design/rock-creative-agency">
            <span className="case-study-number">03</span>
            <span className="case-study-body">
              <span className="case-study-title">Rock Creative Agency</span>
              <span className="case-study-hook">A branding &amp; PR agency site built to feel as solid as the work it sells, bold type, confident motion, and a story worth trusting.</span>
            </span>
            <span className="case-study-tags">
              <span className="case-study-tag">Branding</span>
              <span className="case-study-tag">Website Design</span>
            </span>
          </Link>
        </div>
      </section>

      <section id="work" className="recent-work-section">
        <h2 className="recent-work-heading">Recent Work</h2>
        <div className="recent-grid">
          <div className="recent-item">
            <Link to="/blogs">
              <img src="/Images/Miscallanous/Blogs home 2.jpg" alt="This image is an icon that represents the Blogs home page" />
              <p className="work-title">Blogs</p>
              <p className="work-year">2025</p>
            </Link>
          </div>
          <div className="recent-item">
            <Link to="/design">
              <img src="/Images/Miscallanous/design home 2.jpg" alt="This image is an icon that represents the Design home page" />
              <p className="work-title">Design</p>
              <p className="work-year">2025</p>
            </Link>
          </div>
          <div className="recent-item">
            <Link to="/portfolio">
              <img src="/Images/Miscallanous/portfolio home 2.jpg" alt="This image is an icon that represents the Portfolio Homepage" />
              <p className="work-title">Portfolio</p>
              <p className="work-year">2025</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
