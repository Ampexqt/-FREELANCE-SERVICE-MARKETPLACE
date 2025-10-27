import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Award, Rocket, Trophy, Star, Zap } from 'lucide-react'

export function Features() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#F8F9FA] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Visual */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="relative"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              {/* XP Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-[#1A1A2E]">
                    Level 5 - Elite
                  </span>
                  <span className="text-sm font-semibold text-[#1A1A2E]">
                    750 / 1000 XP
                  </span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: '75%',
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 1.5,
                    }}
                    className="h-full bg-gradient-to-r from-[#1A1A2E] to-[#0F3460]"
                  />
                </div>
              </div>
              {/* Badges */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-[#E94560] to-[#E94560]/80 p-4 rounded-xl flex flex-col items-center justify-center">
                  <Trophy className="w-7 h-7 text-white mb-2 stroke-[1.5]" />
                  <span className="text-xs font-bold text-white text-center">
                    Top Earner
                  </span>
                </div>
                <div className="bg-gradient-to-br from-[#0F3460] to-[#0F3460]/80 p-4 rounded-xl flex flex-col items-center justify-center">
                  <Star className="w-7 h-7 text-white mb-2 stroke-[1.5]" />
                  <span className="text-xs font-bold text-white text-center">
                    5-Star Pro
                  </span>
                </div>
                <div className="bg-gradient-to-br from-[#16213E] to-[#16213E]/80 p-4 rounded-xl flex flex-col items-center justify-center">
                  <Zap className="w-7 h-7 text-white mb-2 stroke-[1.5]" />
                  <span className="text-xs font-bold text-white text-center">
                    Fast Delivery
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Right Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-6">
              Turn Every Project into a Quest for Growth
            </h2>
            <p className="text-xl text-[#2C3E50] mb-8">
              At SkillQuest, every milestone earns you XP. Complete projects,
              impress clients, and watch your profile level up. Unlock
              exclusive badges and climb the leaderboard!
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#1A1A2E] to-[#0F3460] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="w-5 h-5 text-white stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">
                    XP System
                  </h3>
                  <p className="text-[#2C3E50]">
                    Gain XP with every successful project.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#1A1A2E] to-[#0F3460] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-white stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">
                    Badges
                  </h3>
                  <p className="text-[#2C3E50]">
                    Earn badges like "Top Earner" or "5-Star Specialist."
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#1A1A2E] to-[#0F3460] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-5 h-5 text-white stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">
                    Level Progression
                  </h3>
                  <p className="text-[#2C3E50]">
                    Advance from Novice to Grandmaster Freelancer.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
