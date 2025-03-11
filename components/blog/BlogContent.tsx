import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { BlogPost } from '@/types/blog';
import { formatDate } from '@/components/lib/utils';

interface BlogContentProps {
  post: BlogPost;
}

export function BlogContent({ post }: BlogContentProps) {
  return (
    <article className="mx-auto max-w-3xl industrial-container">
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl lg:text-5xl underground-gradient-text">
          {post.title}
        </h1>
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <div className="relative h-10 w-10 overflow-hidden rounded-full cyber-border">
              <Image
                src={post.author.image}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="font-medium terminal-text">{post.author.name}</span>
          </div>
          <span className="text-neutral-500 dark:text-neutral-400">•</span>
          <time dateTime={post.date} className="text-neutral-500 dark:text-neutral-400">
            {formatDate(post.date)}
          </time>
          <span className="text-neutral-500 dark:text-neutral-400">•</span>
          <span className="text-neutral-500 dark:text-neutral-400">{post.readingTime} min read</span>
        </div>
      </div>

      <div className="relative mb-10 aspect-video w-full overflow-hidden rounded-lg cyber-border">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority
          className="object-cover"
          sizes="(min-width: 1280px) 1024px, (min-width: 1024px) 896px, (min-width: 768px) 672px, 100vw"
        />
        <div className="absolute inset-0 scanline opacity-20"></div>
      </div>

      <div className="prose prose-lg max-w-none dark:prose-invert 
        prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-gradient 
        prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
        prose-p:my-4 prose-p:leading-relaxed prose-p:text-justify
        prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
        prose-ul:my-4 prose-ul:pl-6 prose-li:my-2
        prose-strong:text-gradient
        prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic
        prose-code:bg-neutral-100 prose-code:dark:bg-neutral-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
        prose-pre:bg-neutral-100 prose-pre:dark:bg-neutral-800 prose-pre:p-4 prose-pre:rounded-lg
      ">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
      
      <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-full cyber-border">
            <Image
              src={post.author.image}
              alt={post.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-bold terminal-text">{post.author.name}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">{post.author.bio}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-10 progress-underground"></div>
    </article>
  );
} 