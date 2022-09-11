
import BigCard from "../BigCard";
import {useEffect, useState} from "react"

export default function UltimoTour() {

    const [producto, setProducto] = useState(null)
    const fetchData = async ()=> {
        const data = await fetch('http://localhost:3001/api/products')
        const result = await data.json()
        const arrayProducts = result.products
        //console.log(products)
        setProducto(arrayProducts.pop())
            

    }
   

    useEffect(()=>{
      
        fetchData()
    }, [])

    console.log(producto);
    
    if(!producto) {
        return <div>Cargando...</div>
    }

    return (
        
        <BigCard title="Último tour creado:" >
            
            <div className="text-center">
                <img
                    className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                    style={{ width: "40rem" }}
                    src={`http://localhost:3001/images/productsimages/${producto.image}`}
                    alt={`${producto.name}`}
                />
            </div>
            <p>
               {producto.description}
                
            </p>
            
            <a
                className="btn btn-danger"
                target="_blank"
                rel="nofollow"
                href="/"
            >
                View movie detail
            </a>
        </BigCard>
    );
}
