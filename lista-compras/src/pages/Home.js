import styles from './Home.module.css';
import propaga from './logo2.avif'

function Home() {
    
    return (

        <div className={styles.caixa}>
            <h1>VENHA DESCOBRIR MELHORES OFERTAS DE PREÇOS EM PRODUTOS!</h1>
            <img src={propaga} className={styles.logo}/>
            
        </div>
            
    )
}

export default Home