import estilo from "./Tecnologia.module.css"

function Tecnologia() {
    return (
        <div>
            <div className={estilo.titulo}>
                <h1>Tecnologias utilizadas para o projeto!</h1>
            </div>
            <div className={estilo.seguencia}>
                <div>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" style={{height: "97px"}}/>
                <h1>HTML</h1>
                </div>
                <div>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" style={{height: "97px"}}/>
                <h1>CSS</h1>
                </div>
                <div>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" style={{height: "97px"}}/>
                <h1>JavaScript</h1>
                </div>
                <div>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" style={{height: "97px"}}/>
                <h1>React.JS</h1>
                </div>
            </div>
        </div>
    )
}

export default Tecnologia