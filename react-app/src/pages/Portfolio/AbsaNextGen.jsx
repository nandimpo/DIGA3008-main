import { Link } from 'react-router-dom';
import '../../styles/Writing.css';
import PortfolioFooterNav from '../../components/PortfolioFooterNav';

export default function AbsaNextGen() {
  return (
    <>
      <main className="notebook-sheet">
        <div className="notebook-content">
          <Link className="project-detail-back" to="/portfolio/design">← Back to Design</Link>

          <p className="project-detail-eyebrow">Design</p>
          <h1 className="project-detail-title">ABSA NextGen Wealth Studio</h1>
          <p className="project-detail-summary">
            A modern wealth management experience designed for the next generation of investors.
          </p>

          <img className="project-detail-hero" src="/Images/Portfolio/Absa next gen/1.png" alt="ABSA NextGen Wealth Studio interface design" />

          <div className="project-detail-body">
            <div className="project-detail-story">
              <h2>Long story short</h2>
              <p>
                This project explores a sleek, user-centred interface for ABSA's NextGen Wealth Studio. The
                design focuses on intuitive navigation, modern aesthetics, and making financial planning more
                engaging for younger users — reframing wealth management as something people could actually
                want to open.
              </p>
            </div>
            <div className="project-detail-aside">
              <div className="project-detail-aside-group">
                <h3>Services</h3>
                <div className="project-detail-tags">
                  <span className="project-detail-tag">UX/UI</span>
                  <span className="project-detail-tag">Interaction Design</span>
                </div>
              </div>
            </div>
          </div>

          <a className="btn project-detail-visit" href="https://nandimpo.github.io/Assignment-2/" target="_blank" rel="noopener noreferrer">Visit Website</a>

          <div className="project-detail-gallery">
            <figure className="project-detail-frame">
              <img src="/Images/Portfolio/Absa next gen/2.png" alt="ABSA NextGen Wealth Studio impact stats" />
              <figcaption>Impact stats and a growth-mindset quote</figcaption>
            </figure>
            <figure className="project-detail-frame">
              <img src="/Images/Portfolio/Absa next gen/3.png" alt="ABSA NextGen Wealth Studio Your Soil section" />
              <figcaption>Your Soil — building financial foundations</figcaption>
            </figure>
            <figure className="project-detail-frame">
              <img src="/Images/Portfolio/Absa next gen/7.png" alt="ABSA NextGen Wealth Studio Finance School section" />
              <figcaption>Finance School — learn as you grow</figcaption>
            </figure>
            <figure className="project-detail-frame">
              <img src="/Images/Portfolio/Absa next gen/12.png" alt="ABSA NextGen Wealth Studio additional screen" />
            </figure>
            <figure className="project-detail-frame">
              <img src="/Images/Portfolio/Absa next gen/9.png" alt="ABSA NextGen Wealth Studio footer" />
              <figcaption>Footer — plant your seed</figcaption>
            </figure>
            <figure className="project-detail-frame">
              <img src="/Images/Portfolio/Absa next gen/Absa next Gen Style guide.png" alt="ABSA NextGen Wealth Studio brand style guide" />
              <figcaption>Brand style guide — palette, typography &amp; tone of voice</figcaption>
            </figure>
          </div>

          <div className="project-detail-process">
            <h2 className="project-detail-process-heading">From My Design Journal</h2>
            <p className="project-detail-process-note">
              A peek behind the final screens — mapping every studio before drawing a single pixel, then
              stress-testing each flow across desktop, tablet, and mobile.
            </p>
            <div className="process-scroll">
              <figure className="process-page">
                <img src="/Images/DesignProcess/ABSA NEXT GEN/Studios/WEBSITE SITEMAP (Community).png" alt="ABSA NextGen website sitemap" />
                <figcaption>Sitemap — mapping the five studios</figcaption>
              </figure>
              <figure className="process-page">
                <img src="/Images/DesignProcess/ABSA NEXT GEN/Landing/Responsive Wireframes (Community).png" alt="ABSA NextGen landing page responsive wireframes" />
                <figcaption>Landing page wireframes — desktop, tablet &amp; mobile</figcaption>
              </figure>
              <figure className="process-page">
                <img src="/Images/DesignProcess/ABSA NEXT GEN/Money snapshot/Responsive Wireframes (Money snapshot).png" alt="ABSA NextGen Money Snapshot responsive wireframes" />
                <figcaption>Money Snapshot wireframes — desktop, tablet &amp; mobile</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </main>

      <PortfolioFooterNav />
    </>
  );
}
