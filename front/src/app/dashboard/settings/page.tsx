"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bot, MessageSquare, Phone, Bell, CreditCard } from "lucide-react"

export default function SettingsPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  const handleSave = async () => {
    setIsLoading(true)
    setSuccessMessage("")

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsLoading(false)
    setSuccessMessage("Settings saved successfully")

    // Clear success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage("")
    }, 3000)
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
      <p className="text-muted-foreground">Manage your account settings and configure your AI automation services.</p>

      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
          {successMessage}
        </div>
      )}

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="chatbot">Chatbot</TabsTrigger>
          <TabsTrigger value="odoo">Odoo Integration</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Manage your account information and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="company-name">Company Name</Label>
                <Input id="company-name" defaultValue="Acme Inc." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="admin-email">Admin Email</Label>
                <Input id="admin-email" type="email" defaultValue="admin@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Select defaultValue="utc">
                  <SelectTrigger>
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="utc">UTC (GMT+0)</SelectItem>
                    <SelectItem value="est">Eastern Time (GMT-5)</SelectItem>
                    <SelectItem value="pst">Pacific Time (GMT-8)</SelectItem>
                    <SelectItem value="cet">Central European Time (GMT+1)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="language">Default Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger>
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="dark-mode">Dark Mode</Label>
                  <p className="text-sm text-muted-foreground">Enable dark mode for the dashboard</p>
                </div>
                <Switch id="dark-mode" />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={isLoading}>
                {isLoading ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="chatbot" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Chatbot Settings</CardTitle>
              <CardDescription>Configure your AI chatbot behavior and appearance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="chatbot-name">Chatbot Name</Label>
                <Input id="chatbot-name" defaultValue="AutomateAI Assistant" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="welcome-message">Welcome Message</Label>
                <Textarea
                  id="welcome-message"
                  defaultValue="Hello! I'm your AI assistant. How can I help you today?"
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fallback-message">Fallback Message</Label>
                <Textarea
                  id="fallback-message"
                  defaultValue="I'm sorry, I couldn't understand that. Could you please rephrase your question?"
                  rows={3}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="sentiment-analysis">Sentiment Analysis</Label>
                  <p className="text-sm text-muted-foreground">Enable sentiment analysis for chat interactions</p>
                </div>
                <Switch id="sentiment-analysis" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="auto-response">Auto Response</Label>
                  <p className="text-sm text-muted-foreground">Enable automatic responses for common questions</p>
                </div>
                <Switch id="auto-response" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="chatbot-model">AI Model</Label>
                <Select defaultValue="gpt-4o">
                  <SelectTrigger>
                    <SelectValue placeholder="Select AI model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gpt-4o">GPT-4o</SelectItem>
                    <SelectItem value="claude-3">Claude 3</SelectItem>
                    <SelectItem value="llama-3">Llama 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={isLoading}>
                {isLoading ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Chat Channels</CardTitle>
              <CardDescription>Configure which channels your chatbot is available on</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <div className="space-y-0.5">
                    <Label>Website Chat</Label>
                    <p className="text-sm text-muted-foreground">Enable chatbot on your website</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <div className="space-y-0.5">
                    <Label>Phone Support</Label>
                    <p className="text-sm text-muted-foreground">Enable AI phone support</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Bot className="h-5 w-5 text-primary" />
                  <div className="space-y-0.5">
                    <Label>Facebook Messenger</Label>
                    <p className="text-sm text-muted-foreground">Enable chatbot on Facebook Messenger</p>
                  </div>
                </div>
                <Switch />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={isLoading}>
                {isLoading ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="odoo" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Odoo Integration</CardTitle>
              <CardDescription>Configure your Odoo integration for business automation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="odoo-url">Odoo URL</Label>
                <Input id="odoo-url" defaultValue="https://example.odoo.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="odoo-database">Database Name</Label>
                <Input id="odoo-database" defaultValue="example_db" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="odoo-username">Username</Label>
                <Input id="odoo-username" defaultValue="admin" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="odoo-api-key">API Key</Label>
                <Input id="odoo-api-key" type="password" defaultValue="••••••••••••••••" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="sync-contacts">Sync Contacts</Label>
                  <p className="text-sm text-muted-foreground">Automatically sync contacts with Odoo</p>
                </div>
                <Switch id="sync-contacts" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="sync-invoices">Sync Invoices</Label>
                  <p className="text-sm text-muted-foreground">Automatically sync invoices with Odoo</p>
                </div>
                <Switch id="sync-invoices" defaultChecked />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Test Connection</Button>
              <Button onClick={handleSave} disabled={isLoading}>
                {isLoading ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure how and when you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Bell className="h-5 w-5 text-primary" />
                  <div className="space-y-0.5">
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Bell className="h-5 w-5 text-primary" />
                  <div className="space-y-0.5">
                    <Label>Browser Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications in your browser</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Bell className="h-5 w-5 text-primary" />
                  <div className="space-y-0.5">
                    <Label>SMS Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications via SMS</p>
                  </div>
                </div>
                <Switch />
              </div>

              <div className="space-y-2 pt-4">
                <h3 className="font-medium">Notification Events</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="new-chat">New Chat</Label>
                    <Switch id="new-chat" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="negative-sentiment">Negative Sentiment Detected</Label>
                    <Switch id="negative-sentiment" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="billing-update">Billing Updates</Label>
                    <Switch id="billing-update" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="system-update">System Updates</Label>
                    <Switch id="system-update" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={isLoading}>
                {isLoading ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Billing Information</CardTitle>
              <CardDescription>Manage your subscription and payment methods</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-md border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Current Plan: Professional</h3>
                    <p className="text-sm text-muted-foreground">$99/month, billed monthly</p>
                  </div>
                  <Button variant="outline">Change Plan</Button>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Payment Method</h3>
                <div className="flex items-center space-x-4 rounded-md border p-4">
                  <CreditCard className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Visa ending in 4242</p>
                    <p className="text-sm text-muted-foreground">Expires 12/2025</p>
                  </div>
                  <div className="flex-1 flex justify-end">
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Billing Address</h3>
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="billing-name">Name</Label>
                      <Input id="billing-name" defaultValue="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="billing-company">Company</Label>
                      <Input id="billing-company" defaultValue="Acme Inc." />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="billing-address">Address</Label>
                    <Input id="billing-address" defaultValue="123 Main St" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="billing-city">City</Label>
                      <Input id="billing-city" defaultValue="San Francisco" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="billing-state">State</Label>
                      <Input id="billing-state" defaultValue="CA" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="billing-zip">ZIP</Label>
                      <Input id="billing-zip" defaultValue="94103" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="billing-country">Country</Label>
                    <Select defaultValue="us">
                      <SelectTrigger>
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="mx">Mexico</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Billing History</h3>
                <div className="rounded-md border">
                  <div className="flex items-center justify-between p-4 border-b">
                    <div>
                      <p className="font-medium">Invoice #12345</p>
                      <p className="text-sm text-muted-foreground">March 1, 2025</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <p className="font-medium">$99.00</p>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 border-b">
                    <div>
                      <p className="font-medium">Invoice #12344</p>
                      <p className="text-sm text-muted-foreground">February 1, 2025</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <p className="font-medium">$99.00</p>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4">
                    <div>
                      <p className="font-medium">Invoice #12343</p>
                      <p className="text-sm text-muted-foreground">January 1, 2025</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <p className="font-medium">$99.00</p>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={isLoading}>
                {isLoading ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

