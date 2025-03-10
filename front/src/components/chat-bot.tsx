"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Bot, Send, X, Loader2, MessageSquare } from "lucide-react"
import { useChat } from "@ai-sdk/react"

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
  })

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <>
      {/* Chat button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 rounded-full h-14 w-14 shadow-lg"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </Button>

      {/* Chat window */}
      {isOpen && (
        <Card className="fixed bottom-20 right-4 w-80 sm:w-96 shadow-lg flex flex-col max-h-[500px]">
          <CardHeader className="bg-primary text-primary-foreground py-3">
            <CardTitle className="text-base flex items-center">
              <Bot className="mr-2 h-5 w-5" />
              AutomateAI Assistant
            </CardTitle>
          </CardHeader>
          <CardContent className="p-3 overflow-y-auto flex-grow max-h-[350px]">
            <div className="space-y-4">
              {messages.length === 0 ? (
                <div className="text-center text-muted-foreground py-6">
                  <Bot className="mx-auto h-12 w-12 text-muted-foreground/50 mb-2" />
                  <p>How can I help you today?</p>
                </div>
              ) : (
                messages.map((message) => (
                  <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] rounded-lg px-3 py-2 ${
                        message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))
              )}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-lg px-3 py-2 bg-muted flex items-center">
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    Typing...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          <CardFooter className="p-3 border-t">
            <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
              <Input
                id="message"
                placeholder="Type your message..."
                className="flex-1"
                value={input}
                onChange={handleInputChange}
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading}>
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </>
  )
}

