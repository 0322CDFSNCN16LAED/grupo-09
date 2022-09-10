import React, {useEffect, useState} from 'react'



function ArrayMiniCards() {

    const [productos, setProductos] = useState([])
    const fetchData = async ()=> {
        const data = await fetch('http://localhost:3001/api/products')
        const products = await data.json()
        const arrayProducts = products.products
        //console.log(products)
        setProductos(arrayProducts)
    }


    useEffect(()=>{
      
        fetchData()
    }, [])

    if(!productos) {
        return <div>Cargando...</div>
    }

    


    return(
        <>
        {productos.length}
        </>
    )
}

export default ArrayMiniCards;
