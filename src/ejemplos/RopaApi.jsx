import { useEffect, useState } from "react"

const RopaApi = () => {

    const [prendas, setPrenda] = useState(null)
    console.log(prendas)

    const url = "https://rararopa-f4c58-default-rtdb.firebaseio.com/prenda.json"

    // const url = "https://pokeapi.co/api/v2/pokemon/1"

    useEffect(() => {

        fetch(url)
        .then((response) => response.json())
        .then((data)=> {
            setPrenda(data)
        })
    },[])

    return (
        <div className="container my-5">
            <h2>Api Ropa</h2>
            <hr />

               
               {
                    prendas &&
                    
                    <div>
                        <h4>{prendas[1].nombre}</h4>
                        <img src={prendas[1].url_imagen} alt={prendas[1].nombre} width={200} height={200} />
                        {/* <img src={prenda.sprites.front_default} alt={prenda.name} /> */}
                    </div>

                   
               }
            
        </div>
    )
}
    
export default RopaApi
