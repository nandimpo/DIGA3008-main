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
        <a href="#hero" className="chapter-dot active" data-chapter="hero"><span>Intro</span></a>
        <a href="#story" className="chapter-dot" data-chapter="story"><span>Story</span></a>
        <a href="#work" className="chapter-dot" data-chapter="work"><span>Work</span></a>
        <a href="#contact" className="chapter-dot" data-chapter="contact"><span>Contact</span></a>
      </nav>

      <div id="hero" className="hero-background-wrapper">
        <div className="hero-overlay">
          <h1 className="hero-heading title-hidden" id="mainTitle"><span className="word">Nandi</span> <span className="word">Mpofu</span></h1>
          <p className="hero-subheading title-hidden" id="subTitle">
            Design <span className="divider">|</span>
            Animation <span className="divider">|</span>
            Writing
          </p>
          <a href="#story" className="about-link">About Me</a>

          <div className="scroll-cue">
            <span>Scroll to explore</span>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        </div>

        <svg className="hero-wave" viewBox="0 0 1600 200" preserveAspectRatio="none" aria-hidden="true">
          <g className="wave wave-back">
            <path d="M0,120 C200,180 400,60 600,110 C800,160 1000,60 1200,100 C1350,130 1500,90 1600,110 L1600,200 L0,200 Z" />
            <path d="M0,120 C200,180 400,60 600,110 C800,160 1000,60 1200,100 C1350,130 1500,90 1600,110 L1600,200 L0,200 Z" transform="translate(1600 0)" />
          </g>
          <g className="wave wave-mid">
            <path d="M0,140 C220,90 420,170 640,130 C860,90 1040,170 1260,120 C1400,90 1520,140 1600,130 L1600,200 L0,200 Z" />
            <path d="M0,140 C220,90 420,170 640,130 C860,90 1040,170 1260,120 C1400,90 1520,140 1600,130 L1600,200 L0,200 Z" transform="translate(1600 0)" />
          </g>
          <g className="wave wave-front">
            <path d="M0,160 C240,130 460,190 680,150 C900,110 1080,180 1300,150 C1420,135 1520,160 1600,150 L1600,200 L0,200 Z" />
            <path d="M0,160 C240,130 460,190 680,150 C900,110 1080,180 1300,150 C1420,135 1520,160 1600,150 L1600,200 L0,200 Z" transform="translate(1600 0)" />
          </g>
        </svg>
      </div>

      <section id="story" className="about-section">
        <div className="about-container">
          <div className="about-text">
            <h2>This is<br /><span>My Story</span></h2>
            <p className="story-beat">
              I fell in love with design through storytelling—across illustration, animation, and interaction.
            </p>
            <p className="story-beat">
              Working between Johannesburg and online creative spaces, I document stories through visuals, thoughtful interfaces, and words.
              I'm passionate about creating work that values empathy, accessibility, and community.
            </p>
            <p className="story-beat">
              Whether coding interfaces, designing animations, or writing essays, I aim to bridge art and tech with purpose—
              and I'm increasingly drawn toward <strong>immersive experience design</strong>, building the kind of interactive,
              story-driven work you're scrolling through right now.
            </p>
          </div>
          <div className="about-image">
            <img src="/Images/Miscallanous/About me.gif" alt="These are series of photos that I took for my 'About Me' page" />
          </div>
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
          <div className="recent-item">
            <Link to="/scripts">
              <img src="/Images/Miscallanous/scripts home 2.jpg" alt="This image is an icon that represents the Scripts homepage" />
              <p className="work-title">Scripts</p>
              <p className="work-year">2025</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
