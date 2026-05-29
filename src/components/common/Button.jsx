import { Link } from "react-router-dom";

const styles = {
  primary: "bg-clay text-white hover:bg-cocoa",
  secondary: "border border-white/70 text-white hover:bg-white hover:text-cocoa",
  soft: "bg-milk text-cocoa hover:bg-sage/45",
  outline: "border border-cocoa/20 text-cocoa hover:border-cocoa hover:bg-cocoa hover:text-white",
};

export default function Button({
  children,
  className = "",
  to,
  variant = "primary",
  ...props
}) {
  const base =
    "focus-ring group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-bold uppercase transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-soft active:translate-y-0";
  const classes = `${base} ${styles[variant]} ${className}`;

  if (to) {
    return (
      <Link className={classes} to={to}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  );
}
