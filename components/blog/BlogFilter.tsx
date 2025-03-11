'use client';

import { useState } from 'react';
import { BlogHeader } from './BlogHeader';
import { BlogList } from './BlogList';
import { BlogPost } from '@/types/blog';

interface BlogFilterProps {
  posts: BlogPost[];
  tags: string[];
}

export function BlogFilter({ posts, tags }: BlogFilterProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Si ce composant reçoit des paramètres dynamiques comme searchParams,
  // vous devriez utiliser React.use() pour les déballer
  // Exemple: const searchParamsData = React.use(searchParams);

  return (
    <>
      <BlogHeader 
        tags={tags}
        initialActiveTag={activeTag}
      />
      
      <BlogList 
        initialPosts={posts}
        activeTag={activeTag}
        searchQuery={searchQuery}
      />
    </>
  );
} 