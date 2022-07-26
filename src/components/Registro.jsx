import styles from './Registro.module.css';

export function Registro({ hidden = false }) {
  return (
    <div className={`${hidden ? '' : styles.active} ${styles.show}`}>
      <form className={styles.popup}>
        <h1>REGISTRE-SE</h1>
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Sobrenome" />
        <input type="text" placeholder="E-mail" />
        <input type="tel" placeholder="Contato" />
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Confirmar senha" />
        <div className={styles.handlerButtons}>
          <button onClick type="cancel">
            CANCELAR
          </button>
          <button type="submit">REGISTRAR</button>
        </div>
      </form>
    </div>
  );
}
