import styles from './Login.module.css';

export function Login({ hidden = false }) {
  return (
    <form
      className={styles.popup}
      style={{
        visibility: hidden ? 'visible' : 'hidden',
      }}
    >
      <h1>ENTRAR</h1>
      <input type="text" placeholder="E-mail" />
      <input type="password" placeholder="Senha" />
      <div className={styles.handlerButtons}>
        <button type="cancel">CANCELAR</button>
        <button type="submit">LOGAR</button>
      </div>
    </form>
  );
}
