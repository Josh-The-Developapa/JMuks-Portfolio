import React, { useRef } from 'react';

// Configuration object for easy modification
const projectsConfig = {
  title: 'Featured Projects',
  subtitle: '',
  projects: [
    {
      title: 'TaskFlow Pro',
      description:
        'A productivity application with AI-powered task management and team collaboration features.',
      tags: [
        { name: 'React', color: 'bg-blue-100', textColor: 'text-blue-700' },
        { name: 'Node.js', color: 'bg-green-100', textColor: 'text-green-700' },
        {
          name: 'MongoDB',
          color: 'bg-purple-100',
          textColor: 'text-purple-700',
        },
        { name: 'AI', color: 'bg-yellow-100', textColor: 'text-yellow-700' },
      ],
      iconClass: 'fas fa-project-diagram',
      gradient: 'bg-gradient-to-r from-blue-400 to-purple-500',
      liveUrl: 'https://taskflow.example.com',
      caseStudyUrl: '/projects/taskflow-pro',
    },
    {
      title: 'MarketInsight',
      description:
        'Real-time financial data visualization platform with predictive analytics capabilities.',
      tags: [
        {
          name: 'TypeScript',
          color: 'bg-blue-100',
          textColor: 'text-blue-700',
        },
        { name: 'Python', color: 'bg-red-100', textColor: 'text-red-700' },
        { name: 'AWS', color: 'bg-gray-100', textColor: 'text-gray-700' },
        { name: 'D3.js', color: 'bg-pink-100', textColor: 'text-pink-700' },
      ],
      iconClass: 'fas fa-chart-line',
      gradient: 'bg-gradient-to-r from-green-400 to-blue-500',
      liveUrl: 'https://marketinsight.example.com',
      caseStudyUrl: '/projects/market-insight',
    },
    {
      title: 'HealthTrack Mobile',
      description:
        'Cross-platform mobile app for health monitoring with wearable device integration.',
      tags: [
        {
          name: 'React Native',
          color: 'bg-blue-100',
          textColor: 'text-blue-700',
        },
        {
          name: 'Firebase',
          color: 'bg-orange-100',
          textColor: 'text-orange-700',
        },
        { name: 'GraphQL', color: 'bg-green-100', textColor: 'text-green-700' },
        { name: 'HealthKit', color: 'bg-red-100', textColor: 'text-red-700' },
      ],
      iconClass: 'fas fa-mobile-alt',
      gradient: 'bg-gradient-to-r from-purple-400 to-pink-500',
      storeUrl: 'https://appstore.example.com/healthtrack',
      caseStudyUrl: '/projects/healthtrack-mobile',
    },
  ],
  viewAllButton: {
    text: 'View All Projects',
    url: '/projects',
    icon: 'fas fa-arrow-right',
  },
};

// Reusable Section Header Component
const SectionHeader = ({ title, subtitle = '', className = '' }) => (
  <div className={`text-center mb-16 ${className}`}>
    <h2 className="text-3xl font-bold mb-4">{title}</h2>
    {subtitle && <p className="text-gray-600 mb-4">{subtitle}</p>}
    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
  </div>
);

// Reusable Tag Component
const ProjectTag = ({ tag, className = '' }) => (
  <span
    className={`px-3 py-1 rounded-full text-sm font-medium ${tag.color} ${tag.textColor} ${className}`}
  >
    {tag.name}
  </span>
);

// Reusable Project Card Component
const ProjectCard = ({
  project,
  className = '',
  showIcon = true,
  showTags = true,
  showActions = true,
  cardHoverEffect = 'hover:shadow-lg hover:-translate-y-2',
  tagLimit = null,
}) => {
  const {
    title,
    description,
    tags = [],
    iconClass,
    gradient,
    liveUrl,
    caseStudyUrl,
    storeUrl,
  } = project;

  const displayTags = tagLimit ? tags.slice(0, tagLimit) : tags;

  return (
    <div
      className={`bg-white rounded-xl shadow-md transition-all duration-300 overflow-hidden ${cardHoverEffect} ${className}`}
    >
      {/* Icon Header */}
      {showIcon && (
        <div className={`h-48 ${gradient} flex items-center justify-center`}>
          <i className={`${iconClass} text-white text-6xl`}></i>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>

        {/* Tags */}
        {showTags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {displayTags.map((tag, i) => (
              <ProjectTag key={`tag-${i}`} tag={tag} />
            ))}
            {tagLimit && tags.length > tagLimit && (
              <span className="px-3 py-1 text-sm text-gray-500">
                +{tags.length - tagLimit} more
              </span>
            )}
          </div>
        )}

        {/* Action Buttons */}
        {showActions && (
          <div className="flex gap-3">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-600 transition-colors duration-300"
              >
                Live Demo
              </a>
            )}
            {storeUrl && (
              <a
                href={storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg text-center hover:bg-green-600 transition-colors duration-300"
              >
                App Store
              </a>
            )}
            {caseStudyUrl && (
              <a
                href={caseStudyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg text-center hover:bg-gray-50 transition-colors duration-300"
              >
                Case Study
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// Reusable View All Button Component
const ViewAllButton = ({
  button,
  className = '',
  variant = 'outline', // "outline", "solid", "ghost"
}) => {
  const baseClasses =
    'inline-flex items-center px-6 py-3 font-medium rounded-lg transition-all duration-300';
  const variants = {
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
    solid: 'bg-blue-500 text-white hover:bg-blue-600',
    ghost: 'text-blue-500 hover:text-blue-700 hover:bg-blue-50',
  };

  return (
    <a
      href={button.url}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {button.text}
      {button.icon && <i className={`${button.icon} ml-2`}></i>}
    </a>
  );
};

// Main Projects Section Component
const ProjectsSection = ({
  config = projectsConfig,
  sectionId = 'projects',
  sectionRef,
  containerClassName = '',
  gridClassName = 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  showViewAllButton = true,
  viewAllButtonVariant = 'outline',
  cardHoverEffect = 'hover:shadow-lg hover:-translate-y-2',
  maxProjects = null,
  showCardIcons = true,
  showCardTags = true,
  showCardActions = true,
  tagLimit = null,
}) => {
  const displayProjects = maxProjects
    ? config.projects.slice(0, maxProjects)
    : config.projects;

  return (
    <section
      id={sectionId}
      ref={sectionRef}
      className={`py-16 bg-gray-50 ${containerClassName}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={config.title} subtitle={config.subtitle} />

        {/* Projects Grid */}
        <div className={`grid ${gridClassName} gap-8`}>
          {displayProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              showIcon={showCardIcons}
              showTags={showCardTags}
              showActions={showCardActions}
              cardHoverEffect={cardHoverEffect}
              tagLimit={tagLimit}
            />
          ))}
        </div>

        {/* View All Button */}
        {showViewAllButton && config.viewAllButton && (
          <div className="text-center mt-12">
            <ViewAllButton
              button={config.viewAllButton}
              variant={viewAllButtonVariant}
            />
          </div>
        )}
      </div>
    </section>
  );
};

// Example usage with custom configuration
const customProjectsConfig = {
  title: 'My Work',
  subtitle: 'Selected projects showcasing my skills',
  projects: [
    {
      title: 'Custom Project',
      description: 'Custom project description...',
      tags: [
        { name: 'Vue.js', color: 'bg-green-100', textColor: 'text-green-700' },
      ],
      iconClass: 'fas fa-code',
      gradient: 'bg-gradient-to-r from-red-400 to-yellow-500',
      liveUrl: 'https://example.com',
      caseStudyUrl: '/projects/custom',
    },
  ],
  viewAllButton: {
    text: 'See More Work',
    url: '/portfolio',
    icon: 'fas fa-external-link-alt',
  },
};

// Export the main component
export default ProjectsSection;

// Also export sub-components for maximum flexibility
export {
  SectionHeader,
  ProjectCard,
  ProjectTag,
  ViewAllButton,
  projectsConfig,
};
