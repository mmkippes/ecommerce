import React from 'react';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { useSimpleProduct } from '../hooks/useProducts';

const CenteredContainer = ({ children }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    {children}
  </div>
);

const Item = () => {
  const { id } = useParams();
  const { product, loading, error } = useSimpleProduct(id);

  if (loading) {
    return (
      <CenteredContainer>
        <Spinner animation="border" role="status">
          <span className="sr-only">Cargando...</span>
        </Spinner>
      </CenteredContainer>
    );
  }

  if (error) {
    return (
      <CenteredContainer>
        <p>Error: {error}</p>
      </CenteredContainer>
    );
  }

  if (!product) {
    return (
      <CenteredContainer>
        <p>No se encontró el producto.</p>
      </CenteredContainer>
    );
  }

  return <ItemDetailContainer product={product} />;
};

export default Item;
