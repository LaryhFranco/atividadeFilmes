import './ExibePerfil.css'

function ExibePerfil({nome, img, ano}){
    
    return(
        <div className="div-exibe">
            <img className="img-exibe-perfil" src={img} alt={nome}/>
            <h4>{nome}</h4>
            <p>{ano}</p>
        </div>
    );
};
export default ExibePerfil;