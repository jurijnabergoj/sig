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
                Our Heritage
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded in 1950, Ustanova Igor Grdina has been a beacon of educational excellence 
                for over seven decades. Our institution was established with a clear vision: to 
                provide quality education that empowers students to reach their full potential and 
                become leaders in their chosen fields.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Throughout our history, we have remained committed to the founding principles of 
                academic rigor, personal development, and social responsibility. Our institution 
                has evolved with the times, embracing innovation while staying true to the values 
                that have made us a respected name in education.
              </p>
            </section>

            <div className="my-12 h-px bg-border" />

            <section className="mb-12">
              <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Ustanova Igor Grdina, we are dedicated to fostering an environment where 
                intellectual curiosity thrives, critical thinking is nurtured, and students are 
                encouraged to pursue excellence in all their endeavors. Our mission extends beyond 
                traditional academics to encompass character development, leadership skills, and 
                civic responsibility.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We believe that education is not merely about acquiring knowledge but about 
                developing the wisdom to apply that knowledge for the betterment of society. 
                Our comprehensive approach prepares students not just for careers, but for lives 
                of meaning, purpose, and positive impact.
              </p>
            </section>

            <div className="my-12 grid md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-soft border border-border">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Academic Excellence
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Rigorous curriculum designed to challenge and inspire students, taught by 
                  distinguished faculty members who are leaders in their fields.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-soft border border-border">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Innovation & Research
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  State-of-the-art facilities and resources that enable cutting-edge research 
                  and creative exploration across all disciplines.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-soft border border-border">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Global Perspective
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  International partnerships and exchange programs that broaden horizons and 
                  prepare students for success in an interconnected world.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-soft border border-border">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Community Impact
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Strong commitment to service learning and community engagement, fostering 
                  social responsibility and civic leadership.
                </p>
              </div>
            </div>

            <div className="my-12 h-px bg-border" />

            <section className="mb-12">
              <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
                Our Values
              </h2>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Excellence:</strong>
                    <span className="text-muted-foreground"> We pursue the highest standards in all aspects of education and institutional operations.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Integrity:</strong>
                    <span className="text-muted-foreground"> We uphold ethical principles and foster a culture of honesty, transparency, and accountability.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Inclusivity:</strong>
                    <span className="text-muted-foreground"> We celebrate diversity and create an environment where all individuals feel valued and supported.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Innovation:</strong>
                    <span className="text-muted-foreground"> We embrace change and continuously seek new ways to enhance the educational experience.</span>
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
