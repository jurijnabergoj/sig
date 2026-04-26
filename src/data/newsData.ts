export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  content: string;
  date: string;
  coverImage: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    title: "Annual Excellence Awards Ceremony 2024",
    description: "Celebrating outstanding achievements of our students and faculty members in academic excellence and innovation.",
    content: `
      <p>We are proud to announce the Annual Excellence Awards Ceremony for 2024, where we celebrated the remarkable achievements of our students and faculty members. This year's ceremony was particularly special, marking 74 years of academic excellence at Ustanova Igor Grdina.</p>

      <p>The event honored outstanding students across various disciplines, recognizing their dedication to academic excellence, innovative research, and community service. Our faculty members were also celebrated for their exceptional contributions to education and their commitment to fostering a nurturing learning environment.</p>

      <p>Among the highlights of the evening was the presentation of the Igor Grdina Excellence Award, our institution's most prestigious honor, which recognizes individuals who embody the values and vision of our founder. This year's recipient demonstrated exceptional leadership, academic prowess, and a commitment to making a positive impact in their community.</p>

      <p>The ceremony featured inspiring speeches from distinguished alumni who have gone on to make significant contributions in their respective fields. Their stories serve as a testament to the quality of education and character development that our institution provides.</p>

      <p>As we celebrate these achievements, we remain committed to our founding mission of empowering students to reach their full potential and become leaders in their chosen fields.</p>
    `,
    date: "March 15, 2024",
    coverImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
  },
  {
    id: "2",
    title: "New Research Center Opening",
    description: "State-of-the-art research facility to advance scientific innovation and collaborative learning opportunities.",
    content: `
      <p>Ustanova Igor Grdina is thrilled to announce the opening of our new state-of-the-art Research Center, a milestone that represents our commitment to advancing scientific innovation and providing cutting-edge facilities for our students and researchers.</p>

      <p>The 15,000 square meter facility features advanced laboratories, collaborative workspaces, and specialized equipment that will enable groundbreaking research across multiple disciplines. This investment in infrastructure demonstrates our dedication to maintaining our position at the forefront of academic excellence.</p>

      <p>The Research Center has been designed with sustainability in mind, incorporating energy-efficient systems and environmentally friendly materials. It will serve as a hub for interdisciplinary collaboration, bringing together students, faculty, and industry partners to tackle complex challenges and drive innovation.</p>

      <p>We are particularly excited about the opportunities this facility will create for undergraduate research experiences. Students will have unprecedented access to advanced equipment and mentorship from leading researchers, preparing them for successful careers in science and technology.</p>

      <p>The official opening ceremony will take place next month and will feature presentations from renowned scientists and tours of the facility.</p>
    `,
    date: "March 10, 2024",
    coverImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
  },
  {
    id: "3",
    title: "International Student Exchange Program Expansion",
    description: "Partnership with leading universities worldwide to enhance global learning experiences for our students.",
    content: `
      <p>In line with our commitment to providing global perspectives and international learning opportunities, Ustanova Igor Grdina is expanding its International Student Exchange Program to include partnerships with 20 additional universities across Europe, Asia, and the Americas.</p>

      <p>This expansion will enable more of our students to experience different cultures, educational systems, and professional environments while earning credits toward their degrees. The program has been carefully designed to ensure that participating students receive the support they need to make the most of their international experience.</p>

      <p>Our partner institutions have been selected based on their academic excellence, cultural diversity, and alignment with our educational values. Students participating in the exchange program will have access to unique courses, research opportunities, and professional networks that will enrich their educational journey.</p>

      <p>We believe that international exposure is crucial for developing the global citizens and leaders of tomorrow. Through this program, students will not only enhance their academic knowledge but also develop important soft skills such as adaptability, cross-cultural communication, and independence.</p>

      <p>Applications for the next academic year are now open, and we encourage all eligible students to consider this transformative opportunity.</p>
    `,
    date: "March 5, 2024",
    coverImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
  },
  {
    id: "4",
    title: "Alumni Success Stories: Where Are They Now?",
    description: "Featuring remarkable achievements of our graduates who are making significant impacts in their fields.",
    content: `
      <p>As we celebrate another successful academic year, we're taking a moment to highlight the incredible journeys of some of our distinguished alumni who continue to make us proud with their achievements and contributions to society.</p>

      <p>Our alumni network spans the globe and includes leaders in business, science, arts, education, and public service. These success stories serve as inspiration for our current students and demonstrate the lasting impact of the education and values instilled at Ustanova Igor Grdina.</p>

      <p>This month, we're featuring Dr. Ana Kovač, class of 2005, who recently published groundbreaking research in renewable energy; Marko Novak, class of 2010, who founded a successful social enterprise addressing educational inequality; and Dr. Sara Horvat, class of 2012, who is leading innovative healthcare initiatives in underserved communities.</p>

      <p>Each of these individuals credits their time at our institution as foundational to their success, highlighting the importance of our holistic approach to education that emphasizes not just academic excellence but also character development, critical thinking, and social responsibility.</p>

      <p>We invite all alumni to stay connected with our community and consider mentoring current students or participating in our guest speaker programs.</p>
    `,
    date: "February 28, 2024",
    coverImage: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80",
  },
  {
    id: "5",
    title: "Scholarship Program for Underprivileged Students",
    description: "New initiative to provide educational opportunities and support for talented students from disadvantaged backgrounds.",
    content: `
      <p>Ustanova Igor Grdina is proud to announce the launch of an expanded scholarship program aimed at providing educational opportunities to talented students from underprivileged backgrounds. This initiative reflects our founder's vision of education as a tool for social mobility and equality.</p>

      <p>The scholarship program will provide full tuition coverage, accommodation support, and a living stipend to ensure that financial constraints do not prevent deserving students from accessing quality education. Recipients will also receive mentorship, career guidance, and access to professional development resources.</p>

      <p>We recognize that talent and potential are distributed equally across society, but opportunities are not. This program is our commitment to identifying and nurturing talent wherever it exists, regardless of economic circumstances.</p>

      <p>The selection process will focus on academic potential, demonstrated resilience, and commitment to using education as a platform for positive change. We are particularly interested in supporting students from rural areas and marginalized communities who have shown exceptional promise despite challenging circumstances.</p>

      <p>We are grateful to our donors and supporters who have made this program possible and invite others to join us in creating pathways to educational opportunity for the next generation of leaders.</p>
    `,
    date: "February 20, 2024",
    coverImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
  },
  {
    id: "6",
    title: "Digital Learning Initiative Launch",
    description: "Implementing cutting-edge educational technology to enhance learning experiences and accessibility.",
    content: `
      <p>As part of our ongoing commitment to educational innovation, Ustanova Igor Grdina is launching a comprehensive Digital Learning Initiative designed to integrate cutting-edge technology into our curriculum and enhance learning experiences for all students.</p>

      <p>This initiative includes the development of interactive online learning platforms, virtual reality experiences for immersive learning, and artificial intelligence-powered personalized learning tools. These technologies will complement our traditional teaching methods and provide students with flexible, engaging, and effective learning opportunities.</p>

      <p>Our faculty members have undergone extensive training to effectively incorporate these digital tools into their teaching practices. The goal is not to replace traditional education but to enhance it, making learning more accessible, engaging, and tailored to individual student needs.</p>

      <p>The Digital Learning Initiative also includes improved infrastructure, with campus-wide high-speed internet, modern computer labs, and digital libraries that provide 24/7 access to academic resources. Students will have access to a vast array of online courses, webinars, and virtual workshops from leading experts worldwide.</p>

      <p>This investment in digital learning positions our institution at the forefront of educational innovation while ensuring that our students are well-prepared for the increasingly digital professional world they will enter.</p>
    `,
    date: "February 15, 2024",
    coverImage: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
  },
];
