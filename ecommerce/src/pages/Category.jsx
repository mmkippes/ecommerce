import React from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";
import { Spinner } from 'react-bootstrap';
import { useAllProductsByCategory } from "../hooks/useProducts";

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

const Category = () => {
  const { categoryId } = useParams();
  const { products, loading, error } = useAllProductsByCategory(categoryId);

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
        <p>Error al cargar los productos.</p>
      </CenteredContainer>
    );
  }

  if (!products || products.length === 0) {
    return (
      <CenteredContainer>
        <p>No hay productos disponibles en esta categoría.</p>
      </CenteredContainer>
    );
  }

  return <ItemListContainer products={products} />;
}

export default Category;
