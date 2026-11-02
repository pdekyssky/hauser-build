type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-3xl"} ${className}`}
    >
      {eyebrow ? (
        <p
          className={`text-[0.65rem] font-medium uppercase tracking-[0.16em] sm:text-xs sm:tracking-[0.2em] ${
            dark ? "text-cream/50" : "text-ink-muted"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-display-md font-semibold text-balance ${
          eyebrow ? "mt-2 sm:mt-3" : ""
        } ${dark ? "text-cream" : "text-ink"}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-3 text-[0.9375rem] leading-relaxed sm:mt-4 sm:text-base md:text-lg ${
            dark ? "text-cream/65" : "text-ink-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
