"use client";
export const dynamic = "force-dynamic";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const MembresiasPage = () => {
  const [membresias, setMembresias] = useState([]);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || '/api/mock/membresias';

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => setMembresias(response.data))
      .catch(error => console.error('Error fetching membresias:', error));
  }, [apiUrl]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Membresías</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Tipo</th>
            <th className="py-2">Precio</th>
            <th className="py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {(membresias ?? []).map(membresia => (
            <tr key={membresia.id} className="border-t">
              <td className="py-2">{membresia.id}</td>
              <td className="py-2">{membresia.tipo}</td>
              <td className="py-2">{membresia.precio}</td>
              <td className="py-2">
                <Link href={`/membresias/${membresia.id}`} className="text-blue-500 hover:underline">Ver</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MembresiasPage;