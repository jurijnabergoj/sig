import PageHeader from "@/components/PageHeader";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutInstitution = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <PageHeader
        title={t("institution.title")}
        subtitle={t("institution.subtitle")}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
                {t("institution.heritage.title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t("institution.heritage.content1")}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t("institution.heritage.content2")}
              </p>
            </section>

            <div className="my-12 h-px bg-border" />

            <section className="mb-12">
              <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
                {t("institution.mission.title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t("institution.mission.content")}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t("institution.mission.content2")}
              </p>
            </section>

            <div className="my-12 grid md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-soft border border-border">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {t("institution.pillars.excellence.title")}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t("institution.pillars.excellence.desc")}
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-soft border border-border">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {t("institution.pillars.innovation.title")}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t("institution.pillars.innovation.desc")}
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-soft border border-border">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {t("institution.pillars.global.title")}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t("institution.pillars.global.desc")}
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-soft border border-border">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {t("institution.pillars.community.title")}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t("institution.pillars.community.desc")}
                </p>
              </div>
            </div>

            <div className="my-12 h-px bg-border" />

            <section className="mb-12">
              <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
                {t("institution.values.title")}
              </h2>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">{t("institution.values.excellence")}:</strong>
                    <span className="text-muted-foreground"> {t("institution.values.excellence.desc")}</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">{t("institution.values.integrity")}:</strong>
                    <span className="text-muted-foreground"> {t("institution.values.integrity.desc")}</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">{t("institution.values.inclusivity")}:</strong>
                    <span className="text-muted-foreground"> {t("institution.values.inclusivity.desc")}</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">{t("institution.values.innovation")}:</strong>
                    <span className="text-muted-foreground"> {t("institution.values.innovation.desc")}</span>
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInstitution;
