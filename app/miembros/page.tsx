"use client";
export const dynamic = "force-dynamic";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const MiembrosPage = () => {
  const [miembros, setMiembros] = useState([]);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || '/api/mock/miembros';

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => setMiembros(response.data))
      .catch(error => console.error('Error fetching miembros:', error));
  }, [apiUrl]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Miembros</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Nombre</th>
            <th className="py-2">Email</th>
            <th className="py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {(miembros ?? []).map(miembro => (
            <tr key={miembro.id} className="border-t">
              <td className="py-2">{miembro.id}</td>
              <td className="py-2">{miembro.nombre}</td>
              <td className="py-2">{miembro.email}</td>
              <td className="py-2">
                <Link href={`/miembros/${miembro.id}`} className="text-blue-500 hover:underline">Ver</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MiembrosPage;