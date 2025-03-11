import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getRelatedPosts } from '../../../Data/blog';
import { BlogContent } from '../../../components/blog/BlogContent';
import { BlogCard } from '../../../components/blog/BlogCard';

// Définir le type des paramètres
type Params = {
  slug: string;
};

// Fonction pour générer les métadonnées
export async function generateMetadata({ 
  params 
}: { 
  params: Params 
}): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  
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
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.coverImage]
    }
  };
}

// Page principale
export default async function Page({ 
  params 
}: { 
  params: Params 
}) {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }
  
  const relatedPosts = await getRelatedPosts(post);
  
  return (
    <main className="container-centered gradient-bg py-12 md:py-16 lg:py-24">
      <article className="content-section">
        <BlogContent post={post} />
      </article>
      
      {relatedPosts.length > 0 && (
        <section className="mt-16">
          <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">Articles similaires</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map(relatedPost => (
              <BlogCard key={relatedPost.slug} post={relatedPost} />
            ))}
          </div>
        </section>
      )}
      
      <div className="cyber-grid absolute inset-0 -z-10"></div>
    </main>
  );
} 