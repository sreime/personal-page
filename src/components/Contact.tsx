import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-300 mb-8">
              Interested in discussing tech, startups, or potential collaborations? Let's connect and explore opportunities together.
            </p>
            <div className="space-y-4">
              <a href="mailto:info@sebastianreimers.de" className="flex items-center gap-3 text-gray-300 hover:text-white">
                <Mail size={20} />
                info@sebastianreimers.de
              </a>
              <a 
                href="https://www.linkedin.com/in/sebastian-reimers-00a41b110/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-gray-300 hover:text-white"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a 
                href="https://github.com/sreime" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-gray-300 hover:text-white"
              >
                <Github size={20} />
                GitHub
              </a>
            </div>
          </div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
            ></textarea>
            <button className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-100">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;