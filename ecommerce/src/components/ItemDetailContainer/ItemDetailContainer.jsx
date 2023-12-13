import React from "react";
import { Card, Col } from "react-bootstrap"
import { ItemQuantitySelector } from "../ItemQuantitySelector";

const ItemDetailContainer = ({ product }) => {

    return (

        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",


            }}>


            <Card key={product.id} style={{ width: '18rem', margin: 20, height: "500px", }}>
                <Card.Img variant="top" src={product.thumbnail} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                </Card.Body>
                <Col className="text-center ">
                    <ItemQuantitySelector />
                </Col>

            </Card>



        </div>
    );
}

export default ItemDetailContainer;
