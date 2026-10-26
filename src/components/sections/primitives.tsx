"use client";

import { useState } from "react";

import {
  Button,
  Field,
  Switch,
} from "../ui/controls";
import { Icon } from "../ui/icon";
import { Section, Specimen } from "../ui/section";

export function Primitives() {
  const [tab, setTab] = useState(0);
  const [amount, setAmount] = useState(40);
  const [period, setPeriod] = useState("Month");
  const [progress, setProgress] = useState(68);
  const [action, setAction] = useState("");

  function focusTab(index: number) {
    setTab(index);

    document
      .getElementById(`preview-tab-${index}`)
      ?.focus();
  }

  return (
    <Section
      id="primitives"
      number="04"
      title="Primitives"
      description="Small controls that make the larger patterns feel familiar."
    >
      <div className="two-col">
        <Specimen
          title="Select"
          note="Choose a value, not a command."
        >
          <Field label="Event type">
            {(id) => (
              <select id={id} defaultValue="Music">
                <option>Music</option>
                <option>Community</option>
                <option>Arts & culture</option>
              </select>
            )}
          </Field>
        </Specimen>

        <Specimen
          title="Calendar & date pickers"
          note="Native controls adapt to each device."
        >
          <div className="two-col">
            <Field label="Event date">
              {(id) => (
                <input id={id} type="date" />
              )}
            </Field>

            <Field label="Start time">
              {(id) => (
                <input id={id} type="time" />
              )}
            </Field>
          </div>
        </Specimen>
      </div>

      <Specimen
        title="Tabs"
        note="Related content, one selected panel."
      >
        <div
          className="tabs"
          role="tablist"
          aria-label="Event preview"
          onKeyDown={(event) => {
            if (
              event.key === "ArrowRight" ||
              event.key === "ArrowLeft"
            ) {
              event.preventDefault();

              const next =
                (tab +
                  (event.key === "ArrowRight"
                    ? 1
                    : 2)) %
                3;

              focusTab(next);
            }

            if (
              event.key === "Home" ||
              event.key === "End"
            ) {
              event.preventDefault();

              focusTab(
                event.key === "Home" ? 0 : 2,
              );
            }
          }}
        >
          {["Overview", "Tickets", "Venue"].map(
            (label, index) => (
              <button
                key={label}
                role="tab"
                id={`preview-tab-${index}`}
                aria-selected={tab === index}
                aria-controls={`preview-panel-${index}`}
                tabIndex={tab === index ? 0 : -1}
                className={
                  tab === index ? "selected" : ""
                }
                onClick={() => setTab(index)}
              >
                {label}
              </button>
            ),
          )}
        </div>

        <div
          role="tabpanel"
          id={`preview-panel-${tab}`}
          aria-labelledby={`preview-tab-${tab}`}
          tabIndex={0}
          className="tab-panel"
        >
          <Icon
            name={
              tab === 0
                ? "calendar"
                : tab === 1
                  ? "ticket"
                  : "person"
            }
          />

          <div>
            <h4>
              {
                [
                  "A night worth showing up for.",
                  "Your place in the crowd.",
                  "Find your way to the experience.",
                ][tab]
              }
            </h4>

            <p>
              {
                [
                  "Event details and a clear reservation action.",
                  "Ticket names, prices, and availability belong here.",
                  "Venue details and a map preview belong here.",
                ][tab]
              }
            </p>
          </div>
        </div>
      </Specimen>

      <div className="three-col">
        <Specimen title="Checkbox">
          <label className="check-label">
            <input type="checkbox" />
            I agree to the Terms and Privacy Policy
          </label>

          <label className="check-label is-disabled">
            <input type="checkbox" disabled />
            Unavailable option
          </label>
        </Specimen>

        <Specimen title="RadioGroup">
          <fieldset className="radio-group">
            <legend className="sr-only">
              Ticket preference
            </legend>

            {[
              "General admission",
              "VIP",
              "Table reservation",
            ].map((label, index) => (
              <label
                className="check-label"
                key={label}
              >
                <input
                  type="radio"
                  name="ticket-preference"
                  defaultChecked={index === 0}
                />
                {label}
              </label>
            ))}
          </fieldset>
        </Specimen>

        <Specimen title="Switch">
          <Switch
            label="Sales window"
            defaultChecked
          />
          <Switch label="Email updates" />
          <Switch label="Unavailable" disabled />
        </Specimen>
      </div>

      <div className="two-col">
        <Specimen
          title="Slider & ToggleGroup"
          tag="PROPOSED"
        >
          <label
            className="range-label"
            htmlFor="capacity-preview"
          >
            Preview value
            <b>{amount}%</b>
          </label>

          <input
            id="capacity-preview"
            className="range"
            type="range"
            value={amount}
            onChange={(event) =>
              setAmount(Number(event.target.value))
            }
          />

          <div
            className="segments"
            role="group"
            aria-label="Analytics period"
          >
            {["Week", "Month", "Year"].map(
              (value) => (
                <button
                  key={value}
                  className={
                    period === value
                      ? "selected"
                      : ""
                  }
                  aria-pressed={period === value}
                  onClick={() => setPeriod(value)}
                >
                  {value}
                </button>
              ),
            )}
          </div>
        </Specimen>

        <Specimen title="Input & Textarea">
          <Field label="Description">
            {(id) => (
              <textarea
                id={id}
                rows={3}
                placeholder="Tell guests what to look forward to…"
              />
            )}
          </Field>
        </Specimen>
      </div>

      <Specimen
        title="DropdownMenu, Popover & Tooltip"
        note="Contextual content, anchored to a trigger."
        tag="PROPOSED"
      >
        <div className="button-row">
          <details className="menu-details">
            <summary className="button button--outline">
              Actions
              <Icon name="down" />
            </summary>

            <div className="floating-menu">
              {[
                "Edit preview",
                "Duplicate preview",
                "Delete preview",
              ].map((label) => (
                <button
                  key={label}
                  onClick={(event) => {
                    setAction(
                      `${label} selected — demonstration only.`,
                    );

                    event.currentTarget
                      .closest("details")
                      ?.removeAttribute("open");
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </details>

          <details className="menu-details">
            <summary className="button button--outline">
              Filters
              <Icon name="plus" />
            </summary>

            <div className="floating-menu popover">
              <Field label="Status">
                {(id) => (
                  <select id={id}>
                    <option>All statuses</option>
                    <option>Published</option>
                    <option>Under review</option>
                  </select>
                )}
              </Field>

              <small>
                Local filter control example.
              </small>
            </div>
          </details>

          <span className="tooltip-wrap">
            <button
              className="icon-button tooltip-trigger"
              aria-label="About this preview"
              aria-describedby="preview-tooltip"
            >
              <Icon name="info" />
            </button>

            <span
              id="preview-tooltip"
              role="tooltip"
              className="tooltip"
            >
              These controls don’t change your app.
            </span>
          </span>
        </div>

        <p className="micro-note" role="status">
          {action ||
            "Action menu chooses a command. Popover holds supporting controls."}
        </p>
      </Specimen>

      <Specimen
        title="Accordion"
        note="Reveal the detail when it is needed."
      >
        {[
          {
            title: "How do reservations work?",
            body: "The app guides guests through event details, ticket or table selection, payment, and confirmation. This preview documents the interface.",
          },
          {
            title: "Can I change my ticket details?",
            body: "Available actions depend on the app’s approved business rules. The design system does not change those rules.",
          },
          {
            title: "Where can I get help?",
            body: "Use the app’s Settings → Help & Support entry. This is sample content for the disclosure pattern.",
          },
        ].map((item) => (
          <details
            className="accordion"
            key={item.title}
          >
            <summary>
              {item.title}
              <Icon name="plus" />
            </summary>

            <p>{item.body}</p>
          </details>
        ))}
      </Specimen>

      <Specimen
        title="Breadcrumb, Pagination & Separator"
        note="Small cues for orientation."
      >
        <nav
          className="breadcrumb"
          aria-label="Example breadcrumb"
        >
          <a href="#top">Design system</a>
          <Icon name="chevron" />
          <a href="#components">Components</a>
          <Icon name="chevron" />
          <span aria-current="page">Primitives</span>
        </nav>

        <hr />

        <p className="micro-note">
          Pagination is demonstrated in DataTable above.
          Keep one pager per collection.
        </p>
      </Specimen>

      <div className="three-col">
        <Specimen title="Progress">
          <label
            className="range-label"
            htmlFor="progress-demo"
          >
            Onboarding preview
            <b>{progress}%</b>
          </label>

          <progress
            id="progress-demo"
            value={progress}
            max={100}
          >
            {progress}%
          </progress>

          <Button
            variant="ghost"
            size="small"
            onClick={() =>
              setProgress(
                progress >= 100
                  ? 0
                  : Math.min(100, progress + 16),
              )
            }
          >
            {progress === 100
              ? "Reset"
              : "Advance preview"}
          </Button>
        </Specimen>

        <Specimen
          title="Skeleton"
          note="Match the loaded geometry."
        >
          <div className="skeleton skeleton-title" />
          <div className="skeleton" />
          <div className="skeleton" />
        </Specimen>

        <Specimen title="Avatar">
          <div className="avatar-row">
            <span
              className="avatar"
              aria-label="Sample user initials PL"
            >
              PL
            </span>

            <span
              className="avatar avatar-pink"
              aria-label="Sample user initials CA"
            >
              CA
            </span>

            <span
              className="avatar"
              aria-label="Generic profile"
            >
              <Icon
                name="person"
                width={26}
                height={26}
              />
            </span>
          </div>
        </Specimen>
      </div>
    </Section>
  );
}