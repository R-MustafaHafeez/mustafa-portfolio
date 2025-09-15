"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Bot, Phone, Calendar, Database, Eye, FileText } from "lucide-react"

const projects = [
  {
    title: "Real-Time Phone Call Interpretation",
    description:
      "Developed a real-time AI-powered call service enabling instant voice-based customer support and assistance with automatic speech recognition and Speech-to-Speech models.",
    icon: Phone,
    technologies: ["Python", "WebSocket", "Twilio", "FastAPI", "OpenAI", "ASR", "STS"],
    features: [
      "Multi-language support",
      "Real-time processing",
      "Voice-to-voice translation",
      "Customer support automation",
    ],
    github: "#",
    demo: "#",
    category: "AI/Voice",
  },
  {
    title: "SlaraAI - Complete Backend Architecture",
    description:
      "Designed complete backend architecture with business model logic, user plans, and resource allocation management. Features both voice-based and text-based chatbot functionalities.",
    icon: Bot,
    technologies: ["Python", "FastAPI", "OpenAI", "Embeddings", "Qdrant", "Voice Models"],
    features: ["Business logic", "User management", "Resource allocation", "Contextual QA", "PDF uploads"],
    github: "#",
    demo: "#",
    category: "SaaS/Backend",
  },
  {
    title: "LoanBud - Automated Loan Processing",
    description:
      "Integrated with HubSpot to run automated marketing campaigns and created AI agents for loan processing workflows with appointment booking and voice call Q&A.",
    icon: Calendar,
    technologies: ["HubSpot", "AI Agents", "Voice Models", "CRM Integration"],
    features: ["Marketing automation", "Loan processing", "Appointment booking", "Document verification"],
    github: "#",
    demo: "#",
    category: "Automation",
  },
  {
    title: "Fabricare Service Integration",
    description:
      "Integrated OpenAI with SMRT platform to create an appointment scheduling system for CRM with voice and chat Q&A capabilities and PDF upload functionality.",
    icon: FileText,
    technologies: ["OpenAI", "SMRT", "CRM Integration", "PDF Processing"],
    features: ["Appointment scheduling", "Voice & chat Q&A", "Document processing", "CRM integration"],
    github: "#",
    demo: "#",
    category: "Integration",
  },
  {
    title: "Engineering Drawings Object Detection",
    description:
      "Developed YOLO-based models for detecting text annotations in engineering drawings with OCR extraction and YOLOv11 model for floor plan component detection.",
    icon: Eye,
    technologies: ["YOLO", "YOLOv11", "OCR", "SQL", "Computer Vision"],
    features: ["Text annotation detection", "Floor plan analysis", "Component classification", "Data extraction"],
    github: "#",
    demo: "#",
    category: "Computer Vision",
  },
  {
    title: "Multi-Agent Database System",
    description:
      "Built scalable database solutions with advanced query optimization and real-time data processing for high-volume concurrent operations.",
    icon: Database,
    technologies: ["MongoDB", "MySQL", "FastAPI", "Real-time Processing"],
    features: ["Query optimization", "Real-time processing", "Scalable architecture", "High concurrency"],
    github: "#",
    demo: "#",
    category: "Database",
  },
]

const categories = ["All", "AI/Voice", "SaaS/Backend", "Automation", "Integration", "Computer Vision", "Database"]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = React.useState("All");
  
  // Filter projects based on the active category
  const filteredProjects = React.useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter(project => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            A showcase of innovative AI-powered solutions, backend architectures, and automation systems that
            demonstrate expertise in cutting-edge technologies.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <motion.div
              key={category}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, category === activeCategory ? -2 : 0, 0] }}
              transition={{ 
                y: { repeat: category === activeCategory ? Infinity : 0, repeatType: "reverse", duration: 0.6 },
                scale: { duration: 0.2 }
              }}
            >
              <Button
                variant={category === activeCategory ? "default" : "outline"}
                size="sm"
                className={
                  category === activeCategory
                    ? "bg-primary/90 text-white hover:bg-primary hover:text-white"
                    : "border-primary/60 text-primary hover:bg-primary/10 hover:text-primary"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/40 transition-all duration-300 hover:bg-card/50 grid-bg-hover">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/40 transition-colors">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="outline" className="border-primary/50 text-primary text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-playfair group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed text-sm">{project.description}</p>

                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-primary">Key Features:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-primary">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-primary/60 text-white border-primary/70 hover:bg-primary/80 transition-colors font-medium shadow-sm"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full border-primary/70 text-primary bg-transparent transition-all duration-300 hover:border-primary hover:text-primary/90 hover:border-2 hover:shadow-[0_0_10px_rgba(74,222,128,0.4)]"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-primary/70 text-primary hover:bg-primary/10 hover:text-primary bg-transparent"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
