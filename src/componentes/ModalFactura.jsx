import React, { useState } from "react";

export const ModalFactura = ({ mostrar, onCerrar, onAgregar }) => {
  const [nuevaFactura, setNuevaFactura] = useState({
    numero: "",
    descripcion: "",
    estado: "pendiente",
    fecha: new Date().toLocaleDateString("es-ES"),
  });

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setNuevaFactura((prev) => ({ ...prev, [name]: value }));
  };

  const manejarSubmit = (e) => {
    e.preventDefault();
    onAgregar(nuevaFactura);
    onCerrar();
  };

  if (!mostrar) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="p-8 bg-white rounded-xl shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Agregar Nueva Factura
          </h2>
          <button
            onClick={onCerrar}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            &times;
          </button>
        </div>

        <form onSubmit={manejarSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Número Factura:
            </label>
            <input
              type="text"
              name="numero"
              value={nuevaFactura.numero}
              onChange={manejarCambio}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Descripción:
            </label>
            <input
              type="text"
              name="descripcion"
              value={nuevaFactura.descripcion}
              onChange={manejarCambio}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Estado:
            </label>
            <select
              name="estado"
              value={nuevaFactura.estado}
              onChange={manejarCambio}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="pendiente" className="text-sm">
                Pendiente
              </option>
              <option value="pagada" className="text-sm">
                Pagada
              </option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Fecha:
            </label>
            <input
              type="date"
              name="fecha"
              value={nuevaFactura.fecha}
              onChange={manejarCambio}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-center gap-3 pt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-800 transition-colors cursor-pointer"
            >
              Guardar Factura
            </button>
            <button
              type="button"
              onClick={onCerrar}
              className="px-4 py-2 bg-red-500  text-white rounded-md hover:bg-red-700 transition-colors cursor-pointer"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
