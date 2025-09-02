"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 w-full bg-zinc-950/95 backdrop-blur-sm z-50 border-b border-zinc-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center h-16 md:h-20">
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="text-xl md:text-2xl font-semibold text-white"
            >
              Caique Naimi
            </motion.h1>

            <ul className="hidden md:flex space-x-8 lg:space-x-12">
              {["home", "about", "projects", "services"].map((section, i) => (
                <motion.li
                  key={section}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(section)}
                    className="text-zinc-300 hover:text-white transition-colors duration-300 relative group cursor-pointer"
                  >
                    {section === "home"
                      ? "Início"
                      : section === "about"
                      ? "Quem sou"
                      : section === "projects"
                      ? "Projetos"
                      : "Tecnologias"}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </motion.li>
              ))}
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
      </motion.header>

      <main>
        <section
          id="home"
          className="min-h-screen flex items-center pt-16 md:pt-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left max-w-4xl mx-auto lg:mx-0"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6 text-balance">
                Desenvolvedor de <span className="text-primary">software</span>{" "}
                em busca de novos desafios.
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-zinc-300 mb-8 min-h-[3rem] text-pretty">
                {typewriterText}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  |
                </motion.span>
              </p>

              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://www.instagram.com/caiquenaimi/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                <Instagram size={20} />
                Instagram
              </motion.a>
            </motion.div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1 hidden lg:flex justify-start"
              >
                <div className="relative w-96 h-96 rounded-2xl overflow-hidden bg-zinc-800">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/perfil.jpg-rjokFSrHT2w4Llns3BpzN9D6DGNj2K.jpeg"
                    alt="Foto do Caique Naimi"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-1 lg:order-2 text-center lg:text-left"
              >
                <h4 className="text-primary text-sm sm:text-base font-medium mb-2 uppercase tracking-wider">
                  Quem sou
                </h4>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-2">
                  Caique Naimi
                </h2>

                <div className="block lg:hidden mb-6">
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto rounded-2xl overflow-hidden bg-zinc-800">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/perfil.jpg-rjokFSrHT2w4Llns3BpzN9D6DGNj2K.jpeg"
                      alt="Foto do Caique Naimi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

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

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="/CaiqueNaimiCV.pdf"
                  download
                  className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                >
                  <Download size={20} />
                  Baixar CV
                </motion.a>

                <div className="flex justify-center lg:justify-start gap-4 mt-8">
                  {[
                    {
                      link: "https://www.instagram.com/caiquenaimi/",
                      icon: <Instagram size={20} />,
                    },
                    {
                      link: "https://www.linkedin.com/in/caique-naimi-b5377b277/",
                      icon: <Linkedin size={20} />,
                    },
                    {
                      link: "https://github.com/caiquenaimi",
                      icon: <Github size={20} />,
                    },
                  ].map((s, i) => (
                    <motion.a
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-zinc-800 hover:bg-primary rounded-lg transition-colors duration-300"
                    >
                      {s.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-center mb-12 lg:mb-16">
              Projetos
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {[
                {
                  title: "Beatflow",
                  desc: "Aplicativo para descobrir e organizar suas músicas favoritas de trap e rap.",
                  link: "https://github.com/caiquenaimi/Beatflow",
                  color: "#e51d37",
                },
                {
                  title: "API Brasileirão",
                  desc: "Site feito utilizando API do Brasileirão para CRUD de times.",
                  link: "https://brasileirao-6devs.netlify.app",
                  color: "#a6fb98",
                },
                {
                  title: "Service Desk",
                  desc: "Sistema para registrar problemas na infraestrutura do SENAI-Valinhos.",
                  link: "https://servicedesk-front.vercel.app",
                  color: "#fff",
                },
              ].map((proj, i) => (
                <motion.article
                  key={proj.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  className="bg-zinc-900 rounded-xl p-6 hover:bg-zinc-800 transition-colors duration-300 group"
                >
                  <h3
                    className="text-xl font-semibold mb-3 transition-colors"
                    style={{ color: proj.color }}
                  >
                    {proj.title}
                  </h3>
                  <p className="text-zinc-300 mb-6 leading-relaxed">
                    {proj.desc}
                  </p>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-medium transition-colors"
                    style={{ color: proj.color }}
                  >
                    Visualizar projeto
                    <ExternalLink size={16} />
                  </a>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-16 md:py-24 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-center mb-12 lg:mb-16">
              Tecnologias
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                {
                  title: "Frontend",
                  icons: [
                    <SiHtml5 key="html" size={40} color="#E34F26" />,
                    <SiCss3 key="css" size={40} color="#1572B6" />,
                    <SiJavascript key="js" size={40} color="#F7DF1E" />,
                    <SiTypescript key="ts" size={40} color="#3178C6" />,
                    <SiReact key="react" size={40} color="#61DAFB" />,
                    <SiNextdotjs key="next" size={40} className="text-white" />,
                    <SiTailwindcss key="tw" size={40} color="#06B6D4" />,
                    <SiBootstrap key="bt" size={40} color="#7952B3" />,
                  ],
                },
                {
                  title: "Backend",
                  icons: [
                    <SiNodedotjs key="node" size={40} color="#339933" />,
                    <SiExpress
                      key="express"
                      size={40}
                      className="text-white"
                    />,
                    <SiPython key="py" size={40} color="#3776AB" />,
                    <SiC key="c" size={40} color="#A8B9CC" />,
                  ],
                },
                {
                  title: "Banco de Dados",
                  icons: [
                    <SiPostgresql key="pg" size={40} color="#336791" />,
                    <SiMysql key="mysql" size={40} color="#4479A1" />,
                  ],
                },
                {
                  title: "Ferramentas",
                  icons: [
                    <SiFigma key="figma" size={40} color="#F24E1E" />,
                    <SiNetlify key="netlify" size={40} color="#00C7B7" />,
                    <SiVercel key="vercel" size={40} className="text-white" />,
                  ],
                },
              ].map((cat, i) => (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  className="bg-zinc-800 rounded-xl p-6 hover:bg-zinc-700 transition duration-300 shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-4">
                    {cat.icons.map((icon, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {icon}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-8 border-t border-zinc-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-zinc-400">
            Copyright © 2025{" "}
            <span className="text-white font-medium">Caique Naimi</span> Todos
            os direitos reservados.
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
