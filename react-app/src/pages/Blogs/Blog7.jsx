import { Link } from 'react-router-dom';
import '../../styles/Blogs.css';
import useGradientBackground from '../../hooks/useGradientBackground';

export default function Blog7() {
  useGradientBackground();

  return (
    <>
      <article className="blog-article-wrapper h-entry">
          <div className="e-content">
            <h1 className="p-name">Blog 7 - UX & UI Analysis of Ehomeaffairs</h1>
            <p className="blog-date dt-published" datetime="2025-03-31">31 March 2025</p>

            <p className="topic-label"><strong>Topic:</strong> UX and UI Analysis of the Ehomeaffairs and AFA websites</p>

            <p className="p-summary">I chose the Ehomeaffairs website because it is one of the most difficult websites to navigate.</p>
            <img src="/Images/Blogs/Homeaffairs.png" alt="Ehomeaffairs screenshot" width="500" height="300" />

            <h3>Pros:</h3>
            <ul>
              <li>It is a very simple website to navigate and the information is easy to understand.</li>
              <li>It feels intuitive since the navigation bar is placed at the top, establishing a clear hierarchy. Its distinct color also enhances visibility.</li>
            </ul>

            <h3>Cons:</h3>
            <ul>
              <li>User controls are not intuitive. For example, entering OTPs often fails without proper feedback.</li>
              <li>The site is unreliable—critical features like OTP requests are inconsistent and often non-functional.</li>
            </ul>

            <img src="/Images/Blogs/Afa website.png" alt="AFA website screenshot" width="500" height="300" />
            <p className="p-summary">I chose the AFA website because I like the use of colour throughout the site.</p>

            <h3>Pros:</h3>
            <ul>
              <li>The homepage includes a video that immediately explains the site's purpose.</li>
              <li>The typography is clear and easy to read, enhancing overall usability.</li>
            </ul>

            <h3>Cons:</h3>
            <ul>
              <li>The homepage lacks context—nowhere does it clearly explain what "AFA" stands for.</li>
              <li>The site is visually overwhelming due to excessive animations that compete for attention.</li>
            </ul>
          </div>
        </article>

        <div className="next-blog-container">
          <Link to="/blogs/6" className="next-blog-btn">Previous Blog</Link>
          <Link to="/blogs/8" className="next-blog-btn">Next Blog</Link>
        </div>
    </>
  );
}
