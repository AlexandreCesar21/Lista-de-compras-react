import instagram from "./Instagram.png"
import linkedin from "./Linkedin.png"
import github from "./GitHub.png"
import estilo from "./Redes.module.css"

function Redes() {
    return (
        <div>
            <div className={estilo.titulo}><h1>Minhas Redes Sociais</h1></div>
            <div className={estilo.seguencia}>
                <div className={estilo.caixa}>  
                <a href="https://www.linkedin.com/in/alexandre-c%C3%A9sar-350726256/" target="_blank" rel="external">
                <img src={linkedin} style={{height: "137px"}}/>
                </a>
                <h1>Linkdin</h1>
                </div>
                <div className={estilo.caixa}>
                <a href="https://www.instagram.com/alexandrecesar9477/" target="_blank" rel="external">
                <img src={instagram}  style={{height: "137px"}}/>
                </a>
                    <h1>Instagram</h1>
                </div>
                <div className={estilo.caixa}>
                <a href="https://github.com/AlexandreCesar21" target="_blank" rel="external">
                <img src={github} style={{height: "137px"}}/>
                </a>
                <h1>GitHub</h1>
                </div>
            </div>
        </div>
    )
}

export default Redes