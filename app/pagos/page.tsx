"use client";
export const dynamic = "force-dynamic";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const PagosPage = () => {
  const [pagos, setPagos] = useState([]);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || '/api/mock/pagos';

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => setPagos(response.data))
      .catch(error => console.error('Error fetching pagos:', error));
  }, [apiUrl]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Pagos</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Miembro</th>
            <th className="py-2">Monto</th>
            <th className="py-2">Fecha</th>
            <th className="py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {(pagos ?? []).map(pago => (
            <tr key={pago.id} className="border-t">
              <td className="py-2">{pago.id}</td>
              <td className="py-2">{pago.miembro}</td>
              <td className="py-2">{pago.monto}</td>
              <td className="py-2">{pago.fecha}</td>
              <td className="py-2">
                <Link href={`/pagos/${pago.id}`} className="text-blue-500 hover:underline">Ver</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PagosPage;