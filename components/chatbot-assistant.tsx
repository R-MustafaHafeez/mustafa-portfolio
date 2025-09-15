"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react"

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
}

export function ChatbotAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  // WhatsApp-style message parser
  const parseMessage = (text: string) => {
    // Split by line breaks and process each line
    const lines = text.split('\n')
    const elements: JSX.Element[] = []
    
    lines.forEach((line, lineIndex) => {
      if (line.trim() === '') {
        elements.push(<br key={`br-${lineIndex}`} />)
        return
      }

      // Parse formatting within each line
      const parts = line.split(/(\*[^*]+\*|_[^_]+_|`[^`]+`)/g)
      const lineElements: JSX.Element[] = []
      
      parts.forEach((part, partIndex) => {
        if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
          // Bold text
          lineElements.push(
            <strong key={`bold-${lineIndex}-${partIndex}`} className="font-semibold">
              {part.slice(1, -1)}
            </strong>
          )
        } else if (part.startsWith('_') && part.endsWith('_') && part.length > 2) {
          // Italic text
          lineElements.push(
            <em key={`italic-${lineIndex}-${partIndex}`} className="italic">
              {part.slice(1, -1)}
            </em>
          )
        } else if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
          // Code text
          lineElements.push(
            <code key={`code-${lineIndex}-${partIndex}`} className="bg-primary/10 text-primary px-1 py-0.5 rounded text-xs font-mono">
              {part.slice(1, -1)}
            </code>
          )
        } else if (part.trim()) {
          // Regular text
          lineElements.push(
            <span key={`text-${lineIndex}-${partIndex}`}>
              {part}
            </span>
          )
        }
      })
      
      elements.push(
        <div key={`line-${lineIndex}`} className={lineIndex > 0 ? "mt-2" : ""}>
          {lineElements}
        </div>
      )
    })
    
    return elements
  }
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm Mustafa's AI assistant. I can help you learn more about his experience, skills, and projects. What would you like to know?",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen) {
      // Focus input when chat opens
      setTimeout(() => {
        focusInput()
      }, 500)
    }
  }, [isOpen])

  const handleSendMessage = () => {
    if (!inputValue.trim() || isTyping) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    }

    const currentInput = inputValue
    setMessages(prev => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Focus back immediately after sending
    setTimeout(() => {
      focusInput()
    }, 50)

    // Simulate bot thinking and typing
    setTimeout(() => {
      const botResponse = getBotResponse(currentInput)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
      
      // Focus back to input after bot response - this is the key moment
      setTimeout(() => {
        focusInput()
      }, 200)
    }, 1500)
  }

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    if (input.includes("experience") || input.includes("work") || input.includes("background")) {
      return "*Mustafa's Professional Background* 🚀\n\nMustafa is a *Backend/Gen AI Engineer* with deep expertise in _Agentic AI_ and automation.\n\nHe specializes in:\n• Designing *real-time AI agents*\n• Multi-level agent architectures\n• Autonomous systems that streamline complex business workflows\n\nHis work focuses on creating intelligent solutions that can operate independently and make decisions in real-time."
    }
    
    if (input.includes("skills") || input.includes("technology") || input.includes("tech stack")) {
      return "*Technical Arsenal* ⚡\n\n*Core Technologies:*\n• `Python` - Backend development\n• `FastAPI` - API architecture\n• `OpenAI GPT` - AI integration\n• `WebSocket` - Real-time communication\n• `Twilio` - Voice integration\n• `Vector Embeddings` - AI search\n• `Qdrant` - Vector database\n\n*Specializations:*\n• _Agentic AI Systems_\n• _Process Automation_\n• _SaaS Platform Development_\n• _Conversational AI_\n• _Large Language Model Integration_"
    }
    
    if (input.includes("projects") || input.includes("portfolio") || input.includes("work samples")) {
      return "*Featured Projects* 💼\n\n*1. Real-Time Phone Call Interpretation*\nAI-powered voice analysis system with real-time processing capabilities.\n\n*2. SlaraAI Backend Architecture*\nComplete backend with sophisticated business logic and user management systems.\n\n*3. Enterprise Automation Solutions*\nVarious automation solutions for enterprise clients.\n\nEach project showcases the ability to architect _scalable, intelligent systems_ that solve real business problems."
    }
    
    if (input.includes("contact") || input.includes("reach") || input.includes("hire") || input.includes("collaboration")) {
      return "*Ready to Collaborate?* 🤝\n\n*Email:* rmustafa.hafeez@gmail.com\n*Phone/WhatsApp:* +92-3185127674\n\n*Professional Networks:*\n• *LinkedIn:* linkedin.com/in/mustafa-hafeez\n• *GitHub:* github.com/R-MustafaHafeez\n\nMustafa is always excited to discuss _innovative AI projects_ and potential collaborations! 🚀"
    }
    
    if (input.includes("hello") || input.includes("hi") || input.includes("hey") || input.includes("greetings")) {
      return "*Hello there!* 👋\n\nWelcome to Mustafa's portfolio! I'm his _AI assistant_, here to help you discover his expertise in cutting-edge AI engineering.\n\n*Feel free to ask about:*\n• Technical skills & experience\n• Project portfolio\n• Professional background\n• Contact information\n\nWhat interests you most? 🤖✨"
    }

    if (input.includes("ai") || input.includes("artificial intelligence") || input.includes("machine learning")) {
      return "*AI Innovation Expertise* 🧠\n\nMustafa is passionate about AI innovation! His expertise spans:\n\n• *Agentic AI Systems* - Autonomous decision-making\n• *Conversational AI* - Natural language processing\n• *LLM Integration* - Large language model implementation\n• *Voice AI* - Speech processing & analysis\n• *Autonomous Systems* - Self-operating intelligent solutions\n\nHe builds AI solutions that don't just respond—they _think, learn, and act intelligently_ to solve complex business challenges. 🚀"
    }

    return "*Great question!* 💭\n\nI'm here to help you learn everything about Mustafa's expertise.\n\n*You can ask me about:*\n• Technical skills & technologies\n• Innovative projects & portfolio\n• Professional experience\n• Best ways to get in touch\n\nWhat interests you most? 🤖✨"
  }

  return (
    <>
      {/* Floating Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          delay: 2, 
          type: "spring", 
          stiffness: 200, 
          damping: 15,
          duration: 0.8
        }}
      >
        <motion.div
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          {/* Pulse Animation Ring */}
          <motion.div
            className="absolute inset-0 rounded-full bg-primary/30"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 0, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-primary/20 blur-xl"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <Button
            onClick={() => setIsOpen(!isOpen)}
            size="lg"
            className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:via-primary/90 hover:to-primary/70 shadow-2xl border-2 border-primary/30 backdrop-blur-sm transition-all duration-300"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative"
                >
                  <MessageCircle className="w-6 h-6" />
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </motion.div>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Chat Container */}
            <motion.div
              initial={{ 
                opacity: 0, 
                y: 100, 
                scale: 0.8,
                rotateX: -15
              }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                rotateX: 0
              }}
              exit={{ 
                opacity: 0, 
                y: 100, 
                scale: 0.8,
                rotateX: 15
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 25,
                duration: 0.4
              }}
              className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm h-[500px] md:w-96 md:h-[550px]"
            >
              <Card className="w-full h-full bg-gradient-to-br from-card/95 via-card/90 to-card/95 backdrop-blur-xl border border-primary/20 shadow-2xl shadow-primary/10 rounded-2xl overflow-hidden flex flex-col">
                {/* Header */}
                <CardHeader className="pb-3 border-b border-primary/10 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 flex-shrink-0">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <CardTitle className="text-lg font-semibold text-primary flex items-center gap-3">
                      <motion.div
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-primary via-primary/80 to-primary/60 flex items-center justify-center shadow-lg"
                        animate={{
                          boxShadow: [
                            "0 0 20px rgba(var(--primary), 0.3)",
                            "0 0 30px rgba(var(--primary), 0.5)",
                            "0 0 20px rgba(var(--primary), 0.3)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Bot className="w-5 h-5 text-primary-foreground" />
                      </motion.div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span>AI Assistant</span>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          >
                            <Sparkles className="w-4 h-4 text-primary/60" />
                          </motion.div>
                        </div>
                        <div className="text-xs font-normal text-muted-foreground flex items-center gap-1">
                          <motion.div
                            className="w-2 h-2 bg-green-400 rounded-full"
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                          Online
                        </div>
                      </div>
                    </CardTitle>
                  </motion.div>
                </CardHeader>
                
                <CardContent className="p-0 flex-1 flex flex-col min-h-0">
                  {/* Messages Area */}
                  <ScrollArea 
                    className="flex-1 p-4 scroll-smooth min-h-0"
                  >
                    <div className="space-y-4">
                      <AnimatePresence initial={false}>
                        {messages.map((message, index) => (
                          <motion.div
                            key={message.id}
                            initial={{ 
                              opacity: 0, 
                              y: 20,
                              scale: 0.8
                            }}
                            animate={{ 
                              opacity: 1, 
                              y: 0,
                              scale: 1
                            }}
                            transition={{ 
                              delay: index * 0.1,
                              type: "spring",
                              stiffness: 200,
                              damping: 20
                            }}
                            className={`flex items-start gap-3 ${
                              message.isBot ? "justify-start" : "justify-end"
                            }`}
                          >
                            {message.isBot && (
                              <motion.div 
                                className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 flex items-center justify-center flex-shrink-0 border border-primary/20"
                                whileHover={{ scale: 1.1 }}
                              >
                                <Bot className="w-4 h-4 text-primary" />
                              </motion.div>
                            )}
                            
                            <motion.div
                              whileHover={{ scale: 1.02 }}
                              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-lg ${
                                message.isBot
                                  ? "bg-gradient-to-br from-muted via-muted/90 to-muted/80 text-foreground border border-primary/10"
                                  : "bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground shadow-primary/20"
                              }`}
                            >
                              <div className="leading-relaxed">
                                {message.isBot ? parseMessage(message.text) : message.text}
                              </div>
                              <div className={`text-xs mt-2 opacity-60 ${
                                message.isBot ? "text-muted-foreground" : "text-primary-foreground/60"
                              }`}>
                                {message.timestamp.toLocaleTimeString([], { 
                                  hour: '2-digit', 
                                  minute: '2-digit' 
                                })}
                              </div>
                            </motion.div>
                            
                            {!message.isBot && (
                              <motion.div 
                                className="w-8 h-8 rounded-full bg-gradient-to-br from-primary via-primary/80 to-primary/60 flex items-center justify-center flex-shrink-0 shadow-lg"
                                whileHover={{ scale: 1.1 }}
                              >
                                <User className="w-4 h-4 text-primary-foreground" />
                              </motion.div>
                            )}
                          </motion.div>
                        ))}
                      </AnimatePresence>
                      
                      {/* Typing Indicator */}
                      <AnimatePresence>
                        {isTyping && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="flex items-start gap-3 justify-start"
                          >
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 flex items-center justify-center border border-primary/20">
                              <Bot className="w-4 h-4 text-primary" />
                            </div>
                            <div className="bg-gradient-to-br from-muted via-muted/90 to-muted/80 rounded-2xl px-4 py-3 border border-primary/10">
                              <div className="flex space-x-1">
                                {[0, 1, 2].map((dot) => (
                                  <motion.div
                                    key={dot}
                                    className="w-2 h-2 bg-primary/60 rounded-full"
                                    animate={{
                                      scale: [1, 1.2, 1],
                                      opacity: [0.5, 1, 0.5],
                                    }}
                                    transition={{
                                      duration: 1,
                                      repeat: Infinity,
                                      delay: dot * 0.2,
                                    }}
                                  />
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      
                      {/* Scroll anchor */}
                      <div ref={messagesEndRef} />
                    </div>
                  </ScrollArea>
                  
                  {/* Input Area */}
                  <motion.div 
                    className="p-4 border-t border-primary/10 bg-gradient-to-r from-card/50 via-card/80 to-card/50 backdrop-blur-sm flex-shrink-0"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    onClick={() => inputRef.current?.focus()}
                  >
                    <div className="flex gap-3">
                      <Input
                        ref={inputRef}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault()
                            handleSendMessage()
                          }
                        }}
                        placeholder="Ask me anything..."
                        disabled={isTyping}
                        autoFocus={isOpen}
                        className="flex-1 bg-background/80 border-primary/20 focus:border-primary/40 rounded-xl px-4 py-2 text-sm placeholder:text-muted-foreground/60 transition-all duration-200 focus:shadow-lg focus:shadow-primary/10"
                      />
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          onClick={handleSendMessage}
                          disabled={!inputValue.trim() || isTyping}
                          size="sm"
                          className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground hover:from-primary/90 hover:via-primary/80 hover:to-primary/70 disabled:opacity-50 shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-200"
                        >
                          <motion.div
                            animate={isTyping ? { rotate: 360 } : { rotate: 0 }}
                            transition={{ duration: 1, repeat: isTyping ? Infinity : 0 }}
                          >
                            <Send className="w-4 h-4" />
                          </motion.div>
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
