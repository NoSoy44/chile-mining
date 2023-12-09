// Rutas con palabras clave asociadas a las direcciones
const routes = {
    "noticias/index.html": ["noticias", "news", "actualidad", "nacionales", "internacionales"],
    "mineria-sustentabilidad/index.html": ["mineria", "sustentabilidad", "responsabilidad social", "coordinador eléctrico", "antofagasta"],
    "feria-eventos/index.html": ["eventos", "feria", "empresas mineras", "industria", "proveedores"],
    "quienes-somos/index.html": ["mision", "vision", "pilares fundamentales", "quienes", "somos"],
    "recursos-contacto/index.html": ["contacto", "recursos", "consultoras", "asistencia", "información"],
    "contenido/index.html": ["sqm", "utilidades sqm", "resultados financieros", "litio", "ingresos sqm", "ebitda sqm"],
};

// Función para obtener la ruta base correcta dependiendo de la ubicación actual
function getBasePath() {
    const fullPath = window.location.href;
    const lastSlashIndex = fullPath.lastIndexOf('/');
    const basePath = fullPath.substring(0, lastSlashIndex + 1);
    const isInRoot = basePath.endsWith('/chile-mining/') || basePath.endsWith('/chile-mining/index.html');
    return isInRoot ? './' : '../';
}

// Función que maneja la visualización y ocultación del campo de búsqueda
function toggleSearch() {
    const searchContainer = document.querySelector('.search-container');
    const searchInput = document.getElementById('search-input');
    const searchSubmit = document.getElementById('search-submit');

    if (searchContainer.style.height === '0px' || searchContainer.style.height === '') {
        searchContainer.style.height = '100px';
        setTimeout(() => {
            searchInput.style.opacity = 1;
            searchSubmit.style.opacity = 1;
        }, 100);
        searchInput.focus();
    } else {
        searchInput.style.opacity = 0;
        searchSubmit.style.opacity = 0;
        setTimeout(() => {
            searchContainer.style.height = '0px';
        }, 500);
    }
}

// Eventos para el botón de búsqueda y el campo de entrada
document.getElementById('search-button').addEventListener('click', toggleSearch);
document.getElementById('search-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        performSearch();
    }
});

document.getElementById('search-submit').addEventListener('click', function(event) {
    event.preventDefault();
    performSearch();
});

// Función que maneja la lógica de búsqueda
function performSearch() {
    const basePath = getBasePath();
    const searchTerm = document.getElementById('search-input').value.trim().toLowerCase();
    let foundRoute = false;

    for (const route in routes) {
        const keywordsArray = routes[route];
        for (let i = 0; i < keywordsArray.length; i++) {
            if (searchTerm.includes(keywordsArray[i])) {
                window.location.href = basePath + route;
                foundRoute = true;
                break;
            }
        }
        if (foundRoute) {
            break;
        }
    }

    if (!foundRoute) {
        window.location.href = basePath + '404.html';
    }
}
