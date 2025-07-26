import React, { useState, useEffect, useRef } from 'react';
// Correct import from 'react-router-dom' for modern React Router
import { Link } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SkillsSection from '../../components/Skills/Skills';
import AboutSection from '../../components/About/About';
import ExperienceSection from '../../components/Experience/Experience';
import ProjectsSection from '../../components/Projects/Projects';
import HeroImageMasonry from '../../components/HeroImageOrb/HeroImageOrb.jsx';

const Home = () => {
  // State for active navigation link
  const [activeLink, setActiveLink] = useState('home');

  // Refs for each section for scroll-spy functionality
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  // Effect for updating active nav link on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      let currentSection = 'home';

      for (const [sectionName, ref] of Object.entries(sectionRefs)) {
        const section = ref.current;
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (
            scrollPosition >= sectionTop - 100 &&
            scrollPosition < sectionTop + sectionHeight - 100
          ) {
            currentSection = sectionName;
          }
        }
      }
      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionRefs]);

  // Handler for smooth scrolling to sections
  const handleNavLinkClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for fixed header
        behavior: 'smooth',
      });
    }
  };

  // Form submission handler
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    e.target.reset();
  };

  return (
    <div className="bg-gray-50 text-gray-800">
      <Header
        activeLink={activeLink}
        onNavLinkClick={(e, id) => handleNavLinkClick(e, id)}
      />

      <main>
        {/* --- Hero Section --- */}
        <section id="home" ref={sectionRefs.home} className="h-screen flex">
          {/* Left Panel - Text Content */}
          <div className="w-1/2 flex justify-center items-center px-8 lg:px-16 pb-[100px]">
            <div className="max-w-lg">
              <h1 className="text-4xl md:text-5xl lg:text-[40px] font-bold leading-tight mb-4">
                Hi, I'm <span className="gradient-text">Joshua Mukisa</span>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-[30px] font-semibold text-gray-600 mb-6">
                Software Developer
              </h2>
              <p className="text-lg md:text-[18px] text-gray-500 mb-8 font-[400]">
                I'm a software developer with 5+ years of experience building
                full-stack apps, AI/ML systems, and real-world IoT solutions.
                I'm driven by the goal to see Wakanda become a reality and the
                desire to inspire a generation of Africans to rise, lead, and
                redefine the global tech space.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="#contact"
                  onClick={(e) => handleNavLinkClick(e, 'contact')}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 text-center text-[16px]"
                >
                  Get In Touch
                </Link>
                <Link
                  to="#projects"
                  onClick={(e) => handleNavLinkClick(e, 'projects')}
                  className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-300 text-center text-[16px]"
                >
                  View Work
                </Link>
              </div>
            </div>
          </div>

          {/* Right Panel - Masonry Layout */}
          <div className="w-1/2 h-[100%]">
            <HeroImageMasonry />
          </div>
        </section>

        {/* --- About Section --- */}
        <AboutSection sectionRef={sectionRefs.about} />

        {/* --- Skills Section --- */}
        <SkillsSection sectionRef={sectionRefs.skills} />

        {/* --- Experience Section (Newly Added) --- */}
        <ExperienceSection sectionRef={sectionRefs.experience} />

        {/* --- Projects Section (Updated) --- */}
        <ProjectsSection sectionRef={sectionRefs.projects} />

        {/* --- Contact Section (Updated) --- */}
        <section
          id="contact"
          ref={sectionRefs.contact}
          className="py-16 bg-white"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
            </div>
            <div className="md:flex md:space-x-8">
              <div className="md:w-1/2 mb-12 md:mb-0">
                <h3 className="text-xl font-semibold mb-6">
                  Contact Information
                </h3>
                <p className="text-gray-600 mb-8">
                  I'm currently open to new opportunities, interesting projects,
                  or just tech discussions. Feel free to reach out!
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                      <i className="fas fa-envelope text-blue-500"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Email</h4>
                      <a
                        href="mailto:kiryowajoshua22@gmail.com"
                        className="text-blue-500 hover:text-blue-700"
                      >
                        kiryowajoshua22@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center mr-4">
                      <i className="fas fa-phone-alt text-purple-500"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Phone</h4>
                      <a
                        href="tel:+256755779927"
                        className="text-gray-600 hover:text-gray-900"
                      >
                        +256 755 779 927
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mr-4">
                      <i className="fas fa-map-marker-alt text-green-500"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Location</h4>
                      <p className="text-gray-600">Naalya Estate, Uganda</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="font-medium text-gray-900 mb-4">
                    Connect with me
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-blue-100 hover:text-blue-500"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a
                      href="https://github.com/Josh-The-Developapa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-800 hover:text-white"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-blue-400 hover:text-white"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <form className="space-y-6" onSubmit={handleFormSubmit}>
                  {/* Form fields */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-300"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-300"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-300"
                      placeholder="Subject"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-300"
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
