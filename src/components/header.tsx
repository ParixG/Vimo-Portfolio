import { Logo } from "./logo";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">Contact Us</Button>
      </div>
    </header>
  );
}
