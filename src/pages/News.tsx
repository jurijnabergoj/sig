import { useQuery } from "@tanstack/react-query";
import PageHeader from "@/components/PageHeader";
import NewsCard from "@/components/NewsCard";
import { fetchArticles, getCoverUrl, formatDate } from "@/lib/strapi";
import { newsArticles as staticArticles } from "@/data/newsData";
import { useLanguage } from "@/contexts/LanguageContext";

const News = () => {
  const { t, language } = useLanguage();

  const { data: strapiArticles } = useQuery({
    queryKey: ["articles"],
    queryFn: fetchArticles,
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });

  const articles = strapiArticles && strapiArticles.length > 0
    ? strapiArticles.map((a) => ({
        id: a.documentId,
        title: a.title,
        description: a.description ?? "",
        date: formatDate(a.publishedAt ?? a.updatedAt),
        coverImage: getCoverUrl(a.cover),
      }))
    : staticArticles.map((a) => ({
        id: a.id,
        title: a[language].title,
        description: a[language].description,
        date: a[language].date,
        coverImage: a.coverImage,
      }));

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
          {articles.map((article) => (
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
