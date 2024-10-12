import { useState, useEffect} from 'react'
import { getProductByCategory, getProducts } from '../firebase/db'
import ItemList from "./ItemList"
import { Container, Row } from "react-bootstrap"
import { useParams } from 'react-router-dom'
 

function ItemListContainer ({ welcomeMessage }) {
    const [items, setItems] = useState([])
    const {category} = useParams()

    useEffect(() => {
        getProducts(setItems)
        getProductByCategory(category, setItems)
    }, [category])

    
    return (
        <Container> 
            <Row xs={1} md={2} className="g-4">
                <div>
                    <h2>{welcomeMessage}</h2>
                    <ItemList items={items} />
                </div>
            </Row>
        </Container>
    )
}

export default ItemListContainer