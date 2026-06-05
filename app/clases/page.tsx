"use client";
export const dynamic = "force-dynamic";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const ClasesPage = () => {
  const [clases, setClases] = useState([]);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || '/api/mock/clases';

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => setClases(response.data))
      .catch(error => console.error('Error fetching clases:', error));
  }, [apiUrl]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Clases</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Nombre</th>
            <th className="py-2">Instructor</th>
            <th className="py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {(clases ?? []).map(clase => (
            <tr key={clase.id} className="border-t">
              <td className="py-2">{clase.id}</td>
              <td className="py-2">{clase.nombre}</td>
              <td className="py-2">{clase.instructor}</td>
              <td className="py-2">
                <Link href={`/clases/${clase.id}`} className="text-blue-500 hover:underline">Ver</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClasesPage;