import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold">Portfolio.</div>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            Hire me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;