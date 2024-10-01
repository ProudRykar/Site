import Logo from '../favicon/logo';
import style from './header.module.scss';

export default function Header() {
  return(
    <header className={style.header}>
      <div className={style.container}>
        <Logo/>
        <text className={style.headerText}>Жуков Никита (ProudRykar)</text>
      </div>
    </header>
  )
}