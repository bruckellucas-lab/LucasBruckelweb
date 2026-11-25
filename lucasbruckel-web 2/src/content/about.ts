/**
 * Contenido de "Sobre mí". Todo sale de fuentes verificables
 * (LinkedIn, repos, hoja de ruta de LISTO, publicaciones). Ver docs/CONTENIDO.md.
 */
export const about = {
  es: {
    headline: 'Mezclo negocios y tecnología.',
    lead: 'Estoy terminando el secundario técnico en Gestión en ORT y, en paralelo, construyo productos digitales que ya están online.',
    body: [
      'El más avanzado es LISTO, una plataforma para organizar salidas que está en beta cerrada. También armé un sistema de catálogos web para comercios de indumentaria, con un panel que el comerciante usa desde el celular.',
      'Me gusta ver cómo funcionan las cosas por dentro. Este año organicé la visita de mi curso a IOL Inversiones: contacté a la empresa y coordiné la visita. También participé de Vinculación con el Futuro en Banco Galicia y visité Cocos, Bull Market e IEB.',
      'Desde enero de 2026 soy líder educativo no formal en Náutico Hacoaj: con otros dos líderes coordino un grupo de chicos de 7 años y participo de 5 campamentos por año.',
    ],
    principles: [
      { title: 'Primero, que funcione de verdad', body: 'LISTO salió en beta coordinando a mano, antes de automatizar reservas o cobros.' },
      { title: 'Medir antes de prometer', body: 'Antes de tocar las recomendaciones de LISTO armé una línea base con 20 escenarios: 55 % de opciones pertinentes. Ese número ordena cada cambio.' },
      { title: 'Seguridad desde el principio', body: 'Claves solo en el servidor, límites de uso y huellas cifradas en lugar de IPs.' },
      { title: 'IA como herramienta, con control', body: 'Desarrollo con asistentes de IA y cada cambio pasa por pruebas automáticas.' },
    ],
    interests: 'Productos digitales que resuelvan problemas concretos de personas y comercios, y el mundo de las finanzas, la tecnología financiera y el mercado de capitales.',
  },
  en: {
    headline: 'I combine business and technology.',
    lead: 'I’m finishing a technical high school degree in Management at ORT and, alongside it, I build digital products that are already live.',
    body: [
      'The most advanced one is LISTO, a platform for planning outings that is in private beta. I also built a web catalog system for clothing stores, with a panel store owners use from their phone.',
      'I like seeing how things work from the inside. This year I organized my class’s visit to IOL Inversiones: I reached out to the company and coordinated the visit. I also took part in Vinculación con el Futuro at Banco Galicia and visited Cocos, Bull Market and IEB.',
      'Since January 2026 I’ve been a youth leader at Náutico Hacoaj: together with two other leaders I run a group of 7-year-olds and take part in 5 camps a year.',
    ],
    principles: [
      { title: 'Make it work for real first', body: 'LISTO launched its beta coordinating by hand, before automating bookings or payments.' },
      { title: 'Measure before promising', body: 'Before changing LISTO’s recommendations I built a baseline with 20 scenarios: 55% relevant options. That number guides every change.' },
      { title: 'Security from the start', body: 'Keys only on the server, usage limits and hashed fingerprints instead of IP addresses.' },
      { title: 'AI as a tool, with checks', body: 'I build with AI assistants, and every change goes through automated tests.' },
    ],
    interests: 'Digital products that solve concrete problems for people and businesses, and the world of finance, fintech and capital markets.',
  },
} as const;

/** Recorrido, de lo más reciente a lo más antiguo. Los links permiten verificar cada logro. */
export const timeline = [
  {
    date: { es: 'Octubre 2026', en: 'October 2026' },
    title: { es: 'Organicé la visita de mi curso a IOL Inversiones', en: 'Organized my class’s visit to IOL Inversiones' },
    org: { es: 'Iniciativa propia, con ORT', en: 'My own initiative, with ORT' },
    body: {
      es: 'Contacté a la empresa y coordiné la visita. Conversamos con su CEO y con los líderes de Estrategia de Inversión y de Advanced Analytics. IOL destacó la iniciativa en su propia publicación.',
      en: 'I reached out to the company and coordinated the visit. We met its CEO and the leads of Investment Strategy and Advanced Analytics. IOL highlighted the initiative in its own post.',
    },
    links: [
      { label: { es: 'Publicación de IOL', en: 'IOL’s post' }, url: 'https://www.linkedin.com/feed/update/urn:li:activity:7520544823313899520/' },
      { label: { es: 'Mi publicación', en: 'My post' }, url: 'https://www.linkedin.com/feed/update/urn:li:activity:7519511574580015104/' },
    ],
    highlight: true,
  },
  {
    date: { es: 'Octubre 2026', en: 'October 2026' },
    title: { es: 'Vinculación con el Futuro', en: 'Vinculación con el Futuro' },
    org: { es: 'Banco Galicia, con mi curso de ORT', en: 'Banco Galicia, with my ORT class' },
    body: {
      es: 'Cinco días dentro del banco con talleres de educación financiera, desarrollo profesional, innovación, producto y trabajo en equipo.',
      en: 'Five days inside the bank, with workshops on financial literacy, professional development, innovation, product and teamwork.',
    },
    links: [{ label: { es: 'Ver publicación', en: 'See post' }, url: 'https://www.linkedin.com/feed/update/urn:li:activity:7524116009570418688/' }],
  },
  {
    date: { es: 'Julio a septiembre 2026', en: 'July to September 2026' },
    title: { es: 'Visitas a empresas del mercado de capitales', en: 'Visits to capital markets companies' },
    org: { es: 'Cocos, Bull Market e IEB', en: 'Cocos, Bull Market and IEB' },
    body: {
      es: 'Cómo trabajan por dentro los equipos de inversiones, tecnología y producto de tres empresas del sector.',
      en: 'How the investment, technology and product teams of three companies in the sector work from the inside.',
    },
    links: [
      { label: { es: 'Cocos', en: 'Cocos' }, url: 'https://www.linkedin.com/feed/update/urn:li:activity:7482757212486918144/' },
      { label: { es: 'Bull Market', en: 'Bull Market' }, url: 'https://www.linkedin.com/feed/update/urn:li:activity:7498711121122574338/' },
      { label: { es: 'IEB', en: 'IEB' }, url: 'https://www.linkedin.com/feed/update/urn:li:activity:7511105100996595714/' },
    ],
  },
  {
    date: { es: 'Enero 2026 a hoy', en: 'January 2026 to present' },
    title: { es: 'Líder educativo no formal', en: 'Youth leader' },
    org: { es: 'Náutico Hacoaj', en: 'Náutico Hacoaj' },
    body: {
      es: 'Coordino un grupo de chicos de 7 años junto a otros 2 líderes, dentro de un área de 20 educadores. Planifico encuentros semanales de tres horas y participo de 5 campamentos por año.',
      en: 'I run a group of 7-year-olds with 2 other leaders, within a team of 20 educators. I plan weekly three-hour sessions and take part in 5 camps a year.',
    },
    links: [],
  },
  {
    date: { es: '2024 a 2025', en: '2024 to 2025' },
    title: { es: 'Formación de madrijim', en: 'Youth leadership training (madrijim)' },
    org: { es: 'Hacoaj', en: 'Hacoaj' },
    body: {
      es: 'Dos años de formación en liderazgo, coordinación de grupos, educación no formal y resolución de conflictos.',
      en: 'Two years of training in leadership, group coordination, non-formal education and conflict resolution.',
    },
    links: [],
  },
  {
    date: { es: '2022 a 2026', en: '2022 to 2026' },
    title: { es: 'Secundario técnico en Gestión', en: 'Technical high school, Management track' },
    org: { es: 'Escuela Técnica ORT', en: 'ORT Technical School' },
    body: {
      es: 'Contabilidad, economía, administración y marketing. Participé de ORT in Company desarrollando ideas de negocio y propuestas en equipo.',
      en: 'Accounting, economics, management and marketing. I took part in ORT in Company, developing business ideas and proposals as a team.',
    },
    links: [],
  },
] as const;

export const languages = {
  es: 'Español nativo, inglés B2 y hebreo básico.',
  en: 'Spanish (native), English (B2) and basic Hebrew.',
} as const;
