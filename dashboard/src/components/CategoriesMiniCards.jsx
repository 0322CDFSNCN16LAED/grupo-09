import React, {useEffect, useState} from 'react'



function CategoriesMiniCards() {

    const [categories, setCategories] = useState([])
    const fetchData = async ()=> {
        const data = await fetch('http://localhost:3001/api/categories')
        const categories = await data.json()
        const arrayCategories = categories.categories
        // console.log(categories.length)
        setCategories(arrayCategories)
    }


    useEffect(()=>{
      
        fetchData()
    }, [])

    if(!categories) {
        return <div>Cargando...</div>
    }

    


    return(
        <>
        {categories.length}
        </>
    )
}

export default CategoriesMiniCards;
