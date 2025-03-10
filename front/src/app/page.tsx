import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, BarChart3, MessageSquare, Phone } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Bot className="h-6 w-6 text-primary" />
            <span>AutomateAI</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4">
              Testimonials
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Automate Your Business with AI
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Transform your business operations with our AI-powered automation platform. Marketing, accounting, and
                  customer service - all in one place.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register">
                  <Button size="lg" className="gap-1">
                    Start Free Trial <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#demo">
                  <Button size="lg" variant="outline">
                    See Demo
                  </Button>
                </Link>
              </div>
            </div>
            <img
              src="/placeholder.svg?height=500&width=500"
              alt="Dashboard Preview"
              width={500}
              height={500}
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">All-in-One AI Automation</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform offers comprehensive automation solutions for every aspect of your business
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
            {/* Marketing Automation */}
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Marketing Automation</h3>
              <p className="text-center text-muted-foreground">
                AI-powered chatbots and content generation for your marketing campaigns
              </p>
            </div>

            {/* Business Administration */}
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Business Administration</h3>
              <p className="text-center text-muted-foreground">
                Seamless integration with Odoo for accounting and administrative tasks
              </p>
            </div>

            {/* Customer Service */}
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Customer Service</h3>
              <p className="text-center text-muted-foreground">
                AI-powered chatbots and phone support for 24/7 customer assistance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple, Transparent Pricing</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the plan that works best for your business
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-8">
            {/* Starter Plan */}
            <div className="flex flex-col rounded-lg border bg-background p-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Starter</h3>
                <p className="text-muted-foreground">Perfect for small businesses</p>
              </div>
              <div className="mt-4 flex items-baseline text-3xl font-bold">
                $49<span className="ml-1 text-base font-medium text-muted-foreground">/month</span>
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-primary"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Basic chatbot functionality
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-primary"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  5 marketing campaigns
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-primary"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Basic Odoo integration
                </li>
              </ul>
              <div className="mt-6">
                <Button className="w-full">Get Started</Button>
              </div>
            </div>

            {/* Professional Plan */}
            <div className="flex flex-col rounded-lg border bg-background p-6 shadow-lg ring-2 ring-primary">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Professional</h3>
                <p className="text-muted-foreground">For growing businesses</p>
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Most Popular
                </span>
              </div>
              <div className="mt-4 flex items-baseline text-3xl font-bold">
                $99<span className="ml-1 text-base font-medium text-muted-foreground">/month</span>
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-primary"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Advanced chatbot with sentiment analysis
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-primary"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  20 marketing campaigns
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-primary"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Full Odoo integration
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-primary"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Phone support integration
                </li>
              </ul>
              <div className="mt-6">
                <Button className="w-full">Get Started</Button>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="flex flex-col rounded-lg border bg-background p-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Enterprise</h3>
                <p className="text-muted-foreground">For large organizations</p>
              </div>
              <div className="mt-4 flex items-baseline text-3xl font-bold">
                $249<span className="ml-1 text-base font-medium text-muted-foreground">/month</span>
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-primary"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Custom AI solutions
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-primary"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Unlimited marketing campaigns
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-primary"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Advanced Odoo integration with custom modules
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-primary"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  24/7 priority support
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-primary"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Dedicated account manager
                </li>
              </ul>
              <div className="mt-6">
                <Button className="w-full">Contact Sales</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Trusted by Businesses</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See what our customers have to say about our AI automation platform
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-8">
            <div className="flex flex-col justify-between rounded-lg border p-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  "AutomateAI has transformed our marketing efforts. The AI-powered chatbot has increased our conversion
                  rates by 35%."
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src="/placeholder.svg?height=40&width=40"
                    alt="Avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">Marketing Director, TechCorp</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-lg border p-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  "The Odoo integration has streamlined our accounting processes. We've saved countless hours on
                  administrative tasks."
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src="/placeholder.svg?height=40&width=40"
                    alt="Avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-medium">Michael Chen</p>
                    <p className="text-sm text-muted-foreground">CFO, GrowthPartners</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Business?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Join thousands of businesses already using AutomateAI to streamline their operations
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/register">
                <Button size="lg" variant="secondary" className="gap-1">
                  Start Free Trial <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="#demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Schedule Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 font-bold">
              <Bot className="h-6 w-6 text-primary" />
              <span>AutomateAI</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2025 AutomateAI. All rights reserved.</p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

