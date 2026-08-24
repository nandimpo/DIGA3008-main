import { Link } from 'react-router-dom';
import '../../styles/Writing.css';
import PortfolioFooterNav from '../../components/PortfolioFooterNav';

export default function HomerEvolution() {
  return (
    <>
      <main className="notebook-sheet">
        <div className="notebook-content">
          <Link className="project-detail-back" to="/portfolio/animation">← Back to Animations</Link>

          <p className="project-detail-eyebrow">Animation</p>
          <h1 className="project-detail-title">Homer Simpson, An Animation Evolution</h1>
          <p className="project-detail-summary">
            Three character studies of Homer Simpson, built one on top of the other, from a simple blinking
            loop, to a full walk cycle, to weighted object interaction. Together they trace a single
            character's evolution through the core principles of animation.
          </p>

          <img className="project-detail-hero" src="/Images/Portfolio/Homer final.gif" alt="Homer Simpson attempting to lift a box" />

          <div className="project-detail-body">
            <div className="project-detail-story">
              <h2>Long story short</h2>
              <p>
                This project started small: a blinking loop, focused purely on timing and readability at a
                clean, simple level. Once the loop felt consistent, I moved on to a full walk cycle, drawing
                Homer in his characteristic style, a heavyset man with a bald head (save for two strands of
                hair), walking forward in his typical outfit.
              </p>
              <p>
                The final stage pushed further into weight and physical strain: Homer attempting to lift a box
                and failing. Read together, the three pieces work as a progression, each one building on the
                timing and character-acting skills of the last.
              </p>
            </div>
            <div className="project-detail-aside">
              <div className="project-detail-aside-group">
                <h3>Focus</h3>
                <div className="project-detail-tags">
                  <span className="project-detail-tag">Timing</span>
                  <span className="project-detail-tag">Loop Consistency</span>
                  <span className="project-detail-tag">Weight &amp; Strain</span>
                  <span className="project-detail-tag">Character Acting</span>
                </div>
              </div>
            </div>
          </div>

          <div className="project-detail-gallery">
            <figure className="project-detail-frame">
              <img src="/Images/Portfolio/assisgnnent2-1-ezgif.com-crop.gif" alt="Blinking character animation loop" />
              <figcaption>Stage 1: A blinking loop, focused on timing and readability.</figcaption>
            </figure>
            <figure className="project-detail-frame">
              <img src="/Images/Portfolio/Homer front walk cycle.gif" alt="Homer Simpson walk cycle" />
              <figcaption>Stage 2: A full walk cycle in Homer's characteristic style.</figcaption>
            </figure>
            <figure className="project-detail-frame">
              <img src="/Images/Portfolio/Homer final.gif" alt="Homer Simpson attempting to lift a box" />
              <figcaption>Stage 3: Homer attempts to lift a box, focusing on weight and physical strain.</figcaption>
            </figure>
          </div>

          <div className="project-detail-process">
            <h2 className="project-detail-process-heading">From My Design Journal</h2>
            <p className="project-detail-process-note">
              The reference material that shaped Homer's evolution, an animation-principles study, character
              model sheets, and the official turnaround I studied before drawing a single frame.
            </p>
            <div className="process-scroll">
              <figure className="process-page">
                <img src="/Images/Portfolio/Animation/homer/animation principles.jpg" alt="Bouncing ball timing and spacing study" />
                <figcaption>Bouncing ball study: timing &amp; spacing principles</figcaption>
              </figure>
              <figure className="process-page">
                <img src="/Images/Portfolio/Animation/homer/homer head.jpg" alt="Homer Simpson head reference sheet from multiple angles" />
                <figcaption>Reference: Homer's head from every angle</figcaption>
              </figure>
              <figure className="process-page">
                <img src="/Images/Portfolio/Animation/homer/homer sheet.jpg" alt="Homer Simpson in action reference sheet" />
                <figcaption>Reference: Homer in motion</figcaption>
              </figure>
              <figure className="process-page">
                <img src="/Images/Portfolio/Animation/homer/homer turn around.jpg" alt="Homer Simpson official model turnaround sheet" />
                <figcaption>Official model sheet: five-angle turnaround</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </main>

      <PortfolioFooterNav />
    </>
  );
}
