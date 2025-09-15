"use client"

import { Button } from "@/components/ui/button"
import { ParticleBackground } from "@/components/particle-background"
import { TypewriterText } from "@/components/typewriter-text"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { ChatbotAssistant } from "@/components/chatbot-assistant"
import { motion } from "framer-motion"
import { Download, Calendar, Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const specialties = ["Agentic AI", "Automation", "SaaS Platforms", "AI Chatbots", "LLM Integration"]

  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticleBackground />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex justify-between items-center p-6 md:p-8 backdrop-blur-sm bg-background/30"
      >
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="text-2xl font-bold font-playfair text-primary backdrop-blur-sm bg-background/60 px-3 py-1 rounded-md"
        >
          MH
        </motion.div>

        <div className="flex items-center gap-4">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="sm"
              className="border-primary/70 text-primary bg-transparent transition-all duration-300 hover:border-primary hover:text-primary/90 hover:border-2 hover:shadow-[0_0_10px_rgba(74,222,128,0.4)]"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button 
              variant="outline"
              size="sm" 
              className="border-primary/70 text-primary bg-transparent transition-all duration-300 hover:border-primary hover:text-primary/90 hover:border-2 hover:shadow-[0_0_10px_rgba(74,222,128,0.4)]"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Call
            </Button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold font-playfair mb-4 text-balance">
            <span className="text-foreground">Mustafa</span> <span className="text-primary">Hafeez</span>
          </h1>

          <div className="text-xl md:text-2xl text-muted-foreground mb-6">
            <span>Backend / Gen AI Engineer</span>
          </div>

          <div className="text-lg md:text-xl h-8 flex items-center justify-center">
            <span className="text-muted-foreground mr-2">Specializing in</span>
            <TypewriterText
              texts={specialties}
              speed={100}
              deleteSpeed={50}
              pauseTime={2000}
              className="text-primary font-semibold"
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-12 text-balance leading-relaxed"
        >
          Expert in designing and deploying real-time AI agents, multi-level agent architectures, and autonomous systems
          to streamline workflows and automate complex business processes.
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/70 text-primary bg-transparent transition-all duration-300 hover:border-primary hover:text-primary/90 hover:border-2 hover:shadow-[0_0_10px_rgba(74,222,128,0.4)] px-8 py-6 text-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/70 text-primary bg-transparent transition-all duration-300 hover:border-primary hover:text-primary/90 hover:border-2 hover:shadow-[0_0_10px_rgba(74,222,128,0.4)] px-8 py-6 text-lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment
            </Button>
          </motion.div>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center gap-6"
        >
          <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
            <Link
              href="mailto:rmustafa.hafeez@gmail.com"
              className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Mail className="w-5 h-5 text-primary" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2, rotate: -5 }} whileTap={{ scale: 0.9 }}>
            <Link
              href="tel:+92-3185127674"
              className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Phone className="w-5 h-5 text-primary" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
            <Link
              href="https://github.com/R-MustafaHafeez"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Github className="w-5 h-5 text-primary" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2, rotate: -5 }} whileTap={{ scale: 0.9 }}>
            <Link
              href="https://linkedin.com/in/mustafa-hafeez"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 text-primary" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

      {/* Grid Background Overlay */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      
      <ChatbotAssistant />
    </div>
  )
}
