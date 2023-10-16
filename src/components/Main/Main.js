import Rapunzel from "../image/EnroladosPoster.jpg"
import Moana from "../image/MoanaPoster.jpg";
import Encanto from "../image/encanto.jpeg";
import Cinderela from "../image/Cinderela.jpg";
import Guardiao from "../image/guardiao-poster.jpg";
import HomemDeFerro from "../image/homem-de-ferro-poster.jpg";
import Vingadores from "../image/Vingadores-poster.jpg";
import ShadowHunters from "../image/shadow-hunters.jpg";
import Wandinha from "../image/Wandinha.jpg";
import StrangerThings from "../image/StrangerThings.jpg";
import AllOfUsAreDead from "../image/allOfUsAreDead.jpg";
import TheWitcher from "../image/TheWitcher.jpeg";
import SandMan from "../image/Sandman.jpg";
import Vikings from "../image/Vikings.jpg";
import Catalogo from "../Catalogo/Catalogo";
import './Main.css'

function Main (){

    const filmes = [
    {nome:"Moana", img:Moana, ano:2017},
    {nome:"Enrolados", img:Rapunzel, ano:2010},
    {nome:"Encanto", img:Encanto, ano:2021},
    {nome:"Cinderela", img:Cinderela, ano:1950},
    {nome:"Homem De Ferro", img:HomemDeFerro, ano:2008},
    {nome:"Vingadores", img:Vingadores, ano:2019 },
    {nome:"Guardiões Da Galáxia", img:Guardiao, ano:2014 },

    ]
    const series = [
        {nome:"ShadowHunters", img:ShadowHunters, ano:2017},
        {nome:"Wandinha", img:Wandinha, ano:2022},
        {nome:"StrangerThings", img:StrangerThings, ano:2016},
        {nome:"All Of Us Are Dead", img:AllOfUsAreDead, ano:2021},
        {nome:"Vikings", img:Vikings, ano:2013},
        {nome:"TheWitcher", img:TheWitcher, ano:2019 },
        {nome:"SandMan", img:SandMan, ano:2022 },

    ]
    return(
        
        <main>
            <Catalogo titulo={"Filmes Disney"}listaP={filmes}/>
            <Catalogo titulo={"Séries Netflix"}listaP={series}/>
        </main>
    );
};
export default Main;