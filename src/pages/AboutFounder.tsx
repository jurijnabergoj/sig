import PageHeader from "@/components/PageHeader";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutFounder = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <PageHeader 
        title={t("founder.title")}
        subtitle={t("founder.subtitle")}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <img
                src="images/IG3.jpg"
                alt="Igor Grdina"
                className="w-full rounded-lg shadow-large"
              />
            </div>
            <div>
              <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
                {t("founder.name")}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t("founder.intro1")}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t("founder.intro2")}
              </p>
            </div>
          </div>

          <div className="my-12 h-px bg-border" />

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
                {t("founder.philosophy.title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t("founder.philosophy.content")}
              </p>
              <div className="bg-secondary/10 border-l-4 border-secondary p-6 my-6 rounded-r-lg">
                <blockquote className="text-lg italic text-foreground">
                  {t("founder.quote")}
                </blockquote>
                <p className="text-sm text-muted-foreground mt-4">{t("founder.quote.year")}</p>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t("founder.philosophy.access")}
              </p>
            </section>

            <div className="my-12 h-px bg-border" />

            <section className="mb-12">
              <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
                {t("founder.legacy.title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t("founder.legacy.content1")}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t("founder.legacy.content2")}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t("founder.legacy.content3")}
              </p>
            </section>

            <div className="my-12 grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-card rounded-lg shadow-soft border border-border">
                <div className="text-4xl font-display font-bold text-secondary mb-2">30+</div>
                <div className="text-sm text-muted-foreground">{t("founder.stats.years")}</div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg shadow-soft border border-border">
                <div className="text-4xl font-display font-bold text-secondary mb-2">20+</div>
                <div className="text-sm text-muted-foreground">{t("founder.stats.works")}</div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg shadow-soft border border-border">
                <div className="text-4xl font-display font-bold text-secondary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">{t("founder.stats.mentored")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFounder;
