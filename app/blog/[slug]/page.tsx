import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getRelatedPosts } from '../../../Data/blog';
import { BlogContent } from '../../../components/blog/BlogContent';
import { BlogCard } from '../../../components/blog/BlogCard';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Article non trouvé',
      description: 'L\'article que vous recherchez n\'existe pas.'
    };
  }
  
  return {
    title: `${post.title} | Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `https://votresite.com/blog/${post.slug}`,
      images: [
        {
          url: `https://votresite.com${post.coverImage}`,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ],
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`https://votresite.com${post.coverImage}`]
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    notFound();
  }
  
  const relatedPosts = getRelatedPosts(post);
  
  return (
    <main className="container-centered gradient-bg py-12 md:py-16 lg:py-24">
      <div className="content-section">
        <BlogContent post={post} />
        
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-8 text-2xl font-bold neon-text">Articles similaires</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        )}
      </div>
      
      <div className="waveform-bg absolute inset-0 -z-10"></div>
    </main>
  );
} 