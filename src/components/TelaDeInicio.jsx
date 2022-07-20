import styles from './TelaDeInicio.module.css';
import { useState } from 'react';
import { Login } from './Login';
import { Registro } from './Registro';

export function TelaDeInicio() {
  const images = [
    'src/assets/bg1.jpg',
    'src/assets/bg2.jpg',
    'src/assets/bg3.jpg',
  ];
  const [currentImage, setCurrentImage] = useState(0);

  const [isShownRegistro, setIsShownRegistro] = useState(false);
  const [isShownLogin, setIsShownLogin] = useState(false);
  const handleClick = (event) => {
    if (event.target.id === 'register') {
      setIsShownRegistro(true);
      setIsShownLogin(false);
    } else if (event.target.id === 'login') {
      setIsShownRegistro(false);
      setIsShownLogin(true);
    }
  };
  setInterval(
    () =>
      currentImage === images.length - 1
        ? setCurrentImage(0)
        : setCurrentImage(currentImage + 1),
    10 * 1000,
  );

  return (
    <div
      className={styles.telaDeInicio}
      style={{
        backgroundImage: `url(${images[currentImage]})`,
      }}
    >
      <h1>TUDO O QUE VOCÊ É, EM UM SIMPLES CARTÃO.</h1>
      <h2>
        Junte-se a duas pessoas (Luiz e João) de pessoas e compartilhe tudo o
        que você cria, indica e vende online.
      </h2>
      <div className={styles.btns}>
        <button id="register" onClick={handleClick} className={styles.register}>
          REGISTRAR
        </button>
        <button id="login" onClick={handleClick} className={styles.login}>
          ENTRAR
        </button>
        <Registro hidden={isShownRegistro} />
        <Login hidden={isShownLogin} />
      </div>
    </div>
  );
}
