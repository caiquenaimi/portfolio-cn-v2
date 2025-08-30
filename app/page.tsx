"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Instagram,
  Linkedin,
  Github,
  ExternalLink,
  Download,
} from "lucide-react";

import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiC,
  SiPostgresql,
  SiMysql,
  SiFigma,
  SiBootstrap,
  SiReactos,
  SiNetlify,
  SiVercel,
} from "react-icons/si";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typewriterText, setTypewriterText] = useState("");

  const fullText =
    "Olá, eu sou Caique Naimi, desenvolvedor apaixonado por criar soluções inovadoras.";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypewriterText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="fixed top-0 w-full bg-zinc-950/95 backdrop-blur-sm z-50 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center h-16 md:h-20">
            <h1 className="text-xl md:text-2xl font-semibold text-white">
              Caique Naimi
            </h1>

            <ul className="hidden md:flex space-x-8 lg:space-x-12">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-zinc-300 hover:text-white transition-colors duration-300 relative group cursor-pointer"
                >
                  Início
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-zinc-300 hover:text-white transition-colors duration-300 relative group cursor-pointer"
                >
                  Quem sou
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-zinc-300 hover:text-white transition-colors duration-300 relative group cursor-pointer"
                >
                  Projetos
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-zinc-300 hover:text-white transition-colors duration-300 relative group cursor-pointer"
                >
                  Tecnologias
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
            </ul>

            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-zinc-300 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "max-h-64 opacity-100 visible"
                : "max-h-0 opacity-0 invisible"
            } overflow-hidden`}
          >
            <ul className="py-4 space-y-4 border-t border-zinc-800">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="block w-full text-left text-zinc-300 hover:text-white transition-colors py-2"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block w-full text-left text-zinc-300 hover:text-white transition-colors py-2"
                >
                  Quem sou
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="block w-full text-left text-zinc-300 hover:text-white transition-colors py-2"
                >
                  Projetos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="block w-full text-left text-zinc-300 hover:text-white transition-colors py-2"
                >
                  Tecnologias
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <main>
        <section
          id="home"
          className="min-h-screen flex items-center pt-16 md:pt-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-center lg:text-left max-w-4xl mx-auto lg:mx-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6 text-balance">
                Desenvolvedor de <span className="text-primary">software</span>{" "}
                em busca de novos desafios.
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-zinc-300 mb-8 min-h-[3rem] text-pretty">
                {typewriterText}
                <span className="animate-pulse">|</span>
              </p>

              <a
                href="https://www.instagram.com/caiquenaimi/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                <Instagram size={20} />
                Instagram
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden bg-zinc-800">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/perfil.jpg-rjokFSrHT2w4Llns3BpzN9D6DGNj2K.jpeg"
                    alt="Foto do Caique Naimi"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2 text-center lg:text-left">
                <h4 className="text-primary text-sm sm:text-base font-medium mb-2 uppercase tracking-wider">
                  Quem sou
                </h4>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-4">
                  Caique Naimi
                </h2>
                <h3 className="text-xl sm:text-2xl text-zinc-300 mb-6">
                  Dev Frontend e Backend.
                </h3>

                <p className="text-zinc-300 leading-relaxed mb-8 text-pretty">
                  Meu nome é Caique Naimi, sou um jovem aspirante em
                  programação, com um grande foco em crescer e desenvolver
                  minhas habilidades nessa área. Estou empenhado em aprender
                  novas tecnologias, explorar diferentes linguagens de
                  programação e me aprimorar constantemente. Tenho paixão pela
                  resolução de problemas e pela criação de soluções inovadoras.
                  Estou determinado a alcançar o sucesso como programador e
                  contribuir para o avanço da tecnologia.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start mb-8">
                  <a
                    href="/CaiqueNaimiCV.pdf"
                    download
                    className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                  >
                    <Download size={20} />
                    Baixar CV
                  </a>
                </div>

                <div className="flex justify-center lg:justify-start gap-4">
                  <a
                    href="https://www.instagram.com/caiquenaimi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-zinc-800 hover:bg-primary rounded-lg transition-colors duration-300"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/caique-naimi-b5377b277/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-zinc-800 hover:bg-primary rounded-lg transition-colors duration-300"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/caiquenaimi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-zinc-800 hover:bg-primary rounded-lg transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-center mb-12 lg:mb-16">
              Projetos
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
              <article className="bg-zinc-900 rounded-xl p-6 hover:bg-zinc-800 transition-colors duration-300 group">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#e51d37] transition-colors">
                  Beatflow
                </h3>
                <p className="text-zinc-300 mb-6 leading-relaxed">
                  Aplicativo para descobrir e organizar suas músicas favoritas
                  de trap e rap.
                </p>
                <a
                  href="https://github.com/caiquenaimi/Beatflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#e51d37] hover:text-[#e51d37]/90 font-medium transition-colors"
                >
                  Visualizar projeto
                  <ExternalLink size={16} />
                </a>
              </article>

              <article className="bg-zinc-900 rounded-xl p-6 hover:bg-zinc-800 transition-colors duration-300 group">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#a6fb98] transition-colors">
                  API Brasileirão
                </h3>
                <p className="text-zinc-300 mb-6 leading-relaxed">
                  Site feito utilizando API do Brasileirão para CRUD de times.
                </p>
                <a
                  href="https://brasileirao-6devs.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#a6fb98] hover:text-[#a6fb98]/90 font-medium transition-colors"
                >
                  Visualizar projeto
                  <ExternalLink size={16} />
                </a>
              </article>

              <article className="bg-zinc-900 rounded-xl p-6 hover:bg-zinc-800 transition-colors duration-300 group sm:col-span-2 lg:col-span-1">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors">
                  Service Desk
                </h3>
                <p className="text-zinc-300 mb-6 leading-relaxed">
                  Sistema para registrar problemas na infraestrutura do
                  SENAI-Valinhos.
                </p>
                <a
                  href="https://servicedesk-front.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-zinc-300 font-medium transition-colors"
                >
                  Visualizar projeto
                  <ExternalLink size={16} />
                </a>
              </article>
            </div>

            <div className="text-center">
              <a
                href="https://github.com/caiquenaimi?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                <Github size={20} />
                Repositórios no GitHub
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 md:py-24 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-center mb-12 lg:mb-16">
              Tecnologias
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="bg-zinc-800 rounded-xl p-6 hover:bg-zinc-700 transition duration-300 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Frontend
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <SiHtml5
                    size={40}
                    color="#E34F26"
                    className="hover:scale-110 transition"
                  />
                  <SiCss3
                    size={40}
                    color="#1572B6"
                    className="hover:scale-110 transition"
                  />
                  <SiJavascript
                    size={40}
                    color="#F7DF1E"
                    className="hover:scale-110 transition"
                  />
                  <SiTypescript
                    size={40}
                    color="#3178C6"
                    className="hover:scale-110 transition"
                  />
                  <SiReact
                    size={40}
                    color="#61DAFB"
                    className="hover:scale-110 transition"
                  />
                  <SiNextdotjs
                    size={40}
                    className="hover:scale-110 transition text-white"
                  />
                  <SiTailwindcss
                    size={40}
                    color="#06B6D4"
                    className="hover:scale-110 transition"
                  />
                  <SiBootstrap
                    size={40}
                    color="#7952B3"
                    className="hover:scale-110 transition"
                  />
                </div>
              </div>

              <div className="bg-zinc-800 rounded-xl p-6 hover:bg-zinc-700 transition duration-300 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Backend
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <SiNodedotjs
                    size={40}
                    color="#339933"
                    className="hover:scale-110 transition"
                  />
                  <SiExpress
                    size={40}
                    className="hover:scale-110 transition text-white"
                  />
                  <SiPython
                    size={40}
                    color="#3776AB"
                    className="hover:scale-110 transition"
                  />
                  <SiC
                    size={40}
                    color="#A8B9CC"
                    className="hover:scale-110 transition"
                  />
                </div>
              </div>

              <div className="bg-zinc-800 rounded-xl p-6 hover:bg-zinc-700 transition duration-300 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Banco de Dados
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <SiPostgresql
                    size={40}
                    color="#336791"
                    className="hover:scale-110 transition"
                  />
                  <SiMysql
                    size={40}
                    color="#4479A1"
                    className="hover:scale-110 transition"
                  />
                </div>
              </div>

              <div className="bg-zinc-800 rounded-xl p-6 hover:bg-zinc-700 transition duration-300 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Ferramentas
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <SiFigma
                    size={40}
                    color="#F24E1E"
                    className="hover:scale-110 transition"
                  />
                  <SiNetlify
                    size={40}
                    color="#00C7B7"
                    className="hover:scale-110 transition"
                  />
                  <SiVercel
                    size={40}
                    className="hover:scale-110 transition text-white"
                  />
                  <SiReactos
                    size={40}
                    color="#61DAFB"
                    className="hover:scale-110 transition"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-zinc-400">
            Copyright © 2025{" "}
            <span className="text-white font-medium">Caique Naimi</span> Todos
            os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
