import { Worker } from "@/types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import Image from "next/image";

// Use UI Avatars for better looking online placeholder avatars
function getAvatarUrl(name: string) {
  // Generate a more subtle, professional avatar with soft colors
  // Get consistent but varied colors based on name
  const colors = [
    "9BC4CB", "D1A39E", "A7C5EB", 
    "EAD2AC", "C9A7EB", "87CEEB"
  ];
  
  // Simple hash function to pick consistent color for each name
  const hash = Math.abs(name.split('').reduce((acc, char) => {
    return acc + char.charCodeAt(0);
  }, 0));
  
  const colorIndex = hash % colors.length;
  const selectedColor = colors[colorIndex];
  
  // Return a smaller, nicer avatar with custom colors
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${selectedColor}&color=fff&size=64&rounded=true&bold=true&length=2&format=png`;
}

interface WorkerCardProps {
  worker: Worker;
  viewMode?: "grid" | "list";
}

export default function WorkerCard({ worker, viewMode = "grid" }: WorkerCardProps) {
  if (viewMode === "list") {
    return (
      <Card className="mb-4">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0 w-16">
              <Image
                src={worker.image || getAvatarUrl(worker.name)}
                alt={worker.name}
                width={120}
                height={120}
                className="rounded-lg object-cover"
              />
            </div>
            
            <div className="flex-1 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{worker.name}</h3>
                  <Badge variant="secondary" className="w-fit">
                    {worker.category}
                  </Badge>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{worker.rating}</span>
                      <span>({worker.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{worker.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{worker.responseTime}</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-right space-y-2">
                  <div className="text-2xl font-bold text-primary">
                    {worker.hourlyRate}
                    <span className="text-sm font-normal text-muted-foreground">/hour</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {worker.completedJobs} jobs completed
                  </div>
                  <div className="flex items-center gap-1">
                    <div className={`w-2 h-2 rounded-full ${worker.isAvailable ? 'bg-green-500' : 'bg-gray-400'}`} />
                    <span className="text-sm">
                      {worker.isAvailable ? 'Available' : 'Busy'}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground">{worker.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {worker.skills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-3 pt-2">
                <Button className="flex-1 sm:flex-initial">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Message
                </Button>
                <Button variant="outline" className="flex-1 sm:flex-initial">
                  <Phone className="h-4 w-4 mr-2" />
                  Call
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <div className="relative">
            <div className="flex-shrink-0 w-16 h-16">
          <Image
            src={worker.image || getAvatarUrl(worker.name)}
            alt={worker.name}
            width={300}
            height={200}
            className="w-full  object-cover"
          />
            </div>

          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="bg-white/90 text-black">
              {worker.category}
            </Badge>
          </div>
          <div className="absolute bottom-0 left-8">
            <div className="flex items-center gap-1 bg-white/90 rounded-full px-2 py-1">
              <div className={`w-2 h-2 rounded-full ${worker.isAvailable ? 'bg-green-500' : 'bg-gray-400'}`} />
              <span className="text-xs font-medium">
                {worker.isAvailable ? 'Available' : 'Busy'}
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4 space-y-3">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">{worker.name}</h3>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span>{worker.rating}</span>
              <span>({worker.reviews})</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span>{worker.location}</span>
            </div>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2">
          {worker.description}
        </p>
        
        <div className="flex flex-wrap gap-1">
          {worker.skills.slice(0, 3).map((skill, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {skill}
            </Badge>
          ))}
          {worker.skills.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{worker.skills.length - 3}
            </Badge>
          )}
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <div className="text-lg font-bold text-primary">
            {worker.hourlyRate}
            <span className="text-xs font-normal text-muted-foreground">/hr</span>
          </div>
          <div className="text-xs text-muted-foreground">
            {worker.completedJobs} jobs
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button size="sm" className="flex-1">
            <MessageCircle className="h-3 w-3 mr-1" />
            Message
          </Button>
          <Button variant="outline" size="sm">
            <Phone className="h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
