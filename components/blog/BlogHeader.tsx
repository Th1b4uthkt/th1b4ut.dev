'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

interface BlogHeaderProps {
  tags: string[];
  initialActiveTag: string | null;
}

export function BlogHeader({ tags, initialActiveTag }: BlogHeaderProps) {
  const [searchValue, setSearchValue] = useState('');
  const [activeTag, setActiveTag] = useState(initialActiveTag);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    // Logique de filtrage ici
  };

  const handleTagFilter = (tag: string | null) => {
    setActiveTag(tag);
    // Logique de filtrage ici
  };

  return (
    <div className="mb-12 space-y-6">
      <h1 className="text-center text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl neon-text-strong">
        Notre Blog
      </h1>
      <p className="mx-auto max-w-2xl text-center text-lg shadow-text">
        Découvrez nos derniers articles sur les technologies web, le design et les bonnes pratiques de développement.
      </p>
      
      <div className="mx-auto max-w-xl cyber-box">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500" />
          <input
            type="text"
            placeholder="Rechercher des articles..."
            value={searchValue}
            onChange={handleSearchChange}
            className="w-full bg-transparent py-2 pl-10 pr-4 text-neutral-900 placeholder-neutral-500 focus:outline-none dark:text-white dark:placeholder-neutral-400 terminal-text"
          />
        </div>
      </div>
      
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          onClick={() => handleTagFilter(null)}
          className={`underground-button text-sm font-medium transition-colors ${
            activeTag === null
              ? 'industrial-glitch'
              : ''
          }`}
        >
          Tous
        </button>
        {tags.map(tag => (
          <button
            key={tag}
            onClick={() => handleTagFilter(tag)}
            className={`underground-button text-sm font-medium transition-colors ${
              activeTag === tag
                ? 'industrial-glitch'
                : ''
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
} 