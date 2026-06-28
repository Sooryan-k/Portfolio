type SectionHeadingProps = {
  index?: string;
  eyebrow: string;
  title: string;
  className?: string;
};

export default function SectionHeading({
  index,
  eyebrow,
  title,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
        {index ? `${index} — ` : ""}
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-fg sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
