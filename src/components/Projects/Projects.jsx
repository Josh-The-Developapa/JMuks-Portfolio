import React from 'react';
import VoteAbleImg from '../../assets/VoteAble.png';
import CaderaImg from '../../assets/Cadera.png';
import SpeedBallImg from '../../assets/SpeedBall.png';
import { Link } from 'react-router';

// Updated projects config with your actual projects and snapshots
const projectsConfig = {
  title: 'Featured Projects',
  subtitle: '',
  projects: [
    {
      title: 'VoteAble',
      description:
        'Full-stack e-voting platform built with the MERN technology stack. Used by schools in Uganda for student council elections. Running at Aga Khan High School Kampala and expanding.',
      tags: [
        { name: 'React', color: 'bg-blue-100', textColor: 'text-blue-700' },
        { name: 'Node.js', color: 'bg-green-100', textColor: 'text-green-700' },
        {
          name: 'MongoDB',
          color: 'bg-purple-100',
          textColor: 'text-purple-700',
        },
      ],
      image: VoteAbleImg,
      liveUrl: 'https://voteable.live',
      caseStudyUrl: '/projects/voteable',
    },
    {
      title: 'Cadera',
      description:
        'Powerful School Information System for report card management and academic records, helping schools streamline academic reporting.',
      tags: [
        { name: 'React', color: 'bg-blue-100', textColor: 'text-blue-700' },
        { name: 'Express', color: 'bg-green-100', textColor: 'text-green-700' },
        {
          name: 'PostgreSQL',
          color: 'bg-purple-100',
          textColor: 'text-purple-700',
        },
      ],
      image: CaderaImg,
      liveUrl: 'https://cadera-frontend.onrender.com',
      caseStudyUrl: '/projects/cadera',
    },
    {
      title: 'SpeedBall',
      description:
        'Full-stack website for a Ugandan fashion brand. Allows browsing, ordering, event ticket purchase, and admin order/newsletter management.',
      tags: [
        { name: 'React', color: 'bg-blue-100', textColor: 'text-blue-700' },
        { name: 'Node.js', color: 'bg-green-100', textColor: 'text-green-700' },
        {
          name: 'Stripe',
          color: 'bg-yellow-100',
          textColor: 'text-yellow-700',
        },
      ],
      image: SpeedBallImg,
      liveUrl: 'https://speedball.example.com',
      caseStudyUrl: '/projects/speedball',
    },
  ],
  viewAllButton: {
    text: 'View My GitHub',
    url: 'https://github.com/Josh-The-Developapa',
    icon: 'fas fa-arrow-right',
  },
};

// Project Card now shows image on top instead of icon
const ProjectCard = ({
  project,
  className = '',
  showTags = true,
  showActions = true,
  cardHoverEffect = 'hover:shadow-lg hover:-translate-y-2',
  tagLimit = null,
}) => {
  const {
    title,
    description,
    tags = [],
    image,
    liveUrl,
    caseStudyUrl,
    storeUrl,
  } = project;

  const displayTags = tagLimit ? tags.slice(0, tagLimit) : tags;

  return (
    <div
      className={`bg-white rounded-xl shadow-md transition-all duration-300 overflow-hidden ${cardHoverEffect} ${className}`}
    >
      {/* Project Snapshot Image */}
      {image && (
        <img
          src={image}
          alt={`${title} snapshot`}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      )}

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>

        {/* Tags */}
        {showTags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {displayTags.map((tag, i) => (
              <span
                key={`tag-${i}`}
                className={`px-3 py-1 rounded-full text-sm font-medium ${tag.color} ${tag.textColor}`}
              >
                {tag.name}
              </span>
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
            {/* {caseStudyUrl && (
              <a
                href={caseStudyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg text-center hover:bg-gray-50 transition-colors duration-300"
              >
                Case Study
              </a>
            )} */}
          </div>
        )}
      </div>
    </div>
  );
};

export default function ProjectsSection({
  config = projectsConfig,
  sectionId = 'projects',
  sectionRef,
  containerClassName = '',
  gridClassName = 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  showViewAllButton = true,
  viewAllButtonVariant = 'outline',
  cardHoverEffect = 'hover:shadow-lg hover:-translate-y-2',
  maxProjects = null,
  showCardTags = true,
  showCardActions = true,
  tagLimit = null,
}) {
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
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{config.title}</h2>
          {config.subtitle && (
            <p className="text-gray-600 mb-4">{config.subtitle}</p>
          )}
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        {/* Projects Grid */}
        <div className={`grid ${gridClassName} gap-8`}>
          {displayProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
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
            <Link
              to={config.viewAllButton.url}
              target="_blank"
              className={`inline-flex items-center px-6 py-3 font-medium rounded-lg transition-all duration-300 ${
                viewAllButtonVariant === 'solid'
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : viewAllButtonVariant === 'ghost'
                  ? 'text-blue-500 hover:text-blue-700 hover:bg-blue-50'
                  : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {config.viewAllButton.text}
              {config.viewAllButton.icon && (
                <i className={`${config.viewAllButton.icon} ml-2`}></i>
              )}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
