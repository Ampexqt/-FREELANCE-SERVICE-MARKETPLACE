import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#0F3460] relative overflow-hidden">
      {/* Sparkle Effects */}
      <div className="absolute top-10 left-10 w-1 h-1 bg-white/60 rounded-full animate-pulse" />
      <div className="absolute top-20 right-20 w-2 h-2 bg-white/60 rounded-full animate-pulse" />
      <div className="absolute bottom-10 left-1/4 w-1 h-1 bg-white/60 rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-white/60 rounded-full animate-pulse" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your SkillQuest?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of creators and clients leveling up together.
          </p>
          <button className="px-12 py-4 bg-white text-[#1A1A2E] rounded-lg font-bold text-lg hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center gap-2">
            Get Started
            <ChevronRight className="w-5 h-5 stroke-[2]" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
