import style from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerLogo}>GreenMaps</div>
      <ul className={style.footerLinks}>
        <li><a href="#">Início</a></li>
        <li><a href="#">Coleta Seletiva</a></li>
        <li><a href="#">Lixo Eletrônico</a></li>
        <li><a href="#">Referências</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
      <div className={style.footerCopy}>© 2026 GreenMaps. Desenvolvidos por Estudantes do IFTO.</div>
    </footer>
  )
}

export default Footer