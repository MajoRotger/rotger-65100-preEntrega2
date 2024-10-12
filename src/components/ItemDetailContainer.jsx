import { useEffect, useState } from "react"
import { getProduct } from "../firebase/db"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer (){
    const [detail, setDetail] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        getProduct(id, setDetail)
    },[id])

    return (
        <ItemDetail detail={detail} />
        
    )
}

export default ItemDetailContainer