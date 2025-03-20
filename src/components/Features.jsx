"use client"

import { motion } from "framer-motion"
import { FileText, BarChart3, Briefcase, Users, TrendingUp, Brain } from "lucide-react"

const features = [
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: "Resume Analysis",
    description:
      "AI-powered resume evaluation with personalized feedback to improve your job application success rate.",
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    title: "Skill Assessment",
    description: "Comprehensive evaluation of your skills and identification of areas for improvement.",
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: "Job Matching",
    description:
      "Intelligent job matching system that connects you with opportunities aligned with your skills and career goals.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Mentorship Network",
    description: "Connect with industry professionals for guidance, mock interviews, and career advice.",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: "Industry Trends Analysis",
    description: "Real-time insights into industry trends and job market demands to keep you ahead.",
  },
  {
    icon: <Brain className="h-10 w-10 text-primary" />,
    title: "Personalized Career Paths",
    description: "AI-generated career path recommendations based on your profile, skills, and aspirations.",
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-background relative overflow-hidden" id="features">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl opacity-70"></div>

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
            Everything You Need to Accelerate Your Career
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Our AI mentor platform offers a comprehensive suite of tools to guide your career development
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-border hover:border-primary/20 group"
            >
              <div className="mb-4 p-3 inline-block rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
