"use client";

import { useState } from "react";

import { Button, Field } from "../ui/controls";
import { Icon } from "../ui/icon";
import { Section, Specimen } from "../ui/section";

export function Fields() {
  const [segment, setSegment] = useState("This month");
  const [passwordVisible, setPasswordVisible] =
    useState(false);
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);

  const emailError =
    checked && !email.includes("@")
      ? "Enter an email containing @."
      : undefined;

  return (
    <Section
      id="fields"
      number="02"
      title="Fields"
      description="One control family. Clear labels, familiar interactions."
    >
      <Specimen
        title="The family"
        note="A shared border, radius, and focus state."
        tag="TRY THEM"
      >
        <div className="three-col field-grid">
          <Field
            label="Email"
            hint="A working email for your reservation."
          >
            {(id, description) => (
              <div className="input-icon">
                <Icon name="mail" />
                <input
                  id={id}
                  aria-describedby={description}
                  placeholder="you@example.com"
                  type="email"
                />
              </div>
            )}
          </Field>

          <Field label="Event category">
            {(id) => (
              <select id={id} defaultValue="">
                <option value="" disabled>
                  Select a category
                </option>
                <option>Music & nightlife</option>
                <option>Community</option>
                <option>Arts & culture</option>
              </select>
            )}
          </Field>

          <Field label="Ticket price">
            {(id) => (
              <div className="input-prefix">
                <span>₱</span>
                <input
                  id={id}
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="0.00"
                />
              </div>
            )}
          </Field>

          <Field label="Password">
            {(id) => (
              <div className="input-icon">
                <input
                  id={id}
                  type={
                    passwordVisible ? "text" : "password"
                  }
                  placeholder="Enter password"
                />

                <button
                  type="button"
                  className="icon-button"
                  onClick={() =>
                    setPasswordVisible(!passwordVisible)
                  }
                  aria-label={
                    passwordVisible
                      ? "Hide password"
                      : "Show password"
                  }
                  aria-pressed={passwordVisible}
                >
                  <Icon name="eye" />
                </button>
              </div>
            )}
          </Field>

          <Field label="Disabled">
            {(id) => (
              <input
                id={id}
                disabled
                placeholder="Not available"
              />
            )}
          </Field>

          <Field
            label="Email validation"
            error={emailError}
            hint="A local demonstration only."
          >
            {(id, description) => (
              <input
                id={id}
                aria-describedby={description}
                aria-invalid={Boolean(emailError)}
                value={email}
                onBlur={() => setChecked(true)}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                placeholder="Try leaving this empty"
              />
            )}
          </Field>
        </div>
      </Specimen>

      <div className="two-col">
        <Specimen
          title="Action buttons"
          note="Give each action a clear place in the hierarchy."
        >
          <div className="button-row">
            <Button
              onClick={() =>
                document
                  .getElementById("components")
                  ?.scrollIntoView()
              }
            >
              Explore components
              <Icon name="arrow" />
            </Button>

            <Button
              variant="secondary"
              onClick={() => {
                setEmail("hello@partylink.example");
                setChecked(true);
              }}
            >
              Fill demo email
            </Button>

            <Button
              variant="neutral"
              onClick={() => {
                setEmail("");
                setChecked(false);
              }}
            >
              Reset
            </Button>
          </div>
        </Specimen>

        <Specimen
          title="Segmented choice"
          note="Selection is a value, not submission."
          tag="PROPOSED"
        >
          <div
            className="segments"
            role="group"
            aria-label="Demo reporting period"
          >
            {[
              "This week",
              "This month",
              "This year",
            ].map((value) => (
              <button
                key={value}
                className={
                  segment === value ? "selected" : ""
                }
                aria-pressed={segment === value}
                onClick={() => setSegment(value)}
              >
                {value}
              </button>
            ))}
          </div>

          <p className="micro-note">
            Selected: {segment}
          </p>
        </Specimen>
      </div>

      <Specimen title="Rules · Select or action menu">
        <div className="rule-grid">
          <p>
            <span className="rule-good">✓</span>
            <b>Select</b> chooses a value.
          </p>

          <p>
            <span className="rule-good">✓</span>
            <b>Action menu</b> runs a command.
          </p>

          <p>
            <span className="rule-good">✓</span>
            Reuse shared field styles.
          </p>

          <p>
            <span className="rule-bad">×</span>
            Don’t change every caller to fix one screen.
          </p>
        </div>
      </Specimen>
    </Section>
  );
}