import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export function Testimonials() {
  return (
    <section id="freelancers" className="py-20 px-4 bg-white">
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
            What Our Community Says
          </h2>
          <p className="text-xl text-[#2C3E50] max-w-2xl mx-auto">
            Real feedback from clients and freelancers
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Testimonial 1 */}
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
            className="bg-[#F8F9FA] p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all hover:scale-105"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#E94560] text-[#E94560] stroke-[1.5]"
                />
              ))}
            </div>
            <p className="text-[#2C3E50] mb-4">
              "SkillQuest made hiring so easy! The escrow system is smooth,
              and XP badges make it fun to collaborate."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#1A1A2E] to-[#0F3460] rounded-full flex items-center justify-center text-white font-bold text-sm">
                L
              </div>
              <div>
                <p className="font-bold text-[#1A1A2E]">Lara</p>
                <p className="text-sm text-gray-500">Business Owner</p>
              </div>
            </div>
          </motion.div>
          {/* Testimonial 2 */}
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
            className="bg-[#F8F9FA] p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all hover:scale-105"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#E94560] text-[#E94560] stroke-[1.5]"
                />
              ))}
            </div>
            <p className="text-[#2C3E50] mb-4">
              "The gamification aspect keeps me motivated. I love seeing my XP
              grow with each completed project!"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0F3460] to-[#16213E] rounded-full flex items-center justify-center text-white font-bold text-sm">
                M
              </div>
              <div>
                <p className="font-bold text-[#1A1A2E]">Marcus</p>
                <p className="text-sm text-gray-500">Freelance Developer</p>
              </div>
            </div>
          </motion.div>
          {/* Testimonial 3 */}
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
            className="bg-[#F8F9FA] p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all hover:scale-105"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#E94560] text-[#E94560] stroke-[1.5]"
                />
              ))}
            </div>
            <p className="text-[#2C3E50] mb-4">
              "Best platform I have used! The level system helps me stand out
              to potential clients."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#E94560] to-[#E94560]/80 rounded-full flex items-center justify-center text-white font-bold text-sm">
                A
              </div>
              <div>
                <p className="font-bold text-[#1A1A2E]">Ava Santos</p>
                <p className="text-sm text-gray-500">UI/UX Designer</p>
              </div>
            </div>
          </motion.div>
          {/* Testimonial 4 */}
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
              delay: 0.4,
            }}
            className="bg-[#F8F9FA] p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all hover:scale-105"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#E94560] text-[#E94560] stroke-[1.5]"
                />
              ))}
            </div>
            <p className="text-[#2C3E50] mb-4">
              "Professional, reliable, and fun! The badge system adds a
              competitive edge that I love."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#16213E] to-[#0F3460] rounded-full flex items-center justify-center text-white font-bold text-sm">
                J
              </div>
              <div>
                <p className="font-bold text-[#1A1A2E]">James</p>
                <p className="text-sm text-gray-500">Content Writer</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
