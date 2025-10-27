import React from 'react'
import { motion } from 'framer-motion'
import { ClipboardList, MessageSquare, Trophy } from 'lucide-react'

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-4">
            How It Works
          </h2>
          <p className="text-xl text-[#2C3E50] max-w-2xl mx-auto">
            Three simple steps to start your quest
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
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
            transition={{
              delay: 0.1,
            }}
            className="bg-[#F8F9FA] p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-2"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#1A1A2E] to-[#0F3460] rounded-full flex items-center justify-center mb-6 text-white text-xl font-bold">
              1
            </div>
            <ClipboardList className="w-10 h-10 text-[#1A1A2E] mb-4 stroke-[1.5]" />
            <h3 className="text-2xl font-bold text-[#1A1A2E] mb-4">
              Post a Project
            </h3>
            <p className="text-[#2C3E50]">
              Clients describe their project, set a budget, and publish it.
            </p>
          </motion.div>
          {/* Step 2 */}
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
            transition={{
              delay: 0.2,
            }}
            className="bg-[#F8F9FA] p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-2"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#1A1A2E] to-[#0F3460] rounded-full flex items-center justify-center mb-6 text-white text-xl font-bold">
              2
            </div>
            <MessageSquare className="w-10 h-10 text-[#1A1A2E] mb-4 stroke-[1.5]" />
            <h3 className="text-2xl font-bold text-[#1A1A2E] mb-4">
              Work and Collaborate
            </h3>
            <p className="text-[#2C3E50]">
              Freelancers submit proposals, chat, and deliver high-quality
              work.
            </p>
          </motion.div>
          {/* Step 3 */}
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
            transition={{
              delay: 0.3,
            }}
            className="bg-[#F8F9FA] p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-2"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#1A1A2E] to-[#0F3460] rounded-full flex items-center justify-center mb-6 text-white text-xl font-bold">
              3
            </div>
            <Trophy className="w-10 h-10 text-[#1A1A2E] mb-4 stroke-[1.5]" />
            <h3 className="text-2xl font-bold text-[#1A1A2E] mb-4">
              Earn XP and Level Up
            </h3>
            <p className="text-[#2C3E50]">
              Complete projects, gain XP, and unlock new badges for
              achievements.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
