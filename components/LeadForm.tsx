'use client';

import { useState } from 'react';
import { Button } from './Button';

type LeadState = {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  mensaje: string;
};

type FormError = Partial<Record<keyof LeadState, string>>;

const initialState: LeadState = {
  nombre: '',
  empresa: '',
  email: '',
  telefono: '',
  mensaje: ''
};

export function LeadForm() {
  const [values, setValues] = useState<LeadState>(initialState);
  const [errors, setErrors] = useState<FormError>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: FormError = {};

    if (!values.nombre.trim()) newErrors.nombre = 'Ingresa tu nombre';
    if (!values.empresa.trim()) newErrors.empresa = 'Ingresa tu empresa';
    if (!values.email.trim()) {
      newErrors.email = 'Ingresa tu email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!values.telefono.trim()) newErrors.telefono = 'Ingresa un teléfono de contacto';
    if (!values.mensaje.trim()) newErrors.mensaje = 'Cuéntanos en qué podemos apoyarte';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    console.log('Lead enviado a Gestral', values);
    setToastMessage('Gracias, te contactaremos muy pronto.');
    setValues(initialState);

    // TODO: integrar embed de Tally/Typeform aquí para enviar datos directamente.
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  return (
    <div className="rounded-3xl border border-brand-surface3/60 bg-white p-8 shadow-sm">
      <div className="mb-6">
        <h2 className="font-heading text-3xl text-brand-ink">Agenda una demo</h2>
        <p className="mt-2 text-sm text-brand-ink/80">
          Comparte tus datos y agenda una llamada con nuestro equipo.
        </p>
      </div>
      <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit} noValidate>
        <div>
          <label className="mb-2 block text-sm font-medium text-brand-ink" htmlFor="nombre">
            Nombre
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            autoComplete="name"
            value={values.nombre}
            onChange={handleChange}
            className="w-full rounded-xl border border-brand-surface3/60 bg-brand-surface1 px-4 py-3 text-brand-ink shadow-sm placeholder:text-brand-ink/40"
          />
          {errors.nombre ? <p className="mt-1 text-xs text-red-600">{errors.nombre}</p> : null}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-brand-ink" htmlFor="empresa">
            Empresa
          </label>
          <input
            id="empresa"
            name="empresa"
            type="text"
            autoComplete="organization"
            value={values.empresa}
            onChange={handleChange}
            className="w-full rounded-xl border border-brand-surface3/60 bg-brand-surface1 px-4 py-3 text-brand-ink shadow-sm placeholder:text-brand-ink/40"
          />
          {errors.empresa ? <p className="mt-1 text-xs text-red-600">{errors.empresa}</p> : null}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-brand-ink" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-brand-surface3/60 bg-brand-surface1 px-4 py-3 text-brand-ink shadow-sm placeholder:text-brand-ink/40"
          />
          {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email}</p> : null}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-brand-ink" htmlFor="telefono">
            Teléfono
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            autoComplete="tel"
            value={values.telefono}
            onChange={handleChange}
            className="w-full rounded-xl border border-brand-surface3/60 bg-brand-surface1 px-4 py-3 text-brand-ink shadow-sm placeholder:text-brand-ink/40"
          />
          {errors.telefono ? <p className="mt-1 text-xs text-red-600">{errors.telefono}</p> : null}
        </div>
        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-brand-ink" htmlFor="mensaje">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={4}
            value={values.mensaje}
            onChange={handleChange}
            className="w-full rounded-xl border border-brand-surface3/60 bg-brand-surface1 px-4 py-3 text-brand-ink shadow-sm placeholder:text-brand-ink/40"
          />
          {errors.mensaje ? <p className="mt-1 text-xs text-red-600">{errors.mensaje}</p> : null}
        </div>
        <div className="flex flex-col gap-3 md:col-span-2 md:flex-row md:items-center md:justify-between">
          <Button type="submit" variant="primary" className="w-full md:w-auto">
            Agendar demo
          </Button>
          <Button
            href="https://wa.me/569XXXXXXXX?text=Quiero%20probar%20Gestral"
            variant="secondary"
            className="w-full md:w-auto"
            newTab
            aria-label="Abrir conversación de WhatsApp con Gestral"
          >
            Hablar por WhatsApp
          </Button>
        </div>
      </form>
      {toastMessage ? (
        <div
          role="status"
          className="mt-6 rounded-xl border border-brand-surface3/60 bg-brand-surface2 px-4 py-3 text-sm text-brand-ink"
        >
          {toastMessage}
        </div>
      ) : null}
    </div>
  );
}
