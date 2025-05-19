export default function Aboutus() {
  const equipo = [
    {
      nombre: "Cecilia Santin",
      rol: "Fundadora y Asesora Técnica",
      descripcion: "Bosquicultora, especialista en restauración ecológica. Creadora de NativePlant.",
      imagen: "/images/cecilia.png"
    },
    {
      nombre: "Valentina Gutiérrez",
      rol: "Diseñadora de Espacios Verdes",
      descripcion: "Diseña jardines nativos urbanos que integran biodiversidad con estética y funcionalidad.",
      imagen: "/images/valentina.png"
    },
    {
      nombre: "Tomás Herrera",
      rol: "Coordinador de Proyectos",
      descripcion: "Lidera la implementación de microbosques y senderos ecológicos en espacios públicos y privados.",
      imagen: "/images/tomas.png"
    }
  ];

  return (
    <div className="container text-center">
      <h1 className="display-4 mb-4">Acerca de NativePlant</h1>

      <p className="lead mb-4">
        Somos un equipo comprometido con la restauración ecológica y el diseño sustentable de espacios verdes. Promovemos el uso de flora nativa y prácticas regenerativas para crear entornos saludables, resilientes y armónicos con la biodiversidad local.
      </p>

      <div className="mb-5">
        <p className="text-muted">
          En un mundo cada vez más urbanizado, los espacios verdes bien diseñados son clave para la sostenibilidad. Los árboles y jardines nativos contribuyen a:
        </p>
        <ul className="list-unstyled text-start mx-auto" style={{ maxWidth: "700px" }}>
          <li>🌿 Aumentar la biodiversidad urbana, brindando hábitat y alimento a múltiples especies.</li>
          <li>💨 Mejorar la calidad del aire al absorber contaminantes y partículas nocivas.</li>
          <li>❄️ Regular la temperatura de las ciudades, reduciendo el consumo energético.</li>
          <li>💧 Prevenir inundaciones mediante una mejor infiltración del agua en el suelo.</li>
          <li>🧠 Promover la salud física y mental de las personas que acceden a la naturaleza cercana.</li>
          <li>📈 Revalorizar propiedades y atraer actividades económicas sostenibles.</li>
        </ul>
        <p className="text-muted mt-3">
          Cada proyecto que desarrollamos es una oportunidad para devolverle vida a los espacios intervenidos y restaurar el equilibrio entre lo urbano y lo natural.
        </p>
      </div>

      <h2 className="mb-4 text-success">Nuestro equipo</h2>
      <div className="row justify-content-center">
        {equipo.map((persona, i) => (
          <div className="col-md-4 mb-4" key={i}>
            <div className="card h-100 shadow-sm">
              <img
                src={persona.imagen}
                alt={persona.nombre}
                className="mx-auto d-block rounded mb-3"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  border: "3px solid #c8e6c9"
                }}
              />
              <div className="card-body">
                <h5 className="card-title">{persona.nombre}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{persona.rol}</h6>
                <p className="card-text">{persona.descripcion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
