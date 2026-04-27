import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const navItems = [
    'home',
    'about',
    'education',
    'skills',
    'experience',
    'projects',
    'contact',
  ];
  const skills = [
    'ASP.NET Core',
    'C#',
    'JavaScript',
    'MVC',
    'SQL',
    'RESTful APIs',
    'Entity Framework',
    'AJAX',
    'React.js',
  ];

  const experiences = [
    {
      period: '2022 - Present',
      company: 'Triaxo Solutions',
      role: 'ASP.NET Core Developer',
      points: [
        'Design and implement scalable web applications using .NET Core MVC.',
        'Develop and maintain multiple RESTful API projects using .NET Core Web API.',
        'Strengthen frontend skills by building React.js projects and mastering component-driven development.',
      ],
    },
    {
      period: '2021 - 2022',
      company: 'Siriz Apps',
      role: 'ASP.NET Developer',
      points: [
        'Worked on Mosino One, a secure cloud-based platform for customer experience and property management.',
        'Added new functionalities and optimized existing features for better performance and usability.',
      ],
    },
    {
      period: '2021',
      company: 'Digicare',
      role: 'ASP.NET Intern',
      points: [
        'Gained hands-on experience in ASP.NET MVC web application development.',
        'Contributed to maintaining consistent standards across digital product materials.',
      ],
    },
  ];

  const certifications = [
    {
      name: 'C# for .NET Developers',
      issuer: 'Board Infinity',
      date: 'November 5, 2023',
    },
    {
      name: 'Backend Development using ASP.NET',
      issuer: 'Board Infinity',
      date: 'August 23, 2023',
    },
  ];

  const languages = [
    { name: 'English', level: 'Intermediate' },
    { name: 'Urdu', level: 'Fluent' },
    { name: 'Punjabi', level: 'Fluent' },
  ];

  const hobbies = ['Cricket', 'Badminton', 'Travel'];
  const projects = [
    {
      title: 'MWETANA Schoolink PX',
      image: 'https://mwetanaschoolink.com/assetsLand/media/images/laptop.png',
      challenge:
        'Needed an integrated platform for school operations across academics, finance, and communication.',
      action:
        'Contributed to ASP.NET Core based modules for scalable workflows, stakeholder login access, and reporting.',
      result:
        'Delivered a streamlined school management experience with efficient administrative and educational processes.',
      tech: ['ASP.NET Core', 'SQL Server', 'REST APIs', 'JavaScript'],
      demo: 'https://mwetanaschoolink.com/PxHome',
    },
    {
      title: 'RESTful API Solutions',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
      challenge:
        'Different client applications required stable backend integration with secure and maintainable APIs.',
      action:
        'Designed and implemented .NET Core Web APIs with clean architecture, validation, and database optimization.',
      result:
        'Improved integration reliability and reduced development time for frontend and third-party consumers.',
      tech: ['.NET Core Web API', 'Entity Framework', 'SQL', 'Swagger'],
      demo: '#contact',
    },
    {
      title: 'MVC Business Applications',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
      challenge:
        'Business teams needed robust web applications with fast performance and maintainable codebases.',
      action:
        'Built ASP.NET MVC applications with modular components, optimized queries, and user-focused interfaces.',
      result:
        'Shipped scalable solutions that supported daily operations with better speed and usability.',
      tech: ['ASP.NET MVC', 'C#', 'jQuery', 'AJAX'],
      demo: '#contact',
    },
  ];
  const [activeSection, setActiveSection] = useState('home');
  const [showTop, setShowTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'education',
      'skills',
      'experience',
      'projects',
      'contact',
    ];
    const onScroll = () => {
      const scrollPosition = window.scrollY + 140;
      const visibleSections = sectionIds
        .map((id) => {
          const element = document.getElementById(id);
          return element ? { id, top: element.offsetTop } : null;
        })
        .filter(Boolean)
        .sort((a, b) => a.top - b.top);

      let current = 'home';
      visibleSections.forEach((section) => {
        if (scrollPosition >= section.top) {
          current = section.id;
        }
      });
      setActiveSection(current);
      setShowTop(window.scrollY > 480);
      setIsScrolled(window.scrollY > 40);
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`portfolio-page ${isScrolled ? 'scrolled' : ''}`}>
      <nav className={`top-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-links">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={activeSection === item ? 'active' : ''}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      </nav>

      <header className="hero" id="home">
        <div className="hero-content">
          <div className="hero-left">
            <p className="hero-greeting">Hi, I&apos;m</p>
            <h1>Adil Sanaullah</h1>
            <p className="hero-role">Software Engineer</p>
            <div className="hero-cta">
              <a href="#projects">View My Work</a>
              <a href="mailto:adilsanaullah127@gmail.com">Email Me</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="profile-ring">
              <div className="profile-core">AS</div>
            </div>
          </div>
        </div>
      </header>

      <main className="content">
        <section className="card section-heading-card" id="about">
          <p className="section-kicker">Who I am</p>
          <h2>About Me</h2>
          <p>
            Software Engineer with 4+ years of development experience in
            ASP.NET / .NET Core, RESTful APIs, SQL Server, JavaScript, jQuery,
            MVC, React, and web services. Focused on building robust,
            maintainable, and scalable solutions.
          </p>
          <p>
            Core Tech: .NET Core, ASP.NET MVC, Entity Framework, C#, JavaScript,
            SQL Server, and RESTful APIs.
          </p>
        </section>

        <section className="card" id="contact">
          <h2>Contact</h2>
          <ul>
            <li>Phone: +92 321 6128127</li>
            <li>Email: adilsanaullah127@gmail.com</li>
            <li>Location: Sialkot Bypass, Gujranwala</li>
          </ul>
        </section>

        <section className="card" id="education">
          <p className="section-kicker">My academic background</p>
          <h2>Education & Certifications</h2>
          <div className="timeline">
            <article className="timeline-item">
              <p className="period">2015 - 2019</p>
              <h3>Bachelor of Computer Science</h3>
              <p className="company">University of Central Punjab</p>
            </article>
          </div>
          <div className="cert-grid">
            {certifications.map((certificate) => (
              <article className="mini-card" key={certificate.name}>
                <p className="period">{certificate.date}</p>
                <h3>{certificate.name}</h3>
                <p className="company">{certificate.issuer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="card" id="skills">
          <p className="section-kicker">My stack</p>
          <h2>Skills</h2>
          <div className="tag-list">
            {skills.map((skill) => (
              <span key={skill} className="tag">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="card" id="experience">
          <p className="section-kicker">My journey</p>
          <h2>Work Experience</h2>
          <div className="timeline">
            {experiences.map((item) => (
              <article key={`${item.company}-${item.period}`} className="timeline-item">
                <p className="period">{item.period}</p>
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="card" id="projects">
          <p className="section-kicker">What I&apos;ve built</p>
          <h2>Projects</h2>
          <div className="projects-grid">
            {projects.map((item) => (
              <article className="project-card detailed" key={item.title}>
                <img src={item.image} alt={`${item.title} project preview`} />
                <div className="project-content">
                  <h3>{item.title}</h3>
                  <p>
                    <strong>Challenge:</strong> {item.challenge}
                  </p>
                  <p>
                    <strong>Action:</strong> {item.action}
                  </p>
                  <p>
                    <strong>Result:</strong> {item.result}
                  </p>
                  <div className="tag-list">
                    {item.tech.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={item.demo} target="_blank" rel="noreferrer">
                    View Project
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="card personal-card">
          <h2>Languages & Hobbies</h2>
          <div className="personal-grid">
            <div className="personal-block">
              <h3>Languages</h3>
              <ul className="language-list">
                {languages.map((language) => (
                  <li key={language.name}>
                    <span>{language.name}</span>
                    <strong>{language.level}</strong>
                  </li>
                ))}
              </ul>
            </div>
            <div className="personal-block">
              <h3>Hobbies</h3>
              <div className="tag-list hobby-tags">
                {hobbies.map((hobby) => (
                  <span key={hobby} className="tag">
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {showTop && (
        <button
          className="scroll-top"
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          ^
        </button>
      )}
    </div>
  );
}

export default App;
