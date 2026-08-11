import '../styles/Scripts (Java,html,css).css';
import useHandwriting from '../hooks/useHandwriting';
import useCardEntrance from '../hooks/useCardEntrance';
import useDropdownAnimation from '../hooks/useDropdownAnimation';

export default function ScriptsHome() {
  useHandwriting();
  useCardEntrance();
  useDropdownAnimation();

  return (
    <>
      <section className="scripts-heading-wrapper">
          <h1 id="mainTitle" className="title-hidden">Scripts</h1>
          <h2 id="subTitle" className="title-hidden">Here you can find the scripts that built my website.</h2>
        </section>

        <div className="script-sections">
          <div className="card" id="css-section">
            <h2><i className="fa-brands fa-css3-alt"></i> CSS</h2>
            <p className="description">
              Cascading Style Sheets is used for styling HTML documents. I used CSS to bring my website to life.
              You can find all my CSS in my Github!
            </p>
            <a className="read-more-btn" href="https://github.com/nandimpo/DIGA3008/tree/main/CSS" target="_blank">read more</a>
          </div>

          <div className="card" id="html-section">
            <h2><i className="fa-brands fa-html5"></i> HTML</h2>
            <p className="description">
              HTML defines the structure of web content. HTML gave the website the structure that it needed.
              You can find all my HTML in my Github in Blogs, Design, Portfolio and Scripts!
            </p>
            <a className="read-more-btn" href="https://github.com/nandimpo/DIGA3008" target="_blank">read more</a>
          </div>

          <div className="card" id="java-section">
            <h2><i className="fa-brands fa-js-square"></i> JavaScript</h2>
            <p className="description">
              JavaScript is a general-purpose programming language. It added that extra specialness to my website.
              You can find all my JavaScript in my Github!
            </p>
            <a className="read-more-btn" href="https://github.com/nandimpo/DIGA3008/tree/main/JavaScript" target="_blank">read more</a>
          </div>
        </div>
    </>
  );
}
