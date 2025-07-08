'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { photographers } from '@/lib/photographers';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle, ArrowLeft, Clock, MapPin, User, Tag } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const photographerId = searchParams.get('photographerId');
  const photographer = photographers.find(p => p.id === photographerId);
  const { toast } = useToast();

  const handleConfirm = () => {
    toast({
      title: "Booking Confirmed!",
      description: `You've booked ${photographer?.name}. They will arrive in 10 minutes.`,
    });
  };

  if (!photographer) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">Photographer Not Found</h2>
        <p className="text-muted-foreground mb-6">The selected photographer could not be found. Please try again.</p>
        <Button asChild>
          <Link href="/photographers">Back to Photographers</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-start">
      <div className="flex flex-col items-center pt-8">
        <Image
          src={photographer.avatarUrl}
          alt={`Portrait of ${photographer.name}`}
          width={200}
          height={200}
          className="rounded-full border-4 border-primary shadow-lg mb-6"
          data-ai-hint="person portrait"
        />
        <h2 className="text-3xl font-bold font-headline">{photographer.name}</h2>
        <p className="text-muted-foreground text-lg">{photographer.specialty}</p>
      </div>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-headline">Finalize Your Zypix Session</CardTitle>
          <CardDescription>Review the details and confirm your 10-minute photo shoot.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
             <Clock className="h-4 w-4" />
            <AlertTitle>10-Minute Service</AlertTitle>
            <AlertDescription>
              Your photographer will arrive shortly. The session will last for 10 minutes.
            </AlertDescription>
          </Alert>
          <div className="border-t pt-4 space-y-2">
            <div className="flex items-center gap-4 text-sm"><User className="text-primary w-4 h-4"/><span>{photographer.name}</span></div>
            <div className="flex items-center gap-4 text-sm"><Tag className="text-primary w-4 h-4"/><span>{photographer.specialty}</span></div>
            <div className="flex items-center gap-4 text-sm"><MapPin className="text-primary w-4 h-4"/><span>Your Current Location (mock)</span></div>
          </div>
        </CardContent>
        <CardFooter className="flex-col sm:flex-row gap-2">
            <Button variant="outline" asChild className="w-full sm:w-auto">
              <Link href="/photographers">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Cancel
              </Link>
            </Button>
            <Button onClick={handleConfirm} className="w-full sm:w-auto flex-grow bg-accent hover:bg-accent/90 text-accent-foreground">
              <CheckCircle className="mr-2 h-4 w-4" />
              Initiate Session
            </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default function ConfirmBookingPage() {
  return (
    <div className="py-12">
        <Suspense fallback={<div className="text-center p-24">Loading...</div>}>
            <ConfirmationContent />
        </Suspense>
    </div>
  );
}
