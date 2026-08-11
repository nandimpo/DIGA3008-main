import { Link } from 'react-router-dom';
import '../../styles/Blogs.css';
import useGradientBackground from '../../hooks/useGradientBackground';

export default function Blog4() {
  useGradientBackground();

  return (
    <>
      <article className="blog-article-wrapper h-entry">
          <div className="e-content">
            <h1 className="p-name">Blog 4 - Continued Development of Website Strategy</h1>
            <p className="blog-date dt-published" datetime="2025-03-10">10 March 2025</p>

            <p className="topic-label"><strong>Topic:</strong> Reflection on Readings and Continued Development of Site Strategy</p>

            <h3>User Inclusivity:</h3>
            <p className="p-summary">Inclusive design requires empathy and anticipation of user needs. As I work through the course, I’m learning to frame design decisions from multiple perspectives—including those of users who might face accessibility barriers or cultural dissonance.</p>

            <h3>Wireframe Refinement:</h3>
            <p className="p-summary">I’ve updated my homepage wireframe to make it more intuitive, reducing visual clutter and reordering content for clarity. Button placement and page flow were changed based on peer feedback and testing on mobile devices.</p>

            <img src="/Images/Blogs/Reflections 2.png" alt="Updated Wireframe" width="500" height="300" />
            <p className="p-summary">New homepage layout wireframe</p>

            <img src="/Images/Blogs/Reflection 3.png" alt="Updated Wireframe" width="500" height="300" />
            <p className="p-summary">New portfolio layout wireframe (animation, design, writing, essay)</p>

            <img src="/Images/Blogs/Reflection 4.png" alt="Updated Wireframe" width="500" height="300" />
            <p className="p-summary">New design layout wireframe (wireframes, IXD process etc.)</p>

            <h3>Next Steps:</h3>
            <ul>
              <li>Integrate more visual cues (icons, animations) to guide users.</li>
              <li>Add keyboard navigation to interactive elements.</li>
              <li>Ensure consistent semantic structure for accessibility.</li>
            </ul>

            <h3>Reflection:</h3>
            <p className="p-summary">Designing a site for real users forces me to be intentional with structure, wording, and interactivity. I aim to build a site that’s not only personal but also inclusive and effective in communication.</p>
          </div>
        </article>

        <div className="next-blog-container">
          <Link to="/blogs/3" className="next-blog-btn">Previous Blog</Link>
          <Link to="/blogs/5" className="next-blog-btn">Next Blog</Link>
        </div>
    </>
  );
}
