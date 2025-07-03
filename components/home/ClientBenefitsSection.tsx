import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Zap, Star } from "lucide-react";

interface ClientBenefitsSectionProps {
  benefits: string[];
}

export default function ClientBenefitsSection({ benefits }: ClientBenefitsSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="default" className="w-fit">
                For Clients
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold">
                Get things done with trusted professionals
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Whether you need an emergency electrician or a regular tutor, find the right professional for any job, big or small.
              </p>
            </div>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-base">{benefit}</span>
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/search-workers">
                Start Your Search
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
          <div className="relative">
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Emmanuel O.</h3>
                    <p className="text-sm text-muted-foreground">Certified Electrician</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-muted-foreground ml-2">5.0 (47 reviews)</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Fixed my wiring issues quickly and professionally. Highly recommended!"
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
