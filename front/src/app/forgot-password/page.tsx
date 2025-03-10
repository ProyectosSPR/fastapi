"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Bot } from "lucide-react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // In a real app, you would send a password reset email
      setIsSubmitted(true)
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex justify-center">
            <div className="flex items-center gap-2 font-bold text-xl">
              <Bot className="h-8 w-8 text-primary" />
              <span>AutomateAI</span>
            </div>
          </div>
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight">Reset your password</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {error && <div className="mb-4 p-3 text-sm text-white bg-destructive rounded">{error}</div>}

          {isSubmitted ? (
            <div className="text-center">
              <div className="mb-4 p-3 text-sm bg-green-100 text-green-800 rounded">
                If an account exists with the email {email}, you will receive password reset instructions.
              </div>
              <Link href="/login">
                <Button variant="link">Return to login</Button>
              </Link>
            </div>
          ) : (
            <>
              <p className="text-center text-sm text-muted-foreground mb-6">
                Enter your email address and we'll send you a link to reset your password.
              </p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <Label htmlFor="email">Email address</Label>
                  <div className="mt-2">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send reset link"}
                  </Button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm text-muted-foreground">
                Remember your password?{" "}
                <Link href="/login" className="font-medium text-primary hover:underline">
                  Sign in
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

