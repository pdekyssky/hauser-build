"use client";

import Image from "next/image";
import { useCallback, useEffect } from "react";

type LightboxProps = {
  open: boolean;
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  onClose: () => void;
};

export default function Lightbox({
  open,
  src,
  alt,
  title,
  caption,
  onClose,
}: LightboxProps) {
  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onKeyDown]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-ink/90 p-4 sm:p-6 md:p-10"
      style={{
        paddingTop: "max(1rem, env(safe-area-inset-top))",
        paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
      }}
      role="dialog"
      aria-modal="true"
      aria-label={title ?? "Zväčšená fotografia"}
      onClick={onClose}
    >
      <button
        type="button"
        className="btn-touch absolute right-3 top-3 z-10 border border-cream/30 text-cream transition-colors hover:bg-cream/10 sm:right-6 sm:top-6 md:right-8 md:top-8"
        style={{ top: "max(0.75rem, env(safe-area-inset-top))" }}
        onClick={onClose}
        aria-label="Zavrieť"
      >
        Zavrieť
      </button>

      <figure
        className="relative my-auto w-full max-w-5xl pt-12"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-contain"
            priority
          />
        </div>
        {(title || caption) && (
          <figcaption className="mt-4 text-cream">
            {title ? (
              <p className="font-display text-lg font-medium">{title}</p>
            ) : null}
            {caption ? (
              <p className="mt-1 text-sm text-cream/65">{caption}</p>
            ) : null}
          </figcaption>
        )}
      </figure>
    </div>
  );
}
