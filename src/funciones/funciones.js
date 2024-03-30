import axios from 'axios'

const allPersonajes = async (state) =>{
    const apipersonaje = await axios.get('https://rickandmortyapi.com/api/character')
    state(apipersonaje.data.results)

}
const uniquePersonaje = async (id,state) =>{
    const apipersonaje = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    console.log(apipersonaje.data)
    state(apipersonaje.data)
}   


export{
    allPersonajes,
    uniquePersonaje
}