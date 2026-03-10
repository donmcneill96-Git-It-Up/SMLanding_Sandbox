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
            <p className="eyebrow">Customer experience and execution</p>

            <h1 className="headline">
              Growth puts pressure on the business.
              <span>We help you carry it well.</span>
            </h1>

            <p className="description">
              Shire Maxx helps growing companies fix the strain that comes with
              growth. We strengthen customer experience, sharpen execution, and
              put the right systems in place so businesses can retain more
              clients and scale with consistency.
            </p>

            <div className="pill-row">
              <span className="pill">Customer Experience</span>
              <span className="pill">Operational Execution</span>
              <span className="pill">Systems for Growth</span>
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
                <p className="info-title">What we help solve</p>
                <p className="info-text">
                  We help identify where growth is creating strain across the
                  customer experience, internal handoffs, and day-to-day
                  execution.
                </p>
              </div>

              <div className="info-card">
                <p className="info-title">Where we focus</p>
                <p className="info-text">
                  Our work centers on stronger service systems, clearer
                  execution, and better operational support for growing teams.
                </p>
              </div>

              <div className="info-card">
                <p className="info-title">What comes next</p>
                <p className="info-text">
                  The full site is on the way. For now, we are opening the door
                  to early conversations and select opportunities.
                </p>
              </div>
            </div>
          </div>
        </main>

        <section id="about" className="about">
          <div className="about-block">
            <p className="about-label">Approach</p>
            <p className="about-text">
              We assess where growth is creating strain, prioritize the issues
              that matter most, and build the systems needed to support stronger
              execution.
            </p>
          </div>

          <div className="about-block">
            <p className="about-label">Positioning</p>
            <p className="about-text">
              Shire Maxx is a people-first consulting brand focused on helping
              growing companies strengthen customer experience and operations.
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
