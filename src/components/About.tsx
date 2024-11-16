import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <picture>
              <img 
                src="/profile.jpg"
                alt="Sebastian Reimers"
                className="w-full h-[600px] object-cover rounded-lg"
                loading="lazy"
                width="1200"
                height="1600"
              />
            </picture>
          </div>
          <div className="space-y-6">
            <p className="text-gray-600">
              Started my entrepreneurial journey at 18, and have since founded multiple successful tech companies. With nearly 15 years of experience in full-stack development, I've built innovative solutions across various industries. My expertise spans from technical development to business strategy, helping companies leverage technology for growth.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-4xl font-bold mb-2">15+</h3>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">4+</h3>
                <p className="text-gray-600">Companies Founded</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;