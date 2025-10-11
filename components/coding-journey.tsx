"use client"

import { useState } from "react"
import {
  Code,
  Award,
  BookOpen,
  Trophy,
  Globe,
  TrendingUp,
  Target,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Server,
  GitBranch,
  Brain,
  BarChart3,
  Users,
  CheckCircle,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export function CodingJourney() {
  const [activeCategory, setActiveCategory] = useState("overview")

  const techStacks = {
    frontend: {
      title: "Frontend Development",
      icon: <Monitor className="h-5 w-5" />,
      color: "from-slate-600 to-slate-800",
      bgColor: "bg-slate-50 dark:bg-slate-900/50",
      borderColor: "border-slate-200 dark:border-slate-700",
      technologies: [
        { name: "React", level: 95, category: "Framework" },
        { name: "Next.js", level: 90, category: "Framework" },
        { name: "TypeScript", level: 88, category: "Language" },
        { name: "JavaScript", level: 95, category: "Language" },
        { name: "Tailwind CSS", level: 92, category: "Styling" },
        { name: "Vue.js", level: 80, category: "Framework" },
        { name: "SASS/SCSS", level: 85, category: "Styling" },
      ],
    },
    backend: {
      title: "Backend Development",
      icon: <Server className="h-5 w-5" />,
      color: "from-blue-600 to-blue-800",
      bgColor: "bg-blue-50 dark:bg-blue-900/50",
      borderColor: "border-blue-200 dark:border-blue-700",
      technologies: [
        { name: "Node.js", level: 88, category: "Runtime" },
        { name: "Express.js", level: 85, category: "Framework" },
        { name: "Python", level: 82, category: "Language" },
        { name: "Django", level: 75, category: "Framework" },
        { name: "Java", level: 78, category: "Language" },
        { name: "Spring Boot", level: 70, category: "Framework" },
        { name: "REST APIs", level: 90, category: "Architecture" },
      ],
    },

    mobile: {
      title: "Mobile Development",
      icon: <Smartphone className="h-5 w-5" />,
      color: "from-purple-600 to-purple-800",
      bgColor: "bg-purple-50 dark:bg-purple-900/50",
      borderColor: "border-purple-200 dark:border-purple-700",
      technologies: [
        { name: "React Native", level: 80, category: "Cross-platform" },
        { name: "Flutter", level: 75, category: "Cross-platform" },
        { name: "Swift", level: 65, category: "iOS" },
        { name: "Kotlin", level: 70, category: "Android" },
        { name: "Ionic", level: 60, category: "Hybrid" },
      ],
    },
    cloud: {
      title: "Languages & Expertise",
      icon: <Cloud className="h-5 w-5" />,
      color: "from-orange-600 to-orange-800",
      bgColor: "bg-orange-50 dark:bg-orange-900/50",
      borderColor: "border-orange-200 dark:border-orange-700",
      technologies: [
        { name: "C++", level: 90, category: "Systems Programming" },
        { name: "Java", level: 80, category: "Backend Development" },
        { name: "Python", level: 85, category: "Scripting & Data Science" },
        { name: "C", level: 85, category: "Embedded Systems" },
        { name: "Javascript", level: 80, category: "Frontend & Web Development" },
        { name: "Swift", level: 70, category: "iOS App Development" },

      ],
    },
    tools: {
      title: "Development Tools",
      icon: <Code className="h-5 w-5" />,
      color: "from-indigo-600 to-indigo-800",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/50",
      borderColor: "border-indigo-200 dark:border-indigo-700",
      technologies: [
        { name: "Git & GitHub", level: 95, category: "Version Control" },
        { name: "VS Code", level: 98, category: "IDE" },
        { name: "Dribble", level: 88, category: "API Testing" },
        { name: "Figma", level: 75, category: "Design" },
        { name: "Notion", level: 85, category: "Documentation" },
        { name: "Linear", level: 80, category: "Project Management" },
      ],
    },
  }

  const platforms = [
    {
      name: "LeetCode",
      solved: 300,
      rank: "Pupil",
      streak: 45,
      rating: 1650,
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "GeeksforGeeks",
      solved: 250,
      rank: "Expert",
      streak: 30,
      rating: 2100,
      color: "from-green-500 to-green-600",
    },
    {
      name: "CodeChef",
      solved: 150,
      rank: "3 Star",
      streak: 25,
      rating: 1850,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      name: "TakeUForward",
      solved: 400,
      rank: "Proficient",
      streak: 40,
      rating: 1200,
      color: "from-blue-500 to-blue-600",
    },
  ]

const achievements = [
  {
    title: "Tech Competition Winner - EDGE ",
    date: "April 2025",
    description: "Won 1st place at CryptoQuest, an inter-college event at EDGE 2025 focused on blockchain-based problem solving.",
    icon: <Trophy className="h-6 w-6" />,
    category: "Competition",
    link: "https://www.linkedin.com/posts/dipti-singh-3b0274309_victorysecured-win-victory-activity-7324803532178501632-MxlJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE6G_DQBWQdFrWu9nwTF3bFhK4mCnPV29Yk"
  },
  {
    title: "Web Development Winner - IntraCup",
    date: "February 2025",
    description: "Achieved 1st place in IntraCup 2025 (Web Dev), honored with a cash prize for innovation and clean UI/UX.",
    icon: <GitBranch className="h-6 w-6" />,
    category: "Development",
    link: "https://www.linkedin.com/posts/dipti-singh-3b0274309_webdevelopment-cashprizewinner-intracup2025-activity-7315007449617330176-v7eX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE6G_DQBWQdFrWu9nwTF3bFhK4mCnPV29Yk"
  },
  {
    title: "Excel Essentials Certified ",
    date: "July 2025",
    description: "Certified in Excel Essentials—proficient in data entry, formulas, and basic analysis tools.",
    icon: <BookOpen className="h-6 w-6" />,
    category: "Data Skills",
    link: "https://oneroadmap.io/skills/excel/certificate/CERT-4AB2FA31"
  },
  {
    title: "Coding Club President",
    date: "2025 - Present",
    description: "Leading a community of 100+ members, organizing workshops and coding competitions",
    icon: <Users className="h-6 w-6" />,
    category: "Leadership",
    
  },
]


  const certifications = [
  {
    name: "Google Arcade Facilitor Program",
    issuer: "Google Cloud",
    date: "2025",
    verified: true,
    link: "https://www.linkedin.com/posts/dipti-singh-3b0274309_googlecloud-gcaf2025-cloudcomputing-activity-7338143467862171649-X3SD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE6G_DQBWQdFrWu9nwTF3bFhK4mCnPV29Yk"
  },
  {
    name: "Amazon Web Serives Certifications",
    issuer: "Amazon Web Serives",
    date: "2025",
    verified: true,
    link: "https://www.linkedin.com/posts/dipti-singh-3b0274309_aws-amazonwebservices-cloudcomputing-activity-7349136283861987331-15xN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE6G_DQBWQdFrWu9nwTF3bFhK4mCnPV29Yk"
  },
  {
    name: "Introduction to Copilot for Startups",
    issuer: "Microsoft",
    date: "2025",
    verified: true,
    link: "https://certificates.simplicdn.net/share/8547722_89156961751292076636.pdf"
  },
  {
    name: "Technology Job Simulation",
    issuer: "Deloitte",
    date: "2022",
    verified: true,
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_CnGdhhMRHfSushqzb_1750260267760_completion_certificate.pdf"
  },
]


  return (
    <div className="space-y-8">
      {/* Professional Navigation */}
      <div className="flex flex-wrap gap-2 justify-center">
        {[
          { id: "overview", label: "Overview", icon: <BarChart3 className="h-4 w-4" /> },
          { id: "skills", label: "Technical Skills", icon: <Code className="h-4 w-4" /> },
          { id: "platforms", label: "Coding Platforms", icon: <Globe className="h-4 w-4" /> },
          { id: "achievements", label: "Achievements", icon: <Award className="h-4 w-4" /> },
        ].map((tab) => (
          <Button
            key={tab.id}
            variant={activeCategory === tab.id ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(tab.id)}
            className={`transition-all duration-200 ${
              activeCategory === tab.id
                ? "bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-md"
                : "hover:bg-slate-100 dark:hover:bg-slate-800 border-slate-300 dark:border-slate-600"
            }`}
          >
            <div className="flex items-center gap-2">
              {tab.icon}
              <span className="font-medium">{tab.label}</span>
            </div>
          </Button>
        ))}
      </div>

      {/* Overview Section */}
      {activeCategory === "overview" && (
        <div className="space-y-8">
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Problems Solved", value: "1000+", icon: <Code className="h-6 w-6" /> },
              { label: "Projects Completed", value: "20+", icon: <Target className="h-6 w-6" /> },
              { label: "Technologies", value: "35+", icon: <Brain className="h-6 w-6" /> },
              { label: "Current Streak", value: "45 days", icon: <TrendingUp className="h-6 w-6" /> },
            ].map((stat, index) => (
              <Card key={index} className="border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-3 text-slate-600 dark:text-slate-400">{stat.icon}</div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">{stat.value}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tech Stack Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(techStacks).map(([key, stack]) => (
              <Card key={key} className={`border-2 ${stack.borderColor} hover:shadow-lg transition-all duration-300`}>
                <CardContent className={`p-6 ${stack.bgColor}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${stack.color} text-white`}>{stack.icon}</div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100">{stack.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {stack.technologies.length} technologies
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {stack.technologies.slice(0, 3).map((tech) => (
                      <div key={tech.name} className="flex justify-between items-center text-sm">
                        <span className="text-slate-700 dark:text-slate-300">{tech.name}</span>
                        <span className="text-slate-500 dark:text-slate-400">{tech.level}%</span>
                      </div>
                    ))}
                    <p className="text-xs text-slate-500 dark:text-slate-400 pt-2">
                      +{stack.technologies.length - 3} more technologies
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Skills Section */}
      {activeCategory === "skills" && (
        <div className="space-y-8">
          {Object.entries(techStacks).map(([key, stack]) => (
            <Card key={key} className={`border-2 ${stack.borderColor}`}>
              <CardHeader className={`${stack.bgColor} border-b ${stack.borderColor}`}>
                <CardTitle className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${stack.color} text-white`}>{stack.icon}</div>
                  <div>
                    <span className="text-slate-900 dark:text-slate-100">{stack.title}</span>
                    <p className="text-sm text-slate-600 dark:text-slate-400 font-normal">
                      {stack.technologies.length} technologies
                    </p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {stack.technologies.map((tech) => (
                    <div key={tech.name} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-medium text-slate-900 dark:text-slate-100">{tech.name}</span>
                          <span className="ml-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                            {tech.category}
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{tech.level}%</span>
                      </div>
                      <Progress value={tech.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Platforms Section */}
      {activeCategory === "platforms" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {platforms.map((platform, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-r ${platform.color} p-6 text-white`}>
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-xl">{platform.name}</h3>
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                        {platform.rank}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{platform.solved}</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">Solved</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{platform.rating}</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">Rating</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{platform.streak}</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">Streak</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Platform Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Competitive Programming Statistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-slate-900 dark:text-slate-100">1000+</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Total Problems</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900 dark:text-slate-100">45</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Max Streak</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900 dark:text-slate-100">6+</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Platforms</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900 dark:text-slate-100">Expert</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Highest Rank</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

{/* Achievements Section */}
{activeCategory === "achievements" && (
  <div className="space-y-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {achievements.map((achievement, index) => {
        const content = (
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                      {achievement.title}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {achievement.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                    {achievement.description}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-500">{achievement.date}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        );

        // If link exists, wrap in <a> tag
        return achievement.link ? (
          <a
            key={index}
            href={achievement.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            {content}
          </a>
        ) : (
          <div key={index}>{content}</div>
        );
      })}
    </div>


          {/* Certifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Professional Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                 <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                 className="no-underline"
                 >
                <div
                className="flex items-center justify-between p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
               <div className="flex-1">
              <h4 className="font-medium text-slate-900 dark:text-slate-100">{cert.name}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">{cert.issuer}</p>
                   <p className="text-xs text-slate-500 dark:text-slate-500">{cert.date}</p>
                </div>
              {cert.verified && (
                     <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
               )}
                 </div>
               </a>
                ))}

              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
