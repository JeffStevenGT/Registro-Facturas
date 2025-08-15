import React, { useState } from "react";
import { datosFacturas } from "../datos/datosIniciales";
import { TablaFacturas } from "./TablaFacturas";
import { ModalFactura } from "./ModalFactura";

export const ListaFacturas = () => {
  const [facturas, setFacturas] = useState(datosFacturas);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [filtro, setFiltro] = useState("todos");

  const manejarEliminar = (id) => {
    setFacturas(facturas.filter((factura) => factura.id !== id));
  };

  const manejarAgregar = (nuevaFactura) => {
    const nuevaId = Math.max(...facturas.map((f) => f.id), 0) + 1;
    setFacturas([...facturas, { ...nuevaFactura, id: nuevaId }]);
  };

  const facturasFiltradas = facturas.filter((factura) => {
    if (filtro === "todos") return true;
    return factura.estado === filtro;
  });

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Lista de Facturas</h1>
        <button
          onClick={() => setMostrarModal(true)}
          className="w-10 h-10 text-2xl cursor-pointer bg-blue-600 text-white hover:bg-blue-800 rounded-full"
        >
          +
        </button>
      </div>

      <div className="flex gap-30 mb-4 pt-4 text-sm justify-center">
        <button
          onClick={() => setFiltro("todos")}
          className="px-2 py-1 rounded  text-white bg-blue-700 hover:bg-blue-900 transition-colors cursor-pointer"
        >
          Todos
        </button>
        <button
          onClick={() => setFiltro("pendiente")}
          className="px-2 py-1 rounded text-white bg-red-500 hover:bg-red-700 transition-colors cursor-pointer"
        >
          Pendientes
        </button>
        <button
          onClick={() => setFiltro("pagada")}
          className="px-2 py-1 rounded text-white bg-green-600 hover:bg-green-800 transition-colors cursor-pointer"
        >
          Pagadas
        </button>
      </div>

      <TablaFacturas
        facturas={facturasFiltradas}
        onEliminar={manejarEliminar}
      />

      <ModalFactura
        mostrar={mostrarModal}
        onCerrar={() => setMostrarModal(false)}
        onAgregar={manejarAgregar}
      />
    </div>
  );
};
