"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"
import {
  DollarSign,
  Star,
  Calendar,
  TrendingUp,
  MessageCircle,
  Phone,
  Clock,
  MapPin,
  Settings,
  Bell,
  Camera,
  CheckCircle,
  XCircle,
  Plus,
  Edit,
  BarChart3,
  Eye,
} from "lucide-react"

// Sample data - in a real app, this would come from your data layer
const stats = [
  {
    label: "Total Earnings",
    value: "₦247,500",
    icon: DollarSign,
    change: "+12%",
  },
  { label: "Jobs Completed", value: "89", icon: CheckCircle, change: "+8%" },
  { label: "Rating", value: "4.9", icon: Star, change: "+0.1" },
  { label: "Response Rate", value: "95%", icon: Clock, change: "+3%" },
]

const recentJobs = [
  {
    id: 1,
    client: "John Doe",
    service: "Electrical Installation",
    date: "2024-01-15",
    amount: "₦8,500",
    status: "completed",
    rating: 5,
    avatar: "/placeholder.svg",
  },
  {
    id: 2,
    client: "Sarah Johnson",
    service: "Circuit Repair",
    date: "2024-01-12",
    amount: "₦6,200",
    status: "completed",
    rating: 4,
    avatar: "/placeholder.svg",
  },
  {
    id: 3,
    client: "Mike Smith",
    service: "Emergency Fix",
    date: "2024-01-18",
    amount: "₦12,000",
    status: "upcoming",
    rating: null,
    avatar: "/placeholder.svg",
  },
]

const pendingRequests = [
  {
    id: 1,
    client: "Alice Brown",
    service: "Home Wiring",
    location: "Lekki Phase 1",
    budget: "₦15,000",
    urgency: "Normal",
    description: "Need rewiring for 3-bedroom apartment",
    timeAgo: "2 hours ago",
  },
  {
    id: 2,
    client: "David Wilson",
    service: "Socket Installation",
    location: "Victoria Island",
    budget: "₦5,000",
    urgency: "Urgent",
    description: "Install 4 power sockets in office",
    timeAgo: "1 hour ago",
  },
]

const monthlyEarnings = [
  { month: "Jan", amount: 45000 },
  { month: "Feb", amount: 52000 },
  { month: "Mar", amount: 48000 },
  { month: "Apr", amount: 61000 },
  { month: "May", amount: 55000 },
  { month: "Jun", amount: 67000 },
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case "completed":
      return (
        <Badge variant="default" className="bg-green-500">
          Completed
        </Badge>
      )
    case "upcoming":
      return <Badge variant="secondary">Upcoming</Badge>
    case "pending":
      return <Badge variant="outline">Pending</Badge>
    default:
      return <Badge variant="outline">{status}</Badge>
  }
}

const getUrgencyBadge = (urgency: string) => {
  switch (urgency) {
    case "Urgent":
      return <Badge variant="destructive">Urgent</Badge>
    case "Normal":
      return <Badge variant="secondary">Normal</Badge>
    default:
      return <Badge variant="outline">{urgency}</Badge>
  }
}

export default function WorkerDashboard() {
  const [isAvailable, setIsAvailable] = useState(true)
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Worker Dashboard</h1>
            <p className="text-muted-foreground">
              Manage your services and grow your business
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Available</span>
              <Switch checked={isAvailable} onCheckedChange={setIsAvailable} />
            </div>
            <Button variant="outline" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>EO</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                      <stat.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-xs text-green-600 mt-2">
                      {stat.change}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Button size="lg" className="h-16">
            <Plus className="h-5 w-5 mr-2" />
            Add Service
          </Button>
          <Button variant="outline" size="lg" className="h-16">
            <Edit className="h-5 w-5 mr-2" />
            Update Profile
          </Button>
          <Button variant="outline" size="lg" className="h-16">
            <Camera className="h-5 w-5 mr-2" />
            Add Photos
          </Button>
          <Button variant="outline" size="lg" className="h-16">
            <BarChart3 className="h-5 w-5 mr-2" />
            View Analytics
          </Button>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="requests">Job Requests</TabsTrigger>
            <TabsTrigger value="jobs">My Jobs</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Profile Completion */}
              <Card>
                <CardHeader>
                  <CardTitle>Profile Completion</CardTitle>
                  <CardDescription>
                    Complete your profile to get more bookings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Profile completeness</span>
                      <span>85%</span>
                    </div>
                    <Progress value={85} />
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Basic information</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Service description</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Portfolio photos</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <XCircle className="h-4 w-4 text-muted-foreground" />
                      <span>Verification documents</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <XCircle className="h-4 w-4 text-muted-foreground" />
                      <span>Professional certifications</span>
                    </div>
                  </div>

                  <Button className="w-full">Complete Profile</Button>
                </CardContent>
              </Card>

              {/* Recent Jobs */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Jobs</CardTitle>
                  <CardDescription>Your latest completed work</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentJobs.slice(0, 3).map((job) => (
                      <div
                        key={job.id}
                        className="flex items-center space-x-4 p-3 bg-muted/30 rounded-lg"
                      >
                        <Avatar>
                          <AvatarImage src={job.avatar} />
                          <AvatarFallback>
                            {job.client
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="font-medium">{job.client}</p>
                          <p className="text-sm text-muted-foreground">
                            {job.service}
                          </p>
                        </div>
                        <div className="text-right">
                          {getStatusBadge(job.status)}
                          <p className="text-sm text-muted-foreground mt-1">
                            {job.amount}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Performance Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Performance</CardTitle>
                  <CardDescription>Your earnings trend</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {monthlyEarnings.map((earning) => (
                      <div key={earning.month} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{earning.month}</span>
                        <span className="text-sm">₦{earning.amount.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="requests" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Pending Job Requests</CardTitle>
                <CardDescription>
                  Review and respond to client requests
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingRequests.map((request) => (
                    <div key={request.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-medium">{request.service}</h3>
                          <p className="text-sm text-muted-foreground">
                            Client: {request.client}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          {getUrgencyBadge(request.urgency)}
                          <span className="text-sm text-muted-foreground">
                            {request.timeAgo}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm mb-3">{request.description}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm">
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span>{request.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">{request.budget}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View Details
                          </Button>
                          <Button size="sm" variant="outline">
                            Decline
                          </Button>
                          <Button size="sm">
                            Accept
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="jobs" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>My Jobs</CardTitle>
                <CardDescription>
                  Track all your accepted and completed jobs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentJobs.map((job) => (
                    <div key={job.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarImage src={job.avatar} />
                            <AvatarFallback>
                              {job.client
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{job.client}</p>
                            <p className="text-sm text-muted-foreground">
                              {job.service}
                            </p>
                          </div>
                        </div>
                        {getStatusBadge(job.status)}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>{job.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <span className="font-medium">{job.amount}</span>
                          </div>
                          {job.rating && (
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              <span>{job.rating}</span>
                            </div>
                          )}
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            Chat
                          </Button>
                          <Button size="sm" variant="outline">
                            <Phone className="h-4 w-4 mr-1" />
                            Call
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="mt-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Professional Profile</CardTitle>
                  <CardDescription>Manage your service information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>EO</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">Emmanuel Okafor</h3>
                      <p className="text-sm text-muted-foreground">
                        Professional Electrician
                      </p>
                      <Button variant="outline" size="sm" className="mt-2">
                        <Camera className="h-4 w-4 mr-1" />
                        Update Photo
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium">Experience</label>
                      <p className="text-sm text-muted-foreground">
                        8+ years in electrical services
                      </p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Service Area</label>
                      <p className="text-sm text-muted-foreground">
                        Lagos Island, Victoria Island, Lekki
                      </p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Rating</label>
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm">4.9 (127 reviews)</span>
                      </div>
                    </div>
                  </div>

                  <Button>Edit Profile</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Services & Rates</CardTitle>
                  <CardDescription>Manage your service offerings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Electrical Installation</span>
                      <span className="text-sm font-medium">₦5,000 - ₦15,000</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Circuit Repair</span>
                      <span className="text-sm font-medium">₦3,000 - ₦8,000</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Emergency Services</span>
                      <span className="text-sm font-medium">₦10,000+</span>
                    </div>
                  </div>

                  <Button className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Service
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="earnings" className="mt-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Earnings Overview</CardTitle>
                  <CardDescription>Your financial performance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">This Month</p>
                      <p className="text-2xl font-bold">₦67,000</p>
                      <p className="text-xs text-green-600">+22% from last month</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">This Year</p>
                      <p className="text-2xl font-bold">₦247,500</p>
                      <p className="text-xs text-green-600">+15% from last year</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Monthly Breakdown</h4>
                    {monthlyEarnings.map((earning) => (
                      <div key={earning.month} className="flex items-center justify-between text-sm">
                        <span>{earning.month} 2024</span>
                        <span className="font-medium">₦{earning.amount.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment History</CardTitle>
                  <CardDescription>Recent transactions and payouts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentJobs.filter(job => job.status === 'completed').map((job) => (
                      <div key={job.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                        <div>
                          <p className="font-medium">{job.service}</p>
                          <p className="text-sm text-muted-foreground">{job.client}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-green-600">{job.amount}</p>
                          <p className="text-xs text-muted-foreground">{job.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
