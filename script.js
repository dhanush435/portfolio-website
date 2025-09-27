// Profile data for different personas
const profileData = {
    recruiter: {
        title: "A E SAI DHANUSH",
        subtitle: "Senior Talent Acquisition Specialist",
        description: "Passionate about connecting top talent with amazing opportunities. Expert in technical recruitment, candidate assessment, and building strong relationships with both clients and candidates.",
        projects: [
            {
                title: "Talent Pipeline System",
                description: "Built a comprehensive system for managing candidate pipelines",
                tech: ["ATS", "CRM", "Automation"],
                icon: "🔧"
            },
            {
                title: "Diversity Hiring Initiative",
                description: "Led initiatives to improve diversity in tech hiring",
                tech: ["D&I", "Strategy", "Metrics"],
                icon: "🌈"
            }
        ],
        skills: [
            { name: "Technical Recruitment", level: 95 },
            { name: "Candidate Assessment", level: 90 },
            { name: "Client Relations", level: 88 },
            { name: "Market Analysis", level: 85 },
            { name: "Process Optimization", level: 92 }
        ],
        experience: [
            {
                title: "Senior Technical Recruiter",
                company: "TechCorp Solutions",
                duration: "2020 - Present",
                description: "Leading technical recruitment for senior positions"
            },
            {
                title: "Talent Acquisition Specialist",
                company: "InnovateTech",
                duration: "2018 - 2020",
                description: "Specialized in full-stack developer recruitment"
            }
        ]
    },
    developer: {
        title: "A E SAI DHANUSH",
        subtitle: "FULL STACK DEVELOPER",
        description: "Passionate about creating innovative solutions and delivering high-quality software. Experienced in full-stack development with expertise in Java, Spring Boot, and modern web technologies.",
        projects: [
            {
                title: "E-Commerce Platform",
                description: "Full-stack e-commerce solution with microservices architecture",
                tech: ["Java", "Spring Boot", "React", "PostgreSQL"],
                icon: "🛒"
            },
            {
                title: "Real-time Analytics Dashboard",
                description: "Dashboard for real-time business intelligence",
                tech: ["Java", "WebSocket", "D3.js", "MongoDB"],
                icon: "📈"
            },
            {
                title: "Mobile Banking API",
                description: "Secure API for mobile banking applications",
                tech: ["Java", "Spring Security", "JWT", "Redis"],
                icon: "🏦"
            }
        ],
        skills: [
            { name: "Java", level: 95 },
            { name: "Spring Boot", level: 90 },
            { name: "Microservices", level: 85 },
            { name: "Cloud Computing", level: 80 },
            { name: "Database Design", level: 88 }
        ],
        experience: [
            {
                title: "Senior Java Developer",
                company: "TechCorp Solutions",
                duration: "2020 - Present",
                description: "Leading development of microservices architecture"
            },
            {
                title: "Full-Stack Developer",
                company: "InnovateTech",
                duration: "2018 - 2020",
                description: "Developed full-stack web applications"
            }
        ]
    },
    freelancer: {
        title: "A E SAI DHANUSH",
        subtitle: "Independent Software Consultant",
        description: "Providing expert software development services to clients worldwide. Specializing in rapid prototyping, MVP development, and technical consulting for startups and enterprises.",
        projects: [
            {
                title: "Startup MVP Platform",
                description: "Complete platform for a fintech startup",
                tech: ["React", "Node.js", "Stripe API", "PostgreSQL"],
                icon: "💳"
            },
            {
                title: "E-Learning Management System",
                description: "Custom LMS for online education platform",
                tech: ["Vue.js", "Laravel", "MySQL", "AWS"],
                icon: "🎓"
            }
        ],
        skills: [
            { name: "Full-Stack Development", level: 92 },
            { name: "Project Management", level: 88 },
            { name: "Client Communication", level: 95 },
            { name: "Technical Consulting", level: 90 },
            { name: "Agile Development", level: 85 }
        ],
        experience: [
            {
                title: "Independent Consultant",
                company: "Self-Employed",
                duration: "2019 - Present",
                description: "Providing software development and consulting services"
            },
            {
                title: "Senior Developer",
                company: "Various Clients",
                duration: "2017 - 2019",
                description: "Contract work for multiple clients"
            }
        ]
    },
    adventurer: {
        title: "A E SAI DHANUSH",
        subtitle: "Tech Explorer & Digital Nomad",
        description: "Combining my passion for technology with a love for adventure. Working remotely while exploring the world, bringing fresh perspectives to every project.",
        projects: [
            {
                title: "Global Remote Team Tool",
                description: "Tool for managing distributed teams across time zones",
                tech: ["React", "Node.js", "WebRTC", "MongoDB"],
                icon: "🌐"
            },
            {
                title: "Travel Tech Blog",
                description: "Technical blog about remote work and travel",
                tech: ["Gatsby", "Markdown", "Netlify", "Analytics"],
                icon: "📝"
            }
        ],
        skills: [
            { name: "Remote Collaboration", level: 95 },
            { name: "Adaptability", level: 92 },
            { name: "Cultural Intelligence", level: 88 },
            { name: "Problem Solving", level: 90 },
            { name: "Communication", level: 94 }
        ],
        experience: [
            {
                title: "Digital Nomad Developer",
                company: "Various Remote Companies",
                duration: "2020 - Present",
                description: "Working remotely while traveling the world"
            },
            {
                title: "Remote Team Lead",
                company: "GlobalTech",
                duration: "2018 - 2020",
                description: "Leading distributed development teams"
            }
        ]
    }
};

// DOM elements
const profileSelection = document.getElementById('profile-selection');
const portfolioPage = document.getElementById('portfolio-page');
const profileCards = document.querySelectorAll('.profile-card');
const heroTitle = document.getElementById('hero-title');
const heroSubtitle = document.getElementById('hero-subtitle');
const heroDescription = document.getElementById('hero-description');
const projectsContainer = document.getElementById('projects-container');
const skillsContainer = document.getElementById('skills-container');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');
const closeModal = document.querySelector('.close');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    startIntroSequence();
});

function startIntroSequence() {
    const intro = document.getElementById('portfolio-intro');
    const profileSelection = document.getElementById('profile-selection');
    const heroVideo = document.getElementById('hero-video');
    
    // After 3.2 seconds, hide intro and show profile selection
    setTimeout(() => {
        intro.style.display = 'none';
        profileSelection.classList.remove('hidden');
        
        // Try to play hero background video with audio ON by default
        if (heroVideo) {
            heroVideo.muted = false;
            heroVideo.volume = 0.6;
            const playPromise = heroVideo.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    updateSoundToggleLabel();
                }).catch(() => {
                    // Autoplay with sound blocked; defer until first user interaction
                    const oneTimePlay = () => {
                        heroVideo.muted = false;
                        heroVideo.volume = 0.6;
                        heroVideo.play().finally(() => updateSoundToggleLabel());
                        document.removeEventListener('click', oneTimePlay);
                        document.removeEventListener('keydown', oneTimePlay);
                        document.removeEventListener('touchstart', oneTimePlay);
                    };
                    document.addEventListener('click', oneTimePlay);
                    document.addEventListener('keydown', oneTimePlay);
                    document.addEventListener('touchstart', oneTimePlay, { passive: true });
                    updateSoundToggleLabel();
                });
            }

            // Auto-mute after first full playback cycle (since loop is on, use a flag)
            let hasCompletedOnce = false;
            heroVideo.addEventListener('timeupdate', function onTimeUpdate() {
                if (!hasCompletedOnce && heroVideo.duration && heroVideo.currentTime >= heroVideo.duration - 0.1) {
                    hasCompletedOnce = true;
                    heroVideo.muted = true;
                    heroVideo.volume = 0;
                    updateSoundToggleLabel();
                }
            });
        }

        // Ensure Home default sections are set after intro
        showHome();
    }, 3200);
}

function updateSoundToggleLabel() {
    const soundToggle = document.getElementById('sound-toggle');
    const heroVideo = document.getElementById('hero-video');
    if (!soundToggle || !heroVideo) return;
    const isMuted = heroVideo.muted;
    soundToggle.setAttribute('aria-pressed', String(!isMuted));
    soundToggle.textContent = isMuted ? 'Unmute' : 'Mute';
}

function initializeEventListeners() {
    // Profile selection
    profileCards.forEach(card => {
        card.addEventListener('click', function() {
            const profile = this.dataset.profile;
            selectProfile(profile);
        });
    });

    // Modal close
    closeModal.addEventListener('click', closeModalHandler);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModalHandler();
        }
    });

    // Resume and LinkedIn buttons
    document.getElementById('resume-btn').addEventListener('click', function() {
        window.open('https://drive.google.com/file/d/19aLIJLJb4U9HY0C5V81cKCWPsqs7lse-/view?usp=sharing', '_blank');
    });

    document.getElementById('linkedin-btn').addEventListener('click', function() {
        window.open('https://www.linkedin.com/in/a-e-sai-dhanush-7809a0265/', '_blank');
    });

    // Mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Show Professional section on click
    const professionalSection = document.getElementById('professional');
    const navProfessional = document.getElementById('nav-professional');
    const navHome = document.getElementById('nav-home');
    const navProjects = document.getElementById('nav-projects');
    const projectsSection = document.getElementById('projects');
    const navSkills = document.getElementById('nav-skills');
    const skillsSection = document.getElementById('skills');
    const navHire = document.getElementById('nav-hire');
    const hireSection = document.getElementById('hire');
    const navCertificates = document.getElementById('nav-certificates');
    const certificatesSection = document.getElementById('certificates');

    if (navProfessional && professionalSection) {
        navProfessional.addEventListener('click', function(e) {
            e.preventDefault();
            showOnlySection(professionalSection);
        });
    }

    if (navHome && professionalSection) {
        navHome.addEventListener('click', function(e) {
            e.preventDefault();
            showHome();
        });
    }

    if (navProjects && projectsSection) {
        navProjects.addEventListener('click', function(e) {
            e.preventDefault();
            showOnlySection(projectsSection);
        });
    }

    if (navSkills && skillsSection) {
        navSkills.addEventListener('click', function(e) {
            e.preventDefault();
            showOnlySection(skillsSection);
        });
    }

    if (navHire && hireSection) {
        navHire.addEventListener('click', function(e) {
            e.preventDefault();
            showOnlySection(hireSection);
        });
    }

    if (navCertificates && certificatesSection) {
        navCertificates.addEventListener('click', function(e) {
            e.preventDefault();
            showOnlySection(certificatesSection);
        });
    }

    // Hire form (simple demo)
    const hireForm = document.getElementById('hire-form');
    if (hireForm) {
        hireForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('hire-name').value.trim();
            const email = document.getElementById('hire-email').value.trim();
            const message = document.getElementById('hire-message').value.trim();
            if (!name || !email || !message) return;
            alert('Thanks! I\'ll reach out to you shortly.');
            hireForm.reset();
        });
    }

    // Sound toggle for hero video
    const soundToggle = document.getElementById('sound-toggle');
    const heroVideo = document.getElementById('hero-video');
    if (soundToggle && heroVideo) {
        // Initialize label to current state
        updateSoundToggleLabel();

        soundToggle.addEventListener('click', function() {
            const isMuted = heroVideo.muted;
            if (isMuted) {
                heroVideo.muted = false;
                heroVideo.volume = 0.6;
                heroVideo.play().catch(() => {});
            } else {
                heroVideo.muted = true;
                heroVideo.volume = 0;
            }
            updateSoundToggleLabel();
        });
    }

    // Project filters
    const filtersContainer = document.getElementById('project-filters');
    if (filtersContainer) {
        filtersContainer.addEventListener('change', handleProjectFilterChange);
        // initial apply
        handleProjectFilterChange();
    }

    // Carousel buttons
    const projectsContainerEl = document.getElementById('projects-static');
    const prevBtn = document.getElementById('projects-prev');
    const nextBtn = document.getElementById('projects-next');
    if (projectsContainerEl && prevBtn && nextBtn) {
        const scrollAmount = 340; // a bit more than card width
        prevBtn.addEventListener('click', () => {
            projectsContainerEl.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
        nextBtn.addEventListener('click', () => {
            projectsContainerEl.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }
}

function showOnlySection(sectionToShow) {
    const sections = [
        document.getElementById('professional'),
        document.getElementById('skills'),
        document.getElementById('projects'),
        document.getElementById('hire'),
        document.getElementById('certificates')
    ].filter(Boolean);

    sections.forEach(sec => {
        if (sec === sectionToShow) {
            sec.classList.remove('hidden');
        } else {
            sec.classList.add('hidden');
        }
    });

    sectionToShow.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function showHome() {
    const sections = [
        document.getElementById('professional'),
        document.getElementById('skills'),
        document.getElementById('projects'),
        document.getElementById('hire'),
        document.getElementById('certificates')
    ].filter(Boolean);
    // Home shows projects and certificates, keeps skills/professional/hire hidden
    sections.forEach(sec => {
        if (sec && (sec.id === 'projects' || sec.id === 'certificates')) {
            sec.classList.remove('hidden');
        } else if (sec) {
            sec.classList.add('hidden');
        }
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleProjectFilterChange() {
    const selectedRadio = document.querySelector('#project-filters input[type="radio"]:checked');
    const value = selectedRadio ? selectedRadio.value : 'all';
    const allSelected = value === 'all';
    const cards = document.querySelectorAll('#projects-static .project-card');

    cards.forEach(card => {
        if (allSelected) {
            card.style.display = '';
        } else {
            const tags = (card.getAttribute('data-tags') || '').split(/\s+/);
            const match = tags.includes(value);
            card.style.display = match ? '' : 'none';
        }
    });
}

function selectProfile(profileType) {
    const profile = profileData[profileType];
    
    // Update hero section
    heroTitle.textContent = "A E SAI DHANUSH";
    heroSubtitle.textContent = "FULL STACK DEVELOPER";
    heroDescription.textContent = "Passionate about creating innovative solutions and delivering high-quality software. Experienced in full-stack development with expertise in Java, Spring Boot, and modern web technologies.";

    // Update content sections
    updateProjects(profile.projects);
    // Skills section is now static, no need to update

    // Show portfolio page
    profileSelection.classList.add('hidden');
    portfolioPage.classList.remove('hidden');

    // Scroll to top
    window.scrollTo(0, 0);
}

function updateProjects(projects) {
    // No-op: projects are static now
}

// Skills section is now static, no need for dynamic updates

function createCard(item, type) {
    const card = document.createElement('div');
    card.className = 'card';
    
    card.innerHTML = `
        <div class="card-image">
            <span style="font-size: 3rem;">${item.icon}</span>
        </div>
        <div class="card-content">
            <h3 class="card-title">${item.title}</h3>
            <p class="card-description">${item.description}</p>
            <div class="card-tech">
                ${item.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
    `;

    card.addEventListener('click', function() {
        showModal(item.title, `
            <h3>Description</h3>
            <p>${item.description}</p>
            <h3>Technologies</h3>
            <p>${item.tech.join(', ')}</p>
            ${type === 'project' ? '<h3>Demo</h3><p>Click the button below to view the live demo or source code.</p>' : ''}
        `);
    });

    return card;
}

function createSkillCard(skill) {
    const card = document.createElement('div');
    card.className = 'card';
    
    card.innerHTML = `
        <div class="card-image">
            <span style="font-size: 3rem;">💻</span>
        </div>
        <div class="card-content">
            <h3 class="card-title">${skill.name}</h3>
            <div class="skill-bar">
                <div class="skill-progress" style="width: ${skill.level}%"></div>
            </div>
            <p class="skill-percentage">${skill.level}%</p>
        </div>
    `;

    return card;
}

function createExperienceCard(exp) {
    const card = document.createElement('div');
    card.className = 'card';
    
    card.innerHTML = `
        <div class="card-image">
            <span style="font-size: 3rem;">🏢</span>
        </div>
        <div class="card-content">
            <h3 class="card-title">${exp.title}</h3>
            <p class="company">${exp.company}</p>
            <p class="duration">${exp.duration}</p>
            <p class="card-description">${exp.description}</p>
        </div>
    `;

    return card;
}

function showModal(title, content) {
    modalTitle.textContent = title;
    modalContent.innerHTML = content;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModalHandler() {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Add skill bar styles dynamically
const style = document.createElement('style');
style.textContent = `
    .skill-bar {
        width: 100%;
        height: 8px;
        background: #444;
        border-radius: 4px;
        overflow: hidden;
        margin: 0.5rem 0;
    }
    
    .skill-progress {
        height: 100%;
        background: linear-gradient(90deg, #e50914, #ff6b6b);
        transition: width 0.3s ease;
    }
    
    .skill-percentage {
        font-size: 0.9rem;
        color: #e50914;
        font-weight: 600;
        margin: 0;
    }
    
    .company {
        color: #e50914;
        font-weight: 600;
        margin: 0.25rem 0;
    }
    
    .duration {
        color: #888;
        font-size: 0.9rem;
        margin: 0.25rem 0 0.5rem 0;
    }
`;
document.head.appendChild(style);
