"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Users,
  Star,
  TrendingUp,
  Shield,
  Clock,
  Camera,
  MapPin,
  CheckCircle,
  ArrowRight,
  Plus,
  Upload,
  Phone,
  Mail
} from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    icon: TrendingUp,
    title: "Increase Your Income",
    description: "Access a larger client base and charge competitive rates for your skills.",
  },
  {
    icon: Star,
    title: "Build Your Reputation",
    description: "Showcase your work and collect reviews to establish credibility.",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Work when you want and set your own availability.",
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description: "Safe and reliable platform with verified client interactions.",
  },
];

const steps = [
  {
    number: 1,
    title: "Create Your Profile",
    description: "Fill out your professional information and showcase your skills",
  },
  {
    number: 2,
    title: "Get Verified",
    description: "Upload documents and complete identity verification",
  },
  {
    number: 3,
    title: "Start Earning",
    description: "Receive job requests and start building your reputation",
  },
];

const categories = [
  "Electrician",
  "Plumber", 
  "Tailor",
  "Tutor",
  "Cleaner",
  "Painter",
  "Mechanic",
  "Photographer",
  "Developer",
  "Designer",
  "Other"
];

export default function BecomeWorkerPage() {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    location: "",
    description: "",
    skills: "",
    hourlyRate: "",
    experience: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Worker registration:", formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-background">
      {!showRegistrationForm ? (
        // Landing page content
        <div className="container mx-auto px-4 py-12 space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Turn Your Skills Into{" "}
              <span className="text-primary">Income</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of skilled professionals earning money by providing services to clients in your area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-4"
                onClick={() => setShowRegistrationForm(true)}
              >
                Start Earning Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4" asChild>
                <Link href="/search-workers">See How It Works</Link>
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">5,000+</div>
                <div className="text-muted-foreground">Active Workers</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">₦2M+</div>
                <div className="text-muted-foreground">Total Earnings</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
                <div className="text-muted-foreground">Jobs Completed</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">4.8⭐</div>
                <div className="text-muted-foreground">Average Rating</div>
              </CardContent>
            </Card>
          </div>

          {/* Benefits Section */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Why Choose WakaFix?</h2>
              <p className="text-muted-foreground text-lg">
                Everything you need to build a successful service business
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">How It Works</h2>
              <p className="text-muted-foreground text-lg">
                Get started in just 3 simple steps
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-6 bg-primary/5 rounded-2xl p-12">
            <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
            <p className="text-muted-foreground text-lg">
              Join our community of skilled professionals today
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => setShowRegistrationForm(true)}
            >
              Create Your Profile
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      ) : (
        // Registration Form
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <div className="text-center space-y-4 mb-8">
              <h1 className="text-3xl font-bold">Create Your Worker Profile</h1>
              <p className="text-muted-foreground">
                Tell us about your skills and start earning money
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Professional Information</CardTitle>
                <CardDescription>
                  This information will be displayed to potential clients
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select onValueChange={(value) => handleInputChange("category", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your profession" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category.toLowerCase()}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your.email@example.com"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+234 XXX XXX XXXX"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                        placeholder="Lagos, Nigeria"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Professional Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      placeholder="Describe your experience, expertise, and what makes you unique..."
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="skills">Skills (comma-separated)</Label>
                    <Input
                      id="skills"
                      value={formData.skills}
                      onChange={(e) => handleInputChange("skills", e.target.value)}
                      placeholder="e.g., Electrical wiring, Installation, Repair, Emergency service"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="hourlyRate">Hourly Rate (₦)</Label>
                      <Input
                        id="hourlyRate"
                        value={formData.hourlyRate}
                        onChange={(e) => handleInputChange("hourlyRate", e.target.value)}
                        placeholder="3500"
                        type="number"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Years of Experience</Label>
                      <Input
                        id="experience"
                        value={formData.experience}
                        onChange={(e) => handleInputChange("experience", e.target.value)}
                        placeholder="5"
                        type="number"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label>Profile Photo</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-sm text-gray-600">
                        Click to upload or drag and drop your profile photo
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setShowRegistrationForm(false)}
                      className="flex-1"
                    >
                      Back
                    </Button>
                    <Button type="submit" className="flex-1">
                      Create Profile
                      <CheckCircle className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
