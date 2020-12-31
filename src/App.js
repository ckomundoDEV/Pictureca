import React, {  Component } from 'react';
import Buscador from './Componentes/Buscador';
import Resultado from './Componentes/Resultado';


class App extends Component {

    state={
      termino: '',
      image:[],
      pagina: 1
    }

    scroll = () => {
      const elemento = document.querySelector('.jumbotron');
      elemento.scrollIntoView('smooth','end');
    }

    consultaApi = () =>  {
      const termino = this.state.termino;
      const pagina = this.state.pagina;
      const url = `https://pixabay.com/api/?key=17911992-dfb4f517dceaa5f12b0dec242&q=${termino}&per_pag=30&page=${pagina}`;
  console.log(url);
        fetch(url)
            .then(respuest => respuest.json())
            .then(resultado => this.setState({image:resultado.hits}))
  
      this.scroll();
    }

  handleSearch = (termino) => {
         this.setState({
           termino:termino,
           pagina: 1
           
         }, ()=> {
          console.log(this.state.termino);
          console.log(this.state.pagina);
           this.consultaApi();

         })

console.log("aqui");
  }

    paginaSiguiente =  () => {
      let pagina = this.state.pagina;
      pagina += 1;
      
      console.log(pagina);

       this.setState({
         pagina 
       }, () => {
         this.consultaApi();
         this.scroll();
       });

       console.log(this.state.pagina);

    

    }

    paginaAnterior =  () => {
      let pagina =  this.state.pagina;
      if (pagina === 1) return null; 
       pagina -= 1;
      console.log(pagina);
      this.setState({
        pagina
      },() => {
        this.consultaApi();
        this.scroll();
      })
      console.log(this.state.pagina);
    }




  render(){
    return (
      <div className="app container">
        <div className="jumbotron">
            <p className="lead text-center">Buscador de imagenes </p>
            <Buscador
              mensaje="Ckomundo"
              handleSearch={this.handleSearch}

            />
        </div>
         <div className="row justify-content-center">
          <Resultado 
              images={this.state.image}
              paginaAnterior={this.paginaAnterior}
              paginaSiguiente={this.paginaSiguiente}
            />
         </div>
      </div>
    ); 
  }
}

export default App;
