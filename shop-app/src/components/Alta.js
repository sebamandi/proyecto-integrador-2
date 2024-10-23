import React, { useState } from 'react';


function Alta() {
  const [formValues, setFormValues] = useState({
    name: '',
    price: '',
    stock: '',
    brand: '',
    category: '',
    shortDescription: '',
    longDescription: '',
    freeShipping: false,
    ageFrom: '',
    ageTo: '',
    photo: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setFormValues({ ...formValues, photo: e.target.files[0] });
  };

  const validate = () => {
    const newErrors = {};
    if (!formValues.name) newErrors.name = 'El nombre es requerido';
    if (!formValues.price || isNaN(formValues.price)) newErrors.price = 'El precio debe ser un número';
    if (!formValues.stock || isNaN(formValues.stock)) newErrors.stock = 'El stock debe ser un número';
    if (!formValues.brand) newErrors.brand = 'La marca es requerida';
    if (!formValues.category) newErrors.category = 'La categoría es requerida';
    if (!formValues.shortDescription) newErrors.shortDescription = 'La descripción corta es requerida';
    if (!formValues.longDescription) newErrors.longDescription = 'La descripción larga es requerida';
    if (!formValues.ageFrom || isNaN(formValues.ageFrom)) newErrors.ageFrom = 'Edad Desde debe ser un número';
    if (!formValues.ageTo || isNaN(formValues.ageTo)) newErrors.ageTo = 'Edad Hasta debe ser un número';
    if (!formValues.photo) newErrors.photo = 'La foto es requerida';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert('Producto agregado con éxito');
      // Lógica para agregar producto
    }
  };

  return (
    <main>
      <h1>Alta de Productos</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" value={formValues.name} onChange={handleChange} />
        {errors.name && <p>{errors.name}</p>}

        <label htmlFor="price">Precio:</label>
        <input type="number" id="price" name="price" value={formValues.price} onChange={handleChange} />
        {errors.price && <p>{errors.price}</p>}

        <label htmlFor="stock">Stock:</label>
        <input type="number" id="stock" name="stock" value={formValues.stock} onChange={handleChange} />
        {errors.stock && <p>{errors.stock}</p>}

        <label htmlFor="brand">Marca:</label>
        <input type="text" id="brand" name="brand" value={formValues.brand} onChange={handleChange} />
        {errors.brand && <p>{errors.brand}</p>}

        <label htmlFor="category">Categoría:</label>
        <input type="text" id="category" name="category" value={formValues.category} onChange={handleChange} />
        {errors.category && <p>{errors.category}</p>}

        <label htmlFor="shortDescription">Descripción Corta:</label>
        <textarea id="shortDescription" name="shortDescription" value={formValues.shortDescription} onChange={handleChange}></textarea>
        {errors.shortDescription && <p>{errors.shortDescription}</p>}

        <label htmlFor="longDescription">Descripción Larga:</label>
        <textarea id="longDescription" name="longDescription" value={formValues.longDescription} onChange={handleChange}></textarea>
        {errors.longDescription && <p>{errors.longDescription}</p>}

        <label htmlFor="freeShipping">Envío sin cargo:</label>
        <input type="checkbox" id="freeShipping" name="freeShipping" checked={formValues.freeShipping} onChange={handleChange} />

        <label htmlFor="ageFrom">Edad Desde:</label>
        <input type="number" id="ageFrom" name="ageFrom" value={formValues.ageFrom} onChange={handleChange} />
        {errors.ageFrom && <p>{errors.ageFrom}</p>}

        <label htmlFor="ageTo">Edad Hasta:</label>
        <input type="number" id="ageTo" name="ageTo" value={formValues.ageTo} onChange={handleChange} />
        {errors.ageTo && <p>{errors.ageTo}</p>}

        <label htmlFor="photo">Foto:</label>
        <input type="file" id="photo" name="photo" onChange={handleFileChange} />
        {errors.photo && <p>{errors.photo}</p>}

        <button type="submit">Agregar Producto</button>
      </form>
    </main>
  );
}

export default Alta;
