"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronLeft, ChevronRight, Users, Target, Server, Shield, Database,
  Code, GitBranch, Activity, TestTube, Play, CheckCircle, ArrowRight,
  Zap, Globe, Clock, Lock, BarChart3, Video, Mail, FileText,
  CreditCard, Bell, Stethoscope, Calendar, PawPrint, Eye, Link,
  Terminal, Check, Info, FileCode, Unplug, Layers, ShieldCheck, TrendingUp
} from "lucide-react"

const TOTAL_SLIDES = 14

// Global SlideHeader with a 3px green accent line next to the title
function SlideHeader({ title, subtitle, slideNumber }: {
  title: string
  subtitle?: string
  slideNumber: number
}) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex items-center justify-between px-8 py-4 border-b border-gray-100 bg-white/95 backdrop-blur-sm shadow-sm z-30"
    >
      <div className="flex items-center gap-4">
        <div className="relative h-9 w-24">
          <Image
            src="/logo.png"
            alt="PetWell"
            fill
            className="object-contain"
            sizes="96px"
            priority
          />
        </div>
        <div className="h-6 w-[1px] bg-gray-200" />
        <div className="flex items-center gap-3">
          <div className="w-[3px] h-6 bg-[#2d9596] rounded-full shrink-0" />
          <div>
            <h2 className="text-lg font-bold text-[#1e3a5f]">{title}</h2>
            {subtitle && <p className="text-xs text-gray-400 font-medium">{subtitle}</p>}
          </div>
        </div>
      </div>
    </motion.header>
  )
}

// ═══════════════════════════════════════════
//  SLIDE 1: PORTADA (HERO REDISEÑADA COMPLETAMENTE)
// ═══════════════════════════════════════════
function HeroSlide() {
  const members = [
    { name: "Jhonatan Barrera", username: "jhonatan2405", initials: "JB", github: "https://github.com/jhonatan2405" },
    { name: "Juan Arguelles", username: "juanxpz1", initials: "JA", github: "https://github.com/juanxpz1" },
    { name: "Jhon Garrido", username: "jhoning-21", initials: "JG", github: "https://github.com/jhoning-21" },
  ]
  const techs = [
    "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Supabase",
    "Docker", "GitHub Actions", "Vercel", "Railway", "Render"
  ]

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-white via-gray-50 to-[#e8f4f4] relative overflow-hidden text-slate-800">
      {/* Decorative radial glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#2d9596]/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#1e3a5f]/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="flex-1 flex flex-col items-center justify-center px-6 max-w-5xl mx-auto w-full z-10 pt-4">
        {/* Centered logo, smaller: max h-14 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-8 relative w-56 h-20"
        >
          <Image
            src="/logo.png"
            alt="PetWell Logo"
            fill
            className="object-contain"
            sizes="224px"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1e3a5f] text-center tracking-tight leading-tight max-w-4xl"
        >
          PetWell — Plataforma Veterinaria <span className="text-[#2d9596]"></span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xs md:text-sm text-gray-500 font-extrabold mt-3 mb-10 text-center tracking-widest uppercase"
        >
          Sustentación Final · Arquitectura de Software
        </motion.p>

        {/* Members cards - Original Clean Light Design with Usernames */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-10">
          {members.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, boxShadow: "0 10px 25px rgba(45, 149, 150, 0.12)" }}
              className="bg-white border border-gray-100 p-5 rounded-2xl shadow-md flex flex-col items-center text-center transition-all"
            >
              {/* Circular Avatar with original teal/blue gradient */}
              <div className="w-12 h-12 bg-gradient-to-br from-[#2d9596] to-[#1e3a5f] rounded-full flex items-center justify-center text-base font-bold text-white mb-3 shadow-sm">
                {member.initials}
              </div>
              <h3 className="font-extrabold text-[#1e3a5f] text-sm">{member.name}</h3>
              <p className="text-[9px] text-gray-400 mb-3 font-semibold tracking-wide uppercase">Ingeniero de Software</p>

              {/* GitHub Button with Real Username */}
              <motion.a
                href={member.github}
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-100 rounded-full text-[10px] font-bold text-gray-600 transition-colors"
              >
                <GitBranch className="w-3 h-3 text-[#2d9596]" />
                <span>{member.username}</span>
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Tech list and Production Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex flex-col items-center w-full"
        >
          <div className="flex flex-wrap justify-center gap-1.5 max-w-3xl mb-8">
            {techs.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-white border border-gray-100 text-[10px] font-bold text-gray-500 rounded-full shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <motion.a
            href="https://petwell-green.vercel.app"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(45, 149, 150, 0.25)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#2d9596] hover:bg-[#257d7e] text-white rounded-full font-bold shadow-md transition-all text-xs uppercase tracking-wider"
          >
            <Globe className="w-4 h-4 animate-spin-slow" />
            <span>Ver Producción: petwell-green.vercel.app</span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════
//  SLIDE 2: PROBLEMA + USUARIOS (MOMENTO 1)
// ═══════════════════════════════════════════
function ContextSlide() {
  const problems = [
    { title: "Agendas en papel", desc: "Muchas clínicas manejan sus citas manualmente, lo que causa dobles reservas y desorden operativo." },
    { title: "Historiales dispersos", desc: "La información clínica no está centralizada. Si el paciente cambia de veterinario, se pierde el contexto médico." },
    { title: "Pagos desconectados", desc: "Los cobros manuales o en efectivo dificultan la contabilidad diaria y generan inasistencias." },
    { title: "Telemedicina informal", desc: "Consultas por videollamada externa sin dejar un registro formal en el expediente del animal." }
  ]

  const users = [
    { role: "Dueño de Mascota", icon: PawPrint, desc: "Busca agendar citas, ver historiales y pagar consultas desde una sola plataforma unificada." },
    { role: "Veterinario", icon: Stethoscope, desc: "Necesita registrar consultas y gestionar expedientes sin preocuparse por cruces en la agenda." },
    { role: "Admin de Clínica", icon: Users, desc: "Requiere control sobre tarifas, métricas de ingresos y administración del personal de su sede." }
  ]

  return (
    <div className="h-screen flex flex-col bg-white">
      <SlideHeader title="Contexto del Problema y Necesidades de Solución" subtitle="Momento 1 de 5" slideNumber={2} />
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-10 px-10 py-8 overflow-hidden items-center">

        {/* El Problema */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center"
        >
          <h3 className="text-lg font-extrabold text-[#1e3a5f] mb-5 flex items-center gap-2 border-b pb-2">
            <span className="text-red-500 font-bold text-lg">✗</span> El Problema
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {problems.map((prob, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-red-50/50 border border-red-100 rounded-2xl">
                <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 font-bold flex items-center justify-center text-sm shrink-0">
                  ✗
                </span>
                <div>
                  <h4 className="font-extrabold text-[#1e3a5f] text-sm">{prob.title}</h4>
                  <p className="text-xs text-gray-500 mt-0.5 leading-normal">{prob.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Los Usuarios */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center"
        >
          <h3 className="text-lg font-extrabold text-[#1e3a5f] mb-5 flex items-center gap-2 border-b pb-2">
            <span className="text-[#2d9596] font-bold text-lg">🐾</span> Los Usuarios
          </h3>
          <div className="space-y-4">
            {users.map((user, i) => (
              <div key={i} className="flex gap-4 p-4 bg-gray-50 border border-gray-100 rounded-2xl hover:translate-x-1 transition-all">
                <div className="w-10 h-10 bg-[#2d9596]/10 rounded-full flex items-center justify-center text-[#2d9596] shrink-0">
                  <user.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[#1e3a5f] text-sm">{user.role}</h4>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{user.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════
//  SLIDE 3: OBJETIVOS, JUSTIFICACIÓN Y ALCANCE
// ═══════════════════════════════════════════
function GoalsSlide() {
  const pilares = [
    { title: "Independencia", desc: "Cada microservicio funciona de forma aislada. Si el servicio de pagos experimenta un fallo, el agendamiento y el historial siguen operando con normalidad.", icon: Unplug },
    { title: "Aislamiento", desc: "El historial clínico se guarda en bases de datos separadas. Ningún otro servicio tiene acceso directo a estos datos médicos sin la ruta adecuada.", icon: ShieldCheck },
    { title: "Despliegue Independiente", desc: "Podemos actualizar y mejorar cada módulo del sistema sin tener que detener ni compilar nuevamente toda la plataforma.", icon: TrendingUp },
    { title: "Coordinación", desc: "Usamos el patrón SAGA para que procesos complejos (como reservar una cita y pagarla) se ejecuten paso a paso de forma consistente.", icon: GitBranch }
  ]

  return (
    <div className="h-screen flex flex-col bg-white">
      <SlideHeader title="Objetivos, Justificación y Alcance" subtitle="Momento 1 de 5" slideNumber={3} />
      <div className="flex-1 flex flex-col justify-start px-10 pt-10 pb-6 max-w-5xl mx-auto w-full space-y-6">

        {/* Frase principal destacada grande */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#f0f7f7] border-l-4 border-[#2d9596] p-6 rounded-r-3xl text-center shadow-sm"
        >
          <p className="text-xl md:text-2xl font-black text-[#1e3a5f] leading-normal">
            Sistema con múltiples clínicas soportado por arquitectura de microservicios.
          </p>
        </motion.div>

        {/* 4 pilares en grid 2x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
          {pilares.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="p-5 bg-white shadow-sm border-l-[3px] border-[#2d9596] border-y border-r border-gray-100 rounded-r-2xl rounded-l-md flex flex-col h-auto"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-[#2d9596]/10 rounded-lg flex items-center justify-center text-[#2d9596] shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-extrabold text-[#1e3a5f] text-sm">{p.title}</h4>
                </div>
                <p className="text-[11px] text-gray-500 leading-relaxed font-medium">{p.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Alcance en 3 items horizontales */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-gray-50/80 border border-gray-100 p-4 rounded-2xl flex flex-col sm:flex-row justify-around items-center gap-3 text-xs font-bold text-[#1e3a5f] shadow-sm"
        >
          <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#2d9596]" /> 8 microservicios operando</span>
          <span className="h-4 w-[1px] bg-gray-300 hidden sm:block" />
          <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#2d9596]" /> APIs externas: Bold, Daily.co</span>
          <span className="h-4 w-[1px] bg-gray-300 hidden sm:block" />
          <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#2d9596]" /> Integración y despliegue automatizado</span>
        </motion.div>

        {/* Por qué microservicios */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm"
        >
          <h4 className="font-extrabold text-[#1e3a5f] text-sm mb-1.5">¿Por qué microservicios y no un monolito?</h4>
          <p className="text-[11px] text-gray-500 leading-relaxed font-medium">
            En una aplicación monolítica tradicional, un error en el módulo de facturación puede hacer caer toda la plataforma. Con microservicios, logramos aislar las fallas y mantener los servicios vitales (como el historial médico) reducir el impacto de fallos en otros módulo.
          </p>
        </motion.div>

      </div>
    </div>
  )
}

// ═══════════════════════════════════════════
//  SLIDE 4: ARQUITECTURA GENERAL - DIAGRAMA COMPLETO (PANTALLA COMPLETA)
// ═══════════════════════════════════════════
function ArchitectureSlide() {
  const [selectedLayer, setSelectedLayer] = useState<"client" | "gateway" | "services" | "dbs">("services")

  const layerDetails = {
    client: {
      title: "Capa 1: Frontend",
      tech: "React, Next.js, Vercel",
      desc: "Interfaz web. No se comunica directamente con las bases de datos; todas las peticiones pasan primero por el API Gateway."
    },
    gateway: {
      title: "Capa 2: API Gateway",
      tech: "NodeJS, http-proxy, Railway",
      desc: "Única puerta de entrada. Enruta las peticiones al microservicio correspondiente y aplica seguridad CORS."
    },
    services: {
      title: "Capa 3: 8 Microservicios",
      tech: "Node.js, Express, TS",
      desc: "Desplegados en Render y Railway. Se comunican por HTTP utilizando una firma interna compartida para procesos automáticos."
    },
    dbs: {
      title: "Capa 4: Bases de Datos",
      tech: "PostgreSQL, Supabase",
      desc: "Aislamiento de datos. Cada servicio tiene su propia base de datos PostgreSQL, asegurando la privacidad del historial médico."
    }
  }

  return (
    <div className="h-screen flex flex-col bg-white">
      <SlideHeader title="Arquitectura General del Sistema" subtitle="Momento 2 de 5 — Diagrama de infraestructura" slideNumber={4} />
      <div className="flex-1 flex flex-col px-10 py-4 overflow-hidden justify-between">

        {/* Full Screen Width SVG Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full bg-gray-50 border border-gray-100 rounded-3xl p-5 shadow-inner flex flex-col items-center justify-center relative"
        >
          <span className="absolute top-3 left-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
            Topología de Red Real - Haga clic en los bloques
          </span>

          <svg viewBox="0 0 920 340" className="w-full h-auto max-h-[48vh] z-10">
            {/* Layer 1: Browser/Frontend */}
            <g
              onClick={() => setSelectedLayer("client")}
              className={`cursor-pointer transition-all duration-300 ${selectedLayer === "client" ? "opacity-100" : "opacity-75 hover:opacity-90"}`}
            >
              <rect x="310" y="5" width="300" height="35" rx="8" fill={selectedLayer === "client" ? "#2d9596" : "#1e3a5f"} />
              <text x="460" y="27" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">Capa 1: Frontend (Next.js - Vercel)</text>
              {selectedLayer === "client" && <rect x="307" y="2" width="306" height="41" rx="10" fill="none" stroke="#2d9596" strokeWidth="2.5" />}
            </g>

            {/* Connecting Line L1 -> L2 */}
            <path d="M 460 40 L 460 65" stroke="#94a3b8" strokeWidth="2.5" />

            {/* Layer 2: API Gateway */}
            <g
              onClick={() => setSelectedLayer("gateway")}
              className={`cursor-pointer transition-all duration-300 ${selectedLayer === "gateway" ? "opacity-100" : "opacity-75 hover:opacity-90"}`}
            >
              <rect x="230" y="65" width="460" height="35" rx="8" fill={selectedLayer === "gateway" ? "#2d9596" : "#2e4a6f"} />
              <text x="460" y="87" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">Capa 2: API Gateway (Railway - Port 3001)</text>
              {selectedLayer === "gateway" && <rect x="227" y="62" width="466" height="41" rx="10" fill="none" stroke="#2d9596" strokeWidth="2.5" />}
            </g>

            {/* Connecting lines from Gateway down to Layer 3 (8 Services) */}
            <path d="M 460 100 L 460 120" stroke="#94a3b8" strokeWidth="2" />
            <path d="M 75 120 L 845 120" stroke="#94a3b8" strokeWidth="2" />

            {/* Trunk drops to all 8 microservices */}
            <path d="M 75 120 L 75 140" stroke="#94a3b8" strokeWidth="2" />
            <path d="M 185 120 L 185 140" stroke="#94a3b8" strokeWidth="2" />
            <path d="M 295 120 L 295 140" stroke="#94a3b8" strokeWidth="2" />
            <path d="M 405 120 L 405 140" stroke="#94a3b8" strokeWidth="2" />
            <path d="M 515 120 L 515 140" stroke="#94a3b8" strokeWidth="2" />
            <path d="M 625 120 L 625 140" stroke="#94a3b8" strokeWidth="2" />
            <path d="M 735 120 L 735 140" stroke="#94a3b8" strokeWidth="2" />
            <path d="M 845 120 L 845 140" stroke="#94a3b8" strokeWidth="2" />

            {/* Layer 3: Services (8 Box elements) */}
            <g
              onClick={() => setSelectedLayer("services")}
              className={`cursor-pointer transition-all duration-300 ${selectedLayer === "services" ? "opacity-100" : "opacity-75 hover:opacity-90"}`}
            >
              {/* Service 1: User */}
              <rect x="30" y="140" width="90" height="42" rx="6" fill="#f8fafc" stroke={selectedLayer === "services" ? "#2d9596" : "#e2e8f0"} strokeWidth="1.5" />
              <text x="75" y="160" fill="#1e3a5f" fontSize="10" fontWeight="bold" textAnchor="middle">User (3003)</text>
              <text x="75" y="174" fill="#64748b" fontSize="8" textAnchor="middle">Railway</text>

              {/* Service 2: Pet */}
              <rect x="140" y="140" width="90" height="42" rx="6" fill="#f8fafc" stroke={selectedLayer === "services" ? "#2d9596" : "#e2e8f0"} strokeWidth="1.5" />
              <text x="185" y="160" fill="#1e3a5f" fontSize="10" fontWeight="bold" textAnchor="middle">Pet (3002)</text>
              <text x="185" y="174" fill="#64748b" fontSize="8" textAnchor="middle">Render</text>

              {/* Service 3: EHR */}
              <rect x="250" y="140" width="90" height="42" rx="6" fill="#f8fafc" stroke={selectedLayer === "services" ? "#2d9596" : "#e2e8f0"} strokeWidth="1.5" />
              <text x="295" y="160" fill="#1e3a5f" fontSize="10" fontWeight="bold" textAnchor="middle">EHR (3004)</text>
              <text x="295" y="174" fill="#64748b" fontSize="8" textAnchor="middle">Railway</text>

              {/* Service 4: Appointment */}
              <rect x="360" y="140" width="90" height="42" rx="6" fill="#f8fafc" stroke={selectedLayer === "services" ? "#2d9596" : "#e2e8f0"} strokeWidth="1.5" />
              <text x="405" y="160" fill="#1e3a5f" fontSize="9" fontWeight="bold" textAnchor="middle">Appoint (3005)</text>
              <text x="405" y="174" fill="#64748b" fontSize="8" textAnchor="middle">Render</text>

              {/* Service 5: Billing */}
              <rect x="470" y="140" width="90" height="42" rx="6" fill="#f8fafc" stroke={selectedLayer === "services" ? "#2d9596" : "#e2e8f0"} strokeWidth="1.5" />
              <text x="515" y="160" fill="#1e3a5f" fontSize="10" fontWeight="bold" textAnchor="middle">Billing (3009)</text>
              <text x="515" y="174" fill="#64748b" fontSize="8" textAnchor="middle">Render</text>

              {/* Service 6: Telemed */}
              <rect x="580" y="140" width="90" height="42" rx="6" fill="#f8fafc" stroke={selectedLayer === "services" ? "#2d9596" : "#e2e8f0"} strokeWidth="1.5" />
              <text x="625" y="160" fill="#1e3a5f" fontSize="10" fontWeight="bold" textAnchor="middle">Telemed (3006)</text>
              <text x="625" y="174" fill="#64748b" fontSize="8" textAnchor="middle">Render</text>

              {/* Service 7: Notif */}
              <rect x="690" y="140" width="90" height="42" rx="6" fill="#f8fafc" stroke={selectedLayer === "services" ? "#2d9596" : "#e2e8f0"} strokeWidth="1.5" />
              <text x="735" y="160" fill="#1e3a5f" fontSize="10" fontWeight="bold" textAnchor="middle">Notif (3007)</text>
              <text x="735" y="174" fill="#64748b" fontSize="8" textAnchor="middle">Render</text>

              {/* Service 8: Analytics */}
              <rect x="800" y="140" width="90" height="42" rx="6" fill="#f8fafc" stroke={selectedLayer === "services" ? "#2d9596" : "#e2e8f0"} strokeWidth="1.5" />
              <text x="845" y="160" fill="#1e3a5f" fontSize="9" fontWeight="bold" textAnchor="middle">Analytics (3008)</text>
              <text x="845" y="174" fill="#64748b" fontSize="8" textAnchor="middle">Render (Read)</text>

              <rect x="20" y="130" width="880" height="60" rx="10" fill="none" stroke={selectedLayer === "services" ? "#2d9596" : "#cbd5e1"} strokeWidth="2.2" strokeDasharray="5" />
            </g>

            {/* Connecting lines from services down to 7 Supabase databases */}
            {/* User -> DB User */}
            <path d="M 75 182 L 75 250" stroke="#2d9596" strokeWidth="1.5" strokeDasharray="3" />
            {/* Pet -> DB Pet */}
            <path d="M 185 182 L 185 250" stroke="#2d9596" strokeWidth="1.5" strokeDasharray="3" />
            {/* EHR -> DB EHR */}
            <path d="M 295 182 L 295 250" stroke="#2d9596" strokeWidth="1.5" strokeDasharray="3" />
            {/* Appointment -> DB Agenda */}
            <path d="M 405 182 L 405 250" stroke="#2d9596" strokeWidth="1.5" strokeDasharray="3" />
            {/* Billing -> DB Facturas */}
            <path d="M 515 182 L 515 250" stroke="#2d9596" strokeWidth="1.5" strokeDasharray="3" />
            {/* Telemed -> DB Sesiones */}
            <path d="M 625 182 L 625 250" stroke="#2d9596" strokeWidth="1.5" strokeDasharray="3" />
            {/* Notif -> DB Notif */}
            <path d="M 735 182 L 735 250" stroke="#2d9596" strokeWidth="1.5" strokeDasharray="3" />

            {/* Analytics has NO database connection (read-only aggregator) */}

            {/* Layer 4: Databases (7 DB cylinders) */}
            <g
              onClick={() => setSelectedLayer("dbs")}
              className={`cursor-pointer transition-all duration-300 ${selectedLayer === "dbs" ? "opacity-100" : "opacity-75 hover:opacity-90"}`}
            >
              {/* DB 1: User */}
              <rect x="30" y="250" width="90" height="35" rx="8" fill="#e2f1f1" stroke="#2d9596" strokeWidth="1.5" />
              <text x="75" y="272" fill="#1e3a5f" fontSize="9" fontWeight="bold" textAnchor="middle">DB User</text>

              {/* DB 2: Pet */}
              <rect x="140" y="250" width="90" height="35" rx="8" fill="#e2f1f1" stroke="#2d9596" strokeWidth="1.5" />
              <text x="185" y="272" fill="#1e3a5f" fontSize="9" fontWeight="bold" textAnchor="middle">DB Pet</text>

              {/* DB 3: EHR */}
              <rect x="250" y="250" width="90" height="35" rx="8" fill="#e2f1f1" stroke="#2d9596" strokeWidth="1.5" />
              <text x="295" y="272" fill="#1e3a5f" fontSize="9" fontWeight="bold" textAnchor="middle">DB EHR</text>

              {/* DB 4: Agenda */}
              <rect x="360" y="250" width="90" height="35" rx="8" fill="#e2f1f1" stroke="#2d9596" strokeWidth="1.5" />
              <text x="405" y="272" fill="#1e3a5f" fontSize="9" fontWeight="bold" textAnchor="middle">DB Agenda</text>

              {/* DB 5: Facturas */}
              <rect x="470" y="250" width="90" height="35" rx="8" fill="#e2f1f1" stroke="#2d9596" strokeWidth="1.5" />
              <text x="515" y="272" fill="#1e3a5f" fontSize="9" fontWeight="bold" textAnchor="middle">DB Facturas</text>

              {/* DB 6: Sesiones */}
              <rect x="580" y="250" width="90" height="35" rx="8" fill="#e2f1f1" stroke="#2d9596" strokeWidth="1.5" />
              <text x="625" y="272" fill="#1e3a5f" fontSize="9" fontWeight="bold" textAnchor="middle">DB Sesiones</text>

              {/* DB 7: Notif */}
              <rect x="690" y="250" width="90" height="35" rx="8" fill="#e2f1f1" stroke="#2d9596" strokeWidth="1.5" />
              <text x="735" y="272" fill="#1e3a5f" fontSize="9" fontWeight="bold" textAnchor="middle">DB Notif</text>

              {/* Label indicating cloud isolation */}
              <text x="845" y="272" fill="#64748b" fontSize="8" fontWeight="bold" textAnchor="middle">[Sin DB propia]</text>

              <rect x="20" y="240" width="770" height="55" rx="10" fill="none" stroke={selectedLayer === "dbs" ? "#2d9596" : "#cbd5e1"} strokeWidth="2.2" strokeDasharray="5" />
            </g>

            {/* Cloud container background */}
            <rect x="20" y="115" width="880" height="190" rx="12" fill="none" stroke="#2d9596" strokeWidth="1" strokeOpacity="0.25" />
            <text x="890" y="125" fill="#2d9596" fontSize="7" fontWeight="bold" textAnchor="end" opacity="0.6">Nube Multicloud Privada (Railway + Render)</text>
          </svg>
        </motion.div>

        {/* Selected Layer Info - Bottom Wide Panels */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-3">
          <div className="md:col-span-8 bg-gray-50 border border-gray-100 px-5 py-3 rounded-2xl">
            <span className="text-[10px] uppercase font-bold text-[#2d9596]">Detalles de la Capa Seleccionada</span>
            <h4 className="font-extrabold text-[#1e3a5f] text-sm mt-0.5">{layerDetails[selectedLayer].title}</h4>
            <p className="text-xs text-gray-500 mt-1 leading-normal">{layerDetails[selectedLayer].desc}</p>
          </div>

          <div className="md:col-span-4 bg-gradient-to-br from-[#1e3a5f]/5 to-[#2d9596]/5 border border-gray-100 p-3 rounded-2xl flex flex-col justify-center">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#1e3a5f] mb-1">
              <Terminal className="w-3.5 h-3.5 text-[#2d9596]" /> Stack
            </div>
            <p className="text-[11px] text-gray-600 leading-normal font-mono font-bold bg-white/70 px-2 py-1.5 rounded-lg border border-gray-100">
              {layerDetails[selectedLayer].tech}
            </p>
          </div>
        </div>

        {/* Panel de Comunicación Adicional */}
        <div className="mt-3 border-t border-gray-100 pt-3 flex flex-col items-center">
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-100 text-xs font-extrabold text-blue-700 rounded-full">
              REST via API Gateway — Comunicación HTTP
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#e2f1f1] border border-[#2d9596]/20 text-xs font-extrabold text-[#2d9596] rounded-full">
              Llamadas internas S2S — x-internal-service-key
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════
//  SLIDE 5: LOS 9 MICROSERVICIOS
// ═══════════════════════════════════════════
function MicroservicesSlide() {
  const services = [
    { name: "User Service", port: 3003, infra: "Railway", desc: "Autenticación y login. Emite tokens JWT con el rol del usuario." },
    { name: "Pet Service", port: 3002, infra: "Render", desc: "Perfiles de mascotas y gestión de dueños." },
    { name: "EHR Service", port: 3004, infra: "Railway", desc: "Gestión del historial clínico y auditoría de cambios." },
    { name: "Appointment", port: 3005, infra: "Render", desc: "Agendamiento y control de horarios en tiempo real." },
    { name: "Billing Service", port: 3009, infra: "Render", desc: "Facturación y procesamiento de pagos con Bold Checkout." },
    { name: "Telemed Service", port: 3006, infra: "Render", desc: "Salas de videollamada generadas bajo demanda con Daily.co." },
    { name: "Notification", port: 3007, infra: "Render", desc: "Envío de correos y notificaciones de citas." },
    { name: "Analytics Service", port: 3008, infra: "Render", desc: "Genera métricas y dashboards para la administración." }
  ]

  return (
    <div className="h-screen flex flex-col bg-white">
      <SlideHeader title="Función de cada Microservicio" subtitle="Momento 2 de 5" slideNumber={5} />
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-4 overflow-hidden">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl w-full">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ y: -4, border: "1.5px solid #2d9596" }}
              className="p-4 bg-gray-50 border border-gray-100 rounded-2xl flex flex-col justify-between transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-extrabold text-[#1e3a5f] text-xs">{s.name}</h4>
                  <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold ${s.infra === "Railway" ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700"
                    }`}>
                    {s.infra}
                  </span>
                </div>

                <div className="flex flex-col gap-1 mb-2 font-mono text-[9px] text-gray-400">
                  <span className="text-[#2d9596] font-bold">🔌 {s.port}</span>
                </div>

                <p className="text-[10px] text-gray-500 leading-normal">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════
//  SLIDE 6: SEGURIDAD — CAPAS REALES
// ═══════════════════════════════════════════
function SecuritySlide() {
  const [activeTab, setActiveTab] = useState<"jwt" | "rbac" | "s2s" | "cors">("jwt")

  const securityLayers = {
    jwt: {
      title: "Validación JWT Local",
      icon: Lock,
      bullets: [
        "El token contiene el ID del usuario y su rol.",
        "Cada microservicio valida el token localmente sin hacer llamadas adicionales, lo que hace el sistema más rápido.",
        "Si el token no es válido, se bloquea la solicitud inmediatamente."
      ]
    },
    rbac: {
      title: "Control por Roles",
      icon: Shield,
      bullets: [
        "El dueño de mascota solo ve su propia información.",
        "El veterinario accede a historiales clínicos pero no a la facturación.",
        "El administrador tiene control sobre la agenda y métricas de su clínica."
      ]
    },
    s2s: {
      title: "Llamadas Internas S2S",
      icon: Server,
      bullets: [
        "Para procesos automáticos entre servicios (ej. confirmar pago), usamos una cabecera interna firmada.",
        "Esto evita que usuarios externos puedan activar estos flujos de forma manual."
      ]
    },
    cors: {
      title: "Seguridad CORS",
      icon: Globe,
      bullets: [
        "El API Gateway solo acepta peticiones desde nuestro dominio frontend oficial.",
        "Cualquier intento desde otro origen es rechazado automáticamente."
      ]
    }
  }

  return (
    <div className="h-screen flex flex-col bg-white">
      <SlideHeader title="Autenticación, Autorización y Seguridad" subtitle="Momento 2 de 5" slideNumber={6} />
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 px-10 py-6 overflow-hidden">

        {/* Sidebar tabs */}
        <div className="lg:col-span-4 flex flex-col justify-center space-y-3">
          {(Object.keys(securityLayers) as Array<keyof typeof securityLayers>).map((key, i) => {
            const Icon = securityLayers[key].icon
            return (
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-3 p-4 rounded-xl text-left font-bold transition-all border ${activeTab === key
                  ? "bg-[#2d9596] text-white border-[#2d9596] shadow-md scale-[1.02]"
                  : "bg-gray-50 text-[#1e3a5f] border-gray-100 hover:bg-gray-100 hover:scale-[1.01]"
                  }`}
              >
                <Icon className="w-5 h-5 shrink-0" />
                <span className="text-sm">{securityLayers[key].title}</span>
              </motion.button>
            )
          })}
        </div>

        {/* Tab content */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-50 border border-gray-100 p-6 rounded-3xl shadow-sm"
            >
              <h3 className="text-xl font-extrabold text-[#1e3a5f] mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#2d9596]" /> {securityLayers[activeTab].title}
              </h3>

              <ul className="space-y-3.5">
                {securityLayers[activeTab].bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#7ec8a3] mt-1 shrink-0" />
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-medium">{bullet}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════
//  SLIDE 7: PATRÓN SAGA COREOGRAFIADO - IMAGEN COMPLETA
// ═══════════════════════════════════════════
function SagaSlide() {
  return (
    <div className="h-screen flex flex-col bg-white">
      <SlideHeader title="Patrón SAGA para Coordinación entre Servicios" subtitle="Momento 2 de 5" slideNumber={7} />

      <div className="flex-1 flex flex-col items-center justify-center px-10 py-4 overflow-hidden">
        {/* Large, gorgeous rendering of the uploaded SAGA image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-5xl bg-white border border-gray-100 rounded-3xl p-4 shadow-md flex flex-col items-center justify-center relative overflow-hidden"
        >
          <img
            src="/saga.png"
            alt="PetWell SAGA de Creación de Cita y Flujo de Pago"
            className="w-full max-h-[62vh] object-contain rounded-xl hover:scale-[1.01] transition-transform duration-300"
          />
        </motion.div>

        {/* Small legend summary under the image */}
        <div className="w-full max-w-5xl mt-3 flex items-center justify-between text-xs text-gray-500 font-semibold bg-gray-50 border border-gray-100 px-4 py-2.5 rounded-xl">
          <span className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-[#2d9596]" />
            <span><strong>Llamada interna S2S:</strong> Cita CREADA → Pago Confirmado → Cita CONFIRMADA.</span>
          </span>
          <span className="text-[#2d9596]">Compensación automática si el pago falla.</span>
        </div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════
//  SLIDE 8: DATABASE-PER-SERVICE
// ═══════════════════════════════════════════
function DatabaseSlide() {
  const [selectedDb, setSelectedDb] = useState(0)

  const dbs = [
    {
      name: "User Service DB",
      tables: ["users", "roles", "clinics"],
      desc: "Información de cuentas, roles de acceso y datos de las clínicas."
    },
    {
      name: "Pet Service DB",
      tables: ["pets", "pet_owners"],
      desc: "Perfiles de mascotas y la relación con sus dueños."
    },
    {
      name: "EHR Service DB",
      tables: ["ehr_records", "vaccinations"],
      desc: "Historias clínicas electrónicas y registro de vacunas aplicadas."
    },
    {
      name: "Appointment DB",
      tables: ["appointments", "schedules", "vetblocks"],
      desc: "Gestión de la agenda, horarios disponibles y citas médicas."
    },
    {
      name: "Billing DB",
      tables: ["invoices", "payments", "pricing"],
      desc: "Facturas generadas, pagos registrados y configuración de tarifas."
    },
    {
      name: "Telemed DB",
      tables: ["telemed_sessions"],
      desc: "Registro y control de acceso a las salas de videollamada."
    },
    {
      name: "Notification DB",
      tables: ["notifications"],
      desc: "Historial de correos y alertas enviadas a los usuarios."
    }
  ]

  return (
    <div className="h-screen flex flex-col bg-white">
      <SlideHeader title="Manejo de Bases de Datos" subtitle="Momento 2 de 5 — Database per Service" slideNumber={8} />
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 px-10 py-6 overflow-hidden">

        {/* Left List of Databases */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-2">
          {dbs.map((db, i) => (
            <motion.button
              key={db.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              onClick={() => setSelectedDb(i)}
              className={`flex items-center justify-between p-3.5 rounded-xl text-left font-bold transition-all border ${selectedDb === i
                ? "bg-[#2d9596] text-white border-[#2d9596] shadow-sm scale-[1.02]"
                : "bg-gray-50 text-[#1e3a5f] border-gray-100 hover:bg-gray-100 hover:scale-[1.01]"
                }`}
            >
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 shrink-0" />
                <span className="text-xs md:text-sm">{db.name}</span>
              </div>
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          ))}
        </div>

        {/* Right DB Details */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            key={selectedDb}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-50 border border-gray-100 p-6 rounded-3xl flex flex-col justify-between h-[450px]"
          >
            <div>
              <span className="text-[10px] font-extrabold uppercase bg-[#2d9596]/15 text-[#2d9596] px-2 py-0.5 rounded tracking-wider w-fit">
                PostgreSQL física en Supabase
              </span>
              <h3 className="text-2xl font-extrabold text-[#1e3a5f] mt-1 mb-2">{dbs[selectedDb].name}</h3>
              <p className="text-xs text-gray-500 leading-normal mb-5">{dbs[selectedDb].desc}</p>

              <h4 className="font-bold text-xs uppercase text-gray-400 tracking-wider mb-2">Tablas Principales y DDL Schema</h4>
              <div className="space-y-1.5 max-h-[220px] overflow-y-auto pr-2">
                {dbs[selectedDb].tables.map((table) => {
                  const splitIdx = table.indexOf("(")
                  const tableName = splitIdx !== -1 ? table.substring(0, splitIdx) : table
                  const fields = splitIdx !== -1 ? table.substring(splitIdx) : ""
                  return (
                    <div key={table} className="p-2.5 bg-white border border-gray-100 rounded-xl font-mono text-[10px]">
                      <span className="text-[#2d9596] font-bold">📋 {tableName}</span>
                      <span className="text-gray-500 font-medium">{fields}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════
//  SLIDE 9: STACK TECNOLÓGICO CON JUSTIFICACIONES REALES
// ═══════════════════════════════════════════
function StackSlide() {
  const stack = [
    {
      title: "Lenguajes",
      color: "border-blue-200",
      items: ["TypeScript", "JavaScript"],
      justification: "TypeScript nos ayuda a detectar errores antes de ejecutar el código en producción, asegurando contratos claros entre servicios."
    },
    {
      title: "Frameworks",
      color: "border-teal-200",
      items: ["Next.js", "Express", "Node.js"],
      justification: "Next.js para el frontend web y Express en el backend para construir APIs ligeras y rápidas en cada microservicio."
    },
    {
      title: "Bases de Datos",
      color: "border-indigo-200",
      items: ["PostgreSQL", "Supabase"],
      justification: "PostgreSQL por su robustez transaccional y seguridad, alojada y administrada en la nube mediante Supabase."
    },
    {
      title: "DevOps",
      color: "border-emerald-200",
      items: ["GitHub Actions", "Docker"],
      justification: "GitHub Actions para despliegue automático. Docker se usó exclusivamente para encapsular el entorno de monitoreo (Prometheus y Grafana)."
    },
    {
      title: "Librerías",
      color: "border-cyan-200",
      items: ["PDFKit", "Jest", "Supertest"],
      justification: "PDFKit para generar expedientes médicos. Jest y Supertest para pruebas automatizadas que garantizan la calidad del software."
    },
    {
      title: "Cloud",
      color: "border-red-200",
      items: ["Vercel", "Railway", "Render"],
      justification: "Vercel aloja el frontend. Render y Railway alojan los microservicios backend de forma distribuida e independiente."
    }
  ]

  return (
    <div className="h-screen flex flex-col bg-white">
      <SlideHeader title="Stack Tecnológico" subtitle="Momento 3 de 5" slideNumber={9} />
      <div className="flex-1 flex flex-col items-center justify-center px-10 py-6 overflow-hidden">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl w-full">
          {stack.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className={`p-4 bg-gray-50 border ${group.color} rounded-2xl flex flex-col justify-between h-[180px] shadow-sm`}
            >
              <div>
                <h4 className="font-extrabold text-[#1e3a5f] text-sm mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#2d9596]" /> {group.title}
                </h4>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {group.items.map((item) => (
                    <span key={item} className="px-1.5 py-0.5 bg-white border border-gray-100 rounded text-[9px] font-bold text-gray-500">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white/80 p-2 rounded-xl border border-gray-100 text-[10px] text-gray-600 leading-normal font-medium mt-1">
                <strong>Justificación:</strong> {group.justification}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════
//  SLIDE 10: CI/CD PIPELINE
// ═══════════════════════════════════════════
function CicdSlide() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  const steps = [
    { title: "1. Descarga Limpia", desc: "Instalación de dependencias exactas para asegurar un entorno idéntico." },
    { title: "2. Análisis Estático", desc: "Revisión de código con ESLint para prevenir malas prácticas." },
    { title: "3. TS Compiler", desc: "Compilación de TypeScript que falla si detecta errores de sintaxis." },
    { title: "4. Suite de Calidad", desc: "Ejecución de pruebas automatizadas. Si alguna falla, se detiene el proceso." },
    { title: "5. Despliegue Automático", desc: "Si todo es exitoso, la nueva versión se publica automáticamente en producción." }
  ]

  const capturas = [
    { name: "User Service", file: "/capturas/user service.png" },
    { name: "Pet Service", file: "/capturas/pet service.png" },
    { name: "EHR Service", file: "/capturas/ehr service.png" },
    { name: "Appointment Service", file: "/capturas/appointment service.png" },
    { name: "Billing Service", file: "/capturas/billing service.png" },
    { name: "Telemed Service", file: "/capturas/telemed service.png" },
    { name: "Notification Service", file: "/capturas/notification service.png" },
    { name: "Analytics Service", file: "/capturas/analytics service.png" }
  ]

  useEffect(() => {
    if (isZoomed) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % capturas.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [capturas.length, isZoomed])

  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Full Screen Modal for Zoom */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-8 md:p-16 cursor-pointer"
            onClick={() => setIsZoomed(false)}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              src={capturas[currentImageIndex].file}
              alt={capturas[currentImageIndex].name}
              className="w-full h-full object-contain rounded-xl shadow-2xl"
            />
            <div className="absolute top-6 right-6 text-white bg-white/10 p-2 px-4 rounded-full hover:bg-white/20 transition-colors backdrop-blur-md">
              <span className="text-sm font-bold">Cerrar ✕</span>
            </div>
            <div className="absolute bottom-6 left-0 right-0 flex justify-center">
              <span className="bg-black/50 text-white/90 text-xs font-bold px-4 py-2 rounded-full backdrop-blur-md">
                GitHub Actions — {capturas[currentImageIndex].name}
              </span>
            </div>

            {/* Zoom Controls inside Modal */}
            <button
              onClick={(e) => { e.stopPropagation(); setCurrentImageIndex((prev) => (prev - 1 + capturas.length) % capturas.length); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors backdrop-blur-md"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setCurrentImageIndex((prev) => (prev + 1) % capturas.length); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors backdrop-blur-md"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <SlideHeader title="Pruebas, Despliegue y Monitoreo" subtitle="Momento 4 de 5 — CI/CD y GitHub Actions" slideNumber={10} />
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 px-10 py-6 overflow-hidden">

        {/* Step Flow */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-6 flex flex-col justify-center space-y-2"
        >
          {/* Pruebas */}
          <div className="mb-1 border-b border-gray-100 pb-2">
            <h5 className="font-extrabold text-[#1e3a5f] text-[11px] mb-1.5 uppercase tracking-wide">
              Pruebas
            </h5>
            <ul className="text-[10px] text-gray-500 space-y-1.5 font-medium">
              <li>• <strong className="text-gray-700">Unitarias + Integración:</strong> Suites de prueba con Jest y Supertest para validar la lógica de negocio simulando peticiones HTTP reales.</li>
              <li>• <strong className="text-gray-700">Mocks:</strong> Las conexiones a bases de datos y servicios externos están mockeadas, permitiendo pruebas rápidas e independientes.</li>
              <li>• <strong className="text-gray-700">Evidencia:</strong> Cobertura superior al 80% en sentencias y funciones críticas (ej. Billing y Appointment).</li>
            </ul>
          </div>

          {steps.map((s, i) => (
            <div key={i} className="flex gap-3.5 p-2 px-3 bg-gray-50 border border-gray-100 rounded-xl">
              <div className="w-7 h-7 rounded-full bg-[#1e3a5f] text-white font-extrabold flex items-center justify-center text-xs shrink-0 mt-0.5 shadow-sm">
                {i + 1}
              </div>
              <div>
                <h4 className="font-extrabold text-[#1e3a5f] text-xs">{s.title}</h4>
                <p className="text-[10px] text-gray-500 leading-normal">{s.desc}</p>
              </div>
            </div>
          ))}

        </motion.div>

        {/* Carousel Area */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-6 flex flex-col justify-center space-y-3"
        >
          <div className="relative w-full h-[400px] bg-slate-900 border border-slate-800 rounded-3xl p-1 shadow-xl flex flex-col items-center justify-center overflow-hidden group">
            {/* Top browser bar mockup */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-slate-950/50 flex items-center px-4 gap-1.5 border-b border-slate-800/80 z-20">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
              <span className="text-[10px] text-slate-400 font-mono ml-4 select-all">GitHub Actions — {capturas[currentImageIndex].name}</span>

              <button
                onClick={(e) => { e.stopPropagation(); setIsZoomed(true); }}
                className="ml-auto flex items-center gap-1 text-[9px] font-bold text-white bg-white/10 hover:bg-white/20 px-2 py-0.5 rounded transition-colors z-30 border border-white/10"
              >
                <Eye className="w-3 h-3" /> Ampliar
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={capturas[currentImageIndex].file}
                alt={capturas[currentImageIndex].name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-contain pt-8 pb-8 px-2 cursor-zoom-in"
                onClick={() => setIsZoomed(true)}
              />
            </AnimatePresence>

            {/* Carousel Controls */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
              {capturas.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${currentImageIndex === idx ? "bg-[#2d9596] scale-125" : "bg-slate-600 hover:bg-slate-500"}`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentImageIndex((prev) => (prev - 1 + capturas.length) % capturas.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20 hover:bg-black/80"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrentImageIndex((prev) => (prev + 1) % capturas.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20 hover:bg-black/80"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <p className="text-[10px] text-gray-500 font-bold text-center mt-1 leading-normal italic">
            Evidencia del CI/CD en producción (Pipelines exitosos)
          </p>
        </motion.div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════
//  SLIDE 11: MONITOREO REAL CON PROMETHEUS Y GRAFANA
// ═══════════════════════════════════════════
function MonitoringSlide() {
  const [activeTab, setActiveTab] = useState<"grafana" | "prometheus">("grafana")

  return (
    <div className="h-screen flex flex-col bg-white">
      <SlideHeader title="Monitoreo con Prometheus y Grafana" subtitle="Momento 4 de 5" slideNumber={11} />

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 px-10 py-4 overflow-hidden">

        {/* Left Side: Interactive tabs & descriptions */}
        <div className="lg:col-span-4 flex flex-col justify-center space-y-4">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => setActiveTab("grafana")}
              className={`p-4 rounded-xl text-left font-bold transition-all border flex items-center gap-2 ${activeTab === "grafana"
                ? "bg-[#2d9596] text-white border-[#2d9596] shadow-md"
                : "bg-gray-50 text-[#1e3a5f] border-gray-100 hover:bg-gray-100"
                }`}
            >
              <BarChart3 className="w-5 h-5 shrink-0" />
              <div>
                <div className="text-xs uppercase opacity-75">Visualización</div>
                <div className="text-sm font-extrabold">NodeJS Application (Grafana)</div>
              </div>
            </button>

            <button
              onClick={() => setActiveTab("prometheus")}
              className={`p-4 rounded-xl text-left font-bold transition-all border flex items-center gap-2 ${activeTab === "prometheus"
                ? "bg-[#2d9596] text-white border-[#2d9596] shadow-md"
                : "bg-gray-50 text-[#1e3a5f] border-gray-100 hover:bg-gray-100"
                }`}
            >
              <Activity className="w-5 h-5 shrink-0" />
              <div>
                <div className="text-xs uppercase opacity-75">Servicios de Scrape</div>
                <div className="text-sm font-extrabold">Target Health (Prometheus)</div>
              </div>
            </button>
          </div>

          <div className="p-4 bg-gray-50 border border-gray-100 rounded-2xl">
            <h4 className="font-extrabold text-[#1e3a5f] text-xs uppercase text-gray-400 mb-2">Métricas Instrumentadas</h4>
            <ul className="space-y-2 text-xs text-gray-500 font-medium">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7ec8a3] mt-1.5 shrink-0" />
                <span><strong>Consumo de CPU:</strong> Mide el porcentaje de procesamiento en tiempo real. Un valor alto alerta sobre la necesidad de escalar los recursos.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7ec8a3] mt-1.5 shrink-0" />
                <span><strong>Memoria RAM:</strong> Monitorea el uso de memoria para prevenir caídas de los microservicios por falta de recursos o picos inesperados.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7ec8a3] mt-1.5 shrink-0" />
                <span><strong>Estado del Servicio:</strong> Verifica constantemente que el microservicio esté encendido y respondiendo de manera saludable.</span>
              </li>
            </ul>
          </div>

          <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-2xl">
            <h4 className="font-extrabold text-[#1e3a5f] text-xs uppercase mb-1.5">¿Cómo funciona el stack?</h4>
            <div className="text-[10px] text-gray-600 font-medium leading-relaxed space-y-1">
              <p>→ Prometheus y Grafana se ejecutan en contenedores Docker independientes.</p>
              <p>→ Prometheus recolecta métricas de los servicios y Grafana las dibuja en dashboards en tiempo real.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Image Viewport */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="w-full bg-white border border-gray-100 rounded-3xl p-3 shadow-md flex flex-col items-center justify-center relative overflow-hidden"
            >
              <span className="absolute top-2 left-4 text-[9px] font-bold text-gray-400 uppercase tracking-wider">
                {activeTab === "grafana" ? "Grafana Real Capture - NodeJS Application Dashboard" : "Prometheus Real Capture - Target Health"}
              </span>

              <img
                src={activeTab === "grafana" ? "/grafana.png" : "/prometheus.png"}
                alt={activeTab === "grafana" ? "Grafana Dashboard NodeJS" : "Prometheus Target Health"}
                className="w-full h-[54vh] object-contain rounded-xl mt-3"
              />
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  )
}

// ═══════════════════════════════════════════
//  SLIDE 12: COBERTURA DE TESTS REAL
// ═══════════════════════════════════════════


// ═══════════════════════════════════════════
//  SLIDE 13: DEMOSTRACIÓN FUNCIONAL UNIFICADA (FUSIONADA COMPLETAMENTE - 2 COLUMNAS)
// ═══════════════════════════════════════════
function UnifiedDemoSlide() {
  const [selectedReq, setSelectedReq] = useState(0)
  const [videoExists, setVideoExists] = useState(false)

  const requirements = [
    {
      num: "①",
      title: "Registro de Usuario",
      subtitle: "Crear cuenta como dueño de mascota",
      desc: "El usuario se registra en la plataforma. El sistema le asigna automáticamente el rol adecuado para proteger su acceso a los datos."
    },
    {
      num: "②",
      title: "Agendar Cita",
      subtitle: "Seleccionar horario disponible",
      desc: "El dueño selecciona una fecha y el sistema verifica en tiempo real. Si dos usuarios eligen el mismo horario, el segundo recibe un mensaje de conflicto."
    },
    {
      num: "③",
      title: "Pagar Cita",
      subtitle: "Procesamiento seguro con Bold",
      desc: "El usuario realiza el pago. Al confirmarse, el sistema marca la factura como pagada y confirma la cita automáticamente."
    },
    {
      num: "④",
      title: "Registrar Historial",
      subtitle: "Veterinario completa el expediente",
      desc: "Durante la consulta, el veterinario registra diagnósticos y vacunas. El sistema guarda la información y genera un PDF del expediente."
    },
    {
      num: "⑤",
      title: "Telemedicina",
      subtitle: "Videollamada integrada",
      desc: "El sistema genera salas virtuales temporales y seguras para que el veterinario y el dueño se conecten directamente."
    },

  ]

  const handleVideoError = () => {
    setVideoExists(false)
  }

  const handleVideoLoad = () => {
    setVideoExists(true)
  }

  return (
    <div className="h-screen flex flex-col bg-white">
      <SlideHeader title="Demostración Funcional del Sistema" subtitle="Momento 5 de 5" slideNumber={12} />

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 px-10 py-6 overflow-hidden">

        {/* Left Column (40%) - The 6 steps */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-2">
          <h3 className="text-sm font-extrabold text-[#1e3a5f] border-b pb-1.5 flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#2d9596]" /> Flujos de la Rúbrica de Sustentación
          </h3>

          <div className="space-y-1.5 max-h-[70vh] overflow-y-auto pr-1">
            {requirements.map((req, index) => (
              <button
                key={req.title}
                onClick={() => setSelectedReq(index)}
                className={`w-full text-left p-2 px-3 rounded-xl transition-all border flex gap-2.5 items-start ${selectedReq === index
                  ? "bg-[#2d9596]/10 border-[#2d9596] shadow-sm translate-x-1"
                  : "bg-gray-50 border-gray-100 hover:bg-gray-100/70"
                  }`}
              >
                <span className={`text-sm font-bold shrink-0 mt-0.5 ${selectedReq === index ? "text-[#2d9596]" : "text-gray-400"
                  }`}>
                  {req.num}
                </span>

                <div className="space-y-0.5 min-w-0">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black text-[#1e3a5f] tracking-wider uppercase">
                      {req.title}
                    </span>
                    <span className={`text-[11px] font-bold leading-tight truncate ${selectedReq === index ? "text-[#2d9596]" : "text-gray-500"}`}>
                      {req.subtitle}
                    </span>
                  </div>

                  {selectedReq === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="text-[9.5px] text-gray-500 leading-normal font-medium mt-1"
                    >
                      {req.desc}
                    </motion.p>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column (60%) - Styled Video Player or Placeholder */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="w-full h-[400px] bg-slate-900 border border-slate-800 rounded-3xl p-2.5 shadow-xl flex items-center justify-center relative overflow-hidden group">

            {/* Top browser bar mockup */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-slate-950/50 flex items-center px-4 gap-1.5 border-b border-slate-800/80 z-20">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
              <span className="text-[10px] text-slate-400 font-mono ml-4 select-all">https://petwell-green.vercel.app/demo</span>
            </div>

            {/* Video element */}
            <video
              src="/demo.mp4"
              autoPlay
              loop
              muted
              playsInline
              onError={handleVideoError}
              onLoadedData={handleVideoLoad}
              className={`w-full h-full object-cover rounded-2xl pt-6 transition-opacity duration-500 ${videoExists ? "opacity-100 z-10" : "opacity-0 -z-10 absolute"
                }`}
            />

            {/* Elegant Placeholder if video is not loaded */}
            {!videoExists && (
              <div className="flex flex-col items-center justify-center text-center p-6 pt-12 z-10">
                <div className="w-16 h-16 bg-[#2d9596]/10 rounded-full flex items-center justify-center text-[#2d9596] mb-5 border border-[#2d9596]/25 animate-pulse">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>

                <h4 className="text-white font-extrabold text-lg mb-2">
                  🎥 ARRASTRA AQUÍ TU VIDEO DE DEMO
                </h4>

                <p className="text-slate-400 text-xs font-medium max-w-sm leading-relaxed mb-4">
                  Coloca tu archivo <code className="text-[#2d9596] font-mono">demo.mp4</code> dentro de la carpeta <code className="text-[#2d9596] font-mono">/public</code> del proyecto de la presentación para reproducirlo aquí automáticamente en bucle.
                </p>

                {/* Dynamic visual badge depending on active step to show interactivity */}
                <div className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-2xl text-[10px] font-mono text-slate-300">
                  <span className="text-[#2d9596] font-bold">Simulando:</span> {requirements[selectedReq]?.title || "Seleccione una opción"} — {requirements[selectedReq]?.subtitle || ""}
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  )
}

// ═══════════════════════════════════════════
//  SLIDE 14: URLS DE PRODUCCIÓN VERIFICADAS
// ═══════════════════════════════════════════
function DeployUrlsSlide() {
  const deployments = [
    { name: "Frontend Principal", url: "https://petwell-green.vercel.app" },
    { name: "API Gateway central", url: "https://web-production-1f202.up.railway.app" },
    { name: "User Service micro", url: "https://petwell-user-service-production.up.railway.app" },
    { name: "EHR Service micro", url: "https://petwell-ehr-service-production.up.railway.app" },
    { name: "Pet Service micro", url: "https://petwell-pet-service.onrender.com" },
    { name: "Appointment Service", url: "https://petwell-appointment-service.onrender.com" },
    { name: "Billing Service micro", url: "https://petwell-billing-service.onrender.com" },
    { name: "Telemed Service micro", url: "https://petwell-telemed-service.onrender.com" },
    { name: "Notification Service", url: "https://petwell-notification-service.onrender.com" },
    { name: "Analytics Service", url: "https://petwell-analytics-service.onrender.com" }
  ]

  const repos = [
    { user: "Jhonatan Barrera", url: "https://github.com/jhonatan2405" },
    { user: "Juan Arguelles", url: "https://github.com/juanxpz1" },
    { user: "Jhon Garrido", url: "https://github.com/jhoning-21" }
  ]

  return (
    <div className="h-screen flex flex-col bg-white">
      <SlideHeader title="URLs de Producción Verificadas" subtitle="Evidencia de despliegue" slideNumber={13} />
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 px-10 py-6 overflow-hidden">

        {/* Left: 10 Deployments List */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <h4 className="font-extrabold text-[#1e3a5f] text-sm mb-3">Servicios Desplegados (Deploys Activos)</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[360px] overflow-y-auto pr-2">
            {deployments.map((d, i) => (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="p-3 bg-gray-50 hover:bg-white hover:border-gray-200 hover:shadow-sm border border-gray-100 rounded-xl flex items-center justify-between transition-all"
              >
                <div>
                  <h5 className="font-bold text-[#1e3a5f] text-xs">{d.name}</h5>
                  <a href={d.url} target="_blank" rel="noreferrer" className="text-[10px] text-gray-400 font-mono block hover:underline hover:text-[#2d9596] truncate max-w-[200px]">
                    {d.url}
                  </a>
                </div>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded-full flex items-center gap-1 shrink-0">
                  ✅ OK
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: GitHub repositories */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
          <div className="p-5 bg-gradient-to-br from-[#1e3a5f]/5 to-[#2d9596]/5 border border-gray-100 rounded-2xl">
            <h4 className="font-extrabold text-[#1e3a5f] text-sm flex items-center gap-2 mb-3">
              <GitBranch className="w-4 h-4 text-[#2d9596]" /> Repositorios y Códigos Fuente
            </h4>
            <div className="space-y-2.5">
              {repos.map((r, i) => (
                <motion.a
                  key={r.user}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1), duration: 0.4 }}
                  href={r.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white border border-gray-200 rounded-xl flex items-center justify-between hover:border-[#2d9596] transition-all group hover:scale-[1.02] shadow-sm"
                >
                  <span className="text-xs font-bold text-[#1e3a5f] group-hover:text-[#2d9596]">{r.user}</span>
                  <span className="text-[10px] text-gray-400 font-mono flex items-center gap-1">
                    <Link className="w-3.5 h-3.5" /> ir a GitHub
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="p-4 bg-gray-50 border border-gray-100 rounded-2xl flex items-start gap-2.5"
          >
            <Info className="w-5 h-5 text-[#2d9596] shrink-0 mt-0.5" />
            <p className="text-[11px] text-gray-600 leading-relaxed">
              Los cambios en la rama principal actualizan automáticamente los servicios desplegados.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════
//  SLIDE 15: CONCLUSIONES TÉCNICAS (CON MÉTRICAS IMPACTANTES REDISEÑADAS)
// ═══════════════════════════════════════════
function ConclusionsSlide() {
  const metrics = [
    {
      num: "8",
      label: "Microservicios",
      desc: "Negocio aislado."
    },
    {
      num: "7",
      label: "Bases de Datos",
      desc: "PostgreSQL independiente."
    },
    {
      num: "+80%",
      label: "Cobertura de Tests",
      desc: "Calidad validada."
    },
    {
      num: "3",
      label: "Plataformas Cloud",
      desc: "Vercel, Railway, Render."
    }
  ]

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-white via-gray-50 to-[#e8f4f4] relative">
      <SlideHeader title="Conclusiones" subtitle="Balance técnico final" slideNumber={14} />

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 px-10 py-6 max-w-5xl mx-auto w-full items-center z-10 overflow-hidden">

        {/* Conclusions Metrics Left Grid (Col 7) */}
        <div className="lg:col-span-7 grid grid-cols-2 gap-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-5 bg-white border border-gray-100 rounded-3xl shadow-sm flex flex-col justify-center items-center text-center h-[170px]"
            >
              <span className="text-4xl font-black text-[#2d9596]">{m.num}</span>
              <span className="text-xs font-extrabold text-[#1e3a5f] uppercase tracking-wider mt-1">{m.label}</span>
              <p className="text-[11px] text-gray-400 font-bold mt-2">
                {m.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Thank You Right Card (Col 5) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="lg:col-span-5 p-8 bg-[#1e3a5f] text-white rounded-3xl shadow-xl flex flex-col items-center justify-center text-center relative overflow-hidden h-[360px]"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#2d9596]/10 rounded-full filter blur-xl pointer-events-none" />

          <div className="bg-white p-2 rounded-2xl mb-5 shadow-sm relative w-32 h-12">
            <Image
              src="/logo.png"
              alt="PetWell"
              fill
              className="object-contain p-1"
              sizes="128px"
            />
          </div>

          <h3 className="text-3xl font-extrabold tracking-tight mb-2">¡Muchas Gracias!</h3>


          <p className="text-xs text-slate-300 max-w-xs leading-relaxed mb-6 font-medium">
            Sistema veterinario basado en microservicios con despliegue y monitoreo funcional.
          </p>

          <div className="flex gap-2">
            {["GitHub Repos", "Ver Demo"].map((text) => (
              <span key={text} className="px-3.5 py-1.5 border border-white/20 text-[10px] font-bold rounded-full text-slate-300">
                {text}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════
//  MAIN COMPONENT & SLIDE CONTROLLER
// ═══════════════════════════════════════════
export default function PetWellPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)

  const slides = [
    <HeroSlide key={0} />,
    <ContextSlide key={1} />,
    <GoalsSlide key={2} />,
    <ArchitectureSlide key={3} />,
    <MicroservicesSlide key={4} />,
    <SecuritySlide key={5} />,
    <SagaSlide key={6} />,
    <DatabaseSlide key={7} />,
    <StackSlide key={8} />,
    <CicdSlide key={9} />,
    <MonitoringSlide key={10} />,
    <UnifiedDemoSlide key={11} />,
    <DeployUrlsSlide key={12} />,
    <ConclusionsSlide key={13} />
  ]

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < TOTAL_SLIDES) {
      setDirection(index > currentSlide ? 1 : -1)
      setCurrentSlide(index)
    }
  }, [currentSlide])

  const nextSlide = useCallback(() => {
    if (currentSlide < TOTAL_SLIDES - 1) {
      setDirection(1)
      setCurrentSlide(prev => prev + 1)
    }
  }, [currentSlide])

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1)
      setCurrentSlide(prev => prev - 1)
    }
  }, [currentSlide])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault()
        nextSlide()
      } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        prevSlide()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextSlide, prevSlide])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
  }

  return (
    <div className="relative h-screen w-full overflow-hidden bg-white select-none">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#2d9596] to-[#7ec8a3] z-50"
        initial={{ width: 0 }}
        animate={{ width: `${((currentSlide + 1) / TOTAL_SLIDES) * 100}%` }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Slide content */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "spring", stiffness: 350, damping: 35 }}
          className="absolute inset-0"
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots - Hidden on Slide 1 */}
      {currentSlide > 0 && (
        <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 z-50">
          {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
            <motion.button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentSlide
                ? "bg-[#2d9596] scale-125"
                : "bg-gray-300 hover:bg-gray-400"
                }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      )}

      {/* Global Navigation - Fixed at top right to align with SlideHeader */}
      <div className="fixed top-4 right-8 flex items-center gap-2 z-50">
        {currentSlide > 0 && (
          <motion.button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-1.5 rounded-md bg-white hover:bg-gray-100 text-[#1e3a5f] transition-all disabled:opacity-30 disabled:cursor-not-allowed border border-gray-200 shadow-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
        )}

        {currentSlide > 0 && (
          <span className="text-sm font-bold text-[#1e3a5f] bg-white px-3 py-1.5 rounded-md border border-gray-200 shadow-sm min-w-[70px] text-center">
            {currentSlide + 1} / {TOTAL_SLIDES}
          </span>
        )}

        <motion.button
          onClick={nextSlide}
          disabled={currentSlide === TOTAL_SLIDES - 1}
          className={`p-1.5 rounded-md transition-all disabled:opacity-30 disabled:cursor-not-allowed border shadow-sm ${currentSlide === 0 ? "bg-[#2d9596] text-white border-[#2d9596] hover:bg-[#257d7e] px-4 py-1.5 flex items-center gap-1.5" : "bg-white hover:bg-gray-100 text-[#1e3a5f] border-gray-200"}`}
        >
          {currentSlide === 0 && <span className="text-xs font-bold tracking-wide uppercase">Comenzar</span>}
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  )
}
