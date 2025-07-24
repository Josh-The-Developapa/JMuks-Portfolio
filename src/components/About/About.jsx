import React from 'react';

const aboutConfig = {
  title: 'About Me',
  subtitle: '',
  whoAmI: {
    heading: 'Who I Am',
    description:
      "I'm a passionate software developer with 5+ years of experience building full-stack web apps. I also work on AI/ML projects—both training models from scratch and using pre-trained ones—and have hands-on experience with IoT, including Arduino-based real-world builds.",
    image: {
      src: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      alt: 'Alex working',
    },
  },
  expertise: [
    {
      title: 'Full-Stack Development',
      description:
        'Expertise in both frontend and backend technologies to deliver complete solutions.',
      icon: 'fas fa-code',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-500',
    },
    {
      title: 'AI & Machine Learning',
      description:
        'Building and training ML models with PyTorch and TensorFlow, plus integrating pre-trained models into custom apps.',
      icon: 'fas fa-brain',
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-500',
    },
    {
      title: 'IoT & Embedded Systems',
      description:
        'Developing real-world hardware-software solutions using Arduino and sensor interfacing for IoT projects.',
      icon: 'fas fa-microchip',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-500',
    },
    {
      title: 'UI/UX Design',
      description:
        'Designing intuitive, aesthetic user experiences with Figma, currently honing skills toward mastery.',
      icon: 'fas fa-pencil-ruler',
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-500',
    },
  ],
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/Josh-The-Developapa',
      icon: 'fab fa-github',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: 'fab fa-linkedin',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/jmuks_k/',
      icon: 'fab fa-instagram',
    },
    {
      name: 'Resume',
      url: '/alex-carter-resume.pdf',
      icon: 'fas fa-file-alt',
    },
  ],
};

const SectionHeader = ({ title, subtitle = '', className = '' }) => (
  <div className={`text-center mb-10 ${className}`}>
    <h2 className="text-3xl font-bold mb-4">{title}</h2>
    {subtitle && <p className="text-gray-600 mb-4">{subtitle}</p>}
    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
  </div>
);

const ProfileImage = ({ image }) => (
  <div className="h-full w-full">
    <img
      src={image.src}
      alt={image.alt}
      className="w-full h-full object-cover"
    />
  </div>
);

const ExpertiseCard = ({ expertise }) => (
  <div className="bg-gray-50 p-4 rounded-lg">
    <div className="flex items-center mb-2">
      <div
        className={`w-8 h-8 rounded-full ${expertise.iconBg} flex items-center justify-center mr-3`}
      >
        <i className={`${expertise.icon} ${expertise.iconColor}`}></i>
      </div>
      <h4 className="font-medium">{expertise.title}</h4>
    </div>
    <p className="text-gray-500 text-sm">{expertise.description}</p>
  </div>
);

const SocialLink = ({ link }) => (
  <a
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-300"
  >
    <i className={`${link.icon} mr-2`}></i> {link.name}
  </a>
);

const AboutSection = ({ config = aboutConfig }) => {
  return (
    <section className="w-full min-h-[95vh]  bg-white flex flex-col mb-[100px]">
      <div className="flex flex-col md:flex-row w-full h-full">
        {/* Left: Full height image, 50% width on desktop */}
        <div className="w-full md:w-1/2 h-[350px] md:h-[780px]">
          <ProfileImage image={config.whoAmI.image} />
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
          <SectionHeader title={config.title} subtitle={config.subtitle} />
          <h3 className="text-2xl font-semibold mb-4">
            {config.whoAmI.heading}
          </h3>
          <p className="text-gray-600 mb-6">{config.whoAmI.description}</p>

          {/* Expertise */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {config.expertise.map((expertise, index) => (
              <ExpertiseCard key={`expertise-${index}`} expertise={expertise} />
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4">
            {config.socialLinks.map((link, index) => (
              <SocialLink key={`social-${index}`} link={link} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
