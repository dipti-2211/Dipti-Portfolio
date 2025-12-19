'use client'

import { useState, useEffect } from 'react'
import { Menu, Code, User, Briefcase, Mail, Home, GraduationCap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ThemeToggle } from '@/components/theme-toggle'
import { ProfilePicture } from '@/components/profile-picture'
import { CodingJourney } from '@/components/coding-journey'
import { ContactSection } from '@/components/contact-section'
import ThankYouModal from '@/components/ThankYouModal';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false) 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
    const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100 transition-colors duration-300 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900">
      {/* Enhanced Navbar */}
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 shadow-lg backdrop-blur-md dark:bg-slate-900/95'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="#home"
                onClick={() => scrollToSection('home')}
                className="text-xl font-bold text-slate-800 transition-colors hover:text-purple-600 dark:text-white dark:hover:text-purple-400 md:text-2xl"
              >
                Portfolio
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-4 md:flex">
              <div className="flex items-baseline space-x-4">
                {navItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 ${
                      activeSection === item.id
                        ? 'bg-purple-600 text-white shadow-lg'
                        : 'text-slate-700 hover:bg-purple-600/20 hover:text-purple-700 dark:text-gray-300 dark:hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <ThemeToggle />
            </div>

            {/* Mobile Navigation */}
            <div className="flex items-center space-x-2 md:hidden">
              <ThemeToggle />
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-slate-700 hover:bg-purple-600/20 dark:text-white"
                  >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[280px] border-purple-600/20 bg-white dark:bg-slate-900"
                >
                  <div className="mt-8 flex flex-col space-y-4">
                    {navItems.map(item => {
                      const IconComponent = item.icon
                      return (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className={`flex items-center space-x-3 rounded-lg px-4 py-3 text-left transition-all duration-200 ${
                            activeSection === item.id
                              ? 'bg-purple-600 text-white shadow-lg'
                              : 'text-slate-700 hover:bg-purple-600/20 hover:text-purple-700 dark:text-gray-300 dark:hover:text-white'
                          }`}
                        >
                          <IconComponent className="h-5 w-5" />
                          <span className="font-medium">{item.label}</span>
                        </button>
                      )
                    })}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Profile Picture */}
      <section id="home" className="flex min-h-screen items-center justify-center px-4 pt-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 lg:flex-row lg:gap-12">
          <div className="order-2 text-center lg:order-1 lg:w-1/2 lg:text-left">
            <h1 className="mb-4 text-3xl font-bold text-slate-800 dark:text-white md:mb-6 md:text-5xl lg:text-6xl">
              Welcome to My <span className="text-purple-600">Portfolio</span>
            </h1>
            <p className="mb-6 text-lg text-slate-600 dark:text-gray-300 md:mb-8 md:text-xl lg:text-2xl">
              Computer Science Student & Aspiring Developer
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Button
                onClick={() => scrollToSection('about')}
                className="rounded-full bg-purple-600 px-6 py-3 text-base text-white transition-all duration-200 hover:scale-105 hover:bg-purple-700 md:px-8 md:text-lg"
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="rounded-full border-purple-600 px-6 py-3 text-base text-purple-600 transition-all duration-200 hover:bg-purple-600 hover:text-white md:px-8 md:text-lg"
              >
                Contact Me
              </Button>
            </div>
          </div>
          <div className="order-1 flex justify-center lg:order-2 lg:w-1/2 lg:justify-end">
            <div className="scale-75 md:scale-100">
              <ProfilePicture />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="flex min-h-screen items-center justify-center px-4 py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 lg:flex-row lg:gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-25 blur"></div>
              <div className="relative rounded-lg bg-white p-6 shadow-xl dark:bg-slate-800">
                <h2 className="mb-6 text-2xl font-bold text-slate-800 dark:text-white md:text-3xl lg:text-4xl">
                  About Me
                </h2>
                <p className="mb-4 text-base leading-relaxed text-slate-600 dark:text-gray-300 md:text-lg">
                  I'm a passionate Computer Science student with a strong interest in full-stack
                  development and problem-solving. Currently pursuing my degree while building
                  practical skills through projects and internships.
                </p>
                <p className="mb-4 text-base leading-relaxed text-slate-600 dark:text-gray-300 md:text-lg">
                  I love learning new technologies, participating in hackathons, and contributing to
                  open-source projects. My goal is to become a skilled software engineer who can
                  create impactful solutions for the mordern problems.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Java', 'C++'].map(
                    skill => (
                      <span
                        key={skill}
                        className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                      >
                        {skill}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full space-y-6 lg:w-1/2">
            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-slate-800">
              <div className="mb-4 flex items-center">
                <Briefcase className="mr-2 h-6 w-6 text-purple-600" />
                <h3 className="text-lg font-bold text-slate-800 dark:text-white md:text-xl">
                  Experience
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="border-l-2 border-purple-600 pl-4">
                  <h4 className="text-sm font-semibold text-slate-800 dark:text-white md:text-base">
                    Frontend Developer Intern
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-gray-300 md:text-sm">
                    Tech Startup • Summer 2023
                  </p>
                </li>
                <li className="border-l-2 border-purple-600 pl-4">
                  <h4 className="text-sm font-semibold text-slate-800 dark:text-white md:text-base">
                    Web Development Freelancer
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-gray-300 md:text-sm">
                    Self-employed • 2023 - Present
                  </p>
                </li>
                <li className="border-l-2 border-purple-600 pl-4">
                  <h4 className="text-sm font-semibold text-slate-800 dark:text-white md:text-base">
                    Coding Club Leader
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-gray-300 md:text-sm">
                    Techno Main Salt Lake • 2024 - 2028
                  </p>
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-slate-800">
              <div className="mb-4 flex items-center">
                <GraduationCap className="mr-2 h-6 w-6 text-purple-600" />
                <h3 className="text-lg font-bold text-slate-800 dark:text-white md:text-xl">
                  Education
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="border-l-2 border-purple-600 pl-4">
                  <h4 className="text-sm font-semibold text-slate-800 dark:text-white md:text-base">
                    Bachelor's in Computer Science
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-gray-300 md:text-sm">
                    Techno Main Salt Lake 
                  </p>
                  <p className="text-xs text-purple-600 dark:text-purple-400">2024 - 2028</p>
                </li>
                <li className="border-l-2 border-purple-600 pl-4">
                  <h4 className="text-sm font-semibold text-slate-800 dark:text-white md:text-base">
                    Higher Secondary (12th)
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-gray-300 md:text-sm">
                    Vidya Bharti Chinmaya Vidyalaya
                  </p>
                  <p className="text-xs text-purple-600 dark:text-purple-400">2022 - 2024</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section with Coding Journey */}
      <section id="skills" className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-slate-800 dark:text-white md:text-4xl lg:text-5xl">
              My Coding Journey
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-gray-300">
              Explore my technical skills, coding achievements, and continuous learning journey in
              software development.
            </p>
          </div>
          <CodingJourney />
        </div>
      </section>

{/* Projects Section */}
<section id="projects" className="flex min-h-screen items-center justify-center px-4 py-20">
  <div className="mx-auto max-w-6xl">
    <h2 className="mb-8 text-center text-2xl font-bold text-slate-800 dark:text-white md:mb-12 md:text-4xl lg:text-5xl">
      My Projects
    </h2>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
      {[
        {
          title: 'Echo — AI Chatbot',
          desc: 'An intelligent AI chatbot with persona-switching.',
          tech: ['React', 'Node.js', 'Firebase', 'Groq AI'] ,
          link: 'https://echo-ai-chat-bot.vercel.app/',
          image: "/echo.png",
        },
        {
          title: 'Medi-Track',
          desc: 'Full-stack application for health and medical data management.',
         tech: ['React', 'Three.js', 'React Three Fiber', 'TensorFlow.js'],
          link: 'https://github.com/dipti-2211/Medi-Track', 
          image: '/medi-track.png',
        },
        {
          title: 'Vision — 3D ML Visualizer',
          desc: 'Interactive 3D model viewer with machine learning.',
          tech: ['TypeScript', 'ShadCN/UI', 'Express.js', 'Next.js'],
          link: 'https://ml-3d-objects.vercel.app/', 
          image : '/3d.png',
        },
        {
          title: 'Netflix Clone',
          desc: 'Netflix-inspired UI with auth and real-time movie browsing.',
          tech: ['Next.js', 'Firebase', 'Tailwind', 'Socket.io'],
          link: 'https://netflix-clone-omega-seven-19.vercel.app/',
          image: '/netf.jpg',
        },
        
        
      ].map((project, index) => {
        const handleClick = () => {
          const url = project.link || 'coming.png'
          window.open(url, '_blank', 'noopener,noreferrer')
        }

        return (
          <div
            key={index}
            className="overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl dark:bg-slate-800"
          >
            <div className="relative h-40 md:h-48 overflow-hidden">
              <img
                 src={project.image || '/coming.png'} // fallback to local image if not provided
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                   />
             </div>

            <div className="p-4 md:p-6">
              <h3 className="mb-2 text-lg font-bold text-slate-800 dark:text-white md:text-xl">
                {project.title}
              </h3>
              <p className="mb-4 text-sm text-slate-600 dark:text-gray-300 md:text-base">
                {project.desc}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tech.map(tech => (
                  <span
                    key={tech}
                    className="rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Button
                onClick={handleClick}
                className="w-full bg-purple-600 text-sm text-white hover:bg-purple-700 md:text-base"
              >
                {project.link ? 'View Project' : 'Coming Soon'}
              </Button>
            </div>
          </div>
        )
      })}
    </div>
  </div>
</section>


      

      {/* Contact Section */}
      <section id="contact" className="flex min-h-screen items-center justify-center px-4 py-20">
        <ContactSection onSuccessfulSubmission={openModal} />

      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-slate-600 dark:text-gray-300 md:text-base">
                © {new Date().getFullYear()} Dipti Singh Portfolio. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              {[
                { name: 'GitHub', icon: 'github' },
                { name: 'LinkedIn', icon: 'linkedin' },
                { name: 'Twitter', icon: 'twitter' },
                { name: 'Instagram', icon: 'instagram' },
              ].map(social => (
                <a
                  key={social.name}
                  href="#"
                  className="text-slate-500 transition-colors hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                >
                  <span className="sr-only">{social.name}</span>
                  <i className={`fab fa-${social.icon} text-lg md:text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
            <ThankYouModal isOpen={isModalOpen} onClose={closeModal} /> 
    </div>
  )
}
