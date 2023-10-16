import ExibePerfil from "../ExibePerfil/ExibePerfil";
import './Catalogo.css'

function Catalogo({titulo,listaP}){
    return(
        <div className="titulo">
        <h1>{titulo}</h1>
        <div className="catalogo">
            {listaP.map((p) => (
                
                <ExibePerfil nome={p.nome} img={p.img} ano={p.ano}/>
                
                ))}
        </div>
        </div>
    );
};

export default Catalogo;