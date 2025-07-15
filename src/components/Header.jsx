import React, { useState, useEffect } from 'react'
import { ChevronDown, ArrowUpRight, Menu, X } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activePath, setActivePath] = useState('/')
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setActivePath(location.pathname)
  }, [location.pathname])

  const navLinks = [
    { label: 'The Firm', path: '/#firm' },
    { label: 'Properties', path: '/properties' },
    { label: 'Capital Marketing', path: '/capital-marketing' },
    { label: 'Asset Management', path: '/asset-management' },
    { label: 'Leasing', path: '/leasing' },
    { label: 'Project Management', path: '/project-management' },
    
    
    
  ]

  const isActive = (path) => {
    return path === activePath
  }

  return (
    <header className="bg-[#FAFAFA] text-[#0B1D27] px-6 py-4 pt-6 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center  cursor-pointer" onClick={() => navigate('/')}>
          <img src="/Logo_final.png" alt="TerraSpace Logo" className="h-16 w-auto" />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex space-x-8 text-lg font-semibold">
          {navLinks.map(({ label, path, anchor }) =>
            anchor ? (
              <a
                key={label}
                href={path}
                className={`${
                  path === '#firm' ? 'text-[#656E73] hover:text-[#0B1D27]' : ''
                }`}
              >
                {label}
              </a>
            ) : (
              <a
                key={label}
                href={path}
                className={`${
                  isActive(path)
                    ? 'text-[#0B1D27]'
                    : 'text-[#656E73] hover:text-[#0B1D27]'
                }`}
              >
                {label}
              </a>
            )
          )}
        </nav>

        {/* CTA Button */}
        <a
          href="https://calendly.com/qpixxsolutions/30min?month=2025-07"
          className="hidden cursor-pointer md:inline-flex items-center space-x-2 bg-[#0B1D27] text-white text-base font-medium px-5 py-2 rounded-full hover:bg-[#0d2530] transition"
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
        <div className="md:hidden mt-4 px-4 space-y-3 text-base font-medium">
          {navLinks.map(({ label, path, anchor }) =>
            anchor ? (
              <a key={label} href={path} className="block text-[#656E73]">
                {label}
              </a>
            ) : (
              <a
                key={label}
                href={path}
                className={`block ${
                  isActive(path)
                    ? 'text-[#0B1D27] font-semibold'
                    : 'text-[#656E73]'
                }`}
              >
                {label}
              </a>
            )
          )}
          <a
            href="https://calendly.com/qpixxsolutions/30min?month=2025-07"
            target="_blank"
            className="mt-2 cursor-pointer inline-flex items-center space-x-2 bg-[#0B1D27] text-white px-5 py-2 rounded-full hover:bg-[#0d2530] transition"
          >
            <span>Let’s Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  )
}

export default Header
