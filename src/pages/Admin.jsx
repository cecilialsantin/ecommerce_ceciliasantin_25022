import AdminProducts from "../components/admin/AdminProducts";

export default function Admin() {
  return (
    <div className="container my-5">
      <h1 className="text-success mb-4">Panel de Administración</h1>
      <p className="text-muted">Acceso exclusivo para administrador.</p>

      {/* Acá se mostrarán los componentes de administración que podran ser 
      Servicios, Clientes, Estadisticas, etc */}
      <AdminProducts />
    </div>
  );
}
