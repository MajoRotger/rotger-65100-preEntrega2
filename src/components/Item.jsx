/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import './Item.css'
import { Link } from "react-router-dom"

function Item ({ products }) {
    return (
        <Col lg={4} className="mb-4">
            <Card className="h-100">
                <Card.Img variant="top" src={products.images[0]} alt={products.title} className="img-fluid item-image"></Card.Img>
                <Card.Body>
                    <Card.Title>{products.title}</Card.Title>
                    <Card.Text className="item-category">
                        {products.category}
                    </Card.Text>
                    <Card.Text className="item-description">
                        {products.description}
                    </Card.Text>
                </Card.Body>
                <Link to={`/product/${products.id}`} className="btn btn-dark">
                    More Info
                </Link>
            </Card>
        </Col>
    )
}

export default Item