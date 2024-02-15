import { useEffect, useState } from "react"
import PrendasCard from "./PrendasCard"

const PrendasList = () => {
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    const [list, setList] = useState([])
    const [pagination, setPagination] = useState({
        next:null,
        previous:null
    })

    console.log(pagination);

    // const url = "https://rararopa-f4c58-default-rtdb.firebaseio.com/prenda.json"


    useEffect(() => {

        fetch(url)
        .then((response) => response.json())
        .then((data)=> {
            setList(data.results)
            setPagination({
                next: data.next,
                previous: data.previous
            })
        })
    },[url])

    const handleSiguiente = () => pagination.next && setUrl(pagination.next)
    const handleAnterior = () => pagination.previous && setUrl(pagination.previous)

    return (

        <div className="container my-5 p-3">

            <h2>Listado de prendas</h2>
            <hr />

            <button onClick={handleAnterior} className="btn btn-outline-primary mx-2">Anterior</button>
            <button onClick={handleSiguiente} className="btn btn-primary">Siguiente</button>

            <div className="row">

                {
                    list.map((prenda) => <PrendasCard key={prenda.name} url={prenda.url}/>)
                }

            </div>

          

        </div>

    )
        
    
}

export default PrendasList