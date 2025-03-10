"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingUp, TrendingDown, Smile, Frown, Meh, Download, Calendar } from "lucide-react"

export default function SentimentPage() {
  const [timeRange, setTimeRange] = useState("7d")

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Sentiment Analysis</h1>
      <p className="text-muted-foreground">Analyze customer sentiment across all chat interactions.</p>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">Last 24 hours</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm" className="h-9">
            <Calendar className="mr-2 h-4 w-4" />
            Custom Range
          </Button>
        </div>
        <Button variant="outline" size="sm" className="h-9">
          <Download className="mr-2 h-4 w-4" />
          Export Report
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {/* Positive Sentiment Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Positive Sentiment</CardTitle>
            <Smile className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 flex items-center">
                +5% <TrendingUp className="ml-1 h-3 w-3" />
              </span>{" "}
              from previous period
            </p>
          </CardContent>
        </Card>

        {/* Neutral Sentiment Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Neutral Sentiment</CardTitle>
            <Meh className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">22%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-500 flex items-center">
                -2% <TrendingDown className="ml-1 h-3 w-3" />
              </span>{" "}
              from previous period
            </p>
          </CardContent>
        </Card>

        {/* Negative Sentiment Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Negative Sentiment</CardTitle>
            <Frown className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-500 flex items-center">
                -3% <TrendingDown className="ml-1 h-3 w-3" />
              </span>{" "}
              from previous period
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="by-source">By Source</TabsTrigger>
          <TabsTrigger value="by-topic">By Topic</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sentiment Trend</CardTitle>
              <CardDescription>Sentiment analysis over time</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <div className="h-full w-full bg-muted/20 rounded-md flex items-center justify-center">
                <p className="text-muted-foreground">Sentiment trend chart visualization</p>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Common Positive Topics</CardTitle>
                <CardDescription>Topics that generate positive sentiment</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      <span>Customer Support</span>
                    </div>
                    <span className="text-sm font-medium">42%</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      <span>Product Features</span>
                    </div>
                    <span className="text-sm font-medium">28%</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      <span>Ease of Use</span>
                    </div>
                    <span className="text-sm font-medium">18%</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      <span>Pricing</span>
                    </div>
                    <span className="text-sm font-medium">12%</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Common Negative Topics</CardTitle>
                <CardDescription>Topics that generate negative sentiment</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                      <span>Technical Issues</span>
                    </div>
                    <span className="text-sm font-medium">45%</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                      <span>Billing Problems</span>
                    </div>
                    <span className="text-sm font-medium">30%</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                      <span>Integration Complexity</span>
                    </div>
                    <span className="text-sm font-medium">15%</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                      <span>Response Time</span>
                    </div>
                    <span className="text-sm font-medium">10%</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="by-source" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sentiment by Source</CardTitle>
              <CardDescription>Sentiment analysis across different platforms</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <div className="h-full w-full bg-muted/20 rounded-md flex items-center justify-center">
                <p className="text-muted-foreground">Sentiment by source chart visualization</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="by-topic" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sentiment by Topic</CardTitle>
              <CardDescription>Sentiment analysis across different conversation topics</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <div className="h-full w-full bg-muted/20 rounded-md flex items-center justify-center">
                <p className="text-muted-foreground">Sentiment by topic chart visualization</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sentiment Trends</CardTitle>
              <CardDescription>Long-term sentiment trends and patterns</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <div className="h-full w-full bg-muted/20 rounded-md flex items-center justify-center">
                <p className="text-muted-foreground">Sentiment trends chart visualization</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

