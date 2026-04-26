import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "sl";

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
    "institution.title": "About the Institution",
    "institution.subtitle": "Promoting Slovenian history and cultural heritage",
    "institution.heritage.title": "Our Origins",
    "institution.heritage.content1": "Ustanova Igor Grdina was established with a clear purpose: to advance research into Slovenian history and culture, and to bring that research into meaningful dialogue with the public. It is named after the prominent Slovenian historian Igor Grdina, whose decades of scholarly work on Slovenian cultural history inspired its founding.",
    "institution.heritage.content2": "The institution operates at the intersection of academic rigour and civic engagement. We believe that understanding history is not a privilege of specialists — it is a foundation for informed citizenship and cultural self-awareness. Our work is therefore both scholarly and publicly oriented.",
    "institution.mission.title": "Our Mission",
    "institution.mission.content": "We organise public lectures, scholarly symposia, and educational programmes on Slovenian history and cultural heritage. Our activities bring together researchers, educators, students, and curious citizens around topics that matter: the formation of Slovenian national identity, the great figures of Slovenian literature and thought, and the broader Central European context of Slovenian history.",
    "institution.mission.content2": "We also support the publication of scholarly and popular-scientific works on Slovenian history. From academic monographs to accessible introductions, we aim to make serious historical knowledge available to anyone with the desire to learn.",
    "institution.pillars.excellence.title": "Public Lectures",
    "institution.pillars.excellence.desc": "Regular lectures by leading historians, literary scholars, and cultural critics — open and free to the public.",
    "institution.pillars.innovation.title": "Scholarly Symposia",
    "institution.pillars.innovation.desc": "Annual and thematic symposia that bring together researchers from Slovenia and abroad to explore key questions in Slovenian cultural history.",
    "institution.pillars.global.title": "Educational Programmes",
    "institution.pillars.global.desc": "Programmes for secondary school students, university undergraduates, and adult learners who wish to deepen their knowledge of Slovenian history.",
    "institution.pillars.community.title": "Publications",
    "institution.pillars.community.desc": "Support for the publication of books, edited volumes, and articles that advance the understanding of Slovenian history and culture.",
    "institution.values.title": "Our Values",
    "institution.values.excellence": "Excellence",
    "institution.values.excellence.desc": "We pursue the highest standards in all aspects of education and institutional operations.",
    "institution.values.integrity": "Integrity",
    "institution.values.integrity.desc": "We uphold ethical principles and foster a culture of honesty, transparency, and accountability.",
    "institution.values.inclusivity": "Inclusivity",
    "institution.values.inclusivity.desc": "We celebrate diversity and create an environment where all individuals feel valued and supported.",
    "institution.values.innovation": "Innovation",
    "institution.values.innovation.desc": "We embrace change and continuously seek new ways to enhance the educational experience.",

    // About Founder
    "founder.title": "About the Founder",
    "founder.subtitle": "Slovenian historian and cultural critic",
    "founder.name": "Igor Grdina",
    "founder.intro1": "Igor Grdina is one of Slovenia's most prominent historians and cultural critics. As a Senior Research Fellow at the Institute of Cultural History at ZRC SAZU (Scientific Research Centre of the Slovenian Academy of Sciences and Arts), his work has profoundly shaped how Slovenes understand their cultural and literary past.",
    "founder.intro2": "His research focuses on Slovenian cultural and literary history, particularly the long 19th century — the era of national awakening, Romanticism, and the formation of a distinctly Slovenian identity. He has written extensively about France Prešeren, Ivan Cankar, Anton Aškerc, and other central figures in the Slovenian literary canon.",
    "founder.philosophy.title": "Research Focus",
    "founder.philosophy.content": "Grdina approaches the history of Slovenian culture as an integral part of the broader Central European tradition. His work examines how Slovenian writers, thinkers, and artists navigated the Habsburg political world while cultivating a rich and independent cultural identity. He pays particular attention to the interplay between language, literature, and national consciousness:",
    "founder.quote": "History is not a collection of dates and events — it is the story of how people made sense of their world, and how that understanding continues to shape us.",
    "founder.quote.year": "— Igor Grdina",
    "founder.philosophy.access": "Beyond academic research, Grdina has long been committed to making Slovenian history accessible to a wider public. Through public lectures, essays, and popular-scientific writing, he bridges the gap between rigorous scholarship and engaged civic education — a commitment that lies at the heart of the institution that bears his name.",
    "founder.legacy.title": "Selected Work",
    "founder.legacy.content1": "Grdina is the author of numerous monographs and scholarly articles on Slovenian cultural history. His books explore topics ranging from the poetry of France Prešeren and the prose of Ivan Cankar to the cultural geography of the Slovenian lands within the Habsburg Monarchy.",
    "founder.legacy.content2": "He has also written about the intellectual history of the Slovenian national movement, the role of the Catholic Church in Slovenian culture, and the relationship between Slovenian and broader European literary currents. His essays and reviews appear regularly in leading Slovenian scholarly journals and cultural publications.",
    "founder.legacy.content3": "As a professor at the Faculty of Arts of the University of Ljubljana, Grdina has mentored generations of historians and literary scholars. The institution that bears his name was founded to extend this mission — bringing serious historical inquiry into dialogue with the broader public.",
    "founder.stats.years": "Years of Research",
    "founder.stats.works": "Published Monographs",
    "founder.stats.mentored": "Scholarly Contributions",

    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "Get in touch with our institution",
    "contact.info.title": "Contact Information",
    "contact.info.email": "Email",
    "contact.info.phone": "Phone",
    "contact.info.address": "Address",
    "contact.info.hours": "Office Hours",
    "contact.info.hours.value": "Monday – Friday: 8:00 AM – 4:00 PM",
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

    // Footer
    "footer.description": "Empowering students since 1950. Dedicated to fostering academic excellence and personal growth.",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact",
    "footer.copyright": "All rights reserved.",

    // News Article
    "article.backToNews": "Back to News",
    "article.previousArticle": "Previous Article",
    "article.nextArticle": "Next Article",
    "article.notFound.title": "Article Not Found",
    "article.notFound.back": "Return to News",

    // Not Found
    "notFound.message": "Oops! Page not found",
    "notFound.back": "Return to Home",
  },
  sl: {
    // Navigation
    "nav.news": "Novice",
    "nav.aboutInstitution": "Ustanova",
    "nav.aboutFounder": "Ustanovitelj",
    "nav.contact": "Kontakt",

    // News Page
    "news.title": "Novice",
    "news.subtitle": "Spremljajte naše najnovejše objave in dogodke",
    "news.intro": "Dobrodošli na novičnem portalu Ustanove Igor Grdina. Tu boste našli najnovejše novice, obvestila in informacije o znanstvenoraziskovalnem delu ustanove.",
    "news.readMore": "Preberi več",

    // About Institution
    "institution.title": "O Ustanovi",
    "institution.subtitle": "Spodbujanje slovenske zgodovine in kulturne dediščine",
    "institution.heritage.title": "Nastanek in Namen",
    "institution.heritage.content1": "Ustanova Igor Grdina je bila ustanovljena z jasnim namenom: poglabljati raziskovanje slovenske zgodovine in kulture ter to znanje prenašati v smiselni dialog z javnostjo. Poimenovana je po uglednem slovenskem zgodovinarju Igorju Grdini, katerega desetletja znanstvenoraziskovalnega dela o slovenski kulturni zgodovini so navdihovala njen nastanek.",
    "institution.heritage.content2": "Ustanova deluje na stičišču akademske strogosti in civilne odgovornosti. Prepričani smo, da razumevanje zgodovine ni privilegij strokovnjakov — je temelj ozaveščenega državljanstva in kulturne samozavesti. Naše dejavnosti so zato hkrati znanstvene in javno usmerjene.",
    "institution.mission.title": "Naše Poslanstvo",
    "institution.mission.content": "Organiziramo javna predavanja, znanstvene simpozije in izobraževalne programe s področja slovenske zgodovine in kulturne dediščine. Naše dejavnosti združujejo raziskovalce, pedagoge, študente in radovedne posameznike okoli tem, ki so pomembne: oblikovanje slovenskega narodnega identiteta, veliki liki slovenskega slovstva in misli ter širši srednjeevropski kontekst slovenske zgodovine.",
    "institution.mission.content2": "Podpiramo tudi izdajanje znanstvenih in poljudnoznanstvenih del s področja slovenske zgodovine — od akademskih monografij do dostopnih uvodov za širšo javnost. Naš cilj je, da resno zgodovinsko znanje postane dostopno vsakomur, ki si ga želi pridobiti.",
    "institution.pillars.excellence.title": "Javna Predavanja",
    "institution.pillars.excellence.desc": "Redna predavanja vodilnih zgodovinarjev, literarnih zgodovinarjev in kulturnih kritikov — odprta in brezplačna za vse.",
    "institution.pillars.innovation.title": "Znanstveni Simpoziji",
    "institution.pillars.innovation.desc": "Letni in tematski simpoziji, ki zbirajo raziskovalce iz Slovenije in tujine za razpravo o ključnih vprašanjih slovenske kulturne zgodovine.",
    "institution.pillars.global.title": "Izobraževalni Programi",
    "institution.pillars.global.desc": "Programi za dijake, študente in odrasle, ki si želijo poglobiti znanje o slovenski zgodovini in kulturi.",
    "institution.pillars.community.title": "Publikacije",
    "institution.pillars.community.desc": "Podpora izdajanju knjig, zbornikov in člankov, ki poglabljajo razumevanje slovenske zgodovine in kulture.",
    "institution.values.title": "Naše Vrednote",
    "institution.values.excellence": "Odličnost",
    "institution.values.excellence.desc": "Stremimo k najvišjim standardom na vseh področjih izobraževanja in delovanja ustanove.",
    "institution.values.integrity": "Integriteta",
    "institution.values.integrity.desc": "Zagovarjamo etična načela in gradimo kulturo poštenosti, preglednosti in odgovornosti.",
    "institution.values.inclusivity": "Vključenost",
    "institution.values.inclusivity.desc": "Slavimo raznolikost in ustvarjamo okolje, v katerem se vsi posamezniki počutijo cenjene in podprte.",
    "institution.values.innovation": "Inovativnost",
    "institution.values.innovation.desc": "Sprejemamo spremembe in nenehno iščemo nove načine za izboljšanje izobraževalne izkušnje.",

    // About Founder
    "founder.title": "O Ustanovitelju",
    "founder.subtitle": "Slovenski zgodovinar in kulturni kritik",
    "founder.name": "Igor Grdina",
    "founder.intro1": "Igor Grdina je eden najpomembnejših slovenskih zgodovinarjev in kulturnih kritikov. Kot višji znanstveni sodelavec na Inštitutu za kulturno zgodovino pri ZRC SAZU (Znanstvenoraziskovalnem centru Slovenske akademije znanosti in umetnosti) je njegovo delo bistveno oblikovalo razumevanje slovenskega kulturnega in literarnega izročila.",
    "founder.intro2": "Njegovo raziskovalno področje je slovenska kulturna in literarna zgodovina, zlasti dolgo 19. stoletje — čas narodnega prebujenja, romantike in oblikovanja slovenskega narodnega identiteta. Obsežno je pisal o Francetu Prešernu, Ivanu Cankarju, Antonu Aškercu in drugih osrednjih osebnostih slovenskega literarnega kanona.",
    "founder.philosophy.title": "Področje Dela",
    "founder.philosophy.content": "Grdina obravnava zgodovino slovenske kulture kot sestavni del širše srednjeevropske tradicije. Njegovo delo preučuje, kako so slovenski pisatelji, misleci in umetniki krmarili v habsburškem političnem svetu, hkrati pa negovali bogato in samostojno kulturno identiteto. Posebno pozornost namenja prepletanju med jezikom, literaturo in narodnim zavedanjem:",
    "founder.quote": "Zgodovina ni zbirka datumov in dogodkov — je pripoved o tem, kako so ljudje razumevali svoj svet, in o tem, kako to razumevanje še danes oblikuje nas.",
    "founder.quote.year": "— Igor Grdina",
    "founder.philosophy.access": "Grdina se že dolgo zavzema za to, da bi bila slovenska zgodovina dostopna širši javnosti. Z javnimi predavanji, eseji in poljudnoznanstvenim pisanjem premoščuje prepad med strogim akademskim raziskovanjem in angažiranim javnim izobraževanjem — zavezanost, ki je v srcu ustanove, ki nosi njegovo ime.",
    "founder.legacy.title": "Izbor iz Dela",
    "founder.legacy.content1": "Grdina je avtor številnih monografij in znanstvenih člankov o slovenski kulturni zgodovini. Njegove knjige obravnavajo teme od poezije Franceta Prešerna in proze Ivana Cankarja do kulturne geografije slovenskega prostora v okviru Habsburške monarhije.",
    "founder.legacy.content2": "Pisal je tudi o intelektualni zgodovini slovenskega narodnega gibanja, vlogi Katoliške cerkve v slovenski kulturi ter o razmerjih med slovenskimi in širšimi evropskimi literarnimi tokovi. Njegovi eseji in recenzije redno izhajajo v vodilnih slovenskih znanstvenih revijah in kulturnih publikacijah.",
    "founder.legacy.content3": "Kot profesor na Filozofski fakulteti Univerze v Ljubljani je Grdina mentoriral generacije zgodovinarjev in literarnih znanstvenikov. Ustanova, ki nosi njegovo ime, je bila ustanovljena, da to poslanstvo razširi — in resno zgodovinsko raziskovanje postavi v dialog s širšo javnostjo.",
    "founder.stats.years": "Let Raziskovalnega Dela",
    "founder.stats.works": "Objavljenih Monografij",
    "founder.stats.mentored": "Znanstvenih Prispevkov",

    // Contact
    "contact.title": "Kontaktirajte Nas",
    "contact.subtitle": "Stopite v stik z našo ustanovo",
    "contact.info.title": "Kontaktni Podatki",
    "contact.info.email": "E-pošta",
    "contact.info.phone": "Telefon",
    "contact.info.address": "Naslov",
    "contact.info.hours": "Delovni Čas",
    "contact.info.hours.value": "Ponedeljek – Petek: 8:00 – 16:00",
    "contact.form.title": "Pošljite nam sporočilo",
    "contact.form.name": "Ime",
    "contact.form.name.placeholder": "Vaše ime",
    "contact.form.email": "E-pošta",
    "contact.form.email.placeholder": "vasa.eposta@primer.si",
    "contact.form.message": "Sporočilo",
    "contact.form.message.placeholder": "Kako vam lahko pomagamo?",
    "contact.form.submit": "Pošlji Sporočilo",
    "contact.form.success": "Hvala za vaše sporočilo! Kmalu se vam bomo oglasili.",
    "contact.map.title": "Naša Lokacija",

    // Footer
    "footer.description": "Opolnomočevanje študentov od leta 1950. Zavezani k spodbujanju akademske odličnosti in osebne rasti.",
    "footer.quickLinks": "Hitre Povezave",
    "footer.contact": "Kontakt",
    "footer.copyright": "Vse pravice pridržane.",

    // News Article
    "article.backToNews": "Nazaj na Novice",
    "article.previousArticle": "Prejšnji članek",
    "article.nextArticle": "Naslednji članek",
    "article.notFound.title": "Članek ni bil najden",
    "article.notFound.back": "Nazaj na Novice",

    // Not Found
    "notFound.message": "Ups! Stran ni bila najdena",
    "notFound.back": "Nazaj na Začetek",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("sl");

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
