"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { navigation } from "@/lib/design-tokens";
import { Icon } from "./ui/icon";

export function SiteHeader() {
  const [active, setActive] = useState("foundations");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      {
        rootMargin: "-15% 0px -65% 0px",
      },
    );

    document
      .querySelectorAll(".system-section")
      .forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a
          className="wordmark"
          href="#top"
          aria-label="Party Link design system home"
        >
          <Image
            src="/party-link-logo.png"
            alt=""
            width={38}
            height={40}
            className="header-logo"
          />

          <span>
            Party Link
            <span className="wordmark-sub">
              Design system
            </span>
          </span>
        </a>

        <button
          className="icon-button mobile-menu"
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>

        <nav
          id="main-navigation"
          aria-label="Sections"
          className={open ? "nav is-open" : "nav"}
        >
          {navigation.map((item) => {
            const id = item.toLowerCase();

            return (
              <a
                key={item}
                href={`#${id}`}
                className={
                  active === id ? "is-active" : ""
                }
                aria-current={
                  active === id ? "location" : undefined
                }
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            );
          })}
        </nav>

        <span className="version">
          <span />
          v1.0
        </span>
      </div>
    </header>
  );
}