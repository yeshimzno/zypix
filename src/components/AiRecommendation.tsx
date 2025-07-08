'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAiRecommendation } from '@/lib/actions';
import type { PhotographerRecommendationOutput } from '@/ai/flows/photographer-recommendation';
import { photographers, type Photographer } from '@/lib/photographers';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, UserCheck, Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';

export default function AiRecommendation({ location }: { location: string }) {
  const [recommendation, setRecommendation] = useState<PhotographerRecommendationOutput | null>(null);
  const [recommendedPhotographer, setRecommendedPhotographer] = useState<Photographer | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [preferFemale, setPreferFemale] = useState(false);

  const handleGetRecommendation = async () => {
    if (!location || location.length < 3) {
      setError('Please provide a valid location of at least 3 characters.');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    setRecommendation(null);
    setRecommendedPhotographer(null);
    try {
      const result = await getAiRecommendation(location, preferFemale);
      const foundPhotographer = photographers.find(p => p.id === result.recommendedPhotographer);
      
      if (foundPhotographer) {
        setRecommendation(result);
        setRecommendedPhotographer(foundPhotographer);
      } else {
        setError(`AI recommended a photographer (ID: ${result.recommendedPhotographer}) but they could not be found in our system.`);
        console.error("Recommended photographer not found:", result.recommendedPhotographer);
      }
    } catch (e) {
      setError('Failed to get recommendation. Please try again.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <Card className="bg-transparent border-dashed">
        <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline text-xl">
                <Sparkles className="text-primary"/>
                Let AI Find Your Perfect Match
            </CardTitle>
            <CardDescription>
                We'll recommend the best photographer for you based on their style, past work, and ratings in {' '}
                <span className="font-bold text-foreground">{location || 'your chosen location'}</span>.
            </CardDescription>
        </CardHeader>
        <CardContent>
            <div className="mb-4">
              <div className="flex items-center space-x-2">
                  <Checkbox
                      id="prefer-female-ai"
                      checked={preferFemale}
                      onCheckedChange={(checked) => setPreferFemale(checked as boolean)}
                  />
                  <Label htmlFor="prefer-female-ai" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Prefer a female photographer
                  </Label>
              </div>
              <p className="text-xs text-muted-foreground pl-6 pt-1">
                  For the comfort of female clients.
              </p>
            </div>
            <Button onClick={handleGetRecommendation} disabled={isLoading || !location} className="w-full bg-primary hover:bg-primary/90 text-base px-6">
              {isLoading ? <Loader2 className="animate-spin" /> : <Sparkles />}
              {isLoading ? 'Thinking...' : 'Get AI Recommendation'}
            </Button>
            {error && <p className="text-sm text-destructive mt-2">{error}</p>}
        </CardContent>
      </Card>
      
      {isLoading && (
          <div className="flex justify-center items-center p-8">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
              <p className="sr-only">Loading recommendation...</p>
          </div>
      )}
      
      {error && !isLoading && (
        <Alert variant="destructive" className="mt-4">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {recommendation && recommendedPhotographer && !isLoading && (
        <Card className="mt-6 bg-primary/10 border-primary animate-in fade-in-50 duration-500">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline text-primary">
                <UserCheck />
                Our AI-Powered Recommendation
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-6 items-center text-left">
                <div className="flex-shrink-0">
                    <Image
                        src={recommendedPhotographer.avatarUrl}
                        alt={`Avatar of ${recommendedPhotographer.name}`}
                        width={100}
                        height={100}
                        className="rounded-full border-4 border-primary/50"
                        data-ai-hint="person portrait"
                    />
                </div>
                <div className="flex-grow space-y-3">
                    <div>
                        <h3 className="text-xl font-bold">{recommendedPhotographer.name}</h3>
                        <p className="text-muted-foreground">{recommendedPhotographer.specialty}</p>
                    </div>
                    <Alert className="border-primary/50 bg-primary/10 text-primary-foreground !pl-4">
                       <Sparkles className="h-4 w-4 !text-primary" />
                       <AlertDescription className="text-primary/90 italic">
                           {recommendation.reason}
                       </AlertDescription>
                   </Alert>
                    <Button asChild className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
                        <Link href={`/confirm-booking?photographerId=${recommendedPhotographer.id}`}>
                            Book {recommendedPhotographer.name.split(' ')[0]} Now
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
      )}
    </div>
  );
}
