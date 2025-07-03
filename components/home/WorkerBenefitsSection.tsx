import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Heart } from "lucide-react";

interface WorkerBenefitsSectionProps {
  workerBenefits: string[];
}

export default function WorkerBenefitsSection({ workerBenefits }: WorkerBenefitsSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <Card className="p-6 bg-gradient-to-br from-secondary/5 to-primary/5">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Adunni K.</h3>
                    <p className="text-sm text-muted-foreground">Fashion Designer</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Monthly Earnings</span>
                    <span className="text-lg font-bold text-primary">₦185,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Jobs Completed</span>
                    <span className="text-sm">23 this month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "WakaFix helped me reach more customers and grow my business significantly."
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                For Workers
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold">
                Grow your business and reach more customers
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join hundreds of skilled professionals who are building successful businesses on WakaFix.
              </p>
            </div>
            <div className="space-y-4">
              {workerBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-base">{benefit}</span>
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/become-worker">
                Join as a Worker
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
