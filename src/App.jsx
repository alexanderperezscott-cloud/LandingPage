import React from 'react';

export default function LandingPage() {
  // Aquí defines todos los enlaces que anotaste en el pizarrón
  const links = [
    {
      id: 1,
      title: "Portafolio Profesional",
      description: "Explora mis proyectos, habilidades y trayectoria.",
      icon: "",
      url: "#", // Reemplaza con el link a tu portafolio
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      id: 2,
      title: "StayMX (SPA)",
      description: "Single Page Application de alojamientos en México.",
      icon: "",
      url: "https://staymx-sigma.vercel.app", 
      gradient: "from-rose-500 to-orange-400"
    },
    {
      id: 3,
      title: "Documento SRS Completo",
      description: "Especificación de Requerimientos de Software (SharePoint/Sites).",
      icon: "",
      url: "#", // Reemplaza con el link de SharePoint
      gradient: "from-emerald-500 to-teal-400"
    },
    {
      id: 4,
      title: "Video Testimonial",
      description: "¿Por qué es vital la toma correcta de requerimientos?",
      icon: "",
      url: "#", // Reemplaza con el link de tu video (YouTube/Drive)
      gradient: "from-indigo-500 to-purple-400"
    },
    {
      id: 5,
      title: "Tutorial del Proyecto",
      description: "Guía paso a paso sobre el desarrollo y funcionamiento.",
      icon: "",
      url: "#", // Reemplaza con el link de tu tutorial
      gradient: "from-amber-400 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center py-16 px-4 relative overflow-hidden font-sans">
      
      {/* Efectos de luces de fondo (Glow) */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Encabezado del Perfil */}
      <div className="relative z-10 flex flex-col items-center mb-12 text-center w-full max-w-2xl">
        <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-cyan-400 to-indigo-500 mb-6 shadow-[0_0_30px_rgba(34,211,238,0.3)]">
          <img 
            src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=400&q=80" // Puedes cambiarla por tu foto real
            alt="Alexander Perez Scott" 
            className="w-full h-full rounded-full object-cover border-4 border-slate-950"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-2">
          Alexander Perez Scott
        </h1>
        <h2 className="text-lg md:text-xl text-cyan-400 font-medium tracking-wide uppercase bg-cyan-400/10 px-4 py-1.5 rounded-full inline-block">
          Ingeniería de Software
        </h2>
        <p className="mt-4 text-slate-400 text-base max-w-md">
          Bienvenido a mi central de proyectos. Aquí encontrarás toda la documentación, código y resultados de mi desarrollo.
        </p>
      </div>

      {/* Contenedor de los Enlaces */}
      <div className="relative z-10 w-full max-w-xl flex flex-col gap-5">
        {links.map((link) => (
          <a 
            key={link.id} 
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center p-5 rounded-2xl bg-slate-900/50 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-600 transition-all duration-300 backdrop-blur-sm overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-900/20"
          >
            {/* Borde izquierdo de color para cada tarjeta */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${link.gradient} opacity-70 group-hover:opacity-100 transition-opacity`}></div>
            
            <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-slate-950 border border-slate-800 text-2xl shadow-inner mr-5 group-hover:scale-110 transition-transform duration-300">
              {link.icon}
            </div>
            
            <div className="flex-1">
              <h3 className="text-white font-bold text-lg group-hover:text-cyan-300 transition-colors">
                {link.title}
              </h3>
              <p className="text-slate-400 text-sm mt-0.5 line-clamp-2">
                {link.description}
              </p>
            </div>
            
            <div className="flex-shrink-0 text-slate-500 group-hover:text-white transition-colors ml-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </a>
        ))}
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-16 text-slate-500 text-sm font-medium">
        © {new Date().getFullYear()} • Escárcega, Campeche
      </div>
    </div>
  );
}