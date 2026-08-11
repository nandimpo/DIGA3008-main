export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h2>Contact</h2>
          <hr />
          <p>Contact me @</p>
          <a href="mailto:nandi.pmpofu@gmail.com">nandi.pmpofu@gmail.com</a>
        </div>
        <div className="footer-column">
          <h2>Social</h2>
          <hr />
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/nandi-m-4aa89123b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <p className="footer-bottom">©2025 Nandi Mpofu. All rights reserved.</p>
    </footer>
  );
}
