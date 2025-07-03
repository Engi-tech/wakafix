import { LucideIcon } from "lucide-react";

export interface Worker {
  id: number;
  name: string;
  category: string;
  rating: number;
  reviews: number;
  location: string;
  image: string;
  description: string;
  skills: string[];
  hourlyRate: string;
  responseTime: string;
  isAvailable: boolean;
  completedJobs: number;
  phone?: string;
  email?: string;
  joinedDate?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  type: 'client' | 'worker';
  location?: string;
  joinedDate: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  budget: string;
  timeline: string;
  location: string;
  clientId: string;
  workerId?: string;
  status: 'open' | 'in-progress' | 'completed' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  id: string;
  projectId: string;
  reviewerId: string;
  revieweeId: string;
  rating: number;
  comment: string;
  createdAt: string;
}
