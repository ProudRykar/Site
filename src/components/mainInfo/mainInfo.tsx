import style from './mainInfo.module.scss';

export default function MainInfo() {
  return (
    <div className={style.container}>
      <div className={style.photo}>
        <div className={style.upLine}/>
        <img src='/img/ebalnik.jpg' alt="Ebalnik logo" width={300} height={300}/>
        <div className={style.downLine}/>
      </div>
    </div>
  )
}