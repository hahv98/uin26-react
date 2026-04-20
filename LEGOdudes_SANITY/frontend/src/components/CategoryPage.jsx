import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import client from "../helpers/client"

export default function CategoryPage(){
    const parameters = useParams()
    const [category, setCategory] = useState(null)

    useEffect(()=>{
        const query = "*[_type == 'category' && slug.current == $slug]{...}"
        async function fetchCategory(slug){
            const tempCategory = await client.fetch(query, {slug})
        setCategory(tempCategory[0])
    }

    fetchCategory(parameters.slug)
  },[parameters])
    console.log(category)

    
    return(
        <h2>{category?.categoryname}</h2>
    )
}