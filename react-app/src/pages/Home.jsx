import { Link } from 'react-router-dom';
import '../styles/Home.css';
import useHandwriting from '../hooks/useHandwriting';

export default function Home() {
  useHandwriting();

  return (
    <>
      <div className="hero-background-wrapper">
          <div className="hero-overlay">
            <h1 className="hero-heading title-hidden" id="mainTitle">Nandi Mpofu</h1>
            <p className="hero-subheading title-hidden" id="subTitle">
              Design <span className="divider">|</span>
              Animation <span className="divider">|</span>
              Writing
            </p>
            <a href="#about" className="about-link">About Me</a>
          </div>

          <section className="recent-work-section">
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
        </div>

        <section id="about" className="about-section">
          <div className="about-container">
            <div className="about-text">
              <h2>This is<br /><span>My Story</span></h2>
              <p>
                I fell in love with design through storytelling—across illustration, animation, and interaction.
                Working between Johannesburg and online creative spaces, I document stories through visuals, thoughtful interfaces, and words.<br /><br />
                I'm passionate about creating work that values empathy, accessibility, and community.
                Whether coding interfaces, designing animations, or writing essays, I aim to bridge art and tech with purpose.
              </p>
            </div>
            <div className="about-image">
              <img src="/Images/Miscallanous/About me.gif" alt="These are series of photos that I took for my 'About Me' page" />
            </div>
          </div>
        </section>
    </>
  );
}
