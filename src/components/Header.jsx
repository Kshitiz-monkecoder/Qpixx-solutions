import React, { useState } from 'react';
import { ChevronDown, ArrowUpRight, Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#FAFAFA] text-[#0B1D27] px-6 py-4 pt-6 shadow-md ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/Logo_dark.png" alt="TerraSpace Logo" className="h-16 w-auto" />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex space-x-8 text-lg font-semibold">
          <a href="#" className="text-[#0B1D27]">Capital Marketing</a>
          <a href="#" className="text-[#656E73] hover:text-[#0B1D27]">Leasing</a>
          <a href="#" className='text-[#656E73] hover:text-[#0B1D27]'>Properties</a>
          <a href="#" className="text-[#656E73] hover:text-[#0B1D27]">The Firm</a>
          <a href="#" className="text-[#656E73] hover:text-[#0B1D27]">Asset Management</a>
        </nav>

        {/* CTA Button */}
        <a
          href="#"
          className="hidden md:inline-flex items-center space-x-2 bg-[#0B1D27] text-white text-base font-medium px-5 py-2 rounded-full hover:bg-[#0d2530] transition"
        >
          <span>Let’s Talk</span>
          <ArrowUpRight className="w-5 h-5" />
        </a>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#0B1D27] focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 px-4 space-y-3 text-sm font-normal">
          <a href="#" className="block text-[#0B1D27] font-semibold">Capital Marketing</a>
          <a href="#" className="block text-[#656E73]">Leasing</a>
            <a href="#" className="block text-[#656E73]">Properties</a>
            <a href="#" className="block text-[#656E73]">The Firm</a>
          <a href="#" className="block text-[#656E73]">Asset Management</a>
          <a
            href="#"
            className="mt-2 inline-flex items-center space-x-2 bg-[#0B1D27] text-white px-5 py-2 rounded-full hover:bg-[#0d2530] transition"
          >
            <span>Let’s Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
