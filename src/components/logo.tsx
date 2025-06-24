import { Film } from "lucide-react";

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2" aria-label="Vimo homepage">
      <div className="bg-primary p-2 rounded-lg">
        <Film className="h-6 w-6 text-primary-foreground" />
      </div>
      <span className="text-2xl font-bold tracking-tight text-foreground">
        Vimo
      </span>
    </a>
  );
}
