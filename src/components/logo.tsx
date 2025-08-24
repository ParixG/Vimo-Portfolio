
import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Vimo homepage">
    <Image
      src="/assets/logo-color.png"
      alt="Vimo Logo"
      width={40}
      height={40} />
      <span className="text-2xl font-bold tracking-tight text-foreground">
        Vimo Agency
      </span>
    </Link>
  );
}
