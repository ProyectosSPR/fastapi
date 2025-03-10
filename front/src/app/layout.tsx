import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ChatBot from "@/components/chat-bot"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AutomateAI - AI-Powered Business Automation",
  description:
    "Transform your business operations with our AI-powered automation platform. Marketing, accounting, and customer service - all in one place.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <ChatBot />
        </ThemeProvider>
      </body>
    </html>
  )
}

