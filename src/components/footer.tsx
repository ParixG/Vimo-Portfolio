export function Footer() {
  return (
    <footer className="py-8 border-t mt-16">
      <div className="container mx-auto text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Vimo Portfolio. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
