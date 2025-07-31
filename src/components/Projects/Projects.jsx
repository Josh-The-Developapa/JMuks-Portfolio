import React from 'react';
import VoteAbleImg from '../../assets/VoteAble.png';
import CaderaImg from '../../assets/Cadera.png';
import CImageAIImg from '../../assets/CImage-AI.png'; // <-- updated import
import { Link } from 'react-router';

const projectsConfig = {
  title: 'Featured Projects',
  subtitle: '',
  projects: [
    {
      title: 'VoteAble',
      description:
        'An electronic voting system revolutionizing how schools in Uganda conduct student leadership elections. Already trusted and used by Aga Khan High School, Kampala.',
      tags: [
        { name: 'React', color: 'bg-blue-100', textColor: 'text-blue-700' },
        { name: 'Node.js', color: 'bg-green-100', textColor: 'text-green-700' },
        {
          name: 'Express.js',
          color: 'bg-gray-100',
          textColor: 'text-gray-700',
        },
        {
          name: 'MongoDB',
          color: 'bg-purple-100',
          textColor: 'text-purple-700',
        },
        { name: 'JWT Auth', color: 'bg-red-100', textColor: 'text-red-700' },
      ],
      image: VoteAbleImg,
      statusText: '',
      liveUrl: 'https://voteable.live',
    },
    {
      title: 'Cadera',
      description:
        'A smart academic records system built to modernize how schools manage report cards and student performance. Faster, simpler, and more secure.',
      tags: [
        { name: 'React', color: 'bg-blue-100', textColor: 'text-blue-700' },
        { name: 'NestJS', color: 'bg-green-100', textColor: 'text-green-700' },
        {
          name: 'Supabase',
          color: 'bg-yellow-100',
          textColor: 'text-yellow-700',
        },
        {
          name: 'Prisma',
          color: 'bg-purple-100',
          textColor: 'text-purple-700',
        },
      ],
      image: CaderaImg,
      statusText: 'In Progress',
      // liveUrl: 'https://cadera-frontend.onrender.com',
    },
    {
      title: 'CImage AI',
      description:
        'A lightweight image classification app that uses TensorFlow.js and MobileNet on the backend to identify objects from user-uploaded images. Fast and responsive.',
      tags: [
        { name: 'React', color: 'bg-blue-100', textColor: 'text-blue-700' },
        { name: 'Node.js', color: 'bg-green-100', textColor: 'text-green-700' },
        {
          name: 'Tensorflow.js',
          color: 'bg-pink-100',
          textColor: 'text-pink-700',
        },
        { name: 'MobileNet', color: 'bg-gray-100', textColor: 'text-gray-700' },
      ],
      image: CImageAIImg,
      statusText: 'On GitHub only',
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
    statusText,
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
        <p className="text-gray-600 mb-4 line-clamp-5 text-left">
          {description}
        </p>

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
            {statusText ? (
              <div className="flex-1 py-2 px-4 rounded-lg text-center bg-gray-100 text-gray-500 font-medium cursor-not-allowed">
                {statusText}
              </div>
            ) : (
              <>
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#3b82f6] text-white py-2 px-4 rounded-lg text-center hover:bg-blue-600 transition-colors duration-300"
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
              </>
            )}
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
        <div className="text-center mb-10">
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
