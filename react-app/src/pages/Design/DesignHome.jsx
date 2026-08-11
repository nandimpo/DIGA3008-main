import { Link } from 'react-router-dom';
import '../../styles/Design(home).css';
import useHandwriting from '../../hooks/useHandwriting';
import useMouseGradient from '../../hooks/useMouseGradient';
import useCardEntrance from '../../hooks/useCardEntrance';

export default function DesignHome() {
  useHandwriting();
  useMouseGradient();
  useCardEntrance();

  return (
    <>
      <header className="design-header">
          <h1 id="mainTitle" className="title-hidden">DESIGN</h1>
          <p id="subTitle" className="title-hidden">
            The goal of my website is for users to understand who I am as a designer. I would also like my website to be user-friendly.
            Therefore, it will be clear, understandable, and accessible. I would like my website to be warm, welcoming, and inviting.
          </p>
        </header>


        <main className="design-container">
       
          <section className="design-grid">
            <Link to="/design/wireframes" className="card design-box">
              <i className="fa-solid fa-pencil-ruler"></i>
              Wireframes
            </Link>
            <Link to="/design/research" className="card design-box">
              <i className="fa-solid fa-chart-line"></i>
              Design Research
            </Link>
            <Link to="/design/inspiration" className="card design-box">
              <i className="fa-solid fa-lightbulb"></i>
              Design Inspiration
            </Link>
            <Link to="/design/style-guides" className="card design-box">
              <i className="fa-solid fa-palette"></i>
              Style Guides
            </Link>
            <Link to="/design/style-process" className="card design-box">
              <i className="fa-solid fa-file-alt"></i>
              Style Process Documentation
            </Link>
            <Link to="/design/ixd-process" className="card design-box">
              <i className="fa-solid fa-diagram-project"></i>
              IxD Process Documentation
            </Link>
          </section>

          
          <aside className="featured-work">
            <h3>Featured Work</h3>
            <ul>
              <li><i className="fa-solid fa-pencil-ruler"></i> <strong>Wireframes:</strong> Initial sketches and structural layouts</li>
              <li><i className="fa-solid fa-chart-line"></i> <strong>Design Research:</strong> Market analysis and user insights</li>
              <li><i className="fa-solid fa-lightbulb"></i> <strong>Design Inspiration:</strong> Sources that influenced my creative direction</li>
              <li><i className="fa-solid fa-palette"></i> <strong>Style Guides:</strong> Color palettes, typography, and visual elements</li>
              <li><i className="fa-solid fa-file-alt"></i> <strong>Process Documentation:</strong> Step-by-step development methodology</li>
              <li><i className="fa-solid fa-diagram-project"></i> <strong>IxD Documentation:</strong> Interaction design decisions and implementation</li>
            </ul>
          </aside>
        </main>
    </>
  );
}
