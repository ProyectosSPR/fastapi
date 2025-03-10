"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { BarChart3, Bot, LogOut, Menu, MessageSquare, Settings, User } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"

interface NavItem {
  title: string
  href: string
  icon: React.ReactNode
}

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <BarChart3 className="h-5 w-5" />,
  },
  {
    title: "Chats",
    href: "/dashboard/chats",
    icon: <MessageSquare className="h-5 w-5" />,
  },
  {
    title: "Sentiment Analysis",
    href: "/dashboard/sentiment",
    icon: <BarChart3 className="h-5 w-5" />,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: <Settings className="h-5 w-5" />,
  },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden" aria-label="Toggle Menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 sm:max-w-xs">
            <nav className="grid gap-2 text-lg font-medium">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-bold"
                onClick={() => setIsSidebarOpen(false)}
              >
                <Bot className="h-6 w-6 text-primary" />
                <span>AutomateAI</span>
              </Link>
              <div className="mt-8 grid gap-1">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setIsSidebarOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-accent",
                      pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground",
                    )}
                  >
                    {item.icon}
                    {item.title}
                  </Link>
                ))}
              </div>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-2 md:hidden">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Bot className="h-6 w-6 text-primary" />
            <span>AutomateAI</span>
          </Link>
        </div>
        <div className="flex-1 md:flex md:justify-center">
          <nav className="hidden md:flex md:gap-6">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <Bot className="h-6 w-6 text-primary" />
              <span>AutomateAI</span>
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full" aria-label="User menu">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/dashboard/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/login" className="flex items-center">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar (desktop) */}
        <aside className="hidden w-64 flex-col border-r md:flex">
          <nav className="grid flex-1 gap-1 p-4 text-sm font-medium">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-accent",
                  pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground",
                )}
              >
                {item.icon}
                {item.title}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}

