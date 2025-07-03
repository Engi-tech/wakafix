import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Star, CheckCircle } from "lucide-react";

interface WorkerCategory {
  name: string;
  icon: React.ElementType;
  count: string;
}

interface HeroSectionProps {
  workerCategories: WorkerCategory[];
}

export default function HeroSection({ workerCategories }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid  gap-12 items-center">
          <div className="space-y-8 flex flex-col items-center text-center">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Find <span className="text-primary">skilled workers</span> near you
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                WakaFix connects you with trusted professionals in Lagos. From electricians to tutors, find the right person for every job.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/search-workers">
                  <Users className="h-5 w-5 mr-2" />
                  Find Workers
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link href="/become-worker">
                  <Users className="h-5 w-5 mr-2" />
                  Become a Worker
                </Link>
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4 text-primary" />
                <span>500+ Workers</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span>4.8 Rating</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Verified Profiles</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <WorkerCategoriesGrid workerCategories={workerCategories} />
          </div>
        </div>
      </div>
    </section>
  );
}

// WorkerCategoriesGrid component
interface WorkerCategoriesGridProps {
  workerCategories: WorkerCategory[];
}

function WorkerCategoriesGrid({ workerCategories }: WorkerCategoriesGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {workerCategories.map((category, index) => (
        <Card
          key={category.name}
          className={`transition-all duration-300 hover:shadow-lg ${index % 2 === 0 ? "sm:mt-8" : ""}`}
        >
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                <category.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base">{category.name}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{category.count}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
