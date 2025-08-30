// Typewriter effect
const typewriterText = [
  "Desenvolvedor apaixonado por tecnologia.",
  "Criando soluções inovadoras.",
  "Sempre em busca de novos desafios.",
  "Transformando ideias em código.",
]

let textIndex = 0
let charIndex = 0
let isDeleting = false
const typewriterElement = document.getElementById("typewriter")

function typeWriter() {
  const currentText = typewriterText[textIndex]

  if (isDeleting) {
    typewriterElement.textContent = currentText.substring(0, charIndex - 1)
    charIndex--
  } else {
    typewriterElement.textContent = currentText.substring(0, charIndex + 1)
    charIndex++
  }

  let typeSpeed = isDeleting ? 50 : 100

  if (!isDeleting && charIndex === currentText.length) {
    typeSpeed = 2000
    isDeleting = true
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    textIndex = (textIndex + 1) % typewriterText.length
    typeSpeed = 500
  }

  setTimeout(typeWriter, typeSpeed)
}

// Mobile menu toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
const navMenu = document.querySelector(".nav-menu")

mobileMenuBtn.addEventListener("click", () => {
  mobileMenuBtn.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenuBtn.classList.remove("active")
    navMenu.classList.remove("active")
  })
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const headerOffset = 80
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "rgba(4, 4, 5, 0.98)"
  } else {
    navbar.style.backgroundColor = "rgba(4, 4, 5, 0.95)"
  }
})

// Initialize typewriter effect when page loads
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeWriter, 1000)
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for animation
document.querySelectorAll(".project-card, .service-card, .about-content").forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(30px)"
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(el)
})
