import { Link } from 'react-router-dom';
import PortfolioFooterNav from '../../components/PortfolioFooterNav';

export default function Essays() {
  return (
    <>
      <main className="notebook-sheet">
        <div className="notebook-content">
          <Link className="project-detail-back" to="/portfolio">← Back to Portfolio</Link>

          <p className="project-detail-eyebrow">Portfolio</p>
          <h1 className="project-detail-title">Previous Work</h1>
          <p className="project-detail-summary">
            A creative professional with experience in teaching, writing, editorial management, communications,
            marketing, and AI training. Skilled in project management, content production, social media strategy,
            and curating digital and written materials.
          </p>

          <div className="project-detail-body">
            <div className="project-detail-story">
              <h2>Education</h2>
              <ul>
                <li><strong>Bachelor of Arts (French and Psychology)</strong> — University of the Witwatersrand (Expected Jun 2026)</li>
                <li><strong>Bachelor of Digital Arts</strong> — University of the Witwatersrand (Expected Jun 2026)</li>
              </ul>

              <h2>Employment</h2>

              <h3>Communications and Customer Experience Liaison — Skybookings</h3>
              <p className="role-date">Nov 2025 – Present</p>
              <p>Duties: Communicating with clients, social media management, marketing.</p>

              <h3>Communications and Marketing — African Fashion Research Institute</h3>
              <p className="role-date">Oct 2025 – Feb 2026</p>
              <p>Duties: Social media management, marketing, content production.</p>

              <h3>Editorial and Production Manager — Braamfontein Fashion Week</h3>
              <p className="role-date">Mar 2025 – Nov 2025</p>
              <p>Duties: Editorial writing, content creation, project management.</p>

              <h3>Editorial Writer — Escopia</h3>
              <p className="role-date">Feb 2025 – Mar 2025</p>
              <p>Duties: Editorial writing.</p>

              <h3>Public Relations Assistant — Maijiwe Media (The Loeries 2024 / Metro FM)</h3>
              <p className="role-date">Sep 2024 – Feb 2025</p>
              <p>Duties: Writing press releases, content creation.</p>

              <h3>English Teacher — Maximo Nivel</h3>
              <p className="role-date">Aug 2021 – Jan 2024</p>
              <p>Duties: Teaching, lesson planning, curating and writing teaching material.</p>

              <h3>English Teacher — Eigox</h3>
              <p className="role-date">Mar 2021 – Aug 2021</p>
              <p>Duties: Teaching, lesson planning, curating teaching material.</p>

              <h3>Netball Coach — Brescia House School</h3>
              <p className="role-date">Jul 2019 – Dec 2020</p>

              <h3>Junior Netball Coach — Fourways High School</h3>
              <p className="role-date">Feb 2019 – Dec 2019</p>
            </div>
          </div>
        </div>
      </main>

      <PortfolioFooterNav />
    </>
  );
}
