import React, { useState, useEffect } from "react";


import BigCard from "../BigCard";
import Tour from "./Tour";



function ToursInDb() {

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

    


    return(
        <div>
           
            <BigCard title="Tours en base de datos">
            
                <div className="row">

                {productos.map((product) => {
                        return (
                           <Tour {...product} key={product.id} />
                        
                        )
                    })
                }
                </div>
            </BigCard>
        </div>
    )
}

export default ToursInDb;
