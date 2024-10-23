import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Recuperar los productos del carrito desde el localStorage
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, [isModalOpen]); // Actualiza los productos del carrito al abrir el modal

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  
  return (
    <header>
      <img src={'../assets/images/logo (2).png'} alt="Logo de hockey shop" />
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/alta">Alta de Productos</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
        </ul>
      </nav>
      <form action="#" method="GET">
        <input type="text" placeholder="Buscar..." />
        <button type="submit">Buscar</button>
      </form>

      {/* Botón del carrito */}
      <button onClick={toggleModal} title="Ver carrito">
        🛒 Carrito ({cartItems.length})
      </button>

      {/* Modal del carrito */}
      {isModalOpen && (
        <div className="cart-modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <h2>Tu Carrito</h2>
            {cartItems.length > 0 ? (
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index}>
                    {item.name} - ${item.price} x {item.quantity} = ${item.price * item.quantity}
                  </li>
                ))}
              </ul>
            ) : (
              <p>El carrito está vacío</p>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
