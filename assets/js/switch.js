document.addEventListener('DOMContentLoaded', function() {
    const nacionales = [
        // noticias nacionales
        { title: 'CONSUMO ENERGÉTICO DE LA MINERÍA CRECE EN MEDIO DE ESTANCAMIENTO DE LA PRODUCCIÓN', description: 'La adopción de suministro renovable ha avanzado y se estima que el porcentaje de uso de este tipo de tecnologías en la industria ya representa un 42% del consumo eléctrico.', date: '16/11/2023', image: '../assets/img/noticiaNacional1.jpg' },
        { title: 'ALBEMARLE DESESTIMA IMPULSAR UNA “OPEP DEL LITIO”: “VEMOS DIFÍCIL QUE ALGO ASÍ PUEDA TENER UN IMPACTO”', description: 'El gigante chino Tsingshan dijo estar a la espera de que Corfo evalúe su proyecto para levantar una planta industrial en Antofagasta. ', date: '20/08/2023', image: '../assets/img/noticiaNacional2.webp' },
        { title: 'MINERA ESCONDIDA, EL MAYOR YACIMIENTO DE COBRE DEL MUNDO, AUMENTA SU PRODUCCIÓN', description: 'BHP, la minera anglo australiana que además opera las minas Spence y Cerro Colorado, sumó 1.344.000 toneladas de producción en Chile durante su año fiscal 2023', date: '19/08/2023', image: '../assets/img/noticiaNacional3.webp' },
        { title: 'Noticia Nacional 4', description: 'Descripción breve...', date: '25/11/2023', image: 'https://via.placeholder.com/150' },
        { title: 'Noticia Nacional 5', description: 'Descripción breve...', date: '24/11/2023', image: 'https://via.placeholder.com/150' },
        { title: 'Noticia Nacional 6', description: 'Descripción breve...', date: '25/11/2023', image: 'https://via.placeholder.com/150' },
        { title: 'Noticia Nacional 7', description: 'Descripción breve...', date: '24/11/2023', image: 'https://via.placeholder.com/150' },
        { title: 'Noticia Nacional 8', description: 'Descripción breve...', date: '25/11/2023', image: 'https://via.placeholder.com/150' },
        { title: 'Noticia Nacional 9', description: 'Descripción breve...', date: '24/11/2023', image: 'https://via.placeholder.com/150' },

    ];
    const internacionales = [
        //  noticias internacionales
        { title: 'Noticia Internacional 1', description: 'Descripción breve...', date: '24/11/2023', image: 'https://via.placeholder.com/150' },
        { title: 'Noticia Internacional 2', description: 'Descripción breve...', date: '25/11/2023', image: 'https://via.placeholder.com/150' },
        { title: 'Noticia Internacional 3', description: 'Descripción breve...', date: '24/11/2023', image: 'https://via.placeholder.com/150' },
        { title: 'Noticia Internacional 4', description: 'Descripción breve...', date: '25/11/2023', image: 'https://via.placeholder.com/150' },
        { title: 'Noticia Internacional 5', description: 'Descripción breve...', date: '24/11/2023', image: 'https://via.placeholder.com/150' },
        { title: 'Noticia Internacional 6', description: 'Descripción breve...', date: '25/11/2023', image: 'https://via.placeholder.com/150' },

    ];

    let currentNews = nacionales;

    function renderNews(newsArray) {
        const newsSection = document.getElementById('news-section');
        newsSection.innerHTML = ''; // Limpiar las noticias actuales

        newsArray.forEach(news => {
            const newsItem = document.createElement('div');
            newsItem.className = 'col-md-4 mb-4';
            newsItem.innerHTML = `
                <div class="card">
                    <img src="${news.image}" class="card-img-top" alt="${news.title}">
                    <div class="card-body">
                        <h5 class="card-title">${news.title}</h5>
                        <p class="card-text">${news.description}</p>
                        <p class="card-text"><small class="text-muted">${news.date}</small></p>
                    </div>
                </div>
            `;
            newsSection.appendChild(newsItem);
        });
    }

    function setupPagination(newsArray) {
        const pagination = document.getElementById('news-pagination');
        pagination.innerHTML = ''; // Limpiar la paginación actual
        const pageCount = Math.ceil(newsArray.length / 9); // Cantidad de Noticias x pagina

        for(let i = 1; i <= pageCount; i++) {
            const pageItem = document.createElement('li');
            pageItem.className = 'page-item';
            pageItem.innerHTML = `<a class="page-link" href="#">${i}</a>`;
            pagination.appendChild(pageItem);
        }
    }

    document.getElementById('toggle-section').addEventListener('click', function() {
        if (this.textContent.includes('Internacionales')) {
            currentNews = internacionales;
            this.textContent = 'Ver Nacionales';
            document.getElementById('section-title').textContent = 'Noticias Internacionales';
        } else {
            currentNews = nacionales;
            this.textContent = 'Ver Internacionales';
            document.getElementById('section-title').textContent = 'Noticias Nacionales';
        }
        renderNews(currentNews);
        setupPagination(currentNews);
    });

    // Inicialización
    renderNews(currentNews);
    setupPagination(currentNews);
});
