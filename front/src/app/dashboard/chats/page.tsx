"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Search, Filter, Calendar } from "lucide-react"

interface ChatItem {
  id: string
  customer: string
  message: string
  timestamp: string
  source: string
  status: "active" | "resolved" | "pending"
}

const chatData: ChatItem[] = [
  {
    id: "chat-1",
    customer: "Customer #1092",
    message: "I'm interested in your AI marketing tools. Can you tell me more about pricing?",
    timestamp: "5 minutes ago",
    source: "Website",
    status: "active",
  },
  {
    id: "chat-2",
    customer: "Customer #843",
    message: "Having trouble with the Odoo integration. Can you help me troubleshoot?",
    timestamp: "1 hour ago",
    source: "Mobile App",
    status: "pending",
  },
  {
    id: "chat-3",
    customer: "Customer #567",
    message: "I'd like to upgrade my subscription plan. What are my options?",
    timestamp: "3 hours ago",
    source: "Website",
    status: "resolved",
  },
  {
    id: "chat-4",
    customer: "Customer #329",
    message: "The chatbot isn't responding to specific questions about shipping.",
    timestamp: "5 hours ago",
    source: "Facebook",
    status: "pending",
  },
  {
    id: "chat-5",
    customer: "Customer #712",
    message: "I need help setting up the AI phone system integration.",
    timestamp: "1 day ago",
    source: "Website",
    status: "resolved",
  },
]

export default function ChatsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredChats, setFilteredChats] = useState<ChatItem[]>(chatData)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase()
    setSearchQuery(query)

    if (query.trim() === "") {
      setFilteredChats(chatData)
    } else {
      const filtered = chatData.filter(
        (chat) =>
          chat.customer.toLowerCase().includes(query) ||
          chat.message.toLowerCase().includes(query) ||
          chat.source.toLowerCase().includes(query),
      )
      setFilteredChats(filtered)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500 text-white"
      case "pending":
        return "bg-yellow-500 text-white"
      case "resolved":
        return "bg-blue-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Chat Monitoring</h1>
      <p className="text-muted-foreground">Track and analyze all customer conversations across different platforms.</p>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search chats..."
            className="pl-8"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="h-9">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm" className="h-9">
            <Calendar className="mr-2 h-4 w-4" />
            Date Range
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Chats</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="resolved">Resolved</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {filteredChats.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-10">
                <MessageSquare className="h-10 w-10 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">No chats found matching your search.</p>
              </CardContent>
            </Card>
          ) : (
            filteredChats.map((chat) => (
              <Card key={chat.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    <div className="flex-1 p-4 sm:p-6">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <h3 className="text-lg font-medium">{chat.customer}</h3>
                          <Badge className={`ml-2 ${getStatusColor(chat.status)}`}>
                            {chat.status.charAt(0).toUpperCase() + chat.status.slice(1)}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">{chat.timestamp}</div>
                      </div>
                      <p className="text-muted-foreground mb-2">{chat.message}</p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <span>Source: {chat.source}</span>
                      </div>
                    </div>
                    <div className="flex border-t sm:border-t-0 sm:border-l">
                      <Button variant="ghost" className="flex-1 rounded-none h-auto py-4">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>

        <TabsContent value="active" className="space-y-4">
          {filteredChats
            .filter((chat) => chat.status === "active")
            .map((chat) => (
              <Card key={chat.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    <div className="flex-1 p-4 sm:p-6">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <h3 className="text-lg font-medium">{chat.customer}</h3>
                          <Badge className="ml-2 bg-green-500 text-white">Active</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">{chat.timestamp}</div>
                      </div>
                      <p className="text-muted-foreground mb-2">{chat.message}</p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <span>Source: {chat.source}</span>
                      </div>
                    </div>
                    <div className="flex border-t sm:border-t-0 sm:border-l">
                      <Button variant="ghost" className="flex-1 rounded-none h-auto py-4">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          {filteredChats
            .filter((chat) => chat.status === "pending")
            .map((chat) => (
              <Card key={chat.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    <div className="flex-1 p-4 sm:p-6">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <h3 className="text-lg font-medium">{chat.customer}</h3>
                          <Badge className="ml-2 bg-yellow-500 text-white">Pending</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">{chat.timestamp}</div>
                      </div>
                      <p className="text-muted-foreground mb-2">{chat.message}</p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <span>Source: {chat.source}</span>
                      </div>
                    </div>
                    <div className="flex border-t sm:border-t-0 sm:border-l">
                      <Button variant="ghost" className="flex-1 rounded-none h-auto py-4">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="resolved" className="space-y-4">
          {filteredChats
            .filter((chat) => chat.status === "resolved")
            .map((chat) => (
              <Card key={chat.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    <div className="flex-1 p-4 sm:p-6">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <h3 className="text-lg font-medium">{chat.customer}</h3>
                          <Badge className="ml-2 bg-blue-500 text-white">Resolved</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">{chat.timestamp}</div>
                      </div>
                      <p className="text-muted-foreground mb-2">{chat.message}</p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <span>Source: {chat.source}</span>
                      </div>
                    </div>
                    <div className="flex border-t sm:border-t-0 sm:border-l">
                      <Button variant="ghost" className="flex-1 rounded-none h-auto py-4">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}

