import '../../styles/Writing.css';
import useHandwriting from '../../hooks/useHandwriting';
import useNotebookAnimation from '../../hooks/useNotebookAnimation';

export default function PortfolioDesign() {
  useHandwriting();
  useNotebookAnimation();

  return (
    <>
      <div className="page-heading notebook-page">
          <h1 id="mainTitle">Design (Projects) </h1>
          <p className="page-subtitle">
            Here you can find my Game Design samples. Once you are done feel free to explore the rest of my <strong>portfolio</strong>.
          </p>
        </div>

        <main>
          <section className="section container notebook-page">
            <div className="image-grid">
             
              <div className="image-container">
                <img src="/Images/Design(games)/sign language- memory.png" alt="sign language" />
                <div className="article-title">Sign Language Card Game</div>
                <div className="article-content">
                  <input type="checkbox" className="read-more-state" id="post-1" />
                  <div className="read-more-wrap">
                    <span className="content-preview">This is a Sign Language Memory Card Game.</span>
                    <span className="read-more-target">CLICK THE CARDS TO FLIP THEM. MEMORISE THE SIGN. CLICK ANOTHER CARD. MATCH THE CARDS BEFORE THE TIME RUNS OUT!</span>
                  </div>
                  <label htmlFor="post-1" className="read-more-trigger"></label>
                </div>
              </div>

             
              <div className="image-container">
                <img src="/Images/Design(games)/Horror Wedding Game 2025-01-05 21-40-14 (1).gif" alt="3D horror game" />
                <div className="article-title">First-Person 3D Horror Game</div>
                <div className="article-content">
                  <input type="checkbox" className="read-more-state" id="post-2" />
                  <div className="read-more-wrap">
                    <span className="content-preview">In this first-person 3D horror game, players explore a chilling narrative about a toxic relationship...</span>
                    <span className="read-more-target">Set in a haunting environment, they encounter supernatural elements symbolizing emotional abuse...</span>
                  </div>
                  <label htmlFor="post-2" className="read-more-trigger"></label>
                </div>
              </div>

            
             <div className="image-container">
        <img src="/Images/Portfolio/Rock Creative Agency.png" alt="Rock Creative Agency" />
        <div className="article-title">Rock Creative Agency</div>

        <div className="article-content">
          <input type="checkbox" className="read-more-state" id="post-3" />

          <div className="read-more-wrap">
            <span className="content-preview">
              A branding and PR agency website designed for a service-based business.
            </span>

            <span className="read-more-target">
              The project focuses on creating a modern digital presence for a creative
              agency, showcasing branding, marketing, and public relations services.
            </span>
          </div>

          <label htmlFor="post-3" className="read-more-trigger"></label>

          <br /><br />

          <a className="project-link"
             href="https://nandimpo.github.io/Rock-Creative-Agency/"
             target="_blank">
            Visit Website
          </a>
        </div>
      </div>
      <div className="image-container">
        <img src="/Images/Portfolio/ABSA-NextGen.png" alt="ABSA NextGen Wealth Studio" />

        <div className="article-title">ABSA NextGen Wealth Studio</div>

        <div className="article-content">
          <input type="checkbox" className="read-more-state" id="post-4" />

          <div className="read-more-wrap">
            <span className="content-preview">
              A modern wealth management experience designed for the next generation of investors.
            </span>

            <span className="read-more-target">
              This project explores a sleek, user-centred interface for ABSA's NextGen Wealth Studio.
              The design focuses on intuitive navigation, modern aesthetics, and making financial
              planning more engaging for younger users.
            </span>
          </div>

          <label htmlFor="post-4" className="read-more-trigger"></label>

          <br /><br />

          <a className="project-link"
             href="https://nandimpo.github.io/Assignment-2/"
             target="_blank"
             rel="noopener noreferrer">
            Visit Website
          </a>
        </div>
      </div>
        </div>
        </section>
        </main>
    </>
  );
}
