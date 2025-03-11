'use client';

import { useState, useEffect } from 'react';
import { BlogCard } from './BlogCard';
import { BlogPost } from '@/types/blog';

interface BlogListProps {
  initialPosts: BlogPost[];
  activeTag: string | null;
  searchQuery: string;
}

export function BlogList({ initialPosts, activeTag, searchQuery }: BlogListProps) {
  const [filteredPosts, setFilteredPosts] = useState(initialPosts);

  useEffect(() => {
    let result = initialPosts;
    
    // Filtrer par tag si un tag est sélectionné
    if (activeTag) {
      result = result.filter(post => post.tags.includes(activeTag));
    }
    
    // Filtrer par recherche si une requête est présente
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.description.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    setFilteredPosts(result);
  }, [initialPosts, activeTag, searchQuery]);

  if (filteredPosts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium">Aucun article trouvé</h3>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Essayez de modifier vos critères de recherche ou de sélectionner un autre tag.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {filteredPosts.map(post => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
} 