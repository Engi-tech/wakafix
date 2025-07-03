"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { User, Briefcase } from "lucide-react"

// In a real app, this would come from your authentication system
const getUserRole = () => {
  // For demo purposes, return null to show role selection
  return null // or 'client' or 'worker'
}

export default function Dashboard() {
  const router = useRouter()
  const [userRole, setUserRole] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate checking user authentication and role
    const role = getUserRole()
    setUserRole(role)
    setIsLoading(false)

    // If user has a role, redirect to appropriate dashboard
    if (role === 'client') {
      router.push('/dashboard/client')
    } else if (role === 'worker') {
      router.push('/dashboard/worker')
    }
  }, [router])

  const handleRoleSelection = (role: string) => {
    // In a real app, you would set this in your auth system
    setUserRole(role)
    router.push(`/dashboard/${role}`)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="text-muted-foreground mt-2">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  // Show role selection if user doesn't have a role set
  if (!userRole) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Welcome to WakaFix</h1>
            <p className="text-muted-foreground mb-8">
              Choose your account type to access your dashboard
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handleRoleSelection('client')}>
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>I'm a Client</CardTitle>
                  <CardDescription>
                    I need services and want to hire skilled workers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Find and hire skilled workers</li>
                    <li>• Track your bookings</li>
                    <li>• Rate and review services</li>
                    <li>• Manage your profile</li>
                  </ul>
                  <Button className="w-full mt-4" onClick={() => handleRoleSelection('client')}>
                    Continue as Client
                  </Button>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handleRoleSelection('worker')}>
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Briefcase className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>I'm a Worker</CardTitle>
                  <CardDescription>
                    I provide services and want to grow my business
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Receive job requests</li>
                    <li>• Manage your services</li>
                    <li>• Track your earnings</li>
                    <li>• Build your reputation</li>
                  </ul>
                  <Button className="w-full mt-4" onClick={() => handleRoleSelection('worker')}>
                    Continue as Worker
                  </Button>
                </CardContent>
              </Card>
            </div>

            <p className="text-xs text-muted-foreground mt-8">
              You can always switch between roles later in your account settings
            </p>
          </div>
        </div>
      </div>
    )
  }

  return null
}
