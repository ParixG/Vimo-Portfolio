
export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2" aria-label="Vimo homepage">
    <img
      src="/src/assets/logo-white.png"
    />
      <span className="text-2xl font-bold tracking-tight text-foreground">
        Vimo Agency
      </span>
    </a>
  );
}
