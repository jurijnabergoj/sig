export interface StaticArticle {
  id: string;
  sl: {
    title: string;
    description: string;
    content: string;
    date: string;
  };
  en: {
    title: string;
    description: string;
    content: string;
    date: string;
  };
  coverImage: string;
}

export const newsArticles: StaticArticle[] = [
  {
    id: "1",
    sl: {
      title: "Primož Trubar in začetki slovenskega knjižnega jezika",
      description:
        "Simpozij ob 515. obletnici rojstva protestantskega reformatorja in utemeljitelja slovenskega pismenstva je privabil zgodovinarje in kulturologe z vsega slovenskega prostora.",
      content: `
        <p>Primož Trubar (1508–1586) velja za enega najpomembnejših Slovencev vseh časov. Kot protestantski reformator in pisec prvih knjig v slovenskem jeziku je postavil temelje slovenskega knjižnega jezika in s tem omogočil razvoj nacionalne kulture, ki traja vse do danes.</p>

        <p>Njegov <em>Catechismus</em> (1550), ki je bil natisnjen v Tübingenu, je ne le prvo ohranjeno tiskano besedilo v slovenščini, temveč tudi prelomnica v zgodovini slovenskega naroda. S tem dejanjem je Trubar slovenščino dvignil iz vsakdanje govorne rabe na raven pisne kulture — v tistem času izjemno pogumno in revolucionarno dejanje.</p>

        <p>Ustanova Igor Grdina je v okviru letnega simpozija o slovenskem kulturnem izročilu posvetila posebno pozornost Trubarjevemu življenju in delu. Predavanja so zajela širok spekter tem: od jezikovnih inovacij in teoloških pogledov do vpliva reformacije na razvoj slovenskega naroda in Trubarjevega pomena v evropskem kontekstu.</p>

        <p>Simpozij je privabil zgodovinarje, literarne zgodovinarje in kulturologe iz cele Slovenije in tujine. Zaključna okrogla miza je poudarila, da Trubarjevo delo ostaja živ vir navdiha za razumevanje slovenskega nacionalnega in kulturnega identiteta.</p>
      `,
      date: "15. april 2025",
    },
    en: {
      title: "Primož Trubar and the Origins of Written Slovenian",
      description:
        "A symposium marking the 515th anniversary of the birth of the Protestant reformer and founding figure of Slovenian literature drew historians and cultural scholars from across the Slovenian world.",
      content: `
        <p>Primož Trubar (1508–1586) is considered one of the most important Slovenes of all time. As a Protestant reformer and the author of the first books written in Slovenian, he laid the foundations of the Slovenian literary language and thereby enabled the development of a national culture that endures to this day.</p>

        <p>His <em>Catechismus</em> (1550), printed in Tübingen, is not only the earliest surviving printed text in Slovenian but also a turning point in the history of the Slovenian people. By this act, Trubar elevated Slovenian from an everyday spoken tongue to the level of written culture — a remarkably bold and revolutionary step for the time.</p>

        <p>The Igor Grdina Institute devoted special attention to Trubar's life and work as part of its annual symposium on Slovenian cultural heritage. The lectures covered a wide range of topics: from linguistic innovations and theological views to the impact of the Reformation on the development of the Slovenian nation and Trubar's significance within the European context.</p>

        <p>The symposium attracted historians, literary historians, and cultural scholars from across Slovenia and abroad. The closing round table underlined that Trubar's work remains a living source of inspiration for understanding Slovenian national and cultural identity.</p>
      `,
      date: "15 April 2025",
    },
    coverImage: "/images/PT.webp",
  },
  {
    id: "2",
    sl: {
      title: "Janez Vajkard Valvasor: 340 let Slave vojvodine Kranjske",
      description:
        "Strokovno predavanje ob obletnici izida monumentalnega enciklopedičnega dela o slovenskem prostoru in njegovih ljudeh, ki ostaja neprecenljiv vir za slovensko zgodovinopisje.",
      content: `
        <p>Janez Vajkard Valvasor (1641–1693) je z obsežnim enciklopedičnim delom <em>Die Ehre des Herzogthums Crain</em> (Slava vojvodine Kranjske, 1689) ustvaril temeljni vir za slovensko zgodovino, geografijo in etnografijo. Štiriindvajset zvezkov tega monumentalnega dela opisuje ozemlje današnje Slovenije z redko natančnostjo in razgledanostjo.</p>

        <p>Ob 340. obletnici izida tega dela je Ustanova Igor Grdina organizirala strokovno predavanje, ki je osvetlilo Valvasorjev pomen za slovensko kulturo in zgodovinopisje. Predavatelj je poudaril, kako je Valvasor s svojo metodo opazovanja, zbiranja in kritičnega vrednotenja virov prehitel svojo dobo in postal eden prvih modernih zgodovinarjev na slovenskem prostoru.</p>

        <p>Posebna pozornost je bila namenjena Valvasorjevemu opisu lokalnih navad, folklore in naravnih znamenitosti Kranjske, ki danes predstavljajo dragoceno pričevanje o življenju naših prednikov. Predavanje je pritegnilo številne obiskovalce, ki so se po koncu živahno vključili v razpravo o pomenu ohranjanja in dostopnosti zgodovinskih virov.</p>

        <p>Ustanova načrtuje izdajo komentiranega izbora Valvasorjevih besedil v sodobni slovenščini, da bi to izjemno delo postalo dostopnejše širši javnosti.</p>
      `,
      date: "12. februar 2025",
    },
    en: {
      title: "Janez Vajkard Valvasor: 340 Years of The Glory of the Duchy of Carniola",
      description:
        "A scholarly lecture on the anniversary of this monumental encyclopaedic work on the Slovenian lands and its people — an indispensable source for Slovenian historiography.",
      content: `
        <p>Janez Vajkard Valvasor (1641–1693) created, with his vast encyclopaedic work <em>Die Ehre des Herzogthums Crain</em> (The Glory of the Duchy of Carniola, 1689), the foundational source for Slovenian history, geography, and ethnography. The twenty-four volumes of this monumental work describe the territory of present-day Slovenia with rare precision and breadth of learning.</p>

        <p>On the 340th anniversary of the work's publication, the Igor Grdina Institute organised a scholarly lecture that shed light on Valvasor's significance for Slovenian culture and historiography. The lecturer emphasised how Valvasor, through his method of observation, collection, and critical evaluation of sources, was ahead of his time and became one of the first modern historians on Slovenian soil.</p>

        <p>Special attention was paid to Valvasor's descriptions of local customs, folklore, and natural landmarks of Carniola, which today represent invaluable testimony to the lives of our ancestors. The lecture attracted numerous visitors, who afterwards engaged in lively discussion about the importance of preserving and making historical sources accessible.</p>

        <p>The institute is planning the publication of an annotated selection of Valvasor's texts in modern Slovenian, to make this exceptional work more accessible to the general public.</p>
      `,
      date: "12 February 2025",
    },
    coverImage: "/images/JVV.webp",
  },
  {
    id: "3",
    sl: {
      title: "Novo predavanjsko ciklo: Slovenija v dolgem 19. stoletju",
      description:
        "Ustanova Igor Grdina vabi na serijo javnih predavanj o oblikovanju slovenskega naroda, kulture in identitete v obdobju med Napoleonovimi vojnami in prvo svetovno vojno.",
      content: `
        <p>Devetnajsto stoletje je za slovensko zgodovino eno najpomembnejših obdobij: čas razsvetljenstva in romantike, čas narodnega prebujenja in kulturnega razcveta, čas prvih zahtev po jezikovni in politični enakopravnosti. V tem obdobju so nastala temeljna dela slovenskega slovstva — od Prešernovega <em>Krsta pri Savici</em> do Cankarjevih prvih novel.</p>

        <p>Ustanova Igor Grdina v zimskem semestru 2025/2026 odpira novo serijo javnih predavanj z naslovom <strong>Slovenija v dolgem 19. stoletju</strong>. Ciklo obsega šest predavanj, ki bodo kronološko in tematsko pokrivala ključne mejnike tega obdobja: od Ilirskih provinc in Metternichovega absolutizma do maja naroda in taborskega gibanja, ter vse do razpada Habsburške monarhije.</p>

        <p>Predavanja so namenjena vsem, ki jih zanima slovenska zgodovina — tako strokovni javnosti kot dijakom, študentom in radovednim posameznikom brez posebnega predznanja. Vsa predavanja bodo potekala v prostorih ustanove, vstop bo prost.</p>

        <p>Urnik predavanj in prijavnica sta dostopna na spletni strani ustanove. Vljudno vabljeni!</p>
      `,
      date: "3. januar 2025",
    },
    en: {
      title: "New Lecture Series: Slovenia in the Long 19th Century",
      description:
        "The institute invites you to a series of public lectures on the formation of the Slovenian nation, culture, and identity in the period between the Napoleonic Wars and the First World War.",
      content: `
        <p>The nineteenth century is one of the most important periods in Slovenian history: a time of Enlightenment and Romanticism, of national awakening and cultural flourishing, of the first demands for linguistic and political equality. This era saw the creation of the foundational works of Slovenian literature — from Prešeren's <em>Baptism on the Savica</em> to Cankar's earliest novellas.</p>

        <p>In the winter semester of 2025/2026, the Igor Grdina Institute is launching a new series of public lectures entitled <strong>Slovenia in the Long 19th Century</strong>. The series comprises six lectures that will cover, chronologically and thematically, the key milestones of this period: from the Illyrian Provinces and Metternich's absolutism to the national spring movement and the tabor gatherings, through to the dissolution of the Habsburg Monarchy.</p>

        <p>The lectures are open to all those interested in Slovenian history — academic specialists and secondary school students alike, as well as curious individuals with no prior background in the field. All lectures will take place on the institute's premises and admission is free.</p>

        <p>The lecture schedule and registration form are available on the institute's website. You are warmly invited!</p>
      `,
      date: "3 January 2025",
    },
    coverImage: "/images/NP.jpg",
  },
];
