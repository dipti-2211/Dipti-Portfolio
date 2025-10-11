'use client'

import { useState } from 'react'
// import { useRouter } from 'next/navigation' // Removed as planned
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'

import {
  Github,
  Linkedin,
  Mail,
  Globe,
  MapPin,
  Twitter ,
  Send,
  MessageSquare,
  Clock,
  User
} from 'lucide-react'

// ⭐ 1. Correct placement for the interface: outside the component function
interface ContactSectionProps {
  onSuccessfulSubmission: () => void;
}

// ⭐ 2. Component signature updated to accept the prop
export function ContactSection({ onSuccessfulSubmission }: ContactSectionProps) {

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState('submitting')

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('subject', formData.subject)
      formDataToSend.append('message', formData.message)

      const res = await fetch('https://formspree.io/f/xldlrgza', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formDataToSend,
      })

      const data = await res.json()

      if (data.ok) {
        setFormState('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        
        // ⭐ 3. Calls the function from the parent to open the modal
        onSuccessfulSubmission()
        
      } else {
        setFormState('error')
      }
    } catch (error) {
      setFormState('error')
    }
  }

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-16 text-center">
        <h2 className="mb-6 text-4xl font-bold text-slate-800 dark:text-white md:text-6xl">
          Let's Work{' '}
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Together
          </span>
        </h2>
        <p className="mx-auto max-w-4xl text-xl leading-relaxed text-slate-600 dark:text-gray-300 md:text-2xl">
          Have a project in mind? I'd love to hear about it. Drop me a message and let's create
          something amazing together.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Contact Info */}
        <div className="space-y-8 lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-25 blur"></div>
            <Card className="relative overflow-hidden rounded-2xl border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white dark:from-slate-800 dark:to-slate-900">
                  <div className="absolute right-0 top-0 h-40 w-40 opacity-10">
                    <div className="h-full w-full -translate-y-16 translate-x-16 transform rounded-full bg-gradient-to-br from-purple-400 to-pink-400"></div>
                  </div>
                  <div className="relative z-10">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-3">
                        <User className="h-6 w-6" />
                      </div>
                      <h3 className="text-2xl font-bold">Get In Touch</h3>
                    </div>
                    <p className="mb-6 text-lg text-slate-300">
                      Ready to bring your ideas to life? I'm here to help you build something extraordinary.
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="h-3 w-3 animate-pulse rounded-full bg-green-400"></div>
                      <span className="font-medium text-green-400">Available for new projects</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Methods */}
          <div className="space-y-4">
            {[
              {
                icon: <Mail className="h-5 w-5" />,
                title: 'Email',
                value: 'diptisingh11103@gmail.com',
                description: 'Best way to reach me',
                color: 'from-blue-500 to-blue-600',
                bgColor: 'bg-blue-50 dark:bg-blue-900/20',
                borderColor: 'border-blue-200 dark:border-blue-800',
              },

              {
                icon: <MapPin className="h-5 w-5" />,
                title: 'Location',
                value: 'KOLKATA, Web Developer',
                description: 'Open to remote work',
                color: 'from-purple-500 to-purple-600',
                bgColor: 'bg-purple-50 dark:bg-purple-900/20',
                borderColor: 'border-purple-200 dark:border-purple-800',
              },
            ].map((item, index) => (
              <Card key={index} className={`border-2 ${item.borderColor} group hover:shadow-lg transition-all`}>
                <CardContent className={`p-4 ${item.bgColor}`}>
                  <div className="flex items-center gap-4">
                    <div className={`rounded-xl p-3 text-white bg-gradient-to-r ${item.color} group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-800 dark:text-white">{item.title}</h4>
                      <p className="font-medium text-slate-700 dark:text-slate-200">{item.value}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Response Time Stats */}
          <Card className="border-slate-200 dark:border-slate-700">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <Clock className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                <h3 className="font-semibold text-slate-800 dark:text-white">Response Time</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-slate-800 dark:text-white">&lt; 24h</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Email Response</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-800 dark:text-white">1–2 weeks</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Project Start</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="border-slate-200 dark:border-slate-700">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <Globe className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                <h3 className="font-semibold text-slate-800 dark:text-white">Find Me Online</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  {
                    name: 'GitHub',
                    icon: <Github className="h-5 w-5" />,
                    link: 'https://github.com/dipti-2211',
                  },
                  {
                    name: 'LinkedIn',
                    icon: <Linkedin className="h-5 w-5" />,
                    link: 'https://www.linkedin.com/in/dipti-singh-3b0274309/',
                  },
                  {
                    name: 'Gmail',
                    icon: <Mail className="h-5 w-5" />,
                    link: 'mailto:diptisingh11103@gmail.com',
                  },
                  {
                    name: 'Twitter ',
                    icon: <Twitter className="h-5 w-5" />,
                    link: 'https://x.com/DiptiSingh2211?t=oVJUK2TlnsSxFp5mx4So9g&s=08',
                  },
                ].map(social => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-25 blur"></div>
            <Card className="relative overflow-hidden rounded-2xl border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
                  <div className="flex items-center gap-3">
                    <Send className="h-5 w-5" />
                    <h3 className="text-xl font-bold">Send Me a Message</h3>
                  </div>
                  <p className="mt-1 text-sm text-purple-100">I’ll get back to you within 24 hours</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4 p-6">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-1">
                      <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Name *</label>
                      <Input id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="Your full name" />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email *</label>
                      <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="your.email@example.com" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject *</label>
                    <Input id="subject" name="subject" required value={formData.subject} onChange={handleChange} placeholder="What's this about?" />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Message *</label>
                    <Textarea id="message" name="message" required value={formData.message} onChange={handleChange} placeholder="Tell me about your project or idea..." className="min-h-[100px] resize-none" />
                  </div>
                  <div className="pt-2">
                    <Button
                      type="submit"
                      className="h-11 w-full bg-gradient-to-r from-purple-600 to-pink-600 font-medium text-white shadow-lg transition-all duration-300 hover:from-purple-700 hover:to-pink-700 hover:shadow-xl"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-6 py-3 dark:bg-slate-800">
          <MessageSquare className="h-4 w-4 text-slate-600 dark:text-slate-400" />
          <span className="text-sm text-slate-600 dark:text-slate-400">
            Prefer email? Reach me directly at{' '}
            <a href="mailto:diptisingh11103@gmail.com" className="font-medium text-purple-600 hover:underline dark:text-purple-400">
              diptisingh11103@gmail.com
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}