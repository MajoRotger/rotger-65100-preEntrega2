import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function ItemDetailContainer (){
    const [detail, setDetail] = useState(null)
    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(res => setDetail(res))
    },[id])

    return (
        <div>{detail?.title}</div>
        
    )
}

export default ItemDetailContainer