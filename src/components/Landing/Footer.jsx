import React from 'react'
import { Sword, Facebook, Linkedin, Github } from 'lucide-react'

export function Footer() {
  return (
    <footer id="contact" className="bg-[#1A1A2E] text-[#95A5A6] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* SkillQuest Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-[#0F3460] to-[#E94560] rounded-lg flex items-center justify-center">
                <Sword className="w-5 h-5 text-white stroke-[1.5]" />
              </div>
              <span className="text-2xl font-bold text-white">
                SkillQuest
              </span>
            </div>
            <p className="text-sm">
              The gamified freelance marketplace where talent meets
              opportunity.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          {/* Resources */}
          <div>
            <h3 className="text-white font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#terms"
                  className="hover:text-white transition-colors"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          {/* Follow Us */}
          <div>
            <h3 className="text-white font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#facebook"
                className="hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5 stroke-[1.5]" />
              </a>
              <a
                href="#linkedin"
                className="hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5 stroke-[1.5]" />
              </a>
              <a
                href="#github"
                className="hover:text-white transition-colors"
              >
                <Github className="w-5 h-5 stroke-[1.5]" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>© 2025 SkillQuest. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
