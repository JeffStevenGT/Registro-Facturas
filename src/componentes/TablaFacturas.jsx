import React from "react";
import { Factura } from "./Factura";

export const TablaFacturas = ({ facturas, onEliminar }) => {
  return (
    <div className="border border-gray-200 flex justify-center">
      <table className="w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left  text-xs font-medium text-black uppercase "
            >
              ID
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-black uppercase "
            >
              Número Factura
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-black uppercase"
            >
              Descripción
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-black uppercase"
            >
              Estado
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-black uppercase"
            >
              Fecha
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-black uppercase"
            >
              Acción
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {facturas.map((factura) => (
            <Factura
              key={factura.id}
              factura={factura}
              onEliminar={onEliminar}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
