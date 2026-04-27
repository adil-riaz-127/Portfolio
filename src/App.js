import './App.css';

function App() {
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
  const project = {
    name: 'MWETANA Schoolink PX',
    description:
      'A web-based school management platform that streamlines admissions, academics, finance, teacher workflows, and parent engagement for educational institutions.',
    image: 'https://mwetanaschoolink.com/assetsLand/media/images/laptop.png',
    link: 'https://mwetanaschoolink.com/PxHome',
  };

  return (
    <div className="portfolio-page">
      <header className="hero">
        <div className="hero-content">
          <p className="hero-role">Dot Net Developer</p>
          <h1>Adil Sanaullah</h1>
          <p className="hero-summary">
            Software Engineer with 4+ years of development experience in
            ASP.NET / .NET Core, RESTful APIs, SQL Server, JavaScript, jQuery,
            MVC, React, and web services. Focused on building robust,
            maintainable, and scalable solutions.
          </p>
          <div className="hero-cta">
            <a href="mailto:adilsanaullah127@gmail.com">Email Me</a>
            <a href="tel:+923216128127">Call Me</a>
          </div>
        </div>
      </header>

      <main className="content">
        <section className="card">
          <h2>Contact</h2>
          <ul>
            <li>Phone: +92 321 6128127</li>
            <li>Email: adilsanaullah127@gmail.com</li>
            <li>Location: Sialkot Bypass, Gujranwala</li>
          </ul>
        </section>

        <section className="card">
          <h2>Skills</h2>
          <div className="tag-list">
            {skills.map((skill) => (
              <span key={skill} className="tag">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="card">
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

        <section className="card">
          <h2>Featured Project</h2>
          <article className="project-card">
            <img src={project.image} alt="MWETANA Schoolink PX project" />
            <div className="project-content">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer">
                Visit Project
              </a>
            </div>
          </article>
        </section>

        <section className="card split">
          <div>
            <h2>Education</h2>
            <h3>University of Central Punjab</h3>
            <p>Bachelor of Computer Science (2015 - 2019)</p>
          </div>
          <div>
            <h2>Languages</h2>
            <ul>
              {languages.map((language) => (
                <li key={language.name}>
                  {language.name} - {language.level}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="card split">
          <div>
            <h2>Certificates</h2>
            <ul>
              {certifications.map((certificate) => (
                <li key={certificate.name}>
                  <strong>{certificate.name}</strong> - {certificate.issuer} ({certificate.date})
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Hobbies</h2>
            <div className="tag-list">
              {hobbies.map((hobby) => (
                <span key={hobby} className="tag">
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
