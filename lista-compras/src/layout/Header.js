import styles from "./Header.module.css";
import sacola from './sacola.png';




function Header() {
    return (
        <header className={styles.header}>
             <div>
                <div class="img">
                    <img src={sacola} alt="" className={styles.img}/>
                </div>
                <div class="lista" className={styles.lista}>
                    <h1>LISTA DE PRODUTOS</h1> 
                </div>
            </div>

            <nav className={styles.nav}>
                <ul>
                    <li>
                        <a href="/">Inicio</a>
                    </li>
                    <li>
                        <a href="/Produtos">Produtos</a>
                    </li>
                    <li>
                        <a href="/Redes">Redes Sociais</a>
                    </li>
                    <li>
                        <a href="/Tecnologia">Tecnologias</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header