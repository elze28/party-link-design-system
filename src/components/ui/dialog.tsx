"use client";

import {
  useEffect,
  useId,
  useRef,
  type ReactNode,
} from "react";

import { Icon } from "./icon";

type DialogProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  // Optional icon shown above the title (used by confirm dialogs)
  icon?: ReactNode;
  children: ReactNode;
};

export function Dialog({
  open,
  onClose,
  title,
  icon,
  children,
}: DialogProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const id = useId();

  useEffect(() => {
    const dialog = ref.current;

    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    }

    if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  return (
    <dialog
      ref={ref}
      className="dialog"
      aria-labelledby={id}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClose={onClose}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;

        const bounds =
          event.currentTarget.getBoundingClientRect();

        const outside =
          event.clientX < bounds.left ||
          event.clientX > bounds.right ||
          event.clientY < bounds.top ||
          event.clientY > bounds.bottom;

        if (outside) onClose();
      }}
    >
      <div className="dialog-top">
        <span className="eyebrow">PARTY LINK / PREVIEW</span>

        <button
          className="icon-button"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <Icon name="close" />
        </button>
      </div>

      {icon}

      <h3 id={id}>{title}</h3>

      {children}
    </dialog>
  );
}