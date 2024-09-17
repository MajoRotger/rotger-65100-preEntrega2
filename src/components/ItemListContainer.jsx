

import { useState, useEffect} from 'react'

import ItemList from "./ItemList"
import { Container, Row } from "react-bootstrap"
import { useParams } from 'react-router-dom'
 

function ItemListContainer ({ welcomeMessage }) {
    const [items, setItems] = useState([])
    const {category} = useParams()

    useEffect(() => {
        fetch(`https://dummyjson.com/products`)
            .then(res => res.json())
            .then(res => {
                if(!category){
                    setItems(res.products)
                } else{
                    const productsByCategory = res.products.filter(item => item.category === category);
                    setItems(productsByCategory)
                    
                }})
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