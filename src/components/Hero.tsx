import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <p className="text-gray-600 mb-4">Tech Entrepreneur & Cloud Architect</p>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
          Experienced<br />
          Full Stack Developer
        </h1>
        <div className="flex flex-col md:flex-row md:items-center gap-8">
          <p className="text-gray-600 max-w-md">
            Serial entrepreneur and cloud architect with 15 years of experience in full-stack development. Specialized in GCP infrastructure and founded multiple successful tech companies including TRAKKTIVE, smirror, infinize, and personalized nutrition systems.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 text-black hover:text-gray-600"
          >
            Let's discuss <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;