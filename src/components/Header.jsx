import React from 'react';

const Header = () => {
  return (
    <header className="bg-white px-6 md:px-12 py-4 flex items-center justify-between shadow-sm">
      
      {/* Logo and Brand */}
      <div className="flex items-center space-x-2">
        <img
          src="public/assets/WhoWeAre Page pics/Logo.png"
          alt=""
          className="w-8 h-8"
        />
        <span className="font-bold text-xl text-[#0D4B40]">Sprintfixer</span>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-8 text-sm font-medium text-[#4A4A4A]">
        <a href="#home" className="hover:text-[#F58634]">Home</a>
        <a href="#who-we-are" className="hover:text-[#F58634]">Who We Are</a>
        <a href="#contact" className="hover:text-[#F58634]">Contact Us</a>
      </nav>

      {/* CTA Button */}
      <button className="bg-[#FFD95C] text-[#121212] font-semibold text-sm px-4 py-2 rounded-full hover:bg-yellow-400">
        Get started
      </button>
    </header>
  );
};

export default Header;
