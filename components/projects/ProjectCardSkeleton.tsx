import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function ProjectCardSkeleton() {
  return (
    <Card className="h-full overflow-hidden flex flex-col">
      <div className="aspect-video overflow-hidden relative">
        <Skeleton className="h-full w-full" />
      </div>
      
      <CardHeader className="p-6 pb-2">
        <div className="flex justify-between items-start">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-5 w-16 ml-2" />
        </div>
      </CardHeader>
      
      <CardContent className="p-6 pt-2 pb-4 flex-grow">
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6 mb-2" />
        <Skeleton className="h-4 w-4/6 mb-6" />
        
        <div className="flex flex-wrap gap-2 mb-4">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-5 w-14" />
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 flex justify-between items-center">
        <Skeleton className="h-9 w-28" />
        <div className="flex space-x-2">
          <Skeleton className="h-5 w-5" />
          <Skeleton className="h-5 w-5" />
        </div>
      </CardFooter>
    </Card>
  );
} 