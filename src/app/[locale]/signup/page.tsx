// File: src/app/[locale]/signup/page.tsx

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function SignupPage() {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [mobile, setMobile] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage('Connecting to server...');

    const userData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      mobile: mobile,
      password: password,
    };

    // === YAHAN PAR HAI ASLI FIX ===
    // Humne woh URL daala hai jo humne test kiya tha aur jo 100% kaam kar raha hai.
    const apiUrl = 'https://friendly-space-fiesta-97prp7q99pq2x96j-8000.app.github.dev/api/register/';
    // =============================

    console.log("Requesting URL:", apiUrl);

    try {
      // Is line mein ab koi galti nahi hai kyunki iska `apiUrl` ab sahi hai.
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || 'Server returned an error.');
      }

      setMessage(responseData.message);
      
    } catch (error) {
      console.error('FETCH ERROR:', error);
      // Agar 'Failed to fetch' ab bhi aata hai, to iska matlab backend server band hai.
      if (error instanceof Error) {
        setMessage(error.message); 
      } else {
        setMessage('An unknown error occurred.');
      }
    }
  };

  return (
    <div className="flex items-center justify-center py-12">
      <Card className="mx-auto max-w-sm w-full">
        <CardHeader>
          <CardTitle className="text-xl font-headline">Sign Up</CardTitle>
          <CardDescription>Enter your information to create an account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4">
            {/* Form fields... */}
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2"><Label htmlFor="first-name">First name</Label><Input id="first-name" placeholder="Rohan" required value={firstName} onChange={(e) => setFirstName(e.target.value)} /></div>
              <div className="grid gap-2"><Label htmlFor="last-name">Last name</Label><Input id="last-name" placeholder="Kumar" required value={lastName} onChange={(e) => setLastName(e.target.value)} /></div>
            </div>
            <div className="grid gap-2"><Label htmlFor="email">Email</Label><Input id="email" type="email" placeholder="m@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} /></div>
            <div className="grid gap-2"><Label htmlFor="mobile">Mobile number</Label><div className="flex items-center gap-2"><span className="flex h-10 items-center rounded-md border border-input bg-background px-3 py-2 text-base text-muted-foreground md:text-sm">+91</span><Input id="mobile" type="tel" placeholder="9876543210" required value={mobile} onChange={(e) => setMobile(e.target.value)} /></div></div>
            <div className="grid gap-2"><Label htmlFor="password">Password</Label><Input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} /></div>
            <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Create an account</Button>
          </form>
          {message && <p className="mt-4 text-center text-sm font-bold">{message}</p>}
          <div className="mt-4 text-center text-sm">Already have an account?{' '}<Link href="/login" className="underline text-primary">Login</Link></div>
        </CardContent>
      </Card>
    </div>
  );
}