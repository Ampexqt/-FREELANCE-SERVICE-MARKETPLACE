import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Trophy, Star, Award, Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <section id="home" className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-[#0F3460]/10 to-[#E94560]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-[#16213E]/10 to-[#0F3460]/10 rounded-full blur-3xl animate-pulse" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#1A1A2E] via-[#0F3460] to-[#E94560] bg-clip-text text-transparent">
                Connect. Create. Level Up.
              </span>
            </h1>
            <p className="text-xl text-[#2C3E50] mb-8 leading-relaxed">
              SkillQuest is the gamified freelance marketplace where clients
              and creators collaborate, earn XP, and unlock achievements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-[#1A1A2E] text-white rounded-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center gap-2 group">
                Hire Talent
                <ChevronRight className="w-4 h-4 stroke-[2] group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border border-[#1A1A2E] text-[#1A1A2E] rounded-lg font-semibold hover:bg-[#1A1A2E] hover:text-white transition-all flex items-center justify-center gap-2">
                Find Work
              </button>
            </div>
          </motion.div>
          {/* Right Illustration */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative"
          >
            <div className="relative w-full h-96 flex items-center justify-center">
              {/* Floating Badges */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute top-10 left-10 bg-white p-3 rounded-xl shadow-lg"
              >
                <Trophy className="w-6 h-6 text-[#E94560] stroke-[1.5]" />
                <span className="text-xs font-bold mt-1 block text-[#1A1A2E]">
                  +50 XP
                </span>
              </motion.div>
              <motion.div
                animate={{
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className="absolute top-20 right-10 bg-white p-3 rounded-xl shadow-lg"
              >
                <Star className="w-6 h-6 text-[#0F3460] stroke-[1.5]" />
                <span className="text-xs font-bold mt-1 block text-[#1A1A2E]">
                  Level 5
                </span>
              </motion.div>
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute bottom-20 left-20 bg-white p-3 rounded-xl shadow-lg"
              >
                <Award className="w-6 h-6 text-[#16213E] stroke-[1.5]" />
                <span className="text-xs font-bold mt-1 block text-[#1A1A2E]">
                  Top Earner
                </span>
              </motion.div>
              {/* Central Illustration */}
              <div className="w-64 h-64 bg-gradient-to-br from-[#1A1A2E] to-[#0F3460] rounded-3xl flex items-center justify-center shadow-2xl">
                <Sparkles className="w-24 h-24 text-white stroke-[1]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
