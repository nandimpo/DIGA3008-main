import { Link } from 'react-router-dom';
import '../../styles/Writing.css';
import useHandwriting from '../../hooks/useHandwriting';
import useNotebookAnimation from '../../hooks/useNotebookAnimation';
import PortfolioFooterNav from '../../components/PortfolioFooterNav';

export default function PortfolioDesign() {
  useHandwriting();
  useNotebookAnimation();

  return (
    <>
      <div className="page-heading notebook-page">
          <h1 id="mainTitle">Design (Projects) </h1>
          <p className="page-subtitle">
            Here you can find my Design projects. Once you are done feel free to explore the rest of my <strong>portfolio</strong>.
          </p>
        </div>

        <main>
          <section className="project-row-section">
            <div className="project-row-list">
              <Link className="project-row" to="/portfolio/design/rock-creative-agency">
                <span className="project-row-body">
                  <span className="project-row-title">Rock Creative Agency</span>
                  <span className="project-row-hook">A branding and PR agency website designed for a service-based business.</span>
                </span>
                <span className="project-row-arrow" aria-hidden="true">→</span>
              </Link>

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
            </div>
          </section>
        </main>
      <PortfolioFooterNav />
    </>
  );
}
