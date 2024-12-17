import React from 'react'
import { Card, CardBody } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = ({product}) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top'/>
      </Link>

      <CardBody>
        <Link to={`/product/${product._id}`}>
            <Card.Title as="div">
                <strong>{product.name}</strong>
            </Card.Title>
        </Link>
        <Card.Text as="div">
                <Rating value = {product.rating} text={`${product.numReviews} Reviews`} style={{color:"yellow"}}> </Rating>
        </Card.Text>
        <Card.Text as="h3">
                <strong>₹{product.price}</strong>
        </Card.Text>
      </CardBody>
    </Card>
  )
}

export default Product
