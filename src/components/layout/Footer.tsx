'use client';

import Link from 'next/link';
import { Instagram, Youtube, Twitter, ChevronDown, Facebook } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Logo from '@/components/Logo';
import { useState, useEffect } from 'react';

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
    return (
        <Link href={href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            {children}
        </Link>
    );
};

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-card mt-12 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
             <Link href="/" className="flex items-center gap-2 text-primary font-bold text-xl">
              <Logo />
              <span className="font-headline tracking-wider text-foreground">Zypix</span>
            </Link>
            <div className="flex gap-5 mt-2">
              <a href="https://www.instagram.com/zypix_services/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a href="https://www.youtube.com/feed/clips" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a href="https://x.com/zypixservices" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61578122455978" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
                <h3 className="font-semibold text-foreground mb-2">Book</h3>
                <FooterLink href="/#book-session">Book a photographer</FooterLink>
                <FooterLink href="/find-location">Find a location</FooterLink>
                <FooterLink href="/how-it-works">How it works</FooterLink>
                <FooterLink href="/pricing">Pricing</FooterLink>
            </div>
            <div className="flex flex-col gap-3">
                <h3 className="font-semibold text-foreground mb-2">About</h3>
                <FooterLink href="/about">About Us</FooterLink>
                <FooterLink href="/contact">Contact Us</FooterLink>
                <FooterLink href="/careers">Careers</FooterLink>
                <FooterLink href="/faq">FAQ</FooterLink>
                <FooterLink href="/media-center">Media Centre</FooterLink>
            </div>
            <div className="flex flex-col gap-3">
                <h3 className="font-semibold text-foreground mb-2">Zypix For Business</h3>
                <FooterLink href="/join-us">For Photographers</FooterLink>
                <FooterLink href="/corporate">Corporate</FooterLink>
                <FooterLink href="/investor-relations">Investor Relations</FooterLink>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
             <p className="order-2 md:order-1 mt-4 md:mt-0">{`© ${year} Zypix. All rights reserved.`}</p>
             <div className="order-1 md:order-2 flex flex-wrap gap-x-6 gap-y-2 justify-center">
                <FooterLink href="/notices">Notices</FooterLink>
                <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
                <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
                <FooterLink href="/cancellation-policy">Cancellation Policy</FooterLink>
             </div>
             <div className="order-3 hidden md:flex">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="flex items-center gap-2 cursor-pointer hover:text-foreground transition-colors">
                        <span>India</span>
                        <ChevronDown className="h-4 w-4" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Region (Currently India)</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
          </div>
      </div>
    </footer>
  );
}
