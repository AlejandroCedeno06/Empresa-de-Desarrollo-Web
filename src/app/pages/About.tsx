import { Code, Palette, Zap, Coffee, Lightbulb, MessageCircle, CheckCircle } from "lucide-react";

export function About() {
  const openWhatsApp = () => {
    window.open("https://wa.me/1234567890?text=Hola, me interesa una página web para mi negocio", "_blank");
  };

  const values = [
    {
      icon: <Lightbulb size={32} />,
      title: "Soluciones prácticas",
      description: "No solo desarrollo sitios, resuelvo necesidades reales de negocio con tecnología.",
    },
    {
      icon: <MessageCircle size={32} />,
      title: "Comunicación clara",
      description: "Explico cada paso sin tecnicismos innecesarios para que siempre tengas control del proyecto.",
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Entrega funcional",
      description: "Me enfoco en que tu sitio funcione, cargue rápido y cumpla su objetivo.",
    },
    {
      icon: <Zap size={32} />,
      title: "Optimización básica",
      description: "Aplico buenas prácticas de rendimiento y estructura desde el inicio.",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="absolute inset-0 hero-grid pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/80 border border-slate-200 rounded-full px-4 py-2 text-sm text-slate-700 shadow-sm mb-6">
                <Coffee size={16} className="text-teal-600" />
                Desarrollo Web para Negocios
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-950 leading-tight mb-6">
                Hola, soy <span className="gradient-text">Alejandro</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 mb-6">
                Estudiante de Ingeniería en Sistemas y desarrollador web enfocado en crear páginas modernas, funcionales y accesibles para pequeños negocios y emprendimientos.
              </p>

              <p className="text-lg text-slate-600 mb-8">
                Trabajo con tecnologías actuales para construir sitios rápidos, responsivos y bien estructurados, ayudando a mejorar la presencia digital sin complicaciones.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={openWhatsApp}
                  className="bg-teal-700 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-teal-800 transition"
                >
                  Contactar
                </button>
                <a
                  href="#valores"
                  className="bg-white border border-slate-200 px-8 py-4 rounded-2xl font-semibold hover:text-teal-700 transition text-center"
                >
                  Saber más
                </a>
              </div>
            </div>

            <div>
              <div className="glass rounded-[2rem] p-6 overflow-hidden">
                <img src="https://github.com/AlexCedeno-dev/Empresa-de-Desarrollo-Web/blob/main/src/media/Foto_de_perfil.jpeg?raw=true" alt="perfil" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HABILIDADES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-slate-950 mb-5">
            Lo que puedo hacer por ti
          </h2>
          <p className="text-lg text-slate-600">
            Estas son las áreas en las que puedo ayudarte actualmente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass rounded-[2rem] p-8 text-center">
            <Code size={32} className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Desarrollo Web</h3>
            <p className="text-slate-600">Sitios web con React, HTML, CSS y buenas prácticas.</p>
          </div>

          <div className="glass rounded-[2rem] p-8 text-center">
            <Palette size={32} className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Diseño básico</h3>
            <p className="text-slate-600">Interfaces limpias, modernas y enfocadas en el usuario.</p>
          </div>

          <div className="glass rounded-[2rem] p-8 text-center">
            <Zap size={32} className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Optimización</h3>
            <p className="text-slate-600">Sitios rápidos, responsivos y listos para producción.</p>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section id="valores" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((v, i) => (
            <div key={i} className="glass rounded-2xl p-6">
              <div className="mb-3">{v.icon}</div>
              <h4 className="text-lg font-bold mb-2">{v.title}</h4>
              <p className="text-slate-600">{v.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}