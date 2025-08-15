import React from "react";

export const Factura = ({ factura, onEliminar }) => {
  // Determinar el color según el estado
  const estadoStyles = {
    pagada: "text-green-600",
    pendiente: "text-red-600",
  };

  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {factura.id}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
        {factura.numero}
      </td>
      <td className="px-6 py-4 text-sm text-gray-700">{factura.descripcion}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`px-2 py-1 text-xs font-semibold rounded-full ${
            estadoStyles[factura.estado]
          }`}
        >
          {factura.estado}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
        {factura.fecha}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-700">
        {factura.estado === "pagada" && (
          <button
            onClick={() => onEliminar(factura.id)}
            className="text-black px-1 border-black bg-gray-200 rounded-sm-black hover:bg-gray-400 font-xs cursor-pointer"
          >
            Del
          </button>
        )}
      </td>
    </tr>
  );
};
