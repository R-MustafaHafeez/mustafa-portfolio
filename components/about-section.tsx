"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, MapPin, Calendar, GraduationCap, Briefcase } from "lucide-react"

const timelineData = [
  {
    type: "work",
    title: "Software Engineer",
    company: "Advanced Cash Management, LLC",
    location: "Remote",
    period: "April 2025 – Present",
    description:
      "Engineered cutting-edge real-time phone call interpretation system using Python and advanced AI models. Integrated ASR and STS technologies for multi-language communication.",
    skills: ["Python", "WebSocket", "ASR", "STS", "AI Models"],
  },
  {
    type: "work",
    title: "Backend/Gen AI Engineer",
    company: "Octaloop Technologies",
    location: "Islamabad, Pakistan",
    period: "November 2023 – April 2025",
    description:
      "Built AI applications using FastAPI, Flask, LangChain, and OpenAI. Specialized in Agentic AI and autonomous AI agents for task automation.",
    skills: ["FastAPI", "LangChain", "OpenAI", "CrewAI", "YOLO", "HubSpot"],
  },
  {
    type: "education",
    title: "Bachelor of Science in Computer Science",
    company: "Capital University of Science and Technology",
    location: "Islamabad, Pakistan",
    period: "2019 – 2023",
    description:
      "Relevant coursework in Data Science, AI, Machine Learning, Computer Networking, and Software Engineering.",
    skills: ["Data Science", "AI", "Machine Learning", "Software Engineering"],
  },
]

export function AboutSection() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            AI Engineer & Backend Developer specializing in Agentic AI and automation. Expert in designing and deploying
            real-time AI agents, multi-level agent architectures, and autonomous systems to streamline workflows and
            automate complex business processes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-playfair mb-6 text-primary">Personal Information</h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Islamabad, Pakistan</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span>Available for Remote Work</span>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4">Core Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Agentic AI", "Backend Development", "LLM Integration", "Automation", "Real-time Systems"].map(
                      (skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="border-primary/30 text-primary hover:bg-primary/10"
                        >
                          {skill}
                        </Badge>
                      ),
                    )}
                  </div>
                </div>

                <Button 
                  variant="outline"
                  className="w-full border-primary/70 text-primary bg-transparent transition-all duration-300 hover:border-primary hover:text-primary/90 hover:border-2 hover:shadow-[0_0_10px_rgba(74,222,128,0.4)]"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Full CV
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold font-playfair mb-8 text-primary">Professional Journey</h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/30" />

              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative mb-8 last:mb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 w-4 h-4 bg-primary rounded-full border-4 border-background glow-effect" />

                  <div className="ml-16">
                    <Card className="bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:bg-card/50">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-2 mb-2">
                          {item.type === "work" ? (
                            <Briefcase className="w-5 h-5 text-primary mt-1" />
                          ) : (
                            <GraduationCap className="w-5 h-5 text-primary mt-1" />
                          )}
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
                            <p className="text-primary font-medium">{item.company}</p>
                            <p className="text-sm text-muted-foreground flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {item.location} • {item.period}
                            </p>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>

                        <div className="flex flex-wrap gap-1">
                          {item.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="text-xs bg-primary/10 text-primary border-primary/20"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
