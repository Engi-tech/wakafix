"use client"

import { useState } from "react"
import Link from "next/link"
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
import {
  Search,
  Star,
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  Calendar,
  Settings,
  Bell,
  Heart,
  CheckCircle,
  RotateCcw,
  Plus,
  Filter,
} from "lucide-react"

// Sample data - in a real app, this would come from your data layer
const recentBookings = [
  {
    id: 1,
    worker: "Emmanuel Okafor",
    service: "Electrical Repair",
    date: "2024-01-15",
    time: "10:00 AM",
    status: "completed",
    rating: 5,
    amount: "₦8,500",
    avatar: "/placeholder.svg",
  },
  {
    id: 2,
    worker: "Fatima Abdul",
    service: "Dress Alteration",
    date: "2024-01-12",
    time: "2:00 PM",
    status: "completed",
    rating: 4,
    amount: "₦3,200",
    avatar: "/placeholder.svg",
  },
  {
    id: 3,
    worker: "David Adebayo",
    service: "Math Tutoring",
    date: "2024-01-18",
    time: "4:00 PM",
    status: "upcoming",
    rating: null,
    amount: "₦2,500",
    avatar: "/placeholder.svg",
  },
]

const favoriteWorkers = [
  {
    id: 1,
    name: "Emmanuel Okafor",
    service: "Electrician",
    rating: 4.9,
    reviews: 127,
    location: "Lagos Island",
    availability: "Available",
    avatar: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Fatima Abdul",
    service: "Fashion Designer",
    rating: 4.8,
    reviews: 89,
    location: "Victoria Island",
    availability: "Busy",
    avatar: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Grace Okonkwo",
    service: "House Cleaner",
    rating: 4.7,
    reviews: 156,
    location: "Lekki",
    availability: "Available",
    avatar: "/placeholder.svg",
  },
]

const quickStats = [
  { label: "Total Bookings", value: "12", icon: Calendar },
  { label: "Completed Jobs", value: "8", icon: CheckCircle },
  { label: "Saved Workers", value: "5", icon: Heart },
  { label: "Average Rating Given", value: "4.6", icon: Star },
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
    case "cancelled":
      return <Badge variant="destructive">Cancelled</Badge>
    default:
      return <Badge variant="outline">{status}</Badge>
  }
}

export default function ClientDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Welcome back, John!</h1>
            <p className="text-muted-foreground">
              Manage your bookings and discover new workers
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Button asChild size="lg" className="h-16">
            <Link href="/search-workers">
              <Search className="h-5 w-5 mr-2" />
              Find New Workers
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-16">
            <Link href="/search-workers?urgent=true">
              <Clock className="h-5 w-5 mr-2" />
              Emergency Service
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="h-16">
            <RotateCcw className="h-5 w-5 mr-2" />
            Rebook Previous
          </Button>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="bookings">My Bookings</TabsTrigger>
            <TabsTrigger value="favorites">Saved Workers</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>
                    Your latest bookings and interactions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentBookings.slice(0, 3).map((booking) => (
                      <div
                        key={booking.id}
                        className="flex items-center space-x-4 p-3 bg-muted/30 rounded-lg"
                      >
                        <Avatar>
                          <AvatarImage src={booking.avatar} />
                          <AvatarFallback>
                            {booking.worker
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="font-medium">{booking.worker}</p>
                          <p className="text-sm text-muted-foreground">
                            {booking.service}
                          </p>
                        </div>
                        <div className="text-right">
                          {getStatusBadge(booking.status)}
                          <p className="text-sm text-muted-foreground mt-1">
                            {booking.amount}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recommended Workers */}
              <Card>
                <CardHeader>
                  <CardTitle>Recommended for You</CardTitle>
                  <CardDescription>
                    Based on your previous bookings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {favoriteWorkers.slice(0, 3).map((worker) => (
                      <div
                        key={worker.id}
                        className="flex items-center space-x-4 p-3 bg-muted/30 rounded-lg"
                      >
                        <Avatar>
                          <AvatarImage src={worker.avatar} />
                          <AvatarFallback>
                            {worker.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="font-medium">{worker.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {worker.service}
                          </p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Star className="h-3 w-3 text-yellow-500 fill-current" />
                            <span className="text-xs">
                              {worker.rating} ({worker.reviews})
                            </span>
                          </div>
                        </div>
                        <Button size="sm">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          Contact
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="bookings" className="mt-8">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>My Bookings</CardTitle>
                    <CardDescription>
                      Track all your service requests
                    </CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                    <Button size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      New Booking
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentBookings.map((booking) => (
                    <div key={booking.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarImage src={booking.avatar} />
                            <AvatarFallback>
                              {booking.worker
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{booking.worker}</p>
                            <p className="text-sm text-muted-foreground">
                              {booking.service}
                            </p>
                          </div>
                        </div>
                        {getStatusBadge(booking.status)}
                      </div>

                      <div className="grid md:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{booking.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{booking.time}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span className="font-medium">{booking.amount}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          {booking.rating && (
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              <span>{booking.rating}</span>
                            </div>
                          )}
                          <Button size="sm" variant="outline">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            Chat
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="favorites" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Saved Workers</CardTitle>
                <CardDescription>
                  Your favorite professionals for quick booking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {favoriteWorkers.map((worker) => (
                    <div key={worker.id} className="border rounded-lg p-4">
                      <div className="flex items-center space-x-4 mb-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={worker.avatar} />
                          <AvatarFallback>
                            {worker.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="font-medium">{worker.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {worker.service}
                          </p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="text-sm">
                              {worker.rating} ({worker.reviews})
                            </span>
                          </div>
                        </div>
                        <Badge
                          variant={
                            worker.availability === "Available"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {worker.availability}
                        </Badge>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{worker.location}</span>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Phone className="h-4 w-4" />
                          </Button>
                          <Button size="sm">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            Book Now
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
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your account details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">John Doe</h3>
                      <p className="text-sm text-muted-foreground">
                        john.doe@example.com
                      </p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Change Photo
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium">
                        Phone Number
                      </label>
                      <p className="text-sm text-muted-foreground">
                        +234 XXX XXX XXXX
                      </p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Location</label>
                      <p className="text-sm text-muted-foreground">
                        Lagos Island, Lagos
                      </p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">
                        Member Since
                      </label>
                      <p className="text-sm text-muted-foreground">
                        January 2024
                      </p>
                    </div>
                  </div>

                  <Button>Edit Profile</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Preferences</CardTitle>
                  <CardDescription>Customize your experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">
                        Email Notifications
                      </label>
                      <input type="checkbox" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">
                        SMS Notifications
                      </label>
                      <input type="checkbox" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">
                        Booking Reminders
                      </label>
                      <input type="checkbox" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">
                        Marketing Updates
                      </label>
                      <input type="checkbox" />
                    </div>
                  </div>

                  <Button>Save Preferences</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
