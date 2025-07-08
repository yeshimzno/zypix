"use client"

import * as React from "react"
import { Languages } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { useLocale } from "next-intl"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const languages = [
  { code: 'en', name: 'English' },
]

export function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = React.useTransition();

  const handleLanguageChange = (langCode: string) => {
    startTransition(() => {
      const pathWithoutLocale = pathname.startsWith(`/${locale}`) 
        ? pathname.substring(locale.length + 1) 
        : pathname;
      const finalPath = pathWithoutLocale || '/';
      router.replace(`/${langCode}${finalPath}`);
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" disabled={isPending}>
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
            <DropdownMenuItem
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                disabled={locale === lang.code}
            >
                {lang.name}
            </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
