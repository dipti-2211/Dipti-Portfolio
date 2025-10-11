// app/layout.tsx

import React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Dipti Portfolio",
  description: "Created by Dipti Singh",
  generator: "v0.dev",
  keywords: ["portfolio", "developer", "nextjs", "tailwind", "react"],
  authors: [{ name: "Dipti Singh", url: "https://your-domain.com" }],
  openGraph: {
    title: "Portfolio Website",
    description: "Showcasing my projects, skills and experience.",
    url: "https://your-domain.com",
    siteName: "Portfolio",
    images: [
      {
        url: "https://your-domain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Website",
    description: "Showcasing my projects, skills and experience.",
    images: ["https://your-domain.com/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
