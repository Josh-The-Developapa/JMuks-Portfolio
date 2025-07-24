import React from 'react';

// Configuration object for easy modification
const skillsConfig = {
  title: 'Technical Skills',
  subtitle: 'These are the tools I build with, and the traits I lead with',
  primarySkills: [
    {
      name: 'React.js',
      level: 'Advanced',
      icon: 'fab fa-react',
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-500',
    },
    {
      name: 'Node.js',
      level: 'Advanced',
      icon: 'fab fa-node-js',
      iconBg: 'bg-green-50',
      iconColor: 'text-green-500',
    },
    {
      name: 'Express.js',
      level: 'Advanced',
      icon: 'fas fa-network-wired', // Closest match
      iconBg: 'bg-gray-100',
      iconColor: 'text-gray-700',
    },
    {
      name: 'MongoDB',
      level: 'Advanced',
      icon: 'fas fa-database', // No MongoDB icon in FA
      iconBg: 'bg-green-50',
      iconColor: 'text-green-700',
    },
    {
      name: 'PyTorch',
      level: 'Intermediate',
      icon: 'fas fa-fire', // Closest symbol for PyTorch flame
      iconBg: 'bg-red-50',
      iconColor: 'text-red-500',
    },
    {
      name: 'NumPy',
      level: 'Intermediate',
      icon: 'fas fa-superscript', // Represents math/sci
      iconBg: 'bg-yellow-50',
      iconColor: 'text-yellow-600',
    },
    {
      name: 'Pandas',
      level: 'Intermediate',
      icon: 'fas fa-table', // Closest to dataframe/table
      iconBg: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
    },
    {
      name: 'Matplotlib',
      level: 'Intermediate',
      icon: 'fas fa-chart-line',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      name: 'JavaScript',
      level: 'Advanced',
      icon: 'fab fa-js',
      iconBg: 'bg-yellow-50',
      iconColor: 'text-yellow-500',
    },
    {
      name: 'Python',
      level: 'Advanced',
      icon: 'fab fa-python',
      iconBg: 'bg-orange-50',
      iconColor: 'text-orange-500',
    },
    {
      name: 'C++',
      level: 'Intermediate',
      icon: 'fas fa-code', // No official FA icon for C++
      iconBg: 'bg-gray-100',
      iconColor: 'text-gray-700',
    },
    {
      name: 'Arduino',
      level: 'Intermediate',
      icon: 'fas fa-microchip',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-700',
    },
  ],
  additionalSkills: [
    'HTML',
    'CSS',
    'Figma',
    'Git',
    'GitHub',
    'Microsoft Excel',
    'Microsoft Word',
    'Microsoft PowerPoint',
    'VS Code',
    'REST APIs',
    'Postman',
  ],
  softSkills: [
    'Creativity',
    'Problem Solving',
    'Inquisitiveness',
    'Adaptability',
    'Jovial',
    'Lively',
    'Fast Learner',
    'Work Ethic',
    'Discipline',
    'Initiative',
  ],
};

// Reusable Skill Badge Component
const SkillBadge = ({ skill, className = '' }) => (
  <div
    className={`skill-badge bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center ${className}`}
  >
    <div
      className={`w-16 h-16 mx-auto mb-4 ${skill.iconBg} rounded-full flex items-center justify-center`}
    >
      <i className={`${skill.icon} ${skill.iconColor} text-3xl`}></i>
    </div>
    <h3 className="font-semibold mb-2">{skill.name}</h3>
    <p className="text-gray-500 text-sm">{skill.level}</p>
  </div>
);

// Reusable Skill Tag Component
const SkillTag = ({ skill, className = '' }) => (
  <span
    className={`px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm ${className}`}
  >
    {skill}
  </span>
);

// Reusable Section Header Component
const SectionHeader = ({ title, subtitle = '', className = '' }) => (
  <div className={`text-center mb-16 ${className}`}>
    <h2 className="text-3xl font-bold mb-4">{title}</h2>
    {subtitle && <p className="text-gray-600 mb-4">{subtitle}</p>}
    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
  </div>
);

// Main Skills Section Component
const SkillsSection = ({
  config = skillsConfig,
  sectionId = 'skills',
  containerClassName = '',
  gridClassName = '',
  showAdditionalSkills = true,
  sectionRef,
}) => {
  return (
    <section
      id={sectionId}
      ref={sectionRef}
      className={`py-16 bg-gray-50 ${containerClassName}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={config.title} subtitle={config.subtitle} />

        {/* Primary Skills Grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 ${gridClassName}`}
        >
          {config.primarySkills.map((skill, index) => (
            <SkillBadge key={`skill-${index}`} skill={skill} />
          ))}
        </div>

        {/* Additional Skills */}
        {showAdditionalSkills &&
          config.additionalSkills &&
          config.additionalSkills.length > 0 && (
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-6">
                Additional Skills & Tools
              </h3>
              <div className="flex flex-wrap gap-3">
                {config.additionalSkills.map((skill, index) => (
                  <SkillTag key={`additional-skill-${index}`} skill={skill} />
                ))}
              </div>
            </div>
          )}
        {/* Soft Skills */}
        {config.softSkills && config.softSkills.length > 0 && (
          <div className="bg-white p-8 rounded-xl shadow-sm mt-8">
            <h3 className="text-xl font-semibold mb-6">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {config.softSkills.map((skill, index) => (
                <SkillTag key={`soft-skill-${index}`} skill={skill} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Export the main component
export default SkillsSection;

// Also export sub-components for maximum flexibility
export { SkillBadge, SkillTag, SectionHeader, skillsConfig };
