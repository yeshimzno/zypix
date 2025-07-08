
'use client';

import { useState, useRef } from 'react';
import { MapPin, ArrowLeft, User, Building, Zap, CalendarIcon, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import AiRecommendation from '@/components/AiRecommendation';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const personalCategories = [
  'Wedding', 'Family Portraits', 'Events', 'Portrait', 'Travel', 'Reels', 'Sports', 'Wildlife', 'Short Films', 'Personal Photographer', 'Mobile Photography'
];
const businessCategories = [
  'Fashion', 'Product', 'Food', 'Architecture', 'Drone', 'Corporate', 'Reels', 'Music Videos', 'Documentaries'
];

const exploreCategories = [...new Set([...personalCategories, ...businessCategories])];

const logos = [
  { name: 'EventMakers', svg: <svg viewBox="0 0 24 24" fill="none" className="w-full h-full"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg> },
  { name: 'CorporateConnect', svg: <svg viewBox="0 0 24 24" fill="none" className="w-full h-full"><rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2"></rect><rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2"></rect></svg> },
  { name: 'CollegeFest Inc.', svg: <svg viewBox="0 0 24 24" fill="none" className="w-full h-full"><path d="M21 15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7l10-5 10 5v8z" stroke="currentColor" strokeWidth="2"></path></svg> },
  { name: 'StartupHub', svg: <svg viewBox="0 0 24 24" fill="none" className="w-full h-full"><path d="M12 2L22 8.5V15.5L12 22L2 15.5V8.5L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> },
  { name: 'MediaMasters', svg: <svg viewBox="0 0 24 24" fill="none" className="w-full h-full"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"></circle><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"></circle></svg> },
];

export default function Home() {
  const [step, setStep] = useState<'initial' | 'personal' | 'business' | 'instant'>('initial');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [vibe, setVibe] = useState('');
  const [sessionLocation, setSessionLocation] = useState('');
  const [sessionDate, setSessionDate] = useState<Date>();
  const [sessionTime, setSessionTime] = useState('');
  const bookingCardRef = useRef<HTMLDivElement>(null);

  const handleReset = () => {
    setStep('initial');
    setSelectedCategory(null);
    setVibe('');
    setSessionLocation('');
    setSessionDate(undefined);
    setSessionTime('');
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };
  
  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setVibe('');
  };

  const handleExploreCategoryClick = (category: string) => {
    const isPersonal = personalCategories.includes(category);
    const isBusiness = businessCategories.includes(category);

    if (isPersonal) {
      setStep('personal');
    } else if (isBusiness) {
      setStep('business');
    }

    setSelectedCategory(category);
    bookingCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const renderContent = () => {
    if (step === 'instant') {
      return (
        <div className="w-full space-y-6">
            <div className="flex items-center gap-4">
                <button onClick={handleReset} className="text-muted-foreground hover:text-foreground p-2 rounded-full hover:bg-secondary -ml-2">
                    <ArrowLeft className="w-5 h-5" />
                    <span className="sr-only">Back</span>
                </button>
                <h3 className="font-headline text-xl">Set Your Location</h3>
            </div>
            
            <div className="space-y-4 pt-2">
                 <div className="relative flex items-center">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                    <Input
                        id="location"
                        placeholder="Enter your current location"
                        className="pl-12 h-12 w-full text-base bg-background/80"
                    />
                </div>
                <Button size="lg" asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg h-12">
                    <Link href="/photographers?type=instant">Confirm Location & Get Photographer</Link>
                </Button>
            </div>
        </div>
      );
    }
    
    if (selectedCategory) {
      return (
        <div className="w-full space-y-6 text-left">
            <div className='flex justify-between items-center'>
                <button onClick={handleBackToCategories} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                    <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <div className="text-right">
                    <p className="text-xs text-muted-foreground">Selected:</p>
                    <h3 className="font-bold text-primary">{selectedCategory}</h3>
                </div>
            </div>

            <div className="w-full space-y-2">
                <Label className="font-semibold">Location</Label>
                <div className="flex items-center gap-2 p-3 text-sm rounded-md border bg-muted">
                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-muted-foreground truncate">{sessionLocation || 'Not provided'}</span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="w-full space-y-2">
                    <Label className="font-semibold">Date</Label>
                    <div className="flex items-center gap-2 p-3 text-sm rounded-md border bg-muted">
                        <CalendarIcon className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-muted-foreground truncate">{sessionDate ? format(sessionDate, 'PPP') : 'Not set'}</span>
                    </div>
                </div>
                <div className="w-full space-y-2">
                    <Label className="font-semibold">Time</Label>
                    <div className="flex items-center gap-2 p-3 text-sm rounded-md border bg-muted">
                        <Clock className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-muted-foreground truncate">{sessionTime || 'Not set'}</span>
                    </div>
                </div>
            </div>
            
            <div className="w-full space-y-2">
              <Label htmlFor="vibe" className="font-semibold">Describe the vibe or style</Label>
              <Textarea
                id="vibe"
                placeholder="e.g., 'candid and natural', 'dramatic and moody', 'fun and vibrant'"
                value={vibe}
                onChange={(e) => setVibe(e.target.value)}
                className="bg-background/80"
              />
            </div>
          
            <div className="pt-4 space-y-4">
                <h4 className="text-center font-semibold text-muted-foreground">How do you want to find your photographer?</h4>
                <Button size="lg" asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="/photographers">Browse All Photographers</Link>
                </Button>

                <div className="relative flex py-2 items-center">
                    <div className="flex-grow border-t border-border"></div>
                    <span className="flex-shrink mx-4 text-xs text-muted-foreground uppercase">Or</span>
                    <div className="flex-grow border-t border-border"></div>
                </div>

                <AiRecommendation location={sessionLocation} />
            </div>
        </div>
      );
    }

    if (step === 'personal' || step === 'business') {
        const categories = step === 'personal' ? personalCategories : businessCategories;
        return (
            <div className="space-y-6 w-full">
                <div className="flex items-center gap-4">
                    <button onClick={handleReset} className="text-muted-foreground hover:text-foreground p-2 rounded-full hover:bg-secondary -ml-2">
                        <ArrowLeft className="w-5 h-5" />
                        <span className="sr-only">Back</span>
                    </button>
                    <h3 className="font-headline text-xl">
                        Book a {step === 'personal' ? 'Personal' : 'Business'} Session
                    </h3>
                </div>

                 <div className="w-full space-y-2 pt-4">
                    <Label htmlFor="session-location" className="font-semibold">Where will the shoot be?</Label>
                    <div className="relative flex items-center">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                        <Input
                            id="session-location"
                            placeholder="e.g., Central Park, NYC"
                            value={sessionLocation}
                            onChange={(e) => setSessionLocation(e.target.value)}
                            className="pl-10 h-11 text-base"
                        />
                    </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="w-full space-y-2">
                        <Label htmlFor="session-date" className="font-semibold">When do you need it?</Label>
                         <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-full justify-start text-left font-normal h-11",
                                        !sessionDate && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {sessionDate ? format(sessionDate, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={sessionDate}
                                    onSelect={setSessionDate}
                                    disabled={(date) => date < new Date(new Date().setDate(new Date().getDate() - 1))}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="w-full space-y-2">
                         <Label htmlFor="session-time" className="font-semibold">What time?</Label>
                         <div className="relative flex items-center">
                             <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                             <Input
                                 id="session-time"
                                 type="time"
                                 value={sessionTime}
                                 onChange={(e) => setSessionTime(e.target.value)}
                                 className="pl-10 h-11 text-base"
                             />
                         </div>
                    </div>
                </div>

                <div className="relative flex py-1 items-center">
                    <div className="flex-grow border-t border-border"></div>
                    <span className="flex-shrink mx-4 text-xs text-muted-foreground uppercase">Then</span>
                    <div className="flex-grow border-t border-border"></div>
                </div>
                
                <div className="space-y-2">
                    <Label className="font-semibold">Select a category</Label>
                    <div className="flex flex-wrap justify-center gap-3 pt-2">
                        {categories.map((category) => (
                            <Badge
                            key={category}
                            onClick={() => handleCategorySelect(category)}
                            className="px-5 py-2 text-base cursor-pointer transition-all hover:scale-105 hover:shadow-md hover:bg-primary/20"
                            variant="secondary"
                            >
                            {category}
                            </Badge>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full px-4 space-y-4">
            <p className="text-center text-xs text-muted-foreground uppercase tracking-widest">Plan your perfect shoot</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" className="h-28 text-lg flex-col gap-2 transition-all hover:bg-primary/5 hover:border-primary" onClick={() => setStep('personal')}>
                  <User className="w-8 h-8 text-primary" />
                  Personal
                </Button>
                <Button variant="outline" className="h-28 text-lg flex-col gap-2 transition-all hover:bg-primary/5 hover:border-primary" onClick={() => setStep('business')}>
                  <Building className="w-8 h-8 text-primary" />
                  Business
                </Button>
            </div>
            
            <div className="relative flex py-1 items-center">
                <div className="flex-grow border-t border-border"></div>
                <span className="flex-shrink mx-4 text-xs text-muted-foreground uppercase">Or</span>
                <div className="flex-grow border-t border-border"></div>
            </div>

            <Button onClick={() => setStep('instant')} size="lg" className="w-full h-auto py-4 text-lg bg-accent hover:bg-accent/90 text-accent-foreground flex-col gap-1 transition-transform hover:scale-105 shadow-lg hover:shadow-xl">
                <div className="flex items-center gap-2 font-bold">
                    <Zap className="w-6 h-6" />
                    <span>Instant Zypix</span>
                </div>
                <p className="text-sm font-normal text-accent-foreground/90">Get a photographer in 10 minutes, anywhere.</p>
            </Button>
        </div>
    );
  };

  return (
    <div className="space-y-16 py-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter mb-4">
          Zypix – Photography. <span className="text-primary">On Demand.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
          Real talent. Right at your fingertips.
        </p>
      </section>
      
      <section id="book-session" ref={bookingCardRef} className="max-w-2xl mx-auto scroll-mt-20">
        <Card className="shadow-2xl bg-gradient-to-br from-card to-card/90 border-2 border-primary/10 overflow-hidden">
          <CardHeader className="text-center bg-card/50">
            <CardTitle className="flex items-center justify-center gap-3 font-headline text-3xl">
              <MapPin className="text-primary" />
              Book Your Session
            </CardTitle>
            <CardDescription>
               Choose your path to stunning photos.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 min-h-[22rem] flex items-center justify-center">
            {renderContent()}
          </CardContent>
        </Card>
      </section>

      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold font-headline mb-6">Explore Our Services</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {exploreCategories.sort().map((category) => (
            <Badge 
              key={category} 
              variant="secondary" 
              className="px-4 py-2 text-sm font-normal cursor-pointer transition-colors hover:bg-primary/10 hover:text-primary"
              onClick={() => handleExploreCategoryClick(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold font-headline mb-4">Trusted by Event Planners and Brands Across India</h2>
          <p className="text-muted-foreground mb-8">We're proud to be the chosen photography partner for a diverse range of clients.</p>
          <div className="relative grid grid-cols-2 md:grid-cols-5 gap-8 items-center text-muted-foreground/60">
              {logos.map((logo) => (
                  <div key={logo.name} className="h-10 transition-colors hover:text-foreground" title={logo.name}>
                      {logo.svg}
                  </div>
              ))}
          </div>
        </div>
      </section>

    </div>
  );
}
