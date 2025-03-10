import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function ProjectCardSkeleton() {
  return (
    <div className="underground-card h-full overflow-hidden flex flex-col rounded-sm vhs-effect">
      <div className="aspect-video overflow-hidden relative">
        <Skeleton className="h-full w-full bg-black/40" />
      </div>
      
      <div className="p-6 pb-2">
        <div className="flex justify-between items-start">
          <Skeleton className="h-6 w-3/4 bg-primary/10" />
          <Skeleton className="h-5 w-16 ml-2 bg-primary/10" />
        </div>
      </div>
      
      <div className="p-6 pt-2 pb-4 flex-grow">
        <Skeleton className="h-4 w-full mb-2 bg-primary/10" />
        <Skeleton className="h-4 w-5/6 mb-2 bg-primary/10" />
        <Skeleton className="h-4 w-4/6 mb-6 bg-primary/10" />
        
        <div className="flex flex-wrap gap-2 mb-4">
          <Skeleton className="h-5 w-16 bg-primary/10" />
          <Skeleton className="h-5 w-20 bg-primary/10" />
          <Skeleton className="h-5 w-14 bg-primary/10" />
        </div>
      </div>
      
      <div className="p-6 pt-0 flex justify-between items-center border-t border-primary/10">
        <Skeleton className="h-9 w-28 bg-primary/10" />
        <div className="flex space-x-2">
          <Skeleton className="h-5 w-5 bg-primary/10" />
          <Skeleton className="h-5 w-5 bg-primary/10" />
        </div>
      </div>
    </div>
  );
} 