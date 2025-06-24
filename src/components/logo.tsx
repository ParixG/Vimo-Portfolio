
export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2" aria-label="Vimo homepage">
      <svg
        role="img"
        aria-label="Vimo Logo"
        className="h-8 w-auto text-foreground"
        viewBox="0 0 780 352"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M221.6 0L0 352H126.4L298.4 93.6L278.4 132L221.6 0Z" />
        <path d="M504.8 0L424.8 116L512 352H632L720.8 111.2L636 352H780L632 0H504.8Z" />
      </svg>
      <span className="text-2xl font-bold tracking-tight text-foreground">
        Vimo Agency
      </span>
    </a>
  );
}
