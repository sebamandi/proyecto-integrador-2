import React, { useState } from 'react';

function Contacto() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    comments: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formValues.name) newErrors.name = 'El nombre es requerido';
    if (!formValues.email || !/\S+@\S+\.\S+/.test(formValues.email)) newErrors.email = 'El email es inválido';
    if (!formValues.comments) newErrors.comments = 'Los comentarios son requeridos';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setSubmitted(true);
      alert('Formulario enviado con éxito');
      
    }
  };

  return (
    <main>
      <h1>Contacto</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p>{errors.name}</p>}

          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p>{errors.email}</p>}

          <label htmlFor="comments">Comentarios:</label>
          <textarea
            id="comments"
            name="comments"
            value={formValues.comments}
            onChange={handleChange}
            required
          ></textarea>
          {errors.comments && <p>{errors.comments}</p>}

          <button type="submit">Enviar</button>
        </form>
      ) : (
        <p>Gracias por contactarnos. Nos comunicaremos contigo pronto.</p>
      )}
    </main>
  );
}

export default Contacto;
