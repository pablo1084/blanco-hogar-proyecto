export default function SectionHeader({ align = "left", kicker, title, children }) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className="section-kicker">{kicker}</p>
      <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-cocoa md:text-6xl">
        {title}
      </h2>
      {children ? <p className="mt-5 text-base leading-8 text-cocoa/70">{children}</p> : null}
    </div>
  );
}
