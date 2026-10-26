export const navigation = [
  "Foundations",
  "Fields",
  "Components",
  "Primitives",
  "Conventions",
] as const;

export const brandColors = [
  {
    name: "Electric purple",
    token: "brand.primary",
    value: "#6B2CF5",
    note: "Actions · active navigation",
  },
  {
    name: "Deep purple",
    token: "brand.pressed",
    value: "#4B18C8",
    note: "Pressed state",
  },
  {
    name: "Party pink",
    token: "brand.accent",
    value: "#F02BB8",
    note: "Small highlights",
  },
  {
    name: "Purple tint",
    token: "surface.tint",
    value: "#F1EDFC",
    note: "Secondary actions · circles",
  },
];

export const neutrals = [
  { name: "Canvas", value: "#FFFFFF" },
  { name: "Text", value: "#000000" },
  { name: "Secondary text", value: "#716D78" },
  { name: "Placeholder", value: "#B3B3B3" },
  { name: "Border", value: "#D4D4D4" },
  { name: "Cancel", value: "#CDCDCD" },
  { name: "Error", value: "#D93025" },
];

export type Tone =
  | "success"
  | "warning"
  | "info"
  | "danger"
  | "accent";

export const statuses: {
  tone: Tone;
  label: string;
}[] = [
  { tone: "success", label: "Confirmed" },
  { tone: "warning", label: "Under review" },
  { tone: "info", label: "Published" },
  { tone: "danger", label: "Cancelled" },
  { tone: "accent", label: "Featured" },
];

export const sampleEvents = [
  {
    id: 1,
    name: "Neon Nights",
    place: "Cebu City",
    date: "Nov 20, 2026",
    bookings: 128,
    status: "Published",
  },
  {
    id: 2,
    name: "Sunset Sessions",
    place: "Mandaue City",
    date: "Nov 22, 2026",
    bookings: 86,
    status: "Under review",
  },
  {
    id: 3,
    name: "The After Hours",
    place: "Lapu-Lapu City",
    date: "Nov 28, 2026",
    bookings: 210,
    status: "Confirmed",
  },
  {
    id: 4,
    name: "Purple Weekend",
    place: "Cebu City",
    date: "Dec 05, 2026",
    bookings: 64,
    status: "Published",
  },
  {
    id: 5,
    name: "Midnight Social",
    place: "Mandaue City",
    date: "Dec 12, 2026",
    bookings: 0,
    status: "Cancelled",
  },
];