'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import Logo from '@/components/Logo';
import { LanguageToggle } from '@/components/LanguageToggle';

export default function Header() {
  return (
    <header className="bg-card shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 text-primary font-bold text-xl">
              <Logo />
              <span className="font-headline tracking-wider">Zypix</span>
            </Link>
          </div>
          <nav className="flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
            <ThemeToggle />
            <LanguageToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
