const repositoriesContainer = document.querySelector("[data-repositories]");
const repositoriesStatus = document.querySelector("[data-repositories-status]");
const yearElement = document.querySelector("[data-year]");
const languageSelect = document.querySelector("[data-language-select]");
const themeSelect = document.querySelector("[data-theme-select]");
const pageDescription = document.querySelector('meta[name="description"]');

const LANGUAGE_STORAGE_KEY = "portfolio-language";
const THEME_STORAGE_KEY = "portfolio-theme";

const translations = {
    es: {
        pageTitle: "Carlos Fernando Escobar Silva | Ingeniero de Sistemas",
        pageDescription:
            "Portafolio personal de Carlos Fernando Escobar Silva, ingeniero de sistemas, con proyectos, experiencia y repositorios de GitHub.",
        navAriaLabel: "Secciones del portafolio",
        navAbout: "Sobre mí",
        navSkills: "Habilidades",
        navRepos: "Repositorios",
        navContact: "Contacto",
        languageLabel: "Idioma",
        languageOptionEs: "Español",
        languageOptionEn: "Inglés",
        themeLabel: "Tema",
        themeSystem: "Sistema",
        themeDark: "Oscuro",
        themeLight: "Claro",
        heroEyebrow:
            "Ingeniero de sistemas · Fullstack · Cloud · Machine Learning",
        heroTitle:
            "Construyo soluciones digitales robustas, escalables y fáciles de mantener.",
        heroLead:
            "Portafolio personal de Carlos Fernando Escobar Silva. Aquí encontrarás mi enfoque, mis fortalezas técnicas y una selección de repositorios públicos de GitHub.",
        heroPrimaryCta: "Ver repositorios",
        heroSecondaryCta: "Contactar",
        stat1: "áreas clave: backend, datos y automatización",
        stat2: "enfoque en código limpio y mantenible",
        stat3: "mentalidad de producto y mejora continua",
        heroCardAriaLabel: "Resumen profesional",
        profileBadge: "Disponible para proyectos y trabajo formal",
        profileSummary:
            "Ingeniero de Sistemas con interés en backend, inteligencia artificial y experiencias web profesionales.",
        profileItem1: "Base sólida en desarrollo y soporte técnico",
        profileItem2:
            "Orientado a resolver problemas de negocio con tecnología",
        profileItem3: "Dispuesto a aprender y mejorar constantemente",
        aboutTag: "Sobre mí",
        aboutTitle: "Perfil profesional",
        aboutLead:
            "Me caracterizo por mi cooperación y comunicación eficientes, cumpliendo siempre los objetivos propuestos de manera oportuna. Abordo los problemas desde múltiples perspectivas y propongo soluciones que benefician a todas las partes involucradas.",
        aboutBody:
            "Mi objetivo profesional es ejercer el liderazgo en el campo de la ingeniería de sistemas, destacándome entre mis pares y aportando a la innovación tecnológica y al desarrollo de soluciones vanguardistas. Aspiro a generar un impacto positivo y contribuir a construir un mundo mejor mediante la excelencia en cada proyecto en el que participo.",
        skillsTag: "Capacidades",
        skillsTitle: "Qué puedo aportar",
        skillsLead:
            "Un resumen de las habilidades en las que normalmente suelo destacar.",
        skill1Title: "Backend y APIs",
        skill1Body:
            "Diseño de servicios, lógica de negocio, integración con bases de datos y estructuras mantenibles.",
        skill2Title: "Frontend corporativo",
        skill2Body:
            "Interfaces limpias, responsivas y alineadas con objetivos profesionales y de marca personal.",
        skill3Title: "Git y despliegue",
        skill3Body:
            "Flujos de trabajo con git, documentación clara (swagger) y manejo de repositorios (GitHub o Microsoft Azure DevOps).",
        reposTitle: "Repositorios destacados",
        repoStatusLoading: "Cargando repositorios...",
        repoStatusReady: "Principales proyectos",
        repoLinkLabel: "Ver repositorio",
        repoImagePlaceholder: "Espacio para imagen",
        contactTag: "Contacto",
        contactTitle: "Construyamos algo profesional.",
        contactEmail: "Correo: cfes2004@gmail.com",
        contactPhone: "Número: (+57) 316 6071650",
        contactLinkedin: "LinkedIn: linkedin.com/in/cfes2004/",
        contactCta: "Escríbeme",
        footerName: "Carlos Fernando Escobar Silva · Ingeniero de Sistemas",
        footerRights: "Todos los derechos reservados",
        whatsappMessage: "Hola Carlos, quiero contactarte desde tu portafolio.",
    },
    en: {
        pageTitle: "Carlos Fernando Escobar Silva | Systems Engineer",
        pageDescription:
            "Personal portfolio of Carlos Fernando Escobar Silva, systems engineer, featuring projects, experience, and GitHub repositories.",
        navAriaLabel: "Portfolio sections",
        navAbout: "About",
        navSkills: "Skills",
        navRepos: "Repositories",
        navContact: "Contact",
        languageLabel: "Language",
        languageOptionEs: "Spanish",
        languageOptionEn: "English",
        themeLabel: "Theme",
        themeSystem: "System",
        themeDark: "Dark",
        themeLight: "Light",
        heroEyebrow: "Systems Engineer · Fullstack · Cloud · Machine Learning",
        heroTitle:
            "I build robust, scalable, and maintainable digital solutions.",
        heroLead:
            "Personal portfolio of Carlos Fernando Escobar Silva. Here you can explore my approach, technical strengths, and a curated set of public GitHub repositories.",
        heroPrimaryCta: "View repositories",
        heroSecondaryCta: "Contact",
        stat1: "key areas: backend, data, and automation",
        stat2: "focus on clean and maintainable code",
        stat3: "product mindset and continuous improvement",
        heroCardAriaLabel: "Professional summary",
        profileBadge: "Open to projects and formal opportunities",
        profileSummary:
            "Systems Engineer interested in backend development, artificial intelligence, and professional web experiences.",
        profileItem1: "Strong foundation in development and technical support",
        profileItem2: "Focused on solving business problems through technology",
        profileItem3: "Committed to continuous learning and improvement",
        aboutTag: "About",
        aboutTitle: "Professional profile",
        aboutLead:
            "I stand out for efficient collaboration and communication, consistently meeting goals on time. I approach challenges from multiple perspectives and propose solutions that benefit all stakeholders.",
        aboutBody:
            "My professional goal is to provide leadership in systems engineering, standing out among peers while contributing to innovation and cutting-edge solutions. I aim to create positive impact and help build a better world through excellence in every project I join.",
        skillsTag: "Capabilities",
        skillsTitle: "What I bring",
        skillsLead: "A concise summary of the skills where I usually excel.",
        skill1Title: "Backend and APIs",
        skill1Body:
            "Service design, business logic, database integration, and maintainable architectures.",
        skill2Title: "Corporate frontend",
        skill2Body:
            "Clean, responsive interfaces aligned with professional and personal branding goals.",
        skill3Title: "Git and deployment",
        skill3Body:
            "Git workflows, clear documentation (Swagger), and repository management (GitHub or Microsoft Azure DevOps).",
        reposTitle: "Featured repositories",
        repoStatusLoading: "Loading repositories...",
        repoStatusReady: "Main projects",
        repoLinkLabel: "View repository",
        repoImagePlaceholder: "Image placeholder",
        contactTag: "Contact",
        contactTitle: "Let's build something professional.",
        contactEmail: "Email: cfes2004@gmail.com",
        contactPhone: "Phone: (+57) 316 6071650",
        contactLinkedin: "LinkedIn: linkedin.com/in/cfes2004/",
        contactCta: "Message me",
        footerName: "Carlos Fernando Escobar Silva · Systems Engineer",
        footerRights: "All rights reserved",
        whatsappMessage:
            "Hi Carlos, I want to contact you from your portfolio.",
    },
};

const featuredRepos = [
    {
        name: "expense-tracker",
        description: {
            es: "Aplicación para control y seguimiento de gastos personales.",
            en: "Application for tracking and managing personal expenses.",
        },
        language: "GitHub",
        stars: "Repo",
        link: "https://github.com/Cescobar332/expense-tracker",
        image: "img/Screenshot 2026-04-09 152618.png",
    },
    {
        name: "gestion-financiera-fullstack",
        description: {
            es: "Sistema para administración y visualización financiera.",
            en: "Fullstack system for financial management and visualization.",
        },
        language: "GitHub",
        stars: "Repo",
        link: "https://github.com/Cescobar332/gestion-financiera-fullstack",
        image: "img/Screenshot 2026-04-09 152830.png",
    },
    {
        name: "virtual_pro",
        description: {
            es: "Página de un PreIcfes Virtual.",
            en: "Landing page for a virtual pre-college exam preparation program.",
        },
        language: "GitHub",
        stars: "Repo",
        link: "https://github.com/newMoonlight11/virtual_pro",
        image: "",
    },
    {
        name: "ecolab_",
        description: {
            es: "Proyecto de Grado de la Universidad.",
            en: "University graduation project.",
        },
        language: "GitHub",
        stars: "Repo",
        link: "https://github.com/newMoonlight11/ecolab_",
        image: "img/Screenshot 2025-07-18 131356.png",
    },
];

let currentLanguage = "es";

const getText = (key) => {
    return translations[currentLanguage][key] || translations.es[key] || key;
};

const renderRepositories = (repositories) => {
    if (!repositoriesContainer) {
        return;
    }

    repositoriesContainer.innerHTML = repositories
        .map((repository, index) => {
            const language = repository.language || "Repository";
            const stars = repository.stars || "Repo";
            const url = repository.link || "#";
            const descriptionSource = repository.description;
            const description =
                typeof descriptionSource === "object"
                    ? descriptionSource[currentLanguage] || descriptionSource.es
                    : descriptionSource || "";
            const name = repository.name || `Project ${index + 1}`;
            const image = repository.image || "";
            const repoLinkLabel = getText("repoLinkLabel");
            const placeholder = getText("repoImagePlaceholder");

            return `
        <article class="repo-card">
            <div class="repo-card__media ${image ? "repo-card__media--has-image" : ""}">
                ${image ? `<img src="${image}" alt="${name} preview">` : `<div class="repo-card__media-placeholder">${placeholder}</div>`}
            </div>
            <div class="repo-card__top">
                <span class="repo-pill">${language}</span>
                <span class="repo-stars">${stars} ★</span>
            </div>
            <h3>${name}</h3>
            <p>${description}</p>
            <a href="${url}" target="_blank" rel="noreferrer">${repoLinkLabel}</a>
        </article>
      `;
        })
        .join("");
};

const loadRepositories = () => {
    renderRepositories(featuredRepos);

    if (repositoriesStatus) {
        repositoriesStatus.textContent = getText("repoStatusReady");
    }
};

const applyLanguage = (languageCode) => {
    currentLanguage = translations[languageCode] ? languageCode : "es";
    localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage);

    document.documentElement.lang = currentLanguage;

    if (languageSelect) {
        languageSelect.value = currentLanguage;
    }

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        const text = getText(key);

        if (typeof text === "string") {
            element.textContent = text;
        }
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
        const key = element.dataset.i18nAriaLabel;
        const text = getText(key);

        if (typeof text === "string") {
            element.setAttribute("aria-label", text);
        }
    });

    if (pageDescription) {
        pageDescription.setAttribute("content", getText("pageDescription"));
    }

    document.title = getText("pageTitle");

    const whatsappLink = document.querySelector('a[href*="wa.me"]');
    if (whatsappLink) {
        const message = encodeURIComponent(getText("whatsappMessage"));
        whatsappLink.href = `https://wa.me/573166071650?text=${message}`;
    }

    loadRepositories();
};

const getPreferredLanguage = () => {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (savedLanguage && translations[savedLanguage]) {
        return savedLanguage;
    }

    const browserLanguage = navigator.language?.toLowerCase() || "es";
    return browserLanguage.startsWith("en") ? "en" : "es";
};

const resolveTheme = (themeMode) => {
    if (themeMode === "system") {
        return globalThis.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    }

    return themeMode;
};

const applyTheme = (themeMode, savePreference = true) => {
    const safeThemeMode =
        themeMode === "light" || themeMode === "dark" || themeMode === "system"
            ? themeMode
            : "system";

    const resolvedTheme = resolveTheme(safeThemeMode);
    document.documentElement.dataset.theme = resolvedTheme;
    document.documentElement.dataset.themeMode = safeThemeMode;

    if (themeSelect) {
        themeSelect.value = safeThemeMode;
    }

    if (savePreference) {
        localStorage.setItem(THEME_STORAGE_KEY, safeThemeMode);
    }
};

const initializeTheme = () => {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) || "system";
    applyTheme(storedTheme, false);

    if (themeSelect) {
        themeSelect.addEventListener("change", (event) => {
            applyTheme(event.target.value);
        });
    }

    const colorSchemeQuery = globalThis.matchMedia(
        "(prefers-color-scheme: dark)",
    );
    colorSchemeQuery.addEventListener("change", () => {
        const mode = document.documentElement.dataset.themeMode;

        if (mode === "system") {
            applyTheme("system", false);
        }
    });
};

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

if (languageSelect) {
    languageSelect.addEventListener("change", (event) => {
        applyLanguage(event.target.value);
    });
}

applyLanguage(getPreferredLanguage());
initializeTheme();

const navLinks = document.querySelectorAll("[data-scroll]");
navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        const targetId = event.currentTarget.dataset.scroll;
        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});
