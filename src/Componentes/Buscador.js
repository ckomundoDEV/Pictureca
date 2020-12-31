import React, { Component } from 'react';


class Buscador extends  Component {
    BusquedaRef = React.createRef();
    state = { 
        termino: ""
      }

    handleData = (e) => {
        e.preventDefault();

        const termino = this.BusquedaRef.current.value;

         this.props.handleSearch(termino);
    }

  
    render() {
        return(
            <form onSubmit={this.handleData}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.BusquedaRef} type="text" className="form-control form-control-lg" placeholder="Busca tu imagen. Por ejemplO: Pizza." />
                    </div>

                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscador..."/>
                    </div>

                </div>
            </form>
        );

        
    }


}

export default Buscador;