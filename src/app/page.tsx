import { SiteHeader } from "@/components/site-header";

import { Components } from "@/components/sections/components";
import { Conventions } from "@/components/sections/conventions";
import { Fields } from "@/components/sections/fields";
import { Foundations } from "@/components/sections/foundations";
import { Primitives } from "@/components/sections/primitives";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <SiteHeader />

      <main id="main">
        <div id="top" className="hero">
          <div className="hero-meta">
            <span className="eyebrow">
              PARTY LINK / THE SHARED LANGUAGE
            </span>

            <span className="tiny-tag">
              MOBILE + WEB
            </span>
          </div>

          <h1>
            Good experiences.
            <br />
            <span>Consistent by design.</span>
          </h1>

          <div className="hero-bottom">
            <p>
              The colors, type, and building blocks
              that bring Party Link together.
            </p>

            <a
              href="#foundations"
              className="hero-link"
            >
              Explore the system
              <span>↓</span>
            </a>
          </div>

          <div
            className="hero-orbit"
            aria-hidden="true"
          >
            <i />
            <i />
            <i />
          </div>
        </div>

        <div className="content-shell">
          <Foundations />
          <Fields />
          <Components />
          <Primitives />
          <Conventions />
        </div>
      </main>

      <footer className="site-footer">
        <span>
          Party Link
          <b>Design system</b>
        </span>

        <span>
          Built for a more connected experience.
        </span>

        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}