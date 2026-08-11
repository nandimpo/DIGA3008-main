import { Link } from 'react-router-dom';
import '../../styles/Blogs.css';
import useGradientBackground from '../../hooks/useGradientBackground';

export default function Blog11() {
  useGradientBackground();

  return (
    <>
      <article className="blog-article-wrapper h-entry">
          <div className="e-content">
            <h1 className="p-name">Blog 11 - What does an ethical internet look like to me?</h1>
            <p className="blog-date dt-published" datetime="2025-05-19">19 May 2025</p>

            <p className="topic-label"><strong>Topic:</strong> What does an ethical internet look like to you?</p>

            <p className="p-summary">An ethical internet involves education, hospitality, and safety.</p>

            <p className="p-summary">In terms of education, an ethical internet involves everyone on the internet understanding the internet and being educated on their rights (Wang, Lin & Wang, 2025). More often than not, unethical practices occur when people are not informed on how the system works and their rights within the system. In order to teach people about an ethical internet, internet ethics should be taught in universities, schools, and high schools (Wang, Lin & Wang, 2025). Therefore, when people enter the internet space, they are aware of how to behave ethically on the internet. An educated internet is an ethical internet.</p>

            <p className="p-summary">How do we teach people to be ethical on the internet? Individuals can be taught to be ethical on the internet through ethical principles like hospitality, proper distance, responsibility, and inclusion (Orgad, 2007).</p>

            <p className="p-summary">The first principle is hospitality. What inhibits hospitality on the internet is the idea of reciprocity (Orgad, 2007). There is an expectation that communication on the internet is reciprocal. If you are on a forum or group, those who participate the most will receive quicker responses versus those who do not participate at all. Therefore, those who are not active or cannot participate are excluded. An ethical internet would be a space where there is no expectation of reciprocity.</p>

            <p className="p-summary">The second principle is 'proper distance.' Proper distance involves understanding the precise degree of proximity required in our relationship. If people can create and sustain a sense of the other sufficient not only for reciprocity but for a duty of care, obligation, responsibility, and understanding (Orgad, 2007), then we can create an ethical internet. If we can create and sustain a proper distance, we can create an ethical internet.</p>

            <p className="p-summary">The third principle is responsibility (Orgad, 2007). People should have unconditional responsibility on the internet. This ethics of 'unconditionality' emphasizes that responsibility and the duty to care for other people on the internet cannot depend on reciprocity. This means that we should be responsible for ourselves and others on the internet without expecting something in return. Therefore, an ethical internet has unconditional responsibility.</p>

            <p className="p-summary">Finally, inclusivity is an important aspect of an ethical internet. This inclusivity involves those who do not subscribe to or agree with the unwritten rule of reciprocity. This means that even though you might not agree with reciprocity, you should still be included on the internet. Secondly, inclusion involves the inclusion of all voices and experiences. This means strangers should be heard even though you might not agree with their voice or experience. Where I think this inclusion should be limited is if the voice is harmful or dangerous.</p>

            <p className="p-summary">In conclusion, an ethical internet to me is educated, hospitable, maintains proper distance, responsible, and inclusive.</p>

            <h3>References</h3>
            <ul>
              <li>Orgad, S. (2007) 'The internet as a moral space: the legacy of Roger Silverstone', New Media & Society, 9(1), pp. 33–41. DOI: 10.1177/1461444807075202.</li>
              <li>Wang, Y-M., Lin, Y-C. & Wang, Y-S. (2025) 'Implement internet ethics education: What matters most?', Education and Information Technologies.</li>
            </ul>
          </div>
        </article>

        <div className="next-blog-container">
          <Link to="/blogs/10" className="next-blog-btn">Previous Blog</Link>
          <Link to="/blogs/12" className="next-blog-btn">Next Blog</Link>
        </div>
    </>
  );
}
