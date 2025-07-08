import Image from 'next/image';
import Link from 'next/link';
import type { Photographer } from '@/lib/photographers';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, StarHalf } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

function StarRating({ rating, reviewCount }: { rating: number; reviewCount: number }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;
  
  return (
    <div className="flex items-center gap-1 text-orange-400">
      <div className="flex items-center gap-0.5">
        {Array(fullStars).fill(0).map((_, i) => <Star key={`full-${i}`} className="w-4 h-4 fill-current" />)}
        {halfStar > 0 && <StarHalf key="half" className="w-4 h-4 fill-current" />}
        {Array(emptyStars).fill(0).map((_, i) => <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />)}
      </div>
       <span className="ml-1 text-sm text-muted-foreground">{rating.toFixed(1)} ({reviewCount} reviews)</span>
    </div>
  );
}

export default function PhotographerCard({ photographer }: { photographer: Photographer }) {
  return (
    <Card className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative">
        <Image
          src={photographer.coverImageUrl}
          alt={`Portfolio example from ${photographer.name}`}
          width={400}
          height={300}
          className="aspect-[4/3] w-full object-cover"
          data-ai-hint="photography portfolio"
        />
        <Image
          src={photographer.avatarUrl}
          alt={`Avatar of ${photographer.name}`}
          width={64}
          height={64}
          className="absolute bottom-0 left-4 translate-y-1/2 rounded-full border-4 border-card bg-card"
          data-ai-hint="person portrait"
        />
      </div>
      
      <CardHeader className="pt-10">
        <CardTitle className="font-headline text-lg">{photographer.name}</CardTitle>
        <StarRating rating={photographer.rating} reviewCount={photographer.reviewCount} />
      </CardHeader>

      <CardContent className="flex-grow">
         <p className="text-sm text-muted-foreground">{photographer.specialty}</p>
      </CardContent>

      <CardFooter className="flex-col items-start gap-2 pt-0">
        {photographer.isAvailable ? (
          <Badge variant="secondary" className="w-full justify-center py-1">Available Now</Badge>
        ) : (
          <Badge variant="outline" className="w-full justify-center py-1">Not Available</Badge>
        )}
        <Button asChild className="w-full mt-2 bg-accent hover:bg-accent/90 text-accent-foreground" disabled={!photographer.isAvailable}>
          <Link href={`/confirm-booking?photographerId=${photographer.id}`}>Book Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
