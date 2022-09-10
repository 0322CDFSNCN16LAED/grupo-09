import React, {useEffect, useState} from 'react'



function UsersMiniCards() {

    const [users, setUsers] = useState([])
    const fetchData = async ()=> {
        const data = await fetch('http://localhost:3001/api/users')
        const products = await data.json()
        const arrayUsers = products.users
        //console.log(products)
        setUsers(arrayUsers)
    }


    useEffect(()=>{
      
        fetchData()
    }, [])

    if(!users) {
        return <div>Cargando...</div>
    }

    


    return(
        <>
        {users.length}
        </>
    )
}

export default UsersMiniCards;
