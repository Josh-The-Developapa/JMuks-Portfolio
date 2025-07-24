import React from 'react';

// Configuration object for easy modification
const experienceConfig = {
  title: 'Work Experience',
  subtitle: '',
  experiences: [
    {
      title: 'Senior Software Engineer',
      company: 'TechSolutions Inc.',
      period: 'Jan 2021 - Present',
      location: 'San Francisco, CA',
      achievements: [
        'Led a team of 5 developers to build a scalable SaaS platform serving over 50,000 users',
        'Architected and implemented microservices architecture reducing API response time by 40%',
        'Mentored junior developers and conducted technical interviews for new hires',
        'Implemented CI/CD pipelines reducing deployment time from 2 hours to 15 minutes',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Digital Innovations LLC',
      period: 'Mar 2018 - Dec 2020',
      location: 'New York, NY',
      achievements: [
        'Developed and maintained React/Node.js applications for enterprise clients',
        'Optimized database queries improving application performance by 30%',
        'Implemented automated testing increasing code coverage from 60% to 90%',
        'Collaborated with UX designers to create intuitive user interfaces',
      ],
    },
  ],
};

// Reusable Section Header Component
const SectionHeader = ({ title, subtitle = '', className = '' }) => (
  <div className={`text-center mb-16 ${className}`}>
    <h2 className="text-3xl font-bold mb-4">{title}</h2>
    {subtitle && <p className="text-gray-600 mb-4">{subtitle}</p>}
    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
  </div>
);

// Reusable Timeline Dot Component
const TimelineDot = ({
  dotColor = 'bg-blue-500',
  dotSize = 'w-4 h-4',
  borderColor = 'border-white',
  className = '',
}) => (
  <div
    className={`absolute ${dotSize} ${dotColor} rounded-full -left-[31px] md:-left-[55px] mt-1.5 border-2 ${borderColor} ${className}`}
  ></div>
);

// Reusable Experience Card Component
const ExperienceCard = ({
  experience,
  showDot = true,
  dotColor = 'bg-blue-500',
  cardClassName = '',
  headerClassName = '',
  metaClassName = '',
  achievementsClassName = '',
}) => (
  <div className="mb-12 relative">
    {showDot && <TimelineDot dotColor={dotColor} />}
    <div className={`bg-gray-50 p-6 rounded-xl shadow-sm ${cardClassName}`}>
      {/* Header */}
      <div
        className={`flex flex-col md:flex-row md:justify-between md:items-center mb-4 ${headerClassName}`}
      >
        <h3 className="text-xl font-semibold">{experience.title}</h3>
        <span className="text-blue-500 font-medium">{experience.company}</span>
      </div>

      {/* Meta Information */}
      <div
        className={`flex items-center text-gray-500 text-sm mb-4 ${metaClassName}`}
      >
        <span className="mr-4">{experience.period}</span>
        {experience.location && (
          <span>
            <i className="fas fa-map-marker-alt mr-1"></i> {experience.location}
          </span>
        )}
      </div>

      {/* Achievements */}
      {experience.achievements && experience.achievements.length > 0 && (
        <ul
          className={`list-disc pl-5 text-gray-600 space-y-2 ${achievementsClassName}`}
        >
          {experience.achievements.map((achievement, index) => (
            <li key={`achievement-${index}`}>{achievement}</li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

// Reusable Timeline Container Component
const TimelineContainer = ({
  children,
  lineColor = 'border-gray-200',
  className = '',
}) => (
  <div
    className={`relative pl-6 md:pl-12 border-l-2 ${lineColor} ${className}`}
  >
    {children}
  </div>
);

// Main Experience Section Component
const ExperienceSection = ({
  config = experienceConfig,
  sectionId = 'experience',
  sectionRef,
  containerClassName = '',
  timelineClassName = '',
  showTimeline = true,
  timelineLineColor = 'border-gray-200',
  dotColor = 'bg-blue-500',
  cardLayout = 'default', // "default", "compact", "detailed"
}) => {
  const renderExperiences = () => {
    const experienceElements = config.experiences.map((experience, index) => (
      <ExperienceCard
        key={`experience-${index}`}
        experience={experience}
        showDot={showTimeline}
        dotColor={dotColor}
        cardClassName={
          cardLayout === 'compact'
            ? 'p-4'
            : cardLayout === 'detailed'
            ? 'p-8'
            : ''
        }
      />
    ));

    if (showTimeline) {
      return (
        <TimelineContainer
          lineColor={timelineLineColor}
          className={timelineClassName}
        >
          {experienceElements}
        </TimelineContainer>
      );
    }

    return (
      <div className={`space-y-8 ${timelineClassName}`}>
        {experienceElements}
      </div>
    );
  };

  return (
    <section
      id={sectionId}
      ref={sectionRef}
      className={`py-16 bg-white ${containerClassName}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={config.title} subtitle={config.subtitle} />
        {renderExperiences()}
      </div>
    </section>
  );
};

// Example usage with custom configuration
const customExperienceConfig = {
  title: 'Professional Journey',
  subtitle: 'My career progression and achievements',
  experiences: [
    {
      title: 'Lead Developer',
      company: 'Custom Company',
      period: '2022 - Present',
      location: 'Remote',
      achievements: ['Custom achievement 1', 'Custom achievement 2'],
    },
  ],
};

// Alternative configurations for different layouts
const compactExperienceConfig = {
  title: 'Experience',
  experiences: [
    {
      title: 'Developer',
      company: 'Company',
      period: '2020-2023',
      achievements: ['Built apps', 'Led team'],
    },
  ],
};

// Export the main component
export default ExperienceSection;

// Also export sub-components for maximum flexibility
export {
  SectionHeader,
  ExperienceCard,
  TimelineContainer,
  TimelineDot,
  experienceConfig,
};
