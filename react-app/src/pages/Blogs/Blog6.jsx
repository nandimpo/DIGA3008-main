import { Link } from 'react-router-dom';
import '../../styles/Blogs.css';
import useGradientBackground from '../../hooks/useGradientBackground';

export default function Blog6() {
  useGradientBackground();

  return (
    <>
      <article className="blog-article-wrapper h-entry">
          <div className="e-content">
            <h1 className="p-name">Blog 6 - Research for the Design Section of my website</h1>
            <p className="blog-date dt-published" datetime="2025-03-24">24 March 2025</p>

            <p className="topic-label"><strong>Topic:</strong> Design Sections</p>

            <h3>Style Guides:</h3>
            <img src="/Images/Blogs/style guide (correct).png" alt="Style Guide" width="500" height="900" />

            <h3>Goal:</h3>
            <p className="p-summary">My goal is to have a user-friendly, accessible, and clear website that showcases who I am as a designer.</p>

            <h3>Visual Design Elements:</h3>
            <p className="p-summary">
              I want my website to have a strong typographic hierarchy. I’ll use headings to organize information and guide the user’s focus. I selected the font 'Grown' for headings for its legibility and soft curves that reflect a feminine feel. For body text, I chose 'Montserrat Classic' for its clean readability.
            </p>

            <h3>Fonts - Readability and Legibility:</h3>
            <img src="/Images/Blogs/Fonts.png" alt="Fonts Example" width="500" height="150" />
            <p className="p-summary">
              I will use a limited but expressive color palette. I chose brown to embrace my identity as a Black African woman, paired with warm yellows and oranges to evoke comfort. Cooler accent colors are added to create balance and emphasis.
            </p>

            <h3>Colour Swatches:</h3>
            <img src="/Images/Blogs/Colour palette (chosen 3).png" alt="Color Swatches" width="500" height="100" />

            <h3>Primary Colour Palette:</h3>
            <img src="/Images/Blogs/Colour palette (chosen 1).png" alt="Primary Palette" width="300" height="100" />

            <h3>Secondary Colour Palette:</h3>
            <img src="/Images/Blogs/Colour palette (chosen 2).png" alt="Secondary Palette" width="300" height="100" />

            <h3>Final Design Sketches:</h3>
            <img src="/Images/Blogs/final design sketch 1.png" width="200" height="200" />
            <img src="/Images/Blogs/final design sketch 2.png" width="200" height="200" />
            <img src="/Images/Blogs/final design sketch 3.png" width="200" height="200" />
            <img src="/Images/Blogs/final design sketch 4.png" width="200" height="200" />
            <img src="/Images/Blogs/final design sketch 5.png" width="200" height="200" />

            <h3>Wireframes - Content Mapping:</h3>
            <img src="/Images/Blogs/Mapping-Sites Content.png" alt="Content Mapping" width="500" height="300" />
            <img src="/Images/Blogs/Mapping- Experience.png" alt="Experience Mapping" width="500" height="300" />

            <h3>Interaction & Visual Hierarchy:</h3>
            <ul>
              <li>The name of the screen is the first visual anchor on each wireframe.</li>
              <li>Center-aligned content helps direct attention to important information.</li>
              <li>Bright yellow buttons attract attention and highlight interaction points.</li>
              <li>Hoverable blog cards and scroll bars support user engagement and accessibility.</li>
            </ul>

            <h3>Annotated Sketches:</h3>
            <img src="/Images/Blogs/final sketch annotated - 1.png" width="300" height="300" />
            <img src="/Images/Blogs/final sketch annotated - 2.png" width="300" height="300" />
            <img src="/Images/Blogs/final design sketch 3.png" width="300" height="350" />
            <img src="/Images/Blogs/final design sketch 4.png" width="300" height="350" />
            <img src="/Images/Blogs/final design sketch 5.png" width="300" height="350" />
          </div>
        </article>

        <div className="next-blog-container">
          <Link to="/blogs/5" className="next-blog-btn">Previous Blog</Link>
          <Link to="/blogs/7" className="next-blog-btn">Next Blog</Link>
        </div>
    </>
  );
}
