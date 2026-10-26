import type { SVGProps } from "react";

const paths: Record<string, string> = {
  arrow: "m7 17 10-10M7 7h10v10",
  chevron: "m9 5 7 7-7 7",
  down: "m6 9 6 6 6-6",
  check: "m5 12 4 4L19 6",
  plus: "M12 5v14M5 12h14",
  close: "m6 6 12 12M6 18 18 6",
  menu: "M4 6h16M4 12h16M4 18h16",
  copy: "M9 9h11v11H9zM15 9V4H4v11h5",
  calendar: "M4 5h16v16H4zM4 10h16M8 3v4M16 3v4",
  ticket:
    "M3 6h18v4a2 2 0 0 0 0 4v4H3v-4a2 2 0 0 0 0-4zM15 6v3m0 2v2m0 2v3",
  person:
    "M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 21v-2a8 8 0 0 1 16 0v2",
  mail: "M3 5h18v14H3zM3 5l9 8 9-8",
  clock:
    "M12 8v5l3 2M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z",
  // The arrow points into the box, like the app's Log Out button
  logout: "M15 3h5v18h-5M3 12h12m-5-5 5 5-5 5",
  search: "M21 21l-5-5M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z",
  eye:
    "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  heart:
    "M20 4c-3-2-6 0-8 2-2-2-5-4-8-2-7 5 8 17 8 17S27 9 20 4Z",
  alert: "M12 3 2 21h20L12 3ZM12 9v5m0 3v1",
  info:
    "M12 11v6m0-10v1M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z",

  // Settings and profile icons
  bell: "M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10 21a2 2 0 0 0 4 0",
  lock: "M5 11h14v10H5zM8 11V8a4 4 0 0 1 8 0v3",
  shield:
    "M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6zM9 12l2 2 4-4",
  help:
    "M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0ZM9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.5M12 17v.5",
  doc: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h6",
};

type IconProps = SVGProps<SVGSVGElement> & {
  name: string;
};

export function Icon({ name, ...props }: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d={paths[name] ?? paths.info} />
    </svg>
  );
}