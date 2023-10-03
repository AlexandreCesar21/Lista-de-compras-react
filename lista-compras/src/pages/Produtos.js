import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Produtos.module.css"
import products from "./ProductsData";
import alimento from './AlimentoData';
import alcoolicas from "./AlcoolicasData"
import normais from './Normais';


/* Produtos de Limpeza */
import limpadoperfumado from "./img/limpador-perfumado.png";
import limpezaseca from "./img/limpeza-seca.png"
import colgate from "./img/colgate.png"
import kit from "./img/Kit.png"

import multi from "./img/Multi-Tradicional.png"
import vassoura from "./img/Vassoura.png"
import wapli from "./img/wap-limpa.png"
import wap from "./img/wap.png"

/* Alimento */
import margarina from "./img1/MARGARINA.png"
import arroz from "./img1/arroz.png"
import cafe from "./img1/cafe.png"
import feijaocari from "./img1/feijao-carioca.png"

import pepino from "./img1/pepino.png"
import sadia from "./img1/sadia.png"
import seleta from "./img1/Seleta-de-Legumes.png"
import torrada from "./img1/torrada-.png"

/* Bebidas Alcoólicas*/
import herdade from "./img2/HerdadeRose102.png"
import vinhobr from "./img2/Vinho-Brasileiro-25.png"
import talisker from "./img2/Talisker.png"
import agardi from "./img2/agardi-whisky.png"

import cutty from "./img2/cutty-sark-scoth-whisky.png"
import jackdaniels from "./img2/whisky-jack-daniels.png"
import thefamous from "./img2/Whisky-the-famous-grouse.png"
import vinho16 from "./img2/Vinho16.png"


/* Bebidas normais */
import antioxi from "./img3/-produto-sucos-antioxidant.png"
import neon from "./img3/neon-framboesa-2l.png"
import ice from "./img3/_ice_syn.png"
import uva from "./img3/uva.png"

import nectar from "./img3/Suco-Nectar-Caju.png"
import coca from "./img3/-coca-cola-2l.png"
import cocalata from "./img3/coca-cola-lata.png"
import jes from "./img3/jes.png"



const settings = {
  infinite: true,
  slidesToShow: 5.8,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000
};

function Produtos(){
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

        <div className={styles.seguencia} >
          <div className={styles.caixa2} style={{height: "298px"}}>
            <img src={limpadoperfumado} className={styles.produto} style={{height: "197px"}}/>
            <h4>Limpador Perfumado</h4>
            <h2>R$44,50</h2>
            <button className={styles.adicionar}>Adicionar</button>
          </div>
          <div className={styles.caixa2} style={{height: "298px"}}>
            <img src={limpezaseca} className={styles.produto} style={{height: "197px"}}/>  
            <h4>Vassoura Esfregão</h4>
            <h2>R$105,26</h2>
            <button className={styles.adicionar}>Adicionar</button>
          </div>
          <div className={styles.caixa2} style={{height: "298px"}}>
          <img src={colgate} className={styles.produto} style={{height: "197px"}}/>
            <h4>Colgate</h4>
            <h2>R$8,00</h2>
            <button className={styles.adicionar}>Adicionar</button>
          </div>
          <div className={styles.caixa2} style={{height: "298px"}}>
            <img src={kit} className={styles.produto} style={{height: "197px"}}/>
            <h4>Kit Multiuso Ypé</h4>
            <h2>R$21,99</h2>
            <button className={styles.adicionar}>Adicionar</button>
          </div>
        </div>

        <div className={styles.seguencia}>
          <div className={styles.caixa2} style={{height: "298px"}}>
            <img src={multi} className={styles.produto} style={{height: "197px"}}/>
            <h1>Multiuso</h1>
            <h2>R$54,90</h2>
            <button className={styles.adicionar}>Adicionar</button>
          </div>
          <div className={styles.caixa2} style={{height: "298px"}}>
            <img src={vassoura} className={styles.produto} style={{height: "197px"}}/>  
            <h1>Vassoura</h1>
            <h2>R$40,00</h2>
            <button className={styles.adicionar}>Adicionar</button>
          </div>
          <div className={styles.caixa2} style={{height: "298px"}}>
          <img src={wapli} className={styles.produto} style={{height: "197px"}}/>
            <h4>Wap Limpa e Exatrai</h4>
            <h2>R$30,39</h2>
            <button className={styles.adicionar}>Adicionar</button>
          </div>
          <div className={styles.caixa2} style={{height: "298px"}}>
            <img src={wap} className={styles.produto} style={{height: "197px"}}/>
            <h3>Wap Aspirador</h3>
            <h2>R$178,80</h2>
            <button className={styles.adicionar}>Adicionar</button>
          </div>
        </div>

        
        
        <div className={styles.limpeza}> 
          <h1>Alimentos</h1>
        </div>

        <Slider {...settings}>
        {alimento.map((alimento, index) => (
          <div className={styles.caixa} key={index} >
            <img src={alimento.image} className={styles.produto} alt={alimento.name} />
            <div className={styles.nome} style={{ whiteSpace: 'pre-wrap' }}>
              <h1>{alimento.name}</h1>
              <h2>{alimento.price}</h2>
            </div>
            <button className={styles.adicionar}>Adicionar</button>
          </div>
        ))}
        </Slider>

        <div className={styles.seguencia}>
          <div className={styles.caixa2} style={{height: "298px"}}>
            <img src={margarina} className={styles.produto} style={{height: "197px"}}/>
            <h4>Margarina Vitarella</h4>
            <h2>R$5,59</h2>
            <button className={styles.adicionar}>Adicionar</button>
          </div>
          <div className={styles.caixa2} style={{height: "298px"}}>
            <img src={arroz} className={styles.produto} style={{height: "197px"}}/>  
            <h4>Arroz Urbano</h4>
            <h2>R$10,99</h2>
            <button className={styles.adicionar}>Adicionar</button>
          </div>
          <div className={styles.caixa2} style={{height: "298px"}}>
          <img src={cafe} className={styles.produto} style={{height: "197px"}}/>
            <h4>Café Caiçara</h4>
            <h2>R$31,34</h2>
            <button className={styles.adicionar}>Adicionar</button>
          </div>
          <div className={styles.caixa2} style={{height: "298px"}}>
            <img src={feijaocari} className={styles.produto} style={{height: "197px"}}/>
            <h4>Feijão Carioca</h4>
            <h2>R$7,39</h2>
            <button className={styles.adicionar}>Adicionar</button>
          </div>
        </div>

        <div className={styles.seguencia}>
          <div className={styles.caixa2} style={{height: "298px"}}>
            <img src={pepino} className={styles.produto} style={{height: "197px"}}/>
            <h4>Pepino</h4>
            <h2>R$15,47</h2>
            <button className={styles.adicionar}>Adicionar</button>
          </div>
          <div className={styles.caixa2} style={{height: "298px"}}>
            <img src={sadia} className={styles.produto} style={{height: "197px"}}/>  
            <h4>Nuggets de Frango</h4>
            <h2>R$13,99</h2>
            <button className={styles.adicionar}>Adicionar</button>
          </div>
          <div className={styles.caixa2} style={{height: "298px"}}>
          <img src={seleta} className={styles.produto} style={{height: "197px"}}/>
            <h4>Seleta Legumes</h4>
            <h2>R$5,29</h2>
            <button className={styles.adicionar}>Adicionar</button>
          </div>
          <div className={styles.caixa2} style={{height: "298px"}}>
            <img src={torrada} className={styles.produto} style={{height: "197px"}}/>
            <h4>Torrada Integral</h4>
            <h2>R$4,89</h2>
            <button className={styles.adicionar}>Adicionar</button>
          </div>
        </div>

        <div className={styles.limpeza}>
          <h1>Bebidas Alcoólicas</h1>
        </div> 

        <Slider {...settings}>
        {alcoolicas.map((alcoolicas, index) => (
          <div className={styles.caixa} key={index} >
            <img src={alcoolicas.image} className={styles.produto} alt={alcoolicas.name} />
            <div className={styles.nome} style={{ whiteSpace: 'pre-wrap' }}>
              <h1>{alcoolicas.name}</h1>
              <h2>{alcoolicas.price}</h2>
            </div>
            <button className={styles.adicionar}>Adicionar</button>
          </div>
        ))}
        </Slider>


        <div className={styles.seguencia}>
          <div className={styles.caixa2} style={{height: "298px"}}>
            <img src={herdade} className={styles.produto} style={{height: "197px"}}/>
            <h3>Mariana Vinho</h3>
            <h2>R$99,90</h2>
            <button className={styles.adicionar}>Adicionar</button>
          </div>
          <div className={styles.caixa2}  style={{height: "298px"}}>
            <img src={vinhobr} className={styles.produto} style={{height: "197px"}}/>  
            <h4>Vinho Quinta Rio Grande do Sul</h4>
            <h2>R$16,90</h2>
            <button className={styles.adicionar}>Adicionar</button>
          </div>
          <div className={styles.caixa2}  style={{height: "298px"}}>
          <img src={talisker} className={styles.produto} style={{height: "197px"}}/>
            <h3>Whisky Talisker</h3>
            <h2>R$581,54</h2>
            <button className={styles.adicionar}>Adicionar</button>
          </div>
          <div className={styles.caixa2}  style={{height: "298px"}}>
            <img src={agardi} className={styles.produto} style={{height: "197px"}}/>
            <h3>Agárdi Whisky</h3>
            <h2>R$102,16</h2>
            <button className={styles.adicionar}>Adicionar</button>
          </div>
        </div>

        <div className={styles.seguencia}>
          <div className={styles.caixa2} style={{height: "298px"}}>
            <img src={cutty} className={styles.produto} style={{height: "197px"}}/>
            <h3>Cutty Sark</h3>
            <h2>R$75,06</h2>
            <button className={styles.adicionar}>Adicionar</button>
          </div>
          <div className={styles.caixa2} style={{height: "298px"}}>
            <img src={jackdaniels} className={styles.produto} style={{height: "197px"}}/>  
            <h3>Jack Daniels</h3>
            <h2>R$171,54</h2>
            <button className={styles.adicionar}>Adicionar</button>
          </div>
          <div className={styles.caixa2} style={{height: "298px"}}>
          <img src={thefamous} className={styles.produto} style={{height: "197px"}}/>
            <h3>Famous Grouse</h3>
            <h2>R$ 699,41</h2>
            <button className={styles.adicionar}>Adicionar</button>
          </div>
          <div className={styles.caixa2} style={{height: "298px"}}>
            <img src={vinho16} className={styles.produto} style={{height: "197px"}}/>
            <h3>San Martin</h3>
            <h2>R$15,90</h2>
            <button className={styles.adicionar}>Adicionar</button>
          </div>
        </div>

        <div className={styles.limpeza}>
          <h1>Bebidas Refrescantes e Naturais</h1>
        </div>

        <Slider {...settings}>
        {normais.map((normais, index) => (
          <div className={styles.caixa} key={index} >
            <img src={normais.image} className={styles.produto} alt={normais.name} />
            <div className={styles.nome} style={{ whiteSpace: 'pre-wrap' }}>
              <h1>{normais.name}</h1>
              <h2>{normais.price}</h2>
            </div>
            <button className={styles.adicionar}>Adicionar</button>
          </div>
        ))}
        </Slider>

        <div className={styles.seguencia}>
          <div className={styles.caixa2} style={{height: "298px"}}>
            <img src={antioxi} className={styles.produto} style={{height: "197px"}}/>
            <h1>Açaí</h1>
            <h2>R$5,90</h2>
            <button className={styles.adicionar}>Adicionar</button>
          </div>
          <div className={styles.caixa2} style={{height: "298px"}}>
            <img src={neon} className={styles.produto} style={{height: "197px"}}/>  
            <h1>Neon</h1>
            <h2>R$6,50</h2>
            <button className={styles.adicionar}>Adicionar</button>
          </div>
          <div className={styles.caixa2} style={{height: "298px"}}>
          <img src={ice} className={styles.produto} style={{height: "197px"}}/>
            <h1>Ice Syn</h1>
            <h2>R$3,00</h2>
            <button className={styles.adicionar}>Adicionar</button>
          </div>
          <div className={styles.caixa2} style={{height: "298px"}}>
            <img src={uva} className={styles.produto} style={{height: "197px"}}/>
            <h3>Suco De Uva</h3>
            <h2>R$5,00</h2>
            <button className={styles.adicionar}>Adicionar</button>
          </div>
        </div>

        <div className={styles.seguencia}>
          <div className={styles.caixa2} style={{height: "298px"}}>
            <img src={nectar} className={styles.produto} style={{height: "197px"}}/>
            <h3>Suco Pamares Caju</h3>
            <h2>R$3,00</h2>
            <button className={styles.adicionar}>Adicionar</button>
          </div>
          <div className={styles.caixa2} style={{height: "298px"}}>
            <img src={coca} className={styles.produto} style={{height: "197px"}}/>  
            <h3>Coca-Cola 1L</h3>
            <h2>R$6,99</h2>
            <button className={styles.adicionar}>Adicionar</button>
          </div>
          <div className={styles.caixa2} style={{height: "298px"}}>
          <img src={cocalata} className={styles.produto} style={{height: "197px"}}/>
            <h3>Coca-Cola Lata</h3>
            <h2>R$2.45</h2>
            <button className={styles.adicionar}>Adicionar</button>
          </div>
          <div className={styles.caixa2} style={{height: "298px"}}>
            <img src={jes} className={styles.produto} style={{height: "197px"}}/>
            <h1>Jesus 1L</h1>
            <h2>R$16.99</h2>
            <button className={styles.adicionar}>Adicionar</button>
          </div>
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



        /*<div className={styles.limpeza}>
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
        </div>*/
