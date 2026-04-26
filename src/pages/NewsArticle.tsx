import { useParams, Link } from "react-router-dom";
import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { newsArticles } from "@/data/newsData";

const NewsArticle = () => {
  const { id } = useParams();
  const article = newsArticles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">
            Article Not Found
          </h1>
          <Link to="/">
            <Button>Return to News</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[400px] overflow-hidden">
        <img
          src={article.coverImage}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <Link to="/">
              <Button variant="ghost" className="mb-4 text-primary-foreground hover:text-secondary">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to News
              </Button>
            </Link>
            <div className="flex items-center gap-2 text-primary-foreground/90 mb-4">
              <Calendar className="w-4 h-4" />
              <time>{article.date}</time>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground max-w-4xl">
              {article.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="h-1 w-24 bg-secondary mb-8" />
          
          <div 
            className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-secondary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-border flex justify-between items-center">
            {article.id !== "1" && (
              <Link to={`/news/${parseInt(article.id) - 1}`}>
                <Button variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous Article
                </Button>
              </Link>
            )}
            {article.id !== newsArticles.length.toString() && (
              <Link to={`/news/${parseInt(article.id) + 1}`} className="ml-auto">
                <Button variant="outline">
                  Next Article
                  <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;
