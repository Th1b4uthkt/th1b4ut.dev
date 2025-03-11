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

  // Filtrer les posts en fonction du tag actif et de la recherche
  const filteredPosts = posts.filter(post => {
    const matchesTag = !activeTag || post.tags.includes(activeTag);
    const matchesSearch = !searchQuery || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <>
      <BlogHeader 
        tags={tags}
        initialActiveTag={activeTag}
        onTagChange={setActiveTag}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      
      <BlogList 
        initialPosts={filteredPosts}
        activeTag={activeTag}
        searchQuery={searchQuery}
      />
    </>
  );
} 