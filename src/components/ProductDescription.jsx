import { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaArrowLeft } from "react-icons/fa";
import { toast } from "react-toastify";
import { Modal, Button, Form } from "react-bootstrap";

const getCurrentSeason = () => {
  const month = new Date().getMonth() + 1;
  if ([12, 1, 2].includes(month)) return "verano";
  if ([3, 4, 5].includes(month)) return "otoño";
  if ([6, 7, 8].includes(month)) return "invierno";
  if ([9, 10, 11].includes(month)) return "primavera";
  return "todo el año";
};

export default function ProductDescription() {
  const { id } = useParams();
  const { products, loading } = useContext(CartContext);
  const product = products.find((p) => p.id === id);
  const currentSeason = getCurrentSeason();

  const isInSeason =
    product?.season === currentSeason || product?.season === "todo el año";
  const isInStock = product?.quantity > 0;

  const availabilityText = !isInStock
    ? "Por el momento no disponemos de este servicio."
    : !isInSeason
      ? `Disponible en: ${product?.season}`
      : "Disponible";

  const availabilityClass = !isInStock || !isInSeason ? "bg-danger" : "bg-success";

  const [showModal, setShowModal] = useState(false);
  const [preReservaData, setPreReservaData] = useState({
    nombre: "",
    email: ""
  });

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPreReservaData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitPreReserva = (e) => {
    e.preventDefault();
    if (!preReservaData.nombre || !preReservaData.email) {
      toast.warn("Por favor, completá todos los campos.");
      return;
    }

    toast.info(
      `¡Gracias ${preReservaData.nombre}! Tu pre-reserva fue registrada. Te contactaremos a ${preReservaData.email}.`
    );

    setPreReservaData({ nombre: "", email: "" });
    handleCloseModal();
  };

  if (loading) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p className="mt-3">Cargando servicio...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container text-center text-danger my-5">
        <h1 className="display-6">Servicio no encontrado</h1>
        <p className="lead">El servicio que estás buscando no existe o fue removido.</p>
        <Link to="/productos" className="btn btn-outline-success mt-3">
          Volver a la Galería de Servicios
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="mx-auto shadow rounded-4 p-4" style={{ maxWidth: "800px", backgroundColor: "#f9fdf9" }}>
        <h1 className="text-center fw-bold text-success mb-4">{product.name}</h1>
        <p className="text-center text-muted fst-italic mb-3">
          Al contratar nuestros servicios estás contribuyendo activamente con la regeneración de ecosistemas, el equilibrio ambiental y el bienestar de las comunidades.
        </p>

        <img
          src={product.image}
          alt={product.name}
          className="img-fluid rounded mb-4 mx-auto d-block"
          style={{ maxHeight: "400px", objectFit: "cover" }}
        />

        <p className="lead text-center text-muted mb-4">{product.description}</p>

        <div className="text-center mb-4">
          <p className="fw-bold text-success fs-5">Precio: ${product.price}</p>
          <p className="text-muted">Categoría: {product.category}</p>

          <span
            className={`badge ${availabilityClass} mb-3 d-block mx-auto`}
            style={{ width: "fit-content" }}
          >
            {availabilityText}
          </span>

          {!isInSeason && isInStock && (
            <button className="btn btn-outline-success" onClick={handleOpenModal}>
              Solicitar pre-reserva
            </button>
          )}
        </div>

        <div className="text-center mt-5">
          <Link to="/productos" className="btn btn-outline-success">
            <FaArrowLeft /> Volver
          </Link>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Pre-reserva de servicio</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmitPreReserva}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Nombre y apellido</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={preReservaData.nombre}
                onChange={handleChange}
                placeholder="Ej. Ana Martínez"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={preReservaData.email}
                onChange={handleChange}
                placeholder="Ej. ana@email.com"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancelar
            </Button>
            <Button variant="success" type="submit">
              Enviar pre-reserva
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}
