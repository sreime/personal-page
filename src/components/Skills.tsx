import React from 'react';

const Skills = () => {
  const skills = [
    { 
      category: 'Development', 
      items: [
        'Full Stack Development',
        'JavaScript/TypeScript',
        'React/React Native',
        'Node.js/Express',
        'Angular',
        'Ionic',
        'System Architecture',
        'API Development'
      ] 
    },
    { 
      category: 'Cloud & DevOps', 
      items: [
        'Google Cloud Platform',
        'Cloud Architecture',
        'Kubernetes/Docker',
        'CI/CD Pipelines',
        'Microservices',
        'Infrastructure as Code',
        'Database Design',
        'Serverless Computing'
      ] 
    },
    { 
      category: 'AI & Innovation', 
      items: [
        'AI Automation',
        'AI Vision',
        'Machine Learning',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics'
      ] 
    },
    { 
      category: 'Leadership', 
      items: [
        'Tech Entrepreneurship',
        'Product Strategy',
        'Team Leadership',
        'Startup Growth',
        'Technical Architecture',
        'Innovation Management'
      ] 
    }
  ];

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skills.map((skill) => (
            <div key={skill.category} className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-6">{skill.category}</h3>
              <div className="grid grid-cols-1 gap-4">
                {skill.items.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;