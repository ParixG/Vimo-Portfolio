
export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2" aria-label="Vimo homepage">
    <img
      src="/assets/logo-color.png"
      alt="Vimo Logo"
      width={40}
      height={40}></img>
      <span className="text-2xl font-bold tracking-tight text-foreground">
        Vimo Agency
      </span>
    </a>
  );
}
