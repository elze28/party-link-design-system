import { Section, Specimen } from "../ui/section";

const rules = [
  {
    title: "Where design lives",
    good: "Reuse controls and shared tokens.",
    bad: "Don’t change a shared default to fix one screen.",
  },
  {
    title: "Colour",
    good: "Choose primary, status, or surface roles.",
    bad: "Don’t use decorative pink for every state.",
  },
  {
    title: "Type & layout",
    good: "Keep roles, gutters, and number alignment consistent.",
    bad: "Don’t shrink text to force content to fit.",
  },
  {
    title: "Interaction",
    good: "Show focus, pressed, disabled, and busy states.",
    bad: "Don’t make decorative elements look actionable.",
  },
  {
    title: "Motion",
    good: "Keep feedback short and respect reduced motion.",
    bad: "Don’t delay actions with decorative animation.",
  },
  {
    title: "Tables",
    good: "Separate loading, empty, and failure states.",
    bad: "Don’t show missing data as a real zero.",
  },
];

export function Conventions() {
  return (
    <Section
      id="conventions"
      number="05"
      title="Conventions"
      description="A few shared rules keep every screen feeling like Party Link."
    >
      <div className="two-col">
        {rules.map((rule) => (
          <Specimen
            key={rule.title}
            title={rule.title}
          >
            <p className="convention-rule">
              <span className="rule-good">✓</span>
              {rule.good}
            </p>

            <p className="convention-rule">
              <span className="rule-bad">×</span>
              {rule.bad}
            </p>
          </Specimen>
        ))}
      </div>

      <Specimen
        title="Legacy surfaces"
        note="Align carefully. Keep the approved app logic."
      >
        <div className="alignment-row">
          <code>BrandColors.purple</code>
          <span>
            One purple token (#6B2CF5) in
            constants/theme.ts. The Create Event button
            still hard-codes #6C2CF5; switch it to the
            token.
          </span>
        </div>

        <div className="alignment-row">
          <code>Destructive / status</code>
          <span>
            Error red is #D93025 in the app. Approve the
            proposed status pairs before app adoption.
          </span>
        </div>

        <div className="alignment-row">
          <code>Component contracts</code>
          <span>
            Preserve props, callbacks, validation, and API
            behavior.
          </span>
        </div>
      </Specimen>

      <div className="source-note">
        <span className="eyebrow">
          SOURCE & SCOPE
        </span>

        <p>
          Core palette, type sizes, and shape language
          follow the app’s theme tokens in
          constants/theme.ts, alongside Party Link’s
          Figma. Semantic status pairs, accessibility
          states, and supporting primitives include
          proposed extensions. All events and figures
          here are sample data.
        </p>

        <div className="source-links">
          <a
            href="https://www.figma.com/design/TDflXxI0mPGNZJQYRaTkOh/Party-Link?node-id=62-1231"
            target="_blank"
            rel="noreferrer"
          >
            Party Link Figma ↗
          </a>

          <a
            href="https://develop.taxmaverick.ai/design-system"
            target="_blank"
            rel="noreferrer"
          >
            Structural reference ↗
          </a>
        </div>
      </div>
    </Section>
  );
}