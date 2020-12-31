import React from "react";
const Paginacion = props => {

    const log = () => {
        console.log('anterior');
    }
   return(
    <div className="py-3">
        <button onClick={props.paginaAnterior} type="button" className="btn btn-info mr-1">Anterion </button>
        <button onClick={props.paginaSiguiente} type="button" className="btn btn-info ">Siguiente </button>
    </div>
   )
}

export default Paginacion