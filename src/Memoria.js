import React, { useState, useEffect } from 'react';
import './Memoria.css';
import Modal from 'react-modal';
import './Modal.css';

const imagensCartas = [
  'https://pm1.aminoapps.com/7875/2bf45bdfa6f540b220803fc928213441c56dd129r1-736-736v2_hq.jpg',
  'https://i.pinimg.com/736x/b3/ba/d9/b3bad9f0d3ffa2dff80838a0f8425a76.jpg',
  'https://ovicio.com.br/wp-content/uploads/2019/12/20191212-one-piece-luffy-samurai-wano-anime-1183702-1280x0-555x555.jpeg',
  'https://pbs.twimg.com/media/EElyrfLXYAEV0iA.png',
  'https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2023/05/16/oshi-no-ko-00-qe1lexqiosiu.jpg',
  'https://i.pinimg.com/1200x/1d/ca/12/1dca12205f40dc85e880bbd4c4ab92de.jpg',
  'https://i.pinimg.com/1200x/1d/ca/12/1dca12205f40dc85e880bbd4c4ab92de.jpg',
  'https://i.pinimg.com/736x/8f/f3/f8/8ff3f85d9777d7fac1342eb8a3a4b0dc.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt2pznObeyM1RAI9C7aVOYpn4FoPzsIThTsBMNpM7kQTXHLNlyIGEu_kQzK3UvJXRmHM8&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgSyH4a0sUJTuRirOgQwfwPkGdDEQnqPCIHg&usqp=CAU',
  'https://pbs.twimg.com/media/FUI_8H6X0AYE_X3.jpg:large',
  'https://i.pinimg.com/736x/d4/55/e2/d455e23ef5b4806f31382ae9027fe093.jpg',
  'https://i.pinimg.com/736x/21/1f/d2/211fd29a246c1b72cc537278d3a9af71.jpg',
  'https://i.pinimg.com/736x/01/d9/02/01d902b003ec3cc24b1de3a272efe27c.jpg',
  'https://i.pinimg.com/736x/21/df/0f/21df0f11c07d30388c758b0ba0f4b2fc.jpg',
  'https://i.pinimg.com/736x/b7/9c/6b/b79c6b66a0031d9be164170effe9d1a9.jpg',
  'https://i.pinimg.com/736x/90/b8/4f/90b84f2c640056bf7c136e6b64be5d43.jpg',
  'https://pbs.twimg.com/media/FxGmayfXgAEkiK-.jpg',
  'https://i.pinimg.com/736x/fa/1b/15/fa1b151f84c3477f30169deb2f121f7a.jpg',
  'https://i.pinimg.com/736x/d8/ae/42/d8ae420c3744a04aca72f305d12f1eea.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe4ZRXf5m7uwboCuhDpOmPIy6VYlC9LiyuYg&usqp=CAU',
  'https://i.pinimg.com/1200x/d5/c2/53/d5c2538ca0f7d1a2e6a515e7317fa9f6.jpg',
  'https://i.pinimg.com/736x/c3/27/37/c32737ef1224dea4c8627fad97f9ffc0.jpg',
  'https://i.pinimg.com/736x/f6/4a/9a/f64a9aebc0542bb13ebcd4686f4dd54f.jpg',
  'https://i.pinimg.com/736x/33/10/f0/3310f0d0097c8dbdcf610a912bcac562.jpg',
  'https://i.pinimg.com/1200x/bf/64/c5/bf64c572f0f6c5f11db8c6611c4a2775.jpg',
  'https://i.pinimg.com/736x/27/30/78/273078256be6dfe3170a5f69a08cd6a8.jpg',
  'https://i.pinimg.com/564x/94/12/a8/9412a85bbeb3422f370bb8acbd8c2b65.jpg',
  'https://i.pinimg.com/736x/07/42/4c/07424c24869ec82832e230e07b92e05c.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv9-x7ZGlK0TOJfA0sX5y0lLCw8Iu0OWuutQ&usqp=CAU',
  'https://i.pinimg.com/736x/67/74/9b/67749b94305873425e0e0417ed937d24.jpg',
  'https://i.pinimg.com/736x/1f/d1/f6/1fd1f6581d618ce245cb4756214b77e4.jpg',
  'https://i.pinimg.com/736x/8a/3e/8f/8a3e8fd759b839a4e5e8fef993b7ff87.jpg',
  'https://i.pinimg.com/736x/20/15/0d/20150db1524914f369ef03fa3b2171cf.jpg',
  'https://i.pinimg.com/474x/59/65/52/59655239d048121b1f111b096b97bfb0.jpg',
  'https://i.pinimg.com/736x/e7/b1/6d/e7b16d00cb3fe6d01195ff85dd11fa42.jpg',
  'https://i.pinimg.com/736x/fa/bf/7d/fabf7de2ba0e0c9c7725aebd32266df5.jpg',
  'https://i.pinimg.com/736x/92/a3/04/92a304ff8b58e9ddf2aeb77721a4a1e0.jpg',
  'https://i.pinimg.com/736x/8d/e8/ee/8de8eee444eec2d19350ffb9cdb44e3c.jpg',
  'https://i.pinimg.com/originals/c7/81/44/c7814489b02ee7f9e824722aedfbe434.png'
];

const embaralharCartas = (cartas) => {
  let cartasEmbaralhadas = cartas.slice();
  for (let i = cartasEmbaralhadas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cartasEmbaralhadas[i], cartasEmbaralhadas[j]] = [cartasEmbaralhadas[j], cartasEmbaralhadas[i]];
  }
  return cartasEmbaralhadas;
};

const Memoria = () => {
  const [cartas, setCartas] = useState([]);
  const [cartasViradas, setCartasViradas] = useState([]);
  const [cartasEncontradas, setCartasEncontradas] = useState([]);
  const [nivelJogo, setNivelJogo] = useState('facil');
  const [exibirModalVitoria, setExibirModalVitoria] = useState(false);

  const gerarCartas = () => {
    let numCartas;
    if (nivelJogo === 'facil') {
      numCartas = 8;
    } else if (nivelJogo === 'medio') {
      numCartas = 12;
    } else if (nivelJogo === 'dificil') {
      numCartas = 16;
    }
  
    const imagensEmbaralhadas = embaralharCartas(imagensCartas);
    const cartasFinais = imagensEmbaralhadas.slice(0, numCartas / 2);
    const cartasDuplicadas = [...cartasFinais, ...cartasFinais];
    setCartas(embaralharCartas(cartasDuplicadas));
  };
  
  useEffect(() => {
    gerarCartas();
  }, [nivelJogo]);
  
  
  const lidarComCliqueCarta = (indice) => {
    if (cartasViradas.length === 2 || cartasEncontradas.includes(indice)) {
      return;
    }

    setCartasViradas((cartasViradasAntigas) => [...cartasViradasAntigas, indice]);

    if (cartasViradas.length === 1) {
      const [primeiraCarta] = cartasViradas;
      if (cartas[primeiraCarta] === cartas[indice]) {
        setCartasEncontradas((cartasEncontradasAntigas) => [...cartasEncontradasAntigas, primeiraCarta, indice]);
      }
      setTimeout(() => {
        setCartasViradas([]);
      }, 1000);
    }
  };

  const renderizarCartas = () => {
    return cartas.map((carta, indice) => {
      const estaVirada = cartasViradas.includes(indice);
      const estaEncontrada = cartasEncontradas.includes(indice);
      return (
        <div
          key={indice}
          className={`carta ${estaVirada ? 'virada' : ''} ${estaEncontrada ? 'encontrada' : ''}`}
          onClick={() => lidarComCliqueCarta(indice)}
        >
          {estaVirada || estaEncontrada ? (
            <img src={carta} alt="Carta" />
          ) : (
            <div className="imagem-verso"></div>
          )}
        </div>
      );
    });
  };

  const reiniciarJogo = () => {
    setCartasViradas([]);
    setCartasEncontradas([]);
    setExibirModalVitoria(false);
  };

  const selecionarNivel = (nivel) => {
    setNivelJogo(nivel);
    reiniciarJogo();
  };

  useEffect(() => {
    if (cartasEncontradas.length === cartas.length && cartas.length !== 0) {
      setExibirModalVitoria(true);
    }
  }, [cartasEncontradas, cartas.length]);

  return (
    <div className="corpo">
      <div className="tabuleiro">{renderizarCartas()}</div>
      <div className="niveis">
        <button onClick={() => selecionarNivel('facil')}>Fácil</button>
        <button onClick={() => selecionarNivel('medio')}>Médio</button>
        <button onClick={() => selecionarNivel('dificil')}>Difícil</button>
      </div>

      {exibirModalVitoria && (
        <Modal
          isOpen={exibirModalVitoria}
          onRequestClose={reiniciarJogo}
          className="modal"
          overlayClassName="overlay"
        >
          <div className="mensagem-vitoria">Parabéns! Você venceu o jogo!</div>
          <button className="fechar-modal" onClick={reiniciarJogo}>
            Fechar
          </button>
        </Modal>
      )}
    </div>
  );
};

export default Memoria;
