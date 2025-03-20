"use client"

import { motion } from "framer-motion"
import { Users } from "lucide-react"

const steps = [
  { number: "01", title: "Profile Creation", description: "Create your profile and upload your resume to get started with personalized career guidance." },
  { number: "02", title: "AI Analysis", description: "Our AI analyzes your skills, interests, and career preferences to understand your unique profile." },
  { number: "03", title: "Career Path Generation", description: "Receive personalized career path recommendations based on your profile and industry trends." },
  { number: "04", title: "Resume Enhancement", description: "Get AI-powered feedback to improve your resume and increase your chances of landing interviews." },
  { number: "05", title: "Job Matching", description: "Connect with job opportunities that align with your skills, experience, and career goals." },
  { number: "06", title: "Mentorship & Growth", description: "Access mentorship, mock interviews, and continuous learning resources to accelerate your career." },
  { number: "07", title: "Progress Tracking", description: "Monitor your career progress and receive ongoing insights through your personalized dashboard." },
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-primary/5" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Our platform follows a systematic approach to guide your career development journey.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-xl overflow-hidden shadow-xl"
          >
            <div className="relative h-[700px] w-full bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-xl border border-white/20">
              <div className="absolute inset-0 bg-card/30 backdrop-blur-sm rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full max-w-md">
                    <div className="bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-xl p-6 border border-white/20">
                      <div className="flex items-center mb-6">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div className="ml-4">
                          <h3 className="font-semibold text-lg">LakshyaMentor Guidance System</h3>
                          <p className="text-sm text-muted-foreground">Data Flow Visualization</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {[
                          "Profile & Resume Collection",
                          "AI Analysis & Processing",
                          "Career Path Generation",
                          "Resume Feedback",
                          "Job Matching",
                          "Mentorship & Growth",  
                          "Career Dashboard & Insights" 
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center p-3 bg-primary/5 rounded-lg border border-primary/10">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 text-xs font-medium">
                              {idx + 1}
                            </div>
                            <div className="text-sm">{item}</div>
                            <div className="ml-auto">
                              <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Corrected "System Architecture" Position */}
              <div className="absolute top-2 left-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium z-10">
                
              </div>

              <div className="absolute bottom-4 right-4">
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Active</span>
                  <div className="w-2 h-2 rounded-full bg-blue-500 ml-2"></div>
                  <span>Processing</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
