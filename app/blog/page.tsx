import { Metadata } from 'next';
import { getAllBlogPosts } from '../../Data/blog';
import { BlogFilter } from '../../components/blog/BlogFilter';

export const metadata: Metadata = {
  title: 'Blog | Votre entreprise',
  description: 'Découvrez nos derniers articles sur les technologies web, le design et les bonnes pratiques de développement.',
  openGraph: {
    title: 'Blog | Votre entreprise',
    description: 'Découvrez nos derniers articles sur les technologies web, le design et les bonnes pratiques de développement.',
    type: 'website',
    url: 'https://votresite.com/blog',
    images: [
      {
        url: 'https://votresite.com/images/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'Blog | Votre entreprise'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Votre entreprise',
    description: 'Découvrez nos derniers articles sur les technologies web, le design et les bonnes pratiques de développement.',
    images: ['https://votresite.com/images/og-blog.jpg']
  }
};

// Définir l'interface pour les props de la page
interface BlogPageProps {
  searchParams?: {
    [key: string]: string | string[] | undefined
  }
}

// Utiliser l'interface pour typer les props
export default async function BlogPage({ searchParams }: BlogPageProps) {
  // Si vous utilisez searchParams, attendez-les avant de les utiliser
  const searchParamsData = searchParams ? await searchParams : {};
  
  const posts = getAllBlogPosts();
  
  // Extraire tous les tags uniques
  const allTags = Array.from(new Set(posts.flatMap(post => post.tags)));
  
  return (
    <main className="container-centered gradient-bg py-12 md:py-16 lg:py-24">
      <div className="content-section">
        <BlogFilter posts={posts} tags={allTags} />
      </div>
      
      <div className="cyber-grid absolute inset-0 -z-10"></div>
    </main>
  );
} 