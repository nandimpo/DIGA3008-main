import '../../styles/Writing.css';
import useHandwriting from '../../hooks/useHandwriting';

export default function Animation() {
  useHandwriting();

  return (
    <>
      <div className="page-heading">
          <h1 id="mainTitle">Animations</h1>
          <p className="page-subtitle">
            Here you can find my animations. Once you are done, feel free to explore the rest of my <strong>portfolio</strong>.
          </p>
        </div>

        <main>
          <section className="section container">
            <div className="image-grid">

              {/* Animation 1 */}
              <div className="image-card">
                <div className="image-header">Animation 1</div>
                <div className="image-container">
                  <img src="/Images/Portfolio/assisgnnent2-1-ezgif.com-crop.gif" alt="Blinking character animation" />
                  <div className="article-content">
                    <input type="checkbox" className="read-more-state" id="anim-1" />
                    <div className="read-more-wrap">
                      <span className="content-preview">
                        A simple animated loop of a blinking character with clean lines and strong readability...
                      </span>
                      <span className="read-more-target">
                        This animation showcases basic timing, loop consistency, and expressive character focus.
                      </span>
                    </div>
                    <label htmlFor="anim-1" className="read-more-trigger"></label>
                  </div>
                </div>
              </div>

              {/* Animation 2 */}
              <div className="image-card">
                <div className="image-header">Animation 2</div>
                <div className="image-container">
                  <img src="/Images/Portfolio/Homer front walk cycle.gif" alt="Homer Simpson walk cycle" />
                  <div className="article-content">
                    <input type="checkbox" className="read-more-state" id="anim-2" />
                    <div className="read-more-wrap">
                      <span className="content-preview">
                        This is a walk cycle of Homer Simpson.
                      </span>
                      <span className="read-more-target">
                        Homer is drawn in his characteristic style — a heavyset man with a bald head (except for two strands of hair), wearing his typical outfit while walking forward.
                      </span>
                    </div>
                    <label htmlFor="anim-2" className="read-more-trigger"></label>
                  </div>
                </div>
              </div>

              {/* Animation 3 */}
              <div className="image-card">
                <div className="image-header">Animation 3</div>
                <div className="image-container">
                  <img src="/Images/Portfolio/Homer final.gif" alt="Homer lifting box animation" />
                  <div className="article-content">
                    <input type="checkbox" className="read-more-state" id="anim-3" />
                    <div className="read-more-wrap">
                      <span className="content-preview">
                        Homer tries to pick up a box.
                      </span>
                      <span className="read-more-target">
                        This animation shows Homer attempting to lift a box but failing, focusing on weight and physical strain.
                      </span>
                    </div>
                    <label htmlFor="anim-3" className="read-more-trigger"></label>
                  </div>
                </div>
              </div>

              {/* Animation 4 */}
              <div className="image-card">
                <div className="image-header">Animation 4</div>
                <div className="image-container">
                  <img src="/Images/Portfolio/Walk cycle.gif" alt="Character walk cycle animation" />
                  <div className="article-content">
                    <input type="checkbox" className="read-more-state" id="anim-4" />
                    <div className="read-more-wrap">
                      <span className="content-preview">
                        This is an example of a character walk cycle.
                      </span>
                      <span className="read-more-target">
                        The focus of this animation is on animation principles such as timing, exaggeration, and anticipation.
                      </span>
                    </div>
                    <label htmlFor="anim-4" className="read-more-trigger"></label>
                  </div>
                </div>
              </div>

              {/* Animation 5 */}
              <div className="image-card">
                <div className="image-header">Animation 5</div>
                <div className="image-container">
                  <img src="/Images/Portfolio/Animation of Rain.gif" alt="Lip sync animation" />
                  <div className="article-content">
                    <input type="checkbox" className="read-more-state" id="anim-5" />
                    <div className="read-more-wrap">
                      <span className="content-preview">
                        This is an example of a character performing lip sync.
                      </span>
                      <span className="read-more-target">
                        The focus of this animation is on principles such as timing, staging, and lip sync accuracy.
                      </span>
                    </div>
                    <label htmlFor="anim-5" className="read-more-trigger"></label>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </main>

        {/* Footer */}
    </>
  );
}
