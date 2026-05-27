import { FaRegFileAlt, FaGlobe, FaSearch, FaHistory, FaShieldAlt, FaChartLine, FaEnvelope, FaCertificate } from 'react-icons/fa';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      category: 'Foreign Affairs',
      title: 'Nepal-India Border Tensions: A Diplomatic Analysis',
      desc: 'In-depth coverage of the evolving diplomatic relations and border disputes between Nepal and India.',
      icon: <FaRegFileAlt className="portfolio-card-icon" />,
      link: '#',
    },
    {
      id: 2,
      category: 'International Relations',
      title: "China's Belt and Road Initiative, Nepal,",
      desc: 'Comprehensive reporting on Chinese infrastructure investments and their geopolitical implications.',
      icon: <FaGlobe className="portfolio-card-icon" />,
      link: '#',
    },
    {
      id: 3,
      category: 'Diplomacy',
      title: 'South Asian Summit Coverage',
      desc: 'Live reporting and analysis from regional diplomatic summits and bilateral meetings.',
      icon: <FaSearch className="portfolio-card-icon" />,
      link: '#',
    },
    {
      id: 4,
      category: 'Political Analysis',
      title: "Nepal's Political Transition,",
      desc: "Field reporting on Nepal's democratic developments and constitutional changes.",
      icon: <FaHistory className="portfolio-card-icon" />,
      link: '#',
    },
    {
      id: 5,
      category: 'Security',
      title: 'Regional Security Dynamics',
      desc: 'Analysis of security cooperation and challenges in the South Asian region.',
      icon: <FaShieldAlt className="portfolio-card-icon" />,
      link: '#',
    },
    {
      id: 6,
      category: 'Economics',
      title: 'Economic Diplomacy in the Himalayas',
      desc: 'Coverage of trade agreements and economic partnerships affecting Nepal.',
      icon: <FaChartLine className="portfolio-card-icon" />,
      link: '#',
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="section-title-wrap">
          <div className="section-tag"></div>
          <h2 className="section-title">Portfolio</h2>
          <p className="section-subtitle">Featured work and published reports</p>
        </div>

        <div className="grid-3 portfolio-grid">
          {projects.map((project) => (
            <div className="portfolio-card card" key={project.id}>
              <div className="portfolio-img-box">
                <div className="portfolio-img-overlay"></div>
                {project.icon}
              </div>
              <div className="portfolio-info">
                <span className="portfolio-cat">{project.category}</span>
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-card-desc">{project.desc}</p>
                <a href={project.link} className="portfolio-link">
                  Read More &gt;
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Banners underneath */}
        <div className="portfolio-banners grid-2">
          <div className="banner-card card">
            <div className="banner-icon-box">
              <FaEnvelope className="banner-icon" />
            </div>
            <div className="banner-content">
              <h3 className="banner-title">Muck Rack Portfolio</h3>
              <p className="banner-text">
                View my complete portfolio of published work and media coverage
              </p>
              <a href="#" className="banner-link">
                Visit Profile &gt;
              </a>
            </div>
          </div>

          <div className="banner-card card">
            <div className="banner-icon-box">
              <FaCertificate className="banner-icon" />
            </div>
            <div className="banner-content">
              <h3 className="banner-title">LinkedIn Profile</h3>
              <p className="banner-text">
                Connect with me professionally and view my career history
              </p>
              <a href="#" className="banner-link">
                Visit Profile &gt;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
