import "./styles.css";

export default function App() {
  return (
    <div className="page">
      <section className="hero-bg"></section>

      <div className="container">
        <header className="header">
          <div className="brand">Shire Maxx</div>
          <div className="badge">Coming Soon</div>
        </header>

        <main className="main">
          <div className="left">
            <p className="eyebrow">People-first consulting</p>

            <h1 className="headline">
              Clear strategy.
              <span>Human execution.</span>
            </h1>

         <p className="description">
  Shire Maxx helps growing companies fix the strain that comes with
  growth. We strengthen customer experience, sharpen execution, and
  put the right systems in place so businesses can retain more
  clients and scale with consistency.
</p>

            <div className="pill-row">
              <span className="pill">Customer Experience</span>
              <span className="pill">Operational Improvement</span>
              <span className="pill">Growth Support</span>
            </div>

            <div className="button-row">
              <a href="mailto:hello@shiremaxx.com" className="btn btn-primary">
                Contact Us
              </a>
              <a href="#about" className="btn btn-secondary">
                Learn More
              </a>
            </div>
          </div>

          <div className="right">
            <div className="panel">
              <p className="panel-label">Built for practical impact</p>

              <div className="info-card">
                <p className="info-title">What we focus on</p>
                <p className="info-text">
                  Helping teams improve service, tighten execution, and create
                  stronger customer trust.
                </p>
              </div>

              <div className="info-card">
                <p className="info-title">Who we support</p>
                <p className="info-text">
                  Founders, operators, and service-driven businesses that want
                  clearer systems and better outcomes.
                </p>
              </div>

              <div className="info-card">
                <p className="info-title">What’s next</p>
                <p className="info-text">
                  A full site is on the way. For now, we are opening the door to
                  early conversations and select opportunities.
                </p>
              </div>
            </div>
          </div>
        </main>

        <section id="about" className="about">
          <div className="about-block">
            <p className="about-label">Approach</p>
            <p className="about-text">
              Thoughtful, direct, and centered on real utility rather than
              inflated language.
            </p>
          </div>

          <div className="about-block">
            <p className="about-label">Positioning</p>
            <p className="about-text">
              A modern consulting brand with a people-first lens and a bias
              toward action.
            </p>
          </div>

          <div className="about-block">
            <p className="about-label">Availability</p>
            <p className="about-text">
              Currently preparing for launch and open to early-stage
              conversations.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
