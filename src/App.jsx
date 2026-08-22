import { useState, useEffect, useRef } from 'react';
import './App.css';
// ADD THESE IMPORTS:
import aiImage from './assets/ai-project.png';
import yogaImage from './assets/yoga-project.png';
import democraticImage from './assets/democratic-project.png';
import logoImage from './assets/logo.png';

function App() {
  const [inputText, setInputText] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeAnswer, setActiveAnswer] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Create a reference for the chatbox boundary
  const chatboxRef = useRef(null);

  // Add this right under your mousePosition state
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Custom Cursor Logic
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Click-Outside Logic
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the click is outside the chatbox boundary, close the dropdown
      if (chatboxRef.current && !chatboxRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const prompts = [
    {
      q: "What technologies do you use?",
      a: "I build frontend interfaces with React, JavaScript, HTML, and CSS. On the backend, I work with Python, Flask, Node.js, and MongoDB for data management."
    },
    {
      q: "What kind of freelance services do you offer?",
      a: "I specialize in remote work, offering custom website development for businesses, Python automation scripts to save time, full-stack web applications, and modern UI design."
    },
    {
      q: "Tell me about your best projects.",
      a: "My flagship projects include an AI Research Paper Similarity Detector built with Python and NLP, and YogaConnect, a community-focused wellness platform."
    },
    {
      q: "Where are you based?",
      a: "I'm currently a 3rd-year BCA student at Dev Sanskriti Vishwavidyalaya in Haridwar, India. I focus entirely on remote freelance work."
    }
  ];

  const handlePromptClick = (prompt) => {
    setInputText(prompt.q);
    setIsDropdownOpen(false);
    setActiveAnswer(null); 
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    const match = prompts.find(p => p.q.toLowerCase() === inputText.toLowerCase());
    
    if (match) {
      setActiveAnswer(match.a);
      setIsDropdownOpen(false);
    } else if (inputText.trim() !== '') {
      window.open(`mailto:rishikeshp290704@gmail.com?subject=Portfolio Inquiry&body=${encodeURIComponent(inputText)}`);
      setInputText('');
      setActiveAnswer(null);
    }
  };

  const resetChat = () => {
    setActiveAnswer(null);
    setInputText('');
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      {/* CUSTOM CURSOR */}
      <div className="cursor-dot" style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}></div>
      <div className="cursor-ring" style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}></div>

      {/* NAVIGATION BAR */}
      <nav className="navbar">
        <a href="#" onClick={scrollToTop} className="logo-img-wrapper">
          <img src={logoImage} alt="Rishikesh Logo" className="navbar-logo-img" />
        </a>
        <div className="nav-links">
          <a href="#projects">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-glow"></div>
        <div className="hero-grid-bg"></div>
        
        <div className="hero-split">
          
          {/* LEFT SIDE: DETAILS & CTA */}
          <div className="hero-left">
            <div className="currently-building">
              <span className="pulse-dot"></span>
              <span className="build-text">Currently Building: <strong>AI Research Assistant</strong></span>
            </div>

            <h1>
              Rishikesh
              <br />
              <span>Priyadarshi</span>
            </h1>

            <p className="hero-role">
              Web Developer & BCA Student
            </p>

            <p className="hero-description">
              I build clean, responsive websites and digital experiences
              that turn ideas into useful products.
            </p>

            <div className="hero-left-cta">
              <a href="#contact" className="hero-btn">Let's Talk ↗</a>
            </div>
          </div>

          {/* RIGHT SIDE: INTERACTIVE AI CHATBOX */}
          <div className="hero-right">
            <div className="chatbox-glass-card">
              <h3 className="card-title">Ask me anything</h3>
              
              {/* Added the ref here to track clicks outside this container! */}
              <div className="chatbox-wrapper-relative" ref={chatboxRef}>
                <form className="chatbox-input-wrapper" onSubmit={handleChatSubmit}>
                  <input 
                    type="text" 
                    className="chatbox-input" 
                    placeholder="Select a prompt or say hello..." 
                    value={inputText}
                    onChange={(e) => {
                      setInputText(e.target.value);
                      setIsDropdownOpen(true);
                      setActiveAnswer(null);
                    }}
                    onFocus={() => setIsDropdownOpen(true)}
                  />
                  <button type="submit" className="chatbox-submit">→</button>
                </form>

                {/* DROPDOWN MENU */}
                {isDropdownOpen && (
                  <div className="chatbox-dropdown">
                    <p className="dropdown-label">Suggested Prompts</p>
                    {prompts.map((p, index) => (
                      <button key={index} className="dropdown-item" onClick={() => handlePromptClick(p)}>
                        ✨ {p.q}
                      </button>
                    ))}
                  </div>
                )}

                {/* AI RESPONSE BOX WITH RESET BUTTON */}
                {activeAnswer && (
                  <div className="chat-response-box">
                    <div className="response-header">
                      <div className="response-header-left">
                        <span className="response-icon">🤖</span>
                        <span className="response-title">Answer</span>
                      </div>
                      <button className="reset-chat-btn" onClick={resetChat} title="Reset Chat">✕</button>
                    </div>
                    <p className="response-text">{activeAnswer}</p>
                  </div>
                )}
              </div>
              
              {/* MINIMALIST PILL TAGS */}
              <div className="chatbox-suggestions">
                <p>Or jump straight to:</p>
                <div className="suggestion-pills">
                  <a href="#projects" className="pill-link">View Projects</a>
                  <a href="#services" className="pill-link">Services</a>
                  <a href="/cv.pdf" className="pill-link highlight" target="_blank" rel="noreferrer">Download CV ↓</a>
                  <a href="#contact" className="pill-link">Hire Me 🤝</a>
                  <a href="https://github.com/C0DEXTESTER" className="pill-link" target="_blank" rel="noreferrer">GitHub ↗</a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="projects-section">
        <div className="section-header">
          <h2>Selected Work</h2>
          <p>Practical solutions I've built to solve real problems.</p>
        </div>

        <div className="project-grid">
          
          {/* Project 01: AI Research Paper (Always Visible) */}
          <div className="project-card">
            <div className="project-content-left">
              <div className="project-number">01</div>
              <h3>
                <a href="https://researchguard-ai-0n7j.onrender.com/" target="_blank" rel="noreferrer" className="project-title-link">
                  AI Research Paper Similarity Detector
                </a>
              </h3>
              <p className="tech-stack">Python &middot; Flask &middot; NLP &middot; Embeddings</p>
              <p className="project-desc">
                An AI-powered application that compares research papers and identifies semantically similar content to detect duplicates.
              </p>
              <a href="https://researchguard-ai-0n7j.onrender.com/" target="_blank" rel="noreferrer" className="project-link">View Project ↗</a>
            </div>
            <div className="project-image-right">
              <a href="https://researchguard-ai-0n7j.onrender.com/" target="_blank" rel="noreferrer" className="image-wrapper-link">
                <img src={aiImage} alt="AI Research Paper Similarity Detector" className="project-screenshot" />
              </a>
            </div>
          </div>

          {/* Project 02: Democratic Insights (Always Visible) */}
          <div className="project-card">
            <div className="project-content-left">
              <div className="project-number">02</div>
              <h3>
                <a href="https://democratic-insights.vercel.app/" target="_blank" rel="noreferrer" className="project-title-link">
                  Democratic Insights
                </a>
              </h3>
              <p className="tech-stack">HTML5 &middot; CSS3 &middot; JavaScript &middot; Python</p>
              <p className="project-desc">
                A comprehensive political consulting and public affairs web platform featuring modular service pages and Python automation scripts.
              </p>
              <a href="https://democratic-insights.vercel.app/" target="_blank" rel="noreferrer" className="project-link">View Project ↗</a>
            </div>
            <div className="project-image-right">
              <a href="https://democratic-insights.vercel.app/" target="_blank" rel="noreferrer" className="image-wrapper-link">
                <img src={democraticImage} alt="Democratic Insights Web Platform" className="project-screenshot" />
              </a>
            </div>
          </div>

          {/* Project 03: YogaConnect (Hidden behind "See More" button) */}
          {showAllProjects && (
            <div className="project-card fade-in">
              <div className="project-content-left">
                <div className="project-number">03</div>
                <h3>
                  <a href="https://yogaconnect.vercel.app/" target="_blank" rel="noreferrer" className="project-title-link">
                    YogaConnect
                  </a>
                </h3>
                <p className="tech-stack">WordPress &middot; CMS</p>
                <p className="project-desc">
                  An interactive, community-focused platform designed to bridge traditional yoga knowledge with digital accessibility.
                </p>
                <a href="https://yogaconnect.vercel.app/" target="_blank" rel="noreferrer" className="project-link">View Project ↗</a>
              </div>
              <div className="project-image-right">
                <a href="https://yogaconnect.vercel.app/" target="_blank" rel="noreferrer" className="image-wrapper-link">
                  <img src={yogaImage} alt="YogaConnect Platform" className="project-screenshot" />
                </a>
              </div>
            </div>
          )}
          
        </div>

        {/* SEE MORE BUTTON */}
        <div className="see-more-container">
          <button 
            className="see-more-btn" 
            onClick={() => setShowAllProjects(!showAllProjects)}
          >
            {showAllProjects ? "See Less ↑" : "See More Projects ↓"}
          </button>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="services-section">
        <div className="section-header">
          <h2>What I Build</h2>
          <p>Practical services I offer to help businesses, students, and creators.</p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon-box">
              {/* Code / Laptop SVG Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3>Website Development</h3>
            <p>Responsive, fast, and modern websites tailored for individuals and small businesses.</p>
            <div className="service-tags">
              <span>Landing Pages</span>
              <span>WordPress</span>
              <span>Responsive</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon-box">
              {/* Web App / Cpu SVG Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                <rect x="9" y="9" width="6" height="6"></rect>
                <line x1="9" y1="1" x2="9" y2="4"></line>
                <line x1="15" y1="1" x2="15" y2="4"></line>
                <line x1="9" y1="20" x2="9" y2="23"></line>
                <line x1="15" y1="20" x2="15" y2="23"></line>
                <line x1="20" y1="9" x2="23" y2="9"></line>
                <line x1="20" y1="15" x2="23" y2="15"></line>
                <line x1="1" y1="9" x2="4" y2="9"></line>
                <line x1="1" y1="15" x2="4" y2="15"></line>
              </svg>
            </div>
            <h3>Web Applications</h3>
            <p>Interactive web applications built with full-stack capabilities, databases, and clean code.</p>
            <div className="service-tags">
              <span>React</span>
              <span>Node.js</span>
              <span>Databases</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon-box">
              {/* Terminal / Automation SVG Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="4 17 10 11 4 5"></polyline>
                <line x1="12" y1="19" x2="20" y2="19"></line>
              </svg>
            </div>
            <h3>Python Automation</h3>
            <p>Custom scripts and tools that automate repetitive data processing and file management tasks.</p>
            <div className="service-tags">
              <span>Scripts</span>
              <span>Data Processing</span>
              <span>Flask</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon-box">
              {/* Design / Layout SVG Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                <path d="M2 12h20"></path>
              </svg>
            </div>
            <h3>UI & Digital Design</h3>
            <p>Clean digital posters, social media creatives, and visual assets designed with modern tools.</p>
            <div className="service-tags">
              <span>Canva</span>
              <span>Figma</span>
              <span>Posters</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT & SKILLS SECTION */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              I'm a 3rd-year BCA student at Dev Sanskriti Vishwavidyalaya, 
              focused on building practical software and improving my skills through real-world projects.
            </p>
            <p>
              My work centers around creating responsive websites, Python automation tools, and exploring AI/NLP applications. 
              I enjoy bridging the gap between design and development to build digital products that solve actual problems for businesses and creators.
            </p>
          </div>
          
          <div className="skills-container">
            <h3>Technical Skills</h3>
            
            <div className="skill-category">
              <h4>Frontend</h4>
              <div className="skill-tags">
                <span>HTML5</span>
                <span>CSS3</span>
                <span>JavaScript</span>
                <span>React</span>
              </div>
            </div>
            <div className="skill-category">
              <h4>Backend & Data</h4>
              <div className="skill-tags">
                <span>Python</span>
                <span>Node.js</span>
                <span>Flask</span>
                <span>MongoDB</span>
              </div>
            </div>
            <div className="skill-category">
              <h4>Tools & Design</h4>
              <div className="skill-tags">
                <span>Git & GitHub</span>
                <span>VS Code</span>
                <span>Canva</span>
                <span>Figma</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="contact-section">
        <div className="contact-content">
          <h2>Let's build something together.</h2>
          <p>
            Whether you need a simple website, a custom web app, or just want to say hi, my inbox is always open.
          </p>
          <a href="mailto:rishikeshp290704@gmail.com" className="btn btn-primary contact-btn">
            Say Hello ↗
          </a>
          
          <div className="social-links">
            <a href="https://github.com/C0DEXTESTER" target="_blank" rel="noreferrer">GitHub</a>
            <a href="http://www.linkedin.com/in/rishikesh-priyadarshi-207a03346" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://instagram.com/007_rishikeshpriyadarshi" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2026 Rishikesh Priyadarshi. Built with React.</p>
      </footer>
    </main>
  );
}

export default App;
