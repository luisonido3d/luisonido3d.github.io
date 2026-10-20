/* All site content. English and Spanish are written separately (never machine-translated
   from each other); facts, job titles and terms come from Luis's verified CVs and LinkedIn.
   Naming rules: "Best Game Design" (Howl of Iron), "Scrum Master Intern" / "Scrum Master (Prácticas)"
   (Dairus), "Head of Dune Gaming" / "Responsable de Dune Gaming" (Duneverso).
   "30+" appears at most three times per variant: key figure, Flatter Than Earth role, case study. */

const SITE = {
  name: "Luis Rodríguez",
  email: "Luisonido3d@gmail.com",
  linkedin: "https://www.linkedin.com/in/luisonido3d",
  linkedinLabel: "linkedin.com/in/luisonido3d",
  photo: "img/luis.jpg",
  updated: { en: "Updated October 2026", es: "Actualizado en octubre de 2026" },
};

/* ---------- interface text ---------- */
const UI = {
  en: {
    nav: [["experience", "Experience"], ["projects", "Projects"], ["skills", "Skills"], ["contact", "Get in touch"], ["beyond", "Beyond work"]],
    contactMe: "Contact me", emailMe: "Email me", cv: "Download CV", copy: "Copy email", copied: "Copied",
    available: "Available immediately", view: "Preview profile",
    facts: "Key facts",
    rec: "Recommendation", readFull: "Read the full recommendation", showLess: "Show less",
    boardTitle: "My work", boardHint: "Three views of my work. Select a tab to switch.",
    tabs: { experience: ["Experience", "Roles and timeline"], projects: ["Projects", "Shipped games and client work"], skills: ["Skills", "How I work and tools"] },
    next: "Next", prev: "Previous",
    timelineHint: "Select a milestone to see the details.", education: "Education", also: "Also",
    howIWork: "How I work: my approach", tools: "Tools", toolsNote: "Tools I use daily, with a high level of proficiency.",
    caseStudy: "Case study", steam: "View on Steam", trailer: "Watch the release trailer (2025)", visit: "Visit website",
    clients: "Some of the clients I worked with",
    contactTitle: "Get in touch", lookingFor: "What I'm looking for", based: "Location", linkedin: "LinkedIn", email: "Email", availability: "Availability",
    beyondTitle: "Beyond work", beyondLead: "Personal projects, for anyone who wants to know me better. Select a bar to expand it.",
    interests: "Interests", back: "Back to top", milestone: "milestone",
    seeProject: "See the project", seeCase: "See the case study", menu: "Contact options", whatIChanged: "What I changed", keyContrib: "Key contributions", launchDate: "23 April 2025",
  },
  es: {
    nav: [["experience", "Experiencia"], ["projects", "Proyectos"], ["skills", "Competencias"], ["contact", "Contacto"], ["beyond", "Fuera del trabajo"]],
    contactMe: "Contactar", emailMe: "Enviar un email", cv: "Descargar CV", copy: "Copiar email", copied: "Copiado",
    available: "Incorporación inmediata", view: "Previsualizar perfil",
    facts: "Datos clave",
    rec: "Recomendación", readFull: "Leer la recomendación completa", showLess: "Mostrar menos",
    boardTitle: "Mi trabajo", boardHint: "Tres vistas de mi trabajo. Selecciona una pestaña para cambiar.",
    tabs: { experience: ["Experiencia", "Puestos y cronología"], projects: ["Proyectos", "Juegos publicados y trabajo con clientes"], skills: ["Competencias", "Cómo trabajo y herramientas"] },
    next: "Siguiente", prev: "Anterior",
    timelineHint: "Selecciona un hito para ver el detalle.", education: "Formación", also: "Además",
    howIWork: "Cómo trabajo: mi forma de entender el puesto", tools: "Herramientas", toolsNote: "Herramientas que uso a diario, con un dominio alto.",
    caseStudy: "Caso de estudio", steam: "Ver en Steam", trailer: "Ver el tráiler de lanzamiento (2025)", visit: "Visitar la web",
    clients: "Algunos de los clientes con los que trabajé",
    contactTitle: "Contacto", lookingFor: "¿Qué busco?", based: "Ubicación", linkedin: "LinkedIn", email: "Email", availability: "Disponibilidad",
    beyondTitle: "Fuera del trabajo", beyondLead: "Proyectos personales, para quien quiera conocerme un poco más. Selecciona una barra para desplegarla.",
    interests: "Intereses", back: "Volver arriba", milestone: "hito",
    seeProject: "Ver el proyecto", seeCase: "Ver el caso de estudio", menu: "Opciones de contacto", whatIChanged: "Qué cambié", keyContrib: "Contribuciones clave", launchDate: "23 de abril de 2025",
  },
};

/* ---------- key facts (shown at the top, visible without clicking) ---------- */
const FACTS = {
  en: [
    ["Availability", "Immediate"],
    ["Location", "Madrid, Spain · open to relocation, including abroad"],
    ["Remote work", "Experienced working remotely · CET (±3 h)"],
    ["Languages", "Spanish (native) · English (fluent)"],
    ["Education", "Master's in Production Management for Animation, VFX and Video Games · U-TAD (2023)"],
  ],
  es: [
    ["Disponibilidad", "Inmediata"],
    ["Ubicación", "Madrid, España · disponible para trasladarme, también al extranjero"],
    ["Trabajo en remoto", "Experiencia trabajando en remoto · CET (±3 h)"],
    ["Idiomas", "Español (nativo) · Inglés (fluido)"],
    ["Formación", "Máster en Dirección de Producción para Animación, VFX y Videojuegos · U-TAD (2023)"],
  ],
};

const TOOLS = {
  en: [["Tracking", ["Jira", "Mantis", "Trello", "Notion", "MS Project"]],
       ["Engines & art", ["Unity", "Unreal Engine", "Maya", "Perforce", "Adobe Suite"]],
       ["Office", ["Excel", "Google Suite"]]],
  es: [["Seguimiento", ["Jira", "Mantis", "Trello", "Notion", "MS Project"]],
       ["Motores y arte", ["Unity", "Unreal Engine", "Maya", "Perforce", "Adobe Suite"]],
       ["Ofimática", ["Excel", "Google Suite"]]],
};

/* ---------- roles (detail shown when a timeline row is selected) ---------- */
const ROLES = {
  fte: {
    en: { tag: "Studio", when: "11/2023 – 04/2025", title: "Associate Producer", place: "Flatter Than Earth · Once Upon a Puppet",
      mission: "A team of 30+ people, one roadmap everybody could read.",
      wins: ["Started and maintained the per-level asset tracker used by art, animation and design.",
        "Set content-lock priorities with every department and prioritised critical bugs daily with QA.",
        "Internal playtests, the external voiceover partner, 2D cutscene renders and onboarding of new hires."] },
    es: { tag: "Estudio", when: "11/2023 – 04/2025", title: "Productor Asociado", place: "Flatter Than Earth · Once Upon a Puppet",
      mission: "Un equipo de más de 30 personas y un roadmap que todos entendían.",
      wins: ["Creación y mantenimiento del tracker de assets por nivel que usaban arte, animación y diseño.",
        "Prioridades de content lock con cada departamento y priorización diaria de bugs críticos junto a QA.",
        "Playtests internos, gestión del partner externo de voiceover, renders de cinemáticas 2D e incorporación de nuevos miembros."] },
  },
  fteGen: {
    en: { tag: "Studio", when: "11/2023 – 04/2025", title: "Associate Producer", place: "Flatter Than Earth · Once Upon a Puppet",
      mission: "Coordinating a team of 30+ people at a US studio.",
      wins: ["Kept a large, multidisciplinary team aligned and informed.",
        "Built the roadmap, milestones and trackers the team relied on.",
        "Led daily stand-ups and reviews to unblock people fast."] },
    es: { tag: "Estudio", when: "11/2023 – 04/2025", title: "Productor Asociado", place: "Flatter Than Earth · Once Upon a Puppet",
      mission: "Coordinación de más de 30 personas en un estudio de EE. UU.",
      wins: ["Un equipo grande y multidisciplinar, siempre alineado e informado.",
        "Roadmap, hitos y trackers como base del trabajo diario del equipo.",
        "Daily stand-ups y reviews para resolver bloqueos con rapidez."] },
  },
  rumboGp: {
    en: { tag: "Client work", when: "12/2025 – 06/2026", title: "Project Manager – Content & Communication", place: "Rumbo Alternativo · clients such as Vithas, Mutua Madrileña and the Catalan Tourism Agency",
      mission: "Five client projects in seven months, up to three running at the same time.",
      wins: ["Turned client meetings into calendars, roadmaps and production sprints.",
        "Sourced translators, voice talent, video editors and 3D artists, comparing quotes for the best mix of cost, timeline and quality.",
        "Split the work into parallel batches, with a dedicated review pass before every delivery.",
        "Re-planned around delays caused by third parties, keeping the project clear at all times."] },
    es: { tag: "Clientes", when: "12/2025 – 06/2026", title: "Project Manager - Contenido y Comunicación", place: "Rumbo Alternativo · clientes como Vithas, Mutua Madrileña y la Agencia Catalana de Turismo, entre otros",
      mission: "Cinco proyectos de clientes en siete meses, con hasta tres a la vez.",
      wins: ["Reuniones con clientes traducidas en calendarios, roadmaps y sprints de producción.",
        "Selección de traductores, locutores, editores de vídeo y artistas 3D, comparando presupuestos para equilibrar coste, plazo y calidad.",
        "Trabajo organizado en bloques paralelos, con una fase de revisión dedicada antes de cada entrega.",
        "Replanificación ágil ante retrasos de terceros, con el proyecto siempre claro para todos."] },
  },
  rumboPm: {
    en: { tag: "Client work", when: "12/2025 – 06/2026", title: "Project Manager – Content & Communication", place: "Rumbo Alternativo · clients such as Vithas, Mutua Madrileña and the Catalan Tourism Agency",
      mission: "Five corporate and institutional projects, from the first brief to the final handoff, up to three at once.",
      wins: ["Translated client needs into clear plans, schedules, milestones and priorities.",
        "Assembled freelance teams of up to seven specialists in design, translation, video editing and 3D, depending on what each project needed.",
        "Ran phases in parallel so design, content and review never waited on each other.",
        "Kept budgets, vendors and mid-project changes under control, and everyone aligned until the end."] },
    es: { tag: "Clientes", when: "12/2025 – 06/2026", title: "Project Manager - Contenido y Comunicación", place: "Rumbo Alternativo · clientes como Vithas, Mutua Madrileña y la Agencia Catalana de Turismo, entre otros",
      mission: "Cinco proyectos corporativos e institucionales, del primer briefing a la entrega final, con hasta tres a la vez.",
      wins: ["Necesidades del cliente convertidas en planes, calendarios, hitos y prioridades claras.",
        "Equipos freelance de hasta siete especialistas en diseño, traducción, edición audiovisual y 3D, formados según lo que pedía cada proyecto.",
        "Fases organizadas en paralelo para que diseño, contenidos y revisión no se esperaran entre sí.",
        "Control de presupuestos, proveedores y cambios durante la producción, con clientes y equipo alineados hasta el final."] },
  },
  rumboGen: {
    en: { tag: "Client work", when: "12/2025 – 06/2026", title: "Project Manager – Content & Communication", place: "Rumbo Alternativo · clients such as Vithas, Mutua Madrileña and the Catalan Tourism Agency",
      mission: "Communication and content projects for corporate clients.",
      wins: ["Managed projects end to end, from the first brief to final delivery.",
        "Coordinated freelancers and external vendors, keeping budgets, deadlines and priorities in check."] },
    es: { tag: "Clientes", when: "12/2025 – 06/2026", title: "Project Manager - Contenido y Comunicación", place: "Rumbo Alternativo · clientes como Vithas, Mutua Madrileña y la Agencia Catalana de Turismo, entre otros",
      mission: "Proyectos de comunicación y contenido para clientes corporativos.",
      wins: ["Gestión integral de proyectos, desde el primer briefing hasta la entrega final.",
        "Coordinación de freelancers y proveedores externos, con control de presupuestos, plazos y prioridades."] },
  },
  dairus: {
    en: { tag: "Internship", when: "04/2021 – 07/2021", title: "Scrum Master Intern", place: "Dairus, Spain",
      mission: "My first taste of production: a 12-person team making a corporate video entirely in 3D.",
      wins: ["Built roadmaps, breakdowns and trackers.",
        "Ran two-week Agile sprints with weekly reports and risk analysis.",
        "Also pitched in as a 3D generalist: animation, modeling, shading and rendering."] },
    es: { tag: "Prácticas", when: "04/2021 – 07/2021", title: "Scrum Master (Prácticas)", place: "Dairus, España",
      mission: "Primer contacto con la producción: un equipo de 12 personas en un vídeo corporativo realizado íntegramente en 3D.",
      wins: ["Elaboración de roadmaps, breakdowns y trackers para organizar la producción.",
        "Gestión de sprints Agile de dos semanas, con informes semanales y análisis de riesgos.",
        "Apoyo como generalista 3D en animación, modelado, shading y render."] },
  },
  dairusPm: {
    en: { tag: "Internship", when: "04/2021 – 07/2021", title: "Scrum Master Intern", place: "Dairus, Spain",
      mission: "Where I learned Agile on the job, leading a 12-person team on a corporate 3D video.",
      wins: ["Planned and oversaw production with roadmaps, breakdowns and trackers.",
        "Assigned and followed tasks in two-week sprints, with weekly reports and risk analysis."] },
    es: { tag: "Prácticas", when: "04/2021 – 07/2021", title: "Scrum Master (Prácticas)", place: "Dairus, España",
      mission: "Agile aprendido sobre el terreno, al frente de un equipo de 12 personas en un vídeo corporativo 3D.",
      wins: ["Planificación y supervisión de la producción mediante roadmaps, breakdowns y trackers.",
        "Asignación y seguimiento de tareas en sprints de dos semanas, con informes semanales y análisis de riesgos."] },
  },
  hoi: {
    en: { tag: "Academic", when: "04/2022 – 01/2023", title: "Producer · Howl of Iron (Vertical Slice)", place: "16 Gears · U-TAD, Madrid",
      mission: "A student team, a real production, a prize.",
      wins: ["Produced a vertical slice with a multidisciplinary team of U-TAD students.",
        "Planned it in Excel and MS Project, and sent weekly progress and risk reports to our faculty advisors.",
        "Won Best Game Design at PlayStation Talents (2022), and the game was later released on Steam."] },
    es: { tag: "Académico", when: "04/2022 – 01/2023", title: "Productor · Howl of Iron (Vertical Slice)", place: "16 Gears · U-TAD, Madrid",
      mission: "Un equipo de estudiantes, una producción real y un premio.",
      wins: ["Producción de un vertical slice con un equipo multidisciplinar de estudiantes de U-TAD.",
        "Planificación en Excel y MS Project, con informes semanales de progreso y riesgos para los tutores.",
        "Premio Best Game Design en PlayStation Talents (2022) y posterior publicación en Steam."] },
  },
  eci: {
    en: { tag: "Public-facing", when: "10/2025 – 01/2026", title: "Sales Associate (Christmas Campaign)", place: "El Corte Inglés, Madrid",
      mission: "Busy floor, happy customers.",
      wins: ["Kept my section organised: restocked and well presented through the Christmas campaign.",
        "Advised customers one to one, finding the best option for what they needed.",
        "Handled checkout accurately and kept service quick in the busiest hours."] },
    es: { tag: "Cara al público", when: "10/2025 – 01/2026", title: "Dependiente de Ventas (Campaña de Navidad)", place: "El Corte Inglés, Madrid",
      mission: "Mucha afluencia y clientes bien atendidos.",
      wins: ["Sección siempre ordenada, repuesta y bien presentada durante toda la campaña de Navidad.",
        "Atención y asesoramiento personalizado para encontrar la mejor opción para cada cliente.",
        "Cobros precisos y servicio ágil en las horas de mayor afluencia."] },
  },
  events: {
    en: { tag: "Public-facing", when: "Ongoing, occasional", title: "Event Host / Hostess", place: "Various agencies — mainly IFEMA, Madrid",
      mission: "Trade fairs and events, welcoming people all day.",
      wins: ["Informed attendees and answered questions, pointing visitors the right way.",
        "Watched access points and capacity, working with the team so everything ran smoothly."] },
    es: { tag: "Cara al público", when: "Colaboraciones puntuales", title: "Azafato de Eventos", place: "Diversas agencias — principalmente IFEMA, Madrid",
      mission: "Ferias y eventos, atendiendo al público durante toda la jornada.",
      wins: ["Atención e información a los asistentes, resolviendo dudas y orientando a los visitantes.",
        "Control de accesos y aforo en coordinación con el equipo para que todo fluyera."] },
  },
};

/* ---------- professional roadmap: key milestones, in order, not to scale ---------- */
const MILESTONES = [
  { id: "edu1", kind: "edu", date: "2019 – 2021", title: { en: "Higher Technical Degree", es: "Técnico Superior" }, org: "U-TAD",
    line: { en: "3D Animation, Video Games and Interactive Media", es: "Animación 3D, Videojuegos y Entornos Interactivos" },
    detail: { en: ["Higher Technical Degree in 3D Animation, Video Games and Interactive Media", "U-TAD, Madrid · 09/2019 – 07/2021", "Where I grew into a 3D generalist, learning the animation and art workflow along with a solid technical foundation."],
              es: ["Técnico Superior en Animación 3D, Videojuegos y Entornos Interactivos", "U-TAD, Madrid · 09/2019 – 07/2021", "Aquí me consolidé como generalista 3D, aprendiendo el flujo de trabajo de animación y arte, además de una base técnica sólida."] } },
  { id: "dairus", kind: "work", date: "2021", title: { en: "Scrum Master Intern", es: "Scrum Master (Prácticas)" }, org: "Dairus",
    line: { en: "First production role", es: "Primer puesto de producción" } },
  { id: "hoi", kind: "game", date: "2022", title: { en: "Producer · Howl of Iron", es: "Productor · Howl of Iron" }, org: "16 Gears · U-TAD",
    line: { en: "Best Game Design, PlayStation Talents", es: "Best Game Design, PlayStation Talents" } },
  { id: "edu2", kind: "edu", date: "2021 – 2023", title: { en: "Master's degree", es: "Máster" }, org: "U-TAD",
    line: { en: "Production Management for Animation, VFX and Video Games", es: "Dirección de Producción para Animación, VFX y Videojuegos" },
    detail: { en: ["Master's in Production Management for Animation, VFX and Video Games", "U-TAD, Madrid · 09/2021 – 07/2023", "This master's turned me into a producer for video games, VFX and animation. I produced Howl of Iron as the project's producer and completed my master's thesis (TFM), which was very well rated."],
              es: ["Máster en Dirección de Producción para Animación, VFX y Videojuegos", "U-TAD, Madrid · 09/2021 – 07/2023", "Con este máster me convertí en productor de videojuegos, VFX y animación. Desarrollé Howl of Iron como productor del proyecto y completé mi TFM con una muy buena valoración."] } },
  { id: "fte", kind: "work", date: "2023 – 2025", title: { en: "Associate Producer", es: "Productor Asociado" }, org: "Flatter Than Earth",
    line: { en: "US studio, working remotely", es: "Estudio de EE. UU., en remoto" } },
  { id: "launch", kind: "game", date: "2025", title: { en: "Once Upon a Puppet ships", es: "Sale Once Upon a Puppet" }, org: "PC · PS5 · Xbox Series X|S",
    line: { en: "Silver Hall of Fame, Weekly Famitsu", es: "Silver Hall of Fame, Weekly Famitsu" } },
  { id: "eci", kind: "work", only: ["gen"], date: "2025", title: { en: "Sales Associate", es: "Dependiente de Ventas" }, org: "El Corte Inglés",
    line: { en: "Christmas campaign", es: "Campaña de Navidad" } },
  { id: "rumbo", kind: "work", date: "2025 – 2026", title: { en: "Project Manager", es: "Project Manager" }, org: "Rumbo Alternativo",
    line: { en: "5 client projects in 7 months", es: "5 proyectos de clientes en 7 meses" } },
];
const MILESTONE_KINDS = { en: { work: "Work", game: "Game", edu: "Education" }, es: { work: "Trabajo", game: "Videojuego", edu: "Formación" } };

/* ---------- games and client work ---------- */
const GAMES = {
  oup: { title: "Once Upon a Puppet", studio: "Flatter Than Earth", when: "11/2023 – 04/2025",
    art: "https://cdn.akamai.steamstatic.com/steam/apps/1904880/header.jpg",
    steam: "https://store.steampowered.com/app/1904880/Once_Upon_A_Puppet/",
    trailer: "https://www.youtube.com/watch?v=H8T3nWNHMK0", // official release trailer, Daedalic Entertainment (publisher)
    awardImg: "img/award-famitsu-silver.png",
    role: { en: "Associate Producer", es: "Productor Asociado" },
    award: { en: "Silver Hall of Fame · Weekly Famitsu (2025)", es: "Silver Hall of Fame · Weekly Famitsu (2025)" },
    shipped: { en: "Released on 23 April 2025 for PC, PlayStation 5 and Xbox Series X|S.", es: "Publicado el 23 de abril de 2025 en PC, PlayStation 5 y Xbox Series X|S." } },
  hoi: { title: "Howl of Iron", studio: "16 Gears · U-TAD", when: "04/2022 – 01/2023",
    art: "https://cdn.akamai.steamstatic.com/steam/apps/2235790/header.jpg",
    steam: "https://store.steampowered.com/app/2235790/Howl_of_Iron/",
    awardImg: "img/award-best-game-design.png",
    role: { en: "Producer", es: "Productor" },
    award: { en: "Best Game Design · PlayStation Talents (2022)", es: "Best Game Design · PlayStation Talents (2022)" },
    shipped: { en: "Vertical slice built by U-TAD students, released on Steam in January 2023.", es: "Vertical slice creado por estudiantes de U-TAD, publicado en Steam en enero de 2023." } },
};

const CASE = {
  en: {
    challenge: ["The challenge", "A team of 30+ people across art, design, tech, animation, VFX, cutscenes, UI/UX, audio, QA and more, a roadmap that kept slipping, and a content lock ahead: once a level was closed, it could not be reopened."],
    changes: [
      ["A tracker for every asset", "I started a per-level tracker with the status, documentation and location of each asset. Art used it to give each piece to the right specialist; design used it to plan interactions and triggers and to review each asset at two checkpoints before final sign-off. It became the reference for the rest of production, and I kept it up to date as the bridge between both teams."],
      ["Content-lock priorities", "With the leads, we sorted every department's tasks into mandatory, important and nice-to-have, each with a minimum quality bar set by its lead, so all departments could close levels together."],
      ["Planning ahead with art", "Close daily follow-up let me see delays coming and re-plan with the other departments before they turned into blockers."],
      ["Internal playtests", "I set up internal playtest sessions so the whole team knew the game and each department saw the others' work. We also used them to find bugs: I logged each one in Mantis myself for later triage."],
      ["Voiceover partner", "I compared five vendors, negotiated a better price and kept the recording on schedule."],
    ],
    result: ["The result", ["Art reached content lock on time and with room to spare: they reviewed the levels and added nice-to-have content that was not required for release.", "Content lock closed smoothly, with every department working to the same priorities and quality bars.", "The asset tracker became the reference for art, animation and design until the end of production.", "Voiceover, an external partner and always a risk, delivered the feedback passes, the new material and the adjustments we asked for, within budget and on schedule.", "The game shipped on 23 April 2025 for PC, PlayStation 5 and Xbox Series X|S."]],
    contributions: ["Integration of all assets", "Content-lock priorities for every department", "Internal playtest sessions", "2D cutscene passes and renders", "External voiceover management", "Critical and major bug prioritisation with QA"],
  },
  es: {
    challenge: ["El reto", "Un equipo de más de 30 personas entre arte, diseño, tecnología, animación, VFX, cinemáticas, UI/UX, audio, QA y otras áreas, un roadmap que se retrasaba una y otra vez y un content lock por delante: un nivel cerrado ya no se podía reabrir."],
    changes: [
      ["Un tracker para cada asset", "Creación de un tracker por niveles con el estado, la documentación y la ubicación de cada asset. Arte lo usaba para asignar cada pieza al especialista adecuado; diseño, para planificar interacciones y triggers y revisar cada asset en dos puntos antes de la validación final. Se convirtió en la referencia del resto de la producción, y me encargué de mantenerlo al día como puente entre ambos equipos."],
      ["Prioridades para el content lock", "Clasificación, junto a los leads, de las tareas de cada departamento en obligatorias, importantes y nice-to-have, cada una con un mínimo de calidad fijado por su lead, para que todos cerraran los niveles a la vez."],
      ["Anticipación con arte", "Un seguimiento diario e intensivo para ver venir los retrasos y replanificar con el resto de departamentos antes de que se convirtieran en bloqueos."],
      ["Playtests internos", "Sesiones de playtesting internas para que todo el equipo conociera el juego y cada departamento viera el trabajo de los demás. También servían para encontrar bugs, que yo mismo registraba en Mantis para su posterior triaje."],
      ["Partner de voiceover", "Comparativa de cinco proveedores, negociación de un precio mejor y grabación dentro de plazo."],
    ],
    result: ["El resultado", ["Arte llegó al content lock a tiempo y con margen: revisó los niveles y añadió contenido nice-to-have que no era obligatorio para el lanzamiento.", "El content lock se cerró sin sobresaltos, con todos los departamentos trabajando con las mismas prioridades y mínimos de calidad.", "El tracker de assets fue la referencia de arte, animación y diseño hasta el final de la producción.", "El voiceover, un partner externo y siempre un riesgo, entregó los pases de feedback, el material nuevo y los ajustes que pedimos, dentro del presupuesto y del plazo.", "El juego salió el 23 de abril de 2025 en PC, PlayStation 5 y Xbox Series X|S."]],
    contributions: ["Integración de todos los assets", "Prioridades de content lock para cada departamento", "Sesiones de playtesting internas", "Pases y renders de cinemáticas 2D", "Gestión del voiceover externo", "Priorización de bugs críticos y mayores con QA"],
  },
};

/* Client work card (Project Manager and General variants). Only the clients Luis named. */
const RUMBO = {
  url: "https://www.rumboalternativo.com/",
  en: { title: "Rumbo Alternativo", sub: "Internal communication studio · Project Manager – Content & Communication · 12/2025 – 06/2026",
    lead: "Five communication, editorial and multimedia projects for corporate and institutional clients, each managed from the first brief to the final delivery, with up to three running at the same time.",
    points: ["Client needs turned into plans, timelines and milestones the team could follow.",
      "Freelance teams of up to seven specialists in design, translation, video editing and 3D.",
      "A dedicated review pass against brand and client requirements before every delivery."],
    clients: ["Vithas", "Mutua Madrileña", "Catalan Tourism Agency"] },
  es: { title: "Rumbo Alternativo", sub: "Estudio de comunicación interna · Project Manager - Contenido y Comunicación · 12/2025 – 06/2026",
    lead: "Cinco proyectos de comunicación, editoriales y multimedia para clientes corporativos e institucionales, gestionados desde el primer briefing hasta la entrega final, con hasta tres en marcha a la vez.",
    points: ["Necesidades del cliente convertidas en planes, calendarios e hitos que el equipo podía seguir.",
      "Equipos freelance de hasta siete especialistas en diseño, traducción, edición audiovisual y 3D.",
      "Una fase de revisión dedicada, frente a los requisitos de marca y del cliente, antes de cada entrega."],
    clients: ["Vithas", "Mutua Madrileña", "Agencia Catalana de Turismo"] },
};

/* LinkedIn recommendation: quoted literally (original in English, never translated). */
const RECOMMENDATION = {
  excerpt: "He was a key part of the production team, helping to manage task tracking, timelines, roadmaps, and team coordination.",
  text: "I had the pleasure of working with Luis as an Associate Producer at Flatter Than Earth on Once Upon a Puppet. He was a key part of the production team, helping to manage task tracking, timelines, roadmaps, and team coordination. His organizational skills and attention to detail were a great asset to the project. He consistently brought a positive and proactive attitude to every challenge, making collaboration easy and effective. A reliable and dedicated team member. I hope the future offers us the opportunity to share a project again.",
  name: "Almudena Sierra",
  role: { en: "Senior Producer at Flatter Than Earth · supervised Luis directly", es: "Senior Producer en Flatter Than Earth · supervisó directamente a Luis" },
  source: { en: "LinkedIn recommendation · 15 April 2025", es: "Recomendación en LinkedIn · 15 de abril de 2025 · original en inglés" },
};

/* ---------- the three variants ---------- */
const PROFILES = {
  gp: {
    cv: { en: "cv/Luis_Rodriguez_CV_GameProducer_EN.pdf", es: "cv/Luis_Rodriguez_CV_GameProducer_ES.pdf" },
    roles: { fte: "fte", rumbo: "rumboGp", dairus: "dairus", hoi: "hoi" }, firstRole: "fte",
    projects: ["oup", "hoi"],
    en: {
      tab: "Game Producer", role: "Game Producer",
      headline: "I keep people, priorities and deadlines <mark>on the same page</mark>, so creative teams can focus on making <em>great games</em>.",
      intro: "Associate Producer on Once Upon a Puppet, a 2025 release from a US studio that won the Silver Hall of Fame award from Japan's Weekly Famitsu magazine. I keep art, design, tech, animation, VFX, cutscenes, UI, audio, QA and more working as one team, and I see blockers coming before they reach the schedule.",
      seeking: "Open to junior and associate producer roles",
      figures: [["30+", "people on one team"], ["2+ years", "in production"], ["PC · PS5 · Xbox", "shipped title (2025)"], ["2", "award-winning games"]],
      pillars: [["Communication comes first", "Most production problems start with a message that never arrived: people who don't know what their teammates are working on, or a department still waiting for work that was finished long ago. I build clear channels between departments and inside them, so everyone knows what is done, what comes next and who to ask."],
                ["The producer clears the way", "Something experienced producers repeated throughout my training: the producer is the person who makes everyone else's work easier. I see my role as removing obstacles, not adding process."],
                ["Clear priorities, always a next step", "Everyone should know what matters most right now and what comes after it, so a finished task or an unexpected blocker never leaves anyone without direction."],
                ["People first", "Games are made by people. I care about how the team is doing, I want people to feel they can come to me, and I believe a team that feels heard works better and delivers better."]],
      wanted: "Junior and associate producer roles at studios of any size: I adapt to the needs and the scale of each team. I love a challenge, I tackle it with optimism, and I want to keep growing and learning surrounded by great people.",
      interests: ["Cinema, literature and opera", "Astronomy", "Board and video games"],
    },
    es: {
      tab: "Productor de videojuegos", role: "Productor de videojuegos",
      headline: "Mantengo a personas, prioridades y plazos <mark>alineados</mark> para que los equipos creativos puedan centrarse en hacer <em>grandes juegos</em>.",
      intro: "Productor Asociado en Once Upon a Puppet, un juego de un estudio estadounidense publicado en 2025 y galardonado con el premio Silver Hall of Fame de la revista japonesa Weekly Famitsu. Mi trabajo es que arte, diseño, tecnología, animación, VFX, cinemáticas, UI, audio, QA y el resto de áreas avancen como un solo equipo, anticipándome a los bloqueos antes de que afecten al calendario.",
      seeking: "Abierto a puestos de productor junior y associate producer",
      figures: [["30+", "personas en un equipo"], ["2+ años", "en producción"], ["PC · PS5 · Xbox", "juego publicado (2025)"], ["2", "juegos premiados"]],
      pillars: [["La comunicación, lo primero", "La mayoría de los problemas de una producción empiezan con un mensaje que no llegó: personas que no saben en qué trabaja su compañero, o un departamento que sigue esperando algo que se terminó hace tiempo. Creo canales claros entre departamentos y dentro de ellos, para que todos sepan qué está hecho, qué viene después y a quién preguntar."],
                ["El productor facilita el camino", "Algo que productores con mucha experiencia repetían durante mi formación: el productor es quien facilita el trabajo de los demás. Entiendo mi papel como quitar obstáculos, no como añadir procesos."],
                ["Prioridades claras y siempre un siguiente paso", "Cada persona debe saber qué es lo más importante ahora y qué viene después, para que una tarea terminada o un bloqueo inesperado nunca la deje sin dirección."],
                ["Las personas primero", "Los juegos los hacen personas. Me importa cómo está el equipo, quiero que sientan que pueden acudir a mí, y creo que un equipo que se siente escuchado trabaja mejor y entrega mejor."]],
      wanted: "Puestos de productor junior y associate producer en estudios de cualquier tamaño: me adapto a las necesidades y a la escala de cada equipo. Me gustan los retos, afrontarlos con optimismo, y seguir creciendo y aprendiendo rodeado de gente maravillosa.",
      interests: ["Cine, literatura y ópera", "Astronomía", "Juegos de mesa y videojuegos"],
    },
  },
  pm: {
    cv: { en: "cv/Luis_Rodriguez_CV_ProjectManager_EN.pdf", es: "cv/Luis_Rodriguez_CV_ProjectManager_ES.pdf" },
    roles: { fte: "fte", rumbo: "rumboPm", dairus: "dairusPm", hoi: "hoi" }, firstRole: "rumbo",
    projects: ["rumbo", "oup"],
    en: {
      tab: "Project Manager", role: "Project Manager",
      headline: "Clear plans, aligned clients, <mark>teams that know what's next</mark>.",
      intro: "I've managed content projects for healthcare, insurance and tourism clients, and coordinated multidisciplinary teams on a shipped video game. I like being the bridge between departments, in Spanish and in English.",
      seeking: "Open to project management roles",
      figures: [["30+", "people led"], ["5", "client projects in 7 months"], ["2+ years", "in production"], ["3", "client sectors: healthcare, insurance, tourism"]],
      pillars: [["Communication comes first", "Most project problems start with a message that never arrived, between client and team, between departments or inside the same team. I build clear channels so everyone knows what is done, what comes next and who to ask."],
                ["A project manager clears the way", "Something experienced producers repeated throughout my training: the person managing a project is the one who makes everyone else's work easier. I see my role as removing obstacles, not adding process."],
                ["Clear priorities, always a next step", "Everyone should know what matters most right now and what comes after it, from the first brief to the final delivery."],
                ["People first", "Projects are delivered by people. I care about how the team is doing, I want people to feel they can come to me, and I believe a team that feels heard works better and delivers better."]],
      wanted: "Project management roles in creative, digital or technology companies. I love a challenge, I tackle it with optimism, and I want to keep growing and learning surrounded by great people.",
      interests: ["Cinema, literature and opera", "Astronomy", "Board and video games"],
    },
    es: {
      tab: "Project Manager", role: "Project Manager · Gestión de Proyectos",
      headline: "Planes claros, clientes alineados y <mark>equipos que saben qué toca</mark>.",
      intro: "He gestionado proyectos de contenido para clientes de salud, seguros y turismo, y he coordinado equipos multidisciplinares en un videojuego publicado. Me gusta ser el puente entre departamentos, en español y en inglés.",
      seeking: "Abierto a puestos de gestión de proyectos",
      figures: [["30+", "personas lideradas"], ["5", "proyectos de clientes en 7 meses"], ["2+ años", "en producción"], ["3", "sectores de clientes: salud, seguros, turismo"]],
      pillars: [["La comunicación, lo primero", "La mayoría de los problemas de un proyecto empiezan con un mensaje que no llegó: entre cliente y equipo, entre departamentos o dentro del mismo equipo. Creo canales claros para que todos sepan qué está hecho, qué viene después y a quién preguntar."],
                ["Quien gestiona facilita el camino", "Algo que productores con mucha experiencia repetían durante mi formación: quien gestiona un proyecto es quien facilita el trabajo de los demás. Entiendo mi papel como quitar obstáculos, no como añadir procesos."],
                ["Prioridades claras y siempre un siguiente paso", "Cada persona debe saber qué es lo más importante ahora y qué viene después, desde el primer briefing hasta la entrega final."],
                ["Las personas primero", "Los proyectos los sacan adelante personas. Me importa cómo está el equipo, quiero que sientan que pueden acudir a mí, y creo que un equipo que se siente escuchado trabaja mejor y entrega mejor."]],
      wanted: "Puestos de gestión de proyectos en empresas creativas, digitales o tecnológicas. Me gustan los retos, afrontarlos con optimismo, y seguir creciendo y aprendiendo rodeado de gente maravillosa.",
      interests: ["Cine, literatura y ópera", "Astronomía", "Juegos de mesa y videojuegos"],
    },
  },
  gen: {
    cv: { en: "cv/Luis_Rodriguez_CV_General_EN.pdf", es: "cv/Luis_Rodriguez_CV_General_ES.pdf" },
    roles: { fte: "fteGen", rumbo: "rumboGen", dairus: "dairus", hoi: "hoi", eci: "eci" }, firstRole: "rumbo",
    extraRoles: ["events"],
    projects: ["rumbo", "oup", "public"],
    en: {
      tab: "General", role: "Project Coordination · Sales · Administration",
      headline: "Organised, calm under pressure, <mark>good with people</mark>.",
      intro: "Project manager for corporate clients such as Vithas and Mutua Madrileña, Associate Producer on a video game shipped worldwide, and hands-on experience with the public in retail and at trade fairs. Organised, clear when I communicate and comfortable in busy environments.",
      seeking: "Open to new roles",
      figures: [["2+ years", "in production"], ["30+", "people coordinated"], ["2", "public-facing roles: retail and events"], ["2", "languages: Spanish and English"]],
      pillars: [["Communication comes first", "Clear, friendly communication with customers and with my team is what keeps a busy day running smoothly."],
                ["Listen", "Finding out what people really need to offer them the best option."],
                ["Organise", "Tidy sections, steady stock and clear flows at busy events."],
                ["People first", "I care about the people I serve and the people I work with, and I want both to leave with a good experience."]],
      wanted: "Roles where organisation and working with people make the difference. I love a challenge, I tackle it with optimism, and I want to keep growing and learning surrounded by great people.",
      interests: ["Horror movies", "Astronomy", "Opera & Zarzuela", "Video games", "Science fiction"],
    },
    es: {
      tab: "General", role: "Gestión de proyectos · Ventas · Administración",
      headline: "Organizado, tranquilo bajo presión y <mark>bueno con las personas</mark>.",
      intro: "Gestión de proyectos para clientes corporativos como Vithas y Mutua Madrileña, producción de un videojuego publicado en todo el mundo y experiencia directa con el público en tienda y en ferias. Organizado, claro al comunicar y cómodo en entornos con mucha actividad.",
      seeking: "Abierto a nuevas oportunidades",
      figures: [["2+ años", "en producción"], ["30+", "personas coordinadas"], ["2", "puestos de cara al público: tienda y eventos"], ["2", "idiomas: español e inglés"]],
      pillars: [["La comunicación, lo primero", "Una comunicación clara y cercana con los clientes y con mi equipo es lo que mantiene en marcha un día con mucha afluencia."],
                ["Escuchar", "Descubrir lo que cada persona necesita de verdad para ofrecerle la mejor opción."],
                ["Organizar", "Secciones ordenadas, reposición constante y flujos claros en eventos con mucha gente."],
                ["Las personas primero", "Me importan las personas a las que atiendo y con las que trabajo, y quiero que ambas se lleven una buena experiencia."]],
      wanted: "Puestos en los que la organización y el trato con las personas marquen la diferencia. Me gustan los retos, afrontarlos con optimismo, y seguir creciendo y aprendiendo rodeado de gente maravillosa.",
      interests: ["Cine, literatura y ópera", "Astronomía", "Juegos de mesa y videojuegos"],
    },
  },
};

/* ---------- beyond work (personal, after contact) ---------- */
const LINKS = {
  duneverso: "https://duneverso.com/",
  youtube: "https://www.youtube.com/@duneverso",
  reset: "https://www.youtube.com/watch?v=Zf2iSqX83hg",
  retro: "https://www.youtube.com/watch?v=FiSoESm2KEM",
  cosmozarza: "https://www.instagram.com/cosmozarza",
};

const DUNE = {
  en: {
    bar: "Spanish-language Dune community · Head of Dune Gaming · host of El Reset",
    lead: "A non-profit cultural association that celebrates and spreads the Dune universe in Spanish, in every medium. As Head of Dune Gaming I lead everything about video games, and the events around them.",
    role: "Head of Dune Gaming for about a year and a half. We keep growing the team and bringing fresh, creative ways to talk about games and enjoy them together.",
    numbers: [["6,000+", "YouTube subscribers"], ["~600", "Discord members"], ["~50", "contributors"]],
    shows: [
      { t: "El Reset", tag: "Video podcast · Dune Awakening", d: "My video podcast about Dune Awakening, the survival MMO set on Arrakis. I created it and I host it on the Duneverso YouTube channel.", img: "img/el-reset-ep6.jpg", link: LINKS.reset, watch: "Watch episode 6" },
      { t: "Dune Retro Gaming", tag: "Live show", d: "A live show about classic Dune games. Episode 1 is about Dune II.", img: "img/dune-retro-gaming.jpg", link: LINKS.retro, watch: "Watch episode 1" },
    ],
    more: "I also run community events and contests on Discord and in-game role-play sessions. The association runs in-person events and translates novels that never reached Spanish.",
    builds: [
      { t: "Omnius Protocol", tag: "In development", d: "A Dune-inspired resource-management strategy game: an Age of Empires-style economy with a Pokémon-like look.", img: "img/omnius-arrakis.png" },
      { t: "Mini Omnius", tag: "Desktop pet", d: "A pixel-art eye that wanders your Windows desktop: Dune and general-knowledge facts, a quiz, timers, weather and sunset time. One file, no install.", img: "img/mini-omnius.png" },
    ],
    visit: "Visit Duneverso", yt: "YouTube channel",
  },
  es: {
    bar: "Comunidad de Dune en español · Responsable de Dune Gaming · presentador de El Reset",
    lead: "Una asociación cultural sin ánimo de lucro que celebra y divulga el universo de Dune en español, en todos sus medios. Como responsable de Dune Gaming, dirijo todo lo relacionado con videojuegos y los eventos que giran en torno a ellos.",
    role: "Responsable de Dune Gaming desde hace año y medio. Seguimos ampliando el equipo y trayendo propuestas frescas y creativas para hablar de videojuegos y disfrutarlos en comunidad.",
    numbers: [["6.000+", "suscriptores en YouTube"], ["~600", "miembros en Discord"], ["~50", "divulgadores"]],
    shows: [
      { t: "El Reset", tag: "Videopodcast · Dune Awakening", d: "Mi videopodcast sobre Dune Awakening, el MMO de supervivencia ambientado en Arrakis. Lo he creado y lo presento en el canal de YouTube de Duneverso.", img: "img/el-reset-ep6.jpg", link: LINKS.reset, watch: "Ver el capítulo 6" },
      { t: "Dune Retro Gaming", tag: "Programa en directo", d: "Un programa en directo sobre los juegos clásicos de Dune. El episodio 1 trata sobre Dune II.", img: "img/dune-retro-gaming.jpg", link: LINKS.retro, watch: "Ver el episodio 1" },
    ],
    more: "También organizo eventos y concursos en Discord y sesiones de rol dentro del juego. La asociación organiza eventos presenciales y traduce novelas que no llegaron al castellano.",
    builds: [
      { t: "Omnius Protocol", tag: "En desarrollo", d: "Un juego de estrategia y gestión de recursos inspirado en Dune: una economía al estilo Age of Empires con estética tipo Pokémon.", img: "img/omnius-arrakis.png" },
      { t: "Mini Omnius", tag: "Mascota de escritorio", d: "Un ojo en pixel art que pasea por el escritorio de Windows: datos de Dune y de cultura general, un quiz, temporizadores, el tiempo y la hora del ocaso. Un solo archivo, sin instalar.", img: "img/mini-omnius.png" },
    ],
    visit: "Visitar Duneverso", yt: "Canal de YouTube",
  },
};

const COSMO = {
  en: {
    bar: "Zarzuela and science outreach · premiere at CosmoCaixa, March 2026",
    lead: "A young-audience project that mixes the outreach of zarzuela with the outreach of science.",
    role: "I am the team's zarzuela specialist, and I co-wrote part of the libretto, the dialogue and the songs.",
    premiere: "On 7 March 2026 we premiered La medición de un sueño, a one-act zarzuela, at CosmoCaixa in Barcelona. Our goal is to introduce young people to Spain's lyric genre and spark their interest in science, because the country has great researchers.",
    org: "Organised by MAGMA, the Associació per Promoure la Recerca Jove.",
    sintesTitle: "A tribute to Alicia Sintes",
    sintes: ["Theoretical physicist from Sant Lluís, Menorca (b. 1969), full professor at the University of the Balearic Islands.", "She leads the only Spanish group in the LIGO Scientific Collaboration from the start, which made the first detection of gravitational waves: the discovery recognised with the 2017 Nobel Prize in Physics, awarded to LIGO's founders. She attended the ceremony in Stockholm.", "The LIGO collaboration also shared the 2017 Princess of Asturias Award for Technical and Scientific Research and the 2016 Gruber Cosmology Prize."],
    follow: "Follow Cosmozarza",
  },
  es: {
    bar: "Divulgación de zarzuela y ciencia · estreno en CosmoCaixa, marzo de 2026",
    lead: "Un proyecto para el público joven que combina la divulgación de la zarzuela con la divulgación de la ciencia.",
    role: "Soy el especialista en zarzuela del equipo y he escrito parte del libreto, los diálogos y las canciones.",
    premiere: "El 7 de marzo de 2026 estrenamos La medición de un sueño, una zarzuela en un acto, en el CosmoCaixa de Barcelona. Queremos que los más jóvenes conozcan nuestro género lírico y se interesen por la ciencia, porque España cuenta con grandes investigadores.",
    org: "Organiza MAGMA, la Associació per Promoure la Recerca Jove.",
    sintesTitle: "Un homenaje a Alicia Sintes",
    sintes: ["Física teórica de Sant Lluís, Menorca (1969), catedrática de la Universitat de les Illes Balears.", "Dirige el único grupo español que participa desde el principio en la Colaboración Científica LIGO, autora de la primera detección de ondas gravitacionales: el descubrimiento reconocido con el Premio Nobel de Física de 2017, concedido a los fundadores de LIGO. Asistió a la ceremonia en Estocolmo.", "La colaboración LIGO compartió además el Premio Princesa de Asturias de Investigación Científica y Técnica 2017 y el Premio Gruber de Cosmología 2016."],
    follow: "Seguir a Cosmozarza",
  },
};

/* Kept in its original wording and language; author removed because the attribution is not verified. */
const QUOTE = "Ask yourself if what you're doing today is getting you closer to where you want to be tomorrow.";

/* ---------- right now (beyond work) ---------- */
const NOW = {
  en: { title: "Right now", lead: "What I'm playing, reading and listening to these days.", bar: "Playing Lies of P · reading Paul of Dune · listening to La traviata", items: [
    { kind: "Playing", t: "Lies of P", meta: "NEOWIZ · 2023", img: "img/now-lies-of-p.jpg", link: "https://store.steampowered.com/app/1627720/Lies_of_P/" },
    { kind: "Reading", t: "Paul of Dune", meta: "Brian Herbert & Kevin J. Anderson", img: "img/now-paul-of-dune.jpg" },
    { kind: "Listening to", t: "Invitato a qui seguirmi", meta: "La traviata (Verdi), Act II · Plácido Domingo & Ileana Cotrubas · Met, 1981", video: "DaC7NSDZxYI", thumb: "img/now-traviata.jpg" },
    { kind: "Last opera I saw", t: "Manon Lescaut", meta: "Puccini · Teatro Real, Madrid (2026)", link: "https://www.teatroreal.es/es/espectaculo/manon-lescaut" } ] },
  es: { title: "Ahora mismo", lead: "A qué juego, qué leo y qué escucho estos días.", bar: "Jugando a Lies of P · leyendo Paul de Dune · escuchando La traviata", items: [
    { kind: "Jugando", t: "Lies of P", meta: "NEOWIZ · 2023", img: "img/now-lies-of-p.jpg", link: "https://store.steampowered.com/app/1627720/Lies_of_P/" },
    { kind: "Leyendo", t: "Paul de Dune", meta: "Brian Herbert y Kevin J. Anderson", img: "img/now-paul-of-dune.jpg" },
    { kind: "Escuchando", t: "Invitato a qui seguirmi", meta: "La traviata (Verdi), acto II · Plácido Domingo e Ileana Cotrubas · Met, 1981", video: "DaC7NSDZxYI", thumb: "img/now-traviata.jpg" },
    { kind: "Última ópera vista", t: "Manon Lescaut", meta: "Puccini · Teatro Real, Madrid (2026)", link: "https://www.teatroreal.es/es/espectaculo/manon-lescaut" } ] },
};

/* Public-facing highlight (General variant, Projects tab) */
const PUBLIC = {
  en: { title: "Working with the public", sub: "Retail and events · Madrid",
    lead: "Alongside production, I have worked directly with customers and visitors, where quick judgement, patience and a friendly manner make the difference.",
    items: [["El Corte Inglés", "Sales Associate · Christmas campaign 2025", "Customer advice, checkout and keeping a busy section organised at peak times."],
            ["IFEMA and other agencies", "Event host · occasional", "Welcoming and guiding visitors at trade fairs, and managing access and capacity with the team."]],
    skills: ["Customer service", "Sales", "Cash handling", "Crowd and access control", "Spanish and English"] },
  es: { title: "Atención al público", sub: "Tienda y eventos · Madrid",
    lead: "Además de la producción, he trabajado en contacto directo con clientes y visitantes, donde marcan la diferencia el criterio rápido, la paciencia y el trato cercano.",
    items: [["El Corte Inglés", "Dependiente de Ventas · campaña de Navidad 2025", "Asesoramiento a clientes, cobro en caja y una sección ordenada en las horas de mayor afluencia."],
            ["IFEMA y otras agencias", "Azafato de eventos · colaboraciones puntuales", "Recepción y orientación de visitantes en ferias, y control de accesos y aforo junto al equipo."]],
    skills: ["Atención al cliente", "Ventas", "Gestión de caja", "Control de accesos y aforo", "Español e inglés"] },
};
