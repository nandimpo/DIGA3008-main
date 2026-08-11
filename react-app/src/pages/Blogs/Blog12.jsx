import { Link } from 'react-router-dom';
import '../../styles/Blogs.css';
import useGradientBackground from '../../hooks/useGradientBackground';

export default function Blog12() {
  useGradientBackground();

  return (
    <>
      <article className="blog-article-wrapper h-entry">
          <div className="e-content">
            <h1 className="p-name">Blog 12 - Close reading of Internet Access is a Fundamental Right. Especially, Amidst a Pandemic by Spyros Kasapis</h1>
            <p className="blog-date dt-published" datetime="2025-04-29">29 April 2025</p>

            <p className="topic-label"><strong>Topic:</strong> Close reading for "Internet Access is a Fundamental Right. Especially, Amidst a Pandemic."</p>

            <p className="p-summary">The structure of the text is an article with four paragraphs. The areas of interest in this text are internet access as a fundamental right for people.</p>
            <p className="p-summary">Aims: The current pandemic draws attention to the social inequalities framed as digital divide. In order to close it, internet access should be guaranteed to all (Kasapis, 2020, p. 1). The text explores how the pandemic exposed inequalities in this world including health care. The text highlights a specific inequality which is the digital divide. The solution they offer to close this divide is to provide internet access for all.</p>
            <p className="p-summary">Recognized for years by international organizations such as the United Nations and Amnesty International, it is also the right to internet access. In January this year, the Indian Supreme Court Internet Access is a Fundamental Right and declared it a fundamental right. The current pandemic and the economic crisis it has brought along, strengthens the view that in the digital age, free internet access should be indispensable to all members of an organized society (Kasapis, 2020, p. 1-2). This is the area of interest in this declaration by the UN that everyone has the right to internet access. This declaration was brought on by the pandemic because it exposed that not everyone had access to the internet.</p>
            <p className="p-summary">This model of course requires the cessation of direct human interactions, which intensifies digital economic activity. So those who do not have access to the internet cannot participate in this new kind of digital economy that is flourishing (Kasapis, 2020, p. 2). This is the area of interest in paragraph two. This paragraph explains how the digital divide occurred. It explains that the lack of direct human interaction meant that people had to resort to the internet to establish connection. This lack of human interaction meant that businesses suffered thus business owners had to look to the internet to stimulate the economy. However, not everyone has access to the internet and this meant that they were excluded from the digital economy. This created a digital divide and inequality.</p>
            <p className="p-summary">The important thing is that we are now not only talking about widening the gap between economic inequalities, but about a new kind of digital inequality (Kasapis, 2020, p. 2). This is the focal point of paragraph three. It illustrates that inequalities already exist in the world. However the internet is widening this inequality further and is creating a new kind of inequality which is digital.</p>
            <p className="p-summary">At the same time that Jeff Bezos is expanding his financial empire through Amazon's online sales, almost half of the world's population does not have access to this digital social and economic network (Kasapis, 2020, p. 2). The text uses the example of Jeff Bezos to illustrate the digital divide. In this example, while Jeff Bezos is accumulating millions of dollars on the internet, there are other people who do not even have access to this infrastructure.</p>
            <p className="p-summary">Should all citizens have access to the internet - regardless of income - and if so, are governments supposed to take care of it? The second question is purely political. What should be the rules governing the internet and who will set them? (Kasapis, 2020, p. 2). The text poses two questions and also addresses these questions. The answers are: The goal of the institute is to ensure a fair and democratic digital society through a framework of rules and ideas, always guided by human rights. On the internet, as in society and in politics, we all must have a say (Kasapis, 2020, p. 2). The text suggests that it is a fundamental right for everyone to have internet access.</p>
            <p className="p-summary">Conclusions: I do agree with the text that everyone deserves equal access to the internet. However, I believe the text could provide more solutions on how to create this. The text could explore solutions that involve education, politics or even governance.</p>

            <h3>References</h3>
            <ul>
              <li>Kasapis, S. (2020) 'Internet Access is a Fundamental Right. Especially, Amidst a Pandemic', Digital Inclusion, 19 May. Available at: https://www.internetjustsociety.org/internet-access-is-a-fundamental-rights-especially-amidst-a-pandemic.</li>
            </ul>
          </div>
        </article>

        <div className="next-blog-container">
          <Link to="/blogs/11" className="next-blog-btn">Previous Blog</Link>
          <Link to="/blogs/reflections" className="next-blog-btn">Next Blog</Link>
        </div>
    </>
  );
}
