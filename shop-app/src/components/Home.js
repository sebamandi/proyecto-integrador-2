import React, { useState } from 'react';

import { importAllImages } from '../utilidades';

// Importar todas las imágenes desde la carpeta assets/images
const image = importAllImages(require.context('../assets/', false, /\.(png|jpe?g|svg|webp)$/));



function Home() {
  
  const products = [
    {
      id: 1,
      name: 'Patines Bauer Vapor 3x Pro',
      price: 650,
      description: 'Patín de gama alta para un gran desempeño en cancha! Contamos con todos los talles!',
      image: image['../assets/images/bauer vapo 3x pro.webp'],
    },
    {
      id: 2,
      name: 'Casco CCM 4500',
      price: 150,
      description: 'Casco de gama media, ideal para aquellos que quieran protegerse sin sumar peso extra. Consulte por talles especiales!',
      image: image['../assets/images/ccm casco.webp'],
    },
    {
      id: 3,
      name: 'Coderas Bauer Supreme',
      price: 75,
      description: 'Coderas de gama media, con protección de policarbonato para disminuir el peso sin perder seguridad! Cuenta con sujección de tres puntos para mayor confort!',
      image: image['../assets/images/codera bauer supreme.webp'],
    },
    {
      id: 4,
      name: 'Guantes CCM AS 580',
      price: 120,
      description: 'Guante de gama alta, cuenta con palma de doble capa, fabricada con cuero sintético para un mejor grip y durabilidad. Tenemos todos los talles!',
      image: image['../assets/images/guantes ccm.webp'],
    },
    {
      id: 5,
      name: 'Pads Warrior LX Pro',
      price: 130,
      description: 'Pads de gama alta a un precio especial! Modelo regular fit, para un mayor confort a la hora de jugar! Tenemos todos los talles!',
      image: image['../assets/images/pads warrior.webp'],
    },
    {
      id: 6,
      name: 'Stick Warrior Alpha LX',
      price: 85,
      description: 'Palo de gama media-alta, ideal para aquellos que necesiten llevar su tiro a los niveles más altos! Contamos con stock inmediato para zurdos o diestros, incluyendo 3 tipos de flex!',
      image: image['../assets/images/palo warrior.webp'],
    },
  ];

  // Estado para manejar el carrito
  const [cart, setCart] = useState([]);

  // Función para agregar productos al carrito
  const addToCart = (product) => {
    // Revisa si el producto está en el carrito
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    
    let updatedCart;
    if (existingProductIndex >= 0) {
      // si el producto ya está se le suma otro
      updatedCart = cart.map((item, index) =>
        index === existingProductIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      // si no está el producto suma 1
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }
    
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Guarda en el localstorage
    alert(`${product.name} se agregó al carrito`); // respuesta al usuario
  };

  return (
    <div className="home-page">
      <h1>Charrúas Hockey Shop</h1>
      <section className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Agregar al carrito</button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
