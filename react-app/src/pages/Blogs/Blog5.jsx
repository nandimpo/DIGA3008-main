import { Link } from 'react-router-dom';
import '../../styles/Blogs.css';
import usePaperBackground from '../../hooks/usePaperBackground';

export default function Blog5() {
  usePaperBackground();

  return (
    <>
      <article className="blog-article-wrapper h-entry">
          <div className="e-content">
            <h1 className="p-name">Blog 5: Documentation of my IxD process</h1>
            <p className="blog-date dt-published" datetime="2025-03-17">17 March 2025</p>

            <p className="topic-label"><strong>Topic:</strong> Documentation of my IxD process.</p>

            <h3>Goal Alignment:</h3>
            <p className="p-summary">The goal of my website is for users to understand who I am as a designer. I would also like my website to be user-friendly, ensuring it is clear, understandable, and accessible. I want my website to feel warm, welcoming, and inviting to all visitors.</p>

            <h3>Site’s Content:</h3>
            <img src="/Images/Blogs/Mapping-Sites Content.png" alt="Mapping Site Content" width="500" height="300" />

            <h3>User Flow: Screens, Behaviour, and Decisions:</h3>
            <img src="/Images/Blogs/Mapping- Experience.png" alt="User Flow Mapping" width="500" height="300" />

            <h3>Style Process Documentation:</h3>
            <p className="p-summary">Possible designs: This is my initial design. I like the warm colors; however, I have not yet implemented both the primary and secondary color palettes. The design is not as warm as I would like. In the future, I want the website to feel warmer.</p>
            <img src="/Images/Blogs/style documentation 1..png" width="500" height="300" />
            <img src="/Images/Blogs/style documentation 2.png" width="500" height="300" />
            <img src="/Images/Blogs/style documentation 3.png" width="500" height="300" />
            <img src="/Images/Blogs/Style documentation 4.png" width="500" height="300" />
            <img src="/Images/Blogs/style documentation 5.png" width="500" height="300" />

            <h3>Fonts: Readability and Legibility:</h3>
            <img src="/Images/Blogs/Fonts.png" width="500" height="150" />
            <p className="p-summary">I chose the 'Grown' font for the header because it is interesting yet legible. I chose 'Montserrat Classic' as the body text because it is more legible and readable.</p>

            <h3>Colours: Colour theory and relationships:</h3>
            <img src="/Images/Blogs/Colour palette.png" width="500" height="150" />

            <h3>Primary Colour Palette:</h3>
            <img src="/Images/Blogs/Colour palette 1.png" width="400" height="150" />
            <p className="p-summary">I chose warm colors because they are inviting. Yellow and orange are analogous colors, creating a sense of harmony and unity that's pleasing to the eye.</p>

            <h3>Secondary Colour Palette:</h3>
            <img src="/Images/Blogs/Colour palette 2.png" width="350" height="150" />
            <p className="p-summary">The secondary palette contrasts the primary palette to maintain balance. Orange and blue are complementary colors that enhance visual appeal when used together.</p>

            <h3>Composition: Hierarchy, Balance, Harmony:</h3>
            <p className="p-summary">My composition is symmetrical and center-aligned for balance. Circular elements, rotation, and reflection create visual consistency, especially on the blog and portfolio screens.</p>

            <h3>Shape, Colour, Position:</h3>
            <p className="p-summary">I use circular and rounded shapes to maintain a warm and welcoming tone.</p>
            <img src="/Images/Blogs/Button 1.png" width="100" height="100" />
            <img src="/Images/Blogs/Button 2.png" width="100" height="100" />
            <img src="/Images/Blogs/Button 3.png" width="100" height="100" />

            <h3>Reference Material:</h3>
            <p className="p-summary">Website: <a href="https://dribbble.com/shots/12108232--l-gante-home-hero-slider" target="_blank">Dribbble Hero Slider</a>: I like the use of circular shapes and a soothing design environment.</p>
            <p className="p-summary">Website: <a href="https://pixcap.com/blog/warm-color-palette" target="_blank">Pixcap Warm Color Palette</a>: Helped me define a warm color palette.</p>
            <ul>
              <li>Emotional Impact: Red, orange, and yellow evoke happiness and connection.</li>
              <li>Attention-Grabbing: These hues highlight CTAs and boost engagement.</li>
              <li>Welcoming: Warm tones extend visit duration and user trust.</li>
              <li>Brand Identity: Friendly and cohesive with the intended audience.</li>
            </ul>
          </div>
        </article>

        <div className="next-blog-container">
          <Link to="/blogs/4" className="next-blog-btn">Previous Blog</Link>
          <Link to="/blogs/6" className="next-blog-btn">Next Blog</Link>
        </div>
    </>
  );
}
