import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, Tag } from 'lucide-react';
import { BlogPost } from '@/types/blog';
import { formatDate } from '@/components/lib/utils';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="glass-card hover-lift group">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(min-width: 1024px) 384px, (min-width: 768px) 342px, 100vw"
          />
          <div className="absolute inset-0 vhs-effect opacity-30"></div>
        </div>
      </Link>
      <div className="p-4 md:p-6">
        <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{post.readingTime} min read</span>
          </div>
        </div>
        <Link href={`/blog/${post.slug}`}>
          <h2 className="mt-3 text-xl font-semibold tracking-tight text-gradient">
            {post.title}
          </h2>
        </Link>
        <p className="mt-2 text-neutral-700 dark:text-neutral-300">
          {post.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <span 
              key={tag} 
              className="cyber-button text-xs px-2.5 py-0.5"
            >
              <Tag className="mr-1 h-3 w-3" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
} 