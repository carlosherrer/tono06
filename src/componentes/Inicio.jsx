import React,{useEffect,useState} from 'react'
import { allPersonajes } from '../funciones/funciones'


const Inicio = () => {

    const [personajes, setPersonaje] = useState(null)
    useEffect(()=>{
        allPersonajes(setPersonaje)
    },[])


  return (
    <>
        {personajes != null ? (personajes.map(personaje=> (

                <div key={personaje.id}>
                    <a href={`/personaje/${personaje.id}`}>{personaje.name}</a>
                </div>
            ))
        ):('Cargando') }

    </>
  )
}

export default Inicio