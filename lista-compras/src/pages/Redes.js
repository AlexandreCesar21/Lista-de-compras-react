import instagram from "./Instagram.png"
import linkedin from "./Linkedin.png"
import github from "./GitHub.png"
import estilo from "./Redes.module.css"

function Redes() {
    return (
        <div className={estilo.seguencia}>
            <div>  
            <a href="https://www.linkedin.com/in/alexandre-c%C3%A9sar-350726256/">
            <img src={linkedin} style={{height: "137px"}}/>
            </a>
            <h1>Linkdin</h1>
            </div>
            <div>
            <a href="https://www.instagram.com/alexandrecesar9477/">
            <img src={instagram}  style={{height: "137px"}}/>
            </a>
                <h1>Instagram</h1>
            </div>
            <div>
            <a href="https://github.com/AlexandreCesar21">
            <img src={github} style={{height: "137px"}}/>
            </a>
            <h1>GitHub</h1>
            </div>
        </div>
    )
}

export default Redes