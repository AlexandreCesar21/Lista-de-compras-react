import styles from './Home.module.css';
import propaga from './logo2.avif'
import styless from "./Produtos.module.css"
import limpezaseca from "./img/limpeza-seca.png"
import feijaocari from "./img1/feijao-carioca.png"
import agardi from "./img2/agardi-whisky.png"
import ice from "./img3/_ice_syn.png"


function Home() {
    
    return (
        <div className={styles.caixa}>
            <h1>VENHA DESCOBRIR MELHORES PREÇOS!</h1>
            <img src={propaga} className={styles.logo}/>

            <div className={styless.seguencia} >
                <div className={styless.caixa2} style={{height: "248px", width: "180px" }}>
                    <img src={limpezaseca} className={styless.produto} style={{height: "197px"}}/>  
                    <h4>Vassoura Esfregão</h4>
                    <h2>R$105,26</h2>
                </div>
                <div className={styless.caixa2} style={{height: "248px", width: "180px" }}>
                    <img src={feijaocari} className={styless.produto} style={{height: "197px"}}/>
                    <h4>Feijão Carioca</h4>
                    <h2>R$7,39</h2>
                </div>
                <div className={styless.caixa2}  style={{height: "248px", width: "180px" }}>
                    <img src={agardi} className={styless.produto} style={{height: "197px"}}/>
                    <h3>Agárdi Whisky</h3>
                    <h2>R$102,16</h2>
                </div>
                <div className={styless.caixa2} style={{height: "248px", width: "180px" }}>
                    <img src={ice} className={styless.produto} style={{height: "197px"}}/>
                    <h2>Ice Syn</h2>
                    <h2>R$3,00</h2>
                </div>
            </div>


        </div>
            
    )
}

export default Home