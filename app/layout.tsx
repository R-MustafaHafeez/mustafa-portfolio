import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700", "900"],
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  weight: ["300", "400", "600", "700"],
})

export const metadata: Metadata = {
  title: "Mustafa Hafeez - Backend/Gen AI Engineer",
  description:
    "AI Engineer & Backend Developer specializing in Agentic AI and automation. Expert in designing and deploying real-time AI agents, multi-level agent architectures, and autonomous systems.",
  generator: "v0.app",
  keywords: ["AI Engineer", "Backend Developer", "Agentic AI", "Automation", "Machine Learning", "Python", "FastAPI"],
  authors: [{ name: "Mustafa Hafeez" }],
  creator: "Mustafa Hafeez",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${sourceSans.variable} ${playfairDisplay.variable} antialiased`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}
