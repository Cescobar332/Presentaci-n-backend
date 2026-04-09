const repositoriesContainer = document.querySelector("[data-repositories]");
const repositoriesStatus = document.querySelector("[data-repositories-status]");
const yearElement = document.querySelector("[data-year]");

const featuredRepos = [
    {
        name: "expense-tracker",
        description:
            "Aplicación para control y seguimiento de gastos personales.",
        language: "GitHub",
        stars: "Repo",
        link: "https://github.com/Cescobar332/expense-tracker",
        image: "img/Screenshot 2026-04-09 152618.png",
    },
    {
        name: "gestion-financiera-fullstack",
        description: "Sistema para administración y visualización financiera.",
        language: "GitHub",
        stars: "Repo",
        link: "https://github.com/Cescobar332/gestion-financiera-fullstack",
        image: "img/Screenshot 2026-04-09 152830.png",
    },
    {
        name: "virtual_pro",
        description: "Página de un PreIcfes Virtual.",
        language: "GitHub",
        stars: "Repo",
        link: "https://github.com/newMoonlight11/virtual_pro",
        image: "",
    },
    {
        name: "ecolab_",
        description: "Proyecto de Grado de la Universidad.",
        language: "GitHub",
        stars: "Repo",
        link: "https://github.com/newMoonlight11/ecolab_",
        image: "img/Screenshot 2025-07-18 131356.png",
    },
];

const renderRepositories = (repositories) => {
    if (!repositoriesContainer) {
        return;
    }

    repositoriesContainer.innerHTML = repositories
        .map((repository, index) => {
            const language = repository.language || "Repositorio";
            const stars = repository.stars || "Repo";
            const url = repository.link || "#";
            const description =
                repository.description || "Sin descripción pública disponible.";
            const name = repository.name || `Proyecto ${index + 1}`;
            const image = repository.image || "";

            return `
        <article class="repo-card">
                    <div class="repo-card__media ${image ? "repo-card__media--has-image" : ""}">
                        ${image ? `<img src="${image}" alt="Vista previa de ${name}">` : `<div class="repo-card__media-placeholder">Espacio para imagen</div>`}
                    </div>
          <div class="repo-card__top">
            <span class="repo-pill">${language}</span>
            <span class="repo-stars">${stars} ★</span>
          </div>
          <h3>${name}</h3>
          <p>${description}</p>
          <a href="${url}" target="_blank" rel="noreferrer">Ver repositorio</a>
        </article>
      `;
        })
        .join("");
};

const loadRepositories = () => {
    renderRepositories(featuredRepos);

    if (repositoriesStatus) {
        repositoriesStatus.textContent =
            "Principales proyectos";
    }
};

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

loadRepositories();

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
