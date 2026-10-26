"use client";

import {
  useId,
  useState,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";

import type { Tone } from "@/lib/design-tokens";
import { Icon } from "./icon";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "danger"
    | "neutral";
  size?: "normal" | "small";
};

export function Button({
  variant = "primary",
  size = "normal",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`button button--${variant} button--${size} ${className}`}
      {...props}
    />
  );
}

type BadgeProps = {
  tone?: Tone;
  solid?: boolean;
  children: ReactNode;
};

export function Badge({
  tone = "info",
  solid = false,
  children,
}: BadgeProps) {
  return (
    <span
      className={`badge tone-${tone} ${
        solid ? "badge--solid" : ""
      }`}
    >
      <span className="badge-dot" />
      {children}
    </span>
  );
}

type FieldProps = {
  label: string;
  hint?: string;
  error?: string;
  children: (
    id: string,
    description: string | undefined,
  ) => ReactNode;
};

export function Field({
  label,
  hint,
  error,
  children,
}: FieldProps) {
  const id = useId();
  const description =
    error || hint ? `${id}-description` : undefined;

  return (
    <div className={`field ${error ? "field--invalid" : ""}`}>
      <label htmlFor={id}>{label}</label>

      {children(id, description)}

      {(error || hint) && (
        <small
          id={description}
          className={error ? "error-text" : ""}
        >
          {error || hint}
        </small>
      )}
    </div>
  );
}

type SwitchProps = {
  label: string;
  defaultChecked?: boolean;
  disabled?: boolean;
};

export function Switch({
  label,
  defaultChecked = false,
  disabled = false,
}: SwitchProps) {
  const [on, setOn] = useState(defaultChecked);

  return (
    <label
      className={`switch-row ${disabled ? "is-disabled" : ""}`}
    >
      <span>{label}</span>

      <button
        type="button"
        role="switch"
        aria-checked={on}
        aria-label={label}
        disabled={disabled}
        onClick={() => setOn(!on)}
        className={`switch ${on ? "is-on" : ""}`}
      >
        <span />
      </button>
    </label>
  );
}

type CopyButtonProps = {
  value: string;
  label?: string;
};

export function CopyButton({
  value,
  label,
}: CopyButtonProps) {
  const [message, setMessage] = useState("");

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setMessage("Copied");
    } catch {
      setMessage("Select and copy the value manually");
    }

    setTimeout(() => setMessage(""), 2200);
  }

  return (
    <button
      className="copy-button"
      onClick={copy}
      aria-label={`Copy ${value}`}
    >
      <span>{label || value}</span>

      <Icon
        name={message === "Copied" ? "check" : "copy"}
        width={14}
        height={14}
      />

      <span className="sr-only" role="status">
        {message}
      </span>
    </button>
  );
}