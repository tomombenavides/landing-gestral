import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { Logo } from '@/components/Logo';
import { LeadForm } from '@/components/LeadForm';
import { FeatureCard } from '@/components/FeatureCard';
import { Step } from '@/components/Step';
import { FaqItem } from '@/components/FaqItem';

const features = [
  {
    title: 'Planos con versiones',
    description: 'Controla cambios, revisiones y anotaciones en el mismo lugar on-site.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" role="img" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v11.5a1.5 1.5 0 0 1-2.334 1.224L15 15.25 8.334 17.724A1.5 1.5 0 0 1 6 16.5V5a2 2 0 0 1 2-2Z" opacity="0.2" />
        <path
          fill="currentColor"
          d="M7 4a1 1 0 0 0-1 1v11.5l6-2.4 6 2.4V5a1 1 0 0 0-1-1H7Zm6 4h4v2h-4V8Zm0 3h4v2h-4v-2Zm-5-3h3v5H8V8Z"
        />
      </svg>
    )
  },
  {
    title: 'Tareas por cuadrilla',
    description: 'Asigna responsables y fechas claras para evitar cuellos de botella.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" role="img" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M4 4h16v12H4z" opacity="0.2" />
        <path
          fill="currentColor"
          d="M5 3a2 2 0 0 0-2 2v11h2.25A3.75 3.75 0 0 1 9 19.75V21h6v-1.25A3.75 3.75 0 0 1 18.75 16H21V5a2 2 0 0 0-2-2H5Zm3 4h8v2H8V7Zm0 4h6v2H8v-2Z"
        />
      </svg>
    )
  },
  {
    title: 'Evidencia en fotos y checklists',
    description: 'Documenta avances y hallazgos con respaldo fotográfico ordenado.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" role="img" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M4 7h16v12H4z" opacity="0.2" />
        <path
          fill="currentColor"
          d="M8.5 6 7 8H5a1 1 0 0 0-1 1v9h16V7H8.5Zm3.5 4.5 3 3.5H9l1.75-2.333L12 10.5ZM7 6l1.5-2h7L17 6h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3Z"
        />
      </svg>
    )
  },
  {
    title: 'Reportes diarios y avance físico',
    description: 'Genera informes comparables con métricas actualizadas por frente.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" role="img" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M5 4h14v16H5z" opacity="0.2" />
        <path
          fill="currentColor"
          d="M6 3a2 2 0 0 0-2 2v14h16V5a2 2 0 0 0-2-2H6Zm3 13H7v-4h2v4Zm4 0h-2v-7h2v7Zm4 0h-2v-10h2v10Z"
        />
      </svg>
    )
  },
  {
    title: 'Roles y permisos',
    description: 'Define accesos por perfil para proteger información crítica.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" role="img" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M4 6h16v12H4z" opacity="0.2" />
        <path
          fill="currentColor"
          d="M12 4a4 4 0 0 1 4 4v1h1.5A2.5 2.5 0 0 1 20 11.5v5A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-5A2.5 2.5 0 0 1 6.5 9H8V8a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v1h4V8a2 2 0 0 0-2-2Z"
        />
      </svg>
    )
  },
  {
    title: 'Exportables PDF/Excel',
    description: 'Descarga entregables listos para comités y mandantes.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" role="img" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M6 3h9l5 5v13H6z" opacity="0.2" />
        <path
          fill="currentColor"
          d="M6 2a2 2 0 0 0-2 2v16h16V8.828L13.172 2H6Zm7 2v5h5l-5-5Zm-5 6h6v2H8v-2Zm0 4h6v2H8v-2Z"
        />
      </svg>
    )
  }
];

const steps = [
  {
    title: 'Crea tu obra',
    description: 'Define etapas, cuadrillas y metas iniciales en minutos.'
  },
  {
    title: 'Sube planos',
    description: 'Versiona archivos y comparte el master con tu equipo de terreno.'
  },
  {
    title: 'Asigna tareas y reporta',
    description: 'Coordina avances diarios con responsables claros y evidencia.'
  }
];

const faqs = [
  {
    question: '¿Gestral reemplaza mis carpetas en Drive?',
    answer: 'Sí. Centralizamos planos, revisiones y documentación para que tu equipo no pierda versiones.'
  },
  {
    question: '¿Puedo invitar a contratistas externos?',
    answer: 'Puedes asignar roles y permisos específicos según empresa o cuadrilla para compartir solo lo necesario.'
  },
  {
    question: '¿Qué soporte incluye la obra piloto?',
    answer: 'Acompañamiento semanal para onboarding, revisión de uso y mejoras sugeridas por tu equipo.'
  },
  {
    question: '¿Funciona sin conexión?',
    answer: 'La aplicación móvil sincroniza datos en cuanto retomas cobertura para evitar pérdidas de información.'
  },
  {
    question: '¿Cuándo estará disponible la versión comercial?',
    answer: 'Estamos priorizando feedback de las 3 obras piloto en Chile previo a liberar la versión definitiva.'
  }
];

export default function Page() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-brand-surface1/80 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5">
          <Logo />
          <nav aria-label="Principal">
            <ul className="flex items-center gap-6 text-sm font-medium text-brand-ink/80">
              <li>
                <Link href="#valor" className="hover:text-brand-ink focus-visible:text-brand-ink">
                  Valor
                </Link>
              </li>
              <li>
                <Link href="#como-funciona" className="hover:text-brand-ink focus-visible:text-brand-ink">
                  Cómo funciona
                </Link>
              </li>
              <li>
                <Link href="#piloto" className="hover:text-brand-ink focus-visible:text-brand-ink">
                  Piloto
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="hover:text-brand-ink focus-visible:text-brand-ink">
                  Contacto
                </Link>
              </li>
              <li>
                <Button href="#contacto" variant="primary">
                  Agendar demo
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section id="hero" className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 py-20 md:flex-row md:items-center">
          <div className="flex-1 space-y-6">
            <p className="inline-flex rounded-full bg-brand-surface3 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-brand-ink/70">
              Conecta terreno y oficina técnica
            </p>
            <div className="space-y-4">
              <h1 className="font-heading text-4xl text-brand-ink md:text-5xl">
                Gestión de obra simple y potente.
              </h1>
              <p className="text-lg text-brand-ink/80 md:text-xl">
                Planos, tareas y avances en un solo lugar. Ahorra tiempo y evita reprocesos.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="#contacto" variant="primary" aria-label="Ir al formulario para probar Gestral">
                Probar con mi obra piloto
              </Button>
              <Button href="#como-funciona" variant="secondary">
                Ver cómo funciona
              </Button>
            </div>
            <p className="text-sm text-brand-ink/60">
              Disponible para obras civiles, edificaciones y proyectos industriales.
            </p>
          </div>
          <div className="flex-1">
            <div className="relative overflow-hidden rounded-3xl border border-brand-surface3/60 bg-brand-surface3 shadow-lg">
              <Image
                src="/mockup.png"
                alt="Vista previa de la plataforma Gestral"
                width={640}
                height={480}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section id="valor" className="bg-brand-surface2 py-20">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="mb-12 max-w-2xl space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-ink/60">Valor Gestral</p>
              <h2 className="font-heading text-3xl text-brand-ink">Controla tu obra con datos en contexto</h2>
              <p className="text-brand-ink/70">
                Centralizamos la información clave para que las decisiones en terreno sean rápidas y confiables.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </section>

        <section id="como-funciona" className="mx-auto max-w-[1200px] px-6 py-20">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-ink/60">Cómo funciona</p>
            <h2 className="font-heading text-3xl text-brand-ink">En menos de una semana tu obra está sincronizada</h2>
            <p className="mt-3 text-brand-ink/70">
              Nuestro equipo te acompaña con plantillas y buenas prácticas aprendidas en terreno.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <Step key={step.title} number={index + 1} {...step} />
            ))}
          </div>
        </section>

        <section id="piloto" className="bg-brand-surface4 py-14">
          <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left">
            <div>
              <p className="font-heading text-2xl text-brand-white">
                Buscamos 3 obras piloto en Chile
              </p>
              <p className="mt-2 text-brand-white/80">
                Participa para co-diseñar la plataforma y obtener condiciones preferenciales.
              </p>
            </div>
            <Button
              href="#contacto"
              variant="secondary"
              className="border border-white bg-white text-brand-primary shadow-sm hover:bg-white focus-visible:ring-brand-primary"
            >
              Postular a piloto
            </Button>
          </div>
        </section>

        <section id="contacto" className="mx-auto max-w-[1200px] px-6 py-20">
          <LeadForm />
        </section>

        <section id="faq" className="bg-brand-surface2 py-20">
          <div className="mx-auto max-w-[900px] space-y-8 px-6">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-ink/60">Preguntas frecuentes</p>
              <h2 className="font-heading text-3xl text-brand-ink">Resolvemos tus dudas</h2>
              <p className="mt-3 text-brand-ink/70">
                ¿Tienes otra pregunta? Escríbenos a{' '}
                <a href="mailto:hola@gestral.cl" className="underline">
                  hola@gestral.cl
                </a>
                .
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <FaqItem key={faq.question} {...faq} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-brand-surface3/60 bg-brand-surface1 py-12">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
          <Logo />
          <div className="flex flex-col gap-2 text-sm text-brand-ink/70 md:flex-row md:items-center md:gap-6">
            <Link href="#hero">Inicio</Link>
            <Link href="#valor">Valor</Link>
            <Link href="#como-funciona">Cómo funciona</Link>
            <Link href="#contacto">Contacto</Link>
          </div>
          <div className="flex flex-col gap-2 text-sm text-brand-ink/70 md:items-end">
            <Link href="/politica" aria-label="Ver política de privacidad">
              Política de privacidad
            </Link>
            <Link href="/terminos" aria-label="Ver términos y condiciones">
              Términos y condiciones
            </Link>
            <a href="mailto:hola@gestral.cl" className="text-brand-ink">
              hola@gestral.cl
            </a>
            <a
              href="https://wa.me/569XXXXXXXX?text=Quiero%20probar%20Gestral"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
