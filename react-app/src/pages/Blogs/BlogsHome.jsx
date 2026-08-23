import { Link } from 'react-router-dom';
import '../../styles/Blogs (home).css';
import useHandwriting from '../../hooks/useHandwriting';
import useMouseGradient from '../../hooks/useMouseGradient';

export default function BlogsHome() {
  useHandwriting();
  useMouseGradient();

  return (
    <>
      <section className="blogs-header">
          <h1 id="mainTitle" className="story-intro-stack story-intro-stack--center" role="text" aria-label="My Blogs are Thought-Provoking, My Blogs are Not Boring, My Blogs are Deep">
            <span className="story-intro-highlight" aria-hidden="true">My Blogs</span>
            <span className="story-intro-is" aria-hidden="true">are</span>
            <span className="story-intro-cycle-wrap" aria-hidden="true">
              <span className="story-intro-cycle" style={{ minWidth: '13ch' }}>
                <span className="cycle-word" style={{ animationDuration: '3.6s', animationDelay: '0s' }}>Thought-Provoking</span>
                <span className="cycle-word" style={{ animationDuration: '3.6s', animationDelay: '-1.2s' }}>Not Boring</span>
                <span className="cycle-word" style={{ animationDuration: '3.6s', animationDelay: '-2.4s' }}>Deep</span>
              </span>
              <span className="story-intro-rule"></span>
            </span>
          </h1>
          <p>In this section you will find my blogs thus far.</p>
        </section>

       
        <div className="blog-container">
          <div className="blog-grid">
            <div className="blog-post">
              <img src="/Images/Blogshome/Blog 1.jpg" alt="Blog 1" />
              <div className="blog-post-content">
                <h3 className="blog-post-title"><span className="blog-number">Blog 1</span> - My experience setting up GitHub and publishing to Pages</h3>
                <Link to="/blogs/1" className="blog-post-button">Read More</Link>
              </div>
            </div>
            <div className="blog-post">
              <img src="/Images/Blogshome/Blog 2.jpg" alt="Blog 2" />
              <div className="blog-post-content">
                <h3 className="blog-post-title"><span className="blog-number">Blog 2</span> - Reflection on 'You Say You Want a Revolution? Hypertext and the Laws of Media'.</h3>
                <Link to="/blogs/2" className="blog-post-button">Read More</Link>
              </div>
            </div>
            <div className="blog-post">
              <img src="/Images/Blogshome/Blog 3.jpg" alt="Blog 3" />
              <div className="blog-post-content">
                <h3 className="blog-post-title"><span className="blog-number">Blog 3</span> - Defining my user alignment, mapping outsite's content, experience, and interface.</h3>
                <Link to="/blogs/3" className="blog-post-button">Read More</Link>
              </div>
            </div>
            <div className="blog-post">
              <img src="/Images/Blogshome/Blog 4.jpg" alt="Blog 4" />
              <div className="blog-post-content">
                <h3 className="blog-post-title"><span className="blog-number">Blog 4</span> - Continued Development of Website Strategy</h3>
                <Link to="/blogs/4" className="blog-post-button">Read More</Link>
              </div>
            </div>
            <div className="blog-post">
              <img src="/Images/Blogshome/Blog 5.jpg" alt="Blog 5" />
              <div className="blog-post-content">
                <h3 className="blog-post-title"><span className="blog-number">Blog 5</span> - Documentation of my IxD process</h3>
                <Link to="/blogs/5" className="blog-post-button">Read More</Link>
              </div>
            </div>
            <div className="blog-post">
              <img src="/Images/Blogshome/Blog 6.jpg" alt="Blog 6" />
              <div className="blog-post-content">
                <h3 className="blog-post-title"><span className="blog-number">Blog 6</span> - Research for the Design Section of my website</h3>
                <Link to="/blogs/6" className="blog-post-button">Read More</Link>
              </div>
            </div>
            <div className="blog-post">
              <img src="/Images/Blogshome/Blog 7.jpg" alt="Blog 7" />
              <div className="blog-post-content">
                <h3 className="blog-post-title"><span className="blog-number">Blog 7</span> - UX & UI Analysis of Ehomeaffairs.</h3>
                <Link to="/blogs/7" className="blog-post-button">Read More</Link>
              </div>
            </div>
            <div className="blog-post">
              <img src="/Images/Blogshome/Blog 8.jpg" alt="Blog 8" />
              <div className="blog-post-content">
                <h3 className="blog-post-title"><span className="blog-number">Blog 8</span> - Analysis of 'Design Justice...' by Sasha Costanza-Chock.</h3>
                <Link to="/blogs/8" className="blog-post-button">Read More</Link>
              </div>
            </div>
            <div className="blog-post">
              <img src="/Images/Blogshome/Blog 9.png" alt="Blog 9" />
              <div className="blog-post-content">
                <h3 className="blog-post-title"><span className="blog-number">Blog 9</span> - Reflection on 'Making a feminist internet in Africa:... '.</h3>
                <Link to="/blogs/9" className="blog-post-button">Read More</Link>
              </div>
            </div>
            <div className="blog-post">
              <img src="/Images/Blogshome/Blog 10.jpg" alt="Blog 10" />
              <div className="blog-post-content">
                <h3 className="blog-post-title"><span className="blog-number">Blog 10</span> - How I incorporated JavaScript into my website.</h3>
                <Link to="/blogs/10" className="blog-post-button">Read More</Link>
              </div>
            </div>
            <div className="blog-post">
              <img src="/Images/Blogshome/Blog 11.jpg" alt="Blog 11" />
              <div className="blog-post-content">
                <h3 className="blog-post-title"><span className="blog-number">Blog 11</span> - What does an ethical internet look like to me?</h3>
                <Link to="/blogs/11" className="blog-post-button">Read More</Link>
              </div>
            </div>
            <div className="blog-post">
              <img src="/Images/Blogs/Blog 12.jpg" alt="Blog 12" />
              <div className="blog-post-content">
                <h3 className="blog-post-title"><span className="blog-number">Blog 12</span> - Close reading of 'Internet Access is a Fundamental Right...' by Spyros Kasapis.</h3>
                <Link to="/blogs/12" className="blog-post-button">Read More</Link>
              </div>
            </div>
            <div className="blog-post">
              <img src="/Images/Blogshome/Reflections.jpg" alt="Reflections for Blogs" />
              <div className="blog-post-content">
                <h3 className="blog-post-title"><span className="blog-number">Reflections</span></h3>
                <Link to="/blogs/reflections" className="blog-post-button">Read More</Link>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
