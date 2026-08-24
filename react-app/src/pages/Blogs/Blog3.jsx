import { Link } from 'react-router-dom';
import '../../styles/Blogs.css';
import usePaperBackground from '../../hooks/usePaperBackground';

export default function Blog3() {
  usePaperBackground();

  return (
    <>
      <article className="h-entry">
          <div className="blog-article-wrapper e-content">
            <h1 className="p-name">Blog 3: Defining and discussing my user alignment, mapping out my site's content, experience, and interface elements.</h1>
            <p className="blog-date dt-published" datetime="2025-03-03">3 March 2025</p>

           <p className="topic-label"><strong>Topic:</strong> Working through the slides for Interaction Design for the Web, define and discuss your user alignment, and map out your site's content, experience, and interface elements.</p>


            <h3>User Alignment:</h3>
            <p className="p-summary">User alignment involves the user and the goal of a website. The user’s goals and my own must align to create a successful experience. In my case, I am trying to showcase my skills to potential employers or collaborators, while the user might be trying to find examples of my work, understand my design process, or learn more about me. Therefore, the site must be clean, well-organized, and reflect who I am. I want it to feel open and welcoming while also highlighting my creativity and attention to detail.</p>

            <h3>Site’s content:</h3>
            <p className="p-summary">Mapping</p>
            <img src="/Images/Blogs/Mapping-Sites Content.png" alt="Wireframe-Images" width="500" height="300" />
            <p>The content of my website showcases the different skills I have and the areas I’ve explored throughout this course. The website is made up of five main content sections:</p>
            <ul>
              <li>Blog posts: showcases my understanding of the web and internet.</li>
              <li>Design: showcases my design process clearly and effectively.</li>
              <li>Scripts: showcases my ability to understand the functionality of the web.</li>
              <li>Image: showcases my aesthetic choices.</li>
              <li>Portfolio: showcases my additional skills and extracurricular work.</li>
            </ul>

            <h3>Experience</h3>
            <p className="p-summary">Mapping</p>
            <img src="/Images/Blogs/Mapping- Experience.png" alt="Wireframe-Images" width="500" height="300" />
            <p>I would like the user experience to be practical and useful. I have tried to make the content relevant to the user. I also want the experience to be calming and aesthetically pleasing by using warm tones that reflect my personality and the South African landscape, which is where I come from. Overall, I want the site to feel creative, thoughtful, and personal while still being easy to navigate and useful.</p>

            <h3>Interface Elements:</h3>
            <p className="p-summary">I would like the website to be appealing to look at and easy to use. These are some interface elements I plan to include:</p>
            <ul>
              <li>Input controls:
                <p>- There will be headings on the homepage that allow users to go to each section.</p>
              </li>
              <li>Navigation components:
                <p>- On all the content pages, there will be sliders to access different posts or designs.</p>
                <p>- Each blog post will have a button that navigates to the next or previous blog.</p>
                <p>- I would also like to incorporate a search field to help users find specific content.</p>
                <p>- The portfolio page will have headings for animation, design, and writing pages.</p>
                <p>- For the images, they will be presented in a list and possibly categorized for ease of access.</p>
                <p>- The scripts page will have icons for each script type.</p>
                <p>- The design page will have different headings such as "Design Process", "Wireframes", and "Inspiration".</p>
              </li>
            </ul>

            <h3>Information controls:</h3>
            <p className="p-summary">I would like to incorporate message boxes or hover effects that explain the function of a particular section or element. This makes the site more interactive and helps the user understand the content better.</p>

            <h3>Reflection</h3>
            <p className="p-summary">The exercise above depended on my understanding of interface and experience design. It allowed me to think deeply about how the user interacts with a site, how to make things clear and accessible, and how to ensure alignment between my goals and the user’s. I also thought about how to present content and structure my website to reflect who I am and what I’ve learned.</p>
          </div>
        </article>

        <div className="next-blog-container">
          <Link to="/blogs/2" className="next-blog-btn">Previous Blog</Link>
          <Link to="/blogs/4" className="next-blog-btn">Next Blog</Link>
        </div>
    </>
  );
}
