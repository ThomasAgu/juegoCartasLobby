import React from 'react'
import { useState } from 'react'
//comp[ont]
import Jugador from './Jugador'
import FormAgregarJugador from './FormAgregarJugador'

const Partida = () => {

    const [jugadores, setJugadores] = useState([])
    const [activate, setActivate] = useState(false)
    const [jugadoresListos, setJugadoresListos] = useState(0)

    const handleVoteEmpezar = () =>{
        console.log(jugadores)
        const nombre = sessionStorage.getItem('nombre');
        const jugadoresAct = jugadores.map((j) => { if(j.nombre === nombre){ 
            j.listo = true}
            return j
        });
        const boton = document.getElementById('botonEmpezar')
        boton.disabled = true
        setJugadores(jugadoresAct)
        setJugadoresListos(jugadoresListos => jugadoresListos + 1)
    }
    
    console.log(sessionStorage.getItem('nombre'))

  return (
    <div className=''>
        {
        jugadores.map((j) =>
            <Jugador key={j.nombre} nombre={j.nombre} listo={j.listo}/>
        )
        }
        <p>Jugadores listos:{jugadoresListos} / {jugadores.length}</p>
        {sessionStorage.getItem('nombre') === null?
            <button onClick={()=> setActivate(activate=> true)}>Agregar Jugador</button>
        :
            <button onClick={handleVoteEmpezar} id='botonEmpezar'>Empezar</button>
        }
        
        <FormAgregarJugador activate={activate} setActivate={setActivate} setJugadores={setJugadores}/>
    </div>
  )
}

export default Partida