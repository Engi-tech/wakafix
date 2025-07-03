"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

export default function LoadingSpinner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to prevent flash on fast navigations
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-card p-8 rounded-lg shadow-lg border flex flex-col items-center space-y-4">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold">Loading Dashboard</h3>
          <p className="text-sm text-muted-foreground">Please wait while we load your content...</p>
        </div>
      </div>
    </div>
  );
}
