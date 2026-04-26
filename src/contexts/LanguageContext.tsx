import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "si";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.news": "News",
    "nav.aboutInstitution": "About Institution",
    "nav.aboutFounder": "About Founder",
    "nav.contact": "Contact",
    
    // News Page
    "news.title": "Latest News",
    "news.subtitle": "Stay updated with our latest announcements and events",
    "news.intro": "Welcome to our institution's news portal. Here you'll find the latest updates, announcements, and insights from our community.",
    "news.readMore": "Read more",
    
    // About Institution
    "institution.title": "About Our Institution",
    "institution.subtitle": "Excellence in education since 1950",
    "institution.intro": "Our institution stands as a beacon of educational excellence, committed to nurturing minds and shaping futures. Founded on the principles of academic rigor, innovation, and social responsibility, we have been serving our community for over seven decades.",
    "institution.history.title": "Our History",
    "institution.history.content": "Established in 1950, our institution emerged from a vision to create an educational environment that would challenge, inspire, and empower students from all backgrounds. Through the decades, we have evolved while staying true to our founding principles of excellence, integrity, and service.",
    "institution.mission.title": "Our Mission",
    "institution.mission.content": "We are dedicated to providing a transformative educational experience that prepares students not just for careers, but for meaningful lives. Our mission is to cultivate critical thinking, foster creativity, and instill a sense of social responsibility in every student who walks through our doors.",
    "institution.values.title": "Our Values",
    "institution.values.excellence": "Excellence",
    "institution.values.excellence.desc": "Pursuing the highest standards in all endeavors",
    "institution.values.integrity": "Integrity",
    "institution.values.integrity.desc": "Acting with honesty and strong moral principles",
    "institution.values.innovation": "Innovation",
    "institution.values.innovation.desc": "Embracing new ideas and creative solutions",
    "institution.values.community": "Community",
    "institution.values.community.desc": "Building connections and supporting one another",
    
    // About Founder
    "founder.title": "About Founder",
    "founder.subtitle": "The visionary behind our institution",
    "founder.name": "Igor Grdina (1920-1995)",
    "founder.intro1": "Igor Grdina was a visionary educator, philosopher, and humanitarian whose life's work was dedicated to the belief that education is the most powerful tool for social transformation and individual empowerment. Born in 1920 in a small village, he overcame significant personal hardships to become one of the most influential educational reformers of his generation.",
    "founder.intro2": "After completing his studies in pedagogy and philosophy, Grdina devoted himself to creating educational opportunities for students from all backgrounds. His progressive ideas about education emphasized not just academic learning, but the development of character, critical thinking, and social responsibility.",
    "founder.philosophy.title": "His Philosophy",
    "founder.philosophy.content": "Igor Grdina believed that true education must address the whole person—mind, body, and spirit. He championed a holistic approach that combined rigorous academic standards with attention to ethical development and social consciousness. His educational philosophy was grounded in several core principles:",
    "founder.quote": "Education is not preparation for life; education is life itself. It is the means by which we discover our potential, understand our responsibilities, and find our place in the world.",
    "founder.quote.year": "— Igor Grdina, 1965",
    "founder.philosophy.access": "Grdina was particularly passionate about ensuring that educational opportunities were accessible to all, regardless of economic or social background. He established numerous scholarship programs and advocated tirelessly for educational reform that would create pathways for talented students from disadvantaged communities.",
    "founder.legacy.title": "Legacy and Impact",
    "founder.legacy.content1": "The institution that bears Igor Grdina's name was established in 1950 as the culmination of his vision for educational excellence. Today, it stands as a testament to his belief in the transformative power of education. The institution has educated thousands of students who have gone on to make significant contributions in their fields and communities.",
    "founder.legacy.content2": "Grdina's influence extended beyond the walls of his institution. He authored numerous influential works on educational theory and practice, mentored countless educators, and served as an advisor to educational policymakers. His ideas continue to shape progressive educational practices worldwide.",
    "founder.legacy.content3": "Even after his passing in 1995, Igor Grdina's legacy lives on through the institution he founded and the countless lives he touched. His vision of education as a force for social good and individual empowerment remains as relevant today as it was during his lifetime.",
    "founder.stats.years": "Years of Impact",
    "founder.stats.works": "Published Works",
    "founder.stats.mentored": "Educators Mentored",
    
    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "Get in touch with our institution",
    "contact.info.title": "Contact Information",
    "contact.info.email": "Email",
    "contact.info.phone": "Phone",
    "contact.info.address": "Address",
    "contact.info.hours": "Office Hours",
    "contact.info.hours.value": "Monday - Friday: 8:00 AM - 4:00 PM",
    "contact.form.title": "Send us a Message",
    "contact.form.name": "Name",
    "contact.form.name.placeholder": "Your name",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "your.email@example.com",
    "contact.form.message": "Message",
    "contact.form.message.placeholder": "How can we help you?",
    "contact.form.submit": "Send Message",
    "contact.form.success": "Thank you for your message! We'll get back to you soon.",
    "contact.map.title": "Our Location",
  },
  si: {
    // Navigation
    "nav.news": "Novice",
    "nav.aboutInstitution": "Ustanova",
    "nav.aboutFounder": "Ustanovitelj",
    "nav.contact": "Kontakt",
    
    // News Page
    "news.title": "Novice",
    "news.subtitle": "Spremljajte naše najnovejše objave in dogodke",
    "news.intro": "Dobrodošli na novičnem portalu ustanove Igor Grdina. Tu boste našli najnovejše novice, obvestila in informacije o znanstveno raziskovalnem delu ustanove.",
    "news.readMore": "Preberi več",
    
    // About Institution
    "institution.title": "O Naši Ustanovi",
    "institution.subtitle": "Odličnost v izobraževanju od leta 1950",
    "institution.intro": "Naša ustanova je svetilnik izobraževalne odličnosti, zavezana negovanju znanja in oblikovanju prihodnosti. Ustanovljeni na načelih akademske strogosti, inovativnosti in družbene odgovornosti, že več kot sedem desetletij služimo naši skupnosti.",
    "institution.history.title": "Naša Zgodovina",
    "institution.history.content": "Ustanovljeni leta 1950, se je naša ustanova pojavila iz vizije ustvariti izobraževalno okolje, ki bi izzivalo, navdihovalo in opolnomočilo študente vseh okolij. Skozi desetletja smo se razvijali, a ostali zvesti našim temeljnim načelom odličnosti, integritete in služenja.",
    "institution.mission.title": "Naše Poslanstvo",
    "institution.mission.content": "Zavezani smo zagotavljanju preobrazne izobraževalne izkušnje, ki študente pripravlja ne le za kariere, ampak za smiselna življenja. Naše poslanstvo je gojiti kritično razmišljanje, spodbujati ustvarjalnost in vsakemu študentu vcepiti občutek družbene odgovornosti.",
    "institution.values.title": "Naše Vrednote",
    "institution.values.excellence": "Odličnost",
    "institution.values.excellence.desc": "Stremljenje k najvišjim standardom pri vseh prizadevanjih",
    "institution.values.integrity": "Integriteta",
    "institution.values.integrity.desc": "Ravnanje s poštenostjo in močnimi moralnimi načeli",
    "institution.values.innovation": "Inovativnost",
    "institution.values.innovation.desc": "Sprejemanje novih idej in kreativnih rešitev",
    "institution.values.community": "Skupnost",
    "institution.values.community.desc": "Gradnja povezav in medsebojna podpora",
    
    // About Founder
    "founder.title": "O Ustanovitelju",
    "founder.subtitle": "Vizionar za našo ustanovo",
    "founder.name": "Igor Grdina (1920-1995)",
    "founder.intro1": "Igor Grdina je bil vizionarski pedagog, filozof in humanist, katerega življenjsko delo je bilo posvečeno prepričanju, da je izobraževanje najmočnejše orodje za družbeno preobrazbo in osebno opolnomočenje. Rojen leta 1920 v majhni vasi je premagal pomembne osebne težave in postal eden najvplivnejših izobraževalnih reformatorjev svoje generacije.",
    "founder.intro2": "Po zaključku študija pedagogike in filozofije se je Grdina posvetil ustvarjanju izobraževalnih priložnosti za študente vseh okolij. Njegove napredne ideje o izobraževanju so poudarjale ne le akademsko učenje, ampak tudi razvoj značaja, kritičnega razmišljanja in družbene odgovornosti.",
    "founder.philosophy.title": "Njegova Filozofija",
    "founder.philosophy.content": "Igor Grdina je verjel, da se mora pravo izobraževanje ukvarjati s celotno osebo – umom, telesom in duhom. Zagovarjal je celosten pristop, ki je združeval stroge akademske standarde s pozornostjo na etični razvoj in družbeno zavest. Njegova izobraževalna filozofija je temeljila na več osnovnih načelih:",
    "founder.quote": "Izobraževanje ni priprava na življenje; izobraževanje je samo življenje. To je način, s katerim odkrivamo svoj potencial, razumemo svoje odgovornosti in najdemo svoje mesto v svetu.",
    "founder.quote.year": "— Igor Grdina, 1965",
    "founder.philosophy.access": "Grdina je bil posebej strastno predan zagotavljanju, da so izobraževalne priložnosti dostopne vsem, ne glede na ekonomsko ali socialno ozadje. Ustanovil je številne štipendijske programe in neutrudno zagovarjal izobraževalno reformo, ki bi ustvarila poti za nadarjene študente iz prikrajšanih skupnosti.",
    "founder.legacy.title": "Zapuščina in Vpliv",
    "founder.legacy.content1": "Ustanova, ki nosi ime Igorja Grdine, je bila ustanovljena leta 1950 kot vrhunec njegove vizije izobraževalne odličnosti. Danes stoji kot dokaz njegovega prepričanja v preoblikovalno moč izobraževanja. Ustanova je izobrazila tisoče študentov, ki so nadaljevali s pomembnimi prispevki na svojih področjih in v svojih skupnostih.",
    "founder.legacy.content2": "Grdinin vpliv je segal onkraj zidov njegove ustanove. Napisal je številna vplivna dela o izobraževalni teoriji in praksi, mentoriral neštetim pedagogom in služil kot svetovalec oblikovalcem izobraževalne politike. Njegove ideje še naprej oblikujejo napredne izobraževalne prakse po vsem svetu.",
    "founder.legacy.content3": "Tudi po njegovi smrti leta 1995 Grdinova zapuščina živi naprej skozi ustanovo, ki jo je ustanovil, in neštetih življenj, ki se jih je dotaknil. Njegova vizija izobraževanja kot sile za družbeno dobrino in osebno opolnomočenje ostaja enako pomembna danes, kot je bila v času njegovega življenja.",
    "founder.stats.years": "Let Vpliva",
    "founder.stats.works": "Objavljenih Del",
    "founder.stats.mentored": "Mentoriranih Pedagogov",
    
    // Contact
    "contact.title": "Kontaktirajte Nas",
    "contact.subtitle": "Stopite v stik z našo ustanovo",
    "contact.info.title": "Kontaktni Podatki",
    "contact.info.email": "E-pošta",
    "contact.info.phone": "Telefon",
    "contact.info.address": "Naslov",
    "contact.info.hours": "Delovni Čas",
    "contact.info.hours.value": "Ponedeljek - Petek: 8:00 - 16:00",
    "contact.form.title": "Pošljite nam Sporočilo",
    "contact.form.name": "Ime",
    "contact.form.name.placeholder": "Vaše ime",
    "contact.form.email": "E-pošta",
    "contact.form.email.placeholder": "vasa.eposta@primer.si",
    "contact.form.message": "Sporočilo",
    "contact.form.message.placeholder": "Kako vam lahko pomagamo?",
    "contact.form.submit": "Pošlji Sporočilo",
    "contact.form.success": "Hvala za vaše sporočilo! Kmalu se vam bomo oglasili.",
    "contact.map.title": "Naša Lokacija",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
