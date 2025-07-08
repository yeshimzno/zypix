'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { photographers } from '@/lib/photographers';
import PhotographerCard from '@/components/PhotographerCard';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';


function InstantBookingComponent() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(true);

  useEffect(() => {
    // Find the first available photographer
    const availablePhotographer = photographers.find(p => p.isAvailable);
    
    // Simulate a delay for finding a photographer
    const timer = setTimeout(() => {
      setIsSearching(false);
      if (availablePhotographer) {
        router.push(`/confirm-booking?photographerId=${availablePhotographer.id}`);
      } else {
        // Handle case where no photographer is available
        setError("No photographers are available for an instant session right now.");
      }
    }, 3000); // 3-second delay

    return () => clearTimeout(timer);
  }, [router]);

  if (isSearching) {
    return (
      <div className="text-center py-20 flex flex-col items-center justify-center gap-6 h-[60vh]">
        <Loader2 className="w-16 h-16 animate-spin text-primary" />
        <h1 className="text-3xl md:text-5xl font-bold font-headline tracking-tighter">
          Finding you a photographer...
        </h1>
        <p className="max-w-xl mx-auto text-lg text-muted-foreground">
          We're searching for the best available Zypix professional near you. This will only take a moment.
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 text-center flex flex-col items-center justify-center gap-6 h-[60vh]">
          <Alert variant="destructive" className="max-w-lg mx-auto">
              <AlertTitle>No Photographers Available</AlertTitle>
              <AlertDescription>
                  {error}
              </AlertDescription>
          </Alert>
          <Button asChild variant="outline">
            <Link href="/"><ArrowLeft className="mr-2"/> Go Back Home</Link>
          </Button>
      </div>
    );
  }

  return null; // Should have redirected or shown an error
}

function PhotographersListComponent() {
    const [femaleOnly, setFemaleOnly] = useState(false);

    const filteredPhotographers = femaleOnly
        ? photographers.filter((p) => p.gender === 'female')
        : photographers;

    return (
        <div className="py-12">
        <section className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold font-headline tracking-tighter mb-4">
            Photographers Near You
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            We found these professionals ready for a quick shoot.
            </p>
        </section>
        
        <div className="flex justify-end items-center mb-8">
            <div className="flex flex-col items-end">
                <div className="flex items-center space-x-2">
                    <Switch id="female-only" checked={femaleOnly} onCheckedChange={setFemaleOnly} />
                    <Label htmlFor="female-only">Show female photographers only</Label>
                </div>
                <p className="text-xs text-muted-foreground pt-1">For the comfort of our female clients.</p>
            </div>
        </div>

        <section className="mb-12">
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg border bg-card">
                <Image
                    src="https://placehold.co/1200x600.png"
                    alt="Map of available photographers"
                    width={1200}
                    height={600}
                    className="w-full h-full object-cover"
                    data-ai-hint="city map"
                />
            </div>
        </section>

        <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredPhotographers.map((photographer) => (
                <PhotographerCard key={photographer.id} photographer={photographer} />
            ))}
            </div>
        </section>
        </div>
    );
}

function PhotographersPageContent() {
    const searchParams = useSearchParams();
    const isInstant = searchParams.get('type') === 'instant';
  
    if (isInstant) {
      return <InstantBookingComponent />;
    }
  
    return <PhotographersListComponent />;
}

export default function PhotographersPage() {
    return (
        <Suspense fallback={<div className="text-center p-24">Loading...</div>}>
            <PhotographersPageContent />
        </Suspense>
    )
}
