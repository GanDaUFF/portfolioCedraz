"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Palette,
  Smartphone,
  ChevronDown,
  Briefcase,
  GraduationCap,
  Moon,
  Sun,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"

export default function Component() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const projects = [
    {
      title: "Ordem de Serviço Realtime",
      description: "Sistema de gerenciamento de ordens de serviço com atualizações em tempo real",
      image: "/placeholder.svg",
      technologies: ["TypeScript", "React", "Node.js", "Socket.io"],
      github: "https://github.com/GanDaUFF/ordem-servico-realtime",
      demo: "#",
    },
    {
      title: "Contribuição open source",
      description: "Contribuição open source em um projeto de bootCamp da dio",
      image: "/projeto1.png",
      technologies: ["React", "Node.js", "PostgreSQL"],
      github: "https://github.com/GanDaUFF/dio-lab-open-source",
      demo: "#",
    },
    {
      title: "Sistema de Restaurante",
      description: "Aplicativo de gerenciamento de reservas e mesas em tempo real, com relatorios com graficos",
      image: "/projeto2.png",
      technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io", "React", "NoSQL", "Express"],
      github: "https://github.com/GanDaUFF/restauranteReserva",
      demo: "#",
    },
    {
      title: "Portfolio",
      description: "Este portfolio, construído com Next.js, TypeScript e Tailwind CSS",
      image: "/projeto3.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/GanDaUFF/PortfolioHenrique",
      demo: "#",
    },
  ]

  const skills = [
    { name: "JavaScript", level: 95, icon: Code },
    { name: "React/Next.js", level: 90, icon: Code },
    { name: "TypeScript", level: 85, icon: Code },
    { name: "Node.js", level: 88, icon: Code },
    { name: "Java", level: 78, icon: Code },
    { name: "Postgres", level: 81, icon: Code },
    { name: "PrismaORM", level: 90, icon: Code },
    { name: "SQL", level: 84, icon: Code },
    { name: "UI/UX Design", level: 80, icon: Palette },
    { name: "Mobile Development", level: 75, icon: Smartphone },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Portfolio
            </div>
            
            <div className="hidden md:flex space-x-8">
              {["home", "about", "projects", "skills", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-300 hover:text-blue-600 ${
                    activeSection === section ? "text-blue-600 font-semibold" : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {section === "home"
                    ? "Início"
                    : section === "about"
                      ? "Sobre"
                      : section === "projects"
                        ? "Projetos"
                        : section === "skills"
                          ? "Habilidades"
                          : "Contato"}
                </button>
                
              ))}
              <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun size={20} className="text-yellow-500" />
              ) : (
                <Moon size={20} className="text-gray-600" />
              )}
            </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className={`transition-all py-14 duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="mb-8 relative">
              <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-1 ">
                <Image
                  src="/foto.jpeg"
                  alt="Profile"
                  width={120}
                  height={120}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent animate-fade-in">
              Henrique Cedraz
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-delay">
              Desenvolvedor Full Stack 
            </p>

            <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-delay-2">
              Criando experiências digitais incríveis com código limpo e design intuitivo. Especializado em React,
              Node.js e tecnologias modernas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-3">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300"
                onClick={() => scrollToSection("projects")}
              >
                Ver Projetos
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover:bg-blue-50 dark:hover:bg-blue-900/20 transform hover:scale-105 transition-all duration-300"
                onClick={() => scrollToSection("contact")}
              >
                Entre em Contato
              </Button>
            </div>

            <div className="flex justify-center space-x-6 mt-12 animate-fade-in-delay-4">
              <a
                href="https://github.com/GanDaUFF"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transform hover:scale-110 transition-all duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/henrique-cedraz-6590aa21b/"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transform hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:qwert12121@hotmail.com?subject=Contato&body=Olá, gostaria de falar com você."
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transform hover:scale-110 transition-all duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Sobre Mim
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Sou um desenvolvedor apaixonado por criar soluções digitais que fazem a diferença. Com mais de 2 anos de
                experiência, me especializo em desenvolvimento full stack e design de interfaces intuitivas.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Minha jornada começou com curiosidade sobre como as coisas funcionam na web, e hoje trabalho com as
                tecnologias mais modernas para criar experiências excepcionais para usuários ao redor do mundo.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <Briefcase className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">10+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Projetos</div>
                </div>
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">2+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Anos</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-1">
                <Image
                  src="/bonitao.png"
                  alt="About me"
                  width={400}
                  height={400}
                  className="rounded-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Meus Projetos
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
              Alguns dos projetos que desenvolvi recentemente, demonstrando diferentes tecnologias e abordagens.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white dark:bg-gray-800 border-0 shadow-lg"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    {project.github !== "#" && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github size={16} className="mr-2" />
                          Código
                        </a>
                      </Button>
                    )}
                    {project.demo !== "#" && (
                      <Button
                        asChild
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Habilidades
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg mr-4">
                      <Icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                      <div className="text-sm text-gray-600 dark:text-gray-300">{skill.level}%</div>
                    </div>
                  </div>

                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Entre em Contato
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-6">
              Vamos conversar sobre seu próximo projeto! Entre em contato através das redes sociais.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {/* WhatsApp */}
            <a
              href="https://wa.me/5571993790255"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle size={32} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">WhatsApp</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">Conversar agora</p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/henrique-cedraz-6590aa21b/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Linkedin size={32} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">LinkedIn</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">Conectar</p>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/GanDaUFF"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Github size={32} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">GitHub</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">Ver código</p>
            </a>

            {/* Email */}
            <a
              href="mailto:qwert12121@hotmail.com?subject=Contato&body=Olá, gostaria de falar com você"
              className="group flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail size={32} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">Enviar email</p>
            </a>
          </div>

          {/* Informações adicionais */}
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Disponível para projetos freelance e oportunidades de trabalho
            </p>
            <div className="flex justify-center items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Disponível para novos projetos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Henrique Cedraz
            </div>
            <p className="text-gray-400 mb-6">Desenvolvedor Full Stack </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://github.com/GanDaUFF"
                className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/henrique-cedraz-6590aa21b/"
                className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:qwert12121@hotmail.com?subject=Contato&body=Olá, gostaria de falar com você"
                className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500">© {new Date().getFullYear()} Henrique Cedraz. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
