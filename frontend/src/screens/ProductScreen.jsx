import { useParams } from "react-router-dom";
import React from 'react'
import { Link } from "react-router-dom";
import { Row, Col, Image, Card, ListGroup, Button, ListGroupItem } from "react-bootstrap";
import Rating from "../components/Rating";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductScreen = () => {
    const [ product, setProducts] = useState({})

    const {id: productId} = useParams()
    console.log("id---from paramss",productId,product)


    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const {data}  = await axios.get(`/api/products/${productId}`); // Relative URL
          console.log(data);
          setProducts(data)
        } catch (error) {
          console.error(error);
        }
      };    
      fetchProducts()
    },[productId])
 
  return (
    <>
      <Link className="btn btn-light" to='/' >
        Go Back
      </Link>

      <Row>
        <Col md={5}>
            <Image src={product.image} alt={product.name} fluid/>
        </Col>
        <Col md={4}>
            <ListGroup variant="flush">
                <ListGroupItem>
                    <h3>{product.name}</h3>
                </ListGroupItem>
                <ListGroupItem>
                    <Rating value = {product.rating} text={`${product.numReviews} Reviews`} > </Rating>
                </ListGroupItem>
                <ListGroupItem>
                   Price: ₹{`${product.price}`} 
                </ListGroupItem>
                <ListGroupItem>
                   Description: {`${product.description}`} 
                </ListGroupItem>
            </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>₹{product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>{product.countInStock > 0 ? 'In Stock' : 'out of Stock'}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button className="btn-block"
                        type="button"
                        disabled={product.countInStock === 0}>
                            Add Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
