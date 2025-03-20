"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Eminem",
    role: "Software Engineer",
    avatar: "EM",
    content:
      "The LakshyaMentor platform helped me identify skill gaps and provided a clear roadmap to transition into a senior developer role. The personalized recommendations were spot on!",
  },
  {
    name: "Arjun Das",
    role: "Marketing Graduate",
    avatar: "AD",
    content:
      "As a recent graduate, I was lost about which career path to pursue. This platform analyzed my strengths and connected me with mentors who guided me to find my perfect role.",
  },
  {
    name: "Vijay Sharma",
    role: "Career Switcher",
    avatar: "VS",
    content:
      "Switching from finance to tech seemed impossible until I used this platform. The AI-powered resume analysis and skill assessment helped me highlight my transferable skills.",
  },
  {
    name: "Leo Das",
    role: "Data Scientist",
    avatar: "LD",
    content:
      "The industry trends analysis feature kept me informed about emerging technologies in my field. This helped me focus my learning efforts and stay ahead of the curve.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-background relative overflow-hidden" id="testimonials">
      <div className="absolute top-40 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute bottom-40 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl opacity-70"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4"
          >
            
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            See how our MaargDarkshak platform has transformed careers and opened new opportunities
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/20 overflow-hidden group p-6 h-full">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex items-start gap-4 mb-4 relative z-10">
                  <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold border-2 border-primary/20">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                  <Quote className="ml-auto h-5 w-5 text-primary/40" />
                </div>
                <p className="text-muted-foreground relative z-10">{testimonial.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

