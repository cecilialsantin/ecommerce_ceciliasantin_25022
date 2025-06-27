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
    <div className="container text-center my-5">
      <h1 className="display-4 fw-bold text-success mb-4">
        Sobre NativePlant
      </h1>

      <img
        src="/images/aboutus.png"
        alt="Ilustración de plantación nativa"
        className="img-fluid my-5 rounded-4 shadow"
        style={{ maxWidth: "250px", border: "4px solid #cfe8d1" }}
      />

      <p className="lead text-muted fst-italic mx-auto mb-5" style={{ maxWidth: "800px", fontSize: "30px" }}>
        "Somos un equipo comprometido con la restauración ecológica y el diseño sustentable de espacios verdes.
        Promovemos el uso de flora nativa y prácticas regenerativas para crear entornos saludables, resilientes y en armonía con la biodiversidad local"
      </p>

      <div className="mb-5">
        <p className="text-muted fs-5 mx-auto" style={{ maxWidth: "800px", fontSize: "25px" }}>
          En un mundo cada vez más urbanizado, los espacios verdes bien diseñados son clave para la sostenibilidad. Los árboles y jardines nativos contribuyen a:
        </p>

        <div
          className="p-5 rounded-4 mx-auto"
          style={{
            maxWidth: "740px",
            background: "linear-gradient(135deg, #f0fdf4 0%, #e0f7e9 100%)",
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
            fontSize: "1.1rem"
          }}
        >
          <ul className="list-unstyled text-center">
            <li className="mb-3">🌿 <strong>Biodiversidad:</strong> hábitat y alimento para múltiples especies.</li>
            <li className="mb-3">💨 <strong>Aire más limpio:</strong> gracias a la absorción de contaminantes.</li>
            <li className="mb-3">❄️ <strong>Climas más frescos:</strong> menor consumo energético.</li>
            <li className="mb-3">💧 <strong>Infiltración natural:</strong> menos riesgo de inundaciones.</li>
            <li className="mb-3">🧠 <strong>Bienestar:</strong> contacto diario con la naturaleza.</li>
            <li>📈 <strong>Valor ambiental:</strong> atractivo económico y ecológico.</li>
          </ul>
        </div>

        <p className="text-muted fs-5 mt-4 mx-auto" style={{ maxWidth: "800px", fontSize: "25px" }}>
          Cada proyecto es una oportunidad para devolverle vida a los espacios intervenidos y restaurar el equilibrio entre lo urbano y lo natural.
        </p>
      </div>

      <h2 className="mb-5 text-success fw-semibold">
        Nuestro equipo
      </h2>

      <div className="row justify-content-center">
        {equipo.map((persona, i) => (
          <div className="col-md-4 mb-4" key={i}>
            <div className="card shadow-sm border-0 h-100 rounded-4 p-4" style={{ backgroundColor: "#f7fcf8" }}>
              <img
                src={persona.imagen}
                alt={persona.nombre}
                className="mx-auto d-block rounded-circle shadow"
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  border: "3px solid #c8e6c9"
                }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold text-success">{persona.nombre}</h5>
                <h6 className="card-subtitle text-muted mb-2">{persona.rol}</h6>
                <p className="card-text text-muted">{persona.descripcion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}
