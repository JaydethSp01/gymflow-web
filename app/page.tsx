"use client";
export const dynamic = "force-dynamic";
import { useState } from 'react';

const MOCK = {
  miembros: [
    { id: 1, nombre: 'Juan Pérez', membresia: 'Premium', activo: true },
    { id: 2, nombre: 'Ana Gómez', membresia: 'Estándar', activo: true },
    { id: 3, nombre: 'Luis Martínez', membresia: 'Básica', activo: false },
    { id: 4, nombre: 'Marta Fernández', membresia: 'Premium', activo: true },
  ],
  clases: [
    { id: 1, nombre: 'Yoga', horario: 'Lunes 18:00' },
    { id: 2, nombre: 'Pilates', horario: 'Miércoles 19:00' },
    { id: 3, nombre: 'Spinning', horario: 'Viernes 17:00' },
  ],
};

export default function GymFlowDashboard() {
  const [data] = useState(MOCK);

  return (
    <div className="p-8 space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">GymFlow Dashboard</h1>
        <p className="text-neutral-500 mt-1">Gestión de miembros y clases</p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {(data.miembros ?? []).map((miembro) => (
          <div
            key={miembro.id}
            className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
          >
            <p className="text-sm text-neutral-500">{miembro.nombre}</p>
            <p className="text-lg font-bold mt-1">{miembro.membresia}</p>
            <p className="text-sm mt-1">
              Estado: {miembro.activo ? 'Activo' : 'Inactivo'}
            </p>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <h2 className="font-semibold mb-4">Clases Disponibles</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-neutral-500">
              <th className="py-2">Nombre</th>
              <th className="py-2">Horario</th>
            </tr>
          </thead>
          <tbody>
            {(data.clases ?? []).map((clase) => (
              <tr key={clase.id} className="border-t border-neutral-100 dark:border-neutral-800">
                <td className="py-3">{clase.nombre}</td>
                <td className="py-3">{clase.horario}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}