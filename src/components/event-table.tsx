"use client";

import { useState } from "react";

import {
  sampleEvents,
  type Tone,
} from "@/lib/design-tokens";

import { Badge, Button } from "./ui/controls";
import { Icon } from "./ui/icon";

const statusTone: Record<string, Tone> = {
  Published: "info",
  Confirmed: "success",
  "Under review": "warning",
  Cancelled: "danger",
};

export function EventTable() {
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState("data");
  const [page, setPage] = useState(1);
  const [ascending, setAscending] = useState(true);

  const filtered = sampleEvents
    .filter((event) =>
      `${event.name} ${event.place} ${event.status}`
        .toLowerCase()
        .includes(query.toLowerCase()),
    )
    .sort((a, b) =>
      ascending
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name),
    );

  const count = mode === "empty" ? 0 : filtered.length;
  const pages = Math.max(1, Math.ceil(count / 3));
  const currentPage = Math.min(page, pages);

  const rows =
    mode === "empty"
      ? []
      : filtered.slice(
          (currentPage - 1) * 3,
          currentPage * 3,
        );

  function reset() {
    setQuery("");
    setMode("data");
    setPage(1);
  }

  return (
    <>
      <div className="table-toolbar">
        <div className="input-icon search-input">
          <Icon name="search" />

          <input
            aria-label="Search sample events"
            placeholder="Search events…"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setPage(1);
            }}
          />
        </div>

        <div
          className="segments compact"
          role="group"
          aria-label="Table state"
        >
          {["data", "loading", "empty", "error"].map(
            (state) => (
              <button
                key={state}
                aria-pressed={mode === state}
                className={
                  mode === state ? "selected" : ""
                }
                onClick={() => setMode(state)}
              >
                {state}
              </button>
            ),
          )}
        </div>
      </div>

      {mode === "error" ? (
        <div role="alert" className="table-empty">
          <Icon name="alert" />
          <h4>Couldn’t load events</h4>
          <p>
            Demo error state. No server request was made.
          </p>

          <Button
            variant="secondary"
            onClick={() => setMode("data")}
          >
            Try again
          </Button>
        </div>
      ) : (
        <div
          className="table-scroll"
          tabIndex={0}
          role="region"
          aria-label="Sample events table"
        >
          <table className="data-table">
            <thead>
              <tr>
                <th scope="col">
                  <button
                    onClick={() =>
                      setAscending(!ascending)
                    }
                    aria-label={`Sort event name ${
                      ascending
                        ? "descending"
                        : "ascending"
                    }`}
                  >
                    Event
                    <span aria-hidden="true">
                      {ascending ? "↑" : "↓"}
                    </span>
                  </button>
                </th>

                <th scope="col">Date</th>
                <th scope="col">Status</th>
                <th scope="col" className="numeric">
                  Bookings
                </th>
              </tr>
            </thead>

            <tbody>
              {mode === "loading"
                ? Array.from(
                    { length: 3 },
                    (_, rowIndex) => (
                      <tr key={rowIndex}>
                        {Array.from(
                          { length: 4 },
                          (_, columnIndex) => (
                            <td key={columnIndex}>
                              <span className="skeleton" />
                            </td>
                          ),
                        )}
                      </tr>
                    ),
                  )
                : rows.map((event) => (
                    <tr key={event.id}>
                      <td>
                        <strong>{event.name}</strong>
                        <small>{event.place}</small>
                      </td>

                      <td>{event.date}</td>

                      <td>
                        <Badge
                          tone={statusTone[event.status]}
                        >
                          {event.status}
                        </Badge>
                      </td>

                      <td className="numeric">
                        {event.bookings}
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>

          {mode !== "loading" && rows.length === 0 && (
            <div className="table-empty">
              <Icon name="calendar" />
              <h4>No events found</h4>
              <p>
                Try a different search or reset the preview.
              </p>

              <Button
                variant="secondary"
                onClick={reset}
              >
                Reset preview
              </Button>
            </div>
          )}

          {mode === "loading" && (
            <span className="sr-only" role="status">
              Loading sample events
            </span>
          )}
        </div>
      )}

      <div className="table-footer">
        <span>
          {mode === "loading"
            ? "Loading preview…"
            : `${count} sample events · no live data`}
        </span>

        <div className="button-row">
          <Button
            variant="outline"
            size="small"
            disabled={
              currentPage <= 1 || mode !== "data"
            }
            onClick={() =>
              setPage(currentPage - 1)
            }
          >
            Previous
          </Button>

          <span className="page-count">
            {currentPage} / {pages}
          </span>

          <Button
            variant="outline"
            size="small"
            disabled={
              currentPage >= pages || mode !== "data"
            }
            onClick={() =>
              setPage(currentPage + 1)
            }
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
}