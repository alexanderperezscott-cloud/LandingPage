import React, { useEffect, useRef, useState } from 'react';
import {
  Briefcase,
  PlayCircle,
  FileText,
  Rocket,
  Play,
  ArrowUpRight,
  QrCode,
  Sun,
  Moon,
} from 'lucide-react';

/* TikTok mark — not in lucide, drawn as a raw path */
function TikTokIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M16.6 5.82c-.9-.86-1.46-2.03-1.56-3.32h-3.05v13.6c0 1.5-1.22 2.72-2.72 2.72a2.72 2.72 0 010-5.44c.24 0 .48.03.7.09V10.4a5.78 5.78 0 00-.7-.04A5.77 5.77 0 003 16.13a5.77 5.77 0 0011.53 0V8.9a8.6 8.6 0 004.47 1.25V7.1a5.4 5.4 0 01-2.4-1.28z" />
    </svg>
  );
}

/* ---------- theme tokens ---------- */
const THEME = {
  dark: {
    bg: '#020304',
    surface: '#07080C',
    heading: 'text-white',
    body: 'text-slate-300',
    muted: 'text-slate-400',
    faint: 'text-slate-600',
    borderSoft: 'border-white/[0.06]',
    borderMed: 'border-white/10',
    iconBg: 'bg-white/5',
    navBg: 'bg-[#020304]/85',
    dockBg: 'bg-[#07080C]/90',
    tooltipBg: '#0C0E14',
    ctaBg: 'bg-white hover:bg-slate-200 text-black',
    glowA: 'bg-indigo-600/[0.07]',
    glowB: 'bg-cyan-600/[0.07]',
    gridLine: 'rgba(255,255,255,0.025)',
    qrDot: 'E5E7EB',
    qrBg: '07080C',
  },
  light: {
    bg: '#F6F6F8',
    surface: '#FFFFFF',
    heading: 'text-slate-900',
    body: 'text-slate-700',
    muted: 'text-slate-500',
    faint: 'text-slate-500',
    borderSoft: 'border-black/[0.07]',
    borderMed: 'border-black/10',
    iconBg: 'bg-black/[0.04]',
    navBg: 'bg-[#F6F6F8]/85',
    dockBg: 'bg-white/90',
    tooltipBg: '#111318',
    ctaBg: 'bg-slate-900 hover:bg-slate-800 text-white',
    glowA: 'bg-indigo-400/[0.12]',
    glowB: 'bg-cyan-400/[0.12]',
    gridLine: 'rgba(15,23,42,0.045)',
    qrDot: '111318',
    qrBg: 'FFFFFF',
  },
};

/* ---------- scroll-reveal helper ---------- */
function Reveal({ children, className = '', delay = 0, id }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '-40px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id={id}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const SPA_URL = 'https://staymx-sigma.vercel.app';
const TIKTOK_URL = 'https://www.tiktok.com/@staymx6?_r=1&_t=ZS-98cNqQdpnwf';

// Todos los enlaces ahora usan el mismo formato de tarjeta para mantener el diseño consistente
const LINKS = [
  {
    id: 'portfolio',
    label: 'PORTAFOLIO',
    title: 'Portafolio',
    desc: 'Habilidades en desarrollo frontend y backend, y trayectoria con tecnologías modernas.',
    cta: 'Ver portafolio',
    icon: Briefcase,
    href: 'https://portafolio-lime-iota.vercel.app',
    external: true,
  },
  {
    id: 'spa',
    label: 'PLATAFORMA',
    title: 'SPA en vivo',
    desc: 'La aplicación completa: reservas, conciliación de disponibilidad y panel de gestión.',
    cta: 'Abrir plataforma',
    icon: Rocket,
    href: SPA_URL,
    external: true,
  },
  {
    id: 'srs',
    label: 'DOCUMENTACIÓN',
    title: 'SRS Completo',
    desc: 'Especificación de Requisitos de Software alojada en SharePoint Sites. Arquitectura y estándares.',
    cta: 'Leer documento',
    icon: FileText,
    href: 'https://staymxsrs-five.vercel.app',
    external: true,
  },
  {
    id: 'tutorial',
    label: 'GUÍA',
    title: 'Video Tutorial',
    desc: 'Demostración paso a paso del flujo de la aplicación y la conciliación de bases de datos.',
    cta: 'Ver demostración',
    icon: PlayCircle,
    href: 'https://youtu.be/ZOgfurnPx3c',
    external: true,
  },
  {
    id: 'testimonial',
    label: 'TESTIMONIO',
    title: 'Video Testimonial',
    desc: 'Análisis sobre cómo la correcta extracción de datos previene pérdidas y asegura viabilidad técnica.',
    cta: 'Ver testimonio',
    icon: Play,
    href: 'https://youtube.com/shorts/roMMgSlDiBM?feature=share',
    external: true,
  },
];

export default function App() {
  const [mode, setMode] = useState('dark');
  const t = THEME[mode];
  const isDark = mode === 'dark';

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-color-scheme: light)');
    if (mq.matches) setMode('light');
  }, []);

  const QR_SRC = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=10&qzone=1&color=${t.qrDot}&bgcolor=${t.qrBg}&data=${encodeURIComponent(
    SPA_URL
  )}`;

  const focusRing =
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent';

  return (
    <div
      className={`min-h-screen ${t.body} font-sans selection:bg-indigo-500 selection:text-white relative overflow-x-hidden transition-colors duration-300`}
      style={{ backgroundColor: t.bg }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap');
        .font-mono-hud { font-family: 'JetBrains Mono', ui-monospace, monospace; }
        html { scroll-behavior: smooth; }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.25; }
        }
        .scanline { position: relative; overflow: hidden; }
        .scanline::after {
          content: '';
          position: absolute;
          left: 0; right: 0; height: 40%;
          background: linear-gradient(180deg, transparent, rgba(99,102,241,0.14), transparent);
          animation: scanline 3.5s linear infinite;
          pointer-events: none;
        }
        .blink-dot { animation: blink 1.6s ease-in-out infinite; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          .scanline::after, .blink-dot { animation: none; }
        }
      `}</style>

      {/* Skip link */}
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-full focus:bg-indigo-500 focus:text-white text-sm font-medium"
      >
        Saltar al contenido
      </a>

      {/* Background layers */}
      <div
        className="absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_40%,transparent_100%)] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${t.gridLine} 1px, transparent 1px), linear-gradient(90deg, ${t.gridLine} 1px, transparent 1px)`,
          backgroundSize: '44px 44px',
        }}
      />
      <div className={`absolute top-[-10%] left-[-10%] w-[600px] h-[600px] ${t.glowA} blur-[150px] rounded-full pointer-events-none`} />
      <div className={`absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] ${t.glowB} blur-[120px] rounded-full pointer-events-none`} />

      {/* Navbar */}
      <nav className={`fixed top-0 w-full flex justify-between items-center px-4 sm:px-6 md:px-8 py-3.5 z-50 ${t.navBg} backdrop-blur-md border-b ${t.borderSoft}`}>
        <div className="flex items-center gap-2.5">
          <svg className="w-6 h-6 text-indigo-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <span className={`text-base md:text-lg font-bold ${t.heading} tracking-tight`}>StayMX</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setMode(isDark ? 'light' : 'dark')}
            aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            aria-pressed={!isDark}
            className={`w-11 h-11 flex items-center justify-center rounded-full border ${t.borderMed} ${t.muted} hover:${t.heading} transition-colors touch-manipulation ${focusRing}`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <a
            href={TIKTOK_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="StayMX en TikTok"
            className={`hidden sm:flex w-11 h-11 items-center justify-center rounded-full border ${t.borderMed} ${t.muted} hover:${t.heading} transition-colors touch-manipulation ${focusRing}`}
          >
            <TikTokIcon className="w-4 h-4" />
          </a>
          <a
            href={SPA_URL}
            target="_blank"
            rel="noreferrer"
            className={`px-4 sm:px-6 py-2.5 ${t.ctaBg} text-sm font-bold rounded-full transition-colors touch-manipulation ${focusRing}`}
          >
            Probar plataforma →
          </a>
        </div>
      </nav>

      {/* Hero */}
      <main id="inicio" className="relative z-10 flex flex-col items-center justify-center min-h-[86vh] px-4 pt-24 text-center scroll-mt-20">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/[0.06] backdrop-blur-sm mb-8 font-mono-hud">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 blink-dot" />
            <span className="text-indigo-400 text-xs font-semibold tracking-[0.15em] uppercase">
              Presentación de Proyecto Final
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className={`text-4xl sm:text-5xl md:text-7xl font-bold ${t.heading} tracking-tighter leading-[1.1] max-w-4xl mb-6`}>
            Gestión inteligente de <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              alojamientos web.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className={`text-base sm:text-lg ${t.muted} max-w-2xl font-light leading-relaxed`}>
            Descubre el desarrollo, la estructura técnica y la ejecución de StayMX. Una Single
            Page Application diseñada por Alexander Perez Scott.
          </p>
        </Reveal>
      </main>

      {/* QR / linktree hub */}
      <section id="acceso-rapido" className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pb-8 scroll-mt-24">
        <Reveal>
          <div
            className={`relative overflow-hidden scanline rounded-[2rem] border border-indigo-500/[0.15] p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12`}
            style={{ backgroundColor: t.surface }}
          >
            <span className="absolute top-4 left-4 w-4 h-4 border-t border-l border-indigo-400/40 rounded-tl-sm" />
            <span className="absolute top-4 right-4 w-4 h-4 border-t border-r border-indigo-400/40 rounded-tr-sm" />
            <span className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-indigo-400/40 rounded-bl-sm" />
            <span className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-indigo-400/40 rounded-br-sm" />

            <div className={`relative shrink-0 p-3 rounded-2xl ${t.iconBg} border ${t.borderMed}`}>
              <img
                src={QR_SRC}
                alt="Código QR hacia la plataforma StayMX"
                className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-lg"
                width={192}
                height={192}
                loading="lazy"
              />
            </div>

            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3 font-mono-hud text-cyan-400 text-xs tracking-[0.15em] uppercase">
                <QrCode className="w-3.5 h-3.5" />
                Acceso rápido
              </div>
              <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold ${t.heading} tracking-tight mb-3`}>
                Escanea y entra directo a la plataforma
              </h2>
              <p className={`${t.muted} mb-4 max-w-md`}>
                Este código apunta a la SPA en vivo. Los enlaces al portafolio, la
                documentación técnica y el video testimonial están reunidos abajo.
              </p>
              <div className={`font-mono-hud text-[11px] ${t.faint} tracking-wider uppercase`}>
                enlace_activo <span className="text-emerald-400">●</span> staymx.landing // v2.1
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Grid unificado con todos los links al estilo tarjeta (como en la imagen solicitada) */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <Reveal className="text-center mb-12 sm:mb-14">
          <h2 className={`text-2xl sm:text-3xl md:text-5xl font-bold ${t.heading} tracking-tight mb-4`}>
            El proceso de creación
          </h2>
          <p className={t.muted}>Documentación técnica, testimonios y recursos del desarrollo.</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 auto-rows-[minmax(220px,auto)]">
          {LINKS.map((item, i) => (
            <Reveal key={item.id} delay={i * 100}>
              <LinkCard item={item} t={t} focusRing={focusRing} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={`relative z-10 border-t ${t.borderSoft} py-10 text-center font-mono-hud`}>
        <p className={`text-xs ${t.faint} tracking-widest uppercase px-4`}>
          © 2026 Alexander Perez Scott • Ingeniería de Software
        </p>
        <a
          href={TIKTOK_URL}
          target="_blank"
          rel="noreferrer"
          className={`sm:hidden mt-4 inline-flex items-center gap-2 text-xs ${t.muted} ${focusRing} rounded-full px-3 py-2`}
        >
          <TikTokIcon className="w-3.5 h-3.5" />
          @staymx en TikTok
        </a>
      </footer>

    </div>
  );
}

function LinkCard({ item, t, focusRing }) {
  const Icon = item.icon;
  return (
    <a
      id={item.id}
      href={item.href}
      target={item.external ? '_blank' : undefined}
      rel={item.external ? 'noreferrer' : undefined}
      className={`group h-full flex flex-col p-6 sm:p-7 rounded-[2rem] border ${t.borderSoft} hover:border-indigo-500/30 transition-all duration-300 scroll-mt-24 touch-manipulation ${focusRing}`}
      style={{ backgroundColor: t.surface }}
    >
      <div className="flex items-center justify-between mb-5 sm:mb-6">
        <div className={`w-10 h-10 rounded-full ${t.iconBg} border ${t.borderMed} flex items-center justify-center ${t.heading} group-hover:scale-110 group-hover:text-indigo-400 transition-all`}>
          <Icon className="w-5 h-5" />
        </div>
        <span className={`font-mono-hud text-[10px] tracking-[0.15em] ${t.faint} group-hover:text-indigo-400/70 transition-colors`}>
          {item.label}
        </span>
      </div>
      <h3 className={`text-lg sm:text-xl font-bold ${t.heading} mb-2`}>{item.title}</h3>
      <p className={`text-sm ${t.muted} mb-6 flex-1`}>{item.desc}</p>
      <span className="inline-flex items-center gap-1 text-indigo-400 text-sm font-medium">
        {item.cta}
        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </span>
    </a>
  );
}