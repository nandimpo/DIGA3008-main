import { Link } from 'react-router-dom';
import '../../styles/Design process.css';
import useCardFadeIn from '../../hooks/useCardFadeIn';

export default function StyleGuides() {
  useCardFadeIn();

  return (
    <>
      <header className="design-header">
          <div className="header-text-group">
            <h1>Style Guides</h1>
            <p>
              A style guide is a set of standards that ensures consistency in layout, color, and typography across a website. 
              I found that creating my own helped me define the mood and identity of my project. It gave me something to come back to whenever I felt the design drifting or becoming inconsistent.
            </p>
          </div>
        </header>


        <main className="design-content">
          <section className="inspiration-block">
            <h3>Initial Style Guide</h3>
            <img src="/Images/Style Guide.jpg" alt="Initial style guide with blue and grey" />
            <p className="p-summary">
              I felt that the blue was too bright and the grey too dark, leading to imbalance in tone. It made everything feel colder than I wanted, and it didn’t reflect my design values. 
              I wanted something warmer and softer, something that felt more personal. Looking at the original palette, I realized I had been designing based on what I thought users *expected* rather than what I wanted to express.
            </p>
          </section>

          <section className="inspiration-block">
            <h3>Final Style Guide</h3>
            <img src="/Images/Blogs/style guide (correct).png" alt="Final style guide with balanced colors" />
            <p className="p-summary">
              I added white to create more breathing space and let the other colours shine. The green was added to complement the orange, bringing calmness to the warmth. 
              This version feels way more balanced and human. It has energy without being overwhelming, and it feels grounded. I can see myself using this across all my pages with confidence. 
              The biggest shift was realizing that my colour choices could reflect *me*, not just aesthetic trends.
            </p>
          </section>

         
          <div className="button-container">
            <Link to="/design/inspiration" className="nav-button">← Design Inspiration</Link>
          </div>
        </main>
    </>
  );
}
