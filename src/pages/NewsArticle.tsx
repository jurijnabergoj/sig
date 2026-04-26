import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchArticle, getCoverUrl, formatDate, renderBlocksToHtml } from "@/lib/strapi";
import { newsArticles as staticArticles } from "@/data/newsData";
import { useLanguage } from "@/contexts/LanguageContext";

const ArticleSkeleton = () => (
  <div className="min-h-screen">
    <Skeleton className="h-[280px] sm:h-[400px] w-full" />
    <div className="container mx-auto px-4 py-12 max-w-3xl space-y-4">
      <Skeleton className="h-1 w-24" />
      <Skeleton className="h-5 w-full" />
      <Skeleton className="h-5 w-full" />
      <Skeleton className="h-5 w-4/5" />
      <Skeleton className="h-5 w-full" />
      <Skeleton className="h-5 w-3/4" />
    </div>
  </div>
);

const BackLink = ({ label }: { label: string }) => (
  <Link
    to="/"
    className="inline-flex items-center gap-2 mb-4 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
  >
    <ArrowLeft className="w-4 h-4" />
    {label}
  </Link>
);

const NewsArticle = () => {
  const { id } = useParams<{ id: string }>();
  const { t, language } = useLanguage();

  const isDocumentId = id && !/^\d+$/.test(id);

  const { data: strapiArticle, isLoading, isError } = useQuery({
    queryKey: ["article", id],
    queryFn: () => fetchArticle(id!),
    enabled: !!id && !!isDocumentId,
    retry: 1,
  });

  const staticArticle = !isDocumentId
    ? staticArticles.find((a) => a.id === id)
    : undefined;

  if (isLoading) return <ArticleSkeleton />;

  // ── Static fallback path (numeric ID) ─────────────────────────────────────
  if (!isDocumentId) {
    if (!staticArticle) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-display font-bold text-foreground mb-4">
              {t("article.notFound.title")}
            </h1>
            <Link to="/"><Button>{t("article.notFound.back")}</Button></Link>
          </div>
        </div>
      );
    }

    const localised = staticArticle[language];
    const currentIndex = staticArticles.findIndex((a) => a.id === id);
    const prevArticle = currentIndex > 0 ? staticArticles[currentIndex - 1] : null;
    const nextArticle = currentIndex < staticArticles.length - 1 ? staticArticles[currentIndex + 1] : null;

    return (
      <div className="min-h-screen">
        <div className="relative h-[280px] sm:h-[400px] overflow-hidden">
          <img
            src={staticArticle.coverImage}
            alt={localised.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
            <div className="container mx-auto">
              <BackLink label={t("article.backToNews")} />
              <div className="flex items-center gap-2 text-primary-foreground/90 mb-3">
                <Calendar className="w-4 h-4" />
                <time>{localised.date}</time>
              </div>
              <h1 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-primary-foreground max-w-4xl">
                {localised.title}
              </h1>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="h-1 w-24 bg-secondary mb-8" />
            <div
              className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-secondary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground"
              dangerouslySetInnerHTML={{ __html: localised.content }}
            />

            <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <Link to="/"><Button variant="outline"><ArrowLeft className="w-4 h-4 mr-2" />{t("article.backToNews")}</Button></Link>

              <div className="flex flex-col sm:flex-row gap-3">
                {prevArticle && (
                  <Link to={`/news/${prevArticle.id}`}>
                    <Button variant="ghost" className="w-full sm:w-auto gap-2 text-muted-foreground">
                      <ArrowLeft className="w-4 h-4" />
                      <span className="truncate max-w-[160px]">{prevArticle[language].title}</span>
                    </Button>
                  </Link>
                )}
                {nextArticle && (
                  <Link to={`/news/${nextArticle.id}`}>
                    <Button variant="ghost" className="w-full sm:w-auto gap-2 text-muted-foreground">
                      <span className="truncate max-w-[160px]">{nextArticle[language].title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Strapi path (documentId) ───────────────────────────────────────────────
  if (isError || !strapiArticle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">
            {t("article.notFound.title")}
          </h1>
          <Link to="/"><Button>{t("article.notFound.back")}</Button></Link>
        </div>
      </div>
    );
  }

  const coverUrl = getCoverUrl(strapiArticle.cover);
  const dateStr = formatDate(strapiArticle.publishedAt ?? strapiArticle.updatedAt);
  const htmlContent = renderBlocksToHtml(strapiArticle.blocks);

  return (
    <div className="min-h-screen">
      <div className="relative h-[280px] sm:h-[400px] overflow-hidden">
        {coverUrl ? (
          <img
            src={coverUrl}
            alt={strapiArticle.cover?.alternativeText ?? strapiArticle.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-primary" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
          <div className="container mx-auto">
            <BackLink label={t("article.backToNews")} />
            <div className="flex items-center gap-2 text-primary-foreground/90 mb-3">
              <Calendar className="w-4 h-4" />
              <time>{dateStr}</time>
            </div>
            <h1 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-primary-foreground max-w-4xl">
              {strapiArticle.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="h-1 w-24 bg-secondary mb-8" />

          {strapiArticle.description && (
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-medium">
              {strapiArticle.description}
            </p>
          )}

          <div
            className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-secondary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          <div className="mt-12 pt-8 border-t border-border">
            <Link to="/"><Button variant="outline"><ArrowLeft className="w-4 h-4 mr-2" />{t("article.backToNews")}</Button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;
