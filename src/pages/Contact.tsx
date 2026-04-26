import PageHeader from "@/components/PageHeader";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";

const Contact = () => {
  const { t } = useLanguage();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t("contact.form.success"));
  };

  return (
    <div className="min-h-screen">
      <PageHeader 
        title={t("contact.title")}
        subtitle={t("contact.subtitle")}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                {t("contact.info.title")}
              </h2>

              <div className="space-y-6 mb-8">
                <Card className="shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-foreground mb-1">{t("contact.info.email")}</h3>
                        <p className="text-muted-foreground text-sm">info@ustanovaigorgrdina.edu</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-foreground mb-1">{t("contact.info.phone")}</h3>
                        <p className="text-muted-foreground text-sm">+123 456 7890</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-foreground mb-1">{t("contact.info.address")}</h3>
                        <p className="text-muted-foreground text-sm">
                          Čopova ulica 123<br />
                          Ljubljana, Slovenija
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-foreground mb-1">{t("contact.info.hours")}</h3>
                        <p className="text-muted-foreground text-sm">
                          {t("contact.info.hours.value")}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                {t("contact.form.title")}
              </h2>
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-foreground">{t("contact.form.name")}</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder={t("contact.form.name.placeholder")}
                        className="mt-2"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-foreground">{t("contact.form.email")}</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={t("contact.form.email.placeholder")}
                        className="mt-2"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-foreground">{t("contact.form.message")}</Label>
                      <Textarea
                        id="message"
                        placeholder={t("contact.form.message.placeholder")}
                        className="mt-2 min-h-[150px]"
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      {t("contact.form.submit")}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-12">
            <Card className="shadow-soft overflow-hidden">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Map Placeholder</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
