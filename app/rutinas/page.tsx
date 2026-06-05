"use client";
export const dynamic = "force-dynamic";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const RutinasPage = () => {
  const [rutinas, setRutinas] = useState([]);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || '/api/mock/rutinas';

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => setRutinas(response.data))
      .catch(error => console.error('Error fetching rutinas:', error));
  }, [apiUrl]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Rutinas</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Nombre</th>
            <th className="py-2">Descripción</th>
            <th className="py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {(rutinas ?? []).map(rutina => (
            <tr key={rutina.id} className="border-t">
              <td className="py-2">{rutina.id}</td>
              <td className="py-2">{rutina.nombre}</td>
              <td className="py-2">{rutina.descripcion}</td>
              <td className="py-2">
                <Link href={`/rutinas/${rutina.id}`} className="text-blue-500 hover:underline">Ver</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RutinasPage;