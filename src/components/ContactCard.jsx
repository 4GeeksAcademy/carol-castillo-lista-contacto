import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import { MdOutlineModeEdit, MdDeleteOutline } from "react-icons/md";
import { FaUser, FaPhone } from "react-icons/fa";
import { FaLocationDot, FaEnvelope } from "react-icons/fa6";

const ContactCard = ({ contacts, onDelete }) => {
  const navigate = useNavigate();

  if (!contacts || contacts.length === 0) {
    return <h1>No hay contactos</h1>;
  }
  
  return (
    <div className="container">
      {contacts.map((contact) => (
        <div className="row" key={contact.id}>
          <div className="col-md-12">
            <div className="list-group">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="imagen">
                    <img
                      src="https://img.freepik.com/foto-gratis/estilo-vida-emociones-gente-concepto-casual-confiado-agradable-sonriente-mujer-asiatica-brazos-cruzados-pecho-seguro-listo-ayudar-escuchando-companeros-trabajo-participando-conversacion_1258-59335.jpg?semt=ais_hybrid&w=740"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <div className="align-self">
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                          <button className="btn me-md-2" type="button" onClick={() => navigate(`/edit/${contact.id}`)}>
                            <MdOutlineModeEdit className="icon-style" />
                          </button>
                          <button className="btn" type="button" onClick={() => onDelete(contact.id)}>
                            <MdDeleteOutline className="icon-style" />
                          </button>
                        </div>
                      </div>
                      <div className="card-style">
                        <p className="card-name"><FaUser /> {contact.name}</p>
                        <p className="text-body-secondary" > <FaLocationDot /> {contact.address}</p>
                        <p className="card-text">
                          <small className="text-body-secondary">
                           <FaPhone /> {contact.phone}
                          </small>
                        </p>
                        <p className="card-text">
                          <small className="text-body-secondary">
                            <FaEnvelope /> {contact.email}
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactCard;
