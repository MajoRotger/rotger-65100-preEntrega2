import { getFirestore, collection, getDocs, query, where, doc, getDoc } from "firebase/firestore"
import {app} from "./config"

const db = getFirestore(app)

export const getProducts = async (setProducts) => {
    const querySnapshot = await getDocs(collection(db, "items"))
    const products = []

    querySnapshot.forEach((doc) => {
        products.push(doc.data())
    })

    setProducts(products)
}



export const getProductByCategory = async (category, setProducts) => {
    const itemsRef = collection(db, "items")
    const q = query(itemsRef, where("category", "==", category))
    const querySnapshot = await getDocs(q)
    const products = []

    querySnapshot.forEach((doc) => {
        products.push(doc.data())
    })

    setProducts(products)

}

export const getProduct = async (id, setDetail) => {
    const docRef = doc(db, "items", id)
    const docSnap = await getDoc(docRef)

    if(docSnap.exists()) {
        setDetail(docSnap.data())
    }else {
        console.log("No such document!")
    }
}