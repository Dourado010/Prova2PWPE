// script.js

document.addEventListener("DOMContentLoaded", function () {

     /* ====== 1. TRADUÇÃO PT/EN ====== */
    const translations = {
        pt: {
            "nav.home": "Início",
            "nav.projects": "Projetos",
            "nav.contact": "Contato",
            "home.title": "Bem-vindo à Médicos Sem Fronteiras",
            "home.p1": "Levamos cuidados médicos a pessoas afetadas por crises humanitárias ao redor do mundo.",
            "home.p2": "Bem-vindo à Médicos Sem Fronteiras! Somos uma organização humanitária internacional que fornece assistência médica em áreas afetadas por crises e emergências, sem discriminação. Nosso compromisso é salvar vidas, aliviar o sofrimento e defender os direitos humanos, onde quer que haja necessidade.",
            "home.p3": "A missão da Médicos Sem Fronteiras é fornecer cuidados médicos de emergência às populações afetadas por conflitos armados, epidemias, desastres naturais e exclusão de cuidados básicos de saúde, independentemente de raça, religião, crença política ou origem. Nossa visão é garantir que todos, independentemente de sua situação, recebam o cuidado médico necessário e que as necessidades de saúde das populações vulneráveis sejam atendidas, promovendo a justiça social e o respeito pela dignidade humana.",
            "projects.title": "Nossos Projetos",
            "projects.p1": "A MSF atua em zonas de conflito, desastres naturais e pandemias para garantir atendimento médico.",
            "projects.p2": "Médicos Sem Fronteiras está presente em mais de 70 países, levando cuidados médicos essenciais a populações que enfrentam situações extremas. Conheça alguns dos projetos que estamos conduzindo para atender as emergências médicas e humanitárias mais urgentes.",
            "projects.p3": "Prestamos cuidados médicos e psicológicos em campos de refugiados e áreas de deslocamento forçado, proporcionando apoio vital a pessoas que fugiram de situações de guerra e perseguição.",
            "carousel.title": "Imagens dos Nossos Projetos",
            "contact.title": "Entre em Contato e Doe se puder",
            "contact.info": "Email: contato@msf.org | Telefone: (11) 99999-9999 | Pix: 000.000.000.00",
            "form.name": "Seu nome",
            "form.email": "Seu email",
            "form.submit": "Enviar",
            "form.success": "Obrigado por entrar em contato!",
            "faq.title": "Perguntas Frequentes",
            "faq.q1": "Como posso doar?",
            "faq.a1": "Você pode doar via Pix, cartão de crédito ou transferência bancária através do nosso site oficial.",
            "faq.q2": "Onde a MSF atua?",
            "faq.a2": "Atuamos em mais de 70 países, especialmente em regiões afetadas por conflitos e crises humanitárias.",
            "footer.text": "Todos os direitos reservados."
            
        },
        en: {
            "nav.home": "Home",
            "nav.projects": "Projects",
            "nav.contact": "Contact",
            "home.title": "Welcome to Doctors Without Borders",
            "home.p1": "We provide medical care to people affected by humanitarian crises around the world.",
            "home.p2": "Welcome to Doctors Without Borders! We are an international humanitarian organization providing medical assistance in crisis and emergency areas without discrimination. Our commitment is to save lives, relieve suffering, and defend human rights wherever needed.",
            "home.p3": "The mission of Doctors Without Borders is to provide emergency medical care to populations affected by armed conflicts, epidemics, natural disasters, and exclusion from basic health care, regardless of race, religion, political belief, or origin. Our vision is to ensure that everyone, regardless of their situation, receives the medical care they need, promoting social justice and respect for human dignity.",
            "projects.title": "Our Projects",
            "projects.p1": "MSF operates in conflict zones, natural disasters, and pandemics to ensure medical care.",
            "projects.p2": "Doctors Without Borders is present in more than 70 countries, delivering essential medical care to populations facing extreme situations. Discover some of the projects we are conducting to address the most urgent medical and humanitarian emergencies.",
            "projects.p3": "We provide medical and psychological care in refugee camps and areas of forced displacement, offering vital support to people fleeing war and persecution.",
            "carousel.title": "Images from Our Projects",
            "contact.title": "Get in Touch and Donate if You Can",
            "contact.info": "Email: contact@msf.org | Phone: +1 999-999-9999 | Pix: 000.000.000.00",
            "form.name": "Your name",
            "form.email": "Your email",
            "form.submit": "Submit",
            "form.success": "Thank you for contacting us!",
            "faq.title": "Frequently Asked Questions",
            "faq.q1": "How can I donate?",
            "faq.a1": "You can donate via Pix, credit card or bank transfer through our official website.",
            "faq.q2": "Where does MSF operate?",
            "faq.a2": "We operate in over 70 countries, especially in regions affected by conflict and humanitarian crises.",
            "footer.text": "All rights reserved."
            
        }
    };

    const langBtn = document.createElement("button");
    langBtn.textContent = "EN";
    langBtn.style.margin = "10px";
    document.body.prepend(langBtn);

    let currentLang = localStorage.getItem("lang") || "pt";
    function translatePage() {
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (translations[currentLang][key]) {
                if (el.placeholder) {
                    el.placeholder = translations[currentLang][key];
                } else {
                    el.textContent = translations[currentLang][key];
                }
            }
        });
        langBtn.textContent = currentLang === "pt" ? "EN" : "PT";
    }
    langBtn.addEventListener("click", () => {
        currentLang = currentLang === "pt" ? "en" : "pt";
        localStorage.setItem("lang", currentLang);
        translatePage();
    });
    translatePage();

    /* ====== 2. TEMA CLARO/ESCURO ====== */
    const themeBtn = document.createElement("button");
    themeBtn.textContent = "🌙";
    themeBtn.style.margin = "10px";
    document.body.prepend(themeBtn);

    function applyTheme(theme) {
        document.body.classList.toggle("dark-theme", theme === "dark");
        themeBtn.textContent = theme === "dark" ? "☀️" : "🌙";
    }
    let savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);
    themeBtn.addEventListener("click", () => {
        savedTheme = savedTheme === "dark" ? "light" : "dark";
        localStorage.setItem("theme", savedTheme);
        applyTheme(savedTheme);
    });

    /* ====== 3. VALIDAÇÃO DO FORMULÁRIO + MODAL ====== */
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = document.getElementById("name");
            const email = document.getElementById("email");
            if (!name.value.trim()) {
                alert(currentLang === "pt" ? "Por favor, preencha seu nome." : "Please enter your name.");
                return;
            }
            if (!email.value.includes("@")) {
                alert(currentLang === "pt" ? "Por favor, insira um email válido." : "Please enter a valid email.");
                return;
            }
            showModal(translations[currentLang]["form.success"]);
            form.reset();
        });
    }

    function showModal(msg) {
        const modal = document.createElement("div");
        modal.style.position = "fixed";
        modal.style.top = "0";
        modal.style.left = "0";
        modal.style.width = "100%";
        modal.style.height = "100%";
        modal.style.background = "rgba(0,0,0,0.6)";
        modal.style.display = "flex";
        modal.style.justifyContent = "center";
        modal.style.alignItems = "center";
        modal.innerHTML = `<div style='background:#fff;padding:20px;border-radius:10px'>${msg}</div>`;
        document.body.appendChild(modal);
        setTimeout(() => modal.remove(), 3000);
    }

    /* ====== 4. ANIMAÇÃO DE ENTRADA ====== */
    const fadeElements = document.querySelectorAll(".section, .home");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => observer.observe(el));

    /* ====== 5. ACCORDION - apenas se for página de contato ====== */
    const accordionButtons = document.querySelectorAll(".accordion-button");
    if (accordionButtons.length > 0) {
    accordionButtons.forEach(button => {
        button.addEventListener("click", () => {
            const content = button.nextElementSibling;
            content.style.display = content.style.display === "block" ? "none" : "block";
        });
    });
}

    /* ====== 6. CARROSSEL DE IMAGENS ====== */
    const carousel = document.querySelector(".carousel");
    if (carousel) {
        let index = 0;
        const slides = carousel.querySelectorAll(".carousel-slide");
        setInterval(() => {
            slides.forEach((slide, i) => {
                slide.style.display = i === index ? "block" : "none";
            });
            index = (index + 1) % slides.length;
        }, 3000);
    }
});