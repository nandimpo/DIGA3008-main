import { Link } from 'react-router-dom';
import '../../styles/Blogs.css';
import usePaperBackground from '../../hooks/usePaperBackground';

export default function Reflections() {
  usePaperBackground();

  return (
    <>
      <article className="blog-article-wrapper h-entry">
          <div className="e-content">
            <h1 className="p-name">Reflections</h1>
            <p className="blog-date dt-published" datetime="2025-05-26">26 May 2025</p>

            <p className="topic-label"><strong>Topic:</strong> Reflections on my work and design decisions.</p>

            <p className="p-summary">After implementing my CSS, I wasn't too happy with my design...</p>

            <ul><li>Art4web: <a href="https://ss.art4web.co/" target="_blank">https://ss.art4web.co/</a></li></ul>

            <img src="/Images/Blogs/Reflections 1.png" alt="Website Inspiration" width="500" height="300" />

            <p className="p-summary">On the website above, I liked that brown was a central color...</p>

            <p className="p-summary">I also didn't like my homepage, everything felt very out of place...</p>

            <img src="/Images/Blogs/Reflections 2.png" alt="New wireframe sketch" width="500" height="300" />
            <p className="p-summary">Idea for homepage layout.</p>

            <p className="p-summary">Additionally, I'm thinking of changing my design and portfolio pages...</p>

            <img src="/Images/Blogs/Reflection 3.png" alt="Portfolio layout sketch" width="500" height="300" />
            <p className="p-summary">Idea for portfolio layout (animation, design, writing, essay).</p>

            <img src="/Images/Blogs/Reflection 4.png" alt="Design layout sketch" width="500" height="300" />
            <p className="p-summary">Idea for design layout (wireframes, IxD process, etc.).</p>
          </div>
        </article>

        <div className="next-blog-container">
          <Link to="/blogs/12" className="next-blog-btn">Previous Blog</Link>
        </div>
    </>
  );
}
