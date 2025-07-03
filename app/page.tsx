import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Star,
  MapPin,
  Shield,
  Users,
  Wrench,
  Zap,
  Heart,
  CheckCircle,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ClientBenefitsSection from "@/components/home/ClientBenefitsSection";
import WorkerBenefitsSection from "@/components/home/WorkerBenefitsSection";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  const workerCategories = [
    { name: "Electricians", icon: Zap, count: "120+" },
    { name: "Tailors", icon: Heart, count: "85+" },
    { name: "Tutors", icon: Users, count: "200+" },
    { name: "Plumbers", icon: Wrench, count: "95+" },
    { name: "Mechanics", icon: Wrench, count: "70+" },
    { name: "Cleaners", icon: Shield, count: "150+" },
  ];

  const features = [
    {
      icon: Search,
      title: "Find Skilled Workers",
      description: "Search by skill type and location to find the perfect professional for your needs.",
    },
    {
      icon: Star,
      title: "Verified Reviews",
      description: "Read real reviews from previous clients to make informed decisions.",
    },
    {
      icon: MessageCircle,
      title: "Direct Contact",
      description: "Connect instantly via WhatsApp or phone call - no middleman needed.",
    },
    {
      icon: Shield,
      title: "Trusted Professionals",
      description: "All workers are verified with portfolios showcasing their best work.",
    },
  ];

  const benefits = [
    "Find trusted professionals near you",
    "Compare prices and availability", 
    "Read verified customer reviews",
    "Contact workers directly",
    "Rate and review after service",
    "Build long-term relationships",
  ];

  const workerBenefits = [
    "Create a professional digital profile",
    "Showcase your best work with photos",
    "Set your own rates and availability",
    "Reach more customers in Lagos",
    "Build your reputation with reviews",
    "Get booked faster and more reliably",
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeroSection workerCategories={workerCategories} />
      <FeaturesSection features={features} />
      <ClientBenefitsSection benefits={benefits} />
      <WorkerBenefitsSection workerBenefits={workerBenefits} />
      <CtaSection />
    </div>
  );
}
