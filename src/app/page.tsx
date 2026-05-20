"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Code2,
  Download,
  ExternalLink,
  Languages,
  Mail,
  Moon,
  Sun,
} from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Language = "en" | "fr";
type Theme = "light" | "dark";

type Project = {
  title: string;
  date: string;
  kind: string;
  description: string;
  stack: string[];
  highlights: string[];
  image?: string;
  imageAlt?: string;
};

type TimelineItem = {
  title: string;
  meta: string;
  description: string;
  bullets: string[];
};

const content = {
  en: {
    nav: ["Portfolio", "Bio", "Projects", "Experience", "Contact"],
    languageLabel: "Switch to French",
    themeLabel: "Toggle color theme",
    hero: {
      eyebrow: "ESI computer science student",
      titleA: "Hi. I'm",
      titleB: "Amine M.",
      titleC: "Rachid",
      subtitle:
        "Junior full-stack web developer based in Algiers, building useful interfaces, APIs, dashboards, and software experiments with a designer's eye.",
      primary: "Browse the archive",
      secondary: "Download CV",
      status: "Open to internships, student jobs, and technical collaborations",
    },
    about: {
      label: "Read me",
      title: "A software archive with a pink label and practical code inside.",
      body:
        "I am a second-year computer science student at ESI, comfortable with full-stack web development, authentication, databases, deployment, and product-facing interfaces. My work mixes academic rigor, client communication, and a strong interest in AI, data, UI, and useful tools.",
      focus: [
        ["Build mode", "Full-stack features with clear UI, database structure, and deployment paths."],
        ["Creative direction", "Software that feels tactile: disks, labels, archives, and useful little interactions."],
        ["Current focus", "Growing toward stronger backend logic, AI/data workflows, and polished product interfaces."],
      ],
      stats: [
        ["2024", "Joined ESI"],
        ["18.51/20", "Baccalaureate average"],
        ["C1/C2", "English / French"],
      ],
    },
    stack: {
      label: "Skills",
      title: "The current toolchain",
      groups: [
        ["Languages", ["C", "Java", "Python", "JavaScript", "TypeScript"]],
        ["Frontend", ["HTML", "CSS", "React", "Next.js", "Tailwind CSS", "Responsive UI"]],
        ["Backend", ["Node.js", "REST APIs", "JWT", "bcrypt", "Authentication"]],
        ["Data", ["PostgreSQL", "MySQL", "Neon", "Prisma", "Drizzle ORM"]],
        ["Workflow", ["Git", "GitHub", "VS Code", "Vercel", "Postman", "UML"]],
      ],
    },
    projectsTitle: "Disk library",
    projectsIntro:
      "A curated set of academic, personal, and client work. Some entries are final disks, others are still being labeled.",
    projects: [
      {
        title: "ESICodeHub",
        date: "Feb. 2026 - Jun. 2026",
        kind: "Academic full-stack platform",
        description:
          "A team-built ESI platform for submitting, sharing, versioning, reviewing, and evaluating code assignments.",
        stack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Neon", "Drizzle", "JWT", "Google OAuth"],
        highlights: [
          "- Modular UI, API, service, and database architecture",
          "- Roles, assignments, submissions, reviews, logs, notifications, and forum",
          "- Python-powered code similarity and plagiarism analysis pipeline",
        ],
        image: "/assets/SDECHPF.png",
        imageAlt: "Blue SD card artwork representing ESICodeHub",
      },
      {
        title: "iTuneUp",
        date: "2026",
        kind: "Personal Windows desktop app",
        description:
          "An Apple Music-style .m4a library builder that sources audio from YouTube and enriches it with Apple Music metadata for a clean local collection.",
        stack: ["Python 3.12", "Flask", "PyWebView", "yt-dlp", "ffmpeg", "mutagen", "Selenium", "requests"],
        highlights: [
          "- Album and track downloads with AAC .m4a conversion",
          "- Apple Music metadata, artwork, track order, genre, and release date embedding",
          "- Packaged Windows installer with native WebView interface",
        ],
        image: "/assets/SDITUNEUPPF.png",
        imageAlt: "Blue SD card artwork representing the iTuneUp project",
      },
      {
        title: "Senza",
        date: "Oct. 2025",
        kind: "Personal e-commerce project",
        description:
          "A full-stack perfume shop with user accounts, secure authentication, cart management, and order flow.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Neon", "Prisma", "Vercel"],
        highlights: ["- Product browsing flow", "- Secure account foundation", "- Full-stack commerce architecture"],
        image: "/assets/SDSENZAPF.png",
        imageAlt: "Black and white SD card artwork representing the Senza project",
      },
      {
        title: "Atlix Media",
        date: "Jul. 2025 - Present",
        kind: "Freelance web work",
        description:
          "A client-facing static web page project for a communication company, from needs analysis to interface direction.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Client communication"],
        highlights: ["- Need analysis", "- Responsive modern interface", "- Feedback-driven delivery"],
        image: "/assets/atlixmedia.png",
        imageAlt: "MiniDisc case artwork representing the Atlix Media project",
      },
    ] satisfies Project[],
    experienceTitle: "Install log",
    experience: [
      {
        title: "GIZ Algeria - PEFEVA",
        meta: "Full-time intern, Aug. 2025 - Sept. 2025",
        description:
          "Worked inside an international cooperation program promoting women's entrepreneurship in Algeria's green economy.",
        bullets: [
          "- Helped organize professional events and training workshops",
          "- Coordinated logistics, material preparation, hotel staff, and event flow",
          "- Discovered professional digital infrastructure including NAS/RAID, Microsoft Azure, and collaboration tools",
        ],
      },
      {
        title: "Freelance Web Development",
        meta: "Remote, Jul. 2025 - Present",
        description:
          "Designing and developing responsive web interfaces while growing toward deeper full-stack work.",
        bullets: [
          "- Client needs analysis and interface structure",
          "- Modern responsive pages with Next.js, React, Tailwind CSS, and TypeScript",
          "- Practical growth through APIs, auth, databases, dashboards, and server logic",
        ],
      },
      {
        title: "ETIC - ESI Student Club",
        meta: "Active member, Nov. 2025 - Present",
        description:
          "Contributing across communication, development, external relations, design, production, and event organization.",
        bullets: [
          "- Contributed to Algiers' UP design and production work",
          "- Helped organize Algiers' UP and the 17th ESI Employment Fair S2EE",
          "- Built stronger teamwork, coordination, project management, and professional communication habits",
        ],
      },
    ] satisfies TimelineItem[],
    education: {
      label: "Education + certs",
      title: "Academic track",
      entries: [
        "- ESI, National Higher School of Computer Science - State Engineer curriculum, preparatory computer science cycle, admitted in 2024.",
        "- Baccalaureate in Experimental Sciences - Excellence mention, 18.51/20.",
        "- Vercel certifications: Next.js App Router Fundamentals and React Foundations for Next.js.",
      ],
    },
    contact: {
      label: "Eject",
      title: "Want to build something useful?",
      body:
        "I am open to internships, student jobs, junior web work, academic collaborations, and technical projects with a strong software component.",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      cv: "Download CV",
    },
  },
  fr: {
    nav: ["Portfolio", "Bio", "Projets", "Expérience", "Contact"],
    languageLabel: "Passer en anglais",
    themeLabel: "Changer le thème",
    hero: {
      eyebrow: "Étudiant en informatique à l'ESI",
      titleA: "Salut. Moi c'est",
      titleB: "Amine M.",
      titleC: "Rachid",
      subtitle:
        "Développeur web full-stack junior basé à Alger, je construis des interfaces utiles, des API, des tableaux de bord et des expériences logicielles avec un oeil design.",
      primary: "Explorer l'archive",
      secondary: "Télécharger le CV",
      status: "Ouvert aux stages, jobs étudiant et collaborations techniques",
    },
    about: {
      label: "Read me",
      title: "Une archive logicielle avec une étiquette rose et du code concret dedans.",
      body:
        "Je suis étudiant en deuxieme année d'informatique à l'ESI, à l'aise avec le développement web full-stack, l'authentification, les bases de données, le déploiement et les interfaces orientées produit. Mon parcours combine rigueur academique, communication client, et intérêt pour l'IA, la data, l'UI et les outils utiles.",
      focus: [
        ["Mode build", "Fonctionnalités full-stack avec UI claire, structure base de données et deploiement."],
        ["Direction créative", "Un logiciel qui parait tactile: disques, étiquettes, archives et interactions utiles."],
        ["Focus actuel", "Renforcer la logique backend, les workflows IA/data et les interfaces produit soignées."],
      ],
      stats: [
        ["2024", "Admission à l'ESI"],
        ["18.51/20", "Moyenne au bac"],
        ["C1/C2", "Anglais / Francais"],
      ],
    },
    stack: {
      label: "Compétences",
      title: "La boîte à outils actuelle",
      groups: [
        ["Langages", ["C", "Java", "Python", "JavaScript", "TypeScript"]],
        ["Frontend", ["HTML", "CSS", "React", "Next.js", "Tailwind CSS", "Responsive UI"]],
        ["Backend", ["Node.js", "API REST", "JWT", "bcrypt", "Authentification"]],
        ["Données", ["PostgreSQL", "MySQL", "Neon", "Prisma", "Drizzle ORM"]],
        ["Workflow", ["Git", "GitHub", "VS Code", "Vercel", "Postman", "UML"]],
      ],
    },
    projectsTitle: "Projets",
    projectsIntro:
      "Une sélection de projets académiques, personnels et client. Certains disques sont finalisés, d'autres attendent encore leur étiquette.",
    projects: [
      {
        title: "ESICodeHub",
        date: "Fév. 2026 - Juin 2026",
        kind: "Plateforme full-stack academique",
        description:
          "Plateforme ESI développée en équipe pour soumettre, partager, versionner, revoir et évaluer du code.",
        stack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Neon", "Drizzle", "JWT", "Google OAuth"],
        highlights: [
          "- Architecture modulaire UI, API, services et base de données",
          "- Rôles, devoirs, soumissions, revues, logs, notifications et forum",
          "- Pipeline Python de similarité de code et détection de plagiat",
        ],
        image: "/assets/SDECHPF.png",
        imageAlt: "Carte SD bleue representant ESICodeHub",
      },
      {
        title: "iTuneUp",
        date: "2026",
        kind: "Application desktop Windows personnelle",
        description:
          "Un outil pour créer une bibliothèque locale .m4a façon Apple Music, à partir de contenus YouTube enrichis avec les métadonnées publiques d'Apple Music.",
        stack: ["Python 3.12", "Flask", "PyWebView", "yt-dlp", "ffmpeg", "mutagen", "Selenium", "requests"],
        highlights: [
          "- Téléchargement d'albums et de pistes avec conversion AAC .m4a",
          "- Injection des métadonnées Apple Music, pochette, ordre des pistes, genre et date",
          "- Installateur Windows complet avec interface native WebView",
        ],
        image: "/assets/SDITUNEUPPF.png",
        imageAlt: "Carte SD bleue representant le projet iTuneUp",
      },
      {
        title: "Senza",
        date: "Oct. 2025",
        kind: "Projet e-commerce personnel",
        description:
          "Boutique full-stack de parfums avec comptes utilisateurs, authentification securisée, panier et commandes.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Neon", "Prisma", "Vercel"],
        highlights: ["- Parcours de consultation produit", "- Base d'authentification securisée", "- Architecture commerce full-stack"],
        image: "/assets/SDSENZAPF.png",
        imageAlt: "Carte SD noire et blanche representant le projet Senza",
      },
      {
        title: "Atlix Media",
        date: "Juil. 2025 - Présent",
        kind: "Mission freelance web",
        description:
          "Page web statique pour une entreprise de communication, de l'analyse du besoin à la direction d'interface.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Communication client"],
        highlights: ["- Analyse du besoin", "- Interface moderne responsive", "- Adaptation aux retours"],
        image: "/assets/atlixmedia.png",
        imageAlt: "Boitier MiniDisc representant le projet Atlix Media",
      },
    ] satisfies Project[],
    experienceTitle: "Install log",
    experience: [
      {
        title: "GIZ Algerie - PEFEVA",
        meta: "Stagiaire à temps plein, Août 2025 - Sept. 2025",
        description:
          "Stage dans un programme de coopération internationale dédié à l'entrepreneuriat féminin dans l'économie verte.",
        bullets: [
          "- Organisation d'évènements et d'ateliers professionnels",
          "- Coordination logistique, préparation du matériel, et suivi du bon déroulement",
          "- Découverte d'infrastructures numériques professionnelles: NAS/RAID, Microsoft Azure et outils collaboratifs",
        ],
      },
      {
        title: "Développement Web Freelance",
        meta: "À distance, Juil. 2025 - Présent",
        description:
          "Conception et développement d'interfaces web responsives avec une progression vers le full-stack.",
        bullets: [
          "- Analyse du besoin client et structure d'interface",
          "- Pages modernes avec Next.js, React, Tailwind CSS et TypeScript",
          "- Progression pratique via API, auth, bases de données, dashboards et logique serveur",
        ],
      },
      {
        title: "ETIC - Club étudiant de l'ESI",
        meta: "Membre actif, Nov. 2025 - Présent",
        description:
          "Contribution en communication, développement, relations externes, design, production et organisation.",
        bullets: [
          "- Contribution design et production pour Algiers' UP",
          "- Participation à Algiers' UP et au Salon de l'Emploi de l'ESI S2EE",
          "- Renforcement du travail d'équipe, lq coordination, lq gestion de projet et la communication professionnelle",
        ],
      },
    ] satisfies TimelineItem[],
    education: {
      label: "Éducation + certifications",
      title: "Parcours académique",
      entries: [
        "- ESI, École Nationale Supérieure d'Informatique - cursus Ingenieur d'État, cycle préparatoire en informatique, admis en 2024.",
        "- Baccalauréat Sciences expérimentales - mention Excellence, 18.51/20.",
        "- Certifications Vercel: Next.js App Router Fundamentals et React Foundations for Next.js.",
      ],
    },
    contact: {
      label: "Éjecter",
      title: "On construit quelque chose d'utile ?",
      body:
        "Je suis ouvert aux stages, jobs étudiant, missions web junior, collaborations académiques et projets techniques à forte composante logicielle.",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      cv: "Télécharger le CV",
    },
  },
};

const links = {
  email: "mailto:Aminera2006@gmail.com",
  github: "https://github.com/kalis26",
  linkedin: "https://www.linkedin.com/in/amine-mustapha-rachid/",
  cv: "/cv.pdf",
};

function usePortfolioMotion(language: Language) {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const rootEl = root.current;
      if (!rootEl) return;

      const get = <T extends Element>(selector: string) => Array.from(rootEl.querySelectorAll<T>(selector));
      const mm = gsap.matchMedia();

      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          desktop: "(min-width: 900px)",
        },
        (context) => {
          const reduceMotion = Boolean(context?.conditions?.reduceMotion);
          const desktop = Boolean(context?.conditions?.desktop);
          const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 260);

          if (reduceMotion) {
            gsap.set(get(".project-grid"), { clearProps: "transform" });
            return () => window.clearTimeout(refreshTimer);
          }

          gsap.set(get(".disk-hero, .ticket-pass, .project-grid, .project-card"), {
            force3D: true,
          });

          gsap.timeline({ defaults: { ease: "power3.out" } })
            .from(get(".nav-shell"), { y: -20, duration: 0.6 })
            .from(
              get(".hero-kicker, .hero-title .title-line, .hero-copy, .hero-actions, .status-strip"),
              { y: 28, autoAlpha: 0, duration: 0.72, stagger: 0.07 },
              "-=0.18",
            )
            .from(get(".disk-hero"), { scale: 0.94, rotation: -8, autoAlpha: 0, duration: 0.82, ease: "power4.out" }, "-=0.62");

          gsap.to(get(".disk-hero"), {
            y: desktop ? -60 : -24,
            rotation: desktop ? 5 : 2,
            ease: "none",
            scrollTrigger: {
              trigger: "#home",
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });

          gsap.to(get(".ticket-pass"), {
            y: desktop ? -30 : -10,
            rotation: desktop ? -1 : -2,
            ease: "none",
            scrollTrigger: {
              trigger: "#contact",
              start: "top bottom",
              end: "bottom bottom",
              scrub: 1,
            },
          });

          const revealTargets = get<HTMLElement>(".reveal").filter(
            (element) =>
              !element.closest("#projects") &&
              !element.classList.contains("experience-heading") &&
              !element.classList.contains("spec-board"),
          );
          const specGroups = get<HTMLElement>(".spec-group");
          const timelineCards = get<HTMLElement>(".timeline-card");

          gsap.set(revealTargets, { y: 22, autoAlpha: 0 });
          gsap.set(specGroups, { y: 18, autoAlpha: 0 });
          gsap.set(timelineCards, { y: 20, autoAlpha: 0 });

          ScrollTrigger.batch(revealTargets, {
            start: "top 78%",
            once: true,
            onEnter: (batch) => {
              gsap.to(
                batch,
                {
                  y: 0,
                  autoAlpha: 1,
                  duration: 0.64,
                  ease: "power3.out",
                  stagger: 0.055,
                  overwrite: "auto",
                },
              );
            },
          });

          ScrollTrigger.batch(specGroups, {
            start: "top 82%",
            once: true,
            onEnter: (batch) => {
              gsap.to(batch, {
                y: 0,
                autoAlpha: 1,
                duration: 0.52,
                ease: "power3.out",
                stagger: 0.045,
                overwrite: "auto",
              });
            },
          });

          ScrollTrigger.batch(timelineCards, {
            start: "top 82%",
            once: true,
            onEnter: (batch) => {
              gsap.to(batch, {
                y: 0,
                autoAlpha: 1,
                duration: 0.58,
                ease: "power3.out",
                stagger: 0.06,
                overwrite: "auto",
              });
            },
          });

          if (desktop) {
            const projectRail = get<HTMLElement>(".project-rail")[0];
            const projectTrack = get<HTMLElement>(".project-grid")[0];
            const experienceSection = get<HTMLElement>("#experience")[0];
            const experienceHeading = get<HTMLElement>(".experience-heading")[0];
            const lastTimelineCard = timelineCards[timelineCards.length - 1];

            if (projectRail && projectTrack) {
              const getTrackDistance = () => Math.max(0, projectTrack.scrollWidth - window.innerWidth);

              gsap.to(projectTrack, {
                x: () => -getTrackDistance(),
                ease: "none",
                scrollTrigger: {
                  id: "projects-horizontal",
                  trigger: projectRail,
                  start: "top 12%",
                  end: () => `+=${Math.max(1, getTrackDistance())}`,
                  pin: projectRail,
                  scrub: 0.85,
                  anticipatePin: 1,
                  invalidateOnRefresh: true,
                  refreshPriority: -10,
                },
              });
            }

            if (experienceSection && experienceHeading && lastTimelineCard) {
              ScrollTrigger.create({
                id: "experience-heading-pin",
                trigger: experienceSection,
                start: () => {
                  const projectTrigger = ScrollTrigger.getById("projects-horizontal");
                  const sectionStart = experienceSection.offsetTop - window.innerHeight * 0.14;
                  return Math.max(sectionStart, projectTrigger?.end ?? 0);
                },
                endTrigger: lastTimelineCard,
                end: () => {
                  const headingBottom = window.innerHeight * 0.14 + experienceHeading.offsetHeight;
                  return `bottom ${Math.round(headingBottom)}px`;
                },
                pin: experienceHeading,
                pinSpacing: false,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                refreshPriority: -9,
              });
            }
          } else {
            const mobileProjectCards = get<HTMLElement>(".project-card");
            gsap.set(mobileProjectCards, { y: 20, autoAlpha: 0 });
            ScrollTrigger.batch(mobileProjectCards, {
              start: "top 84%",
              once: true,
              onEnter: (batch) => {
                gsap.to(batch, {
                  y: 0,
                  autoAlpha: 1,
                  duration: 0.56,
                  ease: "power3.out",
                  stagger: 0.06,
                  overwrite: "auto",
                });
              },
            });
          }

          return () => window.clearTimeout(refreshTimer);
        },
      );

      return () => mm.revert();
    },
    { dependencies: [language], revertOnUpdate: true, scope: root },
  );

  return root;
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [theme, setTheme] = useState<Theme>("light");
  const t = content[language];
  const root = usePortfolioMotion(language);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme") as Theme | null;
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextTheme = storedTheme ?? (systemDark ? "dark" : "light");
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
  }

  function toggleLanguage() {
    setLanguage((current) => (current === "en" ? "fr" : "en"));
  }

  const navItems = useMemo(
    () => [
      ["#home", t.nav[0]],
      ["#about", t.nav[1]],
      ["#projects", t.nav[2]],
      ["#experience", t.nav[3]],
      ["#contact", t.nav[4]],
    ],
    [t.nav],
  );

  return (
    <main ref={root} className="portfolio-shell" id="home">
      <div className="nav-wrap">
        <nav className="nav-shell" aria-label="Primary navigation">
          <a className="brand-lockup" href="#home" aria-label="Amine M. Rachid home">
            <img src="/assets/amr.png" alt="" className="brand-mark" />
            <span>Amine M. Rachid</span>
          </a>
          <div className="nav-links">
            {navItems.map(([href, label]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <button className="icon-button" type="button" onClick={toggleLanguage} aria-label={t.languageLabel}>
              <Languages className="icon" aria-hidden="true" />
              <span>{language.toUpperCase()}</span>
            </button>
            <button className="icon-button" type="button" onClick={toggleTheme} aria-label={t.themeLabel}>
              {theme === "dark" ? <Sun className="icon" aria-hidden="true" /> : <Moon className="icon" aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </div>

      <section className="hero-section">
        <div className="hero-copy-wrap">
          <p className="hero-kicker">{t.hero.eyebrow}</p>
          <h1 className="hero-title">
            <span className="title-line">{t.hero.titleA} <span className="inline-disc" aria-hidden="true" /></span>
            <span className="title-line title-pink">{t.hero.titleB} {t.hero.titleC}</span>
          </h1>
          <p className="hero-copy">{t.hero.subtitle}</p>
          <div className="hero-actions">
            <a className="button-primary" href="#projects">
              {t.hero.primary}
              <ArrowRight className="icon" aria-hidden="true" />
            </a>
            <a className="button-secondary" href={links.cv} download>
              {t.hero.secondary}
              <Download className="icon" aria-hidden="true" />
            </a>
          </div>
          <p className="status-strip">{t.hero.status}</p>
        </div>
        <div className="disk-hero" aria-label="A translucent CD jewel case with a spinning disk inside">
          <img className="disk-layer disk-layer-disc" src="/assets/diskpf.png" alt="" />
          <img className="disk-layer disk-layer-case" src="/assets/casepf.png" alt="" />
          <div className="disc-label">AMR / PORTFOLIO V2</div>
        </div>
      </section>

      <section className="section-grid about-grid" id="about">
        <div className="section-heading reveal">
          <p className="section-label">{t.about.label}</p>
          <h2>{t.about.title}</h2>
        </div>
        <div className="readme-card reveal">
          <p>{t.about.body}</p>
          <div className="focus-list">
            {t.about.focus.map(([label, detail]) => (
              <div className="focus-item" key={label}>
                <strong>{label}</strong>
                <span>{detail}</span>
              </div>
            ))}
          </div>
          <div className="stat-grid">
            {t.about.stats.map(([value, label]) => (
              <div className="stat-card" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-grid stack-grid" id="stack">
        <div className="section-heading reveal">
          <p className="section-label">{t.stack.label}</p>
          <h2>{t.stack.title}</h2>
        </div>
        <div className="spec-board reveal">
          <div className="spec-groups">
            {t.stack.groups.map(([group, items]) => (
              <div className="spec-group" key={String(group)}>
                <h3>{group}</h3>
                <div className="chip-row">
                  {(items as string[]).map((item) => (
                    <span className="spec-chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-heading centered reveal">
          <p className="section-label">Portfolio</p>
          <h2>{t.projectsTitle}</h2>
          <p>{t.projectsIntro}</p>
        </div>
        <div className="project-rail">
          <div className="project-grid">
            {t.projects.map((project, index) => (
              <article className={index === 0 ? "project-card project-card-featured" : "project-card"} key={project.title}>
                <div className="project-artifact" aria-hidden={!project.image}>
                  {project.image ? (
                    <img src={project.image} alt={project.imageAlt ?? ""} />
                  ) : (
                    <div className="mini-disc" aria-hidden="true">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                    </div>
                  )}
                </div>
                <div className="project-content">
                  <div className="project-meta">
                    <span>{project.date}</span>
                    <span>{project.kind}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="chip-row">
                    {project.stack.map((item) => (
                      <span className="spec-chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                  <ul>
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-grid" id="experience">
        <div className="section-heading reveal experience-heading">
          <p className="section-label">{t.experienceTitle}</p>
          <h2>{language === "en" ? "Experience, clubs, and practical work" : "Expérience, clubs et travail pratique"}</h2>
        </div>
        <div className="timeline">
          {t.experience.map((item) => (
            <article className="timeline-card" key={item.title}>
              <span>{item.meta}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-grid education-grid" id="education">
        <div className="section-heading reveal">
          <p className="section-label">{t.education.label}</p>
          <h2>{t.education.title}</h2>
        </div>
        <div className="disk-card reveal">
          {t.education.entries.map((entry) => (
            <p key={entry}>{entry}</p>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="ticket-pass reveal" aria-hidden="true">
          <img src="/assets/TICKETPF.png" alt="" />
        </div>
        <div className="contact-card reveal">
          <p className="section-label">{t.contact.label}</p>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.body}</p>
          <div className="contact-actions">
            <a href={links.email}>
              <Mail className="icon" aria-hidden="true" />
              {t.contact.email}
            </a>
            <a href={links.github} target="_blank" rel="noreferrer">
              <Code2 className="icon" aria-hidden="true" />
              {t.contact.github}
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              <ExternalLink className="icon" aria-hidden="true" />
              {t.contact.linkedin}
            </a>
            <a href={links.cv} download>
              <Download className="icon" aria-hidden="true" />
              {t.contact.cv}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
