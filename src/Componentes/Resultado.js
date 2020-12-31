import React, { Component } from "react";
import Image from "./Image";
import Paginacion from "./Paginación"

class Resultado extends Component {

     handlImage = () => {

        const images = this.props.images;

        if (images.length === 0) return null;  
        console.log(images);
        return(
            <React.Fragment>
                <div className="col-12 p-5 row">

                    {images.map(imagen => (
                        
                        <Image
                        key={imagen.id}
                        imagen={imagen}
                        
                        />

                    ) ) }
                    
                </div>
                <Paginacion
                    paginaAnterior={this.props.paginaAnterior}
                    paginaSiguiente={this.props.paginaSiguiente}
                />
            </React.Fragment>
         );
     }
    render() {
        return(
           <React.Fragment>
               { this.handlImage()}
           </React.Fragment>
        );
    }
};

export default Resultado;