import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Search, Navigation, Camera, Tag, Star, Bell } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Find a Location | Zypix',
  description: 'Zypix is available in multiple cities across India. Find photographers near you in seconds.',
};

export default function FindLocationPage() {
    const popularCities = [
        "Delhi NCR", "Mumbai", "Bangalore", "Hyderabad", "Pune", "Kolkata", "Chennai", "Ahmedabad", "Jaipur"
    ];

    const availableServices = [
        { icon: <Camera className="w-5 h-5 text-primary" />, title: "List of available photographers" },
        { icon: <Tag className="w-5 h-5 text-primary" />, title: "Types of shoots offered (Weddings, Birthdays, etc.)" },
        { icon: <Star className="w-5 h-5 text-primary" />, title: "Ratings & real-time availability" },
    ];

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto space-y-12 px-4">
        <section className="text-center">
            <div className="flex justify-center mb-4">
                <MapPin className="w-16 h-16 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter mb-4">
                Find a Location
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Zypix is available in multiple cities across India — find photographers near you in seconds.
            </p>
        </section>

        <Card className="shadow-lg border">
            <CardHeader>
                <CardTitle className="text-2xl font-headline flex items-center gap-3">
                    <Search className="w-6 h-6 text-primary"/>
                    Search by City or Pin Code
                </CardTitle>
                <CardDescription>
                    Find talented photographers in your area instantly.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="relative">
                    <Input 
                        placeholder="Enter city or pin code..." 
                        className="h-12 text-lg pl-4 pr-12"
                    />
                    <Button size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 bg-accent hover:bg-accent/90">
                        <Search className="h-5 w-5 text-accent-foreground" />
                    </Button>
                </div>
                 <div className="relative flex py-1 items-center">
                    <div className="flex-grow border-t border-border"></div>
                    <span className="flex-shrink mx-4 text-xs text-muted-foreground uppercase">Or</span>
                    <div className="flex-grow border-t border-border"></div>
                </div>
                <Button variant="outline" className="w-full h-12 text-base">
                    <Navigation className="mr-2 h-5 w-5" />
                    Use my current location
                </Button>
            </CardContent>
        </Card>

        <section>
            <h2 className="text-3xl font-bold font-headline text-center mb-8">
                🌆 Popular Cities We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
                {popularCities.map((city) => (
                    <Badge key={city} variant="secondary" className="px-4 py-2 text-md font-normal cursor-pointer transition-colors hover:bg-primary/10 hover:text-primary">
                        {city}
                    </Badge>
                ))}
                 <Badge variant="outline" className="px-4 py-2 text-md font-normal">
                    + more coming soon
                </Badge>
            </div>
        </section>
        
        <Card className="bg-card/50 border-primary/20">
            <CardHeader>
                 <CardTitle className="text-2xl font-headline">
                    📸 Services Available Near You
                </CardTitle>
                <CardDescription>
                    Once you select a location, you'll see:
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="space-y-4">
                    {availableServices.map((service, index) => (
                        <li key={index} className="flex items-center gap-4 text-muted-foreground">
                            {service.icon}
                            <span>{service.title}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>

        <section className="bg-card p-8 rounded-lg shadow-lg border text-center">
            <h2 className="flex items-center justify-center gap-3 text-2xl font-bold font-headline mb-4">
                <Bell className="text-accent w-8 h-8" />
                Expanding Fast!
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Can’t find your location? Don’t worry — Zypix is growing quickly! Let us know where you'd like to see us next, and we'll notify you when we launch in your area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Button variant="outline">Request a Location</Button>
                 <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Sign Up for Updates</Button>
            </div>
        </section>

      </div>
    </div>
  );
}
