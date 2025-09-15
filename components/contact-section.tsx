"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Calendar, Send, MessageSquare, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000)
    }, 2000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const availableSlots = [
    "9:00 AM - 10:00 AM",
    "11:00 AM - 12:00 PM",
    "2:00 PM - 3:00 PM",
    "4:00 PM - 5:00 PM",
    "6:00 PM - 7:00 PM",
  ]

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
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Ready to discuss your next AI project or need expert consultation? Let's connect and explore how we can work
            together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="bg-card/30 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/40 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <Link
                      href="mailto:rmustafa.hafeez@gmail.com"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      rmustafa.hafeez@gmail.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/40 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <Link href="tel:+92-3185127674" className="text-primary hover:text-primary/80 transition-colors">
                      +92-318-5127674
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/40 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">Islamabad, Pakistan</p>
                    <Badge variant="outline" className="border-primary/60 text-primary text-xs mt-1">
                      Available for Remote Work
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/40 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Response Time</p>
                    <p className="text-muted-foreground">Usually within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Booking */}
            <Card className="bg-card/30 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-playfair text-primary flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Quick Booking
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">Available consultation slots this week:</p>
                <div className="grid grid-cols-1 gap-2">
                  {availableSlots.map((slot, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="p-3 border border-primary/50 rounded-lg hover:border-primary/70 hover:bg-primary/10 transition-all duration-200 cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm">{slot}</span>
                        <Badge variant="outline" className="border-primary/60 text-primary text-xs">
                          Available
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-primary/70 text-primary bg-transparent transition-all duration-300 hover:border-primary hover:text-primary/90 hover:border-2 hover:shadow-[0_0_10px_rgba(74,222,128,0.4)]"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Google Meet Call
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/30 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-primary flex items-center gap-2">
                  <MessageSquare className="w-6 h-6" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-primary mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="bg-background border-primary/50 focus:border-primary"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-background border-primary/50 focus:border-primary"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="bg-background border-primary/50 focus:border-primary"
                        placeholder="Project consultation, collaboration, etc."
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="min-h-32 bg-background border-primary/50 focus:border-primary"
                        placeholder="Tell me about your project, requirements, or any questions you have..."
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="outline"
                      className="w-full border-primary/70 text-primary bg-transparent transition-all duration-300 hover:border-primary hover:text-primary/90 hover:border-2 hover:shadow-[0_0_10px_rgba(74,222,128,0.4)]"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Additional Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold font-playfair mb-8 text-primary">Prefer Other Platforms?</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.div 
              whileHover={{ 
                scale: 1.08,
                rotate: [-1, 1, -1, 0],
                transition: { 
                  rotate: { repeat: 2, duration: 0.3 },
                  scale: { duration: 0.2 }
                }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="https://wa.me/923185127674" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative overflow-hidden group"
              >
                <motion.div 
                  className="px-8 py-3 rounded-lg border-2 border-primary/70 flex items-center justify-center gap-3 bg-gradient-to-r from-transparent to-transparent group-hover:from-primary/30 group-hover:to-transparent transition-all duration-300"
                >
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2, repeatType: "loop" }}
                    className="p-2 rounded-full bg-primary/40 group-hover:bg-primary/50 transition-all duration-300"
                  >
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </motion.div>
                  <span className="text-lg text-primary font-medium">WhatsApp</span>
                </motion.div>
              </Link>
            </motion.div>
            
            <motion.div 
              whileHover={{ 
                scale: 1.08,
                y: [-2, 2, -2, 0],
                transition: { 
                  y: { repeat: 2, duration: 0.3 },
                  scale: { duration: 0.2 }
                }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="https://linkedin.com/in/mustafa-hafeez" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative overflow-hidden group"
              >
                <motion.div 
                  className="px-8 py-3 rounded-lg border-2 border-primary/70 flex items-center justify-center gap-3 bg-gradient-to-r from-transparent to-transparent group-hover:from-transparent group-hover:to-primary/30 transition-all duration-300"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    className="p-2 rounded-full bg-primary/40 group-hover:bg-primary/50 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5 text-primary" />
                  </motion.div>
                  <span className="text-lg text-primary font-medium">LinkedIn</span>
                </motion.div>
              </Link>
            </motion.div>
            
            <motion.div 
              whileHover={{ 
                scale: 1.08,
                x: [-2, 2, -2, 0],
                transition: { 
                  x: { repeat: 2, duration: 0.3 },
                  scale: { duration: 0.2 }
                }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="https://calendly.com/mustafa-hafeez" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative overflow-hidden group"
              >
                <motion.div 
                  className="px-8 py-3 rounded-lg border-2 border-primary/70 flex items-center justify-center gap-3 bg-gradient-to-r from-transparent to-transparent group-hover:from-primary/20 group-hover:to-primary/30 transition-all duration-300"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
                    className="p-2 rounded-full bg-primary/40 group-hover:bg-primary/50 transition-all duration-300"
                  >
                    <Calendar className="w-5 h-5 text-primary" />
                  </motion.div>
                  <span className="text-lg text-primary font-medium">Calendly</span>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
