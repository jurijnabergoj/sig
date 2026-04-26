import PageHeader from "@/components/PageHeader";
import NewsCard from "@/components/NewsCard";
import { newsArticles } from "@/data/newsData";
import { useLanguage } from "@/contexts/LanguageContext";

const News = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <PageHeader 
        title={t("news.title")}
        subtitle={t("news.subtitle")}
      />
      
      <div className="container mx-auto px-4 py-12">
        <p className="text-muted-foreground mb-8 max-w-3xl leading-relaxed">
          {t("news.intro")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.map((article) => (
            <NewsCard
              key={article.id}
              id={article.id}
              title={article.title}
              description={article.description}
              date={article.date}
              coverImage={article.coverImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
