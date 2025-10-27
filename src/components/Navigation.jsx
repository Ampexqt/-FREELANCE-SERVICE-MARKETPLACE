import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Sword, Menu, X } from 'lucide-react'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-br from-[#1A1A2E] to-[#0F3460] rounded-lg flex items-center justify-center">
              <Sword className="w-5 h-5 text-white stroke-[1.5]" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#1A1A2E] to-[#0F3460] bg-clip-text text-transparent">
              SkillQuest
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className="text-[#2C3E50] hover:text-[#1A1A2E] transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#how-it-works"
              className="text-[#2C3E50] hover:text-[#1A1A2E] transition-colors font-medium"
            >
              How It Works
            </a>
            <a
              href="#freelancers"
              className="text-[#2C3E50] hover:text-[#1A1A2E] transition-colors font-medium"
            >
              Freelancers
            </a>
            <a
              href="#about"
              className="text-[#2C3E50] hover:text-[#1A1A2E] transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-[#2C3E50] hover:text-[#1A1A2E] transition-colors font-medium"
            >
              Contact
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login" className="px-6 py-2 border border-[#1A1A2E] text-[#1A1A2E] rounded-lg font-semibold hover:bg-[#1A1A2E] hover:text-white transition-all">
              Login
            </Link>
            <button className="px-6 py-2 bg-gradient-to-r from-[#1A1A2E] to-[#0F3460] text-white rounded-lg font-semibold hover:shadow-lg transition-all">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 stroke-[1.5]" />
            ) : (
              <Menu className="w-5 h-5 stroke-[1.5]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-white">
            <div className="flex flex-col gap-4">
              <a
                href="#home"
                className="text-[#2C3E50] hover:text-[#1A1A2E] transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="#how-it-works"
                className="text-[#2C3E50] hover:text-[#1A1A2E] transition-colors font-medium"
              >
                How It Works
              </a>
              <a
                href="#freelancers"
                className="text-[#2C3E50] hover:text-[#1A1A2E] transition-colors font-medium"
              >
                Freelancers
              </a>
              <a
                href="#about"
                className="text-[#2C3E50] hover:text-[#1A1A2E] transition-colors font-medium"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-[#2C3E50] hover:text-[#1A1A2E] transition-colors font-medium"
              >
                Contact
              </a>
              <Link to="/login" className="px-6 py-2 border border-[#1A1A2E] text-[#1A1A2E] rounded-lg font-semibold">
                Login
              </Link>
              <button className="px-6 py-2 bg-gradient-to-r from-[#1A1A2E] to-[#0F3460] text-white rounded-lg font-semibold">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}