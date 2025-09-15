"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts"
import { Brain, Server, Database, Code, Cloud, Mic, Bot, Zap, Cpu, Network } from "lucide-react"

const skillCategories = [
  {
    title: "AI/ML Technologies",
    icon: Brain,
    skills: [
      { name: "LangChain", level: 95 },
      { name: "OpenAI", level: 90 },
      { name: "CrewAI", level: 85 },
      { name: "Hugging Face", level: 80 },
      { name: "PyTorch", level: 75 },
      { name: "YOLO", level: 85 },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "FastAPI", level: 95 },
      { name: "Flask", level: 90 },
      { name: "Django", level: 80 },
      { name: "Python", level: 95 },
      { name: "C++", level: 75 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    title: "Databases & Storage",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "Qdrant", level: 85 },
      { name: "FAISS", level: 80 },
      { name: "Pinecone", level: 75 },
      { name: "Redis", level: 70 },
    ],
  },
  {
    title: "Voice & Speech",
    icon: Mic,
    skills: [
      { name: "Deepgram", level: 90 },
      { name: "ElevenLabs", level: 85 },
      { name: "Google Speech", level: 80 },
      { name: "Azure Speech", level: 75 },
      { name: "Vapi", level: 85 },
      { name: "Retell AI", level: 80 },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Cloud,
    skills: [
      { name: "Docker", level: 85 },
      { name: "GCP", level: 80 },
      { name: "Git/GitHub", level: 95 },
      { name: "WebSocket", level: 90 },
      { name: "Twilio", level: 85 },
      { name: "VS Code", level: 95 },
    ],
  },
  {
    title: "Integrations",
    icon: Network,
    skills: [
      { name: "HubSpot", level: 90 },
      { name: "SMRT", level: 85 },
      { name: "Go High Level", level: 80 },
      { name: "CRM Systems", level: 85 },
      { name: "REST APIs", level: 95 },
      { name: "GraphQL", level: 70 },
    ],
  },
]

const radarData = [
  { subject: "AI/ML", A: 90, fullMark: 100 },
  { subject: "Backend", A: 95, fullMark: 100 },
  { subject: "Databases", A: 85, fullMark: 100 },
  { subject: "Voice Tech", A: 85, fullMark: 100 },
  { subject: "DevOps", A: 80, fullMark: 100 },
  { subject: "Integration", A: 88, fullMark: 100 },
]

const specializations = [
  {
    title: "Agentic AI",
    description: "Designing autonomous AI agents for task automation",
    icon: Bot,
    level: 95,
  },
  {
    title: "Real-time Systems",
    description: "Building high-performance concurrent processing systems",
    icon: Zap,
    level: 90,
  },
  {
    title: "Prompt Engineering",
    description: "Fine-tuning LLMs for enhanced NLP performance",
    icon: Code,
    level: 90,
  },
  {
    title: "System Architecture",
    description: "Scalable backend solutions and microservices",
    icon: Cpu,
    level: 85,
  },
]

export function SkillsSection() {
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
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            A comprehensive overview of technologies, frameworks, and tools mastered through years of hands-on
            experience in AI development and backend engineering.
          </p>
        </motion.div>

        {/* Radar Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-card/30 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-playfair text-primary">Skills Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="rgba(0, 255, 0, 0.2)" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: "rgba(255, 255, 255, 0.8)", fontSize: 12 }} />
                    <PolarRadiusAxis
                      angle={90}
                      domain={[0, 100]}
                      tick={{ fill: "rgba(0, 255, 0, 0.6)", fontSize: 10 }}
                    />
                    <Radar
                      name="Skills"
                      dataKey="A"
                      stroke="rgba(0, 255, 0, 1)"
                      fill="rgba(0, 255, 0, 0.1)"
                      strokeWidth={2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold font-playfair text-center mb-8 text-primary">Core Specializations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializations.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-card/20 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:bg-card/40 text-center">
                  <CardContent className="p-6">
                    <div>
                      <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <spec.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="text-lg font-semibold font-playfair mb-2">{spec.title}</h4>
                      <p className="text-sm text-muted-foreground">{spec.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Detailed Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                type: "spring",
                bounce: 0.3
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 10px 30px -15px rgba(0, 255, 0, 0.3)",
                transition: { duration: 0.3 }
              }}
            >
              <Card className="h-full bg-card/20 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:bg-card/40 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="p-3 rounded-lg bg-primary/10"
                      whileHover={{ 
                        backgroundColor: "rgba(0, 255, 0, 0.3)",
                        rotate: [0, -10, 10, -5, 5, 0],
                        transition: { duration: 0.6 }
                      }}
                    >
                      <category.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <CardTitle className="text-lg font-playfair">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: skillIndex * 0.08,
                          type: "spring",
                          stiffness: 120
                        }}
                        whileHover={{ 
                          scale: 1.05, 
                          backgroundColor: "rgba(0, 255, 0, 0.15)",
                          transition: { duration: 0.2 }
                        }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 p-2 rounded-lg border border-primary/20 bg-primary/5 hover:border-primary/40 transition-all"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm font-medium">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold font-playfair mb-8 text-primary">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Asynchronous Programming",
              "Neural Networks",
              "CNN",
              "RNN",
              "Transformer",
              "NLP",
              "Computer Vision",
              "OCR",
              "Embeddings",
              "Vector Databases",
              "Microservices",
              "API Design",
              "Real-time Communication",
              "Multi-threading",
              "Performance Optimization",
              "System Design",
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge
                  variant="outline"
                  className="border-primary/30 text-primary hover:bg-primary/10 transition-colors cursor-default"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
