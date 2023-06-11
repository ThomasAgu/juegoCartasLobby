import React from 'react'
import { useState } from 'react'

const FormAgregarJugador = ({activate, setActivate, setJugadores}) => {

    const [nombre, setNombre] = useState('')


    const handleAddJugador= (e) =>{
        const jugador = {nombre: nombre, listo: false}
        setNombre('');
        sessionStorage.setItem('nombre', nombre);
        setJugadores(jugadores => [...jugadores, jugador])
        setActivate(false)
    }

    const handleActivateComponent =() =>{
        if(activate){
            return(
                <form>
                    <label htmlFor="">Nombre</label>
                    <input type="text" name="" id=""  value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                    <button onClick={handleAddJugador}>Unirme</button>
                </form>
            )
        }
        else{
            return(<></>)
        }
    }
  return (
    handleActivateComponent()
  )
}

export default FormAgregarJugador