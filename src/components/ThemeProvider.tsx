"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"
import dynamic from 'next/dynamic'

const ChatSupport = dynamic(() => import('@/components/ChatSupport'), { 
  ssr: false,
});

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      {children}
      <ChatSupport />
    </NextThemesProvider>
  )
}
