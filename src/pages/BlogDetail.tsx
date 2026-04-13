import { useParams, Link } from "react-router-dom";
import { Calendar, Tag, Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import blogData from "@/data/blogData";

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogData.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <PageHero title="Article Not Found" breadcrumb="Blog" />
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Article not found</h2>
          <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
          <Link to="/blog" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero title={post.title} breadcrumb={`Blog / ${post.title}`} />

      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          {/* Date & Category meta */}
          <div className="flex items-center gap-6 mb-8 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-primary" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Tag className="h-4 w-4 text-primary" />
              {post.category}
            </span>
          </div>

          {/* Main feature image */}
          <div className="rounded-2xl overflow-hidden mb-10">
            <img src={post.mainImage} alt={post.title} className="w-full h-[400px] object-cover" />
          </div>

          {/* Content paragraph 1 */}
          <p className="text-foreground/80 leading-relaxed text-base mb-10">
            {post.contentParagraph1}
          </p>

          {/* Blockquote */}
          <blockquote className="bg-muted rounded-2xl p-8 mb-10 relative">
            <Quote className="h-8 w-8 text-primary/30 mb-3" />
            <p className="text-lg font-semibold text-foreground leading-relaxed italic">
              "{post.quoteText}"
            </p>
          </blockquote>

          {/* Sub heading */}
          <h2 className="text-2xl font-bold text-foreground mb-6">{post.subHeading}</h2>

          {/* Bullet points */}
          <ul className="space-y-3 mb-10 pl-1">
            {post.bulletPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground/80">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                {point}
              </li>
            ))}
          </ul>

          {/* Content paragraph 2 */}
          <p className="text-foreground/80 leading-relaxed text-base">
            {post.contentParagraph2}
          </p>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogDetail;
