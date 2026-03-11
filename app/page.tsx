import Image from "next/image";

const WHATSAPP_NUMBER = "5215564314241";
const WHATSAPP_MSG = encodeURIComponent(
  "Hola, me interesa una cotización de control de plagas para mi cocina."
);
const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;
const PHONE = "+52 55 6431 4241";

/* ─── Reusable WhatsApp CTA ─── */
function WhatsAppButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-[#1ebe5d] hover:shadow-xl ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      Cotizar por WhatsApp
    </a>
  );
}

/* ════════════════════════════════════════════════
   1. HERO
   ════════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative bg-[#142547] text-white">
      <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28 text-center">
        <Image
          src="/images/logo-cocinalimpia-bueno-horizontal.png"
          alt="CocinaLimpia.mx"
          width={400}
          height={120}
          className="mx-auto mb-8 brightness-0 invert"
          priority
        />

        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
          Control de Plagas Profesional
          <br />
          <span className="text-[#25D366]">para Cocinas Comerciales</span>
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Fumigacion certificada COFEPRIS para restaurantes, hoteles y cocinas
          industriales. Sin interrumpir tu operacion.
        </p>

        <WhatsAppButton />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Certificados COFEPRIS
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Respuesta en menos de 24h
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            +200 cocinas protegidas
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════
   2. SERVICES — 3 cards
   ════════════════════════════════════════════════ */
const services = [
  {
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    title: "Fumigacion Profesional",
    desc: "Eliminacion completa de cucarachas, moscas y plagas comunes en cocinas. Productos seguros para areas de alimentos.",
  },
  {
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Control de Roedores",
    desc: "Estaciones de monitoreo, trampas y sellado de accesos. Programa continuo para mantener tu cocina libre de roedores.",
  },
  {
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "Sanitizacion y Desinfeccion",
    desc: "Limpieza profunda con nebulizacion. Ideal antes de inspecciones COFEPRIS o auditorias sanitarias.",
  },
];

function Services() {
  return (
    <section id="servicios" className="bg-[#F8F8FA] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
          Nuestros Servicios
        </h2>
        <p className="text-center text-lg text-[#142547]/60 mb-12 max-w-xl mx-auto">
          Soluciones especializadas para cocinas comerciales que cumplen con la
          normativa sanitaria mexicana.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-[#142547]/5 p-3 text-[#142547]">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-[#142547]/60 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════
   3. PHOTOS — real work grid
   ════════════════════════════════════════════════ */
const photos = [
  { src: "/images/01_hero_fumigation.jpg", alt: "Tecnico de control de plagas en entrada de restaurante" },
  { src: "/images/02_kitchen_service.jpg", alt: "Servicio de fumigacion dentro de cocina comercial" },
  { src: "/images/03_team_exterior.jpg", alt: "Equipo de CocinaLimpia frente a unidad de servicio" },
  { src: "/images/04_rodent_station.jpg", alt: "Instalacion de estacion de monitoreo de roedores" },
  { src: "/images/05_inspection_clipboard.jpg", alt: "Inspeccion y reporte con chef de restaurante" },
  { src: "/images/06_spray_action.jpg", alt: "Nebulizacion profesional en cocina comercial" },
];

function Photos() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
          Nuestro Trabajo
        </h2>
        <p className="text-center text-lg text-[#142547]/60 mb-12">
          Cocinas reales, resultados reales.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-[4/3] rounded-xl overflow-hidden group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════
   4. REVIEWS
   ════════════════════════════════════════════════ */
const reviews = [
  {
    name: "Chef Roberto M.",
    role: "Restaurante La Trattoria",
    text: "Excelente servicio. Llegaron a tiempo, sin olores fuertes, y no tuvimos que cerrar la cocina. Totalmente recomendados.",
    stars: 5,
  },
  {
    name: "Maria Garcia",
    role: "Hotel Boutique Centro",
    text: "Llevamos 6 meses con su programa de mantenimiento y pasamos la inspeccion de COFEPRIS sin una sola observacion.",
    stars: 5,
  },
  {
    name: "Carlos Hernandez",
    role: "Taqueria Los Compadres",
    text: "Rapidos, profesionales y el precio es justo. El mejor servicio de fumigacion que hemos contratado.",
    stars: 5,
  },
];

function Reviews() {
  return (
    <section className="bg-[#142547] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
          Lo que Dicen Nuestros Clientes
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="rounded-2xl bg-white/10 backdrop-blur p-8 border border-white/10"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-[#FBBF24]" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/90 leading-relaxed mb-6">
                &ldquo;{r.text}&rdquo;
              </p>
              <div>
                <p className="font-bold">{r.name}</p>
                <p className="text-sm text-white/50">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════
   5. WHY US — 3 icons + one-liners
   ════════════════════════════════════════════════ */
const whyUs = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Certificados COFEPRIS",
    desc: "Productos aprobados para uso en areas de preparacion de alimentos.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Sin Cerrar Tu Cocina",
    desc: "Trabajamos en horarios que no interrumpen tu operacion diaria.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
      </svg>
    ),
    title: "Programa de Mantenimiento",
    desc: "Visitas periodicas para prevencion continua. Siempre listo para auditorias.",
  },
];

function WhyUs() {
  return (
    <section className="py-20 bg-[#F8F8FA]">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
          Por Que Elegirnos?
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {whyUs.map((item) => (
            <div key={item.title} className="text-center">
              <div className="mx-auto mb-4 inline-flex items-center justify-center rounded-full bg-[#142547] p-4 text-white">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-[#142547]/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════
   6. FINAL CTA — WhatsApp + phone + zones
   ════════════════════════════════════════════════ */
function FinalCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Listo para una Cocina Libre de Plagas?
        </h2>
        <p className="text-lg text-[#142547]/60 mb-8 max-w-xl mx-auto">
          Cotiza hoy sin compromiso. Respondemos en menos de 24 horas.
        </p>

        <WhatsAppButton className="mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-[#142547]/60">
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="flex items-center gap-2 hover:text-[#142547] transition"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            {PHONE}
          </a>

          <span className="hidden md:block text-gray-300">|</span>

          <div className="flex items-center gap-2">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            CDMX, Monterrey, Guadalajara y mas
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════
   FLOATING WHATSAPP
   ════════════════════════════════════════════════ */
function FloatingWhatsApp() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110 hover:shadow-3xl"
      aria-label="WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

/* ════════════════════════════════════════════════
   FOOTER
   ════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="bg-[#142547] py-8 text-center text-sm text-white/40">
      <div className="mx-auto max-w-6xl px-6">
        <Image
          src="/images/logo-cocinalimpia-bueno-horizontal.png"
          alt="CocinaLimpia.mx"
          width={200}
          height={60}
          className="mx-auto mb-4 brightness-0 invert opacity-50"
        />
        <p>
          &copy; {new Date().getFullYear()} CocinaLimpia.mx — Todos los
          derechos reservados.
        </p>
      </div>
    </footer>
  );
}

/* ════════════════════════════════════════════════
   PAGE
   ════════════════════════════════════════════════ */
export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Photos />
      <Reviews />
      <WhyUs />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
