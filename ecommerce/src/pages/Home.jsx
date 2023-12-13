import React from 'react';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { useAllProducts } from '../hooks/useProducts';
import { Spinner } from 'react-bootstrap';

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

const Home = () => {
  const { products, loading, error } = useAllProducts();

  return (
    <CenteredContainer>
      {loading && <Spinner animation="border" role="status"><span className="sr-only">Cargando...</span></Spinner>}
      {error && <p>Error al cargar los productos.</p>}
      {!loading && !error && <ItemListContainer products={products} />}
    </CenteredContainer>
  );
};

export default Home;
