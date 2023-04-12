import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { fetchContact } from "../helpers/fetchContact";
import Recaptcha from "./Recaptcha";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  const [send, setSend] = useState(false);
  const [recaptcha, setRecaptcha] = useState(false);

  return (
    <>
      <div>
        <h1>Contacto</h1>
      </div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          msg: "",
          rc: false,
        }}
        validate={({ msg, email, name, rc }) => {
          rc = recaptcha;
          let errs = {};
          //name validation
          if (!name) {
            errs.name = "Name is required";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(name)) {
            errs.name = "Solo letras y espacios son permitidos";
          }

          //email validation
          if (!email) {
            errs.email = "Email is required";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)
          ) {
            errs.email = "Formato del correo inválido";
          }

          if (!msg) {
            errs.msg = "El mensaje es requerido";
          }
          if (!recaptcha) {
            errs.rc = "Validación de ReCaptcha necesaria";
          }
          return errs;
        }}
        onSubmit={(values, { resetForm }) => {
          resetForm();
          setSend(true);
          delete values.rc;
          fetchContact(values);
          setTimeout(() => {
            setSend(false);
          }, 3000);
        }}
      >
        {({ errors }) => (
          <Form>
            <div className="m-auto">
              <div className="mb-3">
                <label className="form-label" htmlFor="name">
                  Nombre completo
                </label>
                <Field
                  type="text"
                  className="form-control"
                  placeholder="Nombre completo"
                  name="name"
                  id="name"
                />
                <ErrorMessage
                  name="name"
                  component={() => {
                    return <p style={{ color: "tomato" }}>{errors.name}</p>;
                  }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Correo electrónico
                </label>
                <Field
                  type="email"
                  className="form-control"
                  placeholder="Tú correo electrónico"
                  name="email"
                  id="email"
                />
                <ErrorMessage
                  name="email"
                  component={() => {
                    return <p style={{ color: "tomato" }}>{errors.email}</p>;
                  }}
                />
              </div>
              <div className="mb-3 ">
                <label className="form-label" htmlFor="msg">
                  Mensaje
                </label>
                <Field
                  as="textarea"
                  className="form-control"
                  name="msg"
                  placeholder="Mensaje"
                  rows="3"
                  id="msg"
                ></Field>
                <ErrorMessage
                  name="msg"
                  component={() => {
                    return <p style={{ color: "tomato" }}>{errors.msg}</p>;
                  }}
                />
              </div>
              <div className="mb-3 ">
                <Recaptcha name="rc" setRecaptcha={setRecaptcha} />
                <ErrorMessage
                  name="rc"
                  component={() => {
                    return <p style={{ color: "tomato" }}>{errors.rc}</p>;
                  }}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
              {send && <p style={{ color: "greenyellow" }}>Correo enviado</p>}
            </div>
          </Form>
        )}
      </Formik>
      <footer className="container mt-5">
        <div className="text-center">
          <a
            href="https://github.com/SeanCasm?tab=repositories"
            alt="github logo"
          >
            <AiFillGithub size={48} />
          </a>
          <a
            href="https://www.linkedin.com/in/sebastian-cataldo/"
            alt="linkedin logo"
          >
            <AiFillLinkedin size={48} />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Contact;
