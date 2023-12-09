document.addEventListener('DOMContentLoaded', function() {
    const nacionales = [
        // noticias nacionales
        { title: 'MÁXIMO PACHECO SE REFIERE A REBAJA DE NOTA CREDITICIA DE FITCH A CODELCO Y RECALCA QUE ES UN NEGOCIO A LARGO PLAZO', description: '«Tenemos derecho a tener opiniones distintas. Creo que nosotros tenemos un mejor conocimiento de las medidas que estamos tomando para revertir la situación actual”, señaló el presidente del directorio de Codelco El presidente...', date: '23/11/2023', image: '../assets/img/MAXIMO-PACHECO-CODELCO-2023-VI.jpg' },
        { title: 'SONAMI PROYECTA CRECIMIENTO SECTORIAL DE 5% PARA 2024', description: 'Al participar en el tradicional seminario proyecciones económicas, organizado por la Cámara de Comercio de Santiago, el gerente de Estudios de SONAMI, Álvaro Merino, proyectó que el próximo año el sector minero crecerá en torno...', date: '23/1/2023', image: '../assets/img/cobre-2020-II.png' },
        { title: 'GOBIERNO ANUNCIA INVERSIÓN DE $6 MIL MILLONES PARA INVESTIGACIÓN DE LITIO Y SALARES', description: 'El programa podrá financiar hasta 10 proyectos elegidos en un concurso abierto hasta julio de 2024. Esto, con el fin de investigar nuevos métodos de extracción de salmuera y obtención de litio, usos especiales en baterías diferentes...', date: '22/11/2023', image: '../assets/img/pequenos-salares-litio-II.jpg' }, 
        { title: 'IIMP CUMPLE 80 AÑOS: DESARROLLO SOSTENIBLE E IMPULSO A LA INVESTIGACIÓN', description: 'Abraham Chahuan señaló que el aniversario del Instituto de Ingenieros de Minas del Perú es una oportunidad para reflexionar sobre las perspectivas de la minería en el país. El Instituto de Ingenieros de Minas del Perú (IIMP)...', date: '21/11/2023', image: '../assets/img/Abraham-Chaguan-instituto-de-Minas-de-Peru-I.jpg' },
        { title: 'REVIVE OPCIÓN DE QUE ECONOMÍA REGISTRE UN PIB DE 0% EN 2023, TRAS MEJORES DATOS DEL TERCER TRIMESTRE', description: 'Las cuentas nacionales que publicó este lunes el Banco Central informó que en el tercer trimestre el PIB avanzó 0,6%, por sobre el 0,2% registrado con el promedio de los Imacec. Con ello, entre enero y septiembre la acumula una...', date: '21/11/2023', image: '../assets/img/crecimiento-economic-15-5.jpg' },
        { title: 'CORFO DESMIENTE ACLARA Y COMENTA QUE NO HIZO NINGUNA VALORACIÓN SOBRE LA CALIDAD Y LOS BEBEFICIOS DE PROYECTO DE TIERRAS RARAS', description: 'La agencia estatal lamentó “que se involucre a la Corporación en una estrategia comunicacional y que se difundan, a través de un comunicado de prensa, comentarios que esta institución no ha realizado, lo que puede ser calificado...', date: '21/11/2023', image: '../assets/img/Corfo-0516-e1700575917919.jpg' },
        { title: 'ECONOMÍA CHILENA CRECIÓ MÁS DE LO ESPERADO EL TERCER TRIMESTRE IMPULSADA POR EL SECTOR MINERO', description: 'El PIB anotó un aumento de 0,6% y la demanda interna, en tanto, exhibió una caída de 3,6% incidida por un menor consumo e inversión. Las cifras dadas a conocer este lunes por el Banco Central confirmaron que la economía volvió...', date: '20/11/2023', image: '../assets/img/inversion-camiones-otros-X-1.jpg' },
        { title: 'CORFO CERTIFICA COMO DE I+D PROYECTO DE TIERRAS RARAS DE ACLARA EN BIOBÍO', description: 'Agencia estatal destacó que iniciativa será clave para la fabricación de imanes para turbinas eólicas, vehículos eléctricos y otras tecnologías vitales para la transición energética. Aclara resaltó que la Corporación de...', date: '17/11/2023', image: '../assets/img/TIERRAS-RARAS-I.jpg' },
        { title: 'SQM COMPRA 20% EN FIRMA FRANCESA ADIONICS ESPECIALISTA EN TECNOLOGÍA DE EXTRACCIÓN DIRECTA', description: 'La empresa produce tecnología de extracción directa de litio. Esto es clave, pues es requisito para operarel Salar de Atacama después de 2030. Una jornada altamente agitada fue la que vivieron ayer los accionistas de SQM. El papel...', date: '17/11/2023', image: '../assets/img/SQM-SAL-log-15.png' },
        { title: 'SQM COMPRA 20% EN FIRMA FRANCESA ADIONICS ESPECIALISTA EN TECNOLOGÍA DE EXTRACCIÓN DIRECTA', description: 'La empresa produce tecnología de extracción directa de litio. Esto es clave, pues es requisito para operarel Salar de Atacama después de 2030. Una jornada altamente agitada fue la que vivieron ayer los accionistas de SQM. El papel...', date: '17/11/2023', image: '../assets/img/SQM-SAL-log-15.png' },

    ];
    const internacionales = [
        //  noticias internacionales
        { title: 'ALBEMARLE DESESTIMA IMPULSAR UNA “OPEP DEL LITIO”: “VEMOS DIFÍCIL QUE ALGO ASÍ PUEDA TENER UN IMPACTO”', description: 'Por otra parte, el gigante chino Tsingshan dijo estar a la espera de que Corfo evalúe su proyecto para levantar una planta industrial en Antofagasta para ensamblar baterías de litio, pero también reconoció interés por ingresar...', date: '30/08/2023', image: '../assets/img/Albemarle-en-Chile.jpg' },
        { title: 'GOBIERNO ESTUDIA MECANISMOS DE PROTECCIÓN TARIFARIA ANTE INMINENTES ALZAS EN CUENTAS DE LUZ', description: 'Aumentar el aporte para la estabilización de tarifas y subsidio focalizado en las familias vulnerables, entre las opciones que están en la mesa. Las alzas en las cuentas de la luz que en promedio -según expertos- llegarán hasta...', date: '30/08/2023', image: '../assets/img/Cuenta-luz-2020.jpg' },
        { title: 'DESEMPLEO COMPLETA NOVENA ALZA CONSECUTIVA EN SU MEDICIÓN ANUAL', description: 'La tasa de desocupación llegó a 8,8% en el trimestre mayo – julio, cifra que representó un aumento de 0,9 puntos porcentuales frente a igual periodo de 2022 La desocupación siguió aumentando. Según informó este miércoles...', date: '30/08/2023', image: '../assets/img/desplome-industria-0216.jpg' },
        { title: 'SINDICATOS DE CODELCO SE DECLARAN EN ALERTA POR NUEVOS DESPIDOS Y PREVÉN QUE DESVINCULACIONES CONTINUARÁN', description: 'En total han sido cerca de 120 los trabajadores de la dotación profesional de la minera que han sido despedidos en las últimas semanas. La empresa aclaró que el proceso responde a la readecuación de vicepresidencias y gerencias....', date: '29/08/2023', image: '../assets/img/codelco-merco.talento-logo-1.jpg' },
        { title: 'CODELCO LANZA SU PRIMERA RED DE MUJERES PARA POTENCIAR EL TALENTO FEMENINO', description: 'El jueves 24 de agosto se lanzó la Red de Mujeres de Codelco, la primera organización de este tipo al interior de la Corporación y que surgió de un grupo de trabajadoras con el objetivo de potenciar el talento femenino para asegurar...', date: '29/08/2023', image: '../assets/img/Codelco-red_mujeres-I.jpg' },
        { title: 'AES ANDES SOLICITA RETIRO ANTICIPADO DE TERMOELÉCTRICA VENTANAS II: UNIDAD SALDRÍA DE OPERACIÓN A FINES DE 2023', description: 'La generadora de capitales norteamericanos solicitó a la Comisión Nacional de Energía la exención del plazo de 24 meses para informar el retiro, desconexión y cese de operaciones anticipada y definitiva del Sistema Eléctrico Nacional...', date: '25/07/2023', image: '../assets/img/Codelco-Ventana-2022.jpg' },

    ];

    let currentNews = nacionales;
    let currentPage = 1; // Variable para la página actual
    const newsPerPage = 9; // Cantidad de noticias por página

    function renderNews(newsArray, page) {
        const start = (page - 1) * newsPerPage; // Calcular el índice de inicio
        const end = start + newsPerPage; // Calcular el índice de fin
        const paginatedNews = newsArray.slice(start, end); // Obtener las noticias para la página actual

        const newsSection = document.getElementById('news-section');
        newsSection.innerHTML = ''; // Limpiar las noticias actuales

        paginatedNews.forEach(news => {
            const newsItem = document.createElement('div');
            newsItem.className = 'col-md-4 mb-4';
            newsItem.innerHTML = `<a href="#" class="text-decoration-none">
                <div class="card news">
                    <div class="image-container">
                        <img src="${news.image}" class="card-img-top" alt="${news.title}">
                    </div>
                    <div class="card-body frokt">
                        <h5 class="card-title">${news.title}</h5>
                        <p class="card-text">${news.description}</p>
                        <p class="card-text"><small class="text-muted">${news.date}</small></p>
                    </div>
                </div>
            </a>`;
            newsSection.appendChild(newsItem);
        });
    }

    function setupPagination(newsArray) {
        const pagination = document.getElementById('news-pagination');
        pagination.innerHTML = ''; // Limpiar la paginación actual
        const pageCount = Math.ceil(newsArray.length / newsPerPage); // Cantidad de páginas

        for(let i = 1; i <= pageCount; i++) {
            const pageItem = document.createElement('li');
            pageItem.className = 'page-item';
            pageItem.innerHTML = `<a class="page-link" href="#" data-page="${i}">${i}</a>`;
            pageItem.addEventListener('click', function(event) {
                event.preventDefault();
                currentPage = parseInt(event.target.dataset.page);
                renderNews(newsArray, currentPage);
            });
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
        currentPage = 1; // Reiniciar a la página 1 al cambiar secciones
        renderNews(currentNews, currentPage);
        setupPagination(currentNews);
    });

    // Inicialización
    renderNews(currentNews, currentPage);
    setupPagination(currentNews);
});




