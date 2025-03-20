"use client"

import { motion } from "framer-motion"
import { ChevronRight, BarChart2, Users, FileText, Briefcase, Award, TrendingUp } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-primary/5 via-background to-background min-h-screen flex items-center overflow-hidden">
        <div className="absolute top-4 left-4 z-10">
         <div className="px-4 py-2 rounded-md bg-primary/10 text-primary font-bold text-xl"> LakshyaMentor</div>
        </div>

      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              AI-Powered <span className="text-primary">Career Guidance</span> For Your Future
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Personalized career mentorship, skill assessment, and job matching powered by advanced AI to help you
              navigate your professional journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors">
                Get Started
              </button>
              <button className="px-6 py-3 border border-border bg-transparent text-foreground font-medium rounded-md hover:bg-muted/50 transition-colors group flex items-center">
                Learn More <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl shadow-xl overflow-hidden border border-white/20 backdrop-blur-sm">
                <div className="absolute inset-0 bg-card/90 dark:bg-black/80">
                  <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-white/10 flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="mx-auto text-sm font-medium text-muted-foreground">Career Insights Platform</div>
                  </div>
                </div>

                <div className="relative p-6 pt-16 h-full flex flex-col">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {/* Skill Analysis Card */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-border">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-sm">Skill Analysis</h3>
                        <BarChart2 className="h-4 w-4 text-primary" />
                      </div>
                      <div className="space-y-2">
                        {[
                          { skill: "JavaScript", percentage: 85 },
                          { skill: "React", percentage: 78 },
                          { skill: "UX Design", percentage: 62 }
                        ].map((item, index) => (
                          <div key={index} className="space-y-1">
                            <div className="flex justify-between text-xs font-bold">
                              <span>{item.skill}</span>
                              <span>{item.percentage}%</span>
                            </div>
                            <div className="relative h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className="absolute h-full bg-primary rounded-full"
                                style={{ width: `${item.percentage}%` }}
                              ></div>
                              <div
                                className="absolute h-full bg-black/50 opacity-50 rounded-full"
                                style={{ width: `${item.percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Resume Score */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-border">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-sm">Resume Score</h3>
                        <FileText className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex items-center justify-center h-24">
                        <div className="relative w-24 h-24">
                          <svg className="w-full h-full" viewBox="0 0 100 100">
                            <circle
                              className="text-gray-200 stroke-current"
                              strokeWidth="10"
                              cx="50"
                              cy="50"
                              r="40"
                              fill="transparent"
                            ></circle>
                            <circle
                              className="text-primary stroke-current"
                              strokeWidth="10"
                              strokeLinecap="round"
                              cx="50"
                              cy="50"
                              r="40"
                              fill="transparent"
                              strokeDasharray="251.2"
                              strokeDashoffset="50.24"
                            ></circle>
                          </svg>
                          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <span className="text-2xl font-bold">80%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Career Recommendations */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-border">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium text-sm">Career Recommendations</h3>
                      <Briefcase className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-3">
                      {[
                        { role: "Senior UX Designer", match: 92 },
                        { role: "Product Manager", match: 87 },
                        { role: "UI Developer", match: 85 }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center p-2 bg-primary/5 rounded-lg">
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                            <Award className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <div className="text-sm font-medium">{item.role}</div>
                            <div className="text-xs text-muted-foreground">Match: {item.match}%</div>
                          </div>
                          <button className="ml-auto text-sm text-primary hover:text-primary/80 transition-colors">
                            View
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl" />
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="currentColor"
            fillOpacity="0.05"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      </div>
    </section>
  )
}

