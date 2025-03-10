import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, Users, MessageSquare, DollarSign, TrendingUp, ArrowDownRight } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      <p className="text-muted-foreground">Welcome back! Here's an overview of your automation performance.</p>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Revenue Card */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 flex items-center">
                    +20.1% <ArrowUpRight className="ml-1 h-3 w-3" />
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>

            {/* Subscriptions Card */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2,350</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 flex items-center">
                    +180.1% <ArrowUpRight className="ml-1 h-3 w-3" />
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>

            {/* Chat Interactions Card */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Chat Interactions</CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 flex items-center">
                    +19% <ArrowUpRight className="ml-1 h-3 w-3" />
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>

            {/* Conversion Rate Card */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24.5%</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-red-500 flex items-center">
                    -3% <ArrowDownRight className="ml-1 h-3 w-3" />
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            {/* Sales Chart */}
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Sales Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                  <p className="text-muted-foreground">Sales chart visualization</p>
                </div>
              </CardContent>
            </Card>

            {/* Recent Chats */}
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Chats</CardTitle>
                <CardDescription>You had 265 conversations this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Chat Item 1 */}
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <MessageSquare className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">Customer #1092</p>
                      <p className="text-sm text-muted-foreground">Product inquiry about AI marketing tools</p>
                    </div>
                    <div className="text-sm text-muted-foreground">5m ago</div>
                  </div>

                  {/* Chat Item 2 */}
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <MessageSquare className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">Customer #843</p>
                      <p className="text-sm text-muted-foreground">Support request for Odoo integration</p>
                    </div>
                    <div className="text-sm text-muted-foreground">1h ago</div>
                  </div>

                  {/* Chat Item 3 */}
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <MessageSquare className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">Customer #567</p>
                      <p className="text-sm text-muted-foreground">Billing question about subscription plan</p>
                    </div>
                    <div className="text-sm text-muted-foreground">3h ago</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>Detailed analytics for your AI automation services</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <p className="text-muted-foreground">Analytics content will be displayed here</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>Download and view reports for your business</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <p className="text-muted-foreground">Reports content will be displayed here</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

