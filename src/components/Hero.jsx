"use client"

import { motion } from "framer-motion"
import { ChevronRight, BarChart2, Users, FileText, Briefcase, Award, TrendingUp } from "lucide-react"
import Logo from "../assets/logo.png"; 

export default function Hero() {
  return (


    <section className="relative bg-gradient-to-b from-primary/5 via-background to-background min-h-screen flex items-center overflow-hidden">
            {/* Navbar */}
            <nav className="w-full bg-white shadow-md fixed top-0 left-0 right-0 z-20">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={Logo} alt="LakshyaMentor Logo" className="h-15 w-10 object-contain" />
            <span className="text-xl font-bold text-primary">MaargDarkshak</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6 text-foreground">
            <a
              href="#features"
              className="relative group cursor-pointer"
            >
              Features
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
            <a
              href="#how-it-works"
              className="relative group cursor-pointer"
            >
              How It Works
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
            <a
              href="#testimonials"
              className="relative group cursor-pointer"
            >
              Success Stories
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
            <a
              href="#footer"
              className="relative group cursor-pointer"
            >
              About Us
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
          </div>

          {/* Login Button */}
          <div className="flex gap-4">
          <button className="px-5 py-2 border border-primary text-primary rounded-md 
                     hover:bg-gradient-to-r from-blue-500 to-purple-500 
                     hover:text-white hover:shadow-xl hover:scale-105 
                     transition-all duration-300">
                    Sign Up
          </button>
           <button className="px-5 py-2 border border-primary text-primary rounded-md 
                     hover:bg-gradient-to-r from-green-500 to-teal-500 
                     hover:text-white hover:shadow-xl hover:scale-105 
                     transition-all duration-300">
                     Login
           </button>
        </div>

        </div>
      </nav>

      

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
          </motion.div>
        </div>
      </div>
    </section>
  )
}
