import Image from "next/image";

import {
  brandColors,
  neutrals,
  statuses,
} from "@/lib/design-tokens";

import { Badge, CopyButton } from "../ui/controls";
import { Section, Specimen } from "../ui/section";

export function Foundations() {
  return (
    <Section
      id="foundations"
      number="01"
      title="Foundations"
      description="The visual language behind every Party Link experience."
    >
      <Specimen
        title="The Party Link identity"
        note="Original artwork. Always scale proportionally."
        tag="BRAND"
      >
        <div className="logo-specimen">
          <div className="logo-board">
            <Image
              src="/party-link-logo.png"
              alt="Party Link multicolor cocktail glass and link logo"
              width={232}
              height={241}
              priority
            />
          </div>

          <div className="logo-guidance">
            <span className="eyebrow">
              CONNECTED BY EXPERIENCES
            </span>

            <h4>
              A little energy.
              <br />
              A lot of connection.
            </h4>

            <p>
              Keep the original gradients and wordmark.
              Give it room to breathe.
            </p>

            <span className="inline-note">
              Proposed clear space: ¼ logo width.
            </span>
          </div>
        </div>
      </Specimen>

      <Specimen
        title="Brand · primary & accent"
        note="Purple leads. Pink adds a spark."
        tag="APP VALUES"
      >
        <div className="swatch-grid">
          {brandColors.map((color) => (
            <div className="swatch" key={color.token}>
              <div
                className="swatch-paint"
                style={{ background: color.value }}
              />

              <div className="swatch-body">
                <h4>{color.name}</h4>
                <CopyButton value={color.value} />
                <code>{color.token}</code>
                <small>{color.note}</small>
              </div>
            </div>
          ))}
        </div>
      </Specimen>

      <div className="two-col">
        <Specimen
          title="Status"
          note="Pair a color with a clear label."
        >
          <div className="badge-examples">
            {statuses.map((status) => (
              <Badge
                key={status.tone}
                tone={status.tone}
              >
                {status.label}
              </Badge>
            ))}
          </div>

          <p className="micro-note">
            Status pairs are proposed demo tokens. The
            error red matches the app (#D93025).
          </p>
        </Specimen>

        <Specimen
          title="Neutrals & surfaces"
          note="Quiet foundations for colorful experiences."
        >
          <div className="neutral-grid">
            {neutrals.map((color) => (
              <div key={color.name}>
                <span
                  className="neutral-chip"
                  style={{ background: color.value }}
                />
                <small>{color.name}</small>
                <CopyButton value={color.value} />
              </div>
            ))}
          </div>
        </Specimen>
      </div>

      <Specimen
        title="Typography"
        note="Inter for mobile. Arimo for web analytics."
        tag="TYPE SCALE"
      >
        <div className="type-row">
          <code>PAGE_TITLE · 26 / 800</code>
          <span className="type-title">CREATE EVENT</span>
        </div>

        <div className="type-row">
          <code>SECTION_TITLE · 24 / 700</code>
          <span className="type-section">Account</span>
        </div>

        <div className="type-row">
          <code>PANEL_TITLE · 20 / 700</code>
          <span className="type-panel">
            Your next great night.
          </span>
        </div>

        <div className="type-row">
          <code>ROW_LABEL · 20 / 500</code>
          <span className="type-row-label">
            Personal Information
          </span>
        </div>

        <div className="type-row">
          <code>BODY · 16 / 400</code>
          <span>Discover, reserve, and enjoy.</span>
        </div>

        <div className="type-row">
          <code>LABEL · 17 / 700</code>
          <strong className="type-card-label">
            Event Title
          </strong>
        </div>

        <div className="type-row">
          <code>META · 14 / 400</code>
          <small>Cebu City · Saturday, 7:00 PM</small>
        </div>

        <div className="type-row web-type">
          <code>WEB_METRIC · 32 / 700</code>
          <b className="metric-type">₱24,800.00</b>
        </div>
      </Specimen>

      <div className="three-col">
        <Specimen title="Radius">
          <div className="radius-demo">
            <span style={{ borderRadius: 14 }}>14</span>
            <span style={{ borderRadius: 20 }}>20</span>
            <span style={{ borderRadius: 30 }}>30</span>
            <span style={{ borderRadius: 36 }}>36</span>
          </div>

          <p className="micro-note">
            Cards · Buttons · Rows & pills · Dialogs
          </p>
        </Specimen>

        <Specimen title="Spacing" tag="PROPOSED">
          <div className="spacing-demo">
            {[4, 8, 12, 16, 24, 32].map((size) => (
              <div key={size}>
                <i style={{ height: size * 2 }} />
                <code>{size}</code>
              </div>
            ))}
          </div>
        </Specimen>

        <Specimen title="Elevation & motion" tag="PROPOSED">
          <div className="elevation-demo">
            Hover to explore
          </div>

          <p className="micro-note">
            120 ms feedback · 220 ms panels
          </p>
        </Specimen>
      </div>

      <Specimen
        title="Stacking"
        note="A small, intentional layer order."
        tag="PROPOSED"
      >
        <div className="layer-row">
          {[
            "Content",
            "Navigation",
            "Overlay",
            "Modal",
            "Picker / menu",
            "Notification",
          ].map((layer, index) => (
            <span key={layer}>
              <code>0{index + 1}</code>
              {layer}
            </span>
          ))}
        </div>
      </Specimen>
    </Section>
  );
}