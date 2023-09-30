import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Produtos.module.css";
import products from "./ProductsData";
import alimento from './AlimentoData';


/* Produtos de Limpeza  */
import limpadoperfumado from "./img/limpador-perfumado.png";
import limpezaseca from "./img/limpeza-seca.png"
import colgate from "./img/colgate.png"
import kit from "./img/Kit.png"

import multi from "./img/Multi-Tradicional.png"
import vassoura from "./img/Vassoura.png"
import wapli from "./img/wap-limpa.png"
import wap from "./img/wap.png"


function Produtos(){


  const settings = {
    infinite: true,
    slidesToShow: 5.8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000
  };

  return (
    <div>
      <div className={styles.limpeza}>
        <h1>Produtos de limpeza</h1>
      </div>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div className={styles.caixa} key={index} >
            <img src={product.image} className={styles.produto} alt={product.name} />
            <div className={styles.nome} style={{ whiteSpace: 'pre-wrap' }}>
              <h1>{product.name}</h1>
              <h2>{product.price}</h2>
            </div>
            <button className={styles.adicionar}>Adicionar</button>
          </div>
        ))}
        </Slider>

        <div className={styles.seguencia}>
          <div className={styles.caixa2}>
            <img src={limpadoperfumado} className={styles.produto}/>
            <h1>PRODUTO</h1>
            <h2>PREÇO</h2>
          </div>
          <div className={styles.caixa2}>
            <img src={limpezaseca} className={styles.produto}/>  
            <h1>PRODUTO</h1>
            <h2>PREÇO</h2>
          </div>
          <div className={styles.caixa2}>
          <img src={colgate} className={styles.produto}/>
            <h1>PRODUTO</h1>
            <h2>PREÇO</h2>
          </div>
          <div className={styles.caixa2}>
            <img src={kit} className={styles.produto}/>
            <h1>PRODUTO</h1>
            <h2>PREÇO</h2>
          </div>
        </div>

        <div className={styles.seguencia}>
          <div className={styles.caixa2}>
            <img src={multi} className={styles.produto}/>
            <h1>PRODUTO</h1>
            <h2>PREÇO</h2>
          </div>
          <div className={styles.caixa2}>
            <img src={vassoura} className={styles.produto}/>  
            <h1>PRODUTO</h1>
            <h2>PREÇO</h2>
          </div>
          <div className={styles.caixa2}>
          <img src={wapli} className={styles.produto}/>
            <h1>PRODUTO</h1>
            <h2>PREÇO</h2>
          </div>
          <div className={styles.caixa2}>
            <img src={wap} className={styles.produto}/>
            <h1>PRODUTO</h1>
            <h2>PREÇO</h2>
          </div>
        </div>

        <div className={styles.limpeza}> 
          <h1>Alimentos</h1>
        </div>
        
    </div>
  );
};

export default Produtos;


/* Produtos de alimentos

  Produtos de bebidas alcoolicas

  Produtos de bebidas normais
  
  
  
  <div className={styles.seguencia}>
          <div className={styles.caixa}>
            <h1>PRODUTO</h1>
            <h2>PREÇO</h2>
          </div>
          <div className={styles.caixa}>
            <h1>PRODUTO</h1>
            <h2>PREÇO</h2>
          </div>
          <div className={styles.caixa}>
            <h1>PRODUTO</h1>
            <h2>PREÇO</h2>
          </div>
          <div className={styles.caixa}>
            <h1>PRODUTO</h1>
            <h2>PREÇO</h2>
          </div>
        </div>
  
  
  
  */