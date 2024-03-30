import  React,{useEffect,useState} from 'react'
import { useParams } from 'react-router'
import { uniquePersonaje } from '../funciones/funciones'


const Personaje = () => {
    const [unicoper, setUnicoper]=useState(null)

    const params=useParams()

    
    useEffect(()=>{
        uniquePersonaje(params.id, setUnicoper)
        
    },[])

  return ( 
    <div className="personaje_contenedor">
        {unicoper != null ? (
            <div>
                <h2> {unicoper.name}</h2>
                <h4>ID: {params.id}</h4>
                <h4>specie: {unicoper.species}</h4>
                <h4>status: {unicoper.status}</h4>
                
                <img src={unicoper.image} alt={unicoper.name} />
                <h4>Location: {unicoper.location.name}</h4>
            </div>
        ):('Cargando personaje......') }
        
    </div>
    
  )
}

export default Personaje
