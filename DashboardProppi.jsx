import { useState } from 'react';

const tiendas = ['Tienda 01', 'Tienda 02', 'Tienda 03'];

const sampleData = [
  {
    fecha: '2025-04-09',
    tienda: 'Tienda 01',
    asistencia: ['Luis Pérez', 'Ana Gómez'],
    tareas: [
      { nombre: 'Limpieza de pisos', completada: true },
      { nombre: 'Pulido de vitrinas', completada: false },
      { nombre: 'Limpieza de baños', completada: true },
    ],
    supervisor: 'Fernando Niño',
    comentarios: 'Faltó pulido por falta de insumos.',
    foto: 'https://drive.google.com/photo/example1.jpg'
  },
  {
    fecha: '2025-04-09',
    tienda: 'Tienda 02',
    asistencia: ['Carlos Ruiz', 'Marta Sánchez'],
    tareas: [
      { nombre: 'Limpieza de pisos', completada: true },
      { nombre: 'Pulido de vitrinas', completada: true },
      { nombre: 'Limpieza de baños', completada: true },
    ],
    supervisor: 'Jesús Higadera',
    comentarios: 'Todo en orden.',
    foto: 'https://drive.google.com/photo/example2.jpg'
  }
];

export default function DashboardProppi() {
  const [fecha, setFecha] = useState('2025-04-09');
  const [tiendaSeleccionada, setTiendaSeleccionada] = useState(tiendas[0]);

  const dataFiltrada = sampleData.filter(
    (d) => d.fecha === fecha && d.tienda === tiendaSeleccionada
  );

  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard Diario - Proppi</h1>
      <div style={{ marginBottom: 10 }}>
        <label>Fecha: </label>
        <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
        <label style={{ marginLeft: 10 }}>Tienda: </label>
        <select value={tiendaSeleccionada} onChange={(e) => setTiendaSeleccionada(e.target.value)}>
          {tiendas.map((t, i) => (
            <option key={i} value={t}>{t}</option>
          ))}
        </select>
      </div>
      {dataFiltrada.length === 0 ? (
        <p>No hay datos para esta fecha y tienda.</p>
      ) : (
        dataFiltrada.map((entry, idx) => (
          <div key={idx} style={{ border: '1px solid #ccc', padding: 10, marginBottom: 10 }}>
            <h2>{entry.tienda}</h2>
            <p><strong>Supervisor:</strong> {entry.supervisor}</p>
            <p><strong>Asistencia:</strong> {entry.asistencia.join(', ')}</p>
            <ul>
              {entry.tareas.map((tarea, i) => (
                <li key={i}>{tarea.completada ? '✅' : '❌'} {tarea.nombre}</li>
              ))}
            </ul>
            <p><strong>Comentarios:</strong> {entry.comentarios}</p>
            <p><strong>Foto:</strong> <a href={entry.foto} target="_blank">Ver evidencia</a></p>
          </div>
        ))
      )}
    </div>
  );
}
