import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Brain, Database, Cpu, User, Briefcase, Award } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: "Neural Network Image Classifier",
      description: "Advanced CNN architecture with 97% accuracy using TensorFlow and custom data augmentation techniques for real-time image recognition.",
      tech: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy"],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "#",
      demo: "#"
    },
    {
      title: "AI-Powered Chatbot System",
      description: "Intelligent conversational AI using transformer architecture and BERT embeddings with context-aware response generation.",
      tech: ["Python", "BERT", "Transformers", "Flask", "NLP"],
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "#",
      demo: "#"
    },
    {
      title: "Predictive Analytics Engine",
      description: "Machine learning platform for business forecasting using ensemble methods, time series analysis, and real-time data processing.",
      tech: ["Python", "Scikit-learn", "Pandas", "React", "D3.js"],
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpg?auto=compress&cs=tinysrgb&w=800",
      github: "#",
      demo: "#"
    },
    {
      title: "Computer Vision Detection",
      description: "Real-time object detection system using YOLO v8 architecture optimized for edge computing and autonomous systems.",
      tech: ["Python", "YOLO", "OpenCV", "PyTorch", "CUDA"],
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "#",
      demo: "#"
    },
    {
      title: "Deep Learning Framework",
      description: "Custom neural network framework built from scratch with automatic differentiation and GPU acceleration support.",
      tech: ["Python", "CUDA", "NumPy", "C++", "OpenMP"],
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "#",
      demo: "#"
    },
    {
      title: "AI Research Platform",
      description: "Collaborative research environment for ML experiments with version control, model tracking, and automated deployment.",
      tech: ["Python", "MLflow", "Docker", "Kubernetes", "FastAPI"],
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "#",
      demo: "#"
    }
  ];

  const skills = [
    { name: "Machine Learning", icon: Brain, level: 95, category: "AI/ML" },
    { name: "Deep Learning", icon: Cpu, level: 92, category: "AI/ML" },
    { name: "Data Science", icon: Database, level: 88, category: "Analytics" },
    { name: "Python", icon: Code, level: 96, category: "Programming" },
    { name: "TensorFlow", icon: Brain, level: 90, category: "Frameworks" },
    { name: "PyTorch", icon: Cpu, level: 87, category: "Frameworks" },
    { name: "Computer Vision", icon: Brain, level: 85, category: "AI/ML" },
    { name: "NLP", icon: Code, level: 83, category: "AI/ML" }
  ];

  const navItems = [
    { name: 'Home', id: 'home', icon: User },
    { name: 'About', id: 'about', icon: User },
    { name: 'Projects', id: 'projects', icon: Briefcase },
    { name: 'Skills', id: 'skills', icon: Award },
    { name: 'Contact', id: 'contact', icon: Mail }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black">
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid-pattern"></div>
          </div>
          
          {/* Neon Glow Effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-4000"></div>
          
          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60 animate-float-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${15 + Math.random() * 10}s`
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent glow-text">
              VDK
            </div>
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-6 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 group ${
                    activeSection === item.id
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 glow-button'
                      : 'text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent glow-text">
              VISHAL DEV KUMAR
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-6 glow-line"></div>
          </div>
          
          <p className="text-2xl md:text-3xl text-cyan-400 mb-4 font-light tracking-wider glow-text-sm">
            AI & ML ENGINEER
          </p>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Architecting the future through artificial intelligence and machine learning. 
            Transforming complex data into intelligent solutions that drive innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transform hover:scale-105 transition-all duration-300 glow-button-strong"
            >
              VIEW PROJECTS
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-cyan-500 rounded-lg text-cyan-400 font-semibold hover:bg-cyan-500/10 transform hover:scale-105 transition-all duration-300 glow-button"
            >
              GET IN TOUCH
            </button>
          </div>
          
          <div className="mt-16">
            <ChevronDown 
              className="w-8 h-8 text-cyan-400 mx-auto animate-bounce cursor-pointer glow-icon" 
              onClick={() => scrollToSection('about')}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent glow-text">
            ABOUT
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="neon-card p-8">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 glow-text-sm">Background</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I am a passionate B.Tech student at Malla Reddy University College, driven by an insatiable curiosity for artificial intelligence and machine learning. As a detail-oriented AI & ML Engineer, I bring a robust foundation in computer science, advanced machine learning algorithms, and comprehensive data analysis.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  My expertise spans deep learning frameworks, innovative problem-solving methodologies, and the development of intelligent, scalable solutions that push the boundaries of what's possible.
                </p>
              </div>
              
              <div className="neon-card p-8">
                <h3 className="text-2xl font-bold text-purple-400 mb-4 glow-text-sm">Philosophy</h3>
                <p className="text-gray-300 leading-relaxed">
                  I believe in the transformative power of AI to solve real-world challenges. My approach combines rigorous analytical thinking with creative problem-solving, always striving for solutions that are not just technically sound but also practically impactful.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="neon-card p-8 text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center glow-avatar">
                  <User className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2">Vishal Dev Kumar</h3>
                <p className="text-gray-400">AI & ML Engineer</p>
                <p className="text-gray-400">B.Tech Student</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="neon-card p-6 text-center">
                  <Brain className="w-8 h-8 text-cyan-400 mx-auto mb-2 glow-icon" />
                  <p className="text-sm text-gray-300">Deep Learning</p>
                </div>
                <div className="neon-card p-6 text-center">
                  <Database className="w-8 h-8 text-purple-400 mx-auto mb-2 glow-icon" />
                  <p className="text-sm text-gray-300">Data Science</p>
                </div>
                <div className="neon-card p-6 text-center">
                  <Cpu className="w-8 h-8 text-blue-400 mx-auto mb-2 glow-icon" />
                  <p className="text-sm text-gray-300">ML Engineering</p>
                </div>
                <div className="neon-card p-6 text-center">
                  <Code className="w-8 h-8 text-green-400 mx-auto mb-2 glow-icon" />
                  <p className="text-sm text-gray-300">Programming</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent glow-text">
            PROJECTS
          </h2>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="neon-card group hover:scale-105 transition-all duration-500 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse glow-dot"></div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-cyan-400 glow-text-sm">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs border border-cyan-500/30 glow-tag"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-all duration-300 text-sm border border-gray-700 hover:border-cyan-500/50"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      CODE
                    </a>
                    <a
                      href={project.demo}
                      className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 rounded-lg transition-all duration-300 text-sm border border-cyan-500/30 glow-button"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      DEMO
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent glow-text">
            SKILLS
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="neon-card p-6 group hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <skill.icon className="w-8 h-8 text-cyan-400 mr-4 glow-icon" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                    <p className="text-sm text-gray-400">{skill.category}</p>
                  </div>
                  <span className="text-cyan-400 font-bold text-lg">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out glow-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent glow-text">
            CONTACT
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready to collaborate on cutting-edge AI solutions? Let's build the future together.
          </p>
          
          <div className="flex justify-center space-x-8 mb-12">
            <a
              href="#"
              className="group relative neon-social-button bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-2xl transform hover:scale-110 transition-all duration-300"
            >
              <Github className="w-10 h-10 text-white group-hover:text-cyan-400 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 glow-social"></div>
            </a>
            
            <a
              href="#"
              className="group relative neon-social-button bg-gradient-to-r from-blue-800 to-blue-900 p-6 rounded-2xl transform hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-10 h-10 text-white group-hover:text-cyan-400 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 glow-social"></div>
            </a>
            
            <a
              href="mailto:vishal@example.com"
              className="group relative neon-social-button bg-gradient-to-r from-purple-800 to-purple-900 p-6 rounded-2xl transform hover:scale-110 transition-all duration-300"
            >
              <Mail className="w-10 h-10 text-white group-hover:text-cyan-400 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 glow-social"></div>
            </a>
          </div>
          
          <div className="neon-card p-8 max-w-md mx-auto">
            <h3 className="text-xl font-bold text-cyan-400 mb-4 glow-text-sm">Let's Connect</h3>
            <p className="text-gray-300 text-sm">
              Open to opportunities in AI/ML engineering, research collaborations, and innovative projects.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Vishal Dev Kumar. Engineered with precision for AI innovation.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;