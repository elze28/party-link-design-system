"use client";

import { useEffect, useRef, useState } from "react";

import {
  statuses,
  type Tone,
} from "@/lib/design-tokens";

import { EventTable } from "../event-table";
import { Badge, Button, Field } from "../ui/controls";
import { Dialog } from "../ui/dialog";
import { Icon } from "../ui/icon";
import { Section, Specimen } from "../ui/section";

type DialogType = "create" | "logout" | "ticket" | null;

type ToastMessage = {
  tone: Tone;
  text: string;
};

export function Components() {
  const [dialog, setDialog] = useState<DialogType>(null);
  const [toast, setToast] =
    useState<ToastMessage | null>(null);
  const [noticeVisible, setNoticeVisible] =
    useState(true);
  const [busy, setBusy] = useState(false);

  const timer =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  function notify(
    text: string,
    tone: Tone = "success",
  ) {
    setToast({ tone, text });
  }

  useEffect(() => {
    if (!toast) return;

    const timeout = setTimeout(
      () => setToast(null),
      4200,
    );

    return () => clearTimeout(timeout);
  }, [toast]);

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  function demonstrateBusyState() {
    if (busy) return;

    setBusy(true);

    timer.current = setTimeout(() => {
      setBusy(false);
      notify("Demo completed. Nothing was submitted.");
    }, 1000);
  }

  function confirmPreview() {
    notify(
      dialog === "logout"
        ? "Logout preview confirmed. You remain signed in."
        : "Event creation preview confirmed.",
      "info",
    );

    setDialog(null);
  }

  const dialogTitle =
    dialog === "ticket"
      ? "Add ticket"
      : dialog === "logout"
        ? "Log Out"
        : "Create Event?";

  return (
    <Section
      id="components"
      number="03"
      title="Components"
      description="Reusable pieces. Live previews. One connected experience."
    >
      <Specimen
        title="Button"
        note="One primary action per region."
        tag="INTERACTIVE"
      >
        <div className="button-row">
          <Button
            onClick={() =>
              notify("Primary button clicked.")
            }
          >
            Primary
            <Icon name="arrow" />
          </Button>

          <Button
            variant="secondary"
            onClick={() =>
              notify(
                "Secondary action clicked.",
                "info",
              )
            }
          >
            Secondary
          </Button>

          <Button
            variant="outline"
            onClick={() =>
              notify("Outline action clicked.", "info")
            }
          >
            Outline
          </Button>

          <Button
            variant="ghost"
            onClick={() =>
              notify("Text action clicked.", "info")
            }
          >
            Text action
          </Button>

          <Button
            variant="danger"
            onClick={() => setDialog("logout")}
          >
            Destructive
          </Button>

          <Button disabled>Disabled</Button>

          <Button
            variant="secondary"
            onClick={demonstrateBusyState}
            disabled={busy}
            aria-busy={busy}
          >
            {busy ? (
              <>
                <span className="spinner" />
                Working
              </>
            ) : (
              "Try busy state"
            )}
          </Button>
        </div>
      </Specimen>

      <Specimen
        title="Badge"
        note="A semantic role, paired with a readable status."
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

        <div className="badge-examples">
          {statuses.map((status) => (
            <Badge
              key={status.tone}
              tone={status.tone}
              solid
            >
              {status.label}
            </Badge>
          ))}
        </div>
      </Specimen>

      <Specimen
        title="Stat & StatGroup"
        note="Label, value, and just enough context."
        tag="SAMPLE DATA"
      >
        <div className="stat-group">
          {[
            {
              label: "Total events",
              value: "12",
              note: "This month",
              icon: "calendar",
            },
            {
              label: "Reservations",
              value: "128",
              note: "Across your events",
              icon: "ticket",
            },
            {
              label: "Revenue",
              value: "₱24,800",
              note: "Illustrative amount",
              icon: "arrow",
            },
          ].map((stat) => (
            <div className="stat" key={stat.label}>
              <div>
                <span>{stat.label}</span>
                <Icon name={stat.icon} />
              </div>

              <strong>{stat.value}</strong>
              <small>{stat.note}</small>
            </div>
          ))}
        </div>
      </Specimen>

      <div className="two-col">
        <Specimen
          title="Panel & SectionHeader"
          note="The container and its title row."
        >
          <div className="event-panel">
            <header>
              <h4>Upcoming event</h4>
              <Badge tone="info">Published</Badge>
            </header>

            <div className="event-art">
              <span>PARTY LINK PRESENTS</span>

              <b>
                NEON
                <br />
                NIGHTS<span>↗</span>
              </b>

              <small>A sample event preview</small>
            </div>

            <div className="event-summary">
              <h4>Neon Nights</h4>

              <p>
                <Icon name="calendar" />
                November 20 · Cebu City
              </p>

              <Button
                variant="secondary"
                onClick={() =>
                  notify(
                    "Sample event preview selected.",
                    "info",
                  )
                }
              >
                View preview
                <Icon name="arrow" />
              </Button>
            </div>
          </div>
        </Specimen>

        <Specimen
          title="Field"
          note="Label + control + hint or error."
        >
          <Field
            label="Event name"
            hint="Choose a title guests will remember."
          >
            {(id, description) => (
              <input
                id={id}
                aria-describedby={description}
                placeholder="e.g. Neon Nights"
              />
            )}
          </Field>

          <div className="spacer" />

          <Field
            label="Capacity"
            error="Enter a positive whole number."
          >
            {(id, description) => (
              <input
                id={id}
                aria-invalid
                aria-describedby={description}
                defaultValue="0"
                type="number"
              />
            )}
          </Field>
        </Specimen>
      </div>

      <div className="two-col">
        <Specimen
          title="FormDialog"
          note="For entering information."
        >
          <div className="dialog-preview">
            <div className="preview-icon">
              <Icon name="ticket" />
            </div>

            <h4>A ticket starts here.</h4>
            <p>Name, price, and a clear next step.</p>

            <Button
              variant="secondary"
              onClick={() => setDialog("ticket")}
            >
              Open ticket form
              <Icon name="plus" />
            </Button>
          </div>
        </Specimen>

        <Specimen
          title="Confirm dialog"
          note="For a decision, without form fields."
        >
          <div className="dialog-preview">
            <div className="preview-icon">
              <Icon name="check" />
            </div>

            <h4>Make the next step clear.</h4>
            <p>Two actions. No ambiguity.</p>

            <div className="button-row">
              <Button
                onClick={() => setDialog("create")}
              >
                Create event
              </Button>

              <Button
                variant="outline"
                onClick={() => setDialog("logout")}
              >
                Log out
              </Button>
            </div>
          </div>
        </Specimen>
      </div>

      <Specimen
        title="List row, quick action & log out"
        note="From the Settings and Profile screens."
        tag="APP"
      >
        <div className="list-stack">
          {[
            { label: "Personal Information", icon: "person" },
            { label: "Notifications", icon: "bell" },
            { label: "Account Privacy", icon: "lock" },
            { label: "Data & Permissions", icon: "shield" },
            { label: "Help & Support", icon: "help" },
            { label: "Terms & Policies", icon: "doc" },
          ].map((row) => (
            <button
              key={row.label}
              className="list-row"
              onClick={() =>
                notify(`${row.label} opened.`, "info")
              }
            >
              <Icon
                name={row.icon}
                width={26}
                height={26}
              />
              <span>{row.label}</span>
              <Icon
                name="chevron"
                width={22}
                height={22}
              />
            </button>
          ))}
        </div>

        <div className="quick-actions">
          {[
            { label: "My Tickets", icon: "ticket" },
            { label: "My Events", icon: "calendar" },
            { label: "Saved", icon: "heart" },
          ].map((action) => (
            <button
              key={action.label}
              className="quick-action"
              onClick={() =>
                notify(`${action.label} opened.`, "info")
              }
            >
              <i>
                <Icon
                  name={action.icon}
                  width={28}
                  height={28}
                />
              </i>
              {action.label}
            </button>
          ))}
        </div>

        <button
          className="logout-button"
          onClick={() => setDialog("logout")}
        >
          <Icon name="logout" width={30} height={30} />
          Log Out
        </button>
      </Specimen>

      <Specimen
        title="DataTable"
        note="Search, sort, pagination, and explicit data states."
        tag="WEB ANALYTICS"
      >
        <EventTable />
      </Specimen>

      <div className="two-col">
        <Specimen
          title="Alert"
          note="Useful information, close to the task."
        >
          {noticeVisible ? (
            <div
              className="alert tone-info"
              role="status"
            >
              <Icon name="info" />

              <div>
                <strong>
                  Reservation under review
                </strong>

                <p>
                  We’ll update the status once it is
                  confirmed.
                </p>
              </div>

              <button
                className="icon-button"
                onClick={() =>
                  setNoticeVisible(false)
                }
                aria-label="Dismiss notice"
              >
                <Icon name="close" />
              </button>
            </div>
          ) : (
            <Button
              variant="secondary"
              onClick={() =>
                setNoticeVisible(true)
              }
            >
              Show alert again
            </Button>
          )}

          <div className="alert tone-danger">
            <Icon name="alert" />

            <div>
              <strong>
                Tickets couldn’t be saved
              </strong>

              <p>
                Keep your details and try again.
              </p>
            </div>
          </div>
        </Specimen>

        <Specimen
          title="Toast"
          note="Brief feedback. No backend calls."
          tag="PROPOSED"
        >
          <div className="button-row">
            {(
              [
                "success",
                "danger",
                "warning",
                "info",
              ] as Tone[]
            ).map((tone) => (
              <Button
                key={tone}
                variant="outline"
                onClick={() =>
                  notify(
                    tone === "success"
                      ? "Ticket added — demo only."
                      : tone === "danger"
                        ? "Demo error: please try again."
                        : tone === "warning"
                          ? "Review your event details."
                          : "You’re viewing a local demo.",
                    tone,
                  )
                }
              >
                {tone}
              </Button>
            ))}
          </div>
        </Specimen>
      </div>

      <Specimen
        title="Inventory"
        note="Existing app names, shown here as design references."
      >
        <div className="inventory-grid">
          {[
            "CreateEventForm",
            "DateTimeField",
            "FormInput",
            "FieldCard",
            "TicketDraftList",
            "TicketModal",
            "EventRow",
            "EventList",
            "ConfirmCreateModal",
            "LogoutConfirmationModal",
            "SettingsScreen",
          ].map((name) => (
            <code key={name}>{name}</code>
          ))}
        </div>
      </Specimen>

      <Dialog
        open={dialog !== null}
        onClose={() => setDialog(null)}
        title={dialogTitle}
        icon={
          dialog === "create" || dialog === "logout" ? (
            <div
              className={`confirmation-icon ${
                dialog === "logout" ? "is-danger" : ""
              }`}
            >
              <Icon
                name={dialog === "logout" ? "logout" : "doc"}
                width={54}
                height={54}
              />

              {dialog === "create" && (
                <span className="confirmation-badge">
                  <Icon
                    name="check"
                    width={22}
                    height={22}
                  />
                </span>
              )}
            </div>
          ) : undefined
        }
      >
        {dialog === "ticket" ? (
          <form
            className="dialog-form"
            onSubmit={(event) => {
              event.preventDefault();
              setDialog(null);

              notify(
                "Ticket saved in the demo. No data was sent.",
              );
            }}
          >
            <p>
              This form demonstrates the ticket UI only.
            </p>

            <Field label="Ticket name">
              {(id) => (
                <input
                  id={id}
                  required
                  placeholder="e.g. General admission"
                />
              )}
            </Field>

            <Field label="Price (₱)">
              {(id) => (
                <input
                  id={id}
                  required
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="0.00"
                />
              )}
            </Field>

            <div className="dialog-actions">
              <Button
                variant="neutral"
                onClick={() => setDialog(null)}
              >
                Cancel
              </Button>

              <Button type="submit">
                Save ticket
              </Button>
            </div>
          </form>
        ) : (
          <>
            {dialog === "logout" ? (
              <p className="dialog-description">
                Are you sure you want to log out?
              </p>
            ) : (
              <>
                <p className="confirm-question">
                  Are you sure you want to create this
                  event?
                </p>

                <p className="confirm-note">
                  Once created, the event will be visible
                  to other users and cannot be edited.
                </p>
              </>
            )}

            <small className="demo-note">
              Design preview only. Your app and
              account are unaffected.
            </small>

            <div className="dialog-actions">
              <Button
                variant="neutral"
                onClick={() => setDialog(null)}
              >
                Cancel
              </Button>

              <Button
                variant={
                  dialog === "logout"
                    ? "danger"
                    : "primary"
                }
                onClick={confirmPreview}
              >
                Confirm
              </Button>
            </div>
          </>
        )}
      </Dialog>

      {toast && (
        <div
          className={`toast tone-${toast.tone}`}
          role="status"
        >
          <Icon
            name={
              toast.tone === "success"
                ? "check"
                : toast.tone === "danger"
                  ? "alert"
                  : "info"
            }
          />

          <span>{toast.text}</span>

          <button
            className="icon-button"
            aria-label="Dismiss notification"
            onClick={() => setToast(null)}
          >
            <Icon name="close" />
          </button>
        </div>
      )}
    </Section>
  );
}