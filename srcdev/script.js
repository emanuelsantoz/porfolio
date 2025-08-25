document.addEventListener('DOMContentLoaded', () => {

    // --- Data Mockup (from React component) ---
    const data = {
        testimonials: [
            { name: "Supervisor Técnico", role: "Coordenador de TI", company: "Cooperativa Barracred", text: "Emanuel demonstrou excelência técnica e rapidez de aprendizado durante seu período como jovem aprendiz. Sua evolução para analista foi natural.", rating: 5 },
            { name: "Instrutor", role: "Formador Técnico", company: "Barracred Conecta", text: "Durante o programa de formação, Emanuel se destacou pela dedicação e capacidade de absorver conhecimentos técnicos complexos.", rating: 5 },
            { name: "Professor Orientador", role: "Coordenador do Curso", company: "ETEC João R. Rays", text: "Emanuel foi um dos alunos mais dedicados do curso técnico, sempre buscando ir além do conteúdo programático.", rating: 5 }
        ],
        projects: {
            uiuxdesing: [
                { title: "Fince - App Financeiro", description: "Wireframe completo para aplicativo de gestão financeira pessoal, com controle de gastos, investimentos e metas.", tech: ["Figma", "Financial UX", "Dashboard Design", "Data Visualization"], role: "Desenvolvedor Full-stack", status: "Concluído", demo: "https://www.figma.com/proto/2y4ZguUBWlXnD2smvVHWTR/Fince?node-id=2762-1833&t=dKDqNAVuE4h8a7lr-0&scaling=scale-down&content-scaling=fixed&page-id=8%3A4", code: "#", sistem:"fa-solid fa-mobile-screen-button" },
                { title: "Voz Feminina - App Social", description: "Wireframe completo para aplicativo social focado no empoderamento feminino, com recursos de comunidade e networking.", tech: ["Figma", "UI/UX Design", "Prototyping", "User Research"], role: "Desenvolvedor Front-end", status: "Concluído", demo: "https://www.figma.com/proto/CuPQ6wsqSO0oZB99ZaK0By/Voz-Feminina?node-id=3-1327&t=66jOd1Qsv5YP97A3-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=38%3A2058", code: "#", sistem:"fa-solid fa-mobile-screen-button" },
                { title: "Midfly Mobile - App Meditação", description: "Design de aplicativo de meditação e bem-estar para dispositivos móveis, com foco em mindfulness e relaxamento.", tech: ["Figma", "Mobile Design", "Tablet Desing", "UX Research", "Prototyping"], role: "UI/UX Designer e Desenvolvedor", status: "Concluído", demo: "https://www.figma.com/proto/UhtILollDM0SCeUe0v0VxS/FDevs?node-id=264-4685&t=YZTHKy22os4DFwwe-1&scaling=scale-down&content-scaling=fixed&page-id=264%3A2477&starting-point-node-id=264%3A4685&show-proto-sidebar=1", code: "#", sistem:"fa-solid fa-mobile-screen-button" },
                { title: "Midfly Tablet - Versão Expandida", description: "Adaptação do aplicativo Midfly para tablets, aproveitando o espaço adicional da tela para uma experiência mais rica.", tech: ["Figma", "Tablet Design", "Responsive Design", "UX Adaptation"], role: "UI/UX Designer e Desenvolvedor", status: "Concluído", demo: "https://www.figma.com/proto/UhtILollDM0SCeUe0v0VxS/FDevs?node-id=292-6467&starting-point-node-id=292%3A6467&t=wAU7YRnJTQZkSp9F-1", code: "#", sistem:"fa-solid fa-tablet-screen-button" },
            ],
            frontend: [
                { title: "AEGON Agência", description: "Site institucional interativo e minimalista desenvolvido para uma agência digital. Foco em experiência do usuário e performance.", tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"], role: "Desenvolvedor Front-end", status: "Concluído", demo: "https://aegon-com.vercel.app/", code: "#", sistem:"fa-solid fa-desktop" },
                { title: "Linktree Interativo", description: "Página de links personalizada apresentada em mockup de celular, com animações suaves e design responsivo.", tech: ["HTML5", "CSS3", "JavaScript", "Animations"], role: "UI/UX Designer e Desenvolvedor", status: "Concluído", demo: "https://links-redes-gilt.vercel.app/", code: "#", sistem:"fa-solid fa-desktop" },
                { title: "ManelFlix", description: "Sistema de autenticação e gestão de usuários com persistência via cookies. Interface inspirada em plataformas de streaming.", tech: ["HTML5", "CSS3", "JavaScript", "Cookies", "LocalStorage"], role: "Desenvolvedor Full-stack", status: "Concluído", demo: "https://manelflix.vercel.app/", code: "#", sistem:"fa-solid fa-desktop" },
            ],
            backend: [
                { title: "API Sistemas Internos", description: "Desenvolvimento e manutenção de APIs para sistemas internos da Barracred usando .NET e C#, com integração ao SQL Server.", tech: [".NET", "C#", "SQL Server", "Entity Framework"], role: "Desenvolvedor Back-end", status: "Em desenvolvimento", demo: "#", code: "#", sistem: "fa-solid fa-network-wired" },
                { title: "Documentação SQL Server", description: "Documentação técnica completa e detalhada sobre SQL Server, abordando desde conceitos básicos até técnicas avançadas.", tech: ["SQL Server", "MongoDB", "Documentation", "GitHub"], role: "Autor Técnico", status: "Concluído", demo: "#", code: "#", sistem:"fa-solid fa-database" }
            ],
            tests: [
                { title: "Testes Automatizados Barracred", description: "Implementação de testes unitários e de integração para sistemas internos, garantindo qualidade e confiabilidade do código.", tech: ["C#", "xUnit", "MSTest", "Git"], role: "QA Developer", status: "Em desenvolvimento", demo: "#", code: "#", sistem:"fa-solid fa-flask-vial" },
                { title: "Framework de Testes E2E", description: "Implementação de testes automatizados end-to-end utilizando Selenium WebDriver para garantia de qualidade.", tech: ["Selenium WebDriver", "C#", "Test Automation"], role: "QA Engineer", status: "Em andamento", demo: "#", code: "#", sistem:"fa-solid fa-flask-vial" }
            ]
        },
        services: [
            { icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`, title: "Desenvolvimento Full-Stack", description: "Criação de aplicações completas usando C#/.NET, Angular, Flutter, com foco em performance e experiência do usuário." },
            { icon: `<i class="fa-2x fa-brands fa-figma"></i>`, title: "Wireframes & Prototipagem", description: "Design de interfaces modernas, criação de wireframes, prototipagem e fluxogramas para projetos digitais." },
            { icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8"><rect x="2" y="4" width="20" height="12" rx="2" ry="2"></rect><line x1="6" x2="6" y1="16" y2="20"></line><line x1="18" x2="18" y1="16" y2="20"></line><line x1="10" x2="14" y1="20" y2="20"></line></svg>`, title: "Bancos de Dados", description: "Estruturação e modelagem com SQL Server e MongoDB, otimização de consultas e documentação técnica." },
            { icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>`, title: "Testes & QA", description: "Implementação de testes unitários, integração e E2E com Selenium WebDriver para garantia de qualidade." }
        ],
        timeline: {
            education: [
                { year: "2025 - 2027", title: "Tecnologia em Análise e Desenvolvimento de Sistemas", institution: "Descomplica Faculdade Digital", description: "Curso superior focado em engenharia de software, programação orientada a objetos, banco de dados, desenvolvimento full-stack e metodologias ágeis.", logo: "assets/descomplica-logo.png" },
                { year: "2026 - Futuro", title: "Gestão de TI", institution: "A definir", description: "Curso complementar em gestão de projetos tecnológicos, liderança de equipes e estratégias digitais.", logo: "assets/fatec.png" },
                { year: "2022 - 2023", title: "Técnico em Desenvolvimento de Sistemas", institution: "ETEC João R. Rays", description: "Curso técnico com abordagem completa em hardware (Arduino), redes, desenvolvimento web e mobile. Tecnologias: HTML, CSS, JavaScript, TypeScript, C#, C++, Angular, Ionic, MongoDB, SQL Server, Linux.", logo: "assets/etec-logo.png" }
            ],
            professional: [
                { year: "Mar 2025 - Atual", title: "Analista de Desenvolvimento de Sistemas Júnior", company: "Cooperativa Barracred", description: "Desenvolvimento e manutenção de sistemas internos usando .NET, C#, SQL Server, JavaScript. Implementação de testes unitários e integração, controle de versionamento com Git.", logo: "assets/barracred-logo.png" },
                { year: "Ago 2024 - Mar 2025", title: "Jovem Aprendiz em TI e Segurança da Informação", company: "Cooperativa Barracred", description: "Suporte técnico, gerenciamento de acessos, segurança da informação, documentação e aprendizado prático em ambiente corporativo.", logo: "assets/barracred-logo.png" },
                { year: "Ago 2023 - Ago 2024", title: "Programa de Formação Barracred Conecta", company: "Cooperativa Barracred", description: "Capacitação técnica focada em desenvolvimento web, segurança da informação, lógica de programação e práticas corporativas.", logo: "assets/barracred-conecta-logo.png" }
            ]
        }
    };
    
    // --- State Management and Elements Cache ---
    let isDark = false;
    let isMenuOpen = false;
    let activeSection = 'about';
    let currentTestimonial = 0;
    
    const body = document.body;
    const themeToggleBtn = document.getElementById('theme-toggle');
    const mobileMenuToggleBtn = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const desktopNav = document.getElementById('desktop-nav');
    const navButtons = [...document.querySelectorAll('[data-section]')];
    
    const projectsContainer = document.getElementById('projects-container');
    const servicesContainer = document.getElementById('services-container');
    const educationTimeline = document.getElementById('education-timeline');
    const professionalTimeline = document.getElementById('professional-timeline');
    
    const testimonialCard = document.getElementById('testimonial-card');
    const prevTestimonialBtn = document.getElementById('prev-testimonial');
    const nextTestimonialBtn = document.getElementById('next-testimonial');
    const testimonialIndicators = document.getElementById('testimonial-indicators');
    
    const downloadCvBtn = document.getElementById('download-cv-btn');
    const emailModal = document.getElementById('email-modal');
    const emailForm = document.getElementById('email-form');
    const emailInput = document.getElementById('email-input');
    const cancelModalBtn = document.getElementById('cancel-modal');
    
    // --- Initial Render Functions ---
    
    function renderProjects() {
        projectsContainer.innerHTML = '';
        for (const category in data.projects) {
            const categorySection = document.createElement('div');
            categorySection.classList.add('mb-16');
            const categoryTitle = document.createElement('h3');
            categoryTitle.classList.add('text-2xl', 'font-bold', 'mb-8', 'text-center');
            categoryTitle.textContent = category === 'frontend' ? 'Front-End' : (category === 'backend' ? 'Back-End' : ( category == 'tests' ? 'Testes' : "UI/UX Design"));
            categorySection.appendChild(categoryTitle);
            
            const projectsGrid = document.createElement('div');
            projectsGrid.classList.add('grid', 'md:grid-cols-2', 'gap-8');
            
            data.projects[category].forEach(project => {
                const projectCard = document.createElement('div');
                const darkClass = isDark ? 'bg-gray-900' : 'bg-white';
                projectCard.className = `p-6 rounded-lg transition-transform hover:scale-105 ${darkClass} shadow-lg`;
                
                const statusClass = project.status === 'Concluído' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
                
                projectCard.innerHTML = `
                    <div class="flex justify-between items-start mb-4">
                        <h4 class="text-xl font-bold">${project.title}</h4>
                        <span class="px-3 py-1 rounded-full text-xs font-medium ${statusClass}">
                            ${project.status}
                        </span>
                    </div>
                    <p class="mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}">
                        ${project.description}
                    </p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${project.tech.map(tech => `<span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">${tech}</span>`).join('')}
                    </div>
                    <div class="text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}">
                        <strong>Papel:</strong> ${project.role}
                    </div>
                    <div class="flex flex-row justify-between">
                        <div class="flex flew-row basis-64">
                            <a href="${project.demo}" class="flex items-center text-blue-600 hover:text-blue-700">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 mr-1"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" x2="21" y1="14" y2="3"></line></svg>
                                Demo
                            </a>
                            <a href="${project.code}" class="flex items-center ${isDark ? 'text-gray-300' : 'text-gray-600'} hover:${isDark ? 'text-white' : 'text-gray-700'}">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 mr-1"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3.5-0.4 7.2-2.1 7.2-7.8a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-2.3-1.8c-0.8-0.2-1.6-0.3-2.4-0.3-0.8 0-1.6 0.1-2.4 0.3a5.5 5.5 0 0 0-2.3 1.8 5.5 5.5 0 0 0-1.5 3.8c0 5.7 3.7 7.4 7.2 7.8a4.8 4.8 0 0 0-1 3.2v4"></path></svg>
                                Código
                            </a>
                        </div>
                        <div class="flex basis-128 items-end">
                            <i class="${project.sistem}"></i>
                        </div>
                    </div>
                `;
                projectsGrid.appendChild(projectCard);
            });
            
            categorySection.appendChild(projectsGrid);
            projectsContainer.appendChild(categorySection);
        }
    }
    
    function renderServices() {
        servicesContainer.innerHTML = '';
        data.services.forEach(service => {
            const serviceCard = document.createElement('div');
            const darkClass = isDark ? 'bg-gray-800' : 'bg-gray-50';
            serviceCard.className = `text-center p-6 rounded-lg transition-transform hover:scale-105 ${darkClass}`;
            
            serviceCard.innerHTML = `
                <div class="flex justify-center mb-4 text-blue-600">
                    ${service.icon}
                </div>
                <h3 class="text-xl font-bold mb-3">${service.title}</h3>
                <p class="${isDark ? 'text-gray-300' : 'text-gray-600'}">
                    ${service.description}
                </p>
            `;
            servicesContainer.appendChild(serviceCard);
        });
    }
    
    function renderTimeline() {
        renderTimelineSection(data.timeline.education, educationTimeline, 'blue-600');
        renderTimelineSection(data.timeline.professional, professionalTimeline, 'red-500');
    }
    
    function renderTimelineSection(items, container, color) {
        container.innerHTML = '';
        items.forEach(item => {
            const timelineItem = document.createElement('div');
            const darkBg = isDark ? 'bg-gray-900' : 'bg-white';
            const darkText = isDark ? 'text-gray-300' : 'text-gray-600';
            const darkSubText = isDark ? 'text-gray-400' : 'text-gray-500';
            
            timelineItem.className = 'relative pl-8';
            timelineItem.innerHTML = `
                <div class="absolute left-0 top-0 w-3 h-3 bg-${color} rounded-full"></div>
                <div class="absolute left-1.5 top-3 w-0.5 bg-${color} h-full"></div>
                <div class="p-4 rounded-lg ${darkBg} shadow">
                    <div class="flex items-center justify-between mb-3">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 mr-2 text-${color}"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
                            <span class="text-sm font-medium text-${color}">${item.year}</span>
                        </div>
                        ${item.logo ? `<img src="${item.logo}" alt="${item.institution || item.company}" class="w-8 h-8 object-contain rounded"/>` : ''}
                    </div>
                    <h4 class="font-bold text-lg mb-1">${item.title}</h4>
                    <p class="text-sm mb-2 ${darkSubText}">${item.institution || item.company}</p>
                    <p class="text-sm ${darkText}">${item.description}</p>
                </div>
            `;
            container.appendChild(timelineItem);
        });
    }
    
    function renderTestimonial() {
        const testimonial = data.testimonials[currentTestimonial];
        testimonialCard.innerHTML = `
            <div class="flex justify-center mb-4">
                ${Array(testimonial.rating).fill(null).map(() => 
                    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" class="w-5 h-5 text-yellow-400"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`
                ).join('')}
            </div>
            <p class="text-lg mb-6 italic ${isDark ? 'text-gray-300' : 'text-gray-600'}">
                "${testimonial.text}"
            </p>
            <div>
                <h4 class="font-bold text-lg">${testimonial.name}</h4>
                <p class="${isDark ? 'text-gray-400' : 'text-gray-500'}">
                    ${testimonial.role} - ${testimonial.company}
                </p>
            </div>
        `;
        
        testimonialIndicators.innerHTML = data.testimonials.map((_, index) => 
            `<button class="w-3 h-3 rounded-full transition-colors ${
                currentTestimonial === index ? 'bg-blue-600' : (isDark ? 'bg-gray-600' : 'bg-gray-300')
            }" data-index="${index}"></button>`
        ).join('');
    }
    
    // --- Event Handlers and Listeners ---
    
    function updateTheme() {
        if (isDark) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            document.getElementById('theme-icon-container').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>`;
            document.getElementById('foto-logo-emanuel').innerHTML = '<img src="assets/emanuel-profile-dark.png" alt="Emanuel Santos" class="w-32 h-32 rounded-full object-cover">';
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
            document.getElementById('theme-icon-container').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m4.93 19.07 1.41-1.41"></path><path d="m17.66 6.34 1.41-1.41"></path></svg>`;
            document.getElementById('foto-logo-emanuel').innerHTML = '<img src="assets/emanuel-profile-white.png" alt="Emanuel Santos" class="w-32 h-32 rounded-full object-cover">';
        }
        renderProjects();
        renderServices();
        renderTimeline();
        renderTestimonial();
    }
    
    themeToggleBtn.addEventListener('click', () => {
        isDark = !isDark;
        updateTheme();
    });
    
    mobileMenuToggleBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        mobileMenu.classList.toggle('hidden', !isMenuOpen);
        document.getElementById('menu-icon').classList.toggle('hidden', isMenuOpen);
        document.getElementById('close-icon').classList.toggle('hidden', !isMenuOpen);
    });
    
    function scrollToSection(sectionId) {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        activeSection = sectionId;
        updateNavLinks();
        if (isMenuOpen) {
            isMenuOpen = false;
            mobileMenu.classList.add('hidden');
            document.getElementById('menu-icon').classList.remove('hidden');
            document.getElementById('close-icon').classList.add('hidden');
        }
    }
    
    function updateNavLinks() {
        navButtons.forEach(btn => {
            const section = btn.dataset.section;
            if (section === activeSection) {
                btn.classList.add('text-blue-600');
                btn.classList.remove('text-gray-600', 'hover:text-gray-900', 'bg-gray-50');
                if (isDark) {
                    btn.classList.add('bg-blue-50', 'bg-opacity-20');
                } else {
                    btn.classList.add('bg-blue-50');
                }
            } else {
                btn.classList.remove('text-blue-600', 'bg-blue-50', 'bg-opacity-20');
                btn.classList.add('text-gray-600');
                if (isDark) {
                    btn.classList.add('hover:text-white', 'hover:bg-gray-700');
                } else {
                    btn.classList.add('hover:text-gray-900', 'hover:bg-gray-50');
                }
            }
        });
    }
    
    desktopNav.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            scrollToSection(e.target.dataset.section);
        }
    });
    
    mobileMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            scrollToSection(e.target.dataset.section);
        }
    });
    
    prevTestimonialBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + data.testimonials.length) % data.testimonials.length;
        renderTestimonial();
    });
    
    nextTestimonialBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % data.testimonials.length;
        renderTestimonial();
    });
    
    testimonialIndicators.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            currentTestimonial = parseInt(e.target.dataset.index);
            renderTestimonial();
        }
    });
    
    downloadCvBtn.addEventListener('click', () => {
        emailModal.classList.remove('hidden');
    });
    
    cancelModalBtn.addEventListener('click', () => {
        emailModal.classList.add('hidden');
        emailInput.value = '';
    });
    
    emailForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailValue = emailInput.value;
        if (emailValue.includes('@')) {
            console.log('Email captured:', emailValue);
            // Simulate download
            const link = document.createElement('a');
            link.href = '#'; // Replace with actual CV file path
            link.download = 'Emanuel_Santos_CV.pdf';
            link.click();
            emailModal.classList.add('hidden');
            emailInput.value = '';
        }
    });
    
    // --- Auto-Testimonial Carousel Logic ---
    let testimonialInterval;
    function startCarousel() {
        testimonialInterval = setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % data.testimonials.length;
            renderTestimonial();
        }, 5000);
    }
    
    // --- Initialization on page load ---
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        isDark = savedTheme === 'dark';
    }
    updateTheme();
    renderProjects();
    renderServices();
    renderTimeline();
    renderTestimonial();
    startCarousel();
    updateNavLinks();
    
    // Smooth scroll and active section on scroll
    let isScrolling = false;
    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            isScrolling = true;
            setTimeout(() => {
                const sections = document.querySelectorAll('section');
                let current = 'about';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop - 100; // Offset for fixed header
                    if (window.scrollY >= sectionTop) {
                        current = section.id;
                    }
                });
                if (activeSection !== current) {
                    activeSection = current;
                    updateNavLinks();
                }
                isScrolling = false;
            }, 100);
        }
    });
    
});