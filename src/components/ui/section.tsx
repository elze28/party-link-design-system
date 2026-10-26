import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  number: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function Section({
  id,
  number,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section id={id} className="system-section">
      <div className="section-heading">
        <span className="eyebrow">SECTION {number}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      {children}
    </section>
  );
}

type SpecimenProps = {
  title: string;
  note?: string;
  tag?: string;
  className?: string;
  children: ReactNode;
};

export function Specimen({
  title,
  note,
  tag,
  className = "",
  children,
}: SpecimenProps) {
  return (
    <article className={`specimen ${className}`}>
      <header className="specimen-heading">
        <div>
          <h3>{title}</h3>
          {note && <p>{note}</p>}
        </div>

        {tag && <span className="tiny-tag">{tag}</span>}
      </header>

      {children}
    </article>
  );
}