"use client";

import { useState, useMemo } from "react";
import { workers } from "@/data/workers";
import WorkerCard from "@/components/WorkerCard";
import SearchFilters from "@/components/SearchFilters";

export default function SearchWorkersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredWorkers = useMemo(() => {
    return workers.filter((worker) => {
      const matchesSearch = searchQuery === "" || 
        worker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        worker.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        worker.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase())) ||
        worker.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === "all" || 
        worker.category.toLowerCase().includes(selectedCategory.toLowerCase());

      const matchesLocation = selectedLocation === "all" || 
        worker.location.toLowerCase().replace(/\s+/g, '-') === selectedLocation;

      return matchesSearch && matchesCategory && matchesLocation;
    });
  }, [searchQuery, selectedCategory, selectedLocation]);

  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Find Skilled Workers</h1>
        <p className="text-muted-foreground text-lg">
          Discover verified professionals for your projects
        </p>
      </div>

      <SearchFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        viewMode={viewMode}
        setViewMode={setViewMode}
        resultsCount={filteredWorkers.length}
      />

      {filteredWorkers.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-muted-foreground mb-2">
            No workers found
          </h3>
          <p className="text-muted-foreground">
            Try adjusting your search criteria or filters
          </p>
        </div>
      ) : (
        <div className={
          viewMode === "grid" 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            : "space-y-4"
        }>
          {filteredWorkers.map((worker) => (
            <WorkerCard
              key={worker.id}
              worker={worker}
              viewMode={viewMode}
            />
          ))}
        </div>
      )}
    </div>
  );
}
